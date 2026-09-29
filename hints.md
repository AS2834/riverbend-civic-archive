# Hints

这个文件给卡关时用。建议先只打开当前阶段的提示，别一口气看到底。

## Stage 1: 从哪里开始

<details>
<summary>轻提示</summary>

这个旧站的首页和页脚都在暗示“爬虫规则”。旧网站经常会把不想公开索引的路径写在那里。

</details>

<details>
<summary>明确提示</summary>

打开：

```text
http://localhost:4173/robots.txt
```

注意里面被禁止访问的路径。

</details>

<details>
<summary>答案</summary>

继续访问：

```text
http://localhost:4173/1998-renovation/loose-board.html
```

</details>

## Stage 2: 卡片查看器要填什么

<details>
<summary>轻提示</summary>

松动展示板上有好几个连字符标签。页面说旧查看器要一个 card label，不是物件的中文描述，也不是完整路径。

</details>

<details>
<summary>明确提示</summary>

图上只有一个标签对应“屋顶线上向上的物件”。它旁边有红色草图。

</details>

<details>
<summary>答案</summary>

卡片标签是：

```text
weather-vane
```

可以在查看器填入它，或者直接打开：

```text
http://localhost:4173/catalog.html?card=weather-vane
```

</details>

## Stage 3: 登记册缺了什么

<details>
<summary>轻提示</summary>

登记册页面说“纸面副本缺少抽屉标签”，但页面上其实给了一个文件柜规则：屋顶线物件跟着风向标草图走。

</details>

<details>
<summary>明确提示</summary>

回想松动展示板上的风向标草图。图上“向上”的方向，在文件柜规则里对应 `north`。

页面上的 drawer strip 可以直接点，不一定要抓包。

</details>

<details>
<summary>答案</summary>

选择：

```text
north
```

所以继续打开：

```text
http://localhost:4173/records/register?case=1912&drawer=north
```

</details>

## Stage 4: 最终标签怎么拼

<details>
<summary>轻提示</summary>

最终页前一页给了顺序。你要拼的不是句子，而是四段短标签，用连字符连接。

</details>

<details>
<summary>明确提示</summary>

四段分别来自：

1. `robots.txt` 里被禁止路径的项目名，去掉年份
2. 卡片查看器里用过的标签
3. 登记册页面确认的抽屉标签
4. 保护说明页面上旧文件日期章里的月份名，小写

</details>

<details>
<summary>答案</summary>

最终提交：

```text
renovation-weather-vane-north-july
```

提交位置：

```text
http://localhost:4173/final/
```

</details>

## 额外路线：翻译脚本

<details>
<summary>这是不是作弊</summary>

不算。`/assets/i18n.js` 可以看作旧站后来加上的“翻译缓存”。它会提前暴露一些文案方向，但不会直接给出最终 FLAG。

</details>
