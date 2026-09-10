import Link from "next/link";

import styles from "./CepBreadcrumbs.module.scss";

export function CepBreadcrumbs() {
  return (
    <nav className={styles.root} aria-label="Вы находитесь здесь">
      <div className={styles.inner}>
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} href="/">
              Главная
            </Link>
          </li>

          <li className={styles.item} aria-current="page">
            <span className={styles.current}>
              ЦЭП — экспертиза причин аварий
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
