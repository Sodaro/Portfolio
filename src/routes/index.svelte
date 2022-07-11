

<script>
  let activeSectionID = "welcome";
  import { onMount } from "svelte";

  import Welcome from "../content/Welcome.svelte";
  import Card from "$components/Card.svelte";
  import VidCard from "$components/VidCard.svelte";
  import About from "$content/about.md";
  import Skills from "$content/skills.md";

  onMount(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("header nav ul li");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          activeSectionID = section.getAttribute("id");
          // console.log(current);
        }
      });
      navLi.forEach((li) => {
        li.firstChild.classList.remove("active");
        if (li.classList.contains(activeSectionID)) {
          li.firstChild.classList.add("active");
        }
      });
    });
  });
</script>



<section id="welcome" class="mysection ">
  <Welcome/>
</section>
<section id="about" class="mysection">
  <div class="">
    <About />
    <Skills />
  </div>
</section>
<section id="projects" class="mycolsection">
  <h2>Featured Projects</h2>
  <div class="games flex flex-col lg:flex-row w-full lg:gap-x-4">
    <Card
    dir="/projects/addons"
    src="/projectmedia/hideshowbars.jpg"
    alt="image of a wow addon"
    title="WoW Addons"
    descr="A selection of World of Warcraft AddOns I have made over the years."
    pos="object-right"
    />
    <VidCard
      dir="projects/enigma-machine"
      src="/projectmedia/UnrealEnigmaMachine.mp4"
      alt="video of EnigmaMachine"
      title="Enigma Machine"
      descr="An interactible Enigma Machine made in Unreal Engine C++"
    />
    <Card
      dir="/projects/pumpkin-boy"
      src="/projectmedia/pumpkinboy.png"
      alt="Pumpkin Boy Project"
      title="Pumpkin Boy"
      descr="Thirdperson Puzzle game made in Unity."
    />
  </div>
</section>
<section
  id="education"
  class="place-content-start flex flex-col w-full h-screen mt-64"
>
  <h2>Education</h2>
  <ul>
    <li>Game Design: Uppsala University 2016-2019</li>
    <li>Gameprogrammer: Futuregames 2021-2023</li>
  </ul>
</section>
