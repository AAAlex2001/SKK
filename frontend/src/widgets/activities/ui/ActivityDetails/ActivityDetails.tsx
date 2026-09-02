"use client";

import Image from "next/image";
import { useId, useState } from "react";

import type { Activity } from "../../model/activities";

import styles from "./ActivityDetails.module.scss";

export interface ActivityDetailsProps {
  activity: Activity;
  index: number;
  onClose: () => void;
}

export function ActivityDetails({
  activity,
  index,
  onClose,
}: ActivityDetailsProps) {
  const [selected, setSelected] = useState(0);
  const groupName = useId();
  const direction = activity.directions[selected];

  return (
    <div className={styles.root}>
      <div className={styles.head}>
        {activity.image ? (
          <Image
            className={styles.headImage}
            src={activity.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1440px) 1300px, (min-width: 768px) 688px, 100vw"
          />
        ) : null}

        <span className={styles.number}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className={styles.headTitle}>{activity.title}</h3>

        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.body}>
        {activity.directions.length > 1 ? (
          <div className={styles.list}>
            {activity.directions.map((item, itemIndex) => (
              <label
                key={item.title}
                className={[
                  styles.option,
                  itemIndex === selected && styles.optionSelected,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <input
                  type="radio"
                  name={groupName}
                  className={styles.input}
                  checked={itemIndex === selected}
                  onChange={() => setSelected(itemIndex)}
                />
                <span className={styles.radio} aria-hidden="true" />
                <span className={styles.optionText}>{item.title}</span>
              </label>
            ))}
          </div>
        ) : null}

        <div className={styles.panel}>
          <div className={styles.block}>
            <h4 className={styles.blockTitle}>Описание услуги</h4>
            {direction.description.map((paragraph) => (
              <p key={paragraph} className={styles.text}>
                {paragraph}
              </p>
            ))}
          </div>

          {direction.docs ? (
            <div className={styles.docs}>
              <h4 className={styles.blockTitle}>Разрешительные документы</h4>
              {direction.docs.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
