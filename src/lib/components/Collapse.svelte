<script>
  export let title = "Click me to show/hide content";
</script>

<div
  class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
>
  <input type="checkbox" />
  <div class="collapse-title text-xl font-medium">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="inline-block w-5 h-5 stroke-current"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      /></svg
    >
    {title}
  </div>
  <div class="collapse-content">
    <slot />
  </div>
</div>
