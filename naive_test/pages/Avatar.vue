<script setup>

const options = [
    {
        name: "张三",
        src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    },
    {
        name: "李四",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    },
    {
        name: "王五",
        src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    },
    {
        name: "赵六",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    },
    {
        name: "七仔",
        src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    }
]
const createDropdownOptions = (options) => options.map((option) => ({
    key: option.name,
    label: option.name
}))
</script>


<template>
    <div>
        <!-- 簡單群組 -->
        <n-avatar-group :options="options" :size="40" :max="3" />
        <!-- 群組模板，搭配客製化模板(提示文字) -->
        <!-- <n-avatar-group :options="options" :size="40" :max="3">
            <template #avatar="{ option: { name, src } }">
                <n-tooltip>
                    <template #trigger>
                        <n-avatar :src="src" />
                    </template>
                    {{ name }}
                </n-tooltip>
            </template>
            <template #rest="{ options: restOptions, rest }">
                <n-dropdown :options="createDropdownOptions(restOptions)" placement="top">
                    <n-avatar>+{{ rest }}</n-avatar>
                </n-dropdown>
            </template>
        </n-avatar-group> -->
        <hr>
        <n-space align="flex-end">
            <n-avatar size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <n-avatar size="medium" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <n-avatar size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <n-avatar :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </n-space>
        <br>
        <n-badge value="999+">
            <n-avatar>App</n-avatar>
        </n-badge>
    </div>

</template>


<style scoped lang='scss'>

</style>