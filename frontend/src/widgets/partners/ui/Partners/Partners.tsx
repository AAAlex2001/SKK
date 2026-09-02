"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import Marquee from "react-fast-marquee";

import { PARTNER_ROWS, type PartnerLogo } from "../../model/partners";

import styles from "./Partners.module.scss";

function Logo({ logo }: { logo: PartnerLogo }) {
  const image = (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      unoptimized
    />
  );

  if (!logo.href) {
    return <span className={styles.logo}>{image}</span>;
  }

  return (
    <a
      className={styles.logo}
      href={logo.href}
      target="_blank"
      rel="noreferrer"
      title={logo.alt}
    >
      {image}
    </a>
  );
}

export function Partners() {
  return (
    <section id="partners" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши партнёры</h2>
          <span className={styles.rule} />
        </div>

        <div className={styles.rows}>
          {PARTNER_ROWS.map((row, index) => (
            <Marquee
              key={row.logos[0].src}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={40}
              autoFill
              gradient={false}
              pauseOnHover
              style={{ "--gap": `${row.gap}px` } as CSSProperties}
            >
              {row.logos.map((logo) => (
                <Logo key={logo.src} logo={logo} />
              ))}
            </Marquee>
          ))}
        </div>
      </div>
    </section>
  );
}
