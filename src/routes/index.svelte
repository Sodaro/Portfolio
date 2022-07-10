

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
        li.classList.remove("active");
        if (li.id == activeSectionID) {
          li.classList.add("active");
        }
      });
    });
  });
</script>

<header class="left-0 top-0 lg:top-1/2 fixed w-full z-50 lg:w-fit">
  <nav>
    <div class="navbar-start lg:hidden w-full">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            /></svg
          >
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
        >
          <li class="item"><a href="/">Welcome</a></li>
          <li class="item"><a href="/#about">About</a></li>
          <li class="item">
            <a href="/#featuredprojects">Featured Projects</a>
          </li>
          <li class="item"><a href="/#education">Education</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                ><path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                /></svg
              >
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
    <ul class="menu w-56 hidden lg:flex">
      <li class="item">
        <a href="/" class:active={activeSectionID === "welcome"}>Welcome</a>
      </li>
      <li class="item">
        <a href="/#about" class:active={activeSectionID === "about"}>About</a>
      </li>
      <li class="item">
        <a
          href="/#featuredprojects"
          class:active={activeSectionID === "featuredprojects"}
          >Featured Projects</a
        >
      </li>
      <li class="item">
        <a href="/#education" class:active={activeSectionID === "education"}
          >Education</a
        >
      </li>
    </ul>
  </nav>
</header>

<section id="welcome">
  <Welcome/>
</section>
<section id="about" class="mysection">
  <div class="">
    <About />
    <Skills />
  </div>
</section>
<section id="featuredprojects" class="mycolsection">
  <h2>Featured Projects</h2>
  <div class="games flex flex-col lg:flex-row   gap-x-4">
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
