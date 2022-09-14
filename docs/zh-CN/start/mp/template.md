---
icon: template
category:
- 教程
tag:
- 模板消息
- 公众号
---
# 发送模板消息
```java
WxMpTemplateMessage templateMessage = WxMpTemplateMessage.builder()
.toUser(...)
.templateId(...)
.url(...)
.build();

templateMessage.addData(new WxMpTemplateData(name1, value1, color2));
templateMessage.addData(new WxMpTemplateData(name2, value2, color2));

wxMpService.getTemplateMsgService().sendTemplateMsg(templateMessage);
```
更详细的使用方法请参考单元测试代码：
`/weixin-java-mp/src/test/java/me/chanjar/weixin/mp/api/impl/WxMpTemplateMsgServiceImplTest.java`

或者参考在线的javadoc：  
<http://binary.ac.cn/weixin-java-mp-javadoc/me/chanjar/weixin/mp/api/impl/WxMpTemplateMsgServiceImpl.html>