<script setup>
import { ref, defineProps, onMounted } from 'vue'
// 元件外部接口 ==============================
const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    ShowItem: {
        type: Number,
        default() {
            return 0
        }
    }
})



// 元件內部運作 ==============================
const control_btn = ref([]);
const tabs_content = ref([]);
const isShowItem = ref(props.ShowItem)
const accessibleShowItem = ref(props.ShowItem)
const showData = []

const changeShowItemHandle = (index) => {
    isShowItem.value = index
}
// const accessibleChangeHandle = (index) => {
//     // console.log(tabs_content.value[index])

//     // const target = tabs_content.value[index]
// }
// const aaa = (index, all) => {
//     if (index === all - 1) {
//         console.log(222)
//         // const target = tabs_content[2].querySelector('a')
//         // console.log(target)
//         // target.focus()
//     }
// }
props.data.forEach(item => {
    if (item.isShow) {
        showData.push(item)
    }
})

onMounted(() => {
    const control_btn = document.querySelectorAll('.tabs_control a')
    const content_box = document.querySelectorAll('.content_box')
    control_btn.forEach((item, index) => {
        item.addEventListener('blur', () => {
            console.log(1)
            content_box[index].querySelector('a').focus()
        })
    })
    content_box.forEach(item => {
        // console.log(item.querySelector('a:last-child'))
        // item.querySelector('a:last-child').addEventListener('blur', () => {

        //     console.log(2)
        // })
    })
})

</script>


<template>

    <div>
        <div class="tabs_components">
            <div class="tabs_control">
                <a href="javascript:;" v-for="(item, index) in showData" :key="item.id"
                    :class="[index === isShowItem ? 'active' : '']" @click.prevent="changeShowItemHandle(index)"
                    @focus.prevent="changeShowItemHandle(index)" :data-index="index">{{
                        item.title
                    }}</a>
            </div>
            <div class="tabs_content">
                <div class="content_box" v-for="(item, index) in showData" :key="item.id"
                    :class="[index === isShowItem ? 'active fade' : '']" :data-index="index">
                    <p v-if="item.content">{{ item.content }}</p>
                    <div v-if="item.html" class="descript" v-html="item.html"></div>
                    <ul v-if="item.link">
                        <li v-for="Citem in item.link" :key="Citem.id"><a :href="Citem.url" target="_blank"
                                @blur="aaa(index, item.link.length)">{{
    Citem.title
                                }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.tabs_control {
    display: flex;

    a {
        padding: 4px 10px;
        background-color: #eee;

        +a {
            margin-left: 4px;
        }

        &.active {
            background-color: hsla(160, 100%, 37%, 1);
            color: #eee;
        }

    }
}

.tabs_content {
    position: relative;

    .content_box {
        display: none;
        opacity: 0;
        background-color: #fff;

        &.active {
            display: block;
            animation-name: fade;
            animation-delay: .2s;
            animation-duration: .6s;
            animation-fill-mode: forwards;
        }
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>