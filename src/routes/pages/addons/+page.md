<script>
    import MDVideo from "$lib/components/MDVideo.svelte"
    import Collapse from "$lib/components/Collapse.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import ArticleComponent from "$lib/components/ArticleComponent.svelte"
    import SCF_Code from "$lib/snippets/chatfilter.md"
    import SBH_BarHider from "$lib/snippets/barhider.md"
</script>

<svelte:head>
<title>WoW Addons | David Bång</title>
</svelte:head>

<ArticleComponent>

# WoW Addons

## Background

AddOns are runtime Lua scripts which use the API provided by the developers to modify the game. 

I try to write focused addons, with the goal of solving one "problem" per addon. This lets me easily use them in combination with other addons without having conflicts.

## Highlighted Addons

### SodaChatFilter

<ButtonLink isGithubLink=true href="https://github.com/SodaAddons/WOTLK-SodaChatFilter">
    ChatFilter Repo
</ButtonLink>


**Problem:**
When I started playing classic wow (the re-release of the game without expansions) I found the group finding chat to be too filled with irrelevant messages.

**Solution:**
I checked the API and found features that allow you to parse received messages and the ability to hide certain messages. Using the chat-parsing functionality and "SlashCommands" (which is logic the user can call by typing "/functionname" in chat) I implemented a way, so the user can filter out messages while playing by typing "/scf add wordtofilter anotherwordtofilter" or "/scf add sentence_of_words_to_filter".

The message is split on whitespace to get all the parameters provided after "/scf". The first parameter is the operation, and the rest is data. My way of still being able to have both a way to filter out sentences, and a way to quickly add multiple words, is to have sentences require '_' to combine them. This way typing "/scf add hello world" would filter out any messages containing either "hello" or "world", whereas typing "/scf add hello_world" would only filter out messages containing the sequence "hello world".

<!-- <Collapse title="Chatfilter Code">

    <SCF_Code />
</Collapse> -->


<MDVideo width="1280" height="720" src="/projectmedia/addons/chatfilter.mp4" alt="video shows messages in wow chat appearing, chat filters getting added and then messages filtered appearing in yellow"/>



### SodaBarHider

<ButtonLink isGithubLink=true href="https://github.com/SodaAddons/WOTLK-SodaBarHider">
    BarHider Repo
</ButtonLink>

**Problem:** I wanted a way to hide actionbars outside of combat, as when they were full they were occupying a large amount of space on the screen, but I also wanted to be able to use them when needed.


**Solution:** My first attempt was to create a frame on top of the actionbars that I wanted to show/hide and to handle the logic in OnMouseEnter / OnMouseLeave. The problem with this approach was that when I showed the hidden actionbars they would have higher priority which would cause the OnMouseLeave on the created frame to fire, which lead to flickering behavior. Another problem was that the hidden frame was blocking the slots on the actionbar if it had a higher priority, and wouldn't register mouse movement if it had a lower priority.

The resulting solution I came up with at the time was to have an additional larger outer frame and a smaller inner frame, when the mouse enters the inner frame the actionbars are shown, and when the mouse enters the outer frame they are hidden.

<!-- <Collapse title="Bar Hiding Code">
    <SBH_BarHider />
</Collapse> -->



<MDVideo width="1280" height="720" src="/projectmedia/addons/showhidebars.mp4" alt="a video showing the actionbars in wow overlaid with green rectangles, the actionbars disappearing and reappearing when the mouse enters the outer and inner rectangles"/>




</ArticleComponent>