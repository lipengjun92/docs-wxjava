---
icon: pay
category:
- 教程
tag:
- 支付
- 说明
---
# 微信支付使用说明
****
本文中提到的接口和未提到的其他接口的使用方法，都还可以参考[微信支付Demo项目](../../demo/pay.md)
****

#### 这里重点说下微信JSSDK支付与回调，其他接口使用方式类似，可以自行研究。
1. 首先，在项目pom中使用maven引入依赖（自己可以替换更新版本）
```
<dependency>
  <groupId>com.github.binarywang</groupId>
  <artifactId>weixin-java-pay</artifactId>
  <version>xxxx</version>
</dependency>
```
2. 配置config类，并构建微信支付服务类，方式如下：
```java 
   WxPayConfig payConfig = new WxPayConfig();
   ....
   WxPayService wxPayService = new WxPayServiceImpl();
   wxPayService.setConfig(payConfig);
```
3. 在WxPayService接口中定义了微信支付相关的接口，具体的接口参见代码详细；

4. 微信统一下单接口使用方式如下(Spring MVC 示例)：
* 代码中Result为自定义返回对象，WxPayUnifiedOrderRequest 中还有一些参数会根据配置文件的配置自动填充，不需要单独设置，例如：appId、partnerId、notifyURL、tradeType等参数。
* 订单创建成功之后会自动调用校验方法，校验微信返回的结果。例如校验签名，校验返回的业务代码是否正常。所以代码中不需要手动校验订单创建结果，只需要处理下异常情况即可！
```java
@ResponseBody
@RequestMapping(value = "wxpay")
public Result（###注意：需要根据自己业务需要实现Result类###） pay(HttpServletRequest request, String orderNo, String subject) {
  try {
    WxPayUnifiedOrderRequest orderRequest = new WxPayUnifiedOrderRequest();
    orderRequest.setBody("主题");
    orderRequest.setOutTradeNo("订单号");
    orderRequest.setTotalFee(BaseWxPayRequest.yuanToFen(order.getTotalFee()));//元转成分
    orderRequest.setOpenid("openId");
    orderRequest.setSpbillCreateIp("userIp");
    orderRequest.setTimeStart("yyyyMMddHHmmss");
    orderRequest.setTimeExpire("yyyyMMddHHmmss");

    return Result.ok(wxPayService.createOrder(orderRequest));
  } catch (Exception e) {
    log.error("微信支付失败！订单号：{},原因:{}", orderNo, e.getMessage());
    e.printStackTrace();
    return Result.fail("支付失败，请稍后重试！");
  }
}
```

5. 订单支付完成之后异步回调代码如下：
* 异步回调接口代码内部会自动校验签名，您需要做的就是拿到结果之后直接根据业务逻辑进行处理就行了；
* 需要处理下异常信息；
* 回调返回接口可以直接使用WxPayNotifyResponse 返回处理成功，还是失败！
```java
@ResponseBody
@RequestMapping("/wx")
public String payNotify(HttpServletRequest request, HttpServletResponse response) {
  try {
    String xmlResult = IOUtils.toString(request.getInputStream(), request.getCharacterEncoding());
    WxPayOrderNotifyResult result = wxPayService.parseOrderNotifyResult(xmlResult);
    
    // 加入自己处理订单的业务逻辑，需要判断订单是否已经支付过，否则可能会重复调用
    String orderId = result.getOutTradeNo();
    String tradeNo = result.getTransactionId();
    String totalFee = BaseWxPayResult.fenToYuan(result.getTotalFee());
    return WxPayNotifyResponse.success("处理成功!");
  } catch (Exception e) {
    log.error("微信回调结果异常,异常原因{}", e.getMessage());
    return WxPayNotifyResponse.fail(e.getMessage());
  }
}
```