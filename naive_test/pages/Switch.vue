<script setup>
import { useMessage } from "naive-ui"
import { ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'
const message = useMessage();
const active = ref(false)
const active2 = ref(false)
const active3 = ref(false)
const active4 = ref(false)
const activeRef = ref(false);
const loadingRef = ref(false);
const handleChange = (value) => {
    message.info(`Update value: ${value}`);
}
const handleUpdateValue = (value) => {
    loadingRef.value = true;
    setTimeout(() => {
        activeRef.value = value;
        loadingRef.value = false;
    }, 2e3);
}
const handleUpdateMsgValue = (value) => {
    message.info(value)
}

const railStyle = ({
    focused,
    checked
}) => {
    const style = {};
    if (checked) {
        style.background = "#d03050";
        if (focused) {
            style.boxShadow = "0 0 0 2px #d0305040";
        }
    } else {
        style.background = "#2080f0";
        if (focused) {
            style.boxShadow = "0 0 0 2px #2080f040";
        }
    }
    return style;
}
</script>


<template>
    <div>
        <n-space>
            <n-switch v-model:value="active" />
            <n-switch v-model:value="active" disabled />
        </n-space>

        <n-divider />

        <n-switch>
            <template #checked>
                自然赠予你，树冠 微风 肩头的暴雨
            </template>
            <template #unchecked>
                不息的身体
            </template>
        </n-switch>

        <n-divider />

        <n-switch v-model:value="active2" @update:value="handleChange" />

        <n-divider />

        <n-space>
            <n-switch />
            <n-switch />
        </n-space>
        <n-space>
            <n-switch :round="false" />
            <n-switch />
        </n-space>

        <n-divider />

        <n-grid :cols="4">
            <n-gi>
                <n-switch v-model:value="active3" size="medium">
                    <template #icon>
                        🤔
                    </template>
                </n-switch>
            </n-gi>
            <n-gi>
                <n-switch v-model:value="active4" size="large">
                    <template #checked-icon>
                        <n-icon :component="ArrowForwardOutline" />
                    </template>
                    <template #unchecked-icon>
                        <n-icon :component="ArrowBackOutline" />
                    </template>
                </n-switch>
            </n-gi>
        </n-grid>

        <n-divider />

        <n-space>
            <n-switch size="small" />
            <n-switch size="medium" />
            <n-switch size="large" />
        </n-space>

        <n-divider />

        <n-space>
            <n-switch :rubber-band="false" loading />
            <n-switch :rubber-band="false" :value="activeRef" :loading="loadingRef" @update:value="handleUpdateValue" />
        </n-space>

        <n-divider />

        <n-switch checked-value="周末加班" unchecked-value="周末支持一下" @update:value="handleUpdateMsgValue" />
        <n-divider />
        <n-switch :rail-style="railStyle">
            <template #checked>
                傍晚六点下班
            </template>
            <template #unchecked>
                午夜零点下班
            </template>
        </n-switch>

    </div>

</template>


<style scoped lang='scss'>

</style>