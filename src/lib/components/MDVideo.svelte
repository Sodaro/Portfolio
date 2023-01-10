<script>
  export let width = "640";
  export let height = "360";
  export let type = "video/mp4";
  export let src;
  export let alt;
  export let autoPlay;
</script>

<video
  {width}
  {height}
  controls={!autoPlay}
  muted={autoPlay}
  autoplay={autoPlay}
  loop={autoPlay}
>
  <source {src} {type} />
  <span class="sr-only">{alt}</span>
  Your browser does not support the video tag.
</video>
