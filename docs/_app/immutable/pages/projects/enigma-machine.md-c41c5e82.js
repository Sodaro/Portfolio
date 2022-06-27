import{S as v,i as w,s as x,e as i,t as G,k as h,c as k,a as d,h as S,d as s,m as y,M as A,b as c,g as l,G as R,n as g}from"../../chunks/index-f6b2bc5e.js";function D(I){let t,r,T,m,p,O,f,u,o,P,E,e,U=`<code class="language-cpp">
<span class="token function">UENUM</span><span class="token punctuation">(</span>BlueprintType<span class="token punctuation">)</span>
<span class="token keyword">enum</span> <span class="token class-name">RingPosition</span>
<span class="token punctuation">&#123;</span>
	LEFT <span class="token function">UMETA</span><span class="token punctuation">(</span>DisplayName <span class="token operator">=</span> <span class="token string">"LEFT"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	MID <span class="token function">UMETA</span><span class="token punctuation">(</span>DisplayName <span class="token operator">=</span> <span class="token string">"MID"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	RIGHT <span class="token function">UMETA</span><span class="token punctuation">(</span>DisplayName <span class="token operator">=</span> <span class="token string">"RIGHT"</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token function">USTRUCT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">struct</span> <span class="token class-name">FLetterComponents</span>
<span class="token punctuation">&#123;</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachineLamp<span class="token operator">*</span> Lamp<span class="token punctuation">;</span>
	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachineKey<span class="token operator">*</span> Key<span class="token punctuation">;</span>
	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	AMachinePort<span class="token operator">*</span> Port<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">ENIGMATURING_API</span> AEnigmaMachine <span class="token operator">:</span> <span class="token keyword">public</span> AActor
<span class="token punctuation">&#123;</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
<span class="token keyword">public</span><span class="token operator">:</span>

	<span class="token keyword">void</span> <span class="token function">BeginPlay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span><span class="token punctuation">;</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	TArray<span class="token operator">&lt;</span>ARotorWheel<span class="token operator">*</span><span class="token operator">></span> RotorWheels<span class="token punctuation">;</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	ARotorWheel<span class="token operator">*</span> ReflectorWheel<span class="token punctuation">;</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	TMap<span class="token operator">&lt;</span>FString<span class="token punctuation">,</span> FLetterComponents<span class="token operator">></span> LetterComponents<span class="token punctuation">;</span>

	FString LastLampKey <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

	FString OutputText <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

	<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditInstanceOnly<span class="token punctuation">)</span>
	TSubclassOf<span class="token operator">&lt;</span>UMachineTextOutput<span class="token operator">></span> OutputWidgetClass<span class="token punctuation">;</span>

	UMachineTextOutput<span class="token operator">*</span> OutputWidget<span class="token punctuation">;</span>

	<span class="token keyword">void</span> <span class="token function">PressKey</span><span class="token punctuation">(</span>int32 AlphabetIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	int32 <span class="token function">EncodeLetter</span><span class="token punctuation">(</span>int32 AlphabetIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`;return{c(){t=i("p"),r=i("strong"),T=G("Engima Machine"),m=h(),p=i("img"),f=h(),u=i("p"),o=i("img"),E=h(),e=i("pre"),this.h()},l(n){t=k(n,"P",{});var a=d(t);r=k(a,"STRONG",{});var _=d(r);T=S(_,"Engima Machine"),_.forEach(s),a.forEach(s),m=y(n),p=k(n,"IMG",{src:!0,width:!0,height:!0}),f=y(n),u=k(n,"P",{});var M=d(u);o=k(M,"IMG",{src:!0,alt:!0,title:!0}),M.forEach(s),E=y(n),e=k(n,"PRE",{class:!0});var L=d(e);L.forEach(s),this.h()},h(){A(p.src,O="/enigmamachine.png")||c(p,"src",O),c(p,"width","200"),c(p,"height","100"),A(o.src,P="/enigmamachine.png")||c(o,"src",P),c(o,"alt","Alt Text"),c(o,"title","Title"),c(e,"class","language-cpp")},m(n,a){l(n,t,a),R(t,r),R(r,T),l(n,m,a),l(n,p,a),l(n,f,a),l(n,u,a),R(u,o),l(n,E,a),l(n,e,a),e.innerHTML=U},p:g,i:g,o:g,d(n){n&&s(t),n&&s(m),n&&s(p),n&&s(f),n&&s(u),n&&s(E),n&&s(e)}}}const Y={title:"Enigma Machine",date:"2021-12-14"};class C extends v{constructor(t){super(),w(this,t,null,D,x,{})}}export{C as default,Y as metadata};
