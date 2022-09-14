---
icon: sms
category:
- 教程
tag:
- 回复消息
- 企业号
---
# 同步回复消息
和公众号不同，企业号传递过来的消息总是加密的，并且同步返回的消息也是需要加密的（异步调用消息发送接口不需要加密）。

下面的代码假设你已经有了一个``WxCpService``实例，怎么构造看[Quick Start](./start.md)

```java
String msgSignature = request.getParameter("msg_signature");
String nonce = request.getParameter("nonce");
String timestamp = request.getParameter("timestamp");
String echostr = request.getParameter("echostr");

response.setContentType("text/html;charset=utf-8");
response.setStatus(HttpServletResponse.SC_OK);
if (StringUtils.isNotBlank(echostr)) {
  if (!wxCpService.checkSignature(msgSignature, timestamp, nonce, echostr)) {
    // 消息签名不正确，说明不是公众平台发过来的消息
    response.getWriter().println("非法请求");
    return;
  }
  WxCpCryptUtil cryptUtil = new WxCpCryptUtil(wxCpConfigStorage);
  String plainText = cryptUtil.decrypt(echostr);
  // 企业号应用在开启回调模式的时候，会传递加密echostr给服务器，需要解密并echo才能接入成功
  response.getWriter().println(plainText);
  return;
}

// 如果没有echostr，则说明传递过来的用户消息，在解密方法里会自动验证消息是否合法
WxCpXmlMessage inMessage = WxCpXmlMessage.fromEncryptedXml(request.getInputStream(), wxCpConfigStorage, timestamp, nonce, msgSignature);

WxCpXmlOutMessage outMessage = wxCpMessageRouter.route(inMessage);

if (outMessage != null) {
  // 将需要同步回复的消息加密，然后再返回给微信平台
  response.getWriter().write(outMessage.toEncryptedXml(wxCpConfigStorage));
}
```
