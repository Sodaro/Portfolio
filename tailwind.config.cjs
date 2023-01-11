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
