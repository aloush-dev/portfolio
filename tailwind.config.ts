import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      minHeight: {
        screenFull: "calc(100svh - 135px)",
      },
      height: {
        hero: "calc(100svh - 77px)",
      },
      width: {
        "mobile-width": "calc(100vw - 5rem)",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            background: "black",
            accent: "#8A3FFC",
            "secondary-accent": "",
            "primary-text": "white",
            header: "black",
            footer: "black",
            "header-text": "white",
            "footer-text": "white",
            "accent-text": "white",
          },
        },
      },
      themes: [
        {
          name: "darkBlue",
          extend: {
            colors: {
              background: "#5ac3b0",
              accent: "#de5935",
              "secondary-accent": "",
              "primary-text": "white",
              header: "#f7cd46",
              footer: "#f7cd46",
              "header-text": "#de5935",
              "footer-text": "#de5935",
              "accent-text": "white",
            },
          },
        },
        {
          name: "lightBlue",
          extend: {
            colors: {
              background: "white",
              accent: "#2F58CD",
              "secondary-accent": "",
              "primary-text": "black",
              header: "#2F58CD",
              footer: "#2F58CD",
              "header-text": "white",
              "footer-text": "white",
              "accent-text": "white",
            },
          },
        },
        {
          name: "nature",
          extend: {
            colors: {
              background: "#e6e2dd",
              accent: "#d48166",
              "secondary-accent": "",
              "primary-text": "black",
              header: "#373a36",
              footer: "#373a36",
              "header-text": "white",
              "footer-text": "white",
              "accent-text": "white",
            },
          },
        },
      ],
    }),
  ],
};
export default config;
