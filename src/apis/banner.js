import http from '@/utils/http'

export function getBannerApI() {
    return http({
        url: '/home/banner'
    })
}