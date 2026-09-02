import Image from "next/image";

import { STATS } from "../../model/stats";

import styles from "./Stats.module.scss";

const GROUPS = [STATS.slice(0, 2), STATS.slice(2)];

export function Stats() {
  return (
    <section className={styles.root}>
      <Image
        className={styles.pattern}
        src="/stats.webp"
        alt=""
        fill
        sizes="100vw"
      />

      <div className={styles.inner}>
        <div className={styles.photo}>
          <Image
            className={styles.photoImage}
            src="/stats_treugol.webp"
            alt=""
            fill
            sizes="644px"
          />
        </div>

        <div className={styles.stats}>
          {GROUPS.map((group) => (
            <div key={group[0].value} className={styles.group}>
              {group.map((item) => (
                <div key={item.value} className={styles.item}>
                  <span className={styles.value}>{item.value}</span>
                  <p className={styles.label}>{item.label}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
