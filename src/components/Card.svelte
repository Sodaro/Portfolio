<script>
  import Icon from "$components/Icon.svelte";

  export let dir = "/projects/pumpkin-boy";
  export let src = "/pumpkinboy.png";
  export let alt = "Pumpkin Boy Project";
  export let title = "Pumpkin Boy";
  export let descr = "Thirdperson Puzzle game made in Unity.";
  export let pos = "object-center";
  export let objectFit = "object-cover";
  export let lang = "";
  export let engine = "";
  export let groupType = "";
</script>

<a href={dir} class="z-1 w-full lg:w-fit no-underline">
  <div class="card grow shrink w-full lg:w-72 h-full shadow-2xl bg-primary">
    <figure>
      <img class="{objectFit} h-72 {pos}" {src} {alt} />
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
