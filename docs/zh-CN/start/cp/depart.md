---
icon: depart
category:
- 教程
tag:
- 部门
- 企业号
---
# 部门管理
## 新建部门

```java
WxCpDepart depart = new WxCpDepart();
depart.setName("子部门" + System.currentTimeMillis());
depart.setParentId(1L);
depart.setOrder(1L);
Integer departId = wxCpService.getDepartmentService().create(depart);
```

## 获取部门

```java
Long id = null;
List<WxCpDepart> departList = wxCpService.getDepartmentService().list(id);
```

以上代码段中的**参数id可以为null**，当它为null时将获取所有部门，当它有值时将获取该id对应的部门及其子部门

## 更新部门

```java
WxCpDepart depart = new WxCpDepart();
// 部门Id必须有值,不能为空
Long departId = getDepartId();
depart.setId(departId);

// 为要修改的字段赋值
depart.setName("子部门改名" + System.currentTimeMillis());

this.wxCpService.getDepartmentService().update(depart);
```

## 删除部门

```java
wxCpService.departDelete(depart.getId());
// 部门Id必须有值,不能为空
Long departId = getDepartId();
this.wxCpService.getDepartmentService().delete(departId);
```
