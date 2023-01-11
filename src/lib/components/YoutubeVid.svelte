<script>
  export let src = "";
  export let title = "";
</script>

<iframe
  class="w-full lg:w-3/4 aspect-video"
  {src}
  {title}
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
/>
