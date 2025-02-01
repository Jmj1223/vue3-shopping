<script setup>
import { getNewAPI } from '@/apis/home'
import HomePanel from '@/views/Home/components/HomePanel.vue'
import { ref, onMounted } from 'vue'

const newList = ref([])
const getNew = async () => {
    const res = await getNewAPI()
    console.log('新鲜好物======', res)
    newList.value = res.result
}
onMounted(() => {
    getNew()
})
</script>

<template>
    <HomePanel title="新鲜好物" subtitle="新鲜好物 好多推荐">
        <ul class="goods-list">
            <li v-for="item in newList" :key="item.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" alt="" />
                    <p class="name">{{ item.name }}</p>
                    <p class="price">&yen;{{ item.price }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;

    li {
        width: 306px;
        height: 406px;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }

        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>