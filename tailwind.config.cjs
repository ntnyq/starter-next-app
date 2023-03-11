/**
 * @file tailwindcss config
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{tsx,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
