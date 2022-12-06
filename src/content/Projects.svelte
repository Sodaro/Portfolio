<script>
  import ProjectCard from "$components/ProjectCard.svelte";
</script>

<div>
  <h2 class="">Featured Projects</h2>
  <div class="games flex flex-col gap-8 lg:flex-row lg:flex-wrap w-full h-fit">
    <ProjectCard
      dir="/projects/addons"
      posterSrc="/projectmedia/addons/hideshowbars3.jpg"
      alt="a screenshot from World of Warcraft showing 4 green rectangles in debug view"
      title="WoW Addons"
      descr="A selection of World of Warcraft AddOns I have made over the years."
      pos="object-right"
      lang="lua"
      groupType="solo"
    />
    <ProjectCard
      dir="projects/enigma-machine"
      src="/projectmedia/UnrealEnigmaMachine.mp4"
      alt="Video showing 'Hello World' be encrypted on an EnigmaMachine"
      title="Enigma Machine"
      descr="An interactible Enigma Machine made in Unreal Engine C++"
      lang="cpp"
      engine="unreal"
      groupType="solo"
    />
    <ProjectCard
      dir="/projects/pumpkin-boy"
      posterSrc="/projectmedia/pumpkin/pumpkinboy.png"
      alt="The pumpkin boy character with the head and body on a switch and an open door"
      title="Pumpkin Boy"
      descr="Thirdperson Puzzle game made in Unity."
      lang="cs"
      engine="unity"
      groupType="team"
    />
    <ProjectCard
      dir="/projects/bonkers"
      posterSrc="/projectmedia/bonkers/cover.png"
      alt="The pumpkin boy character with the head and body on a switch and an open door"
      title="Bonkers"
      descr="Thirdperson Puzzle game made in Unity."
      lang="cpp"
      engine="unreal"
      groupType="team"
      objectFit="object-cover"
      pos="object-right"
    />
    <ProjectCard
      dir="projects/bomberbots"
      src="/projectmedia/bomberbots/gameplay_game3.mp4"
      alt="Video showing 'Hello World' be encrypted on an EnigmaMachine"
      title="Bömberbots"
      descr="Bomberman clone made with Tomas Wallin in Löve2D"
      lang="lua"
      groupType="team"
    />
  </div>
</div>
