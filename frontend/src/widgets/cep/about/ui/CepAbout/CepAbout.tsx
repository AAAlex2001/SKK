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
              В ООО «СКК» на постоянной основе создан непрерывно действующий
              Центр независимой экспертизы причин аварий на ОПО — для технических
              расследований причин аварий и инцидентов на предприятиях всех
              классов опасности.
            </p>

            <p className={styles.paragraph}>
              Заключения центра включают ответы на вопросы о причинах
              произошедшего, сформулированные как руководителями эксплуатирующих
              организаций, так и председателями комиссий по расследованию,
              возглавляемых руководителями Ростехнадзора. Состав комиссии по
              техническому расследованию предусмотрен приказом Ростехнадзора
              № 503 от 08.12.2020.
            </p>

            <p className={styles.paragraph}>
              Результат —{" "}
              <span className={styles.accent}>
                доказательная картина происшествия
              </span>
              , технически обоснованные выводы и мероприятия, которые можно
              применить на объекте. Возможность выполнения этих работ
              подтверждена опытом на предприятиях Кемеровской области — Кузбасса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
