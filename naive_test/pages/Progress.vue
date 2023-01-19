<script setup>
import { defineComponent, ref } from "vue";
import { changeColor } from "seemly";
import { useThemeVars } from "naive-ui";
const route = useRoute()
const percentage = ref(0);
const themeVars = useThemeVars()
const add = () => {
    // percentage.value += 10;
    // if (percentage.value > 100) {
    //     percentage.value = 0;
    // }
    percentage.value = Math.min(100, percentage.value += 10)
};

const minus = () => {
    // percentage.value -= 10;
    // if (percentage.value < 0) {
    //     percentage.value = 100;
    // }
    percentage.value = Math.max(0, percentage.value -= 10)
};
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-space vertical>
            <n-space>
                <n-progress type="circle" :percentage="percentage" />
                <n-progress type="circle" status="info" :percentage="percentage" />
                <n-progress type="circle" status="success" :percentage="percentage" />
                <n-progress type="circle" status="warning" :percentage="percentage" />
                <n-progress type="circle" status="error" :percentage="percentage" />
                <n-progress type="circle" :percentage="80" :offset-degree="120" />
                <n-progress type="dashboard" gap-position="bottom" :percentage="80" />
                <n-progress type="dashboard" :gap-offset-degree="0" :gap-degree="60" :percentage="80" />
            </n-space>
            <n-space>
                <n-button @click="minus">
                    减 10%
                </n-button>
                <n-button @click="add">
                    加 10%
                </n-button>
            </n-space>
            <n-hr></n-hr>
            <n-hr></n-hr>
            <n-progress style="margin: 0 30px 30px 0" type="circle" :percentage="20" :color="themeVars.successColor"
                :rail-color="changeColor(themeVars.successColor, { alpha: 0.2 })"
                :indicator-text-color="themeVars.successColor" />
            <n-progress style="width: 120px; margin: 0 30px 30px 0" type="multiple-circle" :stroke-width="4"
                :circle-gap="6" :percentage="[50, 25]" :color="[themeVars.infoColor, themeVars.infoColor]" :rail-color="[
                    changeColor(themeVars.infoColor, { alpha: 0.2 }),
                    changeColor(themeVars.infoColor, { alpha: 0.2 })
                ]" />
            <n-progress type="line" indicator-placement="inside" :color="themeVars.errorColor"
                :rail-color="changeColor(themeVars.errorColor, { alpha: 0.3 })" :percentage="20" />
            <n-progress type="line" :color="themeVars.warningColor"
                :rail-color="changeColor(themeVars.warningColor, { alpha: 0.4 })" :percentage="20"
                :indicator-text-color="themeVars.warningColor" />
        </n-space>
        <n-hr></n-hr>
        <n-space vertical>
            <n-progress processing type="line" :percentage="50" :height="50" :border-radius="4" :fill-border-radius="0" />
            <n-progress type="line" status="error" :percentage="50" :height="40" border-radius="12px 0 12px 0"
                fill-border-radius="12px 0 12px 0">
                一种艺术
            </n-progress>
        </n-space>
        <n-hr></n-hr>

        <n-space vertical>
            <n-progress type="line" :percentage="percentage" />
            <n-progress type="line" :percentage="percentage" :show-indicator="false" />
            <n-progress type="line" :percentage="percentage" :indicator-placement="'inside'" />
            <p>1</p>

            <n-progress type="line" status="info" :percentage="percentage" />
            <n-progress type="line" status="info" :percentage="percentage" :show-indicator="false" />
            <n-progress type="line" status="info" :percentage="percentage" :indicator-placement="'inside'" />
            <p>2</p>

            <n-progress type="line" status="success" :percentage="percentage" />
            <n-progress type="line" status="success" :percentage="percentage" :show-indicator="false" />
            <n-progress type="line" status="success" :percentage="percentage" :indicator-placement="'inside'" />
            <p>3</p>

            <n-progress type="line" status="warning" :percentage="percentage" />
            <n-progress type="line" status="warning" :percentage="percentage" :show-indicator="false" />
            <n-progress type="line" status="warning" :percentage="percentage" :indicator-placement="'inside'" />
            <p>4</p>

            <n-progress type="line" status="error" :percentage="percentage" />
            <n-progress type="line" status="error" :percentage="percentage" :show-indicator="false" />
            <n-progress type="line" status="error" :percentage="percentage" :indicator-placement="'inside'" />
            <n-space>
                <n-button @click="minus">
                    减 10%
                </n-button>
                <n-button @click="add">
                    加 10%
                </n-button>
            </n-space>
            <n-hr></n-hr>
            <n-space vertical>
                <n-el>
                    <n-progress processing type="multiple-circle" :stroke-width="6" :circle-gap="0.5" :percentage="[
                        percentage,
                        (percentage + 10) % 100,
                        (percentage + 20) % 100,
                        (percentage + 30) % 100
                    ]" :color="[
    'var(--info-color)',
    'var(--success-color)',
    'var(--warning-color)',
    'var(--error-color)'
]" :rail-style="[
    { stroke: 'var(--info-color)', opacity: 0.3 },
    { stroke: 'var(--success-color)', opacity: 0.3 },
    { stroke: 'var(--warning-color)', opacity: 0.3 },
    { stroke: 'var(--error-color)', opacity: 0.3 }
]">
                        <div style="text-align: center">
                            圈圈赛跑！
                        </div>
                    </n-progress>
                </n-el>
                <n-space>
                    <n-button @click="minus">
                        减 10%
                    </n-button>
                    <n-button @click="add">
                        加 10%
                    </n-button>
                </n-space>
            </n-space>
        </n-space>

    </div>
</template>


<style scoped lang='scss'>

</style>