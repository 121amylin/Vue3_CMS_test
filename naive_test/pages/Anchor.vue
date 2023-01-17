<script setup>
import { ref } from 'vue'
const route = useRoute()

const showRail = ref(true)
const showBackground = ref(true)
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-space style="margin-bottom: 12px">
            <n-switch v-model:value="showRail" /> 展示轨道
            <n-switch v-model:value="showBackground" /> 展示背景
        </n-space>
        <n-anchor affix listen-to=".document-scroll-container" :trigger-top="24" :top="88" style="z-index: 1"
            :bound="24" :show-rail="showRail" :show-background="showBackground">
            <n-anchor-link title="演示" href="#演示">
                <n-anchor-link title="基础用法" href="#area1" />
                <n-anchor-link title="忽略间隔" href="#area2" />
                <n-anchor-link title="固定" href="#area3" />
                <n-anchor-link title="滚动到" href="#area4" />
            </n-anchor-link>
            <n-anchor-link title="API" href="#area5" />
        </n-anchor>
        <div class="area" id="area1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, earum.
        </div>
        <div class="area" id="area2">dolor sit amet consectetur adipisicing elit. Labore vitae, eius dolor nemo
            doloribus dolor sit amet consectetur adipisicing elit. Labore vitae, eius dolor nemo doloribusLorem ipsum
            dolor sit amet consectetur adipisicing elit. Labore vitae, eius dolor nemo doloribus totam temporibus
            quisquam ea debitis accusantium?</div>
        <div class="area" id="area3"></div>
        <div class="area" id="area4"></div>
        <div class="area" id="area5"></div>
    </div>
</template>


<style scoped lang='scss'>
.container {
    scroll-behavior: smooth;
}

.n-affix {
    position: fixed;
    z-index: 1;
    top: 0px;
    background: rgb(153, 153, 153);
}

.area {
    width: 100%;
    height: 90vh;
    border: 2px solid #999;
    margin-bottom: 100px;
}

#area1 {
    background-color: rgb(255, 228, 228);
}

#area2 {
    background-color: rgb(232, 255, 234);
}

#area3 {
    background-color: rgb(228, 226, 255);
}

#area4 {
    background-color: rgb(248, 255, 210);
}

#area5 {
    background-color: rgb(219, 255, 217);
    height: 110vh;
}
</style>