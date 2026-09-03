import Image from "next/image";

import { CEP_WORK_RESULTS } from "../../model/results";

import styles from "./CepResults.module.scss";

export function CepResults() {
  return (
    <section
      id="cep-results"
      className={styles.root}
      aria-labelledby="cep-results-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="cep-results-title" className={styles.title}>
            Результат работы
          </h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Выводы, которые помогают принимать технические решения
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.photo}>
            <Image
              className={styles.photoImage}
              src="/cep/results.webp"
              alt="Двое специалистов в касках сверяются с документом на производственном объекте"
              fill
              sizes="(min-width: 1440px) 604px, (min-width: 768px) 668px, 100vw"
            />
          </div>

          <ul className={styles.list}>
            {CEP_WORK_RESULTS.map((result) => (
              <li key={result.number} className={styles.item}>
                <span className={styles.number}>{result.number}</span>
                <h3 className={styles.itemTitle}>{result.title}</h3>
                <p className={styles.description}>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
