import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import pageInsight from "astro-page-insight";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), metaTags(), pageInsight(), icon()]
});