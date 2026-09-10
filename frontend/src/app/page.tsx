import type { Metadata } from "next";

import { COMPANY, SERVICES, SITE_URL, jsonLd } from "@/shared/config/site";
import { About } from "@/widgets/landing/about";
import { Activities } from "@/widgets/landing/activities";
import { Documents } from "@/widgets/landing/documents";
import { Hero } from "@/widgets/landing/hero";
import { Partners } from "@/widgets/landing/partners";
import { Reviews } from "@/widgets/landing/reviews";
import { Stats } from "@/widgets/landing/stats";
import { Universities } from "@/widgets/landing/universities";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: {
    absolute: `${COMPANY.name} — экспертиза промышленной безопасности, Новокузнецк`,
  },
  description: `ООО «${COMPANY.name}», Новокузнецк: экспертиза промышленной безопасности, проектирование и инженерные изыскания, маркшейдерские работы, неразрушающий контроль. Работаем с 2011 года.`,
  keywords: [
    "экспертиза промышленной безопасности",
    "ЭПБ",
    "промышленная безопасность Новокузнецк",
    "промышленная безопасность Кузбасс",
    "маркшейдерские работы",
    "неразрушающий контроль",
    "проектирование ОПО",
    "инженерные изыскания",
    "аудит СУПБ",
    "декларация промышленной безопасности",
    "обоснование безопасности",
    "Сибирская каменноугольная компания",
    "ООО СКК",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${COMPANY.name} — экспертиза промышленной безопасности`,
    description: `Экспертиза промышленной безопасности, проектирование, маркшейдерия и неразрушающий контроль в Кузбассе. Лицензия Ростехнадзора, аттестованные эксперты, собственные лаборатории.`,
  },
};

const professionalService = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `ООО «${COMPANY.name}»`,
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/`,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  priceRange: "По запросу",
  address: {
    "@type": "PostalAddress",
    postalCode: COMPANY.address.postalCode,
    addressCountry: "RU",
    addressRegion: COMPANY.address.region,
    addressLocality: COMPANY.address.locality,
    streetAddress: COMPANY.address.street,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Направления деятельности",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Россия" },
      },
    })),
  },
};

const webPage = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: `${COMPANY.name} — экспертиза промышленной безопасности`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "ru-RU",
};

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(professionalService, webPage),
        }}
      />
    </main>
  );
}
