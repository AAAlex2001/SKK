import { CEP_ACCIDENT_GROUPS } from "../../model/accidents";
import { AccidentExplorer } from "../AccidentExplorer/AccidentExplorer";

import styles from "./CepAccidents.module.scss";

export function CepAccidents() {
  return (
    <section
      id="cep-accidents"
      className={styles.root}
      aria-labelledby="cep-accidents-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="cep-accidents-title" className={styles.title}>
            Виды происшествий
          </h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Выберите профиль объекта — перечень показывает типовые сценарии, под
            которые формируется состав экспертной группы
          </p>
        </div>

        <AccidentExplorer groups={CEP_ACCIDENT_GROUPS} />
      </div>
    </section>
  );
}
