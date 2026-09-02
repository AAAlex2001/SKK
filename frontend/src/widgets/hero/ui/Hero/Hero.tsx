import Image from "next/image";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.layerBack}>
        <Image
          className={styles.image}
          src="/hero-full.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.layerFront}>
        <Image
          className={styles.image}
          src="/hero-bottom.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.texts}>
          <p className={styles.kicker}>
            Общество с ограниченной ответственностью
          </p>
          <h1 className={styles.title}>Сибирская Каменноугольная Компания</h1>
        </div>

        <p className={styles.tagline}>
          когда уровень промышленной безопасности опережает технический прогресс
        </p>
      </div>
    </section>
  );
}
