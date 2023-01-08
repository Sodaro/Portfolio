<script>
    export let developers={programmers:[], designers:[], artists:[]};
</script>
<div class="not-prose flex flex-row gap-10">
    <div>
        <b>Programmers</b>
        <ul class="list-inside list-none">
            {#each developers.programmers as dev}
                <li>{dev}</li>
            {/each}
        </ul>
    </div>

    <div>
        <b>Designers</b>
        <ul class="p-0 m-0 gap-0 list-outside list-none">
            {#each developers.designers as dev}
                <li>{dev}</li>
            {/each}
        </ul>
    </div>
    <div>
        <b>Artists</b>
        <ul class="p-0 m-0 gap-0 list-outside list-none">
            {#each developers.artists as dev}
                <li>{dev}</li>
            {/each}
        </ul>
    </div>
</div>