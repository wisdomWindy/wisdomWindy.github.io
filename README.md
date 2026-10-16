# wisdomWindy Portfolio

wisdomWindy 的个人网站，用于展示真实项目、整理技术文章，并记录前端工程化、可用性与用户体验方面的实践。

- 在线访问：[wisdomWindy.github.io](https://wisdomwindy.github.io/)
- GitHub：[github.com/wisdomWindy](https://github.com/wisdomWindy)

## 网站功能

- 响应式首页、关于、项目、文章、搜索与联系页面
- 基于内容集合生成项目详情、文章详情和标签页面
- Pagefind 静态全文搜索
- 明暗主题切换与键盘可访问的交互控件
- RSS、Sitemap、Open Graph 和自定义 404 页面
- GitHub Actions 自动检查、构建并部署到 GitHub Pages

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 页面与内容 | Astro 5、MDX、TypeScript |
| 样式与图标 | Tailwind CSS 4、Lucide |
| 搜索与发现 | Pagefind、Astro Sitemap、RSS |
| 质量保障 | Astro Check、Vitest、Playwright |
| 持续部署 | GitHub Actions、GitHub Pages |

## 精选项目

| 项目 | 简介 | 技术栈 | 链接 |
| --- | --- | --- | --- |
| BiliCatch | 覆盖媒体下载、本地转写、任务恢复与自动更新的跨平台桌面工具 | Tauri、Vue、TypeScript、Rust | [源码](https://github.com/wisdomWindy/bili-catch) |
| SkillHub | 从 YAML 内容生成个人技能目录、安装指令与版本信息 | Vue、TypeScript、Vite SSG、Tailwind CSS | [源码](https://github.com/wisdomWindy/skill-hub) / [演示](https://wisdomwindy.github.io/skill-hub/) |
| 可视化综合管理平台 | 集中展示图表、地图、动态指标和响应式数据大屏案例 | Vue、ECharts、TypeScript、ArcGIS | [源码](https://github.com/wisdomWindy/visual-comprehensive-management-platform) |

完整项目介绍见[项目页面](https://wisdomwindy.github.io/projects/)。

## 本地开发

环境要求：

- Node.js `>= 20.3.0`
- pnpm `10.31.0`

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在 `http://localhost:4321`。

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动 Astro 开发服务器 |
| `pnpm check` | 检查 Astro、TypeScript 与内容类型 |
| `pnpm test` | 运行 Vitest 单元测试 |
| `pnpm test:watch` | 以监听模式运行单元测试 |
| `pnpm build` | 生成静态站点并创建 Pagefind 索引 |
| `pnpm preview` | 本地预览生产构建 |
| `pnpm test:e2e` | 运行 Playwright 端到端测试 |
| `pnpm assets:generate` | 重新生成仓库维护的站点图片资源 |

## 目录结构

```text
.
├── .github/workflows/   # GitHub Pages 构建与部署
├── e2e/                 # Playwright 端到端测试
├── public/              # 图标、项目封面和静态资源
├── scripts/             # 资源生成脚本
├── src/
│   ├── components/      # Astro 界面组件
│   ├── data/            # 项目与文章内容
│   ├── layouts/         # 页面布局
│   ├── lib/             # 内容、搜索和表单工具
│   ├── pages/           # 文件路由
│   └── styles/          # 全局样式
└── tests/               # Vitest 单元与契约测试
```

## 内容维护

- 项目内容：`src/data/projects/`
- 文章内容：`src/data/blog/`
- 公开身份与导航：`src/site.config.ts`
- 静态图片：`public/images/`

内容只展示能够由仓库或用户提供的信息验证的项目与经历；未确认的个人历史、社交资料和外部链接不会被虚构或占位展示。

## 构建与部署

`pnpm build` 先将 Astro 站点输出到 `dist/`，再为生产页面生成 Pagefind 搜索索引。

推送到 `main` 后，[`.github/workflows/main.yml`](.github/workflows/main.yml) 会依次安装锁定依赖、执行类型检查与单元测试、构建站点，并通过 GitHub Pages Artifact 完成部署。仓库的 Pages Source 需要设置为 **GitHub Actions**。
