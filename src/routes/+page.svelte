<script>
  import Welcome from "../content/Welcome.svelte";
  import Projects from "../content/Projects.svelte";
</script>

<svelte:head>
  <title>Portfolio | David Bång</title>
  <meta
    name="description"
    content="Game programmer David Bång's portfolio website."
  />
</svelte:head>

<div class="flex flex-col">
  <Welcome />
</div>

<Projects />
<!-- <SkillsLanguages /> -->
