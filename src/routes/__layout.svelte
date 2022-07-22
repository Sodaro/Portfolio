<script>
  import "../app.css";
  import { page } from '$app/stores'

  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'
  import Header from "$components/Header.svelte"

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false)
    
    
    var theme = window.localStorage.getItem('data-theme');
    if(theme) document.documentElement.setAttribute('data-theme', theme);


    var checkBox = document.getElementById('darkcb');
    checkBox.checked = theme == 'dracula' ? true : false;

    console.log(theme);
    // 👆 false parameter is required for svelte
    
    checkBox.addEventListener('change', function () {
    if(this.checked){
      document.documentElement.setAttribute('data-theme', 'dracula');
      window.localStorage.setItem('data-theme', 'dracula');
      
    } else {
      document.documentElement.setAttribute('data-theme', 'bumblebee');
      window.localStorage.setItem('data-theme', 'bumblebee');
    }
  });

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

<div class="min-h-screen mx-auto lg:w-2/4 container">
  <Header/>
  <slot/>
</div>