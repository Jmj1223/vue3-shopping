<script setup>
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/categoryStore'

const { y } = useScroll(window)
// 使用pinia的数据
const categoryStore = useCategoryStore()

</script>

<template>
    <!-- 根据y值判断是否显示，vue动态类控制 -->
    <div class="app-header-sticky" :class="{ show: y > 78 }">
        <div class="container">
            <RouterLink class="logo" to="/" />
            <!-- 导航区域 -->
            <ul class="app-header-nav ">
                <li class="home">
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
                    <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
                </li>
            </ul>

            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>
    </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
    width: 100%;
    height: 80px;
    /* 让元素固定再页面顶部，不随滚动条滚动 */
    position: fixed;
    left: 0;
    top: 0;
    /* 确保该元素位于其他元素之上，防止被覆盖 */
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    /* 此处为关键样式!!!
     状态一：往上平移自身高度 + 完全透明 */
    transform: translateY(-100%);
    opacity: 0;

    /* 状态二：移除平移 + 完全不透明 */
    &.show {
        /* 过渡动画，持续0.3秒，线性变化 */
        transition: all 0.3s linear;
        /* 取消向上平移，使其回到原来的位置 */
        transform: none;
        opacity: 1;
    }

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;
        height: 80px;
        background: url("@/assets/images/logo.png") no-repeat right 2px;
        background-size: 160px auto;
    }

    .right {
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid $xtxColor;

        a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1;

            &:hover {
                color: $xtxColor;
            }
        }
    }
}

.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
        margin-right: 40px;
        width: 38px;
        text-align: center;

        a {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            display: inline-block;

            &:hover {
                color: $xtxColor;
                border-bottom: 1px solid $xtxColor;
            }
        }

        .active {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
        }
    }
}
</style>