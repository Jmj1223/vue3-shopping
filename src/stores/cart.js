import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCartStore = defineStore('cart', () => {
    const cartInfo = ref([])
    const addcartInfo = (goods) => {
        // 如果商品之前未被选择 添加push
        const isSelected = cartInfo.value.find((item) => { item => goods.skuId === item.skuId })
        if (isSelected) {
            item.count++
        }
        // 如果商品之前已经被选择  数量加1 count+1
        else {
            cartInfo.value.push(goods)
        }
    }
    return {
        cartInfo,
        addcartInfo
    }
})