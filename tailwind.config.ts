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
      listStyleType: {
        disc: "disc",
      },
      aspectRatio: {
        "16/9": "56.25%",
        "4/3": "75%",
        "1/1": "100%",
      },
      minHeight: {
        screenFull: "calc(100svh - 135px)",
      },
      height: {
        hero: "calc(100svh - 77px)",
        mobileimage: "333.5px",
        desktopimage: "400px",
      },
      width: {
        "mobile-width": "calc(100vw - 5rem)",
        mobileimage: "187.5px",
        desktopimage: "640px",
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
            "on-success": "#70e000",
            "on-error": "#da2c38",
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
              "on-success": "#70e000",
              "on-error": "#da2c38",
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
              "on-success": "#70e000",
              "on-error": "#da2c38",
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
              "on-success": "#70e000",
              "on-error": "#da2c38",
            },
          },
        },
      ],
    }),
  ],
};
export default config;
