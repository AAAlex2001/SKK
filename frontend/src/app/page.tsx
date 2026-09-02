import { Activities } from "@/widgets/activities";
import { Documents } from "@/widgets/documents";
import { Hero } from "@/widgets/hero";
import { Stats } from "@/widgets/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <Stats />
      <Documents />
    </main>
  );
}
