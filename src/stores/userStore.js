import { defineStore } from "pinia"
import { getLoginAPI } from '@/apis/login'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { mergeCart } from "@/apis/cart"


export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getuserInfo = async ({ account, password }) => {
        const res = await getLoginAPI({ account, password })
        userInfo.value = res.result
        // 合并购物车的操作 根据现有的数组映射得到全新的数组
        mergeCart(cartStore.cartInfo.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateCartList()
    }
    const clearuserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    return {
        userInfo,
        getuserInfo,
        clearuserInfo
    }
},
    {
        persist: true,
    })