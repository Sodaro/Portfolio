<script>
	export let dir = "/projects/pumpkin-boy";
    export let src = "/pumpkinboy.png";
    export let alt = "Pumpkin Boy Project";
    export let title = "Pumpkin Boy";
    export let descr = "Thirdperson Puzzle game made in Unity.";
</script>

<a href={dir}>
    <div class="card w-96 h-full shadow-xl">
      <figure><img class="object-cover h-72" src={src} alt={alt} /></figure>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p>{descr}</p>
      </div>
    </div>
</a>