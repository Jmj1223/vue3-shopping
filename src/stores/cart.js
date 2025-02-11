import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { insertCart, getCart, delCart } from '@/apis/cart'
import { useUserStore } from '@/stores/user'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const cartInfo = ref([])
    const tokenExists = userStore.userInfo.token ? true : false
    // addcartInfo在Detail组件中调用
    const addcartInfo = async (goods) => {
        console.log('=============')
        const { skuId, count } = goods
        console.log('count=====', count)
        if (tokenExists) {
            // 调接口去添加商品
            await insertCart({ skuId, count })
            const res = await getCart()
            cartInfo.value = res.result
        } else {
            // 如果商品之前未被选择 添加push
            // 错误示例：((item) => { item => goods.skuId === item.skuId })
            const item = cartInfo.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count += count
                console.log('数量======', item.count)
            }
            // 如果商品之前已经被选择  数量加1 count+1
            else {
                cartInfo.value.push(goods)
            }
        }
    }
    // delcartinfo在HeaderCart组件中调用
    const delcartinfo = async (skuId) => {
        if (tokenExists) {
            await delCart([skuId])
            const res = await getCart()
            cartInfo.value = res.result
        } else {
            // splice 和 filter
            // cartInfo.value.filter((item) => item.skuId === skuId)
            const index = cartInfo.value.findIndex((item) => skuId === item.skuId)
            cartInfo.value.splice(index, 1)
        }
    }
    const allCount = computed(() => { return cartInfo.value.reduce((a, c) => a + c.count, 0) })
    const allPrice = computed(() => { return cartInfo.value.reduce((a, c) => a + c.count * c.price, 0) })
    // 单选
    const singleCheck = (i, isSelected) => {
        const item = cartInfo.value.find((item) => item.skuId === i.skuId)
        item.selected = isSelected
    }
    // 是否全选
    const isAll = computed(() => { return cartInfo.value.every((item) => item.selected) })
    // 全选功能
    const allCheck = (isselected) => {
        // map和forEach都可以 推荐使用forEach遍历
        cartInfo.value.forEach((item) => item.selected = isselected)
    }
    // 已选择商品数量总和
    const selectCount = computed(() => cartInfo.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 已选择商品价格总和
    const selectPrice = computed(() => cartInfo.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartInfo,
        delcartinfo,
        addcartInfo,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectCount,
        selectPrice
    }
})