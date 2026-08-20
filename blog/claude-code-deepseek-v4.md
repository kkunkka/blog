---
title: Claude Code 接入 DeepSeek V4
slug: claude-code-deepseek-v4
date: 2026-04-27
tags: [Claude, AI, 工具]
authors: kkunkka
---

## 1.配置

```
# 编辑 ~/.claude/settings.json

{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的Key",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash[1m]",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_EFFORT_LEVEL": "max"
  },
  "model": "opus"
}
```

## 2.运行

```
claude
```

> DeepSeek 官方提供 Anthropic 兼容接口，直接填 Key 就能用，不用装代理。
>
> V4 Pro 对应 Opus 级别任务，V4 Flash 对应 Haiku。`[1m]` 后缀启用 1M 上下文。
