<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<div>
  <h2 class="">Featured Projects</h2>
  <div class="games flex flex-col w-full h-fit lg:flex-row lg:flex-wrap">
    <ProjectCard
    dir="projects/bomberbots"
    src="/projectmedia/bomberbots/gameplay_game3.mp4"
    alt="Video showing 'Hello World' be encrypted on an EnigmaMachine"
    title="Bömberbots"
    descr="Bomberman clone made with Tomas Wallin"
    badges={["Lua", "LÖVE framework"]}
  />

    <ProjectCard
      dir="projects/enigma-machine"
      src="/projectmedia/UnrealEnigmaMachine2.mp4"
      alt="Video showing 'Hello World' be encrypted on an EnigmaMachine"
      title="Enigma Machine"
      descr="An interactible Enigma Machine simulator"
      badges={["C++", "Unreal Engine"]}
    />
    <ProjectCard
    dir="/projects/addons"
    posterSrc="/projectmedia/addons/hideshowbars3.jpg"
    alt="a screenshot from World of Warcraft showing 4 green rectangles in debug view"
    title="WoW Addons"
    descr="A selection of World of Warcraft AddOns I have made over the years."
  />
    <ProjectCard
      dir="/projects/pumpkin-boy"
      posterSrc="/projectmedia/pumpkin/pumpkinboy.png"
      alt="The pumpkin boy character with the head and body on a switch and an open door"
      title="Pumpkin Boy"
      descr="Thirdperson Puzzle game made in Unity."
    />
    <ProjectCard
      dir="/projects/bonkers"
      posterSrc="/projectmedia/bonkers/cover2.png"
      alt="The pumpkin boy character with the head and body on a switch and an open door"
      title="Bonkers"
      descr="Local multiplayer arena-brawler."
      objectFit="object-cover"
    />
  </div>
</div>
