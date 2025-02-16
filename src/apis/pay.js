import http from '@/utils/http'

export const submitPayAPI = (data) => {
    return http({
        url: '/member/order',
        method: 'POST',
        data
    })
}