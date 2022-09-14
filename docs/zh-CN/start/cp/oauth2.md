---
icon: oauth2
category:
- 教程
tag:
- 网页授权
- 企业号
---
# OAuth2网页授权
## 构造网页授权url

首先构造网页授权url，然后构成超链接让用户点击

```java
WxCpService wxCpService = ...;
wxCpService.getOauth2Service().buildAuthorizationUrl(null);
```

## 获得用户基本信息

当用户同意授权后，会回调所设置的url并把authorization code传过来，然后用这个code获得user id.

```java
String[] res =  wxCpService.getOauth2Service().getUserInfo(code);
String userId = res[0];
String deviceId = res[1];
```
