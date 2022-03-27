module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,njk}",
    "./src/content/**/*.{html,md,njk}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-purple': {
          '50': '#fbf6fe',
          '100': '#f5eafd',
          '200': '#edd8fc',
          '300': '#dfb9f9',
          '400': '#cb8cf4',
          '500': '#b760ec',
          '600': '#a340dd',
          '700': '#8d2ec2',
          '800': '#762a9f',
          '900': '#652585',
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
