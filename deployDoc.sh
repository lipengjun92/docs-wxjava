#!/bin/sh
echo =================================
echo  自动化部署文档脚本启动
echo =================================

echo 准备从Git仓库拉取最新代码
cd /root/repositories/docfly2you

echo 开始从Git仓库拉取最新代码
git pull
echo 代码拉取完成

echo 先install
output=`cnpm i`

echo 开始打包
output=`npm run build`

cd /home/doc
rm -rf *

echo 复制到发布目录
cp -r /root/repositories/docfly2you/docs/.vuepress/dist/* /home/doc
echo 部署完成
