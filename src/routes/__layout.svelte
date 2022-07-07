<script>
  import "../app.css";
  import { page } from '$app/stores'

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-8SFXJDMWR4', {
        page_title: document.title,
        page_path: $page.url.href,
      })
    }
  }
</script>
<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-8SFXJDMWR4">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-8SFXJDMWR4')
  </script>
</svelte:head>

<div class="min-h-screen mx-auto lg:w-2/4 mt-16 container">
  <!-- <Header/> -->
  <slot/>
</div>