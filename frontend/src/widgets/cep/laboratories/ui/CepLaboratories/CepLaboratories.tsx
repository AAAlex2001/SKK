import Image from "next/image";

import {
  CEP_LABORATORIES,
  CEP_LABORATORIES_NOTE,
} from "../../model/laboratories";
import { LaboratoriesMarquee } from "../LaboratoriesMarquee/LaboratoriesMarquee";

import styles from "./CepLaboratories.module.scss";

export function CepLaboratories() {
  return (
    <section
      id="cep-laboratories"
      className={styles.root}
      aria-labelledby="cep-laboratories-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="cep-laboratories-title" className={styles.title}>
            Профильные лаборатории
          </h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Подключаются по необходимости — состав исследований определяется
            обстоятельствами аварии.
          </p>
        </div>

        <div className={styles.media}>
          <Image
            className={styles.mediaImage}
            src="/cep/laboratory.webp"
            alt="Испытательные стенды и разрывные машины в лаборатории"
            fill
            sizes="(min-width: 1440px) 620px, (min-width: 768px) 668px, 100vw"
          />

          <span className={styles.count}>
            <span className={styles.countValue}>12</span>
            <span className={styles.countLabel}>направлений</span>
          </span>
        </div>
      </div>

      <LaboratoriesMarquee
        items={CEP_LABORATORIES.map((laboratory) => laboratory.title)}
      />

      <div className={styles.footer}>
        <p className={styles.note}>{CEP_LABORATORIES_NOTE}</p>
      </div>
    </section>
  );
}
