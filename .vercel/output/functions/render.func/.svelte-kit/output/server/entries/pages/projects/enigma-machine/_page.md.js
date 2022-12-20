import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { B as ButtonLink, M as MDVideo, C as Collapse } from "../../../../chunks/ButtonLink.js";
import { B as Button } from "../../../../chunks/Button.js";
import { S as SectionComponent } from "../../../../chunks/SectionComponent.js";
const Enigmastruct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-cpp"}"><!-- HTML_TAG_START -->${`<code class="language-cpp"><span class="token function">USTRUCT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">struct</span> <span class="token class-name">FEnigmaComponents</span>
<span class="token punctuation">&#123;</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachineLamp<span class="token operator">*</span> Lamp<span class="token punctuation">;</span>
	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachineKey<span class="token operator">*</span> Key<span class="token punctuation">;</span>
	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachinePort<span class="token operator">*</span> Port<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const Rotorencryption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-cpp"}"><!-- HTML_TAG_START -->${`<code class="language-cpp">NewAlphabetIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
InputLetter <span class="token operator">=</span> Alphabet<span class="token punctuation">[</span>Input<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>reverse <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
	Index <span class="token operator">=</span> Input <span class="token operator">+</span> CurrentRotationOffset <span class="token operator">-</span> RingSettingOffset<span class="token punctuation">;</span>
	<span class="token function">Wrap</span><span class="token punctuation">(</span>Index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	CipherLetter <span class="token operator">=</span> CipherArr<span class="token punctuation">[</span>Index<span class="token punctuation">]</span><span class="token punctuation">;</span>
	NewAlphabetIndex <span class="token operator">=</span> CipherLetter <span class="token operator">-</span> <span class="token char">'A'</span> <span class="token operator">-</span> CurrentRotationOffset <span class="token operator">+</span> RingSettingOffset<span class="token punctuation">;</span>
	<span class="token function">Wrap</span><span class="token punctuation">(</span>NewAlphabetIndex<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>reverse <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
	Index <span class="token operator">=</span> Input <span class="token operator">+</span> CurrentRotationOffset <span class="token operator">-</span> RingSettingOffset<span class="token punctuation">;</span>
	<span class="token function">Wrap</span><span class="token punctuation">(</span>Index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>CipherArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">'A'</span> <span class="token operator">==</span> Index<span class="token punctuation">)</span>
		<span class="token punctuation">&#123;</span>
			NewAlphabetIndex <span class="token operator">=</span> i <span class="token operator">-</span> CurrentRotationOffset <span class="token operator">+</span> RingSettingOffset<span class="token punctuation">;</span>
			<span class="token function">Wrap</span><span class="token punctuation">(</span>NewAlphabetIndex<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">return</span> NewAlphabetIndex<span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const Enigmaencryption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-cpp"}"><!-- HTML_TAG_START -->${`<code class="language-cpp">int32 <span class="token class-name">AEnigmaMachine</span><span class="token double-colon punctuation">::</span><span class="token function">EncodeLetter</span><span class="token punctuation">(</span>int32 AlphabetIndex<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
	<span class="token comment">/*
	* ENCRYPTION LOGIC
	* 1. Rotate first wheel every time a key is pressed.
	* 2. Go through plugboard (Check if the letter port is connected to another port if so replace letter)
	* 3. Encrypt the input based on each wheel's configs.
	* 4. Get the connected letter in the reflector.
	* 5. Reverse through the wheels. 
		(different encryption to simulate the electric signal going the opposite way)
	* 6. Go through plugboard again
	* 7. Turn on the lamp matching the encrypted key, and output it to the onscreen textwidget.
	*/</span>

	RotorWheels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-></span><span class="token function">Rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	FString Key <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
	Key<span class="token punctuation">.</span><span class="token function">AppendChar</span><span class="token punctuation">(</span><span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">(</span>AlphabetIndex <span class="token operator">+</span> <span class="token char">'A'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	TWeakObjectPtr<span class="token operator">&lt;</span>AMachinePort<span class="token operator">></span> Port <span class="token operator">=</span> LetterComponents<span class="token punctuation">[</span>Key<span class="token punctuation">]</span><span class="token punctuation">.</span>Port<span class="token operator">-></span><span class="token function">GetSwappedPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Port <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		AlphabetIndex <span class="token operator">=</span> Port<span class="token operator">-></span><span class="token function">GetLetterIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	TCHAR Letter<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		AlphabetIndex <span class="token operator">=</span> RotorWheels<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-></span><span class="token function">Encode</span><span class="token punctuation">(</span>AlphabetIndex<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		Letter <span class="token operator">=</span> <span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">(</span>AlphabetIndex <span class="token operator">+</span> <span class="token char">'A'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	AlphabetIndex <span class="token operator">=</span> ReflectorWheel<span class="token operator">-></span><span class="token function">Encode</span><span class="token punctuation">(</span>AlphabetIndex<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	Letter <span class="token operator">=</span> <span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">(</span>AlphabetIndex <span class="token operator">+</span> <span class="token char">'A'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		AlphabetIndex <span class="token operator">=</span> RotorWheels<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-></span><span class="token function">Encode</span><span class="token punctuation">(</span>AlphabetIndex<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		Letter <span class="token operator">=</span> <span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">(</span>AlphabetIndex <span class="token operator">+</span> <span class="token char">'A'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	Key <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
	Key<span class="token punctuation">.</span><span class="token function">AppendChar</span><span class="token punctuation">(</span>Letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
	Port <span class="token operator">=</span> LetterComponents<span class="token punctuation">[</span>Key<span class="token punctuation">]</span><span class="token punctuation">.</span>Port<span class="token operator">-></span><span class="token function">GetSwappedPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Port <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		AlphabetIndex <span class="token operator">=</span> Port<span class="token operator">-></span><span class="token function">GetLetterIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		Letter <span class="token operator">=</span> <span class="token punctuation">(</span>TCHAR<span class="token punctuation">)</span><span class="token punctuation">(</span>AlphabetIndex <span class="token operator">+</span> <span class="token char">'A'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token keyword">if</span> <span class="token punctuation">(</span>LastLampKey <span class="token operator">!=</span> <span class="token string">""</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		LetterComponents<span class="token punctuation">[</span>LastLampKey<span class="token punctuation">]</span><span class="token punctuation">.</span>Lamp<span class="token operator">-></span><span class="token function">TurnOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	LastLampKey<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	LastLampKey <span class="token operator">=</span> LastLampKey<span class="token punctuation">.</span><span class="token function">AppendChar</span><span class="token punctuation">(</span>Letter<span class="token punctuation">)</span><span class="token punctuation">;</span>
	LetterComponents<span class="token punctuation">[</span>LastLampKey<span class="token punctuation">]</span><span class="token punctuation">.</span>Lamp<span class="token operator">-></span><span class="token function">TurnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	FString ReadableText <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
	OutputText <span class="token operator">+=</span> Letter<span class="token punctuation">;</span>
	ReadableText <span class="token operator">+=</span> OutputText<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> OutputText<span class="token punctuation">.</span><span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
			ReadableText <span class="token operator">+=</span> <span class="token string">" "</span><span class="token punctuation">;</span>

		ReadableText <span class="token operator">+=</span> OutputText<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	OutputWidget<span class="token operator">-></span><span class="token function">SetText</span><span class="token punctuation">(</span>ReadableText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`}<!-- HTML_TAG_END --></pre>`;
});
const metadata = {
  "title": "Enigma Machine",
  "date": "2022-07-03",
  "thumb": "enigmamachine.png",
  "pos": "center",
  "lang": "c++"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-sgbnlp_START -->${$$result.title = `<title>DavidB | Enigma Machine</title>`, ""}<!-- HEAD_svelte-sgbnlp_END -->`, ""}


${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {})}
${validate_component(SectionComponent, "SectionComponent").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>Enigma Machine Project</h1>
<h2>Background</h2>
<p>I got the inspiration to make an Enigma Machine after seeing the movie \u201CThe Imitation Game\u201D and watching a few Computerphile youtube-videos that talked about how the machine worked and how it was cracked. My goal with the project was to make a machine that had rotors you could manually rotate and swap out for different configs and to have a working lampboard that shows the encrypted letter. I did not look at any existing algorithms, instead, I limited myself to the following resources:</p>
${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          href: "https://www.101computing.net/enigma-machine-emulator/"
        },
        {},
        {
          default: () => {
            return `Emulator
`;
          }
        }
      )}
${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          href: "https://www.ciphermachinesandcryptology.com/en/enigmatech.htm"
        },
        {},
        {
          default: () => {
            return `Article
`;
          }
        }
      )}
${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          href: "https://en.wikipedia.org/wiki/Enigma_rotor_details"
        },
        {},
        {
          default: () => {
            return `Wikipedia page
`;
          }
        }
      )}
<h2>How it works</h2>
<p>A typical machine has an input board, plugboard, lampboard, three RotorWheels, and a reflector. The rotor wheels have unique configs but they behave like rotating substitution ciphers, so RotorWheel I in position 0 might take an A as input and output it as K, whereas another wheel might output the same as X. The wheels can be placed in any of the three positions, and the initial rotation offset and ring setting (which shifts the wiring around) can also be changed.</p>
${validate_component(MDVideo, "MDVideo").$$render(
        $$result,
        {
          width: "640",
          height: "360",
          src: "/projectmedia/enigmamachine_rotorwheel.mp4",
          alt: "a video showing a breakdown of a rotor, first showing the rotor plugs and wires rotating and then showing the wiring rotating separately "
        },
        {},
        {}
      )}
<p>The first wheel rotates every time a key is pressed, and when it reaches a so-called \u201Cturnover notch position\u201D it will rotate the next wheel, which in turn will rotate the last wheel when it reaches its own turnover position, similarly to an odometer. The rotation behaves like an index offset, which makes it so pressing the same key multiple times won\u2019t output the same letter multiple times in a row. At the end of the machine, there is a \u201Creflector\u201D that has pairs of letters mapped together (where a regular wheel would map A to B but not have B mapped to A, the reflector maps A to B and B to A).</p>
${validate_component(Collapse, "Collapse").$$render($$result, { title: "Encryption Example" }, {}, {
        default: () => {
          return `<ul><li>1. A is pressed</li>
<li>2. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1</li>
<li>3. Wheel 1 receives A and outputs C</li>
<li>4. Wheel 2 receives C and outputs D</li>
<li>5. Wheel 3 receives D and outputs F</li>
<li>6. Reflector receives F and outputs S</li>
<li>7. Wheel 3 receives S and outputs S</li>
<li>8. Wheel 2 receives S and outputs E</li>
<li>9. Wheel 1 receives E and outputs B</li>
<li>10. <strong>Lamp with letter B lights up</strong></li></ul>
<ul><li>1. A is pressed</li>
<li>2. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1</li>
<li>3. Wheel 1 receives A and outputs D</li>
<li>4. \u2026</li>
<li>10. <strong>Lamp with letter D lights up</strong></li></ul>
<ul><li>1. A is pressed</li>
<li>2. Wheel 1 rotates and a signal is sent from the keyboard to Wheel 1</li>
<li>3. Wheel 1 receives A and outputs E</li>
<li>4. \u2026</li>
<li>10. <strong>Lamp with letter Z lights up</strong></li></ul>`;
        }
      })}
<h2>Implementation</h2>
<p>For easy access and quick access to the interactable input key objects, lamps, and plugboard ports I chose to use a hashmap with structs.
I simulate the rotation of the wheels by incrementing an index offset, and the ring setting with a different offset which I use to change what letter gets returned by the encryption.
When a key is pressed I call EncodeLetter with the alphabet position of the letter as the parameter. </p>
${validate_component(Collapse, "Collapse").$$render($$result, { title: "EnigmaComponents Struct Snippet" }, {}, {
        default: () => {
          return `${validate_component(Enigmastruct, "EnigmaStruct").$$render($$result, {}, {}, {})}`;
        }
      })}
${validate_component(Collapse, "Collapse").$$render(
        $$result,
        {
          title: "Individual Rotor Encryption Snippet"
        },
        {},
        {
          default: () => {
            return `${validate_component(Rotorencryption, "RotorEncryption").$$render($$result, {}, {}, {})}`;
          }
        }
      )}
${validate_component(Collapse, "Collapse").$$render($$result, { title: "Machine Encryption Snippet" }, {}, {
        default: () => {
          return `${validate_component(Enigmaencryption, "EnigmaEncryption").$$render($$result, {}, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
