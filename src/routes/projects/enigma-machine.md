---
title: Enigma Machine
date: "2022-07-03"
thumb: "enigmamachine.png"
pos: "center"
lang: "c++"
---

<script>
	import Collapse from "$components/Collapse.svelte";
    import CoolCode from "$snippets/coolcode.md"
    import ButtonLink from "$components/ButtonLink.svelte";
</script>

# Enigma Machine Project

<br>

## Background
I got the inspiration to make an Enigma Machine after seeing the movie "The Imitation Game" and watching a few Computerphile youtube-videos that talked about how the machine worked and how it was cracked. My goal with the project was to make a machine that had rotorwheels you could manually rotate and swap out for different configs, have a working lampboard that shows the encrypted letter, and to have a plugboard where you can manually link letters together. I did not look at any existing algorithms, instead I limited myself to the following resources:
<br>
<ButtonLink href="https://www.101computing.net/enigma-machine-emulator/">
    Emulator
</ButtonLink>
<ButtonLink href="https://www.ciphermachinesandcryptology.com/en/enigmatech.htm">
    Article
</ButtonLink>
<ButtonLink href="https://en.wikipedia.org/wiki/Enigma_rotor_details">
    Wikipedia page
</ButtonLink>


## Implementation
