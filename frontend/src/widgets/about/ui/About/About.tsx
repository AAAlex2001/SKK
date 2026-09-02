import Image from "next/image";

import styles from "./About.module.scss";

export function About() {
  return (
    <section className={styles.root}>
      <Image
        className={styles.background}
        src="/about.webp"
        alt=""
        fill
        sizes="100vw"
      />

      <span className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h2 className={styles.title}>Сибирская Каменноугольная Компания</h2>
            <p className={styles.text}>
              основана в 2011 г. с целью реализации широкого спектра направлений
              в области промышленной безопасности на предприятиях РФ.
            </p>
          </div>

          <p className={styles.text}>
            На сегодняшний день ООО «СКК» наработан многолетний внушительный
            опыт выполнения работ по экспертизе промышленной безопасности,
            разработке ОБ шахт, рудников, обогатительных фабрик, разрезов,
            карьеров. Выполнено{" "}
            <span className={styles.accent}>более 1200 работ</span> для угольных
            и горно-рудных компаний.
          </p>
        </div>
      </div>
    </section>
  );
}
