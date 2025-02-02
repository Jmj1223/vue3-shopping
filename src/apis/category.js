import http from '@/utils/http'

export function getCategoryAPI(id) {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}