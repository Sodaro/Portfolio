<script>
    export let developers={programmers:[], designers:[], artists:[]};
</script>
<div>
<ul class="p-0 m-0 gap-0 list-outside list-none">
    <b>Programmers:</b>
    {#each developers.programmers as dev}
    <li>{dev}</li>
    {/each}
    <b>Designers:</b>
    {#each developers.designers as dev}
    <li>{dev}</li>
    {/each}
    <b>Artists:</b>
    {#each developers.artists as dev}
    <li>{dev}</li>
    {/each}
</ul>
</div>