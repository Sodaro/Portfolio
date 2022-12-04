<script>
  import Icon from "$components/Icon.svelte";
</script>

<div class="lg:grid grid-rows-1 lg:grid-cols-4 gap-y-4 mt-12">
  <div class="col-start-1 row-start-1">
    <h3>Languages</h3>
    <div class="flex lg:flex-row lg:flex-wrap">
      <Icon icon="lua" useCurrentColor="true" />
      <Icon icon="cpp" />
      <Icon icon="cs" />
    </div>
  </div>
  <div class="col-start-2 row-start-1">
    <h3>Engines</h3>
    <div class="flex lg:flex-row lg:flex-wrap">
      <Icon icon="unity" useCurrentColor="true" />
      <Icon icon="unreal" useCurrentColor="true" />
    </div>
  </div>
  <div class="col-start-3 col-span-2 row-start-1">
    <h3>Education</h3>
    <ul>
      <li class="text-xl">
        <span class="font-bold">Game Design</span>
        <p>Uppsala University 2016-2019</p>
      </li>
      <li class="text-xl">
        <span class="font-bold">Game Programmer</span>
        <p>Futuregames 2021-2023</p>
      </li>
    </ul>
  </div>
</div>
