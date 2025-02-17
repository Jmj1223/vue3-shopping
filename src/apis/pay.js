import http from '@/utils/http'

export const submitPayAPI = (data) => {
    return http({
        url: '/member/order',
        method: 'POST',
        data
    })
}

export const getPayAPI = (id) => {
    return http({
        url: `/member/order/${id}`,
    })
}