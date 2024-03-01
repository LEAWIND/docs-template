import { buildSidebar } from "../builders.mts";

const lang = 'en-US';

export default {
	label: 'English',
	lang: lang,
	title: "Leawind's Docs Template",
	titleTemplate: ":title | Leawind's Doc",
	description: "A documentation template build by vitepress",
	themeConfig: {
		nav: [
			{
				text: 'Dropdown Menu',
				items: [
					{ text: 'Doc Structure Example', link: `/${lang}/L2/` },
					{ text: 'Markdown Example', link: `/${lang}/markdown-example` },
				]
			},
			{ text: 'Readme', link: `/${lang}/readme/` },
			{ text: 'Donate', link: 'https://leawind.github.io/en/donate' },
		],
		sidebar: {
			'/en-US/L2': buildSidebar(`/${lang}/L2`, 'Secondary Directory'),
			'/en-US/readme': buildSidebar(`/${lang}/readme`, 'Readme'),
		},
		footer: {
			message: 'This is footer message',
			copyright: 'This is copyright',
		},
		editLink: {
			pattern: 'https://github.com/LEAWIND/docs-template/edit/main/docs/:path',
			text: 'Edit this page on Github',
		},
		lastUpdated: { text: "Last updated", },
	},
};
