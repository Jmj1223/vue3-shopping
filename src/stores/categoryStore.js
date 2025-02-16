import {defineStore} from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
    // state 列表数据
    const categoryList = ref([])
    // action 获取列表数据
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log('拿到数据: ', res)
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})