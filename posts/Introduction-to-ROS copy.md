---
title: Introduction to ROS
metaTitle: Introduction to ROS
metaDesc: Introduction to ROS
date: '22-7-10'
author: 'scooo'
descript : 'ROS可以形象的描述为一个工厂的运行机制，创建好一个工作空间(workspace)就像一个工厂，工厂里又有好多个生产车间，每个功能包（pkg）看作是一个生产车间，每个生产车间又有好多工人在配合，每个节点（node）看作是一个工人，节点是又是可执行程序的最小单位，工人们之间相互沟通通过消息（mesage）来完成. '
tags:
  - ROS
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

```js {1,3-4} showLineNumbers
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

Lorem ipsum dolor sit  amet consectetur adipisicing elit.
Lorem ipsum dolor sit  amet consectetur adipisicing elit.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut assumenda distinctio eveniet quos, saepe non quasi minus facere iste odit! Accusamus eos optio, a recusandae neque aliquam provident illum?


Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut assumenda distinctio eveniet quos, saepe non quasi minus facere iste odit! Accusamus eos optio, a recusandae neque aliquam provident illum?


Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut assumenda distinctio eveniet quos, saepe non quasi minus facere iste odit! Accusamus eos optio, a recusandae neque aliquam provident illum?

<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>

```html
<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>
```

> 　　　　ROS可以形象的描述为一个工厂的运行机制，创建好一个工作空间(workspace)就像一个工厂，工厂里又有好多个生产车间，每个功能包（pkg）看作是一个生产车间，每个生产车间又有好多工人在配合，每个节点（node）看作是一个工人，节点是又是可执行程序的最小单位，工人们之间相互沟通通过消息（mesage）来完成.

### ROS Master 节点管理器

![ROS Master](https://img-blog.csdnimg.cn/20200729170450220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


- 节点将所有信息发送给ROS Master
- 发送信息的节点称为发布节点(Publisher Nodes)
- 接收信息的节点称为订阅节点(Subscriber Nodes)
- ROS Master拥有在计算机上正在运行的所有发送节点和接收节点的信息.

例如: 节点1发送给某个名为a的数据,而节点2订阅了该消息,那么ROS Masker就向两个节点广播彼此节点信息,以帮助他们建立连接,这样两个节点就能互相通信了.

```
roscore
```

输入这个命令来开启 ROS Master

### ROS Messages 通信架构

ROS节点可以彼此间互相传送不同数据类型,这些数据称为ROS消息(ROS Messages).有了ROS Messages就能在节点之间传递各种类型的数据了.这些消息通过一种类似于数据总线或者路径标识的媒介进行传播,称为ROS话题(Topics).



#### 话题（topic）

　　话题是单向的，一般用于连续发送数据的传感器，建立一次联系后，一个发布者可以向多个订阅者发送信息，同样，一个订阅者也可以订阅多个发布者的消息。对于实时性、周期性的消息，使用topic来传输是最佳的选择。

> topic通信方式是异步的，发送时调用publish()方法，发送完成立即返回，不用等待反馈。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170511683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


几种topic命令:

| 命令                          | 作用                     |
| :---------------------------- | :----------------------- |
| `rostopic list`               | 列出当前所有的topic      |
| `rostopic info topic_name`    | 显示某个topic的属性信息  |
| `rostopic echo topic_name`    | 显示某个topic的内容      |
| `rostopic pub topic_name ...` | 向某个topic发布内容      |
| `rostopic bw topic_name`      | 查看某个topic的带宽      |
| `rostopic hz topic_name`      | 查看某个topic的频率      |
| `rostopic find topic_type`    | 查找某个类型的topic      |
| `rostopic type topic_name`    | 查看某个topic的类型(msg) |

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170522144.png)




#### 服务（service）

　　服务是同步双向的通信机制，服务器只有在有请求的时候才响应，客户端在发出请求后才接受响应。service包括两部分，一部分是请求方（Clinet），另一部分是应答方/服务提供方（Server）。当服务的请求和响应完成时，两个连接点自动断开。

> Service是同步通信方式，所谓同步就是说，此时Node A发布请求后会在原地等待reply，直到Node B处理完了请求并且完成了reply，Node A才会继续执行。Node A等待过程中，是处于阻塞状态的成通信。这样的通信模型没有频繁的消息传递，没有冲突与高系统资源的占用，只有接受请求才执行服务，简单而且高效。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170536455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


几种service命令:

| rosservice 命令   | 作用                     |
| :---------------- | :----------------------- |
| `rosservice list` | 显示服务列表             |
| `rosservice info` | 打印服务信息             |
| `rosservice type` | 打印服务类型             |
| `rosservice uri`  | 打印服务ROSRPC uri       |
| `rosservice find` | 按服务类型查找服务       |
| `rosservice call` | 使用所提供的args调用服务 |
| `rosservice args` | 打印服务参数             |

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170549247.png)


#### Topic和Service对比

| 名称     | Topic                            | Service                           |
| :------- | :------------------------------- | :-------------------------------- |
| 通信方式 | 异步通信                         | 同步通信                          |
| 实现原理 | TCP/IP                           | TCP/IP                            |
| 通信模型 | Publish-Subscribe                | Request-Reply                     |
| 映射关系 | Publish-Subscribe(多对多)        | Request-Reply（多对一）           |
| 特点     | 接受者收到数据会回调（Callback） | 远程过程调用（RPC）服务器端的服务 |
| 应用场景 | 连续、高频的数据发布             | 偶尔使用的功能/具体的任务         |
| 举例     | 激光雷达、里程计发布数据         | 开关传感器、拍照、逆解计算        |



#### 动作（Action）

　　Actionlib库类似service通信机制，actionlib也是一种请求响应机制的通信方式，actionlib主要弥补了service通信的一个不足，就是当机器人执行一个长时间的任务时，假如利用service通信方式，那么publisher会很长时间接受不到反馈的reply，致使通信受阻。当service通信不能很好的完成任务时候，actionlib则可以比较适合实现长时间的通信过程，actionlib通信过程可以随时被查看过程进度，也可以终止请求，这样的一个特性，使得它在一些特别的机制中拥有很高的效率。

> Action的工作原理是client-server模式，也是一个双向的通信模式。通信双方在ROS Action Protocol下通过消息进行数据的交流通信。client和server为用户提供一个简单的API来请求目标（在客户端）或通过函数调用和回调来执行目标（在服务器端）。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170600800.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


利用动作库进行请求响应，动作的内容格式应包含三个部分，目标、反馈、结果。

- 目标

  机器人执行一个动作，应该有明确的移动目标信息，包括一些参数的设定，方向、角度、速度等等。从而使机器人完成动作任务。

- 反馈

  在动作进行的过程中，应该有实时的状态信息反馈给服务器的实施者，告诉实施者动作完成的状态，可以使实施者作出准确的判断去修正命令。

- 结果

  当运动完成时，动作服务器把本次运动的结果数据发送给客户端，使客户端得到本次动作的全部信息，例如可能包含机器人的运动时长，最终姿势等等。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170611147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)

---
title: YAML Front Matter
description: A very simple way to add structured data to a page.
---

# Editor.md


<a href="https://oschina.net">hhh</a>

<img src="https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png">

# 换行TEST

1
2
3

a  
b

---

q\
d

#HEAD TEST

# Smart Test

...

---

--


![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**目录 (Table of Contents)**

[TOCM]

[TOC]

# Heading 1
## Heading 2               
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### 标题（用底线的形式）Heading (underline)

This is an H1
=============

This is an H2
-------------

### 字符效果和横线等
                
----

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes
                    
> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。

### 锚点与链接 Links

[普通链接](http://localhost/)

[普通链接带标题](http://localhost/ "普通链接带标题")

直接链接：<https://github.com>

https://baidu.com

[锚点链接][anchor-id] 

[anchor-id]: http://www.this-anchor-link.com/

[mailto:test.test@gmail.com](mailto:test.test@gmail.com)

GFM a-tail link [@pandao](https://my.oschina.net/u/3691274)  邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com

> @pandao

### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。

    <?php
        echo "Hello world!";
    ?>
    
预格式化文本：

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


#### JS代码　

```javascript
function test() {
	console.log("Hello world!");
}
 
(function(){
    var box = function() {
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str) {
			alert("add", str);

			return this;
		},

		remove : function(str) {
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML 代码 HTML codes

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <meta name="keywords" content="Editor.md, Markdown, Editor" />
        <title>Hello world!</title>
        <style type="text/css">
            body{font-size:14px;color:#444;font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;background:#fff;}
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        </style>
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
        <p class="text-green">Plain text</p>
    </body>
</html>
```

### 图片 Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)
                
- 列表一
- 列表二
- 列表三
     
#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

#### 无序列表（加号和嵌套）Unordered Lists (+)
                
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### 有序列表 Ordered Lists (-)
                
1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2
                
----
                    
### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |
                
----

#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

[========]

### Emoji表情 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);
 
#### 反斜杠 Escape

\*literal asterisks\*

[========]
            
### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$x > y$$

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

多行公式：

```
displaystyle
left( \sum\_{k=1}^n a\_k b\_k \right)^2
leq
left( \sum\_{k=1}^n a\_k^2 \right)
left( \sum\_{k=1}^n b\_k^2 \right)
```
```
\displaystyle 
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        } 
    }
```
```
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```

### 分页符 Page break

> Print Test: Ctrl + P

[========]

### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```

[========]
                    
### 绘制序列图 Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

### End
