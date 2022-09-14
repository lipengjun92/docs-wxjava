---
icon: java
category:
- 教程
tag:
- 其他常见问题
---
# 其他常见问题
## 设置安全域名注意事项
**在微信后台设置安全域名时，注意不要将http等字符带入，首先要理解域名的含义，应该是`www.abcde.com`类似这样的**

## WxConsts常用常量定义
<http://binary.ac.cn/weixin-java-common-javadoc/me/chanjar/weixin/common/api/WxConsts.html>

## Http框架的选用说明
目前cp和mp均支持多种http框架（apache-httpclient、jodd-http以及okhttp）的自由选用，pay只支持apache-httpclient和jodd-http，
客户端默认情况下可以使用apache httpclient；

拿MP举例子来说：
_**（特别说明，以防新手不假思索造成对现有项目的影响。如果在你的项目中其他地方还会使用到httpclient，那请注意不要填加exclusions的部分）**_

1、 如果想使用jodd-http，请在项目pom文件中如下配置：
```
        <dependency>
            <groupId>com.github.binarywang</groupId>
            <artifactId>weixin-java-mp</artifactId>
            <version>${weixin-java-mp.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>org.apache.httpcomponents</groupId>
                    <artifactId>*</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.jodd</groupId>
            <artifactId>jodd-http</artifactId>
            <version>3.7.1</version>
        </dependency>
```
此时应该使用的 `WxMpService`实现类应该是：
 ```
me.chanjar.weixin.mp.api.impl.WxMpServiceJoddHttpImpl
```

也可以参考<https://github.com/wechat-group/weixin-java-mp-demo> 的jodd-http分支，来查看相关代码。

2、如果想使用okhttp，请在项目pom文件中如下配置：
```
        <dependency>
            <groupId>com.github.binarywang</groupId>
            <artifactId>weixin-java-mp</artifactId>
            <version>${weixin-java-mp.version}</version>
            <exclusions>
                <exclusion>
                    <groupId>org.apache.httpcomponents</groupId>
                    <artifactId>*</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>com.squareup.okhttp3</groupId>
            <artifactId>okhttp</artifactId>
            <version>3.7.0</version>
        </dependency>
```
此时应该使用的 `WxMpService`实现类应该是：
 ```
me.chanjar.weixin.mp.api.impl.WxMpServiceOkHttpImpl
```

也可以参考<https://github.com/wechat-group/weixin-java-mp-demo> 的okhttp分支，来查看相关代码。

## HttpClient相关参数的设置方法
### 1.修改HttpClient链接参数配置
为了方便HttpClient相关参数的配置增加了接口ApacheHttpClientBuilder并实现了一个默认配置DefaultApacheHttpClientBuilder.在默认配置中具体的配置参数如下:

```java
  private int connectionRequestTimeout = 3000;//从连接池获取链接的超时时间设置,默认3000ms
  private int connectionTimeout = 5000;//建立链接的超时时间,默认5000ms.(由于使用了连接池,这个参数没有实际意义)
  private int soTimeout = 5000;//连接池socket超时时间,默认5000ms
  private int idleConnTimeout = 60000;//空闲链接的超时时间,默认60000ms
  private int checkWaitTime = 60000;//空闲链接的检测周期,默认60000ms
  private int maxConnPerHost = 10;//每路最大连接数,默认10
  private int maxTotalConn = 50;//连接池最大连接数,默认50
  private String userAgent;//HttpClient请求时使用的User Agent(默认为HttpClient的默认值)
```

参考[MP_Quick Start](./mp/start)或者[CP_Quick-Start](./cp/start)在API初始化是我们需要设置`Wx\*\*ConfigStorage`,可以通过方法`setApacheHttpClientBuilder`设置`ApacheHttpClientBuilder`的实现类来配置具体的`HttpClient`的参数配置.默认没有设置本参数的时候将会使用`DefaultApacheHttpClientBuilder`中默认的参数配置.下面以`DefaultApacheHttpClientBuilder`为例给出修改参数的配置方法

