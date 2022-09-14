---
icon: refresh
category:
  - 教程
tag:
  - access_token
  - 刷新
  - 企业号
---
# 刷新access_token
在大多数情况下，你是不需要显式地去刷新access token的，因为``WxCpService``会在access token过期的时候自己刷新。

比如我们获取用户信息时微信反馈access token过期，``WxCpService``会自己刷新access token，然后再次去获取用户信息。并且会将access token更新到``WxCpConfigStorage``里。

如果你的确需要自己手工刷新access token，则可以：

```java
wxCpService.getAccessToken(true);
```

获得的新的access token会更新到``WxCpConfigStorage``中。
