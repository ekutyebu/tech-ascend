import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html, ts, tsx, svelte, next}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        // text colorlight mode
        'p-font-c': '#0D0146',
        'h1-text-c': '#F9F9F9',
        'secondary-text-c': '#252B42',
        'sec-2-txt-c': '#000',
        'tertiary-txt-c': '#737373',
        'ter-pink-txt-c': '#4F0046',
        // bg colors light mode
        'btn-c': '#0D0146',
        'btn-grey-c': '#E0EE0E0',
        'btn-hover-c': '#4F0046',
        'primary-bg-c': '#FFF',
        'blck-blue-bg': '#270022',
        'sec-bg-c': '#F9F9F9',
        'sec-2-bg-c': '#E5E5E5',
        'tertiary-bg-c': '#FAFAFA',
        'input-bg-c': '#F5F5F5',
      },
      fontSize: {
        'clamp-h1': 'clamp(32px, 8vw, 64px)',
        'clamp-p': 'clamp(16px, 3.5vw, 18px)',
        'clamp-btn': 'clamp(18px, 4vw, 20px)',
        'clamp-smp': 'clamp(14px, 3vw, 16px)',
        'clamp-smh1': 'clamp(24px, 6vw, 32px)',
        'clamp-subH': 'clamp(14px, 3vw, 16px)',
        'clamp-vsmp': 'clamp(12px, 2.5vw, 14px)',
        'clamp-xsmp': 'clamp(10px, 2vw, 12px)',
      },
    },
    // keyframes: {
    //   shimmer: {
    //     '100%': {
    //       transform: 'translateX(100%)',
    //     },
    //   },
    // },
  },
  // plugins: [require('@tailwindcss/forms')],
 plugins: [
     require('autoprefixer')
  ]
};
export default config;
