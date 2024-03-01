| [English](./README.md) | 中文 |
| ---------------------- | ---- |

# docs-template

一个使用 vitepress 构建的文档模板

## 特性

* **国际化** 支持多语言
* **中文搜索（不完美）**
* 当URL中没有指定语言代码时，自动重定向到浏览器语言
  * `/` -> `/en-US/`
  * `/Donate` -> `/en-US/Donate`
* **URL参数解析**
  * `?search=%s` 一旦页面加载完成，自动打开搜索框并搜索。
  * `?autolang` 自动跳转到浏览器的默认语言
    * `/zh-CN/changelog` -> `/en-US/changelog`

# 问题

## 如何添加新的语言支持

例如，语言标识为 `ru`。

1. 创建文件夹 `docs/ru`
2. 添加语言配置 `docs/.vitepress/locales/ru.mts`
3. 在 `docs/.vitepress/locales.mts` 中添加语言定义
	```ts {4}
	const langs = [
		'en-US',
		'zh-CN',
		'ru',
	];

	...
	```

## 如何添加新的区块

例如，区块名称为 `readme`。

1. 创建目录 `docs/readme/`
2. 创建索引页面 `docs/readme/index.md`
3. 添加到导航栏
	编辑 `docs/.vitepress/locales/` 下每个语言脚本
	```ts {6-7,12-13}
	...

		themeConfig: {
			nav: [
				...
				// 添加到导航栏
				{ text: 'Readme', link: `/${lang}/readme/` },
			],
			sidebar: {
				...

				// 自动生成侧边栏
				'/zh-CN/readme': buildSidebar(`/${lang}/readme`),
			}
		}

	...
	```

## 如何更改 Base 路径（默认为 `/`）

例如，将 Base 路径设置为 `Third-Person`。

只需修改 `.vitepress/config.mts` 文件

```ts {2}
export default defineConfig({
	base: 'Third-Person',

...
});
```

## 如何更改源根目录（通常为 `.`）

例如，将源根目录更改为 `pages`。

1. 编辑 `docs/.vitepress/config.mts` 文件
	```ts {2}
	export default defineConfig({
		srcDir: 'pages',

		...
	})
	```
2. 编辑 `docs/.vitepress/builders.mts` 文件
	```ts
	export function buildSidebar(dir: string, docsRoot: string = 'pages'): any {

		...
	```
