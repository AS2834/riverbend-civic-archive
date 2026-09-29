# Riverbend Civic Archive

一个可以在本地浏览器里玩的单人网页解谜小游戏。

它不是什么大制作，也不需要你会黑客技术。更像上班空档嗑瓜子时顺手点开的旧网站：没多刺激，但可以翻翻页面、看看奇怪的旧说明、顺着链接和地址栏动一动简单的脑子。

你要调查的是一个没人维护的市民档案馆旧镜像。它表面上只是普通小网站，但一些旧文件、旧脚本和旧页面还留下了没有清干净的痕迹。

推荐先读 [casefile.md](/Users/zhihu/Documents/Codex/2026-09-29/ctf-html-js-url-1-html/casefile.md)，再开始玩。卡住时看 [hints.md](/Users/zhihu/Documents/Codex/2026-09-29/ctf-html-js-url-1-html/hints.md)。

## 开始玩

先安装 Node.js 18 或更新版本。

macOS / Linux 打开终端运行：

```bash
./scripts/start-local.sh
```

Windows 双击或运行：

```bat
scripts\start-local.cmd
```

然后用浏览器打开：

```text
http://localhost:4173
```

## 如果启动脚本不能用

在项目目录里运行：

```bash
npm install
npm start
```

看到类似下面的提示就可以打开浏览器了：

```text
Riverbend Civic Archive is running at http://127.0.0.1:4173
```

## 玩的时候可以做什么

- 点页面里的链接
- 观察地址栏
- 查看网页源代码
- 看浏览器开发者工具里的请求和响应
- 留意那些看起来像旧网站残留物的东西

不需要联网，不需要数据库，也没有真正危险的漏洞。

## 给朋友一起玩

默认只能在自己电脑上打开。如果想让同一个局域网里的其他设备访问，可以运行：

```bash
HOST=0.0.0.0 PORT=4173 npm start
```

然后让对方访问：

```text
http://你的电脑局域网IP:4173
```

不建议直接放到公网。

## 文件说明

```text
.
├── README.md          # 你正在看的文件
├── casefile.md        # 开场背景
├── hints.md           # 卡关提示
├── solution.md        # 剧透答案本，作者自查用，玩家先别看
├── scripts            # 一键启动脚本
├── server.js          # 本地服务器
└── public             # 网站文件
```

`solution.md` 是完整答案和设计备忘录，不会被网站公开；玩家不建议先看。
