---
icon: code
category:
- 教程
tag:
- WxMpConfigStorage
- 公众号
---
# WxMpConfigStorage
``WxMpConfigStorage`` 是维护微信公众号相关信息的地方，里面有以下信息：

1. appid
1. appsecret
1. token
1. aes encoding key
1. access token

在[Quick Start](./start.md)的例子里我们使用的是 `WxMpDefaultConfigImpl`。在正式生产环境中，你可以提供自己的实现，比如在集群环境下将这些信息存储到数据库或分布式缓存中，以便各个节点能够共享access token。