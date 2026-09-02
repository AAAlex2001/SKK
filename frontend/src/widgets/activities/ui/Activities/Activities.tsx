"use client";

import { useState } from "react";

import { ACTIVITIES } from "../../model/activities";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { ActivityDetails } from "../ActivityDetails/ActivityDetails";

import styles from "./Activities.module.scss";

export function Activities() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openActivity = openIndex === null ? null : ACTIVITIES[openIndex];

  return (
    <section id="activities" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Направления деятельности</h2>
          <span className={styles.rule} />
          <p className={styles.lead}>
            Комплексные решения в области промышленной безопасности,
            проектирования, научных исследований и инженерных работ
          </p>
        </div>

        {openActivity && openIndex !== null ? (
          <ActivityDetails
            activity={openActivity}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        ) : (
          <ul className={styles.list}>
            {ACTIVITIES.map((activity, index) => (
              <li key={activity.title} className={styles.item}>
                <ActivityCard
                  title={activity.title}
                  count={activity.count}
                  image={activity.image}
                  onOpen={() => {
                    if (activity.directions.length > 0) setOpenIndex(index);
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
