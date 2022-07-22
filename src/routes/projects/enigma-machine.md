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

<svelte:head>
<title>DavidB | Enigma Machine</title>
</svelte:head>

# Enigma Machine Project
<section>

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

</section>

<section>

## Implementation
The machine has a map of structs, which are used to group together the keys, lamps, and the port on the plugboard. The machine also has three RotorWheels and a reflector. The rotorwheels behave like ciphers and have unique configs, so RotorWheel I in position 0 might take an A as input and output it as K, whereas another wheel might output the same as X. When a key is pressed the right-most wheel rotates before the signal is sent through, and when a wheel reaches a so called "notch-position" it will rotate the next wheel, similarly to an odometer. When the letter reaches the end it goes through a "reflector" which has pairs of letters mapped together (where a regular wheel would map A to B but not have B mapped to A, the reflector maps A to B and B to A), and then the signal goes through the same wheels again and finally lights up a lamp with the encrypted letter. The rotation behaves like an offset, which makes it so pressing the same key multiple times won't output the same letter.

<Collapse title="Encryption example step by step">

- 1\. A is pressed
- 2\. Wheel 1 rotates and signal is sent from keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs C
- 4\. Wheel 2 receives C and outputs D
- 5\. Wheel 3 receives D and outputs F
- 6\. Reflector receives F and outputs S
- 7\. Wheel 3 receives S and outputs S
- 8\. Wheel 2 receives S and outputs E
- 9\. Wheel 1 receives E and outputs B
- 10\. **Lamp with letter B lights up**

<br>

- 1\. A is pressed
- 2\. Wheel 1 rotates and signal is sent from keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs D
- 4\. ...
- 10\. **Lamp with letter D lights up**

<br>

- 1\. A is pressed
- 2\. Wheel 1 rotates and signal is sent from keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs E
- 4\. ...
- 10\. **Lamp with letter Z lights up**

</Collapse>

</section>