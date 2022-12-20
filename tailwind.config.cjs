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
          ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
        },
        dark: {
          "primary": "#343232",
          
          "secondary": "#454343",
                   
          "accent": "#343232",
                   
          "neutral": "#272626",
                   
          "base-100": "#111111",
                   
          "info": "#0000FF",
                   
          "success": "#008000",
                   
          "warning": "#FFFF00",
                   
          "error": "#FF0000",
        },
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
