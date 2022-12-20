import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { C as Collapse, M as MDVideo, B as ButtonLink } from "../../../../chunks/ButtonLink.js";
import { S as SectionComponent } from "../../../../chunks/SectionComponent.js";
const Chatfilter_filtering = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-lua"}"><!-- HTML_TAG_START -->${`<code class="language-lua"><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">RemoveIcons</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  msg <span class="token operator">=</span> msg<span class="token punctuation">:</span><span class="token function">gsub</span><span class="token punctuation">(</span><span class="token string">"&#123;%a+%d+&#125;"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  msg <span class="token operator">=</span> msg<span class="token punctuation">:</span><span class="token function">gsub</span><span class="token punctuation">(</span><span class="token string">"&#123;%a+&#125;"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> msg
<span class="token keyword">end</span>

<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">PrintFilteredMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"|cFFFFFF00"</span><span class="token punctuation">,</span> <span class="token string">"[SCF] message filtered:"</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token string">"|r"</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">MyChatFilter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> author<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">)</span>
  <span class="token keyword">local</span> authorName<span class="token punctuation">,</span> realm <span class="token operator">=</span> <span class="token function">strsplit</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">,</span> author<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">local</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> _<span class="token punctuation">,</span> lineID<span class="token punctuation">,</span> _ <span class="token operator">=</span> <span class="token punctuation">...</span>

  <span class="token keyword">if</span> authorName <span class="token operator">==</span> playerName <span class="token keyword">then</span>
    <span class="token keyword">return</span> <span class="token keyword">false</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> author<span class="token punctuation">,</span> <span class="token punctuation">...</span> <span class="token comment">--do not filter player, return early</span>
  <span class="token keyword">end</span>

  <span class="token keyword">local</span> shouldFilter <span class="token operator">=</span> <span class="token keyword">false</span>
  msg <span class="token operator">=</span> <span class="token function">RemoveIcons</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  loweredMsg <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">lower</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>

  <span class="token keyword">for</span> filter<span class="token punctuation">,</span> _ <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>filters<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">local</span> startPos<span class="token punctuation">,</span> endPos <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>loweredMsg<span class="token punctuation">,</span> filter<span class="token punctuation">)</span>
    <span class="token keyword">if</span> endPos <span class="token operator">~=</span> <span class="token keyword">nil</span> <span class="token keyword">then</span> <span class="token comment">--there is a match</span>
      <span class="token keyword">if</span> endPos <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">></span> <span class="token operator">#</span>loweredMsg <span class="token keyword">then</span> <span class="token comment">--the text is longer than full message</span>
        shouldFilter <span class="token operator">=</span> <span class="token keyword">true</span>
        <span class="token keyword">break</span>
      <span class="token keyword">end</span>
      <span class="token keyword">local</span> followingChar <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span>loweredMsg<span class="token punctuation">,</span> endPos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> endPos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>followingChar<span class="token punctuation">,</span> <span class="token string">"[^a-zA-Z%d]"</span><span class="token punctuation">)</span> <span class="token keyword">then</span> <span class="token comment">--following char is whitespace or non-alphanumeric, filter the message</span>
        shouldFilter <span class="token operator">=</span> <span class="token keyword">true</span>
        <span class="token keyword">break</span>
      <span class="token keyword">end</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

  <span class="token keyword">if</span> shouldFilter <span class="token keyword">then</span>
    <span class="token keyword">if</span> debugEnabled <span class="token keyword">and</span> lineID <span class="token operator">~=</span> lastLineID <span class="token keyword">then</span>
      <span class="token function">PrintFilteredMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

  lastLineID <span class="token operator">=</span> lineID

  <span class="token keyword">return</span> shouldFilter<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> author<span class="token punctuation">,</span> <span class="token punctuation">...</span> <span class="token comment">--if shouldfilter is true the message is filtered out</span>
<span class="token keyword">end</span>

<span class="token function">ChatFrame_AddMessageEventFilter</span><span class="token punctuation">(</span><span class="token string">"CHAT_MSG_CHANNEL"</span><span class="token punctuation">,</span> MyChatFilter<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const Chatfilter_commands = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-lua"}"><!-- HTML_TAG_START -->${`<code class="language-lua">SLASH_SCF1 <span class="token operator">=</span> <span class="token string">"/SCF"</span>
<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">MyCommands</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> editbox<span class="token punctuation">)</span>
  <span class="token keyword">local</span> case<span class="token punctuation">,</span> text <span class="token operator">=</span> <span class="token function">strsplit</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> case <span class="token operator">==</span> <span class="token string">"add"</span> <span class="token keyword">then</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> text<span class="token punctuation">:</span><span class="token function">gmatch</span><span class="token punctuation">(</span><span class="token string">"%S+"</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
      <span class="token keyword">if</span> word<span class="token punctuation">:</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
        word <span class="token operator">=</span> <span class="token function">gsub</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token string">"_"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span>
      <span class="token keyword">end</span>
      <span class="token keyword">if</span> <span class="token keyword">not</span> Set<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> word<span class="token punctuation">)</span> <span class="token keyword">then</span>
        word <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">lower</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
        Set<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> word<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"SCF Added: "</span> <span class="token operator">..</span> word<span class="token punctuation">)</span>
      <span class="token keyword">end</span>
    <span class="token keyword">end</span>
  <span class="token keyword">elseif</span> case <span class="token operator">==</span> <span class="token string">"remove"</span> <span class="token keyword">then</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> text<span class="token punctuation">:</span><span class="token function">gmatch</span><span class="token punctuation">(</span><span class="token string">"%S+"</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
      <span class="token keyword">if</span> word<span class="token punctuation">:</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">"_"</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
        word <span class="token operator">=</span> <span class="token function">gsub</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token string">"_"</span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span>
      <span class="token keyword">end</span>
      <span class="token keyword">if</span> Set<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> word<span class="token punctuation">)</span> <span class="token keyword">then</span>
        word <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">lower</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
        Set<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> word<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"SCF Removed: "</span> <span class="token operator">..</span> word<span class="token punctuation">)</span>
      <span class="token keyword">end</span>
    <span class="token keyword">end</span>
  <span class="token keyword">elseif</span> case <span class="token operator">==</span> <span class="token string">"debug"</span> <span class="token keyword">then</span>
    debugEnabled <span class="token operator">=</span> <span class="token keyword">not</span> debugEnabled
    <span class="token keyword">local</span> val <span class="token operator">=</span> debugEnabled <span class="token keyword">and</span> <span class="token string">"ON"</span> <span class="token keyword">or</span> <span class="token string">"OFF"</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"SCF debugging toggled"</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>
  <span class="token keyword">elseif</span> case <span class="token operator">==</span> <span class="token string">"clear"</span> <span class="token keyword">then</span>
    <span class="token keyword">for</span> filter<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>filters<span class="token punctuation">)</span> <span class="token keyword">do</span>
      Set<span class="token punctuation">.</span><span class="token function">Remove</span><span class="token punctuation">(</span>filters<span class="token punctuation">,</span> filter<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"SCF Cleared"</span><span class="token punctuation">)</span>
  <span class="token keyword">elseif</span> case <span class="token operator">==</span> <span class="token string">"print"</span> <span class="token keyword">then</span>
    <span class="token function">PrintFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"SCF: Unknown parameter. Valid parameters: add x, remove x, clear, debug"</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

