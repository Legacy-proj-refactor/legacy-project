import type { Config } from 'tailwindcss'


const config: Config = {
  "content": [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "bg": "#fff",
              "text2": "#000",
              "text": "#fafafa",
              "button2": "#db4444",
              "gray": {
                  "100": "rgba(0, 0, 0, 0.4)",
                  "200": "rgba(0, 0, 0, 0.5)"
              },
              "secondary": "#f5f5f5"
          },
          "spacing": {},
          "fontFamily": {
              "title-14px-regular": "Poppins",
              "heading-24px-bold": "Inter"
          }
      },
      "fontSize": {
          "sm": "14px",
          "xs": "12px",
          "xl": "20px",
          "base": "16px",
          "5xl": "24px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}
export default config;