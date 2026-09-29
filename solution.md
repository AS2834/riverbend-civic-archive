# 作者调试手册

这个文件不是玩家提示，也不是 walkthrough。

它的用途是给作者维护这个小游戏时自查：谜题链是否闭合、哪些文件承载哪些线索、哪些地方容易太难、改动后该测什么。玩家卡关请看 `hints.md`；作者要改谜题、排查死路、调整难度时看这里。

## 核心定位

`Riverbend Civic Archive` 是一个“旧网站调查”小游戏。

玩家体验目标：

- 像在翻一个真实废弃旧站，而不是点关卡按钮。
- 每一步都应该有文本、文件名、URL、源码或网页行为作为依据。
- 抓包和看源码可以作为捷径，但主线不能只靠抓包。
- 最终答案不是随机密码，而是前面四个观察结果的组合。

不希望出现的体验：

- 只靠作者脑洞猜词。
- 只靠 F12 才能推进。
- 页面看起来像题目面板。
- 最终拼法虽然“有提示”，但提示太像谜语。

## 玩家文件分工

| 文件 | 面向对象 | 作用 |
| --- | --- | --- |
| `README.md` | 玩家/运行者 | 说明这是个轻量网页解谜小游戏，以及如何启动 |
| `casefile.md` | 玩家 | 提供开场背景、动机和第一条方向 |
| `hints.md` | 玩家 | 分阶段卡关提示，允许逐步剧透 |
| `solution.md` | 作者 | 设计、调试、自查和答案核对 |

## 网站文件分工

| 文件或接口 | 作用 |
| --- | --- |
| `public/index.html` | 旧站首页，给出“爬虫规则/旧镜像”的第一层气味 |
| `public/robots.txt` | 第一阶段入口，暴露 `/1998-renovation/` 和 loose board |
| `public/1998-renovation/loose-board.html` | 第二阶段主线，给出卡片标签候选和 `catalog.html` 方向 |
| `public/catalog.html` | 旧版卡片查看器，读取 `?card=` |
| `public/assets/archive.js` | 卡片查看器逻辑，技术玩家可从这里发现 `/api/card` |
| `/api/card?name=weather-vane` | 把卡片标签转换为登记册地址 |
| `/records/register?case=1912` | 第三阶段，给出抽屉条和“向上是 north”的页面推理 |
| `/records/register?case=1912&drawer=north` | 最终拼接说明页面，带可见日期章 |
| `public/final/index.html` | 最终提交表单 |
| `/api/unseal` | 校验最终标签并运行时生成 FLAG |
| `public/assets/i18n.js` | 翻译缓存支线，会提前泄露部分文案，但不泄露最终 FLAG |

## 主线状态机

```text
首页
  -> robots.txt
  -> /1998-renovation/loose-board.html
  -> /catalog.html?card=weather-vane
  -> /api/card?name=weather-vane
  -> /records/register?case=1912
  -> 页面规则：roofline objects follow the vane sketch; up is north
  -> 点击 drawer=north
  -> /records/register?case=1912&drawer=north
  -> 页面日期章：Old file stamp: 24 July 1998
  -> /final/
  -> renovation-weather-vane-north-july
```

隐藏捷径仍然存在：

```text
X-Riverbend-Drawer: north
Last-Modified: Fri, 24 Jul 1998 19:12:00 GMT
```

但它们不再是唯一主线。

## 最终标签组成

| 段落 | 值 | 来源 | 设计注意 |
| --- | --- | --- | --- |
| 1 | `renovation` | `/1998-renovation/` 去掉数字年份前缀 | 文字必须说清楚“去掉数字年份前缀” |
| 2 | `weather-vane` | loose board 上的屋顶物件标签 | 页面必须强调填连字符标签，不是物件描述 |
| 3 | `north` | 登记册页面的抽屉条和“向上是 north”规则 | 响应头只能是捷径，不能是唯一来源 |
| 4 | `july` | 保护说明页面可见日期章 `24 July 1998` | 不再要求玩家从响应头猜 `Jul` |

最终提交：

```text
renovation-weather-vane-north-july
```

为兼容旧版本，服务器也接受：

```text
renovation-weather-vane-north-jul
```

但新提示和页面都应指向 `july`。

## 公平性检查

每次改谜题后，按这个清单检查：

- 不看 `solution.md` 时，玩家能从 `casefile.md` 知道先进入网站。
- 首页能把玩家引向“旧网站还有爬虫规则”。
- `robots.txt` 明确暴露下一条路径，而不是只放一个目录名。
- loose board 页面明确说“卡片查看器要展示板上的连字符标签”。
- catalog 页面填错时有反馈，不能只让玩家困在空白页。
- `/api/card` 没带参数或带错参数时，返回有用错误信息。
- 登记册页面必须能通过网页内容推理出 `north`。
- 抽屉条的错误选项要有反馈，不能像坏链接。
- 最终说明页必须把 `24 July 1998` 显示在页面正文里。
- `i18n.js` 可以泄露方向，但不能包含完整最终提交或 FLAG。
- `solution.md` 不在 `public/` 内，网站不能直接访问。

## 自测命令

```bash
npm run check
```

自测覆盖：

- 首页可访问
- `robots.txt` 包含 renovation 入口
- loose board 可访问
- catalog 关键路径可访问
- `/api/card?name=weather-vane` 返回登记册地址
- `/records/register?case=1912` 返回 `X-Riverbend-Drawer: north`
- `/records/register?case=1912&drawer=north` 返回日期章页面
- `/api/unseal` 接受新版最终标签并返回 FLAG

## 手动回归路径

启动服务后手动走一遍：

```text
http://localhost:4173/
http://localhost:4173/robots.txt
http://localhost:4173/1998-renovation/loose-board.html
http://localhost:4173/catalog.html?card=weather-vane
http://localhost:4173/api/card?name=weather-vane
http://localhost:4173/records/register?case=1912
http://localhost:4173/records/register?case=1912&drawer=north
http://localhost:4173/final/
```

最终在 `/final/` 提交：

```text
renovation-weather-vane-north-july
```

## 保密边界

真正的 FLAG 由服务器运行时生成：

- 正确标签存在于 `server.js` 的 `EXPECTED_KEY_PARTS`
- FLAG 文本不是直接硬编码字符串
- `i18n.js` 不应出现最终标签完整拼法
- `hints.md` 可以出现最终提交，因为它是玩家主动打开的提示文件

