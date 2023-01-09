<script>
    import MDVideo from "$lib/components/MDVideo.svelte"
    import Collapse from "$lib/components/Collapse.svelte";
    import SectionComponent from "$lib/components/SectionComponent.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import TextLink from "$lib/components/TextLink.svelte";
</script>

<svelte:head>
<title>Bömberbots | David Bång</title>
</svelte:head>

<SectionComponent>

# Bömberbots

<Hero devTime="4 months" teamSize="2" engine="LÖVE" language="Lua" summary="Debug tools, render sorting, asset loader"/>

<br>
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots">
    Bömberbots Repo
</ButtonLink>


## About

**Page is under construction**

Bömberbots is a Bomberman clone that I developed together with <TextLink href="https://tomaswallin.se/#/">Tomas Wallin</TextLink>. The goal with the project was to improve our Lua knowledge and to make a smaller game using the LÖVE framework. 

## Introduction
Initially we set out to make a game inspired by a wave-based defense game inspired by the mod "Enfo's Team Survival" for Warcraft 3, where you control one character that gains items and abilities as you fight waves of monsters. While the initial concept of the game was scrapped in favor of creating a basic Bomberman game, we were able to salvage a lot of code we had previously written.

<MDVideo autoPlay="true" width="640" height="360" src="/projectmedia/bomberbots/initial_prototype.mp4" alt="two characters moving and shooting different projectiles at different speeds"/>

## Development

We both worked on a lot of different areas of the game, having no clear designated areas, however Tomas created the ECS structure which was integral to the project.

Some of my main contributions were the <TextLink href="">Spatial Hash Grid</TextLink> used for our collision system, render sorting, and some debug tools (used to check performance and more easily handle debug drawing.)

Whenever we were done with a feature we would review each other's code before it was merged into the main branch of the project, to make sure we were aware of any changes and knew how things worked.

### Spatial Hash Grid
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/spatial_grid.lua">
    Spatial Hash Grid
</ButtonLink>

A spatial hash grid is used to store objects based on their position and size, in a grid. By doing this we are able to only check AABB-collision against objects in adjacent grid cells.

The way the objects are stored in cells is by converting the size and position from world-space into grid-space, then finding the minimum and maximum indices (position - size, position + size) that they occupy and generate keys for these indices which we kept in the format "x_index;y_index".

<MDVideo autoPlay="true" width="640" height="360" src="/projectmedia/bomberbots/spatial_grid_demo.mp4" alt="characters moving around with black squares being drawn on top of nearby tiles"/>

### Render Sorting
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/game/entity_draw.lua">
    Drawing & Render Sort
</ButtonLink>

![Players, bombs and tiles being drawn on top of each other](/projectmedia/bomberbots/render_sort_example.png "Players, bombs and tiles being drawn on top of each other")

I struggled for a while with coming up with a way of sorting entities based on their position and Z-Index. I wanted a z-index in order to support giving entities different drawing priorities, but I also wanted to be able to sort using just a single "score" in order quickly sort them into a tidy array.

With my first attempts I was encountering issues where with the boundary values of the z-index due to overflow, causing entities on other rows to disappear or be drawn in the wrong order (as the stored entity ID would get replaced with another one).

In the final version the x position is stored in the fractional part of the score (position as a percentage relative to screen boundaries), the z-index is stored in the first 4 digits of the integer part, and the y position is stored in the 5th and greater digits of the integer part. The score is inserted into an array using binary insertion, and the entity ID is stored in a table using the score as key. With this setup we can easily loop through the array of scores, and get the ID from the entity table matching to each score in order to draw the corresponding entity.

<Collapse title="Sorting score calculation examples">

```
z_offset = 5000
z_index = [-5000..4999]
x = [0,1]
y = [-inf..inf]

score = 10000 * y + z + z_offset + x

Example: y = 1, z = 2345, x = .67, score = 12345.67
Example 2: y = 76, z = 5432, x = .10, score = 765432.10
```
</Collapse>

### Debug Tools
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/debug.lua">
    Performance Debug
</ButtonLink>

<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/gizmos.lua">
    Debug Gizmos
</ButtonLink>


</SectionComponent>