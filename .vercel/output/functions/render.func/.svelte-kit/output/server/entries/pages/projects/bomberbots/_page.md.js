import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SectionComponent } from "../../../../chunks/SectionComponent.js";
const metadata = {
  "title": "Enigma Machine",
  "date": "2022-07-03",
  "thumb": "enigmamachine.png",
  "pos": "center",
  "lang": "c++"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1p7exes_START -->${$$result.title = `<title>DavidB | Bomberbots</title>`, ""}<!-- HEAD_svelte-1p7exes_END -->`, ""}


${validate_component(SectionComponent, "SectionComponent").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>B\xF6mberbots</h1>
<h2>WIP</h2>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
