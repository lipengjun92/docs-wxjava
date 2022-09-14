---
icon: pay
category:
- Demo
tag:
- 支付
---
# 微信支付

## Spring Boot版本
[![码云Gitee](https://gitee.com/binary/weixin-java-pay-demo/badge/star.svg?theme=blue)](https://gitee.com/binary/weixin-java-pay-demo)
[![Github](http://github-svg-buttons.herokuapp.com/star.svg?user=binarywang&repo=weixin-java-pay-demo&style=flat&background=1081C1)](https://github.com/binarywang/weixin-java-pay-demo)
[![Build Status](https://travis-ci.org/binarywang/weixin-java-pay-demo.svg?branch=master)](https://travis-ci.org/binarywang/weixin-java-pay-demo)

### 项目仓库地址
[GitHub](http://github.com/binarywang/weixin-java-pay-demo)、[码云](http://gitee.com/binary/weixin-java-pay-demo)

### 项目说明
本 Demo 基于 `WxJava` 和 `Spring Boot` 构建，演示微信支付后端接口使用方法。

### 使用步骤
1. 新手遇到问题，请务必先阅读[【开发文档】](../start/)的常见问题部分，可以少走很多弯路，节省不少时间。
2. 如有问题，请到[此处提问](https://github.com/binarywang/weixin-java-pay-demo/issues)
3. 配置：复制`/src/main/resources/application.yml.template`或者修改其扩展名生成`application.yml`文件，并根据自己需要填写相关配置，其中支付相关参数含义请参考`WxPayProperties`类中的注释（需要注意的是：yml文件内的属性冒号后面的文字之前需要加空格，可参考已有配置，否则属性会设置不成功）；
4. 其中各参数的含义请参考 `/src/main/java/com/github/binarywang/demo/wxpay/config/WxPayProperties.java` 文件里的注释；
5. 需要特别注意的，是sub开头的两个参数属于服务商模式使用的，如果是普通模式，请不要配置这两个参数，最好从配置文件中移除相关项；
6. 查看`WxPayController`类代码，根据自己需要修改调整相关实现；
7. 运行Java程序：`WxPayDemoApplication`；
8. 打开网页浏览器，输入想要访问的地址，比如 `http://localhost:8080/pay/closeOrder/123` 查看效果。
9. 还可以访问 `http://localhost:8080/swagger-ui.html` 来查看所有可用接口，并进行在线调试；
10. 更多接口使用说明，请参考 [微信支付文档](../start/pay/)

## Spring Boot Starter版本

### 项目仓库地址
[GitHub](https://github.com/binarywang/wx-java-pay-demo)

### 项目说明
本`Demo`使用 `Spring Boot Starter` 实现微信支付开发功能。

### 使用步骤
1. 修改对应配置为正确的配置，
2. 运行demo，执行命令 ：`http get :8080/test`

```
HTTP/1.1 200
Connection: keep-alive
Content-Length: 29
Content-Type: text/plain;charset=UTF-8
Date: Fri, 16 Oct 2020 13:47:18 GMT
Keep-Alive: timeout=60

https://api.mch.weixin.qq.com

```

### 自有项目使用
1. 在自己的Spring Boot项目里，引入maven依赖
```xml
<dependency>
    <groupId>com.github.binarywang</groupId>
    <artifactId>wx-java-pay-spring-boot-starter</artifactId>
    <version>${version}</version>
</dependency>
 ```
2. 添加配置(application.yml)
- V2版本
```yml
wx:
  pay:
    appId: 
    mchId: 
    mchKey: 
    subAppId:
    subMchId:
    keyPath:
```
   - V3版本
```yml
wx:
  pay:
    appId: xxxxxxxxxxx
    mchId: 15xxxxxxxxx #商户id
    apiV3Key: Dc1DBwSc094jACxxxxxxxxxxxxxxx #V3密钥
    certSerialNo: 62C6CEAA360BCxxxxxxxxxxxxxxx
    privateKeyPath: classpath:cert/apiclient_key.pem #apiclient_key.pem证书文件的绝对路径或者以classpath:开头的类路径
    privateCertPath: classpath:cert/apiclient_cert.pem #apiclient_cert.pem证书文件的绝对路径或者以classpath:开头的类路径
```