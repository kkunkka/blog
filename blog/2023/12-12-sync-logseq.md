---
title: 使用Syncthing跨平台同步Logseq
slug: sync-logseq
tags: [sync, logseq, syncthing]
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
3. 默认端口是8384，使用浏览器访问本地端口即可
 
## 配置

1. 设置好一个文件夹作为同步文件夹
2. 添加远程设备（输入页面上其他设备显示的ID）
3. 选择需要同步的文件夹，共享给其他设备