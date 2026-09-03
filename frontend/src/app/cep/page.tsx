import type { Metadata } from "next";

import { CepAbout } from "@/widgets/cep/about";
import { CepAccidents } from "@/widgets/cep/accidents";
import { CepContact } from "@/widgets/cep/contact";
import { CepDirections } from "@/widgets/cep/directions";
import { CepHero } from "@/widgets/cep/hero";
import { CepLaboratories } from "@/widgets/cep/laboratories";
import { CepLegal } from "@/widgets/cep/legal";
import { CepResults } from "@/widgets/cep/results";
import { CepTimeline } from "@/widgets/cep/timeline";

export const metadata: Metadata = {
  title: 'ЦЭП ООО "СКК"',
  description:
    "Центр независимой экспертизы причин аварий на опасных производственных объектах.",
};

export default function CepRoute() {
  return (
    <main>
      <CepHero />
      <CepDirections />
      <CepLegal />
      <CepAbout />
      <CepLaboratories />
      <CepTimeline />
      <CepAccidents />
      <CepResults />
      <CepContact />
    </main>
  );
}
