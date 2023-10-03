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
              background: "black",
              accent: "#2F58CD",
              "primary-text": "white",
              header: "black",
              footer: "black",
              "header-text": "white",
              "footer-text": "white",
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
              background: "#172d13",
              accent: "#d76f30",
              "primary-text": "white",
              header: "#6bb77b",
              footer: "#6bb77b",
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
