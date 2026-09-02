import { About } from "@/widgets/about";
import { Activities } from "@/widgets/activities";
import { Documents } from "@/widgets/documents";
import { Hero } from "@/widgets/hero";
import { Partners } from "@/widgets/partners";
import { Reviews } from "@/widgets/reviews";
import { Stats } from "@/widgets/stats";
import { Universities } from "@/widgets/universities";

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
