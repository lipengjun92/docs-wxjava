---
icon: menu
category:
- 教程
tag:
- 菜单
- 公众号
---
# 自定义菜单管理
## 创建自定义菜单
包括新增和修改，修改相当于覆盖之前的菜单。
```java
WxMenu wxMenu = new WxMenu();
// 设置菜单
wxMpService.getMenuService().menuCreate(wxMenu);
```

## 删除自定义菜单
```java
wxMpService.getMenuService().menuDelete();
```

##  获得自定义菜单
```java
WxMenu wxMenu = wxMpService.getMenuService().menuGet();
```

更多更详细的例子，请参考单元测试类：  
<https://github.com/Wechat-Group/WxJava/blob/develop/weixin-java-mp/src/test/java/me/chanjar/weixin/mp/api/impl/WxMpMenuServiceImplTest.java>