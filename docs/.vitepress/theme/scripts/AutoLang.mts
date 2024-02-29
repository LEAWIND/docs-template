import langs from '../../locales/langs.mts';

class AutoLang {

	static getURL(): URL {
		return new URL(location.href);
	}

	static autoJump(): void {
		const url = this.getURL();
		if (url.searchParams.has('autolang')) {
			this.jumpToLang(navigator.language);
		}
	}

	static jumpToLang(lang: string): void {
		const url = this.getURL();
		const newUrl = this.getURL();

		newUrl.searchParams.delete('autolang');
		const currentLang = this.getCurrentLang();

		if (currentLang === lang) return;

		if (this.isLangSupported(currentLang)) {
			newUrl.pathname = newUrl.pathname.replace(/(?<=^\/*)[^\/]+/, lang);
		} else {
			newUrl.pathname = `/${lang}${url.pathname}`;
		}
		location.replace(newUrl.toString());
	}

	static getCurrentLang(): string {
		return this.getURL().pathname.replace(/(^\/*)|(\/.*)/g, '');
	}

	static isLangSupported(lang: string): boolean {
		return langs.indexOf(lang) !== -1;
	}
};
export default AutoLang;
