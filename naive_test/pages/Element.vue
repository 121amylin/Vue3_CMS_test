<script setup>
import { darkTheme } from "naive-ui";

const theme = ref(null)
</script>


<template>

    <div>
        <n-space vertical>
            <n-space>
                <n-button @click="theme = darkTheme">
                    深色
                </n-button>
                <n-button @click="theme = null">
                    浅色
                </n-button>
            </n-space>
            <n-config-provider :theme="theme">
                <n-card>
                    <n-el tag="span" style="
            color: var(--primary-color);
            transition: 0.3s var(--cubic-bezier-ease-in-out);
          ">
                        我是个 span 标签
                    </n-el>
                </n-card>
            </n-config-provider>
        </n-space>
    </div>

</template>


<style scoped lang='scss'>

</style>