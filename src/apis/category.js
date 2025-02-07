import http from '@/utils/http'

export function getCategoryAPI(id) {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}
