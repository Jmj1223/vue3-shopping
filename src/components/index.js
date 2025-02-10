// 把components中的所有组件都进行全局化注册
// 通过插件的方式
import ImageView from './ImageView/index.vue'
import Xtxsku from './Xtxsku/index.vue'

export const componentPlugin = {
    install(app) {
        // app.component('组件名字', 组件配置对象)
        app.component('ImageView', ImageView)
        app.component('Xtxsku', Xtxsku)
    }
}