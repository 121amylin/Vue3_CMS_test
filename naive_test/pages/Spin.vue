<script setup>
import { defineComponent, ref } from "vue";
import { Reload } from "@vicons/ionicons5";
const route = useRoute()
const show = ref(false)
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-space>
            <n-spin size="small" />
            <n-spin size="medium" />
            <n-spin size="large" />
        </n-space>
        <n-hr></n-hr>
        <n-space vertical>
            <n-spin :show="show">
                <n-alert title="啦啦啦" type="success">
                    明天再打开行李箱。宝贝，挂电话啦。
                </n-alert>
            </n-spin>
            <n-button @click="show = !show">
                点击来转圈
            </n-button>
        </n-space>
        <n-hr></n-hr>
        <n-space vertical>
            <n-spin :show="show">
                <n-alert title="啦啦啦" type="success">
                    明天再打开行李箱。宝贝，挂电话啦。
                </n-alert>
                <template #description>
                    你不知道你有多幸运
                </template>
            </n-spin>
            <n-button @click="show = !show">
                点击来转圈
            </n-button>
        </n-space>
        <n-hr></n-hr>
        <n-spin :show="show">
            <template #icon>
                <n-icon>
                    <Reload />
                </n-icon>
            </template>
        </n-spin>
    </div>
</template>


<style scoped lang='scss'>

</style>