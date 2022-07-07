<script>
  import "../app.css";
  import Header from '../components/Header.svelte'

  import { page } from '$app/stores';


    $: if (typeof gtag !== 'undefined' && import.meta.env.PROD == true) {
        if ($page.query.toString().length > 0) {
            gtag('config', 'G-8SFXJDMWR4', {
                page_path : $page.path,
                page_location: `${$page.host}${$page.path}?${$page.query}`,
            });
        } else {
            gtag('config', 'G-8SFXJDMWR4', {
                page_path : $page.path,
                page_location: `${$page.host}${$page.path}`,
            });
        }
    }

</script>

<div class="min-h-screen mx-auto lg:w-2/4 mt-16 container">
  <!-- <Header/> -->
  <slot/>
</div>