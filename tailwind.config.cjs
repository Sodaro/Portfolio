const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
              h2: {
                textAlign: "center",
              },
            },
          },
        },
      },
    },
  },
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          
          "primary": "#8C0327",
                   
          "secondary": "#D75050",
                   
          "accent": "#c49B6C",
                   
          "neutral": "#831843",
                   
          "base-100": "#F2F2F2",
                   
          "info": "#42AEBD",
                   
          "success": "#489380",
                   
          "warning": "#EB8014",
                   
          "error": "#E01A2E",
                   },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=luxury]"],
          'base-100': "#1E1E24"
        }
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

module.exports = config;
