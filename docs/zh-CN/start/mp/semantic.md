---
icon: semantic
category:
- 教程
tag:
- 语义
- 公众号
---
# 语义查询
```java
WxMpSemanticQuery semanticQuery = new WxMpSemanticQuery();
semanticQuery.setQuery(...);
semanticQuery.setCategory(...);
semanticQuery.setLatitude(...);
semanticQuery.setLongitude(...);
semanticQuery.setCity(...);
semanticQuery.setAppid(...);
semanticQuery.setUid(...);

WxMpSemanticQueryResult result = semanticQuery(semanticQuery);
```