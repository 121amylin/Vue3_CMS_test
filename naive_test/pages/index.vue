<script setup>
const AppConfig = useAppConfig()
const { theme } = AppConfig
const { primaryColor } = theme
const primaryColor_ref = ref(AppConfig.theme.primaryColor)
const changColor = () => {
    if (!AppConfig.theme.darkMode) {
        console.log(1)
        AppConfig.theme.primaryColor = "#222"
    } else {
        console.log(2)
        AppConfig.theme.primaryColor = "#3b82f6"
    }
    theme.darkMode = !theme.darkMode
}
</script>


<template>
    <div>
        <h1>首頁</h1>
        <p>深色主題：{{ theme.darkMode }}</p>
        <p>主題顏色(動態綁定)：<span class="color" :style="{ backgroundColor: AppConfig.theme.primaryColor }"></span></p>
        <p>主題顏色(直接解構，不用ref包一層，反正也不連動)：<span class="color"></span></p>
        {{ primaryColor }}，解構出來的不連動
        <br>
        {{ primaryColor_ref }}
        <br>
        {{ theme.primaryColor }}
        <br>
        {{ AppConfig.theme.primaryColor }}
        <n-button type="success" @click="changColor">
            更改主題顏色
        </n-button>
    </div>
</template>


<style scoped lang='scss'>
.color {
    display: inline-block;
    width: 40px;
    height: 40px;

    background-color: v-bind(primaryColor);
    // background-color: v-bind(primaryColor_ref);
    vertical-align: middle;
}
</style>