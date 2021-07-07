### 语义化的标签
---
HTML职责是描述一块内容是什么，而不是其样子，外观应该由css决定。

**H5经典布局**
```html
<!-- 头部 -->
<header>
    <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <article></article>
    <!-- 侧边栏 -->
    <aside></aside>
</div>

<!-- 底部 -->
<footer>

</footer>
```

### H5新增语义标签
---
- `<section>`：表示区块
- `<article>`：表示文章。如文章、评论、帖子、博客
- `<header>`表示页眉
- `<footer>` 表示页脚
- `<nav>`表示导航
- `<aside>`表示侧边栏。如文章的侧栏
- `<figure>` 表示媒介内容分组。
- `<mark>`表示标记 (用得少)
- `<progress>`表示进度 (用得少)
- `<time>` 表示日期

### H5表单
---
#### H5中新增的表单类型

- `email` 只能输入email格式。自动带有验证功能。

- `tel` 手机号码。

- `url` 只能输入url格式。

- `number` 只能输入数字。

- `search` 搜索框

- `range` 滑动条

- `color` 拾色器

- `time` 时间

- `date` 日期

- `datetime` 时间日期

- `month` 月份

- `week` 星期

#### 表单标签
**1.`<datalist>`数据列表**
```html
<input type="text" list="myData">
<datalist id="myData">
    <option>本科</option>
    <option>研究生</option>
    <option>不明</option>
</datalist>
```
datalist能够实现数据列表自动提示

**2.`<keygen>`元素**

提供一种验证用户的方法，提交表单时生成一个公钥，一个私钥。
pk存储在客户端，公钥在服务器 

**3.`<meter>`度量器**
- low：低于该值后警告

- high：高于该值后警告

- value：当前值

- max：最大值

- min：最小值。

#### 表单属性
- `placeholder`占位符（提示文字）

- `autofocus` 自动获取焦点

- `multiple` 文件上传多选或多个邮箱地址

- `autocomplete` 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)

- `form` 指定表单项属于哪个form，处理复杂表单时会需要

- `novalidate` 关闭默认的验证功能（只能加给form）

- `required` 表示必填项

- `pattern` 自定义正则，验证表单。例如

#### 表单事件
- `oninput()`：用户输入内容时触发，可用于输入字数统计。

- `oninvalid()`：验证不通过时触发。比如，如果验证不通过时，想弹出一段提示文字，就可以用到它。

#### 音频
H5通过`<audio>`标签解决音频播放问题
```html
<audio src="music/yinyue.mp3" autoplay controls> </audio>
```
属性：
- `autoplay` 自动播放。写成autoplay 或者 autoplay = ""，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload`预加载 同时设置 autoplay 时，此属性将失效。

```html
<!--推荐的兼容写法：-->
<audio controls loop>
    <source src="music/yinyue.mp3"/>
    <source src="music/yinyue.ogg"/>
    <source src="music/yinyue.wav"/>
    抱歉，你的浏览器暂不支持此音频格式
</audio>
```

#### 视频
通过`<video>`标签解决视频播放问题
```html
<video src="video/movie.mp4" controls autoplay></video>
```
属性
- `autoplay` 自动播放。写成autoplay 或者 autoplay = ""，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload`预加载 同时设置 autoplay 时，此属性将失效。
- `width`：设置播放窗口宽度。

- `height`：设置播放窗口的高度。

### DOM操作
---
#### 获取元素
- document.querySelector("selector") 通过CSS选择器获取符合条件的第一个元素。

- document.querySelectorAll("selector") 通过CSS选择器获取符合条件的所有元素，以类数组形式存在。

#### 类名操作
- Node.classList.add("class") 添加class

- Node.classList.remove("class") 移除class

- Node.classList.toggle("class") 切换class，有则移除，无则添加

- Node.classList.contains("class") 检测是否存在class

#### 自定义属性
H5以`data-`开头添加自定义属性

