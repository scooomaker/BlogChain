---
title: 'Hello World'
date: '22-8-31'
descript : '我的新博客写好啦'
author: 'scooo'
tags:
  - 
---

# A demo of `react-markdown`

`react-markdown` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using `dangerouslySetInnerHTML`
* Lets you define your own components (to render `MyHeading` instead of `h1`)
* Has a lot of plugins

## Table of contents

Here is an example of a plugin in action
([`remark-toc`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.

## Syntax highlighting

Here is an example of a plugin to highlight code:
[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
```

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[`remark-gfm`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ `remark-gfm` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [`rehype-raw`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
```

## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)


标题
这里是 h1
这里是 h2
这里是 h3
这里是 h4
这里是 h5
这里是 h6
# 这里是 h1
## 这里是 h2
### 这里是 h3
#### 这里是 h4
##### 这里是 h5
###### 这里是 h6
段落
段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落

段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落

🙊 😔 😣 😫 😙 😾 🗨️ 😶‍🌫️ 😄 🙂 😻 😈 😨 ☹️ 💣 💘 😠 🥺 💦 💀 😰 🤎 😽 😷

超链接
TMaize Blog

[TMaize Blog](http://blog.tmaize.net)
引用
这里是引用

> 这里是引用
常见字体样式
斜体

粗体

删除线

_斜体_
**粗体**
~~删除线~~
列表
无序列表 1-1

缩进 2 空格

缩进 2 空格
缩进 2 空格
缩进 2 空格
缩进 2 空格
无序列表 1-2
无序列表 1-3
有序列表 1-1

缩进 3 空格

缩进 3 空格
缩进 3 空格
无序列表
无序列表
有序列表 1-2
有序列表 1-3
- 无序列表 1-1

  缩进 2 空格

  - 缩进 2 空格
  - 缩进 2 空格

- 无序列表 1-2
- 无序列表 1-3

1. 有序列表 1-1

   缩进 3 空格

   1. 缩进 3 空格
   2. 缩进 3 空格

2. 有序列表 1-2
3. 有序列表 1-3
分割线
---
图片
破事水line 滑稽line

![line](http://xx.com/xx.jpg)