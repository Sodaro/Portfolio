<script>
  import "../app.css";
  import { page } from '$app/stores'

  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import Header from "$components/Header.svelte"

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    
    var theme = localStorage.theme;
    
    if (theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    var checkBox = document.getElementById('darkcb');
    checkBox.checked = theme == 'dark' ? true : false;
    console.log(checkBox.checked)
    // 👆 false parameter is required for svelte

  //   checkBox.addEventListener('change', function () {
  //   if(this.checked){
  //     //document.documentElement.setAttribute('data-theme', 'dracula');
  //     localStorage.theme = 'dark';
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //     localStorage.theme = 'light';
  //   }
  // });

  })

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

<div class="min-h-screen mx-auto lg:w-2/4 lg:py-32 grid mycontainer">
  <!-- <Header/> -->
  <slot/>
</div>