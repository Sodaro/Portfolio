import { c as create_ssr_component, f as add_attribute, e as escape } from "./index.js";
const MDVideo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "640" } = $$props;
  let { height = "360" } = $$props;
  let { type = "video/mp4" } = $$props;
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<video${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} controls><source${add_attribute("src", src, 0)}${add_attribute("type", type, 0)}><span class="${"sr-only"}">${escape(alt)}</span>
  Your browser does not support the video tag.
</video>`;
});
const Collapse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Click me to show/hide content" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"}"><input type="${"checkbox"}"> 
    <div class="${"collapse-title text-xl font-medium"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-5 h-5 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg>
      ${escape(title)}</div>
    <div class="${"collapse-content"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} target="${"_blank"}" class="${"link btn btn-primary text-white font-bold py-2 px-4 rounded col-span-2"}"><div class="${"flex gap-x-4 text-center"}">${slots.default ? slots.default({}) : ``}
    <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-4 w-4"}" fill="${"currentColor"}" viewBox="${"0 0 512 512"}"><path d="${"M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"}"></path></svg></div></a>`;
});
export {
  ButtonLink as B,
  Collapse as C,
  MDVideo as M
};
