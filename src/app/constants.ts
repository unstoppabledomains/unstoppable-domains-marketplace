export const App = {
	name: "Web Store",
	logo: {
		height: 42,
		width: 165,
		src: "/logo_transparent.png",
	},
	menu: [
		// {
		//     'href': '/',
		//     title: 'dApps',
		// },
		// {
		//     'href': '/categories',
		//     title: 'Categories',
		// },
	],
};

interface AppConfig {
	title: string;
	chainId: number;
	hero: {
		title: string;
		subtitle: string;
		button: {
			text: string;
			href: string;
		};
		video: string;
	};
}

// const zkevmConfig:AppConfig = {
//     title: "zkEVM dApps",
//     chainId: 1101,
//     hero: {
//         title: "Experience the newest   and your favourite  dApps on #zkEVM ",
//         subtitle: "The dApps in our ecosystem set the standard for privacy, security and content quality.",
//         button: {
//             text: 'Submit your dApp',
//             href: '',
//         },
//         video:"https://player.vimeo.com/video/791153931?h=969d328799"
//     },
// }

const posConfig: AppConfig = {
	title: "Apps",
	chainId: 137,
	hero: {
		title: "Discover, Connect, Explore.",
		subtitle:
			"Your gateway to endless opportunities for utilizing your Web3 domain, all in one destination.",
		button: {
			text: "Partner? Submit App",
			href: "https://app.meroku.org",
		},
		video: "https://player.vimeo.com/video/791153898?h=da72488da5",
	},
};

export type { AppConfig };
export {};
export { posConfig };
