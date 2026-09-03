"use client";

import Image from "next/image";
import { useState } from "react";

import type { CepAccidentGroup } from "../../model/accidents";

import styles from "./AccidentExplorer.module.scss";

interface AccidentExplorerProps {
  groups: CepAccidentGroup[];
}

interface AccidentMedia {
  src: string;
  alt: string;
  position: string;
}

const GROUP_MEDIA: Record<string, AccidentMedia> = {
  mines: {
    src: "/cep/underground.webp",
    alt: "Подземная горная выработка с бетонной крепью, горняком и самосвалом",
    position: "62% center",
  },
  "open-pits": {
    src: "/cep/open-pit.webp",
    alt: "Карьерный самосвал у забоя угольного разреза",
    position: "65% 70%",
  },
  "processing-plants": {
    src: "/cep/processing.webp",
    alt: "Роторный погрузчик и конвейерная эстакада на угольном складе",
    position: "68% 60%",
  },
};

const MEDIA_SIZES =
  "(min-width: 1440px) 1280px, (min-width: 768px) 608px, 100vw";

export function AccidentExplorer({ groups }: AccidentExplorerProps) {
  const [activeId, setActiveId] = useState(groups[0].id);

  const active = groups.find((group) => group.id === activeId) ?? groups[0];
  const media = GROUP_MEDIA[active.id];

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <div className={styles.tabs}>
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              className={styles.tab}
              aria-pressed={group.id === active.id}
              onClick={() => setActiveId(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <span className={styles.fade} aria-hidden="true" />
      </div>

      <div className={styles.panel}>
        <div className={styles.media}>
          {media ? (
            <Image
              className={styles.image}
              src={media.src}
              alt={media.alt}
              fill
              sizes={MEDIA_SIZES}
              style={{ objectFit: "cover", objectPosition: media.position }}
              draggable={false}
            />
          ) : null}

          <span className={styles.scrim} />

          <h3 className={styles.panelTitle}>{active.title}</h3>
        </div>

        <ul className={styles.list}>
          {active.items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
