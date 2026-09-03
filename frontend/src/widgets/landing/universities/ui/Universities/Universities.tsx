import Image from "next/image";

import { UNIVERSITIES } from "../../model/universities";

import styles from "./Universities.module.scss";

export function Universities() {
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Сотрудничество с высшими учебными заведениями
          </h2>
          <span className={styles.rule} />
        </div>

        <ul className={styles.list}>
          {UNIVERSITIES.map((item) => (
            <li key={item.src} className={styles.item}>
              <Image
                className={styles.logo}
                src={item.src}
                alt={item.name}
                width={400}
                height={240}
              />
              <p className={styles.name}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
