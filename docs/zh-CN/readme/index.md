# Readme

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
