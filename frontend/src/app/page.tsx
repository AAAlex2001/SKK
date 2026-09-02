import { Activities } from "@/widgets/activities";
import { Hero } from "@/widgets/hero";
import { Stats } from "@/widgets/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Stats />
    </main>
  );
}
