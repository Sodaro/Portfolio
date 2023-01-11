<script>
    export let size = "";
    export let padding = "p-4";
    export let hasFill = "false";
    export let color = "badge-neutral";
</script>

<div
    class="badge badge-md {color} {hasFill === 'false'
        ? 'badge-outline'
        : ''} {size} {padding}"
>
    <slot />
</div>
