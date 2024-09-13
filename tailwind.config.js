/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {pattern: /btn-./},
    {pattern: /text-./},
    {pattern: /border-./},
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#0B0B22",
          "accent": "#0FAE96",
          "base-content": "white",
          "secondary": "#FCA016",
        }
      },
    ],
  },
  plugins: [require('daisyui')],
}

