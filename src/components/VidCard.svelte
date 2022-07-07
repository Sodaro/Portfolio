<script>
	  export let dir = "/projects/pumpkin-boy";
    export let src = "/UnrealEnigmaMachine.mp4";
    export let type = "video/mp4";
    export let alt = "Pumpkin Boy Project";
    export let title = "Pumpkin Boy";
    export let descr = "Thirdperson Puzzle game made in Unity.";

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


<a href={dir} class="z-1 no-underline">
    <div class="card w-96 h-full shadow-xl">
      <figure class="">
        <video on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} class="object-cover h-72" alt={alt} muted>
          <source src={src} type={type}>
          Your browser does not support the video tag.
        </video>
      </figure>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p>{descr}</p>
      </div>
    </div>
</a>