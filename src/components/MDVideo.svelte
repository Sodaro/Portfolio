<script>
  export let width = "640"
  export let height = "360"
  export let type = "video/mp4"
  export let src = ""
</script>
<video width={width} height={height} controls>
  <source src={src} type={type}>
  Your browser does not support the video tag.
</video>