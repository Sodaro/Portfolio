import { c as create_ssr_component } from "./index.js";
const SectionComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${""}">${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  SectionComponent as S
};
