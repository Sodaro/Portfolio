const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
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
    themes: ["bumblebee", "dracula"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dracula",
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

module.exports = config;
