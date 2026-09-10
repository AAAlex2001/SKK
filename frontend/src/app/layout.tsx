import type { Metadata, Viewport } from "next";

import {
  COMPANY,
  SITE_URL,
  jsonLd,
  organizationSchema,
  websiteSchema,
} from "@/shared/config/site";
import { ScrollToTop } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { fontPrimary } from "./fonts";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — экспертиза промышленной безопасности`,
    template: `%s | ООО «СКК»`,
  },
  description: `ООО «${COMPANY.name}», Новокузнецк: экспертиза промышленной безопасности, проектирование и инженерные изыскания, маркшейдерские работы, неразрушающий контроль. Работаем с 2011 года.`,
  applicationName: `ООО «${COMPANY.name}»`,
  authors: [{ name: `ООО «${COMPANY.name}»`, url: SITE_URL }],
  creator: `ООО «${COMPANY.name}»`,
  publisher: `ООО «${COMPANY.name}»`,
  category: "Промышленная безопасность",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: `ООО «${COMPANY.name}»`,
    title: `${COMPANY.name} — экспертиза промышленной безопасности`,
    description: `Экспертиза промышленной безопасности, проектирование, маркшейдерия и неразрушающий контроль в Кузбассе. Лицензия Ростехнадзора, аттестованные эксперты, собственные лаборатории.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — экспертиза промышленной безопасности`,
    description: `Экспертиза промышленной безопасности, проектирование, маркшейдерия и неразрушающий контроль в Кузбассе.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  other: {
    "geo.region": "RU-KEM",
    "geo.placename": COMPANY.address.locality,
  },
};

export const viewport: Viewport = {
  themeColor: "#26577c",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={fontPrimary.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(organizationSchema, websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
