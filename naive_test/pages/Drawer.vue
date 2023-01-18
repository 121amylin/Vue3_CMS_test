<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
const show = ref(false)

const showInner = ref(false);
const doShowInner = () => {
    showInner.value = true;
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-button @click="show = true">
            打开
        </n-button>
        <n-drawer v-model:show="show" :width="502" placement="bottom" resizable>
            <n-drawer-content title="斯通纳" closable>
                《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
                <template #header>
                    Header
                </template>
                <template #footer>
                    <n-button>Footer</n-button>
                    <n-button @click="doShowInner">
                        再来一个！
                    </n-button>
                </template>
            </n-drawer-content>

            <n-drawer v-model:show="showInner" :width="251">
                <n-drawer-content title="斯通纳">
                    《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
                </n-drawer-content>
            </n-drawer>
        </n-drawer>

    </div>
</template>


<style scoped lang='scss'>

</style>