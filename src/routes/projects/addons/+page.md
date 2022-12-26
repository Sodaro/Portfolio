<script>
    import MDVideo from "$lib/components/MDVideo.svelte"
    import Collapse from "$lib/components/Collapse.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import SectionComponent from "$lib/components/SectionComponent.svelte"
    import SCF_Filtering from "$lib/snippets/chatfilter_filtering.md"
    import SCF_Commands from "$lib/snippets/chatfilter_commands.md"
    import SBH_BarHider from "$lib/snippets/barhider.md"
</script>

<svelte:head>
<title>DavidB | AddOns</title>
</svelte:head>

<SectionComponent>

# WoW Addons

## What is an AddOn and why make them?
An AddOn (capitalization varies but the meaning is the same) is a modification (or mod) to the game World of Warcraft. Addons are written in Lua and use the game API to change the UI, execute logic when events happen, etc.  

Aside from finding addon development fun, the main reason I make addons is that when I try to find addons that solve a problem I have; they often tend to be very cumbersome, locked in suites (big addons with multiple modules/dependencies), or have functionality that overrides base game interfaces, etc. My approach when making addons is to make tools with singular specific purposes.

By having small and focused addons that only rely on the base API, it is a lot easier for any user to use whatever addons they want as there will be a lot fewer conflicts and it is easy to disable/remove them without losing any other functionality.  

![Part of my World of Warcraft AddOn list ](/projectmedia/addons/addon_list.jpg "Part of my current AddOn list")

## Highlighted Addons


### SodaChatFilter

<ButtonLink isGithubLink=true href="https://github.com/SodaAddons/WOTLK-SodaChatFilter">
    ChatFilter Repo
</ButtonLink>


#### Background
When I started playing classic wow (the re-release of the game without expansions) I soon found the LFG chat, used for finding groups, to contain too many messages that weren't relevant to me. I saw that the API contained functionality that allows you to easily parse messages that you receive and decide whether to show or hide them. 


#### How it works
Using the parsing functionality and "SlashCommands" (which is logic the user can call by typing "/functionname" in chat) I can in-game type "/scf add boost" which would filter out any messages that contain the word "boost".

Command usage: "/scf operation dataparam1 dataparam2 ..."


The message is split on whitespace to get all the parameters provided after "/scf". The first parameter is the operation, and the rest is data. My way of still being able to have both a way to filter out sentences, and a way to quickly add multiple words, is to have sentences require '_' to combine them. This way typing "/scf add hello world" would filter out any messages containing either "hello" or "world", whereas typing "/scf add hello_world" would only filter out messages containing the sequence "hello world".


Code:
<Collapse title="Filter Commands Parsing">

    <SCF_Commands />
</Collapse>

<Collapse title="Filtering Behavior">

    <SCF_Filtering />
</Collapse>


<MDVideo width="1280" height="720" src="/projectmedia/addons/chatfilter.mp4" alt="video shows messages in wow chat appearing, chat filters getting added and then messages filtered appearing in yellow"/>



### SodaBarHider

<ButtonLink isGithubLink=true href="https://github.com/SodaAddons/WOTLK-SodaBarHider">
    BarHider Repo
</ButtonLink>

**Feature to implement:** I wanted a way to hide actionbars outside of combat, as when they were full they were occupying a large amount of space on the screen, but I also wanted to be able to use them when needed.


**Problem:** My first attempt was to create a frame on top of the actionbars that I wanted to show/hide and to handle the logic in OnMouseEnter / OnMouseLeave. The problem with this approach was that when I showed the hidden actionbars they would have higher priority which would cause the OnMouseLeave on the created frame to fire, which lead to flickering behavior. Another problem was that the hidden frame was blocking the slots on the actionbar if it had a higher priority, and wouldn't register mouse movement if it had a lower priority.



**Solution:** The solution I came up with at the time was to have an additional larger outer frame and a smaller inner frame, when the mouse enters the inner frame the actionbars are shown, and when the mouse enters the outer frame they are hidden.

<Collapse title="Bar Hiding Behavior">
    <SBH_BarHider />
</Collapse>



<MDVideo width="1280" height="720" src="/projectmedia/addons/showhidebars.mp4" alt="a video showing the actionbars in wow overlaid with green rectangles, the actionbars disappearing and reappearing when the mouse enters the outer and inner rectangles"/>




</SectionComponent>