SlashCmdList<span class="token punctuation">[</span><span class="token string">"SCF"</span><span class="token punctuation">]</span> <span class="token operator">=</span> MyCommands</code>`}<!-- HTML_TAG_END --></pre>`;
});
const Barhider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<pre class="${"language-lua"}"><!-- HTML_TAG_START -->${`<code class="language-lua"><span class="token keyword">local</span> frame <span class="token operator">=</span> _G<span class="token punctuation">[</span><span class="token string">"VerticalMultiBarsContainer"</span><span class="token punctuation">]</span>
<span class="token keyword">local</span> frame2 <span class="token operator">=</span> _G<span class="token punctuation">[</span><span class="token string">"MultiBarLeft"</span><span class="token punctuation">]</span>

<span class="token keyword">local</span> hideframe <span class="token operator">=</span> <span class="token function">CreateFrame</span><span class="token punctuation">(</span><span class="token string">"Frame"</span><span class="token punctuation">,</span> <span class="token string">"DaveHideFrame"</span><span class="token punctuation">,</span> UIParent<span class="token punctuation">)</span>
hideframe<span class="token punctuation">:</span><span class="token function">SetFrameStrata</span><span class="token punctuation">(</span><span class="token string">"BACKGROUND"</span><span class="token punctuation">)</span>
hideframe<span class="token punctuation">:</span><span class="token function">SetWidth</span><span class="token punctuation">(</span><span class="token number">140</span><span class="token punctuation">)</span>
hideframe<span class="token punctuation">:</span><span class="token function">SetHeight</span><span class="token punctuation">(</span><span class="token number">640</span><span class="token punctuation">)</span>
hideframe<span class="token punctuation">:</span><span class="token function">SetPoint</span><span class="token punctuation">(</span><span class="token string">"RIGHT"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
hideframe<span class="token punctuation">:</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> showframe <span class="token operator">=</span> <span class="token function">CreateFrame</span><span class="token punctuation">(</span><span class="token string">"Frame"</span><span class="token punctuation">,</span> <span class="token string">"DaveShowFrame"</span><span class="token punctuation">,</span> DaveHideFrame<span class="token punctuation">)</span>
showframe<span class="token punctuation">:</span><span class="token function">SetFrameStrata</span><span class="token punctuation">(</span><span class="token string">"BACKGROUND"</span><span class="token punctuation">)</span>
showframe<span class="token punctuation">:</span><span class="token function">SetWidth</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
showframe<span class="token punctuation">:</span><span class="token function">SetHeight</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">)</span>
showframe<span class="token punctuation">:</span><span class="token function">SetPoint</span><span class="token punctuation">(</span><span class="token string">"RIGHT"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
showframe<span class="token punctuation">:</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

showframe<span class="token punctuation">:</span><span class="token function">HookScript</span><span class="token punctuation">(</span><span class="token string">"OnEnter"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token function">InCombatLockdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">false</span> <span class="token keyword">then</span>
    <span class="token function">ShowBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>

hideframe<span class="token punctuation">:</span><span class="token function">HookScript</span><span class="token punctuation">(</span><span class="token string">"OnEnter"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token function">InCombatLockdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">false</span> <span class="token keyword">then</span>
    <span class="token function">HideBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>

hideframe<span class="token punctuation">:</span><span class="token function">RegisterEvent</span><span class="token punctuation">(</span><span class="token string">"PLAYER_ENTERING_WORLD"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hideframe<span class="token punctuation">:</span><span class="token function">RegisterEvent</span><span class="token punctuation">(</span><span class="token string">"PLAYER_REGEN_DISABLED"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hideframe<span class="token punctuation">:</span><span class="token function">RegisterEvent</span><span class="token punctuation">(</span><span class="token string">"PLAYER_REGEN_ENABLED"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">eventHandler</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> event<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> event <span class="token operator">==</span> <span class="token string">"PLAYER_REGEN_DISABLED"</span>  <span class="token keyword">then</span>
    <span class="token function">ShowBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span>
    <span class="token function">HideBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
hideframe<span class="token punctuation">:</span><span class="token function">SetScript</span><span class="token punctuation">(</span><span class="token string">"OnEvent"</span><span class="token punctuation">,</span> eventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HideBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  frame<span class="token punctuation">:</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  frame2<span class="token punctuation">:</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
  
<span class="token keyword">function</span> <span class="token function">ShowBars</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  frame<span class="token punctuation">:</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  frame2<span class="token punctuation">:</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">end</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
const metadata = {
  "title": "Addons",
  "date": "2022-07-05",
  "thumb": "hideshowbars.jpg",
  "pos": "right",
  "lang": "lua"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-865wii_START -->${$$result.title = `<title>DavidB | AddOns</title>`, ""}<!-- HEAD_svelte-865wii_END -->`, ""}



