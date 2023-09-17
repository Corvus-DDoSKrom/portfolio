import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Corvus DDoSKrom",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Corvus DDoSKrom",
  // Meta property used as the default description meta property
  description: "Write-UP",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "es-ES",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "es_ES",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "es-ES",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Acerca de",
    path: "/about/",
  },
  {
    title: "Blog",
    path: "/posts/",
  },
];
