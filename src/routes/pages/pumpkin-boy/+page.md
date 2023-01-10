<script>
    import SectionComponent from "$lib/components/SectionComponent.svelte";
    import Team from "$lib/components/Team.svelte";
    import Summary from "$lib/components/Summary.svelte";
    import TextLink from "$lib/components/TextLink.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import MDVideo from "$lib/components/MDVideo.svelte";
</script>

<svelte:head>
<title>DavidB | Pumpkin Boy</title>
</svelte:head>

<SectionComponent>

# Pumpkin boy

<Summary devTime="2 weeks" teamSize="8" engine="Unity" language="C#" summary="Player movement, head throwing (Projectile Motion), and box pushing"/>

<br>
<ButtonLink href="https://github.com/Sodaro/PumpkinBoy" isGithubLink=true>
    Pumpkin Boy Repo
</ButtonLink>

## About
Pumpkin Boy is a 3D puzzle we developed in 2 weeks total as it was to be shown at Museum of Technology in Stockholm.

We were 8 people in total working on the game: 3 designers, 3 programmers, and 2 artists (listed in Team section at the bottom.) <TextLink href="https://github.com/Nitintito">Jason F</TextLink> worked on the event system used in all the puzzles, <TextLink href="https://ruthenium44.wixsite.com/portfolio">Ruta S</TextLink> worked on a Tween system and shaders, and I worked on the player mechanics.



## Implementation

### Movement and Box pushing
<ButtonLink href="https://github.com/Sodaro/PumpkinBoy/blob/main/Assets/Scripts/Player/BodyMovement.cs">Body Movement & Box Pushing</ButtonLink>
<ButtonLink href="https://github.com/Sodaro/PumpkinBoy/blob/main/Assets/Scripts/Player/HeadMovement.cs">Head Movement</ButtonLink>

#### Movement
The character's body has 1:1 movement without any kind of acceleration or drag and can walk up and down slopes. The head will collide with walls while attached, forcing the player to drop it to go through small gaps. 

The character's head is moved using by adding forces to it. To make it easier to stop in the position you want the velocity is quickly reduced through code if no input is given.

#### Box Pushing
The designers wanted to have boxes that could be pushed or pulled around, and that they should "feel" like boxes (if dropped on a ledge they should start rotating and fall). The first iteration I did was to just apply a velocity to the box based on the player's movement and to lock the player from rotating while doing so. This sort of worked, but the box would tumble around when pushed as the friction of the ground would have affect it and small bumps would sometimes cause the box to fly off.

The solution I used, in the end, was to lock the player rotation, turn off gravity and make the box kinematic, and then move the box based on the character movement and the initial offset the box had to the player when it was grabbed. To prevent the player from placing the box inside walls I checked for box collisions from the character using the size of the box and the velocity of the player, and if the "collider box" would overlap I prevent the player from moving in that direction.

### Head Throw

<ButtonLink href="https://github.com/Sodaro/PumpkinBoy/blob/main/Assets/Scripts/Player/HeadInteraction.cs">Head Throwing & Pickup</ButtonLink>

To throw the head we start by removing position/rotation constraints and enabling gravity, un-parent it from the body, and then apply a force to it. The angle at which the head is thrown is based on the duration that the throw button is held, it starts at 0 and increases until a specified max-value (which we had set to 60 degrees in the build), after which it locks for a few seconds and then reverses back to 0. The line shows the trajectory the head will have in the air, and is calculated by using the projectile motion formula with an assumed air resistance of 0. Additional points were added to the line to show points beyond the starting height, and if the line were to intersect a collider it stops at the collision and the point is used as the final point for the line.

In the video below the throwing preview is permanently enabled, in the released build the line is disabled when the character is not actively charging the throw.

<MDVideo width="1280" height="720" autoPlay="true" src="/projectmedia/pumpkin/gameplay.mp4" alt="the player character throwing a pumpkin head which follows an orange line through the air"/>

![Diagram showing the Projectile Motion calculation used for rendering the throw line](/projectmedia/pumpkin/throw_text.png "Headthrowing line calculation")

## Learning Outcomes
This was the first gameproject I did as part of the Futuregames education. Prior to this project I had not really collaborated with other programmers, which was something that I found really insightful. I also got to look up some physics formulas I had not used in a long time and never used in a game context, which needed some adapting to get into a working state. The code itself I feel could be massively improved upon, but at the same time I'm happy with what I was able to write in the 2 weeks with some days being lost to planning and other events we had to attend.

## Team

<Team developers={{programmers:["David Bång", "Ruta Sapokaite", "Jason Sandelin Francis"], designers:["Joshua Ásberg", "Set Engberg", "Dani Vitelli"], artists:["Sandra Pärnaste", "Wiktor Kaluba"]}} />

</SectionComponent>