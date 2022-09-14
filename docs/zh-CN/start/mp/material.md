---
icon: file
category:
- 教程
tag:
- 文件
- 对媒体
- 公众号
---
# 多媒体文件管理
## 上传多媒体文件

```java
InputStream inputStream = ...;
File file = ...;
WxMediaUploadResult res = wxMpService.getMaterialService().mediaUpload(mediaType, fileType, inputStream);
// 或者
res = wxMpService.getMaterialService().mediaUpload(mediaType, file);
res.getType();
res.getCreatedAt();
res.getMediaId();
res.getThumbMediaId();
```

## 下载多媒体文件

```java
// 获得一个在系统临时目录的文件
File file = wxMpService.getMaterialService().mediaDownload(media_id);
```
