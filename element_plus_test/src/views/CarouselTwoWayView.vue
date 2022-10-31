<script setup>
import { ref } from 'vue'
const nowItem = ref(0)
const prevItem = ref(0)
const direction = ref('right')
const picList = ref(
    [
        { id: '0', src: "https://source.unsplash.com/600x400?0" },
        { id: '1', src: "https://source.unsplash.com/600x400?1" },
        { id: '2', src: "https://source.unsplash.com/600x400?2" },
        { id: '3', src: "https://source.unsplash.com/600x400?3" },
        { id: '4', src: "https://source.unsplash.com/600x400?4" },
        { id: '5', src: "https://source.unsplash.com/600x400?5" },
        { id: '6', src: "https://source.unsplash.com/600x400?6" },
        { id: '7', src: "https://source.unsplash.com/600x400?7" },
        { id: '8', src: "https://source.unsplash.com/600x400?8" }
    ]
)
console.log(prevItem.value)
const savePrevItem = function () {
    prevItem.value = nowItem.value
}
const toggleNowItem = function (idx) {
    nowItem.value = idx
    // direction.value = idx > prevItem.value ? "right" : "left"
    if (idx > prevItem.value) {
        direction.value = 'left'
    } else {
        direction.value = 'right'
    }
}
</script>
<template >
    {{ prevItem }}
    {{ direction }}
    <div class="slide_list">
        <transition-group :name="direction" @after-leave="savePrevItem">
            <img v-show="idx === nowItem" class="slide_list_item" :src="item.src" alt="" v-for="(item, idx) in picList"
                :key="item.id">
        </transition-group>
    </div>

    <div class="toggle_botton_box">
        <button class="toggle_botton_box_item" v-for="(item, idx) in picList" @click="toggleNowItem(idx)"
            :key="item.id">button {{
        item.id
            }}</button>
    </div>

</template>
<style lang="scss">
.slide_list {
    width: clamp(460px, 30vw, 600px);
    height: clamp(320px, 20vw, 400px);
    margin: 0 auto 20px auto;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
}

.toggle_botton_box_item {
    +.toggle_botton_box_item {
        margin-left: 10px;
    }
}

.right-enter-from {
    transform: translateX(-110%);
}

.right-leave-to {
    transform: translateX(110%);
}


.left-enter-from {
    transform: translateX(110%);
}

.left-leave-to {
    transform: translateX(-110%);
}

.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
    transition: transform .3s ease;
}
</style>