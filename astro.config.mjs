// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      API_URL: envField.string({ context: 'server', access: 'secret' }),
      API_KEY: envField.string({ context: 'server', access: 'secret' }),
    }
  },

  adapter: vercel()
});