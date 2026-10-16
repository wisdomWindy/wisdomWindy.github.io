# Portfolio Site Task Board

| ID | 任务 | 状态 | 模式 | 前置条件 | 规格/功能范围 | 整洁性/模式约束 | 类型/API | 测试切入点 | 假设 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T01 | Astro 脚手架、类型与测试基线 | done | 串行 | plan approved | Scaffold, AC-01/11；根配置 | 原位 minimal scaffold；禁混合 Vue | `astro/tsconfigs/strict`; 无 API | tooling test -> check -> build | Node 20 固定 |
| T02 | 视觉资产与全局页面壳 | done | 串行 | T01 | shell/theme/nav/SEO；AC-02..05/12 | 局部 DOM state；无 Store | site config props | shell E2E + 双视口截图 | 抽象身份图，不仿真人像 |
| T03 | 内容集合、纯函数与内容 | done | 串行 | T02 | schema/rules/content；AC-07/12 | 单一规则所有者；直接函数 | Astro Zod/CollectionEntry | content unit + check/build | 项目为真实旧工具概念 |
| T04 | 首页、关于与项目 | done | 串行 | T03 | Home/About/Projects；AC-02..07 | 页面组合、卡片/筛选聚焦职责 | collection helpers | project E2E + screenshots | 无简历死链 |
| T05 | 博客、标签、TOC 与 RSS | done | 串行 | T04 | Blog/Tags/RSS；AC-02/04/07/10 | heading/adjacency 复用 | collection helpers | blog E2E + RSS parse | TOC 使用 Astro headings |
| T06 | 搜索与联系表单 | done | 串行 | T05 | Search/Contact；AC-04/08/09 | Pagefind Adapter；无 provider 抽象 | Pagefind raw -> SearchResult；mailto | pure unit + preview E2E | dev 搜索可显示 unavailable |
| T07 | 404、部署与遗留清理 | done | 串行 | T06 | 404/SEO/Pages；AC-10/11 | 不恢复旧文件 | Actions/静态工件 | artifact/discovery tests | 默认用户站域名 |
| T08 | 全量验证与证据 | done | 串行 | T07 | AC-01..13 | 不新增行为，只修阻断 | 全契约 | full gates + visual/keyboard | Lighthouse 精确分数环境相关 |
| T09 | 真实 GitHub 项目内容更新 | done | 串行 | 用户确认选项 | AC-06/07/12/14/15/16；Projects/Home | 复用现有内容契约，不新增抽象 | GitHub/README -> Astro project schema | project E2E red -> green；check/build/full E2E；双视口截图 | 仅使用已核实公开事实 |

## 执行说明

- 执行人逐项采用 TDD，完成一个任务后立即把状态改为 `done` 并更新执行 changelog。
- 任何失败保持当前任务 `in_progress`；不得跳过到后续任务。
- 没有额外待确认产品项；全部非阻塞缺失信息已由 spec fallback 覆盖。
