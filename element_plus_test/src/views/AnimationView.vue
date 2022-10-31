<script setup>
import { ref } from 'vue'
const DOME_1_isOpen = ref(false)
const DOME_1_toggleIsOpen = function () {
    DOME_1_isOpen.value = !DOME_1_isOpen.value
}

const DOME_2_isOpen = ref(false)
const DOME_2_toggleOpen = function () {
    DOME_2_isOpen.value = !DOME_2_isOpen.value
}

const DOME_3_isOpen = ref(false)
const DOME_3_toggleOpen = function () {
    DOME_3_isOpen.value = !DOME_3_isOpen.value
}
</script>
<template>
    <!-- 一、transition -->
    <div id="dome_1">
        <p><mark>【【DOME 1】</mark></p>
        <button @click="DOME_1_toggleIsOpen">開關</button>
        <div class="box" :class="[DOME_1_isOpen ? 'isShow' : '']"></div>
    </div>


    <!-- 二、keyframes -->
    <div id="dome_2">
        <p><mark>【【DOME 2】</mark></p>
        <button @click="DOME_2_toggleOpen">開關</button>
        <div class="box" :class="[DOME_2_isOpen ? 'isShow' : '']"></div>
    </div>

    <!-- 三、Vue 的 transition 動畫 -->
    <!-- 除了透過切換 class 加入動畫以外，Vue 提供了一個 transition 的 component，讓我們可以用簡單的方式可以處理 component 之間的過渡動畫，我們只需要把你要執行動畫的 component 給包起來，透過 v-if 或是 v-show 就可以使用了。 -->
    <div id="dome_3">
        <p><mark>【【DOME 3】</mark></p>
        <button @click="DOME_3_toggleOpen">開關</button>
        <transition name="fade">
            <div v-show="DOME_3_isOpen">123</div>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
#dome_1 {
    .box {
        width: 120px;
        height: 120px;
        background-color: #999;
        opacity: 0;
        transition: opacity .3s;


        &.isShow {
            opacity: 1;
        }
    }
}

#dome_2 {
    .box {
        width: 120px;
        height: 120px;
        background-color: #999;

        &.isShow {
            animation-name: opacityAm;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }


    }
}

@keyframes opacityAm {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 100%;
    }

    100% {
        opacity: 100%;
        transform: translateX(100px);
    }
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>



<!-- [重構倒數第15天] - Vue3處理動態效果(一) -->
<!-- https://ithelp.ithome.com.tw/articles/10264842 -->
<!-- [重構倒數第15天] - Vue3處理動態效果(二) -->
<!-- https://ithelp.ithome.com.tw/articles/10265689 -->