---
title: SkillHub
description: 从仓库中的 YAML 内容生成个人技能目录，让技能展示、安装指令与版本信息保持可维护。
pubDate: 2026-07-07
techStack: [Vue, TypeScript, Vite SSG, Tailwind CSS]
github: https://github.com/wisdomWindy/skill-hub
demo: https://wisdomwindy.github.io/skill-hub/
cover:
  src: /images/project-skill-hub.webp
  alt: SkillHub 技能目录首页，展示分类导航和技能条目
featured: true
draft: false
order: 2
outcome: 将技能资料维护在版本库中，并生成适合 GitHub Pages 托管的静态目录与详情页。
---

## 背景

个人技能和工具说明容易散落在不同文档里，安装命令、版本与变更记录也难以统一维护。SkillHub 把仓库内容作为唯一数据源，通过静态生成提供可浏览、可分享的技能目录。

## 责任

- 定义技能记录的 YAML 内容结构和公开、归档状态。
- 实现目录、分类与详情页面，并支持代码示例和安装命令展示。
- 配置项目级 GitHub Pages 的基础路径构建与自动部署流程。

## 实现亮点

每个技能由独立 YAML 文件维护，包含标识、分类、版本、描述、安装命令、标签和变更记录。Vue 3 与 Vite SSG 在构建阶段生成静态路由，Markdown 内容经过解析与清理后再进入页面，站点不依赖后端、登录或运行时 GitHub 写权限。

## 挑战与解决

GitHub Pages 项目站点运行在 `/skill-hub/` 子路径下，直接使用根路径会导致资源和详情链接失效。构建流程通过 `BASE_PATH` 显式接收仓库路径，并在本地与 CI 中分别验证根路径和子路径产物。

## 结果

技能内容、页面与部署边界保持清晰：内容维护只需修改 YAML，构建门禁会执行单元测试、类型检查以及两种基础路径构建，成功后再发布静态产物。
