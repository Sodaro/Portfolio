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
    themes:["dracula"]
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};

module.exports = config;
