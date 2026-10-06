# 陈彦好个人网站 · 独立设计版

单页静态网站，包含个人介绍、两个量化项目、简历下载和邮箱。页面的 HTML、CSS、JavaScript 与 SVG 图形均为这一版独立编写；没有复制模板王下载模板的页面、样式或脚本，也没有使用其图片与字体文件。

## 本地预览

在本目录运行 `python -m http.server 8769`，打开 `http://localhost:8769`。

## 部署

将本目录的**内容**放到 GitHub Pages 仓库根目录，保持 `index.html`、`favicon.svg`、`assets/`、`.nojekyll` 的相对路径。网站仅使用静态文件，无需构建命令。

简历下载文件为 `assets/陈彦好_华中科技大学.pdf`。两个项目分别链接到 `Chattan258/Crypto-Tradingsystem` 与 `Chattan258/A-Share-Research`。

第二个项目已按最新简历更新为中证1000神经网络多空研究，使用 Walk-forward MLP 和 LLM 提取的 JEV 公告事件特征。页面的年化收益 22.66%、Sharpe 1.97、最大回撤 8.83% 沿用最新简历的展示值，并标注为探索性融合模型的零交易成本回测；项目仓库提供方法、成本检验和研究限制。左侧网络图为结构示意图。
