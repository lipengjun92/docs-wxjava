---
icon: user
category:
- 教程
tag:
- 用户
- 企业号
---
# 用户管理
## 新建用户

```java
WxCpUser user = new WxCpUser();
user.setUserId("demo.user");
user.setName("demo.user");
user.setDepartIds(new Integer[] { 9, 8 });
user.setEmail("demo.user@ddd.com");
user.setGender("女");
user.setMobile("87350908979");
user.setPosition("demo.user");
user.setTel("3300393");
user.addExtAttr("爱好", "旅游");
wxCpService.getUserService().create(user);
```

## 更新用户

```java
WxCpUser user = new WxCpUser();
user.setUserId("demo.user");
user.setName("demo.user.new");
user.addExtAttr("爱好", "桌游");
wxCpService.userUpdate(user);
```

## 获得用户

```java
WxCpUser user = wxCpService.getUserService().getById("demo.user");
```

## 获取部门下用户

```java
List<WxCpUser> users = wxCpService.getUserService().listByDepartment(1, true, 0);
```

## 删除用户

```java
wxCpService.getUserService().delete("demo.user");
```
