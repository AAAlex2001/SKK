import { ACTIVITIES } from "../../model/activities";
import { ActivityCard } from "../ActivityCard/ActivityCard";

import styles from "./Activities.module.scss";

export function Activities() {
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Направления деятельности</h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Комплексные решения в области промышленной безопасности,
            проектирования, научных исследований и инженерных работ
          </p>
        </div>

        <ul className={styles.list}>
          {ACTIVITIES.map((activity) => (
            <li key={activity.title} className={styles.item}>
              <ActivityCard {...activity} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
