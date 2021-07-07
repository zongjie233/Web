**·** 列表标签：```\<ul>```、```\<ol>```、```\<dl>```
**·** 表格标签：```\<table>```
**·** 框架标签，内嵌框架```\<iframe>```
**·** 表单标签：```\<form>```
**·** 滚动字幕标签：```\<marquee>```

### 列表标签
---
#### 1.无序列表\<ul>，其中每一项时\<li>
eg:
```html
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
```
⭐li不能单独存在，必须包裹在ul里面。
**属性：**
<ul>
    <li>```type="属性值"```。属性值可选：disc(实心原点，默认)，squre(实心方点)，circle(空心圆点)</li>
    <li>ul列表可嵌套</li>
</ul>
css属性
```html
list-style-position:inside /*该属性将小圆点包含在li元素内部 */
```
ul列表里只能放li，但li是一个容器级标签，什么都可以存放，包括ul

#### 2、有序列表\<ol>, 每一项是\<li>
英文：Ordered list
eg：
```html
<ol>
    <li>hs1</li>
    <li>hs2</li>
    <li>hs3</li>
</ol>
```
**属性：**
type="属性值"。属性值可以是：1、A、i、a、l. 结合start属性，表示从几开始
#### ⭐3、定义列表<dl>
dl的子元素只能是dt，dd
<ul>
<li> dt：definition title 列表标题，是必须的 </li>
<li>dd：definition description 列表的列表项，不需要可以不添加</li>
</ul>
⭐:dt、dd只能在dl里边，dl里边只能由dt，dd，用什么标签不是由样式决定，而是由语义决定。

### 表格标签
---
由\<table>表示，一个表格是由每行\<tr>组成，每行是由每个单元格\<td>一个表格是由行组成的（行是由列组成的），而不是由行，列组成的。
<code>table</code>属性：
<code>border</code>：边框。像素为单位。
<code>style="border-collapse:collapse;"</code>：单元格的线和表格的边框线合并（表格的两边框合并为一条）
<code>width</code>：宽度。像素为单位。
<code>height</code>：高度。像素为单位。
<code>bordercolor</code>：表格的边框颜色。
<code>align</code>：表格的水平对齐方式。属性值可以填：left right center。 注意：这里不是设置表格里内容的对齐方式，如果想设置内容的对齐方式，要对单元格标签<td>进行设置）
<code>cellpadding</code>：单元格内容到边的距离，像素为单位。默认情况下，文字是紧挨着左边那条线的，即默认情况下的值为0。 注意不是单元格内容到四条边的距离哈，而是到一条边的距离，默认是与左边那条线的距离。如果设置属性dir="rtl"，那就指的是内容到右边那条线的距离。
<code>cellspacing</code>：单元格和单元格之间的距离（外边距），像素为单位。默认情况下的值为0
<code>bgcolor="#99cc66"</code>：表格的背景颜色。
<code>background="路径src/..."</code>：背景图片。 背景图片的优先级大于背景颜色。
<code>bordercolorlight</code>：表格的上、左边框，以及单元格的右、下边框的颜色
<code>bordercolordark</code>：表格的右、下边框，以及单元格的上、左的边框的颜色 这两个属性的目的是为了设置3D的效果。
<code>dir</code>：公有属性，单元格内容的排列方式(direction)。 可以 取值：ltr：从左到右（left to right，默认），rtl：从右到左（right to left） 既然说dir是共有属性，如果把这个属性放在任意标签中，那表明这个标签的位置可能会从右开始排列。

#### <code>\<tr></code>:行
一个表格就是一行行组成的
属性：
<ul>
<li><code>dir</code>:公有属性，设置这一行单元格内容的排列方式。可以取值：
    <ul> 
        <li><code>ltr</code>:从左到右，(默认) </li>
        <li><code>rtl</code>：从右到左 </li>
    </ul>
</li>
<li><code>bgcolor</code>：设置这一行的单元格背景色。没有background属性，即无法设置一行的背景图片，除非用css实现</li>
<li><code>height</code>：一行的高度</li>
<li><code>align="center"</code>：一行的内容水平居中显示，有left，center，right可选</li>
<li><code>valign="center"</code>：一行的内容垂直居中，取值：top、middle、bottom</li>
</ul>

#### <code>\<td></code>:单元格
<ul>
<li><code>align</code>：内容的横向对齐方式，取值left right center
<li><code>valign</code>：内容的纵向对齐方式 top middle bottom</li>
<li><code>width</code>：绝对值或者相对值%</li>
<li><code>height</code>：单元格的高度</li>
<li><code>bgcolor</code>：单元格的背景色</li>
<li><code>background</code>：单元格的背景图片</li>
</ul>

#### 单元格的合并

单元格的属性：
<code>colspan</code>：横向合并。<code>colspan="2"</code> 表示单元格在水平方向上占据两个单元格的位置
<code>rowspan</code>：纵向合并

#### <code>\<th></code>：加粗单元格
属性同td标签

#### `caption`:表格的标题。使用时和`tr`标签并列，
- 属性取值：left、center、right、top、bottom

#### 表格的`<thead>`、`<tbody>`、`<tfoot>`标签
- 1.如果写了，代码顺序任意，浏览器显示的时候按照thead，tbody，tfoot的顺序依次来显示，如果不写则从上到下显示
- 2.表格内容多时，使用标签，数据可以边获取边显示。如果不写则必须等表格的内容从服务器获取完成后才能显示。

### ~~框架标签~~
---
一个网页中显示多个页面，就可以使用框架标签
>- ⚠框架标签不能放在`<body>`标签里边，只能在`<frameset>`和`<body>`之间选择一个
>- 框架的集合用`<frameset>`表示，在集合当中放入一个个的框架`<frame>`

