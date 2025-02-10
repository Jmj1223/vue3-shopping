import http from '@/utils/http'

export const getLoginAPI = ({ account, password }) => {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            'account': account,
            'password': password
        }
    })
}