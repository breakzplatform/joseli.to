module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,njk}",
    "./src/content/**/*.{html,md,njk}",
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      colors: {
        'pure-purple': {
          '50': '#f6f2ff',
          '100': '#ede8ff',
          '200': '#ded4ff',
          '300': '#c6b1ff',
          '400': '#ab85ff',
          '500': '#9254fe',
          '600': '#8430f7',
          '700': '#761ee3',
          '800': '#6219be',
          '900': '#54179f',
        },
        'royal-blue': {
          '50': '#eef7ff',
          '100': '#d8ecff',
          '200': '#baddff',
          '300': '#8acaff',
          '400': '#53adff',
          '500': '#2b89ff',
          '600': '#1469fc',
          '700': '#0d51e8',
          '800': '#1244c2',
          '900': '#153b93',
      },
        'very-yellow': {
          '50': '#ffffea',
          '100': '#fffcc5',
          '200': '#fffa85',
          '300': '#fff146',
          '400': '#ffe41b',
          '500': '#ffc502',
          '600': '#e29800',
          '700': '#bb6c02',
          '800': '#985408',
          '900': '#7c440b',
        },
        'definitely-blue': {
          '50': '#f0f3ff',
          '100': '#e4e9ff',
          '200': '#cdd6ff',
          '300': '#a6b4ff',
          '400': '#7382ff',
          '500': '#3b44ff',
          '600': '#1614ff',
          '700': '#0000ff',
          '800': '#0101d6',
          '900': '#0303af',
        },
      },
    }
  }
}
