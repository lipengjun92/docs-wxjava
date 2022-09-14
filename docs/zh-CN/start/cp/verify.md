---
icon: verify
category:
- 教程
tag:
- 二次验证
- 身份
- 企业号
---
# 用户身份二次验证
微信企业号支持对用户身份做第二次验证，验证的方式就是将用户跳转到企业的页面，验证成功后企业应用需告诉企业号验证成功。

```java
wxCpService.userAuthenticated(userId);
```
