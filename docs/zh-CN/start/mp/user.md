---
icon: user
category:
- 教程
tag:
- 用户
- 公众号
---
# 用户管理
更多使用用例可参考单元测试类：  
<https://github.com/Wechat-Group/WxJava/blob/develop/weixin-java-mp/src/test/java/me/chanjar/weixin/mp/api/impl/WxMpUserServiceImplTest.java>

## 更新用户备注名
```java
wxMpService.getUserService().userUpdateRemark(openid, "测试备注名");
```

## 获得用户信息
```java
String lang = "zh_CN"; //语言
WxMpUser user = wxMpService.getUserService().userInfo(openid,lang);
```

## 获得用户列表
```java
WxMpUserList wxUserList = wxMpService.getUserService().userList(next_openid);
```

## 查询用户标签列表
```java
List<Long> tags = wxMpService.getUserTagService().userTagList(openid);
```

## 批量给用户添加标签
```java
String[]openids,long tagid;
wxMpService.getUserTagService().batchTagging(tagid,openids);
```

## 批量给用户移除标签
```java
wxMpService.getUserTagService().batchUntagging(tagid,openids);
```
