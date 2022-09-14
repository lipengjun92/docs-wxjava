---
home: true # 标记此页面是否为首页
heroImage: ./img/logo.png
lang: zh-CN # 表示本页面的语言为zh-CN(简体中文)
icon: home
heroText: 微信开发 Java SDK
tagline: 支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发 ✨ 
actions:
  - text: 开始使用
    link: ./start/
    icon: arrow
    type: primary

features:
  - title: cp模块
    icon: cp
    details: 微信企业号/企业微信
    link: ./start/cp/
    
  - title: miniapp模板
    icon: miniapp
    details: 微信小程序
    link: ./start/miniapp/
    
  - title: mp模板
    icon: mp
    details: 微信公众号
    link: ./start/mp/
  
  - title: open模板
    icon: open
    details: 微信开放平台
    link: ./start/open/

  - title: pay模板
    icon: pay
    details: 微信支付
    link: ./start/pay/

  - title: qidian模板
    icon: qidian
    details: 腾讯企点
    link: ./start/qidian/
---

## 😘使用

[![码云Gitee](https://gitee.com/binary/weixin-java-tools/badge/star.svg?theme=blue)](https://gitee.com/binary/weixin-java-tools)
[![Github](https://img.shields.io/github/stars/Wechat-Group/WxJava?logo=github&style=flat)](https://github.com/Wechat-Group/WxJava)
[![GitHub release](https://img.shields.io/github/release/Wechat-Group/WxJava.svg)](https://github.com/Wechat-Group/WxJava/releases)
[![Maven Central](https://img.shields.io/maven-central/v/com.github.binarywang/wx-java.svg)](http://mvnrepository.com/artifact/com.github.binarywang/wx-java)
[![Build Status](https://app.travis-ci.com/Wechat-Group/WxJava.svg?branch=develop)](https://app.travis-ci.com/github/Wechat-Group/WxJava)
[![使用IntelliJ IDEA开发维护](https://img.shields.io/badge/IntelliJ%20IDEA-支持-blue.svg)](https://www.jetbrains.com/?from=WxJava-weixin-java-tools)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

::: code-tabs

@tab Maven

```java
<dependency>
  <groupId>com.github.binarywang</groupId>
  <artifactId>(不同模块参考下文)</artifactId>
  <version>4.4.0</version>
</dependency>
```

@tab Gradle

```groovy
compile "com.github.binarywang:(不同模块参考下文):4.4.0"
```
:::
- 微信小程序：`weixin-java-miniapp`
- 微信支付：`weixin-java-pay`
- 微信开放平台：`weixin-java-open`
- 公众号（包括订阅号和服务号）：`weixin-java-mp`
- 企业号/企业微信：`weixin-java-cp`

## 重要信息
1. 项目合作洽谈请联系微信`binary0000`（在微信里自行搜索并添加好友，请注明来意，如有关于SDK问题需讨论请参考下文入群讨论，不要加此微信）。
2. **2022-8-21 发布 [【4.4.0正式版】](./change/440.md)**！
3. 贡献源码可以参考视频：[【贡献源码全过程（上集）】](https://mp.weixin.qq.com/s/3xUZSATWwHR_gZZm207h7Q)、[【贡献源码全过程（下集）】](https://mp.weixin.qq.com/s/nyzJwVVoYSJ4hSbwyvTx9A) ，友情提供：[程序员小山与Bug](https://space.bilibili.com/473631007)
4. 新手重要提示：本项目仅是一个SDK开发工具包，未提供Web实现，建议使用 `maven` 或 `gradle` 引用本项目即可使用本SDK提供的各种功能，详情可参考 **[【Demo项目】](./demo/)** 或本项目中的部分单元测试代码；
5. 微信开发新手请务必阅读[【常见异常问题的解决办法】](./start/question.md)，可以少走很多弯路，节省不少时间。
6. 技术交流群：想获得QQ群/微信群/钉钉企业群等信息的同学，请使用微信扫描上面的微信公众号二维码关注 `WxJava` 后点击相关菜单即可获取加入方式，同时也可以在微信中搜索 `weixin-java-tools` 或 `WxJava` 后选择正确的公众号进行关注，该公众号会及时通知SDK相关更新信息，并不定期分享微信Java开发相关技术知识；
7. 钉钉技术交流群：`32206329`（技术交流2群）, `30294972`（技术交流1群，目前已满），`35724728`（通知群，实时通知Github项目变更记录）。
8. 微信开发新手或者Java开发新手在群内提问或新开Issue提问前，请先阅读[【提问的智慧】](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)，并确保已查阅过 [【开发文档】](./start/) ，避免浪费大家的宝贵时间；
9. 寻求帮助时需贴代码或大长串异常信息的，请利用 <http://paste.ubuntu.com>

--------------------------------
## 其他说明
1. **阅读源码的同学请注意，本SDK为简化代码编译时加入了`lombok`支持，如果不了解`lombok`的话，请先学习下相关知识，比如可以阅读[此文章](./other/lombok.md)；**
2. 如有新功能需求，发现BUG，或者由于微信官方接口调整导致的代码问题，可以直接在[【Issues】](https://github.com/Wechat-Group/WxJava/issues)页提出issue，便于讨论追踪问题；
3. 如果需要贡献代码，请务必在提交PR之前先仔细阅读[【代码贡献指南】](./other/CONTRIBUTING.md)，谢谢理解配合；
4. 目前本`SDK`最新版本要求的`JDK`最低版本是`8`，使用`7`的同学可以使用`WxJava` `3.8.0`及以前版本，而还在使用`JDK`6的用户请参考[【此项目】](./demo/jdk6.md) ，而其他更早的JDK版本则需要自己改造实现。
5. [本项目在开源中国的页面](https://www.oschina.net/p/weixin-java-tools-new)，欢迎大家积极留言评分 🙂
6. SDK开发文档请查阅 [【开发文档】](./start/)，部分文档可能未能及时更新，如有发现，可以及时上报或者自行修改。
7. **如果本开发工具包对您有所帮助，欢迎对我们的努力进行肯定，可以直接前往[【托管于码云的项目首页】](http://gitee.com/binary/weixin-java-tools)，在页尾部分找到“捐助”按钮进行打赏，多多益善 😄。非常感谢各位打赏和捐助的同学！**
8. 各个模块的Javadoc可以在线查看：[weixin-java-miniapp](http://binary.ac.cn/weixin-java-miniapp-javadoc/)、[weixin-java-pay](http://binary.ac.cn/weixin-java-pay-javadoc/)、[weixin-java-mp](http://binary.ac.cn/weixin-java-mp-javadoc/)、[weixin-java-common](http://binary.ac.cn/weixin-java-common-javadoc/)、[weixin-java-cp](http://binary.ac.cn/weixin-java-cp-javadoc/)、[weixin-java-open](http://binary.ac.cn/weixin-java-open-javadoc/)
9. 本SDK项目在以下代码托管网站同步更新:
   * 码云：<https://gitee.com/binary/weixin-java-tools>
   * GitHub：<https://github.com/wechat-group/WxJava>

---------------------------------
### 版本说明

1. 本项目定为大约每两个月发布一次正式版（同时 `develop` 分支代码合并进入 `master` 分支），版本号格式为 `X.X.0`（如`2.1.0`，`2.2.0`等），遇到重大问题需修复会及时提交新版本，欢迎大家随时提交Pull Request；
2. BUG修复和新特性一般会先发布成小版本作为临时测试版本（如`3.6.8.B`，即尾号不为0，并添加B，以区别于正式版），代码仅存在于 `develop` 分支中；
3. 目前最新版本号为 [![Maven Central](https://img.shields.io/maven-central/v/com.github.binarywang/wx-java.svg)](http://mvnrepository.com/artifact/com.github.binarywang/wx-java) ，也可以通过访问链接 [【微信支付】](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.binarywang%22%20AND%20a%3A%22weixin-java-pay%22) 、[【微信小程序】](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.binarywang%22%20AND%20a%3A%22weixin-java-miniapp%22) 、[【公众号】](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.binarywang%22%20AND%20a%3A%22weixin-java-mp%22) 、[【企业微信】](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.binarywang%22%20AND%20a%3A%22weixin-java-cp%22)、[【开放平台】](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22com.github.binarywang%22%20AND%20a%3A%22weixin-java-open%22)
   分别查看所有最新的版本。

----------------------------------
### 贡献者列表
特别感谢参与贡献的所有同学，所有贡献者列表请在[此处](https://github.com/Wechat-Group/WxJava/graphs/contributors)查看，欢迎大家继续踊跃贡献代码！
<details>
<summary>点击此处展开查看贡献次数最多的几位小伙伴</summary>

1. [chanjarster (Daniel Qian)](https://github.com/chanjarster)
2. [binarywang (Binary Wang)](https://github.com/binarywang)
3. [007gzs](https://github.com/007gzs)
4. [Silloy](https://github.com/silloy)
5. [mgcnrx11](https://github.com/mgcnrx11)
6. [0katekate0 (Wang_Wong)](https://github.com/0katekate0)
7. [yuanqixun](https://github.com/yuanqixun)
8. [kakotor](https://github.com/kakotor)
9. [aimilin6688 (Jonk)](https://github.com/aimilin6688)
10. [lkqm (Mario Luo)](https://github.com/lkqm)
11. [kareanyi (MillerLin)](https://github.com/kareanyi)

</details>

### GitHub Stargazers over time

[![Stargazers over time](https://starchart.cc/Wechat-Group/WxJava.svg)](https://starchart.cc/Wechat-Group/WxJava)     