import { defineStore } from "pinia"
import { getLoginAPI } from '@/apis/login'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const getuserInfo = async ({ account, password }) => {
        const res = await getLoginAPI({ account, password })
        userInfo.value = res.result
    }
    const clearuserInfo = () => {
        userInfo.value = {}
    }
    return {
        userInfo,
        getuserInfo,
        clearuserInfo
    }
},
    {
        persist: true,
    })