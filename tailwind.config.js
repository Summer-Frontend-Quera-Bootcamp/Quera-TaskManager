/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    letterSpacing: {
      XL: '40px',
      L: '32px',
      M: '24px',
      S: '16px',
      XS: '8px',
    },
    backgroundSize: {
      'twenty': '20px',
    },
    extend: {
      fontSize: {
        HL: ['32px', '55.27px'],
        HM: ['28px', '36px'],
        HS: ['24px', '32px'],
        HXS: ['20px', '32px'],
        TXL: ['24px', '41.45px'],
        TL: ['20px', '34.55px'],
        TM: ['16px', '27.64px'],
        TS: ['14px', '24.18px'],
        TXS: ['12px', '20.73px'],
      },
      gridTemplateColumns: {
        // this is for main page
        'main': '1fr 340px',
      },
      spacing: {
        'XL': '40px',
        'L' : '32px',
        'M' : '24px',
        'S' : '16px',
        'XS': '8px',
      },
      backgroundImage: theme =>( {
        'not-found': "url('./assest/images/notfound.svg')",
      }),
    },
  },
  plugins: [],
}

