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
      SINGLE_PLAYER_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      YEAR_PLAYERS_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      YEARS_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      RANKING_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  },

  adapter: vercel()
});