<script>
  import Badge from "../lib/components/Badge.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
</script>

<div id="welcomegrid" class="md:grid md:grid-cols-4">
  <div id="welcometext" class="col-start-1 md:col-end-3">
    <h1 id="welcome" class="mb-0">Hi, I'm David Bång!</h1>
    <p class="">
      I'm a game programmer with a special interest in gameplay systems. I love
      transforming an abstract gameplay idea into a concrete system that the
      user can interact with.
    </p>
    <ButtonLink href="/pages/about">More about me</ButtonLink>
    <div class="pt-4">
      <Badge>C#</Badge>
      <Badge>C++</Badge>
      <Badge>Lua</Badge>
      <Badge>Unreal Engine</Badge>
      <Badge>Unity</Badge>
      <Badge>LÖVE framework</Badge>
    </div>
  </div>
  <div class="avatar md:col-start-4 not-prose w-fit h-fit">
    <img
      src="/profilepic2.jpg"
      alt="david"
      class="w-80 h-80 border-base-300  max-w-xs max-h-xs border-8 rounded-xl"
    />
  </div>
</div>

<div class="flex flex-col pt-4">
  <div class="flex">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10 self-center"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
    <p class="bottom-0">Stockholm, Sweden</p>
  </div>
</div>
