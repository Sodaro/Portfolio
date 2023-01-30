<script>
  import Badge from "../lib/components/Badge.svelte";
  import ButtonLink from "$lib/components/ButtonLink.svelte";
</script>

<div id="welcomegrid" class="flex flex-col xl:flex-row">
  <div id="welcometext" class="">
    <h1 id="welcome" class="">Hi, I'm David Bång!</h1>
    <div class="avatar xl:hidden h-1/2 max-w-md">
      <img
        src="/croptest.jpg"
        alt="david"
        class="border-base-300 border-8 rounded-xl object-fill"
      />
    </div>
    <p class="">
      I'm a game programmer with a special interest in gameplay systems. I love
      transforming an abstract gameplay idea into a concrete system that the
      user can interact with.
    </p>
    <ButtonLink href="/pages/about" isExternalLink="false"
      >More about me</ButtonLink
    >
    <div class="pt-4">
      <Badge>C#</Badge>
      <Badge>C++</Badge>
      <Badge>Lua</Badge>
      <Badge>Unreal Engine</Badge>
      <Badge>Unity</Badge>
      <Badge>LÖVE framework</Badge>
    </div>
    <div class="flex h-fit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 self-center inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
      <p class="">Stockholm, Sweden</p>
    </div>
  </div>
  <div class="hidden xl:flex m-0 xl:order-last">
    <img
      src="/croptest.jpg"
      alt="david"
      class="m-0 p-0 h-2/3 border-base-300 border-8 rounded-xl object-cover"
    />
  </div>
</div>
