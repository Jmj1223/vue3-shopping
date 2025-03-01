// 封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        // route.params.id是因为category.js里面配置了params
        // 点击路由route自带params字段
        const res = await getCategoryAPI(id)
        console.log('二级分类列表===', res)
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategory()
    })
    // 目标: 路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log('路由变化了!')
        // 存在问题: 使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}

