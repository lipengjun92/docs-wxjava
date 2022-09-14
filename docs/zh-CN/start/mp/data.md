---
icon: data
category:
- 教程
tag:
- 数据统计
- 公众号
---
# 数据统计
[对应官方文档地址](https://developers.weixin.qq.com/doc/offiaccount/Analytics/User_Analysis_Data_Interface.html)
## # 接口名 WxMpDataCubeService
调用方法

`this.wxService.getDataCubeService()`

不同接口有不同的时间跨度限制，需要对照官方文档切割所要查询的时间，分批查询，有长时间跨度查询需求，建议本地储存数据。

## 用户分析
获取用户增减数据（getusersummary）

`List<WxDataCubeUserSummary> getUserSummary(Date var1, Date var2) throws WxErrorException;`

获取累计用户数据（getusercumulate）

`List<WxDataCubeUserCumulate> getUserCumulate(Date var1, Date var2) throws WxErrorException;`


## 图文分析
获取图文群发每日数据（getarticlesummary）

`List<WxDataCubeArticleResult> getArticleSummary(Date var1, Date var2) throws WxErrorException;`

获取图文群发总数据（getarticletotal）

`List<WxDataCubeArticleTotal> getArticleTotal(Date var1, Date var2) throws WxErrorException;`

获取图文统计数据（getuserread）

`List<WxDataCubeArticleResult> getUserRead(Date var1, Date var2) throws WxErrorException;`

获取图文统计分时数据（getuserreadhour）

`List<WxDataCubeArticleResult> getUserReadHour(Date var1, Date var2) throws WxErrorException;`

获取图文分享转发数据（getusershare）

`List<WxDataCubeArticleResult> getUserShare(Date var1, Date var2) throws WxErrorException;`

获取图文分享转发分时数据（getusersharehour）

`List<WxDataCubeArticleResult> getUserShareHour(Date var1, Date var2) throws WxErrorException;`

## 消息分析
获取消息发送概况数据（getupstreammsg）

`List<WxDataCubeMsgResult> getUpstreamMsg(Date var1, Date var2) throws WxErrorException;`

获取消息分送分时数据（getupstreammsghour）

`List<WxDataCubeMsgResult> getUpstreamMsgHour(Date var1, Date var2) throws WxErrorException;`

获取消息发送周数据（getupstreammsgweek）

`List<WxDataCubeMsgResult> getUpstreamMsgWeek(Date var1, Date var2) throws WxErrorException;`

获取消息发送月数据（getupstreammsgmonth）

`List<WxDataCubeMsgResult> getUpstreamMsgMonth(Date var1, Date var2) throws WxErrorException;`

获取消息发送分布数据（getupstreammsgdist）

`List<WxDataCubeMsgResult> getUpstreamMsgDist(Date var1, Date var2) throws WxErrorException;`

获取消息发送分布周数据（getupstreammsgdistweek）

`List<WxDataCubeMsgResult> getUpstreamMsgDistWeek(Date var1, Date var2) throws WxErrorException;`

获取消息发送分布月数据（getupstreammsgdistmonth）

`List<WxDataCubeMsgResult> getUpstreamMsgDistMonth(Date var1, Date var2) throws WxErrorException;`

## 接口分析
获取接口分析数据（getinterfacesummary）

`List<WxDataCubeInterfaceResult> getInterfaceSummary(Date var1, Date var2) throws WxErrorException;`

获取接口分析分时数据（getinterfacesummaryhour）

`List<WxDataCubeInterfaceResult> getInterfaceSummaryHour(Date var1, Date var2) throws WxErrorException;`