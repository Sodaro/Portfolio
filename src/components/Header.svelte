<script>
  export let activeSectionID;
</script>

<header class="top-0 left-0 sticky z-50 bg-base-100">
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
    <ul class="menu w-full hidden lg:flex lg:flex-row">
      <li class="item welcome">
        <a href="/" class:active={true}>Welcome</a>
      </li>
      <li class="item about">
        <a href="/#about" class:active={false}>About</a>
      </li>
      <li class="item featuredprojects">
        <a
          href="/#featuredprojects"
          class:active={false}
          >Featured Projects</a
        >
      </li>
      <li class="item education">
        <a href="/#education" class:active={false}
          >Education</a
        >
      </li>
    </ul>
  </nav>
</header>