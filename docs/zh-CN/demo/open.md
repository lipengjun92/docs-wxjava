---
icon: open
category:
- Demo
tag:
- 开放平台
---
# 微信开放平台

## Spring Boot版本
[![码云Gitee](https://gitee.com/binary/weixin-java-open-demo/badge/star.svg?theme=blue)](https://gitee.com/binary/weixin-java-open-demo)
[![Github](http://github-svg-buttons.herokuapp.com/star.svg?user=Wechat-Group&repo=weixin-java-open-demo&style=flat&background=1081C1)](https://github.com/Wechat-Group/weixin-java-open-demo)
[![Build Status](https://travis-ci.org/Wechat-Group/weixin-java-open-demo.svg?branch=master)](https://travis-ci.org/Wechat-Group/weixin-java-open-demo)

### 项目仓库地址
[GitHub](http://github.com/Wechat-Group/weixin-java-open-demo)、[码云](http://gitee.com/binary/weixin-java-open-demo)

### 项目说明
本Demo基于`Spring Boot`构建，实现微信第三方平台开发功能。
本项目为`WxJava`的Demo演示程序，更多信息请查阅：<https://github.com/Wechat-Group/WxJava>

### 使用步骤
1. 新手遇到问题，请务必先阅读[【开发文档】](../start/)的常见问题部分，可以少走很多弯路，节省不少时间。
2. 配置：修改`/src/main/resources/application.yml` ，根据自己需要填写相关配置（需要注意的是：yml文件内的属性冒号后面的文字之前需要加空格，可参考已有配置，否则属性会设置不成功）；
3. 运行Java程序：`com.github.binarywang.demo.wechat.WxOpenDemoApplication`；
4. 配置微信第三方平台中的授权事件接收URL：`http://{可外网访问的域名}/notify/receive_ticket`
5. 配置微信第三方平台中的公众号消息与事件接收URL `http://{可外网访问的域名}/notify/$APPID$/callback`
6. 首次启动后需要 等待收到 微信推送的 `component_verify_ticket` 后才可以使用接口 （在第三方平台创建审核通过后，微信服务器每隔10分钟会向第三方的消息接收地址推送一次`component_verify_ticket`，用于获取第三方平台接口调用凭据）
7. 浏览器访问：`http://{可外网访问的域名}/api/auth/goto_auth_url_show` 点击 `go` 跳转到微信授权页面 扫码授权
