import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: '#7DD3FC',
        skyDark: '#38BDF8',
        ink: '#0A0A0A',
        cream: '#FFFFFF',
        yolk: '#FFC933',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      rotate: {
        '1.5': '1.5deg',
        '2.5': '2.5deg',
        '-1.5': '-1.5deg',
        '-2.5': '-2.5deg',
        '-3': '-3deg',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out infinite',
        pop: 'pop 0.3s ease-out',
        float: 'float 4s ease-in-out infinite',
      },
      boxShadow: {
        comic: '6px 6px 0px 0px #0A0A0A',
        'comic-sm': '4px 4px 0px 0px #0A0A0A',
        'comic-lg': '10px 10px 0px 0px #0A0A0A',
        'comic-sky': '6px 6px 0px 0px #7DD3FC',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#0A0A0A',
            '--tw-prose-headings': '#0A0A0A',
            '--tw-prose-bold': '#0A0A0A',
            '--tw-prose-links': '#0A0A0A',
            '--tw-prose-bullets': '#0A0A0A',
            '--tw-prose-th-borders': '#0A0A0A',
            '--tw-prose-td-borders': '#0A0A0A',
            fontFamily: 'var(--font-body)',
            a: {
              color: '#0A0A0A',
              fontWeight: '700',
              textDecoration: 'underline',
              textDecorationColor: '#7DD3FC',
              textDecorationThickness: '3px',
            },
            'h1, h2, h3': {
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
            },
            th: {
              backgroundColor: '#7DD3FC',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
