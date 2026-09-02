import Image from "next/image";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer id="contacts" className={styles.root}>
      <div className={styles.backgroundWrap}>
        <Image
          className={styles.background}
          src="/footer.webp"
          alt=""
          fill
          sizes="(min-width: 768px) 600px, 100vw"
        />
      </div>

      <span className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши контакты</h2>
          <span className={styles.rule} />
        </div>

        <div className={styles.contacts}>
          <div className={styles.person}>
            <span className={styles.role}>Генеральный директор</span>
            <span className={styles.name}>Ванякин Олег Владимирович</span>
          </div>

          <a className={styles.phone} href="tel:+79234674950">
            +7 923 467-49-50
          </a>
        </div>
      </div>
    </footer>
  );
}
