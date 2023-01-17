<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
const containerRef = ref(void 0);
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <!-- <div ref="containerRef" class="container">
            <div class="padding" />
            <div class="content">
                <n-grid :cols="2">
                    <n-gi :span="1">
                        <n-affix :top="120" :trigger-top="60" :listen-to="() => containerRef">
                            <n-tag>顶部触发距离 60px</n-tag>
                        </n-affix>
                    </n-gi>
                    <n-gi :span="1">
                        <n-affix :bottom="120" :trigger-bottom="60" :listen-to="() => containerRef">
                            <n-tag>底部触发距离 60px</n-tag>
                        </n-affix>
                    </n-gi>
                </n-grid>
            </div>
        </div> -->
        <hr>
        <div class="absolute-anchor-container">
            <div ref="containerRef" class="container">
                <div class="padding" />
                <div class="content">
                    <div style="display: inline-block; width: 50%">
                        <n-affix :trigger-top="50" position="absolute" :listen-to="() => containerRef">
                            <n-tag>顶部触发距离 50px</n-tag>
                        </n-affix>
                    </div>
                    <div style="display: inline-block; width: 50%">
                        <n-affix :trigger-bottom="60" position="absolute" :listen-to="() => containerRef">
                            <n-tag>底部触发距离 60px</n-tag>
                        </n-affix>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang='scss'>
.container {
    width: 100%;
    height: 200px;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 3px;
    overflow: auto;
}

.padding {
    height: 150px;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.15);
}

.content {
    height: 600px;
}

.absolute-anchor-container {
    width: 100%;
    height: 200px;
    position: relative;
}

.container {
    height: 200px;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 3px;
    overflow: auto;
}

.padding {
    height: 150px;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.15);
}

.content {
    height: 600px;
}
</style>