---
icon: java
category:
- 教程
tag:
- 常见问题
---
# 常见异常问题的解决办法

## 加解密时出现`Illegal key size`异常

如果在加解密的过程中出现``java.security.InvalidKeyException: Illegal key size``，则需要下载一个东西：

- JRE/JDK 6：<http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html>
- JRE/JDK 7：<http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html>
- JRE/JDK 8u151 之前版本：<http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html>
- JRE/JDK 8u151 之后版本已经内置无限制权限策略文件，只需将`$JAVA_HOME/jre/lib/security/java.security`文件中的`#crypto.policy=unlimited`解除注释即可

如果安装了JRE，将两个jar文件放到``$JAVA_HOME/lib/security``目录下覆盖原来的文件

如果安装了JDK，将两个jar文件放到``$JAVA_HOME/jre/lib/security``目录下覆盖原来文件

如果是使用了工具可能内置了JRE，需要在工具引用的目录下面将两个jar文件放到`/jre/lib/security`目录下覆盖原来的文件

## 发生`java.security.KeyException`
javax.net.ssl.SSLException: java.security.ProviderException: java.security.KeyException

一般出现此问题的原因是 使用了openjdk，
解决办法：

1. 换成oracle jdk即可；
1. 或者参考<http://blog.csdn.net/yaominhua/article/details/51830630> （据说执行完后出现常见问题第一条，不建议使用此方法）
   摘录如下：

> 解决方案

> 升级nss

`sudo yum upgrade nss`

## 出现`NoClassDefFoundError`、`NoSuchFieldError`、`NoSuchMethdError`或`ClassNotFoundException`
1. 先找到对应方法或类所在的jar包，通过在`IDE`开发环境或在线搜索均可轻易获得；
1. 确认对应jar包是否确实已经部署到运行时环境中；
1. 检查本地项目对应的jar包版本，是否与本SDK所依赖的版本（[【点此处查看pom文件】](https://github.com/Wechat-Group/WxJava/blob/master/pom.xml)）一致，一般来说是由于部分jar包版本过低导致；
1. 最常见的是：`httpclient`、`commons-lang3`、`xstream` 等第三方jar包的版本过老，请检查并核实；
1. 还有一种情况是，你项目里使用了 `WxJava` 的多个模块，但是彼此版本不同，比如如果你是用了 `3.1.0` 的 `weixin-java-pay` 模块，同时使用了 `3.6.0` 的 `weixin-java-mp` 模块，就有可能会导致 `weixin-java-commmon` 版本不一致，从而出现部分方法或类找不到，解决办法：使用同一版本即可。
1. 手动在自己项目的 `pom` 文件中指定对应`jar`包 `maven` 依赖和正确的版本号。
1. resources目录下没有证书apiclient_cert.p12

## 升级 `commons-codec` 至 1.13 版本后,加解密时出现 `java.lang.IllegalArgumentException: Last encoded character (before the paddings if any) is a valid base 64 alphabet but not a possible value. Expected the discarded bits to be zero.`
请参考这里：<https://github.com/Wechat-Group/WxJava/issues/1454>

## org.xml.sax.SAXNotRecognizedException: unrecognized feature
请参考这里：<https://github.com/Wechat-Group/WxJava/issues/1734>

## 小程序解密有关信息时出现JsonSyntaxException异常
请参考这里：<https://github.com/Wechat-Group/WxJava/issues/359>，  
或者[查看官方文档相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)，  
或者<https://www.cnblogs.com/guansixu/articles/6484872.html>

## 微信小程序更新wx.getUserProfile，无法获取到小程序用户信息
请参考这里：<https://github.com/Wechat-Group/WxJava/issues/2069>

## 微信小程序支持多账号
其他项目支持多账号同理  
<https://github.com/binarywang/weixin-java-miniapp-demo/blob/master/src/main/java/com/github/binarywang/demo/wx/miniapp/config/WxMaConfiguration.java>


## 企业微信集群部署，accessToken失效
共享accessToken到redis，其他同理  
<https://github.com/binarywang/weixin-java-cp-demo/blob/master/src/main/java/com/github/binarywang/demo/wx/cp/config/mutil/WxCpConfiguration.java>，
或者[请参考](https://github.com/Wechat-Group/WxJava/issues/2753)[这里](https://github.com/Wechat-Group/WxJava/issues/2594)
