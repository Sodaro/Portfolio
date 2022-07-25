<script>
	  export let dir = "card url path here";
    export let src = "Path to video here";
    export let type = "video/mp4";
    export let alt = "VidCard Alt Text Here";
    export let title = "VidCard Title";
    export let descr = "VidCard Description";
    export let lang = "";
    export let engine = "";

    import SkillIcon from "$components/SkillIcon.svelte";
    function handleMouseOver(event)
    {
      event.target.play();
    }
    function handleMouseOut(event)
    {
      event.target.pause();
      // event.target.currentTime=0;
    }

</script>


<a href={dir} class="z-1 no-underline w-full lg:w-fit">
    <div class="card w-full lg:w-96 h-full shadow-xl">
      <figure class="">
        <video on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} class="object-cover h-72" alt={alt} muted>
          <source src={src} type={type}>
          Your browser does not support the video tag.
        </video>
        <div class="flex flex-col w-12 h-fit top-0 right-0 absolute">
          <SkillIcon icon={lang} />
          <SkillIcon icon={engine} />
        </div>
      </figure>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p>{descr}</p>
      </div>
    </div>
</a>