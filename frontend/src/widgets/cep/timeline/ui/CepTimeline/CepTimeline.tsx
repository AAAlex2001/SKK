import {
  CEP_TIMELINE,
  CEP_TIMELINE_FACTS,
  CEP_TIMELINE_NOTE,
} from "../../model/timeline";
import { TimelineTrack } from "../TimelineTrack/TimelineTrack";

import styles from "./CepTimeline.module.scss";

export function CepTimeline() {
  return (
    <section
      id="cep-timeline"
      className={styles.root}
      aria-label="Как мы работаем"
    >
      <div className={styles.inner}>
        <ul className={styles.facts}>
          {CEP_TIMELINE_FACTS.map((fact) => (
            <li key={fact.value} className={styles.fact}>
              <span className={styles.factValue}>{fact.value}</span>
              <span className={styles.factLabel}>{fact.label}</span>
            </li>
          ))}
        </ul>

        <TimelineTrack steps={CEP_TIMELINE} />

        <p className={styles.note}>{CEP_TIMELINE_NOTE}</p>
      </div>
    </section>
  );
}
