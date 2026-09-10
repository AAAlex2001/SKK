import type { Metadata } from "next";

import { COMPANY, SITE_URL, jsonLd } from "@/shared/config/site";
import { CepAbout } from "@/widgets/cep/about";
import { CepAccidents } from "@/widgets/cep/accidents";
import { CepContact } from "@/widgets/cep/contact";
import { CepDirections } from "@/widgets/cep/directions";
import { CepHero } from "@/widgets/cep/hero";
import { CepLaboratories } from "@/widgets/cep/laboratories";
import { CepLegal } from "@/widgets/cep/legal";
import { CepResults } from "@/widgets/cep/results";
import { CepTimeline } from "@/widgets/cep/timeline";

const TITLE = "Независимая экспертиза причин аварий на ОПО — ЦЭП";

const DESCRIPTION =
  "Независимая экспертиза причин аварий, инцидентов и отказов на опасных производственных объектах: выезд в течение суток, 28 профильных лабораторий, заключение за 15–25 суток.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "техническое расследование причин аварий",
    "независимая экспертиза причин аварий",
    "экспертиза аварий на ОПО",
    "расследование инцидентов на производстве",
    "ЦЭП",
    "комиссия Ростехнадзора",
    "приказ 503 Ростехнадзора",
    "116-ФЗ",
    "экспертиза аварий на шахтах",
    "экспертиза аварий на разрезах",
    "обогатительные фабрики авария",
    "профильные лаборатории экспертиза",
    "Сибирская каменноугольная компания",
  ],
  alternates: { canonical: "/cep" },
  openGraph: {
    type: "article",
    url: "/cep",
    title: `${TITLE} — ООО «${COMPANY.name}»`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const service = {
  "@type": "Service",
  "@id": `${SITE_URL}/cep#service`,
  name: "Независимая экспертиза причин аварий на опасных производственных объектах",
  alternateName: "ЦЭП ООО «СКК»",
  serviceType: "Техническое расследование причин аварий и инцидентов",
  description: DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Россия" },
  audience: {
    "@type": "BusinessAudience",
    name: "Организации, эксплуатирующие опасные производственные объекты",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Профили объектов",
    itemListElement: [
      "Подземные горные работы — угольные и горнорудные шахты",
      "Открытые горные работы — разрезы и карьеры",
      "Обогатительные фабрики",
    ].map((name, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: { "@type": "Service", name },
    })),
  },
};

const webPage = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/cep#webpage`,
  url: `${SITE_URL}/cep`,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/cep#service` },
  inLanguage: "ru-RU",
};

const breadcrumbs = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "ЦЭП — экспертиза причин аварий",
      item: `${SITE_URL}/cep`,
    },
  ],
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(service, webPage, breadcrumbs),
        }}
      />
    </main>
  );
}
