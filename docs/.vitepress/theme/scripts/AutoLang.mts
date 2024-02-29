import { langs } from '../../locales.mts';

/**
 * 在url后指定autolang参数后，会自动跳转到当前浏览器语言
 */
(async () => {
	if (!globalThis.window) return;
	const url = getURL();
	if (url.pathname === '/' || url.searchParams.has('autolang')) {
		jumpToLang(navigator.language);
	}
})();

function getURL(): URL {
	return new URL(location.href);
}

function jumpToLang(lang: string): void {
	const url = getURL();
	const newUrl = getURL();

	newUrl.searchParams.delete('autolang');
	const currentLang = getCurrentLang();

	if (currentLang === lang) return;

	if (isLangSupported(currentLang)) {
		newUrl.pathname = newUrl.pathname.replace(/(?<=^\/*)[^\/]+/, lang);
	} else {
		newUrl.pathname = `/${lang}${url.pathname}`;
	}
	location.replace(newUrl.toString());
}

function getCurrentLang(): string {
	return getURL().pathname.replace(/(^\/*)|(\/.*)/g, '');
}

function isLangSupported(lang: string): boolean {
	return langs.indexOf(lang) !== -1;
}
