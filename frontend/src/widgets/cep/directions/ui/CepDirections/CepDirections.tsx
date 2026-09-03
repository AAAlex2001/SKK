import Image from "next/image";

import { CEP_EXPERT_DIRECTIONS } from "../../model/directions";

import styles from "./CepDirections.module.scss";

interface DirectionMedia {
  src: string;
  alt: string;
  className: string;
  dimmed?: boolean;
}

const DIRECTION_MEDIA: Record<string, DirectionMedia> = {
  underground: {
    src: "/cep/underground.webp",
    alt: "Горняк и подземный самосвал в горной выработке с бетонной крепью",
    className: styles.mediaUnderground,
    dimmed: true,
  },
  "open-pit": {
    src: "/cep/open-pit.webp",
    alt: "Карьерный самосвал у забоя с угольными пластами на открытых горных работах",
    className: styles.mediaOpenPit,
  },
  processing: {
    src: "/cep/processing.webp",
    alt: "Роторная перегрузочная машина с конвейерной эстакадой на штабеле угля",
    className: styles.mediaProcessing,
    dimmed: true,
  },
};

export function CepDirections() {
  return (
    <section
      id="cep-directions"
      className={styles.root}
      aria-labelledby="cep-directions-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="cep-directions-title" className={styles.title}>
            Экспертный состав
          </h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Компетенции подбираются под конкретную аварию и профиль объекта —
            группа экспертов формируется отдельно под каждое расследование.
          </p>
        </div>

        <ul className={styles.list}>
          {CEP_EXPERT_DIRECTIONS.map((direction) => {
            const media = DIRECTION_MEDIA[direction.id];
            const overlayClassName = media.dimmed
              ? `${styles.overlay} ${styles.overlayDimmed}`
              : styles.overlay;

            return (
              <li key={direction.id} className={styles.item}>
                <article className={styles.card}>
                  <Image
                    className={`${styles.media} ${media.className}`}
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(min-width: 1440px) 1340px, (min-width: 768px) 668px, 100vw"
                  />

                  <span className={overlayClassName} />

                  <div className={styles.content}>
                    <p className={styles.subtitle}>{direction.subtitle}</p>
                    <h3 className={styles.cardTitle}>{direction.title}</h3>

                    <ul className={styles.items}>
                      {direction.items.map((item) => (
                        <li key={item} className={styles.itemRow}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
