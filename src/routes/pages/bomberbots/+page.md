<script>
    import MDVideo from "$lib/components/MDVideo.svelte"
    import Collapse from "$lib/components/Collapse.svelte";
    import ArticleComponent from "$lib/components/ArticleComponent.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import Summary from "$lib/components/Summary.svelte";
    import TextLink from "$lib/components/TextLink.svelte";
</script>

<svelte:head>
<title>Bömberbots | David Bång</title>
</svelte:head>

<ArticleComponent>

# Bömberbots

<Summary devTime="4 months" teamSize="2" engine="LÖVE" language="Lua" summary="Debug tools, render sorting, asset loader"/>

<br>
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots">
    Bömberbots Repo
</ButtonLink>

## About

Bömberbots is a Bomberman clone that I developed together with <TextLink href="https://tomaswallin.se/#/">Tomas Wallin</TextLink>. The goal with the project was to improve our Lua knowledge and to make a smaller game using the LÖVE framework. 

## Introduction
Initially we set out to make a game inspired by a wave-based defense game inspired by the mod "Enfo's Team Survival" for Warcraft 3, where you control one character that gains items and abilities as you fight waves of monsters. While the initial concept of the game was scrapped in favor of creating a basic Bomberman game, we were able to salvage a lot of code we had previously written.

<MDVideo width="854" height="480" autoPlay="true" src="/projectmedia/bomberbots/initial_prototype.mp4" alt="two characters moving and shooting different projectiles at different speeds"/>

<MDVideo width="854" height="480" autoPlay="true" src="/projectmedia/bomberbots/gameplay_game3.mp4" alt="the finished bomberman game with players walking around and blowing stuff up with bombs"/>

## Development

We both worked on a lot of different areas of the game, with no clear designated individual focus areas. However, among other things, Tomas created the ECS structure which was integral to the project.

Some of my main contributions were the <TextLink href="">Spatial Hash Grid</TextLink> used for our collision system, render order sorting, and some debug tools (used to check performance and more easily handle debug drawing.)

Whenever we were done with a feature we would review each other's code before it was merged into the main branch of the project, to make sure we were aware of any changes and knew how things worked.

### Spatial Hash Grid
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/spatial_grid.lua">
    Spatial Hash Grid
</ButtonLink>

A spatial hash grid is used to store objects based on their position and size in a grid. By doing this we are able to only check AABB-collision against objects in adjacent grid cells.

The way the objects are stored in cells is by converting the size and position from world-space into grid-space, then finding the minimum and maximum indices (position - size, position + size) that they occupy and generate keys for these indices which we kept in the format "x_index;y_index". After that we could get the objects from the cells we wanted by just passing in the cell-indices.

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


#### Performance

<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/debug.lua">
    Performance Debug
</ButtonLink>

We wanted a way to easily verify whether a change to code would result in a performance improvement or not, and to measure the time it took for functions to execute so that we could find out where we improvements could be made.

I created a get_execution_time function which accepted a function and it's parameters as a variable argument, which meant we could use it for any type of function. The get_execution_time would execute the function and return the amount of time it took in seconds accurate to the microsecond. I additionally added a few print methods which would first get the time and then print out the time it took in a specified time format (milliseconds, microseconds, nanoseconds etc.)

#### Debug Drawing
<ButtonLink isGithubLink=true href="https://github.com/Sodaro/bomberbots/blob/main/code/engine/gizmos.lua">
    Debug Gizmos
</ButtonLink>

The drawing methods supplied by the LÖVE framework requires you to call them from inside the love.draw() function, which was inconvenient as we often wanted to draw from inside update(). To get around this I created few functions based on the LÖVE drawing functions, that create the shape and store the needed arguments in a table, as well as the amount of time it should be drawn for. The shapes stored in the table will then get drawn in the draw() function, but the shapes can be added from anywhere.

## Learning Outcomes

This is one of the largest projects developed outside of school that I have finished. Prior to this project I had only used Lua for modding other games, and using it with the LÖVE framework helped me learn a lot more about its intricacies. I also learned a lot from working with Tomas who is a really talented programmer and helped me become more organized and consistent in my code structure. Finally, I learned about working in ECS, what a spatial hash grid is and how to implement one, and lots of other smaller things.

Despite the project not becoming the game that we originally planned, I am very happy with it!

</ArticleComponent>