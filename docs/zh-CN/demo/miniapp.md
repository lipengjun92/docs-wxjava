---
icon: miniapp
category:
- Demo
tag:
- 小程序
---
# 微信小程序

## Spring Boot版本
[![码云Gitee](https://gitee.com/binary/weixin-java-miniapp-demo/badge/star.svg?theme=blue)](https://gitee.com/binary/weixin-java-miniapp-demo)
[![Github](http://github-svg-buttons.herokuapp.com/star.svg?user=binarywang&repo=weixin-java-miniapp-demo&style=flat&background=1081C1)](https://github.com/binarywang/weixin-java-miniapp-demo)
[![Build Status](https://travis-ci.org/binarywang/weixin-java-miniapp-demo.svg?branch=master)](https://travis-ci.org/binarywang/weixin-java-miniapp-demo)

### 项目仓库地址
[GitHub](http://github.com/binarywang/weixin-java-miniapp-demo)、[码云](http://gitee.com/binary/weixin-java-miniapp-demo)

### 项目说明
本项目为`WxJava`的 Demo 演示程序，基于`Spring Boot`构建，实现微信小程序后端开发功能，支持多个小程序。
更多信息请查阅：<https://github.com/Wechat-Group/WxJava>

### 使用步骤
1. **请注意，本demo为简化代码编译时加入了 `lombok` 支持，如果不了解 `lombok` 的话，请先学习下相关知识，比如可以阅读[此文章](../other/lombok.md)**；
2. 新手遇到问题，请务必先阅读[【开发文档】](../start/)的常见问题部分，可以少走很多弯路，节省不少时间。
3. 配置：复制 `/src/main/resources/application.yml.template` 或者修改其扩展名生成 `application.yml` 文件，根据自己需要填写相关配置（需要注意的是：yml文件内的属性冒号后面的文字之前需要加空格，可参考已有配置，否则属性会设置不成功）；
4. 运行Java程序：`WxMaDemoApplication`；
5. 如果需要接入消息服务，请配置微信小程序中的消息服务器地址：`http://{外网可访问的域名}/wx/portal/{appid}` （注意{appid}要使用对应的小程序的appid进行替换）， 官方文档接入指引：<https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html>


## Spring Boot Starter版本

### 项目仓库地址
[GitHub](https://github.com/binarywang/wx-java-miniapp-demo)

### 项目说明
本`Demo`使用 `Spring Boot Starter` 实现微信小程序开发功能。

### 使用步骤
1. 修改对应配置为正确的配置，
2. 运行demo，执行命令 ：`http get :8080/test`

```
HTTP/1.1 200
Connection: keep-alive
Content-Length: 5
Content-Type: text/plain;charset=UTF-8
Date: Fri, 04 Sep 2020 01:28:06 GMT
Keep-Alive: timeout=60

appId
```

### 自有项目使用
1. 引入依赖
```xml
<dependency>
    <groupId>com.github.binarywang</groupId>
    <artifactId>wx-java-miniapp-spring-boot-starter</artifactId>
    <version>${version}</version>
</dependency>
```
2. 添加配置(application.properties)
```properties
# 公众号配置(必填)
wx.miniapp.appid = appId
wx.miniapp.secret = @secret
wx.miniapp.token = @token
wx.miniapp.aesKey = @aesKey
wx.miniapp.msgDataFormat = @msgDataFormat                  # 消息格式，XML或者JSON.
# 存储配置redis(可选)
# 注意: 指定redis.host值后不会使用容器注入的redis连接(JedisPool)
wx.miniapp.config-storage.type = Jedis                     # 配置类型: Memory(默认), Jedis, RedisTemplate
wx.miniapp.config-storage.key-prefix = wa                  # 相关redis前缀配置: wa(默认)
wx.miniapp.config-storage.redis.host = 127.0.0.1
wx.miniapp.config-storage.redis.port = 6379
# http客户端配置
wx.miniapp.config-storage.http-client-type=HttpClient      # http客户端类型: HttpClient(默认), OkHttp, JoddHttp
wx.miniapp.config-storage.http-proxy-host=
wx.miniapp.config-storage.http-proxy-port=
wx.miniapp.config-storage.http-proxy-username=
wx.miniapp.config-storage.http-proxy-password=
```
3. 自动注入的类型
- `WxMaService`
- `WxMaConfig`
