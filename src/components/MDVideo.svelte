<script>
  export let width = "640"
  export let height = "360"
  export let type = "video/mp4"
  export let src = ""
  export let alt = ""
</script>
<video width={width} height={height} controls>
  <source src={src} type={type}>
    <span class="sr-only">{alt}</span>
  Your browser does not support the video tag.
</video>