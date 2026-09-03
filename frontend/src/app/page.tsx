import { About } from "@/widgets/landing/about";
import { Activities } from "@/widgets/landing/activities";
import { Documents } from "@/widgets/landing/documents";
import { Hero } from "@/widgets/landing/hero";
import { Partners } from "@/widgets/landing/partners";
import { Reviews } from "@/widgets/landing/reviews";
import { Stats } from "@/widgets/landing/stats";
import { Universities } from "@/widgets/landing/universities";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Stats />
      <Documents />
      <About />
      <Reviews />

      <div className={styles.group}>
        <Partners />
        <Universities />
      </div>
    </main>
  );
}
