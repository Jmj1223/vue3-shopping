import http from '@/utils/http'

// 加入购物车
export const insertCart = ({ skuId, count }) => {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表 登录后, 合并清空本地后, 再从服务器获取此用户最新购物车列表
export const getCart = () => {
    return http({
        url: '/member/cart'
    })
}

// 删除购物车商品 支持某个/批量
export const delCart = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCart = (data) => {
    return http({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}