${validate_component(SectionComponent, "SectionComponent").$$render($$result, {}, {}, {
    default: () => {
      return `<h1>WoW Addons</h1>
<h2>What is an AddOn and why make them?</h2>
<p>An AddOn (capitalization varies but the meaning is the same) is a modification (or mod) to the game World of Warcraft. Addons are written in Lua and use the game API to change the UI, execute logic when events happen, etc.  </p>
<p>Aside from finding addon development fun, the main reason I make addons is that when I try to find addons that solve a problem I have; they often tend to be very cumbersome, locked in suites (big addons with multiple modules/dependencies), or have functionality that overrides base game interfaces, etc. My approach when making addons is to make tools with singular specific purposes.</p>
<p>By having small and focused addons that only rely on the base API, it is a lot easier for any user to use whatever addons they want as there will be a lot fewer conflicts and it is easy to disable/remove them without losing any other functionality.  </p>
<p><img src="${"/projectmedia/addons/addon_list.jpg"}" alt="${"Part of my World of Warcraft AddOn list "}" title="${"Part of my current AddOn list"}"></p>
<h2>Highlighted Addons</h2>
<h3>SodaChatFilter</h3>
<h4>Background</h4>
<p>When I started playing classic wow (the re-release of the game without expansions) I soon found the LFG chat, used for finding groups, to contain too many messages that weren\u2019t relevant to me. I saw that the API contained functionality that allows you to easily parse messages that you receive and decide whether to show or hide them. </p>
<h4>How it works</h4>
<p>Using the parsing functionality and \u201CSlashCommands\u201D (which is logic the user can call by typing \u201C/functionname\u201D in chat) I can in-game type \u201C/scf add boost\u201D which would filter out any messages that contain the word \u201Cboost\u201D.</p>
<p>Command usage: \u201C/scf operation dataparam1 dataparam2 \u2026\u201D</p>
<p>The message is split on whitespace to get all the parameters provided after \u201C/scf\u201D. The first parameter is the operation, and the rest is data. My way of still being able to have both a way to filter out sentences, and a way to quickly add multiple words, is to have sentences require \u2019_\u2019 to combine them. This way typing \u201C/scf add hello world\u201D would filter out any messages containing either \u201Chello\u201D or \u201Cworld\u201D, whereas typing \u201C/scf add hello_world\u201D would only filter out messages containing the sequence \u201Chello world\u201D.</p>
<p>Code:</p>
${validate_component(Collapse, "Collapse").$$render($$result, { title: "Filter Commands Parsing" }, {}, {
        default: () => {
          return `<p>${validate_component(Chatfilter_commands, "SCF_Commands").$$render($$result, {}, {}, {})}</p>`;
        }
      })}
${validate_component(Collapse, "Collapse").$$render($$result, { title: "Filtering Behavior" }, {}, {
        default: () => {
          return `<p>${validate_component(Chatfilter_filtering, "SCF_Filtering").$$render($$result, {}, {}, {})}</p>`;
        }
      })}
${validate_component(MDVideo, "MDVideo").$$render(
        $$result,
        {
          width: "1280",
          height: "720",
          src: "/projectmedia/addons/chatfilter.mp4",
          alt: "video shows messages in wow chat appearing, chat filters getting added and then messages filtered appearing in yellow"
        },
        {},
        {}
      )}
<h3>SodaBarHider</h3>
<p><strong>Feature to implement:</strong> I wanted a way to hide actionbars outside of combat, as when they were full they were occupying a large amount of space on the screen, but I also wanted to be able to use them when needed.</p>
<p><strong>Problem:</strong> My first attempt was to create a frame on top of the actionbars that I wanted to show/hide and to handle the logic in OnMouseEnter / OnMouseLeave. The problem with this approach was that when I showed the hidden actionbars they would have higher priority which would cause the OnMouseLeave on the created frame to fire, which lead to flickering behavior. Another problem was that the hidden frame was blocking the slots on the actionbar if it had a higher priority, and wouldn\u2019t register mouse movement if it had a lower priority.</p>
<p><strong>Solution:</strong> The solution I came up with at the time was to have an additional larger outer frame and a smaller inner frame, when the mouse enters the inner frame the actionbars are shown, and when the mouse enters the outer frame they are hidden.</p>
${validate_component(Collapse, "Collapse").$$render($$result, { title: "Bar Hiding Behavior" }, {}, {
        default: () => {
          return `${validate_component(Barhider, "SBH_BarHider").$$render($$result, {}, {}, {})}`;
        }
      })}
${validate_component(MDVideo, "MDVideo").$$render(
        $$result,
        {
          width: "1280",
          height: "720",
          src: "/projectmedia/addons/showhidebars.mp4",
          alt: "a video showing the actionbars in wow overlaid with green rectangles, the actionbars disappearing and reappearing when the mouse enters the outer and inner rectangles"
        },
        {},
        {}
      )}
${validate_component(ButtonLink, "ButtonLink").$$render(
        $$result,
        {
          href: "https://github.com/orgs/SodaAddons/repositories"
        },
        {},
        {
          default: () => {
            return `AddOn Github
`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
