---
author: 
  name: 李鹏军
  url: https://gitee.com/fuyang_lipengjun
date: 2022-09-07
category:
  - 教程
tag:
  - 文档
icon: doc
---

# 各模块开发文档
1. [微信公众号(mp)](./mp/)
1. [企业微信(cp)](./cp/)
1. [微信支付(pay) ](./pay/)
1. [微信开放平台(open)](./open/)
1. [微信小程序(miniapp)](./miniapp/)
1. [腾讯企点(qidian)](./qidian/)

# 重要信息
之前使用老版本，升级新版本的同学请注意，为规范代码， 部分代码做了重构，命名发生变化，具体如下：
1. `WxMpInMemoryConfigStorage` => `WxMpDefaultConfigImpl`；
2. `WxCpInMemoryConfigStorage` => `WxCpDefaultConfigImpl`；
3. `WxCpJedisConfigStorage` => `WxCpRedisConfigImpl`；
4. `WxCpTpInMemoryConfigStorage` => `WxCpTpDefaultConfigImpl`；
5. `WxMaInMemoryConfig` => `WxMaDefaultConfigImpl`；
6. `WxMaInRedisConfig` => `WxMaRedisConfigImpl`；
7. `WxMpInRedisConfigStorage` => `WxMpRedisConfigImpl`
