#!/bin/sh
echo =================================
echo  自动化部署 WxJava Docs 脚本启动
echo =================================

echo 准备从Git仓库拉取最新代码
cd /root/repositories/docs-wxjava

echo 开始从Git仓库拉取最新代码
git pull
echo 代码拉取完成

echo 先install
output=`cnpm i`

echo 开始打包
output=`npm run docs:build`

rm -rf /home/wxjava/

echo 复制到发布目录
cp -r /root/repositories/docs-wxjava/docs/.vuepress/dist /home/wxjava
echo 部署完成
