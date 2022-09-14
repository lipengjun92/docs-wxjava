import {hopeTheme} from "vuepress-theme-hope";
import {navbarZh, navbarEn} from "./config/navbar";
import {sidebarEn, sidebarZh} from "./config/sidebar";

export const hopeThemeConfig = hopeTheme({
    logo: "/img/logo.png",
    headerDepth: 2,
    copyright: false,
    displayFooter: true,
    editLink: false,
    lastUpdated: true,
    contributors: true,
    fullscreen: true,
    iconAssets: "//at.alicdn.com/t/c/font_3646533_yo3h9wqplui.css",
    themeColor: {
        blue: "#3E8EF7",
        grey: "#757575",
        orange: "#EB6709",
        red: "#FF4C52",
    },
    repo: 'https://github.com/Wechat-Group/WxJava',
    locales: {
        "/zh-CN/": {
            author: {
                name: "李鹏军",
                url: "https://gitee.com/fuyang_lipengjun",
            },
            footer: 'Apache-2.0 Licensed | Copyright © binarywang',
            navbar: navbarZh,
            sidebar: sidebarZh
        },
        "/en-US/": {
            author: {
                name: "lipengjun",
                url: "https://gitee.com/fuyang_lipengjun",
            },
            footer: 'Apache-2.0 Licensed | Copyright © binarywang',
            navbar: navbarEn,
            sidebar: sidebarEn
        }
    }
})