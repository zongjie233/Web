### **HTML的概念**


 HTML 全称为 HyperText Markup Language，译为超文本标记语言。  

 HTML 不是一种编程语言，是一种描述性的标记语言。   

 作用：HTML是负责描述文档语义的语言。

---

### **超文本**

（1）图片、音频、视频、动画、多媒体等内容，成为超文本，因为它们超出了文本的限制。

（2）不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件进行连接。即：超级链接文本。

            
----
 
### **标记语言**

 html不是编程语言，是一种描述性的标记语言

（1）标记语言是一套标记标签

（2）HTML标签直接由浏览器解析执行

---
**HTML是负责描述文档语义的语言**

HTML中的标签对能够给文本不同的语义

eg: \<h1>标签的作用?

answer: 给文本增加主标题的语义

---

###  **HTML的专有名词**

网页 ：由各种标记组成的一个页面就叫网页。

主页(首页) : 一个网站的起始页面或者导航页面。

标记:比如\<p>称为开始标记, \</p>称为结束标记，也叫标签。每个标签都规定好了特殊的含义。

元素：比如\<p>内容\</p>称为元素.

属性：给每一个标签所做的辅助信息。

XHTML：符合XML语法标准的HTML。

DHTML：dynamic，动态的。javascript + css + html合起来的页面就是一个 DHTML。

HTTP：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式SMTP：邮件传输协议，FTP：文件传输协议。

----
### **HTML结构详解**
 HTML标签通常成对出现，比如\<div>和\</div>,同时有少部分单标签，如\<imgsrc="images.jpg"/>等

 **html标签分类**

| 标签名 | 定义 | 说明 |
| ------ | --- | ---  |
|\<html>\</html>|HTML标签|页面中最大的标签，为根标签|
|\<head>\</head>|文档的头部|head标签中必须设置title标签|
|\<title>\</title>|文档的标题|让页面拥有一个属于自己的网页标题|
|\<body>\</body>|文档的主体|元素包含文档的所有内容，页面的内容都在body里边|

---

### **HTML骨架代码生成**
 vscode编辑器中 html:5 即可快速生成html骨架代码


#### **1.文档声明头**
 任何HTML页面中都会有一个以\<!DOCTYPE>开头的语句，简称为DTD，**它可以告知浏览器文档使用哪种HTML或者XHTML规范**


在HTML5中简化了DTD，其声明为\<!DCTYPE html> 


#### **2.页面语言lang**

 \<html lang="en">用于指定页面的语言类型，主要有两种en,zh-CN 

#### **3.头标签head**
 \<title>：指定整个网页的标题，在浏览器最上方显示

 \<base>：为页面上的所有链接规定默认地址或默认目标。

 \<meta>：提供有关页面的基本信息

 \<body>：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。

 \<link>：定义文档与外部资源的关系。

**meta标签：表示基本的配置项目**

常见的meta标签如下： 

（1）字符集charset： 

```html 
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
``` 
charset即字符集，网页的编码方式  

该代码为必须的代码，常见的编码方式为ytf-8，gbk，gb2312

（2）视口 viewport： 
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
``` 
**width=device-width**:表示视口的宽度等于屏幕的宽度 

（3）定义关键词：
```html
<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />
```   
目的：告诉搜索引擎该网页是干什么的，提高搜索命中率。

（4）定义页面描述：

```html
<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。"/>
```
设置Description页面描述，在百度搜索的结果中可以显示该语句，即SEO，搜索引擎优化。

**title标签**

用于设置网页标题 

**base标签** 

用于指定基础路径，设置之后，所有的a连接都以这个路径为基准

#### **4.\<body>标签** 

\<body>标签属性： 

·bgcolor：设置整个网页的背景颜色。

·background：设置整个网页的背景图片。

·text：设置网页中的文本颜色。

·leftmargin：网页的左边距。IE浏览器默认是8个像素。

·topmargin：网页的上边距。

·rightmargin：网页的右边距。

·bottommargin：网页的下边距。

```html
<body link="red" alink="blue" vlink="green">
        <a href="#">我是超链接</a>
``` 
当使用超链接时，link属性表示默认颜色，alink表示点击未松开的颜色，vlink表示点击之后显示的颜色






