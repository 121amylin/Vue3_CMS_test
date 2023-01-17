<script setup>
import { MdCash } from '@vicons/ionicons4'
const route = useRoute()

const options1 = [
    {
        label: 'David Tao',
        key: 1
    },
    {
        label: '黑色柳丁',
        key: 2
    }
]
const options2 = [
    {
        label: '小镇姑娘',
        key: 1
    },
    {
        label: '普通朋友',
        key: 2
    }
]
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-breadcrumb>
            <n-breadcrumb-item>
                <n-icon :component="MdCash" /> 北京总行</n-breadcrumb-item>
            <n-breadcrumb-item>
                <n-icon :component="MdCash" /> 天津分行</n-breadcrumb-item>
            <n-breadcrumb-item>
                <n-icon :component="MdCash" /> 平山道支行</n-breadcrumb-item>
        </n-breadcrumb>
        <hr>
        <n-breadcrumb>
            <n-breadcrumb-item separator=">">
                <n-icon><md-cash /></n-icon> 北京总行</n-breadcrumb-item>
            <n-breadcrumb-item>
                <n-icon><md-cash /></n-icon> 天津分行<template #separator>
                    ~
                </template>
            </n-breadcrumb-item>
            <n-breadcrumb-item>
                <n-icon><md-cash /></n-icon> 平山道支行</n-breadcrumb-item>
        </n-breadcrumb>
        <hr>
        <n-breadcrumb>
            <n-breadcrumb-item>
                <n-dropdown :options="options1">
                    <div class="trigger">
                        I'm ok
                    </div>
                </n-dropdown>
            </n-breadcrumb-item>
            <n-breadcrumb-item>
                <n-dropdown :options="options2">
                    <div class="trigger">
                        I'm ok
                    </div>
                </n-dropdown>
            </n-breadcrumb-item>
        </n-breadcrumb>
    </div>
</template>


<style scoped lang='scss'>

</style>