import { CEP_LEGAL_DOCUMENTS } from "../../model/legal";

import styles from "./CepLegal.module.scss";

const KIND: Record<string, string> = {
  "116-fz": "Федеральный закон",
  "117-fz": "Федеральный закон",
  "order-503": "Приказ Ростехнадзора",
  "skk-regulation": "Внутренний документ",
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
      <path
        d="M9 1L15 7L9 13M15 7H1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CepLegal() {
  return (
    <section
      id="cep-legal"
      className={styles.root}
      aria-labelledby="cep-legal-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="cep-legal-title" className={styles.title}>
            Нормативная основа
          </h2>
          <span className={styles.rule} />
        </div>

        <ul className={styles.list}>
            {CEP_LEGAL_DOCUMENTS.map((doc) => {
              const content = (
                <>
                  <span className={styles.kind}>{KIND[doc.id]}</span>
                  <span className={styles.number}>{doc.number}</span>
                  <span className={styles.documentTitle}>{doc.title}</span>

                  {doc.href ? (
                    <span className={styles.action}>
                      Открыть документ
                      <span className={styles.arrow}>
                        <ArrowIcon />
                      </span>
                    </span>
                  ) : null}
                </>
              );

              return (
                <li key={doc.id} className={styles.item}>
                  {doc.href ? (
                    <a
                      className={`${styles.card} ${styles.cardLink}`}
                      href={doc.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <article className={styles.card}>{content}</article>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
