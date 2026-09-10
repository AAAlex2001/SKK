import type { MetadataRoute } from "next";

import { SITE_URL } from "@/shared/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/_next/", "/api/"],
        other: {
          "Clean-param": "utm_source&utm_medium&utm_campaign&utm_term&utm_content&yclid&gclid&from&_openstat",
        },
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
