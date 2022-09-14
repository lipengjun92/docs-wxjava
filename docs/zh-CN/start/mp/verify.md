---
icon: verify
category:
- 教程
tag:
- 验证签名
- 公众号
---
# 验证消息合法性
在将你的服务器接入到微信平台的时候，以及每次微信推送消息给你的服务器的时候，你都应该按照微信的要求对推送过来的消息进行校验，确保这些消息是从微信平台发送过来的。

下面的代码假设你已经有了一个``WxMpService``实例，怎么构造看[Quick Start](./start.md)
```java
String timestamp = ...;
String nonce = ...;
String signature = ...;
if (!wxMpService.checkSignature(timestamp, nonce, signature)) {
  // 消息不合法
}
// 消息合法
```
