<script>
  import Icon from "$lib/components/Icon.svelte";

  import Badge from "$lib/components/Badge.svelte";
  export let dir = "card url path here";
  export let src = "";
  export let type = "video/mp4";
  export let alt = "ProjectCard Alt Text Here";
  export let title = "";
  export let descr = "";
  export let posterSrc = "";
  export let objectFit = "object-cover";
  export let badges = [];
</script>

<div class="not-prose z-1 lg:box-border lg:w-1/2 p-2">
<a href={dir} class="no-underline">
  <div class="card w-full h-full shadow-2xl bg-primary hover:bg-primary-focus">
    <figure class="">
      {#if src}
        <video class="{objectFit}" muted autoplay loop>
          <source {src} {type} />
          <span class="sr-only">{alt}</span>
          Your browser does not support the video tag.
        </video>
      {:else}
        <img src={posterSrc} class="{objectFit}" alt={alt} />
      {/if}
    </figure>
    <div class="w-full py-2 px-8">
      <h4 class="text-primary-content prose prose-xl font-bold">{title}</h4>
      <div class="flex flex-wrap gap-2">
      {#each badges as badge}
      <div class="badge badge-accent text-xl p-4">
      {badge}  
      </div>
      {/each}
      </div>
      <p class="text-primary-content prose prose-xl py-2">{descr}</p>
    </div>
  </div>
</a>
</div>