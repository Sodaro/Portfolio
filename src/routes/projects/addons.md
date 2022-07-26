---
title: Addons
date: "2022-07-05"
thumb: "hideshowbars.jpg"
pos: "right"
lang: "lua"
---

<script>
    import Collapse from "$components/Collapse.svelte";
    import SCF_Filtering from "$snippets/chatfilter_filtering.md"
    import SCF_Commands from "$snippets/chatfilter_commands.md"
    import SBH_BarHider from "$snippets/barhider.md"
</script>

<svelte:head>
<title>DavidB | AddOns</title>
</svelte:head>

# WoW Addons

## What is an AddOn and why make them?
An AddOn (capitalization varies but meaning is the same) is a modification (or mod) to the game World of Warcraft. Addons are written in lua and uses the game API to change the UI, execute logic when events happen etc.  

<br>
Aside from finding addon development really fun, the main reason I make addons is because when I try to find addons that solve a problem I have; they often tend to be very cumbersome, locked in suites (big addons with multiple modules/dependencies), or have functionality that override base game interfaces etc. My approach when making addons is to make tools with singular specific purposes.
<br>
<br>
By having small and focused addons that only rely on the base API, it is a lot easier for any user to use whatever addons they want as there will be a lot fewer conflicts and it is easy to disable/remove them without losing any other functionality.  
<br>
<br>

## My Addons
<br>

### SodaChatFilter

#### Background
When I started playing classic wow (the re-release of the game without expansions) I soon found the LFG chat used for finding groups (to various quests or dungeons) to contain too many messages that weren't relevant for me. I saw that the API contained functionality which allows you to easily parse messages that you receive and decide whether to show or hide them. 
<br>

#### How it works
Using the parsing functionality and "SlashCommands" (which is logic the user can call by typing "/functionname" in chat) I can in-game type "/scf add boost" which would filter out any messages that contain the word "boost".
<br>
Command usage: "/scf operation dataparam1 dataparam2 ..."
<br>
<br>
The message is split on whitespace to get all the parameters provided after "/scf". The first parameter is the operation, and the rest is data. My way of still being able to have both a way to filter out sentences, and a way to quickly add multiple words, is to have sentences require '_' to combine them. This way typing "/scf add hello world" would filter out any messages containing either hello or world, where as typing "/scf add hello_world" would only filter out messages containing the sequence "hello world".

<br>
Code:
<Collapse title="Filtering Commands lua">

    <SCF_Commands />
</Collapse>

<Collapse title="Filtering behavior lua">

    <SCF_Filtering />
</Collapse>
<br>



### SodaBarHider
**Feature to implement:** I wanted a way to hide actionbars outside of combat, as when they were full they were occupying a large amount of space on the screen, but I also wanted to be able to use them when needed.
<br>

**Problem:** My first attempt was to create a frame on top of the actionbars that I wanted to show/hide and to handle the logic in OnMouseEnter / OnMouseLeave. The problem with this approach was that when I showed the hidden actionbars they would have higher priority which would cause the OnMouseLeave on the created frame to fire, which lead to flickering behavior. Another problem was that the hiddenframe was blocking the slots on the actionbar if it had a higher priority.

<br>

**Solution:** The solution I came up with at the time was to have an additional larger outer-frame and a smaller inner-frame, when the mouse enters the inner-frame the actionbars are shown, and when the mouse enters the outer-frame they are hidden.

<Collapse title="barhider.lua">
    <SBH_BarHider />
</Collapse>

<img src="/projectmedia/hideshowbarscropped.jpg" width="550" height="720" />

<br>

[link to addon repository](https://github.com/orgs/SodaAddons/repositories)