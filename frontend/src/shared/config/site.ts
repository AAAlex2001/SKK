export const SITE_URL = "https://skk-n.ru";

export const COMPANY = {
  legalName:
    "Общество с ограниченной ответственностью «Сибирская каменноугольная компания»",
  name: "Сибирская каменноугольная компания",
  shortName: "ООО «СКК»",
  inn: "4217140314",
  kpp: "421701001",
  ogrn: "1114217012997",
  okpo: "37697102",
  okved: "71.20.6",
  okvedName:
    "Экспертиза проектной документации, запасов полезных ископаемых и подземных вод, геологической информации о предоставляемых в пользование участках недр, результатов инженерных изысканий",
  foundingDate: "2011-12-21",
  director: "Ванякин Олег Владимирович",
  email: "skk-n@mail.ru",
  phone: "+7 923 467-49-50",
  phoneHref: "+79234674950",
  address: {
    postalCode: "654007",
    region: "Кемеровская область — Кузбасс",
    locality: "Новокузнецк",
    street: "ул. Орджоникидзе, зд. 35, помещ. 30, офис 1101",
  },
  license:
    "Л043-00109-42/00504504 — лицензия на деятельность по проведению экспертизы промышленной безопасности",
} as const;

export const SERVICES = [
  "Экспертиза промышленной безопасности",
  "Проектирование и инженерные изыскания",
  "Научно-исследовательская деятельность",
  "Маркшейдерские работы",
  "Пожарная безопасность",
  "Лаборатория неразрушающего контроля",
  "Специальные инженерные решения",
] as const;

const postalAddress = {
  "@type": "PostalAddress",
  postalCode: COMPANY.address.postalCode,
  addressCountry: "RU",
  addressRegion: COMPANY.address.region,
  addressLocality: COMPANY.address.locality,
  streetAddress: COMPANY.address.street,
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: `ООО «${COMPANY.name}»`,
  legalName: COMPANY.legalName,
  alternateName: [COMPANY.shortName, "СКК", "ЦЭП ООО «СКК»"],
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 200,
  },
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: COMPANY.email,
  telephone: COMPANY.phone,
  foundingDate: COMPANY.foundingDate,
  taxID: COMPANY.inn,
  vatID: COMPANY.inn,
  address: postalAddress,
  identifier: [
    { "@type": "PropertyValue", name: "ИНН", value: COMPANY.inn },
    { "@type": "PropertyValue", name: "КПП", value: COMPANY.kpp },
    { "@type": "PropertyValue", name: "ОГРН", value: COMPANY.ogrn },
    { "@type": "PropertyValue", name: "ОКПО", value: COMPANY.okpo },
    { "@type": "PropertyValue", name: "ОКВЭД", value: COMPANY.okved },
  ],
  employee: {
    "@type": "Person",
    name: COMPANY.director,
    jobTitle: "Генеральный директор",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Кемеровская область — Кузбасс" },
    { "@type": "Country", name: "Россия" },
  ],
  knowsAbout: [...SERVICES],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: `ООО «${COMPANY.name}»`,
  inLanguage: "ru-RU",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function jsonLd(...nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
