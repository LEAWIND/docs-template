import { buildSidebar } from "../builders.mts";

export default {
	label: 'English',
	lang: 'en-US',
	title: "Leawind's Docs Template",
	titleTemplate: ":title | Leawind's Doc",
	description: "A documentation template build by vitepress",
	themeConfig: {
		nav: [
			{
				text: 'Dropdown Menu',
				items: [
					{text: 'Doc Structure Example', link: '/en-US/L2/'},
					{text: 'Markdown Example', link: '/en-US/markdown-example'},
				]
			},
			{text: 'Donate', link: 'https://leawind.github.io/en/donate'},
		],
		sidebar: {
			'/en-US/L2': buildSidebar("/zh-CN/L2", 'Secondary Directory'),
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
