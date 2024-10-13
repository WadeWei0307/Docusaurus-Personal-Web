---
title: Git
description: Git 指令教學
sidebar_position: 1
keywords: [Git, Git教學]
---

## 1. Git 整體架構
- 首先大致架構為如下圖 (來源為六角學院)
![Git_flow_structure](./Git_img/Git-flow-structure.png)

### 1. Git 初始化數據庫

```shell
git init
```
- 可以看到該資料夾下會多一個.git檔案。
- 即為新增為本地數據庫。

### 2. 查看工作目錄上有什麼檔案

```shell
git status
```
- 會顯示出 <font color = "red">**untracked file**</font>，表示這些檔案還未被加入到索引。

### 3. 將檔案加入到索引區

```shell
git add <.> //.預設為全部untracked file, 也可以"指定檔案"
```

:::note
- 這時候在下一次 <code>git status</code>，會發現檔案變成出現在<font color = "red">**changes to be commited**</font>裡面，也就是已經到索引區了。
:::

### 4. 將檔案加入到本地數據庫

```shell
git commit -m <"abc">  //abc為你為這次新增的檔案目的
```
- 下了這行之後，檔案就已經被新增到本地數據庫了喔！

### 5. 查看Commit後的紀錄

```shell
git log
```

- 可以看到每次的Commit紀錄，也會有作者資訊。

### 6. 新增遠端數據庫

```shell
git remote add origin <URL> //URL https://github.com/WadeWei0307/Git_test.git 通常為Github新增Respository後他給你的範例網址 
```

- 那新增完之後可以去 **.git/config** 的檔案確認是否已新增遠端數據庫。
![Git_remote_add_origin](./Git_img/Git-remote-add-origin.png)

### 7. 將檔案新增至遠端數據庫

```shell
git push -u origin main
```

- 這邊 <code>-u</code> 的意思是當我曾經推上遠端數據庫名為main之後，我下次還要將本地推到遠端main分支的時候只需要下 <code>git push</code>。

## 2. 查看Git版本

```shell
git --version
```
- cmd會Show出Git的版本。

## 3. 設定作者

```shell showLinesNumbers
git config --global user.name <"gonsakon">
git config --global user.email <"gonsakon@gmail.com">
git config --list
```
- Line 1 就是作者名稱 (下圖紅框，[Source Tree](https://www.sourcetreeapp.com/)的頁面)
- Line 2 就是作者信箱 (下圖紅框，[Source Tree](https://www.sourcetreeapp.com/)的頁面)
- Line 3 可以查看剛剛是否有設定進去。

:::note
Line 3 也可以去 C:\Users\<user> 底下的.gitconfig做查看。
:::

![Git_config_img](./Git_img/Git-config.png)

## 4. Git指令指定縮寫

```shell
git config --global alias.st status
```

- 要如何看自己有沒有改成功，可以輸入<code>git config --list</code>之後查看。
![Git_remote_add_origin](./Git_img/Git-instruction-abbreviation.png) 