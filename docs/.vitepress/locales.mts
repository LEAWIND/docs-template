const langs = [
	"en-US",
	"zh-CN",
];

const locales = () => {
	const locals = {};
	for (const lang of langs)
		locals[lang] = import(`./locales/${lang}.mts`) as any;
	return locals as LocaleConfig;
};

import { LocaleConfig } from "vitepress";


export { langs };
export default locales;
