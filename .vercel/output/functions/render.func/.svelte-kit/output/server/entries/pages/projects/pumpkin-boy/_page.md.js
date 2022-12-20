import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as SectionComponent } from "../../../../chunks/SectionComponent.js";
const metadata = {
  "title": "Pumpkin Boy",
  "date": "2022-07-02",
  "thumb": "pumpkinboy.png",
  "pos": "center",
  "lang": "c#"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-vudgef_START -->${$$result.title = `<title>DavidB | Pumpkin Boy</title>`, ""}<!-- HEAD_svelte-vudgef_END -->`, ""}


${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {})}
${validate_component(SectionComponent, "SectionComponent").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Pumpkin boy</h1>
<h2>About</h2>
<p>Pumpkin Boy is a puzzle game where you play as a child that has been cursed by a witch, turning their head into a detachable pumpkin head. The character must throw their head to places the body can\u2019t reach, and move boxes around to weigh down pressure plates in order to escape a witch\u2019s dungeon. The game is a single-player game where the body and head are controlled by left-, and right-stick respectively.</p>
<h2>Implementation</h2>
<h3>Movement</h3>
<p>The character\u2019s body has 1:1 movement without any kind of acceleration or drag and can walk up and down slopes. The head will collide with walls while attached, forcing the player to drop it to go through small gaps. While detached the player can move the head around, which is done by applying a force in the input direction. To have more control over the head movement and be able to stop easily, I added a velocity limiter and if there is no input given the velocity is quickly reduced until the head comes to a stop.
<img src="${"/projectmedia/pumpkin/body_head.png"}" alt="${"FStack view of the hide/show bar frames"}" title="${"Displaying the two frames used for hiding/showing the right actionbar."}">
<img src="${"/projectmedia/pumpkin/body_nohead.png"}" alt="${"FStack view of the hide/show bar frames"}" title="${"Displaying the two frames used for hiding/showing the right actionbar."}"></p>
<h3>Head Throw</h3>
<p>To throw the head we start by enabling rigidbody properties (removing position/rotation constraints, enabling gravity, etc) unparent it from the body and then apply a force to it. The angle at which the head is thrown is based on the duration that the throw button is held, it starts at 0 and increases until a specified value (which we had set to 60 degrees in the build), after which it locks for a few seconds and then reverses back to 0. The line shows the trajectory the head will have in the air, and is calculated by using the projectile motion formula with an assumed air resistance of 0. Additional points were added to the line to show points beyond the starting height, and if the line were to intersect a collider it stops at the collision and the point is used as the final point for the line.</p>
<p><img src="${"/projectmedia/pumpkin/throw_text.png"}" alt="${"FStack view of the hide/show bar frames"}" title="${"Displaying the two frames used for hiding/showing the right actionbar."}"></p>
<h3>Box Pushing</h3>
<p>We wanted to have boxes that could be pushed or pulled around, and that should physically behave like boxes (if sticking out over an edge they should start rotating and fall). The first iteration I did was to just apply a velocity to the box based on the player\u2019s movement and to lock the player from rotating while doing so. This sort of worked, but the box would tumble around when pushed as the friction of the ground would have an effect and small crevices and steps would sometimes cause the box to fly off.</p>
<p>The solution I used, in the end, was to lock the player movement, turn off gravity and make the box kinematic, and then move the box based on the character movement and the initial offset the box had to the player when it was grabbed. To prevent the player from placing the box inside walls I checked for box collisions from the character using the size of the box and the velocity of the player, and if the box \u201Cwould overlap something\u201D I set the velocity of the player to zero.</p>
<p><img src="${"/projectmedia/pumpkin/box_push.png"}" alt="${"FStack view of the hide/show bar frames"}" title="${"Displaying the two frames used for hiding/showing the right actionbar."}"></p>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
