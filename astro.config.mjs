// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],

  env: {
    schema: {
      SINGLE_PLAYER_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      YEAR_PLAYERS_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    }
  },
  
  adapter: vercel()
});