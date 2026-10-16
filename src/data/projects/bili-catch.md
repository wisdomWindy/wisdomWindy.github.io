---
title: BiliCatch
description: 面向 Windows 与 macOS 的哔哩哔哩桌面工具，覆盖媒体下载、本地转写、任务恢复与自动更新。
pubDate: 2026-09-11
techStack: [Tauri, Vue, TypeScript, Rust]
github: https://github.com/wisdomWindy/bili-catch
cover:
  src: /images/project-bilicatch.webp
  alt: BiliCatch 下载中心界面，包含视频地址输入、解析操作与任务导航
featured: true
draft: false
order: 1
outcome: 将解析、下载、转写、任务恢复和跨平台发布收敛为一套可验证的桌面工作流。
---

## 背景

B 站媒体处理并不只是发起一次下载：链接解析、分 P 选择、清晰度与编码、登录态、本地转写以及桌面端发布都需要在同一条任务链中协作。BiliCatch 以 Tauri 2 为桌面容器，让 Vue 界面与 Rust 服务层各自承担适合的职责。

## 责任

- 设计下载中心、登录、任务管理、模型管理和设置等桌面端流程。
- 用稳定的 IPC contract 连接 Vue 界面与 Rust 命令、事件和服务。
- 组织 Windows 与 macOS 的构建、sidecar 打包、GitHub Releases 和更新签名校验。

## 实现亮点

下载任务支持排队、暂停、恢复、取消和重试；任务与设置可以持久化恢复。本地转写集成 whisper.cpp 与 sherpa-onnx，媒体和转写文本无需上传到远端转写服务。前端只消费稳定的 IPC contract，解析、任务状态和文件处理由 Rust 服务层负责。

## 挑战与解决

跨平台媒体工具需要同时处理 FFmpeg、语音模型和不同系统架构。项目将 FFmpeg、whisper-cli 与 sherpa-onnx 作为带目标平台标识的 sidecar 管理，并在模型落盘前校验文件大小和 SHA-256；发布流程分别构建 Windows x64、macOS Intel 与 Apple Silicon 产物。

## 结果

项目已经形成从链接解析、下载控制、本地转写到安装包发布和自动更新的完整闭环，并提供可重复运行的 TypeScript、Vue、Rust 测试与构建门禁。
