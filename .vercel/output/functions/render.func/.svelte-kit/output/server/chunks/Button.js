import { c as create_ssr_component, f as add_attribute } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="${"btn btn-primary text-white font-bold py-2 px-4 rounded w-16 h-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></a>`;
});
export {
  Button as B
};
