import type { Config } from 'tailwindcss';
import { theme } from './src/shared/config/tailwind/theme';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    ...theme,
  },
  plugins: [],
};

export default config;