```java
Wx**InMemoryConfigStorage config = new Wx**InMemoryConfigStorage();
config.setHttpProxyHost(..);//设置代理地址,没有可以无需设置
config.setHttpProxyPort(..);//设置代理端口,没有可以无需设置
config.setHttpProxyUsername(..);//设置代理用户名,没有可以无需设置
config.setHttpProxyPassword(..);//设置代理密码,没有可以无需设置

DefaultApacheHttpClientBuilder clientBuilder = DefaultApacheHttpClientBuilder.get();
clientBuilder.setConnectionRequestTimeout(..)//从连接池获取链接的超时时间(单位ms)
clientBuilder.setConnectionTimeout(..)//建立链接的超时时间(单位ms)
clientBuilder.setSoTimeout(..)//连接池socket超时时间(单位ms)
clientBuilder.setIdleConnTimeout(..)//空闲链接的超时时间(单位ms)
clientBuilder.setCheckWaitTime(..)//空闲链接的检测周期(单位ms)
clientBuilder.setMaxConnPerHost(..)//每路最大连接数
clientBuilder.setMaxTotalConn(..)//连接池最大连接数
clientBuilder.setUserAgent(..)//HttpClient请求时使用的User Agent
config.setApacheHttpClientBuilder(clientBuilder); //设置自定义的ApacheHttpClientBuilder

```
### 2.关于在spring中的使用
方法一,可以自己实现`ApacheHttpClientBuilder`接口然后在`Wx\*\*ConfigStorage`中设置.**推荐此方法**

方法二,使用`DefaultApacheHttpClientBuilder`,考虑到`DefaultApacheHttpClientBuilder`并不是最优解,所以没有提供`public`的构造方法,只提供了一个静态方法获取实例.如果一定要使用这个类来实现自定义配置的话我们需要定义一个`Spring`的`FactoryBean`,下面给出参考代码.

```java
import org.springframework.beans.factory.FactoryBean;
import me.chanjar.weixin.common.util.http.ApacheHttpClientBuilder;
import me.chanjar.weixin.common.util.http.DefaultApacheHttpClientBuilder;


public class DefaultApacheHttpClientBuilderFactoryBean implements FactoryBean<ApacheHttpClientBuilder> {
  private int connectionRequestTimeout;
  private int connectionTimeout;
  private int soTimeout;
  private int idleConnTimeout;
  private int checkWaitTime;
  private int maxConnPerHost;
  private int maxTotalConn;
  private String userAgent;
  
  public ApacheHttpClientBuilder getObject() throws Exception {
    DefaultApacheHttpClientBuilder clientBuilder = DefaultApacheHttpClientBuilder.get();
    clientBuilder.setConnectionRequestTimeout(this.connectionRequestTimeout);
    clientBuilder.setConnectionTimeout(this.connectionTimeout);
    clientBuilder.setSoTimeout(this.soTimeout);
    clientBuilder.setIdleConnTimeout(this.idleConnTimeout);
    clientBuilder.setCheckWaitTime(this.checkWaitTime);
    clientBuilder.setMaxConnPerHost(this.maxConnPerHost);
    clientBuilder.setMaxTotalConn(this.maxTotalConn);
    clientBuilder.setUserAgent(this.userAgent);
    return clientBuilder;
  }

  public Class<?> getObjectType(){
    return ApacheHttpClientBuilder.class;
  }

  public boolean isSingleton(){
    return true;
  }

  public void setConnectionRequestTimeout(int connectionRequestTimeout) {
    this.connectionRequestTimeout = connectionRequestTimeout;
  }

  public void setConnectionTimeout(int connectionTimeout) {
    this.connectionTimeout = connectionTimeout;
  }

  public void setSoTimeout(int soTimeout) {
    this.soTimeout = soTimeout;
  }

  public void setIdleConnTimeout(int idleConnTimeout) {
    this.idleConnTimeout = idleConnTimeout;
  }

  public void setCheckWaitTime(int checkWaitTime) {
    this.checkWaitTime = checkWaitTime;
  }

  public void setMaxConnPerHost(int maxConnPerHost) {
    this.maxConnPerHost = maxConnPerHost;
  }

  public void setMaxTotalConn(int maxTotalConn) {
    this.maxTotalConn = maxTotalConn;
  }

  public void setUserAgent(String userAgent) {
    this.userAgent = userAgent;
  }
}

```

