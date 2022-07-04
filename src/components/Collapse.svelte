<script>
  export let title="Click me to show/hide content";
</script>

<div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium">
      {title}
    </div>
    <div class="collapse-content">
      <slot/>
    </div>
  </div>
  