import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue'

// 'category' 是 defineStore 函数的第一个参数，它代表的是这个 Store 的唯一标识符，也被称作 Store 的名称。
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