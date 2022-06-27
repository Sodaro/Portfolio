const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    // colors:{
    //   current: 'currentColor',
    //   'dracula-bg': '#282a36',
    //   'dracula-currentline': '#44475a',
    //   'dracula-fg': '#f8f8f2',
    //   'dracula-comment': '#6272a4',
    //   'dracula-cyan': '#8be9fd',
    //   'dracula-purple': '#bd93f9',
    // },
  },
  daisyui: {
    themes:["dracula"]
  },
  plugins: [require("daisyui")],
};

module.exports = config;
