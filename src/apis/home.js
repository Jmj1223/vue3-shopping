import http from '@/utils/http'

// 获取banner
export function getBannerApI(params = {}) {
    // 默认为1，商品为2
    const { distributionSite = '1' } = params
    return http({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export function getNewAPI() {
    return http({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotAPI() {
    return http({
        url: '/home/hot'
    })
}

export function getGoodsAPI() {
    return http({
        url: '/home/goods'
    })
}