"use client";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import type { CepTimelineItem } from "../../model/timeline";

import styles from "./TimelineTrack.module.scss";

interface TimelineTrackProps {
  steps: CepTimelineItem[];
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

export function TimelineTrack({ steps }: TimelineTrackProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: "auto", spacing: 20 },
  });

  return (
    <div className={styles.root}>
      <div className={styles.viewport}>
        <div ref={sliderRef} className={`keen-slider ${styles.track}`}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={`keen-slider__slide ${styles.step}`}
            >
              <span className={styles.number}>{step.number}</span>

              <h3 className={styles.stepTitle}>{step.title}</h3>

              <p className={styles.description}>{step.description}</p>

              <p className={styles.duration}>{step.duration}</p>
            </div>
          ))}
        </div>

        <span className={`${styles.shade} ${styles.shadeLeft}`} />
        <span className={`${styles.shade} ${styles.shadeRight}`} />
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrev}`}
          aria-label="Предыдущий этап"
          onClick={() => slider.current?.prev()}
        >
          <ArrowIcon />
        </button>

        <button
          type="button"
          className={styles.button}
          aria-label="Следующий этап"
          onClick={() => slider.current?.next()}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
