<script>
  import "../app.postcss";
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "prism-themes/themes/prism-darcula.css";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);

    var theme = localStorage.theme;
    // var stored_theme = "theme" in localStorage;
    var should_use_light = theme === "light";

    // var should_use_light =
    //   theme === "light" ||
    //   (!stored_theme &&
    //     window.matchMedia("(prefers-color-scheme: light)").matches);

    if (should_use_light) {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    var checkBox = document.getElementById("darkcb");
    var checkBox2 = document.getElementById("darkcb2");
    if (checkBox) {
      checkBox.checked = should_use_light ? false : true;
    }
    if (checkBox2) {
      checkBox2.checked = should_use_light ? false : true;
    }
  });

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", "G-8SFXJDMWR4", {
        page_title: document.title,
        page_path: $page.url.href,
      });
    }
  }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-8SFXJDMWR4">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-8SFXJDMWR4");
  </script>
</svelte:head>

<div class="w-full lg:h-full p-8 pt-0 pb-0 lg:flex lg:flex-row">
  <Navigation />
  <div
    class="pt-2 2xl:py-16 min-h-screen h-full mx-auto prose prose-lg max-w-none lg:w-10/12 lg:ml-4 xl:prose-2xl dark:text-neutral-content drawer-content "
  >
    <slot />
    <Footer />
  </div>
</div>
