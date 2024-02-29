import { defineConfig } from 'vitepress';
import locales from './locales.mjs';

export default defineConfig({
	base: '/',
	cleanUrls: true,
	router: {
		prefetchLinks: true,
	},
	themeConfig: {
		externalLinkIcon: true,
		socialLinks: [
			{ link: 'https://github.com/LEAWIND/docs-template', icon: 'github' },
		],
		search: {
			provider: 'local',
			options: {
				miniSearch: {
					options: {
						processTerm: term => {
							term = term.toLowerCase()
								.replace(/([\u4e00-\u9fff])/g, '$1 ')
								.trim().replace(/\s+/g, ' ');
							const terms = term.split(' ');
							return terms.length === 1 ? term : terms;
						},
					},
					searchOptions: {
					},
				},
			},
		},
	},
	locales: locales(),
});
