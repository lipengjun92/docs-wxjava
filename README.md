# 关于本项目的说明

### [WxJava](https://github.com/Wechat-Group/WxJava)项目在线文档

### 在线体验：<http://wxjava.fly2you.cn/>

使用 Vue 3 + TypeScript + Vite + VuePress 2 + vuepress-theme-hope + Element Plus

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

# 使用
## 下载
```bash
git clone https://gitee.com/fuyang_lipengjun/docs-wxjava.git
```

## 安装
```bash
cd docs-wxjava
# 安装依赖
npm install

# 启动服务
npm run docs:dev
```

安装过程中，可能会出现安装过慢、报错等情况，请尝试以下方式：
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm i

## 启动服务
npm run docs:dev
```
启动完成后会自动打开浏览器访问 [http://localhost:8080]()。

## 生产打包部署
```bash
# 构建生产环境
npm run docs:build
```
## 部署Nginx配置参考
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
