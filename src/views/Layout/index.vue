<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 二级路由出口 -->
    <RouterView />
    <!-- 添加key 破坏复用机制 强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <LayoutFooter />
</template>