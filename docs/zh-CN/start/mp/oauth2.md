---
icon: oauth2
category:
- 教程
tag:
- 网页授权
- 公众号
---
# OAuth2网页授权
## 微信网页授权 - 流程时序图（via. nthack）
(如有错误请指教)

![](/img/wx.jpg)

## 构造网页授权url

首先构造网页授权url，然后构成超链接让用户点击：

```java
WxMpService wxMpService = ...;
String url = ...;
wxMpService.getOAuth2Service().buildAuthorizationUrl(url, WxConsts.OAuth2Scope.SNSAPI_USERINFO, null)
```

## 获得access token

当用户同意授权后，会回调所设置的url并把authorization code传过来，然后用这个code获得access token，其中也包含用户的openid等信息

```java
WxOAuth2AccessToken wxOAuth2AccessToken = wxMpService.getOAuth2Service().getAccessToken(code);
```

## 获得用户基本信息

```java
WxMpUser wxMpUser = wxMpService.getOAuth2Service().getUserInfo(wxMpOAuth2AccessToken, null);
```

## 刷新access token

```java
WxOAuth2AccessToken = wxMpService.getOAuth2Service().refreshAccessToken(wxOAuth2AccessToken.getRefreshToken());
```

## 验证access token

```java
boolean valid = wxMpService.getOAuth2Service().validateAccessToken(wxOAuth2AccessToken);
```
