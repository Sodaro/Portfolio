<script>
  import Icon from "$components/Icon.svelte";

  export let dir = "card url path here";
  export let src = "Path to video here";
  export let type = "video/mp4";
  export let alt = "VidCard Alt Text Here";
  export let title = "VidCard Title";
  export let descr = "VidCard Description";
  export let lang = "";
  export let engine = "";
  export let groupType = "";

  // function handleMouseOver(event) {
  //   event.target.play();
  // }
  // function handleMouseOut(event) {
  //   event.target.pause();
  //   // event.target.currentTime=0;
  // }
</script>

<a href={dir} class="z-1 no-underline w-full lg:w-fit">
  <div class="card w-full lg:w-72 h-full shadow-2xl bg-primary">
    <figure class="">
      <video class="object-cover h-72" muted autoplay loop>
        <source {src} {type} />
        <span class="sr-only">{alt}</span>
        Your browser does not support the video tag.
      </video>
      <div class="flex flex-col w-12 h-fit top-0 right-0 absolute bg-secondary">
        <Icon icon={lang} />
        <Icon icon={engine} />
        <Icon icon={groupType} />
      </div>
    </figure>
    <div class="pl-4 w-full">
      <h4 class="pb-0 text-primary-content">{title}</h4>
      <p class="pt-0 text-primary-content">{descr}</p>
    </div>
  </div>
</a>
