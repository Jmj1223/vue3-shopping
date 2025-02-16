import http from '@/utils/http'


export const getCheckoutAPI = () => {
    return http({
        url: '/member/order/pre',
    })
}