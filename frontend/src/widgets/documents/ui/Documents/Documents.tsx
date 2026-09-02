"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

import { DOCUMENTS } from "../../model/documents";

import "keen-slider/keen-slider.min.css";
import styles from "./Documents.module.scss";

function ArrowIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
      <path
        d="M9 1L15 7L9 13M15 7H1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Documents() {
  const [current, setCurrent] = useState(2);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 2,
    slides: { perView: "auto", spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        loop: true,
        slides: { perView: "auto", spacing: 20, origin: "center" },
      },
    },
    slideChanged: (instance) => setCurrent(instance.track.details.rel),
  });

  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Разрешительные документы</h2>
          <span className={styles.rule} />
        </div>

        <div className={styles.viewport}>
          <div ref={sliderRef} className={`keen-slider ${styles.track}`}>
            {DOCUMENTS.map((doc) => (
              <div
                key={doc.src}
                className={`keen-slider__slide ${styles.slide}`}
              >
                <Image
                  className={styles.image}
                  src={doc.src}
                  alt={doc.alt}
                  fill
                  sizes="(min-width: 768px) 600px, 300px"
                />
              </div>
            ))}
          </div>

          <span className={`${styles.shade} ${styles.shadeLeft}`} />
          <span className={`${styles.shade} ${styles.shadeRight}`} />
        </div>

        <div className={styles.dots}>
          {DOCUMENTS.map((doc, index) => (
            <button
              key={doc.src}
              type="button"
              className={index === current ? styles.dotActive : styles.dot}
              aria-label={`Документ ${index + 1}`}
              onClick={() => slider.current?.moveToIdx(index)}
            />
          ))}
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrev}`}
            aria-label="Предыдущий документ"
            onClick={() => slider.current?.prev()}
          >
            <ArrowIcon />
          </button>

          <button
            type="button"
            className={styles.button}
            aria-label="Следующий документ"
            onClick={() => slider.current?.next()}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
