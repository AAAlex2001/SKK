"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

import "keen-slider/keen-slider.min.css";
import styles from "./Gallery.module.scss";

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface GalleryProps {
  id: string;
  title: string;
  items: GalleryItem[];
}

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

export function Gallery({ id, title, items }: GalleryProps) {
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
    <section id={id} className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.rule} />
        </div>

        <div className={styles.viewport}>
          <div ref={sliderRef} className={`keen-slider ${styles.track}`}>
            {items.map((item) => (
              <div
                key={item.src}
                className={`keen-slider__slide ${styles.slide}`}
              >
                <Image
                  className={styles.image}
                  src={item.src}
                  alt={item.alt}
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
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === current ? styles.dotActive : styles.dot}
              aria-label={`Слайд ${index + 1}`}
              onClick={() => slider.current?.moveToIdx(index)}
            />
          ))}
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrev}`}
            aria-label="Предыдущий слайд"
            onClick={() => slider.current?.prev()}
          >
            <ArrowIcon />
          </button>

          <button
            type="button"
            className={styles.button}
            aria-label="Следующий слайд"
            onClick={() => slider.current?.next()}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
