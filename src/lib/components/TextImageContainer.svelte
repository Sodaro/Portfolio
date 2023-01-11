<script>
  export let src;
  export let alt;
</script>

<div class="flex flex-col lg:flex-row">
  <slot />
  <img {src} {alt} class="not-prose p-0 m-0" />
</div>
