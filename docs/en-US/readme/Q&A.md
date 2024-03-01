# Q&A

## How to add new language support

For example, language ID is `ru`.

1. Create folder `docs/ru`
1. Add locale config `docs/.vitepress/locales/ru.mts`
1. Add locale define in `docs/.vitepress/locales.mts`
	```ts {4}
	const langs = [
		'en-US',
		'zh-CN',
		'ru',
	];

	...
	```

## How to add a new sector

For example, sector name is `readme`

1. Create directory `docs/readme/`
1. Create index page `docs/readme/index.md`
1. Add to nav bar
	Edit every locale script under `docs/.vitepress/locales/`
	```ts {6-7,12-13}
	...

		themeConfig: {
			nav: [
				...
				// Add to nav bar
				{ text: 'Readme', link: `/${lang}/readme/` },
			],
			sidebar: {
				...

				// Auto generate sidebar
				'/zh-CN/readme': buildSidebar(`/${lang}/readme`, 'Readme'),
			}
		}

	...
	```

## How to change base (`/` by default)

For example, set base to `Third-Person`

Just modify `.vitepress/config.mts`

```ts {2}
export default defineConfig({
base: 'Third-Person',

...
});
```

## How to change source root dir (`.` usually)

For example, change source root to `pages`

1. Edit `docs/.vitepress/config.mts`
	```ts {2}
	export default defineConfig({
		srcDir: 'pages',

		...
	})
	```
1. Edit `docs/.vitepress/builders.mts`
	```ts
	export function buildSidebar(dir: string, name: string, docsRoot: string = 'pages'): any {

		...
	```