目前已经不适用，使用`iframe`代替

### 内嵌框架
内嵌框架`<iframe>`，`<iframe>`是`<body>`的子标记
**属性**
- `src="subframe/the_second.html"`：内嵌的那个页面
- `width=800`：宽度
- `height=“150`：高度
- `scrolling="no"`：是否需要滚动条。默认值是true。
- `name="mainFrame"`：窗口名称。公有属性。

### 表单标签
---
表单标签用`<form>`表示，用于与服务器之间的交互，收集用户信息，让用户填写选择。
**属性：**
- `name`：表单的名称，用于JS操作表单；
- `id`：表单的名称，作用同上；
- `action`：指定表单数据的处理程序，一般是php，eg:action="login.php"
- `method`：表单数据的提交方式，一般为get(默认)和post

⚠️：表单与表格嵌套时，实在`<form>`中嵌套`<table>`
action属性表示表单将提交到哪里，method属性表示用什么http方法提交，有get、post两种方法。

**get，post区别：**
GET方式：将表单数据，以"name=value"形式追加到action指定的处理程序的后面，两者间用"?"隔开，每一个表单的"name=value"间用"&"号隔开。 特点：只适合提交少量信息，并且不太安全(不要提交敏感数据)、提交的数据类型只限于ASCII字符。

**POST方式：** 将表单数据直接发送(隐藏)到action指定的处理程序。POST发送的数据不可见。Action指定的处理程序可以获取到表单数据。 特点：可以提交海量信息，相对来说安全一些，提交的数据格式是多样的(Word、Excel、rar、img)。

Enctype： 表单数据的编码方式(加密方式)，取值可以是：application/x-www-form-urlencoded、multipart/form-data。Enctype只能在POST方式下使用。
- Application/x-www-form-urlencoded：默认加密方式，除了上传文件之外的数据都可以
- Multipart/form-data：上传附件时，必须使用这种编码方式。

#### `<input>`: 输入标签(文本框)
---
用于接收用户输入。
```html
<input type="text" />
```
- **type="属性值"：**
    - `text` (默认)
    - `password`：密码类型
    - `radio`：单选按钮，名字相同的按钮作为一组进行单选
    - `checkbox`：多选按钮，name属性值相同的按钮作为一组进行选择。
    - `checked`：将单选按钮或者多选按钮默认处于选中状态。当`<input>`标签设置为`type="radio"`或者`type=checkbox`时，可以用这个属性。属性值也是checked，可以省略。
    - `hidden`：隐藏框，在表单中包含不希望用户看见的信息
    - `button`：普通按钮，结合js代码进行使用。
    - `submit`：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。
    - `reset`：重置按钮，清空当前表单的内容，并设置为最初的默认值
    - `image`：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
    - `file`：文件选择框。 提示：如果要限制上传文件的类型，需要配合JS来实现验证。对上传文件的安全检查：一是扩展名的检查，二是文件数据内容的检查。

- **`value="内容"`**：文本框里的默认内容

- **`size="50"`**表示文本框内可输入的字符数量。

- **`readonly`**：文本框只读，不能编辑，属性值可不写。

- **`disabled`**：文本框只读，不能编辑，光标不可选。属性值可不写。

⚠️多个单选框的input标签中，name的属性值可以相同，但是**id的属性值必须是唯一的**。

#### `<select>`:下拉列表标签
---
`<select>`标签里面的每一项用`<option>`表示。
select标签和ul、ol、dl一样，都是组标签。

**`<select>`标签属性：**
- `multiple`：可以对下拉列表中的选项进行多选。属性值为multiple，也可以没有属性值。
- `size="3"`：如果属性值大于1，则列表为滚动视图，默认属性值为1，即下拉视图。

**`<option>`标签属性：**
- `selected`：预选中。无属性值。

#### **`<textarea>`标签：多行文本输入框**
text即文本，area即区域
**属性**
- `rows="4"`：指定文本区域的行数。
- `cols="20"`：指定文本区域的列数。
- `readonly`：只读。

#### 表单的语义化
`<fieldset></fieldset>`：将表单包裹起来
`<legend></legend>`：给表单创建标题

#### `<label>`标签：
作用：将所选项与按钮捆绑，点击文字即可实现选中

### 多媒体标签
---
#### `<bgsound>`标签：播放背景音乐
**属性：**
- `src="音乐文件路径"`
- `loop="-1"`：属性值代表播放次数，-1代表循环播放
eg：
```html
<body>
    <bgsound src="xxx.mp3"></bgsound>
</body>
```
#### ~~`<embed>`标签：播放多媒体文件~~
**属性：**
- `src="音乐文件路径"`
- `loop="-1"`：属性值代表播放次数，-1代表循环播放
- `autostart="false"`：打开网页时，禁止自动播放。默认值是true。
- width：指Flash文件的宽度
- height：指Flash文件的高度
- quality：指Flash的播放质量，质量有高有低 hight low
- pluginspage：如果指定的Flash插件不存在，则从pluginspage指定的地方进行下载。
- type：指定Flash的文件格式类型
- wmode：指Flash的背景是否可以透明，取值：transparent是透明的

#### `<object>`标签：播放多媒体文件
主要应用IE浏览器

#### `<marquee>`：滚动字幕标签
如果在这个标签里设置了内容，那么，打开网页时，内容会像弹幕一样自动移动。

**标准的div+css网页只会用到以下标签div  p  h1  span   a   img   ul   ol    dl    input**