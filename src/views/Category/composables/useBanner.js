// 封装banner轮播图相关的业务代码
import { getBannerApI } from '@/apis/home'
import { onMounted, ref } from 'vue'

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerApI({
            distributionSite: '2'
        })
        console.log('轮播图数据======', res)
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}
