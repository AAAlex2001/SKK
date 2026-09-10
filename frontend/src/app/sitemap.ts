import type { MetadataRoute } from "next";

import { SITE_URL } from "@/shared/config/site";

const LAST_MODIFIED = new Date("2026-09-10");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cep`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
