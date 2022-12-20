<script>
  import "../app.postcss";
  import { page } from "$app/stores";

  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);

    var theme = localStorage.theme;
    var stored_theme = "theme" in localStorage;
    var should_use_light =
      theme === "light" ||
      (!stored_theme &&
        window.matchMedia("(prefers-color-scheme: light)").matches);

    if (should_use_light) {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    var checkBox = document.getElementById("darkcb");
    var checkBox2 = document.getElementById("darkcb");
    checkBox.checked = should_use_light ? false : true;
    checkBox2.checked = should_use_light ? false : true;
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


<div class="p-8">
  <Header />
  <div class="min-h-screen mx-auto grid gap-8 prose prose-xl lg:w-9/12 lg:py-32 xl:prose-2xl max-w-none dark:text-white mycontainer">
    <slot/>
  </div>
  <Footer />
</div>
