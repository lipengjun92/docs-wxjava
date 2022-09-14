---
icon: mp
category:
- 教程
tag:
- 公众号
---
# 公众号开发文档
>包括订阅号和服务号
## 实现接口说明
[【微信公众号官方文档】](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)中各模块实现情况（截至20220527）：
- openApi管理：			未实现
- 自定义菜单：			已实现
- 基础消息能力：			已实现
- 订阅通知：			已实现
- 客服消息：			已实现
- 微信网页开发：			已实现
- 素材管理：			已实现
- 草稿箱：			已实现
- 发布能力：			已实现
- 图文消息留言管理：		已实现
- 用户管理：				已实现
- 帐号管理：				已实现
- 数据统计：				已实现
- 微信卡券：				部分实现
- 微信门店：				部分实现
- 微信小店：				已实现
- 智能接口：				已实现
- 微信设备功能：			未实现
- 微信“一物一码”：			未实现
- 微信发票：				部分实现
- 微信非税缴费：			未实现
- 扫服务号二维码打开小程序：	未实现
## 其他说明
1. [JavaDoc](http://binary.ac.cn/weixin-java-mp-javadoc/)
1. [公众平台接口权限列表说明](http://kf.qq.com/faq/170104AJ3y26170104Yj673y.html)
1. [微信卡券目前仅实现了部分接口，详细请直接查看JavaDoc](http://binary.ac.cn/weixin-java-mp-javadoc/me/chanjar/weixin/mp/api/WxMpCardService.html)
1. [Quick Start](./start.md)
1. [验证消息合法性](./verify.md)
1. [微信消息路由器](./router.md)
1. [同步回复消息（被动回复）](./reply.md)
1. [WxMpConfigStorage](./wxMpConfigStorage.md)
1. [主动发送消息（客服消息）](./send.md)
1. [临时素材（多媒体文件）管理](./material.md)
1. [永久素材管理](./materialNews.md)
1. [OAuth2网页授权](./oauth2.md)
1. [微信JS-SDK支持](./jsapi.md)
1. [消息的加解密](./encrypt.md)
1. [用户管理](./user.md)
1. [标签管理](./tag.md)
1. [群发消息](./sendGroup.md)
1. [自定义菜单管理](./menu.md)
1. [二维码管理](./qrCode.md)
1. [短链接管理](./shortUrl.md)
1. [发送模板消息](./template.md)
1. [语义查询](./semantic.md)
1. [http代理支持](./proxy.md)
1. [如何调用未支持的接口](./unsurport.md)
1. [如何执行本项目单元测试](./test.md)
1. [Demo代码及Demo项目](./demo.md)
1. [数据统计](./data.md)