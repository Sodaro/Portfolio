<script>
  import "../app.css";
  import Header from '../components/Header.svelte' 
</script>

<div class="min-h-screen mx-auto w-2/4 container">
  <Header/>
  <slot/>
</div>