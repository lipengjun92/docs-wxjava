import {sidebar} from "vuepress-theme-hope";

export const sidebarZh = sidebar({
    "/zh-CN/change/": [
        "", "440"
    ],
    "/zh-CN/demo/": [
        "cp", "miniapp", "mp", "open", "pay", "jdk6", "springmvc"
    ],
    "/zh-CN/start/": [
        {
            text: "企业号/企业微信",
            prefix: "cp/",
            icon: "cp",
            collapsable: true,
            children: [
                "", "start", "router", "reply", "wxCpConfigStorage", "accessToken", "verify", "send", "media", "user", "depart", "tag", "menu", "oauth2", "proxy", "unsurport", "test", "demo", "multiple"
            ],
        },
        {
            text: "微信小程序",
            prefix: "miniapp/",
            icon: "miniapp",
            collapsable: true,
            children: [
                "",
            ],
        },
        {
            text: "公众号",
            prefix: "mp/",
            icon: "mp",
            collapsable: true,
            children: [
                "", "start", "verify", "router", "reply", "wxMpConfigStorage", "send", "material", "materialNews", "oauth2", "jsapi", "encrypt", "user", "tag", "sendGroup", "menu", "qrCode", "shortUrl", "template", "semantic", "proxy", "unsurport", "test", "demo", "data"
            ],
        },
        {
            text: "微信开放平台",
            prefix: "open/",
            icon: "open",
            collapsable: true,
            children: [
                "",
            ],
        },
        {
            text: "微信支付",
            prefix: "pay/",
            icon: "pay",
            collapsable: true,
            children: [
                "", "explain"
            ],
        },
        {
            text: "腾讯企点",
            prefix: "qidian/",
            icon: "qidian",
            collapsable: true,
            children: [
                "",
            ],
        },
        {
            text: "常见异常问题的解决办法",
            icon: "explain",
            link: "question"
        },
        {
            text: "其他常见问题",
            icon: "explain",
            link: "otherQuestion"
        },
    ],
})