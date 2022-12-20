import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"welcomegrid"}" class="${"md:grid md:grid-cols-4"}"><div id="${"welcometext"}" class="${"col-start-1 md:col-end-3"}"><h1 id="${"welcome"}" class="${"mb-0"}">Hi, I&#39;m David B\xE5ng!</h1>
    <p class="${""}">I&#39;m a game programmer with a special interest in gameplay systems. I love
      transforming an abstract gameplay idea into a concrete system that the
      user can interact with.
    </p>
    <div class="${"badge badge-primary text-xl p-4"}">C#</div>
    <div class="${"badge badge-primary text-xl p-4"}">C++</div>
    <div class="${"badge badge-primary text-xl p-4"}">Lua</div>
    <div class="${"badge badge-primary text-xl p-4"}">Unreal Engine</div>
    <div class="${"badge badge-primary text-xl p-4"}">Unity</div>
    <div class="${"badge badge-primary text-xl p-4"}">L\xF6ve2D</div></div>
  <div class="${"avatar md:col-start-4 not-prose w-fit h-fit"}"><img src="${"/profilepic2.jpg"}" alt="${"dave"}" class="${"w-80 h-80 max-w-xs max-h-xs border-8 rounded-xl"}"></div></div>

<div class="${"flex flex-col pt-4"}"><div class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-10 w-10 self-center"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}"><path fillrule="${"evenodd"}" d="${"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"}" cliprule="${"evenodd"}"></path></svg>
    <p class="${"bottom-0"}">Stockholm, Sweden</p></div></div>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "" } = $$props;
  let { useCurrentColor = false } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.useCurrentColor === void 0 && $$bindings.useCurrentColor && useCurrentColor !== void 0)
    $$bindings.useCurrentColor(useCurrentColor);
  return `${icon === "cpp" ? `<svg viewBox="${"0 0 128 128"}" class="${"w-12 h-12"}"><path fill="${"#D26383"}" d="${"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"}"></path><path fill="${"#9C033A"}" d="${"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"}"></path><path${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)} d="${"M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"}"></path><path d="${"M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path></svg>` : `${icon === "cs" ? `<svg viewBox="${"0 0 128 128"}" class="${"w-12 h-12"}"><path fill="${"#9B4F96"}" d="${"M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"}"></path><path fill="${"#68217A"}" d="${"M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"}"></path><path${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)} d="${"M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"}"></path></svg>` : `${icon === "lua" ? `<svg viewBox="${"0 0 24 24"}" class="${"w-12 h-12 fill-[#000081] dark:fill-white"}"><path fillrule="${"evenodd"}" d="${"M.38 10.377l-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zM4.136 3.289l-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zM5.769 2.059l-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zM1.824 18.369c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zM1.127 16.402l-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zM.256 14.506c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275L11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zM23.221 8.566c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zM17.621 1.389c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zM6.674 1.545c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zM23.727 11.588l.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zM9.544.527l-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zM18.223 21.943l.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zM21.248 19.219l.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zM19.855 20.715l.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zM22.359 17.504l.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zM23.617 13.629l.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zM23.156 15.621l.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zM22.453 6.672c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zM10.335 23.889c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zM17.326 22.449c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zM4.613 21.467c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zM12.417 23.725l.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zM3.083 20.041c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zM14.445 23.475l.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129A2.689 2.689 0 1 0 21.18 5.507 2.689 2.689 0 1 0 21.18.129zM15.324 15.447c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"}"></path></svg>` : `${icon === "unity" ? `<svg viewBox="${"0 0 128 128"}" class="${"w-12 h-12"}"><path d="${"M82.48 63.578l22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238l22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93L71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path></svg>` : `${icon === "unreal" ? `<svg viewBox="${"0 0 128 128"}" class="${"w-12 h-12"}"><g fill-rule="${"evenodd"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}><path d="${"M100.61 72.875c-1.063 5.121-5.785 18.266-20.852 25.379l-6.05-6.8-10.212 10.261A37.67 37.67 0 0133.7 86.43c1.086.34 2.203.551 3.336.63 1.672.03 3.485-.583 3.485-3.391V55.974a4.57 4.57 0 00-5.735-4.57c-4.726 1.089-8.504 12.882-8.504 12.882a37.509 37.509 0 0112.98-28.738 38.043 38.043 0 0119.148-8.836c-5.16 2.942-8.058 7.739-8.058 11.762 0 6.477 3.898 5.692 5.054 4.739v37.379c.196.468.453.91.762 1.316a5.528 5.528 0 004.516 2.285c3.902 0 8.968-4.457 8.968-4.457V49.478c0-3.078-2.32-6.793-4.644-8.07 0 0 4.3-.762 7.621 1.777a28.338 28.338 0 011.984-2.183c7.747-7.598 15.04-9.762 21.117-10.844 0 0-11.047 8.683-11.047 20.332 0 8.664.223 29.789.223 29.789 4.098 3.957 10.195-1.758 15.703-7.403z"}"></path><path d="${"M64 2.383C29.973 2.383 2.383 29.973 2.383 64S29.973 125.617 64 125.617 125.617 98.027 125.617 64 98.027 2.383 64 2.383zm0 120.77C31.332 123.153 4.848 96.669 4.848 64 4.852 31.333 31.336 4.849 64.004 4.853c32.668 0 59.148 26.484 59.148 59.152S96.668 123.157 64 123.157z"}"></path></g></svg>` : `${icon === "team" ? `<svg viewBox="${"0 0 48 48"}" class="${"h-12 w-12"}"><path d="${"m34.028 11.999c-1.9232 0.0044-3.6142 0.69231-5.11 1.6397 0.42602 0.26986 0.89396 0.48148 1.2678 0.81169 1.1556-0.61108 2.4199-1.0534 3.8449-1.0568h0.0014c0.0059-6e-6 0.01202-6e-6 0.01794 0 4.4685 1.37e-4 8.0478 3.409 8.0472 7.5967-1.49e-4 4.1871-3.5791 7.5952-8.0472 7.5953-1.4437-4.5e-5 -2.7231-0.45158-3.8905-1.0745-0.04515 0.03905-0.07409 0.0925-0.12002 0.13074-0.33688 0.28052-0.74449 0.47322-1.1202 0.70819 0.35019 0.21891 0.66519 0.48339 1.0444 0.65916h-0.65255c0.58392 0 1.1404 0.11749 1.6472 0.32958 0.50681 0.21209 0.96408 0.51863 1.3479 0.89749 0.04832 0.0477 0.06854 0.11757 0.11451 0.16751h7.1546c1.5775 0 2.8254 1.2319 2.8254 2.7892v4.8061h1.4127v-4.8061c0-2.3057-1.9024-4.1838-4.2381-4.1838h-1.4375c3.1456-1.4582 5.372-4.461 5.3721-8.0189 6.86e-4 -4.9726-4.2578-8.9904-9.4585-8.9913-0.0074-8e-6 -0.01464-8e-6 -0.02207 0z"}" style="${"color-rendering:auto;color:#000000;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;image-rendering:auto;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;shape-rendering:auto;solid-color:#000000;stop-color:#000000;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path><path d="${"m13.438 12c-5.1926 0.01179-9.4385 4.0264-9.4378 8.9913 1.271e-4 3.5577 2.2266 6.5606 5.3721 8.0189h-0.98227c-2.3357 0-4.2381 1.878-4.2381 4.1838v4.8061h1.4127v-4.8061c0-1.5573 1.2479-2.7892 2.8254-2.7892h7.4029c0.04596-0.04994 0.06619-0.11981 0.11451-0.16751 0.38378-0.37886 0.83968-0.6854 1.3465-0.89749 0.50681-0.21209 1.0647-0.32958 1.6486-0.32958h-1.3548c0.42432-0.19671 0.78085-0.48765 1.1685-0.73815-0.33066-0.21366-0.69776-0.37969-0.99745-0.6292-0.08134-0.06771-0.13359-0.16131-0.21246-0.23152-1.2043 0.679-2.534 1.1753-4.0464 1.1753-4.4681-1.38e-4 -8.047-3.4082-8.0472-7.5953-5.884e-4 -4.1806 3.5668-7.5865 8.0279-7.5967 0.0064-7e-6 0.01157-7e-6 0.01793 0h0.0014c1.4871 4.6e-5 2.7988 0.479 3.9898 1.1372 0.36846-0.33585 0.84503-0.53689 1.2665-0.81305-1.5259-1.0001-3.2702-1.7184-5.2549-1.7187-0.0074-8e-6 -0.01602-8e-6 -0.02345 0z"}" style="${"color-rendering:auto;color:#000000;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;image-rendering:auto;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;shape-rendering:auto;solid-color:#000000;stop-color:#000000;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path><path d="${"m23.828 12c-5.1926 0.01179-9.4385 4.0264-9.4378 8.9913 1.27e-4 3.5578 2.2279 6.5606 5.3735 8.0189h-0.98365c-2.3357 0-4.2381 1.878-4.2381 4.1838v4.8061h1.4127v-4.8061c0-1.5573 1.2479-2.7892 2.8254-2.7892h10.595c1.5775 0 2.8254 1.2319 2.8254 2.7892v4.8061h1.4127v-4.8061c0-2.3057-1.9024-4.1838-4.2381-4.1838h-1.4375c3.1456-1.4582 5.372-4.461 5.3721-8.0189 6.85e-4 -4.9726-4.2578-8.9904-9.4585-8.9913-0.0074-8e-6 -0.01464-8e-6 -0.02207 0zm0.0028 1.3946h0.0014c0.0059-6e-6 0.01202-6e-6 0.01794 0 4.4685 1.37e-4 8.0478 3.409 8.0472 7.5967-1.5e-4 4.1871-3.5791 7.5952-8.0472 7.5953-4.468-1.38e-4 -8.047-3.4082-8.0472-7.5953-5.9e-4 -4.1802 3.5675-7.5858 8.0279-7.5967z"}" style="${"color-rendering:auto;color:#000000;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;image-rendering:auto;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;shape-rendering:auto;solid-color:#000000;stop-color:#000000;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path></svg>` : `${icon === "solo" ? `<svg viewBox="${"0 0 48 48"}" class="${"h-12 w-12"}"><path d="${"m23.828 12c-5.1926 0.01179-9.4385 4.0264-9.4378 8.9913 1.27e-4 3.5578 2.2279 6.5606 5.3735 8.0189h-0.98365c-2.3357 0-4.2381 1.878-4.2381 4.1838v4.8061h1.4127v-4.8061c0-1.5573 1.2479-2.7892 2.8254-2.7892h10.595c1.5775 0 2.8254 1.2319 2.8254 2.7892v4.8061h1.4127v-4.8061c0-2.3057-1.9024-4.1838-4.2381-4.1838h-1.4375c3.1456-1.4582 5.372-4.461 5.3721-8.0189 6.85e-4 -4.9726-4.2578-8.9904-9.4585-8.9913-0.0074-8e-6 -0.01464-8e-6 -0.02207 0zm0.0028 1.3946h0.0014c0.0059-6e-6 0.01202-6e-6 0.01794 0 4.4685 1.37e-4 8.0478 3.409 8.0472 7.5967-1.5e-4 4.1871-3.5791 7.5952-8.0472 7.5953-4.468-1.38e-4 -8.047-3.4082-8.0472-7.5953-5.9e-4 -4.1802 3.5675-7.5858 8.0279-7.5967z"}" style="${"color-rendering:auto;color:#000000;dominant-baseline:auto;font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;image-rendering:auto;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;shape-rendering:auto;solid-color:#000000;stop-color:#000000;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"}"${add_attribute("fill", useCurrentColor ? "currentColor" : "#fff", 0)}></path></svg>` : ``}`}`}`}`}`}`}`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dir = "card url path here" } = $$props;
  let { src = "" } = $$props;
  let { type = "video/mp4" } = $$props;
  let { alt = "ProjectCard Alt Text Here" } = $$props;
  let { title = "" } = $$props;
  let { descr = "" } = $$props;
  let { lang = "" } = $$props;
  let { engine = "" } = $$props;
  let { groupType = "" } = $$props;
  let { posterSrc = "" } = $$props;
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.descr === void 0 && $$bindings.descr && descr !== void 0)
    $$bindings.descr(descr);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.engine === void 0 && $$bindings.engine && engine !== void 0)
    $$bindings.engine(engine);
  if ($$props.groupType === void 0 && $$bindings.groupType && groupType !== void 0)
    $$bindings.groupType(groupType);
  if ($$props.posterSrc === void 0 && $$bindings.posterSrc && posterSrc !== void 0)
    $$bindings.posterSrc(posterSrc);
  return `<div class="${"not-prose z-1 lg:box-border lg:w-1/2 p-2"}"><a${add_attribute("href", dir, 0)} class="${"no-underline"}"><div class="${"card w-full h-full shadow-2xl bg-primary hover:bg-secondary"}"><figure class="${""}">${src ? `<video class="${"object-cover"}" muted autoplay loop><source${add_attribute("src", src, 0)}${add_attribute("type", type, 0)}><span class="${"sr-only"}">${escape(alt)}</span>
          Your browser does not support the video tag.
        </video>` : `<img${add_attribute("src", posterSrc, 0)} class="${"object-cover"}"${add_attribute("alt", alt, 0)}>`}</figure>
    <div class="${"w-full py-2 px-8"}"><h4 class="${"text-primary-content prose prose-xl font-bold"}">${escape(title)}</h4>
      <div class="${"flex flex-row py-2"}">${validate_component(Icon, "Icon").$$render($$result, { icon: lang }, {}, {})}
        ${validate_component(Icon, "Icon").$$render($$result, { icon: engine }, {}, {})}
        ${validate_component(Icon, "Icon").$$render($$result, { icon: groupType }, {}, {})}</div>
      <p class="${"text-primary-content prose prose-xl py-2"}">${escape(descr)}</p></div></div></a></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h2 class="${""}">Featured Projects</h2>
  <div class="${"games flex flex-col w-full h-fit lg:flex-row lg:flex-wrap"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      dir: "/projects/addons",
      posterSrc: "/projectmedia/addons/hideshowbars3.jpg",
      alt: "a screenshot from World of Warcraft showing 4 green rectangles in debug view",
      title: "WoW Addons",
      descr: "A selection of World of Warcraft AddOns I have made over the years.",
      lang: "lua",
      groupType: "solo"
    },
    {},
    {}
  )}
    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      dir: "projects/enigma-machine",
      src: "/projectmedia/UnrealEnigmaMachine.mp4",
      alt: "Video showing 'Hello World' be encrypted on an EnigmaMachine",
      title: "Enigma Machine",
      descr: "An interactible Enigma Machine made in Unreal Engine C++",
      lang: "cpp",
      engine: "unreal",
      groupType: "solo"
    },
    {},
    {}
  )}
    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      dir: "/projects/pumpkin-boy",
      posterSrc: "/projectmedia/pumpkin/pumpkinboy.png",
      alt: "The pumpkin boy character with the head and body on a switch and an open door",
      title: "Pumpkin Boy",
      descr: "Thirdperson Puzzle game made in Unity.",
      lang: "cs",
      engine: "unity",
      groupType: "team"
    },
    {},
    {}
  )}
    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      dir: "/projects/bonkers",
      posterSrc: "/projectmedia/bonkers/cover.png",
      alt: "The pumpkin boy character with the head and body on a switch and an open door",
      title: "Bonkers",
      descr: "Thirdperson Puzzle game made in Unity.",
      lang: "cpp",
      engine: "unreal",
      groupType: "team"
    },
    {},
    {}
  )}
    ${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      dir: "projects/bomberbots",
      src: "/projectmedia/bomberbots/gameplay_game3.mp4",
      alt: "Video showing 'Hello World' be encrypted on an EnigmaMachine",
      title: "B\xF6mberbots",
      descr: "Bomberman clone made with Tomas Wallin in L\xF6ve2D",
      lang: "lua",
      groupType: "team"
    },
    {},
    {}
  )}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1q4xr0e_START -->${$$result.title = `<title>DavidB | Home</title>`, ""}<!-- HEAD_svelte-1q4xr0e_END -->`, ""}

<div class="${"flex flex-col"}">${validate_component(Welcome, "Welcome").$$render($$result, {}, {}, {})}</div>

${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
`;
});
export {
  Page as default
};
