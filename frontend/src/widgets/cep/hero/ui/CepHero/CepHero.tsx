import Image from "next/image";

import styles from "./CepHero.module.scss";

const PANELS = [
  {
    src: "/cep/strip-1.webp",
    alt: "Карьерный самосвал с углём на отвале разреза",
  },
  {
    src: "/cep/strip-2.webp",
    alt: "Роторный экскаватор на буроугольном разрезе",
  },
  {
    src: "/cep/strip-3.webp",
    alt: "Подземная выработка: крепь, самосвал и горняк",
  },
  {
    src: "/cep/strip-4.webp",
    alt: "Роторные экскаваторы на вскрышных отвалах",
  },
  {
    src: "/cep/strip-5.webp",
    alt: "Ночная смена на разрезе: освещённая техника",
  },
];

const SIZES = "(min-width: 1440px) 24vw, (min-width: 768px) 38vw, 55vw";

export function CepHero() {
  return (
    <section
      id="cep-hero"
      className={styles.root}
      aria-labelledby="cep-hero-title"
    >
      <div className={styles.strip}>
        {PANELS.map((panel, index) => (
          <div key={panel.src} className={styles.panel}>
            <Image
              className={styles.image}
              src={panel.src}
              alt={panel.alt}
              fill
              sizes={SIZES}
              quality={90}
              preload={index < 3 ? true : undefined}
              loading={index < 3 ? undefined : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className={styles.shade} />

      <div className={styles.inner}>
        <div className={styles.texts}>
          <p className={styles.kicker}>Центр независимой экспертизы</p>

          <h1 id="cep-hero-title" className={styles.title}>
            ЦЭП ООО «СКК»
          </h1>
        </div>

        <p className={styles.tagline}>
          устанавливаем технические причины аварий и инцидентов на опасных
          производственных объектах
        </p>
      </div>
    </section>
  );
}
