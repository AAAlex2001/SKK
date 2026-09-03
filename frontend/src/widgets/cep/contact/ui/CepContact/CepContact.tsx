import { Button } from "@/shared/ui";

import styles from "./CepContact.module.scss";

export function CepContact() {
  return (
    <section
      id="cep-contact"
      className={styles.root}
      aria-labelledby="cep-contact-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Связаться с ЦЭП</p>

          <h2 id="cep-contact-title" className={styles.title}>
            Нужна независимая оценка обстоятельств происшествия?
          </h2>

          <span className={styles.rule} />

          <p className={styles.lead}>
            Опишите объект и ситуацию — уточним исходные данные, предложим
            состав экспертной группы и порядок дальнейшей работы
          </p>
        </div>

        <div className={styles.card}>
          <a className={styles.contact} href="mailto:skk-n@mail.ru">
            <span className={styles.contactLabel}>Почта</span>
            <span className={styles.contactValue}>skk-n@mail.ru</span>
          </a>

          <a className={styles.contact} href="tel:+79234674950">
            <span className={styles.contactLabel}>Телефон</span>
            <span className={styles.contactValue}>+7 923 467-49-50</span>
          </a>

          <Button className={styles.cta} href="mailto:skk-n@mail.ru">
            Написать в ЦЭП
          </Button>
        </div>
      </div>
    </section>
  );
}
