import Image from "next/image";
import Link from "next/link";

import styles from "./ActivityCard.module.scss";

export interface ActivityCardProps {
  title: string;
  count: string;
  href: string;
  image?: string;
}

export function ActivityCard({ title, count, href, image }: ActivityCardProps) {
  return (
    <Link href={href} className={styles.root}>
      {image ? (
        <Image
          className={styles.media}
          src={image}
          alt=""
          fill
          sizes="(min-width: 768px) 668px, 100vw"
        />
      ) : null}

      <span className={styles.overlay} />

      <span className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <span className={styles.link}>
          <span className={styles.linkText}>{count}</span>

          <svg
            className={styles.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M3 12H20.5" stroke="currentColor" strokeWidth="2" />
            <path
              d="M15 6L20.5 12L15 17.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}
