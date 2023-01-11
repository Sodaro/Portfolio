<script>
  import Icon from "$lib/components/Icon.svelte";

  import Badge from "$lib/components/Badge.svelte";
  export let dir = "card url path here";
  export let src = "";
  export let type = "video/mp4";
  export let alt = "ProjectCard Alt Text Here";
  export let title = "";
  export let descr = "";
  export let groupSize = "";
  export let posterSrc = "";
  export let objectFit = "object-cover";
  export let badges = [];
</script>

<div class="not-prose z-1 lg:box-border lg:w-1/2 p-1">
  <a href={dir} class="no-underline">
    <div class="card w-full h-full shadow-2xl bg-base-200 hover:bg-base-300">
      <figure class="">
        {#if src}
          <video class={objectFit} muted autoplay loop>
            <source {src} {type} />
            <span class="sr-only">{alt}</span>
            Your browser does not support the video tag.
          </video>
        {:else}
          <img src={posterSrc} class={objectFit} {alt} />
        {/if}
      </figure>
      <div class="w-full py-2 px-8">
        <p class="text-base-content italic prose prose-xl">
          {groupSize} Project
        </p>
        <h4
          class="text-base-content prose prose-2xl pt-2 pb-0 leading-tight font-bold"
        >
          {title}
        </h4>

        <p class="text-base-content prose prose-xl pb-2">{descr}</p>
        <div class="flex flex-wrap gap-1 py-2">
          {#each badges as badge}
            <Badge hasFill="false">{badge}</Badge>
          {/each}
        </div>
      </div>
    </div>
  </a>
</div>
