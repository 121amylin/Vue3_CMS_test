<script setup>
const route = useRoute()

const scrollContainerRef = ref(void 0);

const scrollContainer = scrollContainerRef
const target = () => scrollContainerRef.value
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <!-- <n-back-top :right="50" /> -->

        <!-- <n-back-top :bottom="50" :visibility-height="300">
            <div style="width: 200px;height: 40px;line-height: 40px;text-align: center;font-size: 14px; ">
                可视高度：300px
            </div>
        </n-back-top> -->

        <!-- <n-back-top :right="40" :bottom="50">
            <div style="width: 200px;height: 40px;line-height: 40px;text-align: center; font-size: 14px;">
                改变位置
            </div>
        </n-back-top> -->

        <n-back-top :listen-to="target" :bottom="220" :visibility-height="10">
            <div style="width: 200px;height: 40px; line-height: 40px;text-align: center;font-size: 14px;">
                指定目标
            </div>
        </n-back-top>
        <div ref="scrollContainer" style="overflow: auto; height: 72px; line-height: 1.5">
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
            这块应该写一个有意思的笑话。<br>
        </div>
    </div>
</template>


<style scoped lang='scss'>

</style>