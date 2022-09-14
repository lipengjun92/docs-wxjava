import {defineUserConfig, viteBundler} from "vuepress"
// homeTheme 主题
import {hopeThemeConfig} from "./theme";
// 注册自定义组件
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
// 搜索插件
import {searchPlugin} from '@vuepress/plugin-search'
// 图片预览插件
import {photoSwipePlugin} from "vuepress-plugin-photo-swipe";
// md增强插件
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
// 渐进式网页应用 (Progressive Web App) 支持
import {pwaPlugin} from "vuepress-plugin-pwa2";
import {path} from "@vuepress/utils"
import {blog} from "vuepress-theme-hope";

export default defineUserConfig({
    base: "/",
    head: [
        ["meta", {charset: "utf-8"}],
        ["meta", {name: "viewport", content: "width=device-width, initial-scale=1"}],
        ["meta", {name: "keywords", content: "WxJava,微信开发 Java SDK，支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发"}],
        ["meta", {
            name: "description",
            content: "微信开发 Java SDK，支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发"
        }],
        ["meta", {name: "author", content: "binarywang"}],
        ["meta", {name: "robots", content: "index"}],
        ["link", {rel: "icon", href: "/favicon.ico"}]
    ],
    locales: {
        "/zh-CN/": {
            lang: "zh-CN",
            title: "WxJava 在线文档",
            description: "微信开发 Java SDK，支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发",
        },
    },
    theme: hopeThemeConfig,
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                noExternal: ["element-plus"]
            }
        },
        vuePluginOptions: {},
    }),
    markdown: {
        headers: {
            level: [2, 3]
        }
    },
    shouldPrefetch: false,
    plugins: [
        photoSwipePlugin({
            selector: ".page :not(a) > img"
        }),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        }) as Plugin,
        pwaPlugin({
            favicon: "/favicon.ico",
            showInstall: true,
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            locales: {
                "/zh-CN/": {
                    hint: "发现新内容可用",
                    update: "刷新",
                },
                "/en-US/": {
                    hint: "New content is available.",
                    update: "Refresh",
                },
            },
            manifest: {
                name: "WxJava Docs",
                description: "微信开发 Java SDK，支持微信支付、开放平台、公众号、企业号/企业微信、小程序等的后端开发",
                start_url: "/zh-CN/",
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Guide",
                        short_name: "Guide",
                        url: "/guide/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        }),
        mdEnhancePlugin({
            // 启用自定义容器
            container: true,
            // 添加选项卡支持
            tabs: true,
            // 启用代码块分组
            codetabs: true,
            // 启用下角标功能
            sub: true,
            // 启用上角标
            sup: true,
            // 启用自定义对齐
            align: true,
            // 启用属性支持
            attrs: true,
            // 启用脚注
            footnote: true,
            // 开启标记
            mark: true,
            // 启用任务列表
            tasklist: true,
            // 启用导入支持
            include: true,
            // 启用 ECharts 图表
            echarts: true,
            // 启用流程图
            flowchart: true,
            // 启用 mermaid
            mermaid: true,
            demo: true,
            // 启用 TeX 支持
            tex: true,
        }),
        searchPlugin({
            locales: {
                "/zh-CN/": {
                    placeholder: "搜索文档"
                },
                "/en-US/": {
                    placeholder: 'Search'
                }
            }
        })
    ]
})
