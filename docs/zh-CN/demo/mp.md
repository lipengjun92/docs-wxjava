---
icon: mp
category:
- Demo
tag:
- 公众号
---
# 微信公众号

## Spring MVC版本
[![码云Gitee](https://gitee.com/binary/weixin-java-mp-demo/badge/star.svg?theme=blue)](https://gitee.com/binary/weixin-java-mp-demo)
[![Github](http://github-svg-buttons.herokuapp.com/star.svg?user=binarywang&repo=weixin-java-mp-demo-springmvc&style=flat&background=1081C1)](https://github.com/binarywang/weixin-java-mp-demo-springmvc)
[![Build Status](https://travis-ci.org/binarywang/weixin-java-mp-demo-springmvc.svg?branch=master)](https://travis-ci.org/binarywang/weixin-java-mp-demo-springmvc)

### 项目仓库地址
[GitHub](http://github.com/binarywang/weixin-java-mp-demo-springmvc)、[码云](https://gitee.com/binary/weixin-java-mp-demo)

### 项目说明
本项目为`WxJava`的 Demo 演示程序，基于`Spring MVC`构建，实现微信公众号开发功能。
更多信息请查阅：<https://github.com/Wechat-Group/WxJava>

如果想支持多公众号，请参考[Spring Boot版本的demo](#spring-boot版本)

### 使用步骤
1. 新手遇到问题，请务必先阅读[【开发文档】](../start/)的常见问题部分，可以少走很多弯路，节省不少时间。
2. 还有其他问题的，请 [到此](https://github.com/binarywang/weixin-java-mp-demo-springmvc/issues) 提问讨论；
3. 配置: 复制 `/src/main/resources/wx.properties.template` 或者修改其扩展名生成 `wx.properties` 文件，填写相关配置;
4. 使用`maven`运行`demo`程序: `mvn jetty:run`  或者自己打`war`包发布到`tomcat`运行；
5. 配置微信公众号中的接口地址（微信公众平台 服务器配置 -> 服务器地址(URL)）：`http://{外网可访问的域名}/wechat/portal`；
6. 根据自己需要修改各个`handler`的实现，加入自己的业务逻辑。

## Spring Boot版本
[![码云Gitee](https://gitee.com/binary/weixin-java-mp-demo-springboot/badge/star.svg?theme=blue)](https://gitee.com/binary/)

### 项目仓库地址
[GitHub](http://github.com/binarywang/weixin-java-mp-demo)、[码云](http://gitee.com/binary/weixin-java-mp-demo-springboot)

### 项目说明
本项目为`WxJava`的 Demo 演示程序，基于`Spring Boot`构建，实现微信公众号后端开发功能。
更多信息请查阅：<https://github.com/Wechat-Group/WxJava>

## 使用步骤
1. **请注意，本demo为简化代码编译时加入了 `lombok` 支持，如果不了解 `lombok` 的话，请先学习下相关知识，比如可以阅读[此文章](../other/lombok.md)**；
2. 新手遇到问题，请务必先阅读[【开发文档】](../start/)的常见问题部分，可以少走很多弯路，节省不少时间。
3. 还有其他问题的，请 [到此](https://github.com/binarywang/weixin-java-mp-demo-springboot/issues) 提问讨论；
4. 配置：复制 `/src/main/resources/application.yml.template` 或修改其扩展名生成 `application.yml` 文件，根据自己需要填写相关配置（需要注意的是：yml文件内的属性冒号后面的文字之前需要加空格，可参考已有配置，否则属性会设置不成功）；
5. 主要配置说明如下：
``` yaml
wx:
  mp:
    useRedis: false
    redisConfig:
      host: 127.0.0.1
      port: 6379
      timeout: 2000
    configs:
      - appId: 1111 # 第一个公众号的appid
        secret: 1111 # 公众号的appsecret
        token: 111 # 接口配置里的Token值
        aesKey: 111 # 接口配置里的EncodingAESKey值
      - appId: 2222 # 第二个公众号的appid，以下同上
        secret: 1111
        token: 111
        aesKey: 111
```
3. 运行Java程序：`WxMpDemoApplication`；
4. 配置微信公众号中的接口地址：`http://{公网可访问域名}/wx/portal/xxxxx` （注意，xxxxx为对应公众号的appid值）；
5. 根据自己需要修改各个handler的实现，加入自己的业务逻辑。

## Spring Boot Starter版本

### 项目仓库地址
[GitHub](https://github.com/binarywang/wx-java-mp-demo)

### 项目说明
本`Demo`使用 `Spring Boot Starter` 实现微信公众号开发功能。

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
    <artifactId>wx-java-mp-spring-boot-starter</artifactId>
    <version>${version}</version>
</dependency>
```
2. 添加配置(application.properties)
```properties
# 公众号配置(必填)
wx.mp.appId = appId
wx.mp.secret = @secret
wx.mp.token = @token
wx.mp.aesKey = @aesKey
# 存储配置redis(可选)
wx.mp.config-storage.type = Jedis                     # 配置类型: Memory(默认), Jedis, RedisTemplate
wx.mp.config-storage.key-prefix = wx                  # 相关redis前缀配置: wx(默认)
wx.mp.config-storage.redis.host = 127.0.0.1
wx.mp.config-storage.redis.port = 6379
#单机和sentinel同时存在时，优先使用sentinel配置
#wx.mp.config-storage.redis.sentinel-ips=127.0.0.1:16379,127.0.0.1:26379
#wx.mp.config-storage.redis.sentinel-name=mymaster
# http客户端配置
wx.mp.config-storage.http-client-type=httpclient      # http客户端类型: HttpClient(默认), OkHttp, JoddHttp
wx.mp.config-storage.http-proxy-host=
wx.mp.config-storage.http-proxy-port=
wx.mp.config-storage.http-proxy-username=
wx.mp.config-storage.http-proxy-password=
# 公众号地址host配置
#wx.mp.hosts.api-host=http://proxy.com/
#wx.mp.hosts.open-host=http://proxy.com/
#wx.mp.hosts.mp-host=http://proxy.com/
```
3. 自动注入的类型
- `WxMpService`
- `WxMpConfigStorage`
