---
icon: send
category:
- 教程
tag:
- 群发消息
- 发送消息
- 公众号
---
# 群发消息
下面用用户列表群发（``WxMpMassOpenIdsMessage``）做例子，如果要使用标签群发，则使用``me.chanjar.weixin.mp.bean.WxMpMassTagMessage``即可。
更多用例，请参考单元测试类：  
<https://github.com/Wechat-Group/WxJava/blob/develop/weixin-java-mp/src/test/java/me/chanjar/weixin/mp/api/impl/WxMpMassMessageServiceImplTest.java>

## 文本消息
```java
WxMpMassOpenIdsMessage massMessage = new WxMpMassOpenIdsMessage();
massMessage.setMsgType(WxConsts.MASS_MSG_TEXT);
massMessage.setContent("消息内容");
massMessage.getToUsers().add(openid);

WxMpMassSendResult massResult = wxMpService.getMassMessageService().massOpenIdsMessageSend(massMessage);
```

## 视频消息
```java
WxMediaUploadResult uploadMediaRes = wxMpService.getMaterialService().mediaUpload(WxConsts.MEDIA_VIDEO, "mp4", inputStream);

// 把视频变成可被群发的媒体
WxMpMassVideo video = new WxMpMassVideo();
video.setTitle("测试标题");
video.setDescription("测试描述");
video.setMediaId(uploadMediaRes.getMediaId());
WxMpMassUploadResult uploadResult = wxMpService.getMassMessageService().massVideoUpload(video);

WxMpMassOpenIdsMessage massMessage = new WxMpMassOpenIdsMessage();
massMessage.setMsgType(WxConsts.MASS_MSG_VIDEO);
massMessage.setMediaId(uploadResult.getMediaId());
massMessage.getToUsers().add(openid);

WxMpMassSendResult massResult = wxMpService.getMassMessageService().massOpenIdsMessageSend(massMessage);
```

## 图片消息
```java
WxMediaUploadResult uploadMediaRes = wxMpService.getMaterialService().mediaUpload(WxConsts.MEDIA_IMAGE, "jpg", inputStream);

WxMpMassOpenIdsMessage massMessage = new WxMpMassOpenIdsMessage();
massMessage.setMsgType(WxConsts.MASS_MSG_IMAGE);
massMessage.setMediaId(uploadMediaRes.getMediaId());
massMessage.getToUsers().add(openid);

WxMpMassSendResult massResult = wxMpService.getMassMessageService().massOpenIdsMessageSend(massMessage);
```

## 语音消息
```java
WxMediaUploadResult uploadMediaRes = wxMpService.getMaterialService().mediaUpload(WxConsts.MEDIA_VOICE, "mp3", inputStream);

WxMpMassOpenIdsMessage massMessage = new WxMpMassOpenIdsMessage();
massMessage.setMsgType(WxConsts.MASS_MSG_VOICE);
massMessage.setMediaId(uploadMediaRes.getMediaId());
massMessage.getToUsers().add(openid);

WxMpMassSendResult massResult = wxMpService.getMassMessageService().massOpenIdsMessageSend(massMessage);
```

## 图文消息
```java
// 上传图文消息的封面图片
WxMediaUploadResult uploadMediaRes = wxMpService.getMaterialService().mediaUpload(WxConsts.MEDIA_IMAGE, "jpg", inputStream);

// 上传图文消息的正文图片(返回的url拼在正文的<img>标签中)
WxMediaImgUploadResult imagedMediaRes = wxMpService.getMaterialService().mediaImgUpload(file);
String url=imagedMediaRes.getUrl();

WxMpMassNews news = new WxMpMassNews();
WxMpMassNews.WxMpMassNewsArticle article1 = new WxMpMassNews.WxMpMassNewsArticle();
article1.setTitle("标题1");
article1.setContent("内容1");
article1.setThumbMediaId(uploadMediaRes.getMediaId());
news.addArticle(article1);

WxMpMassNews.WxMpMassNewsArticle article2 = new WxMpMassNews.WxMpMassNewsArticle();
article2.setTitle("标题2");
article2.setContent("内容2");
article2.setThumbMediaId(uploadMediaRes.getMediaId());
article2.setShowCoverPic(true);
article2.setAuthor("作者2");
article2.setContentSourceUrl("www.baidu.com");
article2.setDigest("摘要2");
news.addArticle(article2);

WxMpMassUploadResult massUploadResult = wxMpService.getMassMessageService().massNewsUpload(news);

WxMpMassOpenIdsMessage massMessage = new WxMpMassOpenIdsMessage();
massMessage.setMsgType(WxConsts.MASS_MSG_NEWS);
massMessage.setMediaId(uploadResult.getMediaId());
massMessage.getToUsers().add(openid);

WxMpMassSendResult massResult = wxMpService.getMassMessageService().massOpenIdsMessageSend(massMessage);
```