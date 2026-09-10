# Развёртывание skk-n.ru

Сервер: `200.169.180.224` · Домен: `skk-n.ru` (A-запись уже указывает на сервер)

Раскладка на сервере:

```
/root/frontend    приложение (исходники Next.js)
/root/deploy      конфиги отсюда (см. шаг 0)
```

Команды с пометкой **[локально]** выполняются на своей машине, остальные — на
сервере под `root`.

---

## 0. Доставить конфиги на сервер

**[локально]** из корня репозитория:

```powershell
scp -r deploy root@200.169.180.224:/root/
```

## 1. Разведка

```bash
cat /etc/os-release | head -2
node -v 2>/dev/null || echo "node не установлен"
nginx -v 2>&1 || echo "nginx не установлен"
free -h
df -h /
ls /root/frontend
```

Что нужно увидеть: Node **не ниже 20.9.0**, в `/root/frontend` — `package.json`,
`package-lock.json`, `next.config.ts`, `public/`, `src/`.

---

## 2. Node.js 22 LTS

Если Node отсутствует или старее 20.9:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
node -v && npm -v
```

## 3. Swap (если ОЗУ меньше 2 ГБ)

Сборка Next может не уложиться в память и упасть с `Killed`.

```bash
fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
free -h
```

## 4. Установка зависимостей и сборка

```bash
cd /root/frontend
npm ci
npm run build
```

`npm ci` ставит ровно то, что записано в `package-lock.json`, включая `sharp`
(нужен для оптимизации картинок) и linux-бинарники SWC.

Проверка, что сборка живая:

```bash
cd /root/frontend
npm run start -- -H 127.0.0.1 -p 3000 &
sleep 4
curl -sI http://127.0.0.1:3000/ | head -3
curl -sI http://127.0.0.1:3000/cep | head -3
kill %1
```

Оба ответа должны быть `HTTP/1.1 200 OK`.

## 5. Автозапуск через systemd

```bash
cp /root/deploy/skk.service /etc/systemd/system/skk.service
systemctl daemon-reload
systemctl enable --now skk
systemctl status skk --no-pager
```

Логи: `journalctl -u skk -f`

## 6. Nginx

```bash
apt-get install -y nginx
cp /root/deploy/nginx-skk.conf /etc/nginx/sites-available/skk
ln -sf /etc/nginx/sites-available/skk /etc/nginx/sites-enabled/skk
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
curl -sI http://skk-n.ru/ | head -3
```

## 7. HTTPS

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d skk-n.ru -d www.skk-n.ru --agree-tos -m skk-n@mail.ru --redirect
certbot renew --dry-run
```

Certbot сам допишет в конфиг блок `listen 443 ssl` и редирект с http.

## 8. Файрвол

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
ufw status
```

Порт 3000 наружу открывать не нужно: приложение слушает только `127.0.0.1`.

---

## Обновление сайта

**[локально]** залить изменения:

```powershell
scp -r frontend/src frontend/public frontend/package.json frontend/package-lock.json frontend/next.config.ts root@200.169.180.224:/root/frontend/
```

На сервере:

```bash
cd /root/frontend
npm ci
npm run build
systemctl restart skk
```

Если конфиги деплоя менялись — заново `scp -r deploy root@200.169.180.224:/root/`
и повторить шаги 5–6.

## Диагностика

| Симптом | Куда смотреть |
|---|---|
| 502 Bad Gateway | `systemctl status skk`, `journalctl -u skk -n 50` |
| Картинки не грузятся | `ls /root/frontend/node_modules/@img` — должен быть `sharp-linux-x64` |
| Сборка падает с `Killed` | не хватило памяти, см. шаг 3 (swap) |
| Шрифт не тот | `ls /root/frontend/node_modules/@qpokychuk/gilroy/src` — должны быть `.woff` |
| Изменения не видны | `systemctl restart skk`, затем Ctrl+F5 в браузере |
