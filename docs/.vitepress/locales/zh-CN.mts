import { title } from "process";
import { buildSidebar } from "../builders.mjs";

export default {
	label: '简体中文',
	lang: 'zh-CN',
	title: "Leawind的文档",
	titleTemplate: ":title | Leawind的文档",
	description: "用 vitepress 构建的静态网站",
	themeConfig: {
		nav: [
			{
				text: '下拉菜单',
				items: [
					{text: '文档结构示例', link: '/zh-CN/L2/'},
					{text: 'Markdown示例', link: '/zh-CN/markdown-example'},
				]
			},
			{text: '捐赠', link: 'https://leawind.github.io/zh-CN/donate'},
		],
		sidebar: {
			'/zh-CN/L2': buildSidebar("/zh-CN/L2", '二级目录'),
		},
		footer: {
			message: '这是页脚信息',
			copyright: '这是页脚版权信息',
		},
		editLink: {
			pattern: 'https://github.com/LEAWIND/docs-template/edit/main/docs/:path',
			text: '在 Github 上编辑此页',
		},
		lastUpdated: { text: "上次更新", },
	},
};
