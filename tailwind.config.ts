import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
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
        text: {
          primary: '#0D0146',    // was p-font
          heading: '#F9F9F9',    // was h1
          secondary: '#252B42',
          'secondary-alt': '#000',  // was secondary-2
          tertiary: '#737373',
          'tertiary-pink': '#4F0046',
        },
        bg: {
          primary: '#FFF',       // was primary-1
          button: '#0D0146',     // was primary-2
          'button-grey': '#E0EE0E0',  // was primary-grey
          'button-hover': '#4F0046',  // was primary-hover
          'black-blue': '#270022',
          secondary: '#F9F9F9',
          'secondary-alt': '#E5E5E5',  // was secondary-2
          tertiary: '#FAFAFA',
          input: '#F5F5F5',
        }
      },
      fontSize: {
        // Headings
        'h1': 'clamp(32px, 8vw, 64px)',
        'sm-h1': 'clamp(24px, 6vw, 32px)',
        
        // Paragraphs
        'p': 'clamp(16px, 3.5vw, 18px)',
        'sm-p': 'clamp(14px, 3vw, 16px)',
        'xs-p': 'clamp(12px, 2.5vw, 14px)',
        'xxs-p': 'clamp(10px, 2vw, 12px)',
        
        // Other
        'btn': 'clamp(18px, 4vw, 20px)',
        'sub-heading': 'clamp(14px, 3vw, 16px)',
      }
    },
  },
  plugins: [],
};

export default config;