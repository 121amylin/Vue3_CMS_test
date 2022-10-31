<script setup>
import { ref } from 'vue'
const nowShow = ref(0)
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
const togglePicHandle = idx => {
    nowShow.value = idx
}
</script>
<template>
    <div>
        {{ nowShow }}
        <div class="slide_list">
            <transition-group name="slids">
                <img class="slide_item" v-for="(item, idx) in picList" :key="item.id" :src="item.src"
                    v-show="nowShow === idx">
            </transition-group>
        </div>
        <div class="slide_button_list">
            <button class="slide_button_list_item" v-for="(item, idx) in picList" :key="item.id"
                @click="togglePicHandle(idx)" :class="[nowShow === idx ? 'active' : '']">button {{ item.id
                }}</button>
        </div>
    </div>
</template>
<style lang="scss">
.slide_list {
    width: clamp(460px, 30vw, 600px);
    height: clamp(320px, 20vw, 400px);
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

}

.slids-enter-active,
.slids-leave-active {
    transition: transform .3s ease;
}

.slids-enter-from {
    transform: translateX(-550px);
}

.slids-leave-to {
    transform: translateX(550px)
}

.slide_button_list {
    margin-top: 20px;
    .slide_button_list_item {
        +.slide_button_list_item{
            margin-left: 10px;
        }
        &.active {
            background-color: #333;
            color: #fff;
        }
    }
}
</style>