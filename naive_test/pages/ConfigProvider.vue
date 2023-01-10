<script setup>
import { useOsTheme, darkTheme } from "naive-ui"
import { zhCN, dateZhCN } from 'naive-ui'
const theme = ref(null)

const locale = ref(null)
const dateLocale = ref(null)
const ns = ref("custom-app-namespace1")
const isActive = ref(false)
const osThemeRef = useOsTheme()
const theme2 = computed(() => osThemeRef.value === "dark" ? darkTheme : null)
const osTheme = osThemeRef
</script>


<template>
    <div>
        <n-config-provider :theme="theme">
            <n-card>
                <n-space>
                    <n-button @click="theme = darkTheme">
                        深色
                    </n-button>
                    <n-button @click="theme = null">
                        浅色
                    </n-button>
                </n-space>
            </n-card>
        </n-config-provider>

        <n-divider />

        <n-config-provider>
            <n-tag>噢</n-tag>
        </n-config-provider>

        <n-divider />

        <n-space vertical>
            <n-space>
                <n-button @click="
                    () => {
                        locale = null
                        dateLocale = null
                    }
                ">
                    英文
                </n-button>
                <n-button @click="
                    () => {
                        locale = zhCN
                        dateLocale = dateZhCN
                    }
                ">
                    中文
                </n-button>
            </n-space>
            <n-config-provider :locale="locale" :date-locale="dateLocale">
                <!-- <n-config-provider :locale="locale" > -->
                <!-- <n-config-provider :date-locale="dateLocale"> -->
                <n-date-picker />
            </n-config-provider>
        </n-space>

        <n-divider />

        <n-config-provider inline-theme-disabled>
            <n-button>不再有 inline CSS 变量的按钮</n-button>
        </n-config-provider>

        <n-divider />

        <n-config-provider :namespace="ns">
            <n-tooltip placement="bottom" trigger="click">
                <template #trigger>
                    <n-button @click="isActive = true">
                        激活含卸载内容的组件
                    </n-button>
                </template>
                <span> 卸载内容 </span>
            </n-tooltip>
        </n-config-provider>

        <n-divider />

        <n-config-provider :theme="theme">
            <n-card> 当前操作系统的主题是 {{ osTheme }}。 </n-card>
        </n-config-provider>

        <n-divider />


        <n-config-provider abstract>
            <n-card>
                <n-tag>无包裹 DOM</n-tag>
            </n-card>
        </n-config-provider>

        <n-divider />

        <n-config-provider>
            <n-card>
                <n-tag>包裹 DOM</n-tag>
            </n-card>
        </n-config-provider>
    </div>
</template>


<style scoped lang='scss'>

</style>