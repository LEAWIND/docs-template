# Readme

A documentation template build by vitepress

## Features

* **International** Multi language supported
* **Search in Chinese (Not perfect)**
* Auto redirect to browser langugage when no language code specified in url
  * `/` -> `/en-US/`
  * `/Donate` -> `/en-US/Donate`
* **URL search params parsing**
  * `?search=%s` Once page is loaded, open search box and auto search
  * `?autolang` Auto jump to the language provided by `navigator.language`
    * `/zh-CN/changelog` -> `/en-US/changelog`

