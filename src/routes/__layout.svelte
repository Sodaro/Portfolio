<script>
  import "../app.css";
  import Header from '$lib/component/Header.svelte' 
  import 'prism-themes/themes/prism-darcula.css';
</script>

<div class="min-h-screen">
  <div class="container mx-auto pt-10">
    <Header />
  </div>
  <slot/>
</div>