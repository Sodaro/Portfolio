

<script>
  let activeSectionID = "welcome";
  let nextSection;
  let prevSection;
  let sectionButtonVisible = true;
  import { onMount } from "svelte";

  import Welcome from "../content/Welcome.svelte";
  import Card from "$components/Card.svelte";
  import VidCard from "$components/VidCard.svelte";
  import About from "$content/about.md";
  import Skills from "$content/skills.md";
  onMount(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("header nav ul li");
    nextSection = document.getElementById("education");
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          activeSectionID = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        li.firstChild.classList.remove("active");
        if (li.classList.contains(activeSectionID)) {
          li.firstChild.classList.add("active");
        }
      });
      if (activeSectionID === "welcome")
      {
        nextSection = document.getElementById("featuredprojects");
        sectionButtonVisible = true;
      }
      else if (activeSectionID === "featuredprojects")
      {
        nextSection = document.getElementById("education");
        sectionButtonVisible = true;
      }
      else
      {
        sectionButtonVisible = false;
      }
    });
  });

  function scrollToNextSection(event)
  {
    scrollIntoView(nextSection);
  }
  function scrollIntoView( target ) {
    if (target == undefined)
    {
      return;
    }
    nextSection.scrollIntoView({
      behavior: 'smooth',
      alignToTop: true
    });
  }

</script>

<svelte:head>
<title>DavidB | Home</title>
</svelte:head>


<section id="welcome" class="mysection mb-64">
  <div class="lg:pt-64"><Welcome/></div>
</section>

<section id="featuredprojects" class="mycolsection mb-64">
  <div class="lg:pt-64">
    <h2>Featured Projects</h2>
    <div class="games flex flex-col lg:flex-row lg:flex-wrap w-full h-fit lg:gap-x-4">
      <Card
      dir="/projects/addons"
      src="/projectmedia/hideshowbarscropped.jpg"
      alt="image of a wow addon"
      title="WoW Addons"
      descr="A selection of World of Warcraft AddOns I have made over the years."
      pos="object-center"
      lang="lua"
      />
      <VidCard
        dir="projects/enigma-machine"
        src="/projectmedia/UnrealEnigmaMachine.mp4"
        alt="video of EnigmaMachine"
        title="Enigma Machine"
        descr="An interactible Enigma Machine made in Unreal Engine C++"
        lang="cpp"
        engine="unreal"
      />
      <Card
        dir="/projects/pumpkin-boy"
        src="/projectmedia/pumpkinboy.png"
        alt="Pumpkin Boy Project"
        title="Pumpkin Boy"
        descr="Thirdperson Puzzle game made in Unity."
        lang="cs"
        engine="unity"
      />
    </div>
  </div>
</section>


<section id="about" class="mysection mb-64">
  <div class="lg:pt-64">
    <!-- <About /> -->
    <Skills />
  </div>
</section>

<section
  id="education"
  class="place-content-start flex flex-col w-full h-screen"
>
  <div class="lg:pt-64">
    <h2>Education</h2>
    <ul>
      <li>Game Design: Uppsala University 2016-2019</li>
      <li>Gameprogrammer: Futuregames 2021-2023</li>
    </ul>
  </div>
</section>

<button on:click={scrollToNextSection} class="hidden lg:{sectionButtonVisible? "flex" : "invisible"} animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center bottom-0 left-1/2 fixed">
  <svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</button>