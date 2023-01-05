<script setup>
</script>


<template>
    <div>
        <mark>分割線</mark>
        <n-divider />
        <n-divider>
            🐼🐼🐼🐼🐼🐼
        </n-divider>
        <n-divider title-placement="left">
            🐼🐼🐼🐼🐼🐼
        </n-divider>
        这个<n-divider vertical />看起来<n-divider vertical />好像不是很显眼，额...
        <n-divider title-placement="right">
            🐼🐼🐼🐼🐼🐼
        </n-divider>

        <n-divider dashed>
            虚线
        </n-divider>


        <hr>

        <mark>文本省略</mark>
        <no-ssr>
            <n-ellipsis style="max-width: 240px">
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
            </n-ellipsis>
        </no-ssr>

        <!-- <div style="width:200px">
            <n-ellipsis >
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis :line-clamp="2">
                电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
                百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis>
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
                <template #tooltip>
                    <div style="text-align: center">
                        《秦皇岛》<br>住在我心里孤独的<br>孤独的海怪 痛苦之王<br>开始厌倦
                        深海的光 停滞的海浪
                    </div>
                </template>
            </n-ellipsis>
        </div>
        <div style="width:200px">
            <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
                电灯熄灭 物换星移 泥牛入海<br>
                黑暗好像 一颗巨石 按在胸口<br>
                独脚大盗 百万富翁 摸爬滚打<br>
                黑暗好像 一颗巨石 按在胸口
            </n-ellipsis>
        </div> -->


        <hr>


    </div>
</template>


<style scoped lang='scss'>

</style>