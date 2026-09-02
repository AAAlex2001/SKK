export interface PartnerLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
}

export interface PartnerRow {
  gap: number;
  logos: PartnerLogo[];
}

export const PARTNER_ROWS: PartnerRow[] = [
  {
    gap: 50,
    logos: [
      {
        src: "/partners/alrosa.svg",
        alt: "АЛРОСА",
        width: 145,
        height: 62,
        href: "https://www.alrosa.ru",
      },
      {
        src: "/partners/sibantracit.svg",
        alt: "Сибантрацит",
        width: 131,
        height: 69,
      },
      {
        src: "/partners/evraz.svg",
        alt: "ЕВРАЗ",
        width: 194,
        height: 46,
        href: "https://www.evraz.com",
      },
      {
        src: "/partners/suek.svg",
        alt: "СУЭК",
        width: 152,
        height: 59,
        href: "https://www.suek.ru",
      },
    ],
  },
  {
    gap: 73,
    logos: [
      {
        src: "/partners/mechel.webp",
        alt: "Мечел",
        width: 186,
        height: 49,
        href: "https://www.mechel.ru",
      },
      {
        src: "/partners/sds-ugol.svg",
        alt: "СДС-Уголь",
        width: 128,
        height: 70,
      },
      {
        src: "/partners/ugmk.webp",
        alt: "УГМК",
        width: 72,
        height: 100,
        href: "https://www.ugmk.com",
      },
      {
        src: "/partners/polyus.svg",
        alt: "Полюс",
        width: 206,
        height: 44,
        href: "https://polyus.com",
      },
      {
        src: "/partners/kru.svg",
        alt: "Кузбассразрезуголь",
        width: 320,
        height: 25,
        href: "https://kru.ru",
      },
    ],
  },
  {
    gap: 50,
    logos: [
      { src: "/partners/topprom.webp", alt: "Топпром", width: 185, height: 49 },
      {
        src: "/partners/sever_kuzbass.webp",
        alt: "Северный Кузбасс",
        width: 175,
        height: 52,
      },
      { src: "/partners/kmaruda.webp", alt: "КМАруда", width: 161, height: 56 },
      {
        src: "/partners/raspadskaya.webp",
        alt: "Распадская",
        width: 215,
        height: 42,
      },
    ],
  },
  {
    gap: 50,
    logos: [
      {
        src: "/partners/uralkaliy.webp",
        alt: "Уралкалий",
        width: 117,
        height: 77,
        href: "https://www.uralkali.com",
      },
      { src: "/partners/yashkino.webp", alt: "Яшкино", width: 154, height: 58 },
      { src: "/partners/hakasiya.webp", alt: "Хакасия", width: 147, height: 61 },
      {
        src: "/partners/belovskiy_rayon.webp",
        alt: "Беловский район",
        width: 82,
        height: 100,
      },
    ],
  },
];
