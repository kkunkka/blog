---
title: 使用Syncthing跨平台同步Logseq
slug: sync-logseq
tags: [sync, logseq, syncthing]
draft: true
---

最近在使用一个双链笔记软件[Logseq](https://logseq.com/), 它的数据是存储在本地文件中的, 我需要跨平台和设备同步, 所以决定使用Syncthing来同步Logseq的数据, 下面是详细操作。
<!--truncate-->

## Linux端

1. 安装Syncthing

```bash
sudo apt-get install syncthing
```

2. 设置开启自启

```bash
sudo systemctl start syncthing
```

默认端口是8384，使用IP:8384即可访问

## Windows端
1. 下载并安装Syncthing
2. 启动Syncthing

## 安卓手机端
1. 下载并安装Syncthing
2. 启动Syncthing

## 配置

1. 在Linux端打开Syncthing, 点击右上角的齿轮图标, 选择"Add Folder"
2. 在弹出的窗口中, 选择Logseq的数据目录, 点击"Add"
3. 在Windows端打开Syncthing, 点击右上角的齿轮图标, 选择"Add Folder"
4. 在弹出的窗口中, 选择Logseq的数据目录, 点击"Add"
5. 在手机端打开Syncthing, 点击右上角的齿轮图标, 选择"Add Folder"