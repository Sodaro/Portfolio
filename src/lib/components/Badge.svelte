<script>
    export let size="text-xl"
    export let padding="p-4"
    export let hasFill="true"
    export let color="badge-accent"
</script>

<div class="badge {color} {hasFill === "true" ? "" : "badge-outline"} {size} {padding}">
    <slot/>
</div>