export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","itchio-logo-textless-white.svg","itchio-textless-black.svg","itchio-textless-white.svg","people.svg","person.svg","profilepic.jpg","profilepic2.jpg","projectmedia/addons/addon_list.jpg","projectmedia/addons/chatfilter.mp4","projectmedia/addons/hideshowbars.jpg","projectmedia/addons/hideshowbars3.jpg","projectmedia/addons/hideshowbarscropped.jpg","projectmedia/addons/hide_bars_bot.jpg","projectmedia/addons/hide_bars_right.jpg","projectmedia/addons/showhidebars.mp4","projectmedia/addons/show_bars_bot.jpg","projectmedia/addons/show_bars_right.jpg","projectmedia/bomberbots/gameplay_game3.mp4","projectmedia/bonkers/cover.png","projectmedia/consoledrawingstuff.gif","projectmedia/dizt.png","projectmedia/enigmamachine.gif","projectmedia/enigmamachine.png","projectmedia/enigmamachine_rotorwheel.mp4","projectmedia/pumpkin/anim_head.png","projectmedia/pumpkin/anim_nohead.png","projectmedia/pumpkin/anim_push.png","projectmedia/pumpkin/anim_sm.png","projectmedia/pumpkin/body_head.png","projectmedia/pumpkin/body_nohead.png","projectmedia/pumpkin/box_push.png","projectmedia/pumpkin/head.png","projectmedia/pumpkin/image6.jpg","projectmedia/pumpkin/pumpkinboy.png","projectmedia/pumpkin/throw_notext.png","projectmedia/pumpkin/throw_text.png","projectmedia/UnrealEnigmaMachine.mp4","styles/prism-dracula.css","up-right-from-square-solid.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".mp4":"video/mp4",".gif":"image/gif",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-88819c32.js","imports":["_app/immutable/start-88819c32.js","_app/immutable/chunks/index-c3e420e7.js","_app/immutable/chunks/singletons-f3e8713a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects/addons",
				pattern: /^\/projects\/addons\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/bomberbots",
				pattern: /^\/projects\/bomberbots\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/bonkers",
				pattern: /^\/projects\/bonkers\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/enigma-machine",
				pattern: /^\/projects\/enigma-machine\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/pumpkin-boy",
				pattern: /^\/projects\/pumpkin-boy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/test",
				pattern: /^\/projects\/test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
