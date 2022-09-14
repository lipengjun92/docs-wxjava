---
icon: tag
category:
- 教程
tag:
- 标签
- 公众号
---
# 标签管理
更多使用用例可参考单元测试类：  
<https://github.com/Wechat-Group/WxJava/blob/develop/weixin-java-mp/src/test/java/me/chanjar/weixin/mp/api/impl/WxMpUserTagServiceImplTest.java>

## 创建标签
```java
WxUserTag res = this.wxService.getUserTagService().tagCreate(tagName);
```

## 获得标签列表
```java
List<WxUserTag> res = this.wxService.getUserTagService().tagGet();
```

## 更新标签名
```java
Boolean res = this.wxService.getUserTagService().tagUpdate(tagId, tagName);
```

## 删除指定标签
```java
Boolean res = this.wxService.getUserTagService().tagDelete(tagId);
```
