<script>
  export let devTime;
  export let teamSize;
  export let engine;
  export let language;
  export let summary;
</script>

<h2>Project Details</h2>
<div class="not-prose p-4 h-fit bg-base-200">
  <div class="">
    <div class="">
      {#if devTime}
        <p>Development Time: {devTime}</p>
      {/if}
      {#if teamSize}
        <p>Team Size: {teamSize}</p>
      {/if}
      {#if engine}
        <p>Engine: {engine}</p>
      {/if}
      {#if language}
        <p>Programming language: {language}</p>
      {/if}
      {#if summary}
        <p>Main contributions: {summary}</p>
      {/if}
    </div>
  </div>
</div>
