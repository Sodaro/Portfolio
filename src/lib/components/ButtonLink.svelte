<script>
    export let href="";
    export let isGithubLink=false;
    export let isDownloadButton=false;
</script>

<a href={href} target="_blank" class="not-prose btn btn-accent font-bold rounded normal-case no-underline text-lg" rel="noopener noreferrer">
    <div class="flex gap-x-4 not-prose text-center items-center">
        {#if isGithubLink}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentcolor"
        class="h-8 w-8 bi bi-github fill-accent-content"
        viewBox="0 0 16 16"
      >
      <path
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
    </svg>
        {/if}
    
    {#if isDownloadButton}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>       
    {/if}
    <p class="text-accent-content">
    <slot/>
    </p>
    {#if isDownloadButton == false}
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" class="h-4 w-4 fill-accent-content" viewBox="0 0 512 512"><path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"/></svg>
    {/if}    
</div>
</a>
   
