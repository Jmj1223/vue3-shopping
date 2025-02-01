import http from '@/utils/http'

export function getBannerApI() {
    return http({
        url: '/home/banner'
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