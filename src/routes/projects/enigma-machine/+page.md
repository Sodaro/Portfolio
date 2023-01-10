<script>
    import MDVideo from "$lib/components/MDVideo.svelte"
    import Collapse from "$lib/components/Collapse.svelte";
    import EnigmaStruct from "$lib/snippets/enigmastruct.md";
    import RotorEncryption from "$lib/snippets/rotorencryption.md";
    import EnigmaEncryption from "$lib/snippets/enigmaencryption.md";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import SectionComponent from "$lib/components/SectionComponent.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import TextLink from "$lib/components/TextLink.svelte";
</script>

<svelte:head>
<title>Enigma Machine | David Bång</title>
</svelte:head>

<SectionComponent>

# Enigma Machine Project

<Hero devTime="1 month" teamSize="1" engine="Unreal Engine 4" language="C++" summary="Player movement, head throwing (Projectile Motion) with preview line, and box pushing"/>

<br>
<ButtonLink href="https://github.com/Sodaro/Unreal-ProjectEnigma" isGithubLink=true>
    EnigmaMachine Repo
</ButtonLink>

## Background
I got the inspiration to make an Enigma Machine after seeing the movie "The Imitation Game" and watching a few Computerphile youtube-videos that talked about how the machine worked and how the code was cracked. My goal with the project was to make a machine that had rotors you could manually rotate and swap out for different configs and to have a working lampboard that shows the encrypted letter. 

### Resources
I did not want to look at any existing algorithms, as I wanted to try and figure out how the machine works internally. As such I limited myself to the following resources, as well as looking up images of disassembled machines.

<ButtonLink href="https://www.101computing.net/enigma-machine-emulator/">
    Emulator
</ButtonLink>
<ButtonLink href="https://www.ciphermachinesandcryptology.com/en/enigmatech.htm">
    Article
</ButtonLink>
<ButtonLink href="https://en.wikipedia.org/wiki/Enigma_rotor_details">
    Wikipedia page
</ButtonLink>


### How it works
A typical machine has an input board, plugboard, lampboard, three RotorWheels, and a reflector. The rotor wheels have unique configs but they behave like rotating substitution ciphers, so RotorWheel I in position 0 might take an A as input and output it as K, whereas another wheel might output the same as X. The wheels can be placed in any of the three positions, and the initial rotation offset and ring setting (which shifts the wiring around) can also be changed.

<MDVideo width="640" height="360" showControls="true" src="/projectmedia/enigmamachine_rotorwheel.mp4" alt="a video showing a breakdown of a rotor, first showing the rotor plugs and wires rotating and then showing the wiring rotating separately "/>

The first wheel rotates every time a key is pressed, and when it reaches a so-called "turnover notch position" it will rotate the next wheel, which in turn will rotate the last wheel when it reaches its own turnover position, similarly to an odometer. The rotation behaves like an index offset, which makes it so pressing the same key multiple times won't output the same letter multiple times in a row. At the end of the machine, there is a "reflector" that has pairs of letters mapped together (where a regular wheel would map A to B but not have B mapped to A, the reflector maps A to B and B to A).


<Collapse title="Encryption Example">

- 1\. A is pressed
- 2\. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs C
- 4\. Wheel 2 receives C and outputs D
- 5\. Wheel 3 receives D and outputs F
- 6\. Reflector receives F and outputs S
- 7\. Wheel 3 receives S and outputs S
- 8\. Wheel 2 receives S and outputs E
- 9\. Wheel 1 receives E and outputs B
- 10\. **Lamp with letter B lights up**



- 1\. A is pressed
- 2\. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs D
- 4\. ...
- 10\. **Lamp with letter D lights up**



- 1\. A is pressed
- 2\. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1
- 3\. Wheel 1 receives A and outputs E
- 4\. ...
- 10\. **Lamp with letter Z lights up**

</Collapse>


## Implementation
For easy and quick access to the interactive input key objects, lamps, and plug-board ports; I chose to use a hash-map with custom structs.
I simulate the rotation of the wheels by incrementing an index offset, and the ring setting with a different index offset. These offsets change which letter gets returned by the encryption.
When a key is pressed I call EncodeLetter with the alphabet position of the letter as the parameter. 
<Collapse title="EnigmaComponents Struct Snippet">

<EnigmaStruct />

</Collapse>

<Collapse title="Individual Rotor Encryption Snippet">

<RotorEncryption />
</Collapse>

<Collapse title="Machine Encryption Snippet">

<EnigmaEncryption />

</Collapse>

</SectionComponent>