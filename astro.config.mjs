import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dns-gaming.ir',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: '_assets'
  }
});
