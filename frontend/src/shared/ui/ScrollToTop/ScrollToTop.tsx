"use client";

import { useEffect, useState } from "react";

import styles from "./ScrollToTop.module.scss";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight / 2);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      className={visible ? styles.visible : styles.root}
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
        <path
          d="M9 1L15 7L9 13M15 7H1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
