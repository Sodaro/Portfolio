<script>
  import "../app.css";
  import Header from '../components/Header.svelte'
</script>

<div class="min-h-screen mx-auto lg:w-2/4 mt-16 container">
  <Header/>
  <slot/>
</div>