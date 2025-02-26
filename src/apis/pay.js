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

export const getLikeListAPI = ({ limit = 4 }) => {
    return http({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}