<script>
    import SkillIcon from "$components/SkillIcon.svelte";

	  export let dir = "/projects/pumpkin-boy";
    export let src = "/pumpkinboy.png";
    export let alt = "Pumpkin Boy Project";
    export let title = "Pumpkin Boy";
    export let descr = "Thirdperson Puzzle game made in Unity.";
    export let pos = "object-center";
    export let lang = "";
    export let engine = "";
</script>

<a href={dir} class="z-1 w-full lg:w-fit no-underline">
    <div class="card grow shrink w-full lg:w-96 h-full shadow-xl">
      <figure>
        <img class="object-cover h-72 {pos}" src={src} alt={alt} />
        <div class="flex flex-col w-12 h-fit top-0 right-0 absolute">
          <SkillIcon icon={lang} />
          <SkillIcon icon={engine} />
        </div>
      </figure>
      <div class="card-body w-full">
        <h3 class="card-title">{title}</h3>
        <p>{descr}</p>
      </div>
    </div>

</a>