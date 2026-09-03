import Image from "next/image";

import styles from "./CepAbout.module.scss";

export function CepAbout() {
  return (
    <section
      id="cep-about"
      className={styles.root}
      aria-labelledby="cep-about-title"
    >
      <div className={styles.media}>
        <Image
          className={styles.photo}
          src="/cep/about.webp"
          alt="Специалисты в касках, щитках и респираторах осматривают трубопровод на действующем объекте"
          fill
          sizes="(min-width: 1440px) 60vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      <span className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h2 id="cep-about-title" className={styles.title}>
              Назначение центра
            </h2>

            <span className={styles.rule} />
          </div>

          <div className={styles.copy}>
            <p className={styles.lead}>
              Независимая экспертиза восстанавливает цепочку событий: от исходных
              условий и действий персонала до отказа оборудования и его
              последствий.
            </p>

            <p className={styles.paragraph}>
              Центр объединяет аттестованных экспертов по промышленной
              безопасности, инженерные и научные компетенции и профильные
              лаборатории. Состав группы определяется видом ОПО, сценарием аварии
              и вопросами комиссии.
            </p>

            <p className={styles.paragraph}>
              Результат —{" "}
              <span className={styles.accent}>
                доказательная картина происшествия
              </span>
              , технически обоснованные выводы и мероприятия, которые можно
              применить на объекте.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