## Maven 学习视频
对Maven不熟的，建议学习[此视频](http://www.imooc.com/learn/443)

## 几个内网端口映射服务网站
- <https://gofrp.org/>
    - frp 是一个高性能的反向代理应用，可以帮助您轻松地进行内网穿透，对外网提供服务，支持 tcp, http, https 等协议类型，并且 web 服务支持根据域名进行路由转发。
- <http://wendal.cn>
    - Nutz社区提供的ngrok服务，详细访问 <https://nutz.cn/yvr/t/33b68q9106imspallbj4c6aa0p>
- <http://www.mofasuidao.cn/>  **(2021年12月24日10时终止对外运营)**
    - 拥有魔法隧道，让你穿越世界，引领「内网穿透」潮流，为世界带来美好的改变
- <http://natapp.cn/>
- <http://ngrok.io> == <http://ngrok.com>
- <http://ngrok.2bdata.com/>
- <http://www.ngrok.cc/>
- <http://www.nat123.com/>
- 路由侠 <http://www.luyouxia.com/>
- WeNAT <https://www.wezoz.com/>
- NPS <https://ehang-io.github.io/nps/#/>
    - 几乎支持所有协议,支持内网http代理、内网socks5代理、p2p等,简洁但功能强大的WEB管理界面,支持服务端、客户端同时控制,全平台兼容
- gost <https://github.com/ginuerzh/gost> GO语言实现的安全隧道,支持标准HTTP/HTTPS/HTTP2/SOCKS4(A)/SOCKS5代理协议
### 曾经可用，已停止服务的
- http://qydev.com/
- http://www.ymgy.org/
- http://blog.qqbrowser.cc/
- http://u.tools/  因被恶意使用，官方已永久关停内网穿透服务

====================================
- <http://hsk.oray.com/> 花生壳，以前免费，现在收费8块钱，作为认证费,认证之后有两个端口映射免费。
- <http://www.pubyun.com/> 以前的3322.org 有免费版、收费版
- 现在tplink的部分路由器也有DNS服务

====================================

。。。欢迎提供更多的

## 下载maven jar包出现问题时请设置maven镜像库
推荐使用国内的镜像库，修改maven配置文件setting.xml，替换原有mirrors部分，或添加相应内容：
### 1 .aliyun
```
  <mirrors>
    <mirror>
      <id>aliyun</id>
      <name>aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
```
### 2. 163

mirror配置：
```
<mirror>
    <id>nexus-163</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus 163</name>
    <url>http://mirrors.163.com/maven/repository/maven-public/</url>
</mirror>
```

更多信息可以查看http://mirrors.163.com/.help/maven.html

## Emoji表情字符存储有问题
Emoji表情字符存储有问题，或者遇到保存字符串到数据库里出现`\xF0\x9F\x92\x94`类似问题
### 尝试使用[这个工具](https://github.com/binarywang/java-emoji-converter)
### 或者修改数据库存储编码为utf8mb4

## httpclient 4.3.1 版本有bug 请不要使用
详细参考
<https://issues.apache.org/jira/browse/HTTPCLIENT-1495?jql=project%20%3D%20HTTPCLIENT%20AND%20text%20~%20%22Connection%20shut%20down%22>

## WxSession的使用
[Session](./WxSession)

## 配置日志
在1.1.0版本添加了日志的支持，本项目使用的是[slf4j](http://www.slf4j.org)，关于日志的配置请参考[slf4j](http://www.slf4j.org)官方文档。

## 消息排重
在1.1.0中添加了对消息重排的机制，根据官方文档：

* 公众号的排重方式

  普通消息：关于重试的消息排重，推荐使用msgid排重。[文档参考](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140453)。
  事件消息：关于重试的消息排重，推荐使用FromUserName + CreateTime 排重。[文档参考](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140454)

* 企业号的排重方式

  官方文档完全没有写，参照公众号的方式排重。

本项目采用的是更简单的方式：如果有MsgId就用MsgId排重，如果没有就用FromUserName+CreateTime排重。

本项目采用的实现是基于内存的排重器``WxMessageInMemoryDuplicateChecker``，开发人员可以实现自己的``WxMessageDuplicateChecker``。
只要在``Wx*MessageRouter.route``前``setMessageDuplicateChecker``为自己的实现就行了。
