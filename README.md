# 关于本站的说明

# Vue 3 + TypeScript + Vite + VuePress 2 + Element Plus

该模板将帮助您在Vite中使用Vue 3和TypeScript进行开发。该模板使用Vue 3`<script setup>`SFCs，请查看 [设置文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)以了解更多信息。

# 技术栈

- [nodejs](http://nodejs.org/) (>=14)
- [vue3](https://cn.vuejs.org/)
- [vitejs](https://vitejs.cn)
- [element-plus](https://element-plus.gitee.io/)
- [vuepress](https://www.vuepress.cn/)
- [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/)
- [vue-baidu-analytics](https://github.com/analyticsjs/vue-baidu-analytics)
- [gitalk](https://gitalk.github.io/)
- [Algolia DocSearch](https://docsearch.algolia.com/)

# 目录结构
本项目通过vite-cli脚手架生成（有根据业务需求做调整修改），下面是整个项目的目录结构。
```bash
├── docs                       // 文档目录
│   ├── .vuepress              // vuepress配置
│   │    ├── components        // 自定义组件
│   │    ├── config            // 变量配置文件
│   │    ├── public            // 静态资源
│   │    ├── styles            // 样式
│   │    ├── client.ts         // vuepress客户端配置
│   │    └── config.ts         // vuepress入口配置
│   │    └── theme.ts          // vuepress主题配置
├── .gitignore                 // git 忽略项
├── deployDoc.sh               // 自动发布脚本
└── package.json               // package.json
```

# 环境
在电脑安装[nodejs](https://nodejs.org/zh-cn/)

# 安装
```bash
# 安装依赖
npm install

# 启动服务
npm run docs:dev
```

安装过程中，可能会出现安装过慢、报错等情况，请尝试以下方式：
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm i

# 启动服务
npm run docs:dev
```
启动完成后会自动打开浏览器访问 [http://localhost:8080]()。

# 生产打包部署
```bash
# 构建生产环境
npm run docs:build
```
# 部署Nginx配置参考
```
server {
    listen 80;
    server_name domain.com;
    
    location / {
        root '/home/doc';
        index index.html;
    }
}
```
