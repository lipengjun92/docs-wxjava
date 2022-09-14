import * as ElIcons from '@element-plus/icons-vue'
import {defineClientConfig} from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/index.scss'

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.mixin({
            mounted() {
                import('wisdom-ui').then(function (m) {
                    app.use(m.default)
                })
            }
        })
        try {
            if (document.location.pathname.indexOf("zh-CN") < 0 && document.location.pathname.indexOf("en-US") < 0) {
                document.location.pathname = "zh-CN" + document.location.pathname
            }
        } catch (e) {
            console.error(e.message)
        }
        app.use(ElementPlus)
        Object.keys(ElIcons).forEach(key => {
            app.component(key, ElIcons[key])
        })
    },
    setup() {
    },
    rootComponents: [],
})
