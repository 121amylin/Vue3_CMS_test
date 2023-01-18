<script setup>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
const route = useRoute()

const message = useMessage();
const showModal = ref(false)
const showModal2 = ref(false)
const onNegativeClick = () => {
    message.success("Cancel");
    showModal2.value = false;
}
const onPositiveClick = () => {
    message.success("Submit");
    showModal2.value = false;
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-button @click="showModal = true">
            来吧
        </n-button>
        <n-modal v-model:show="showModal" transform-origin="center">
            <n-card style="width: 600px" title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
                <template #header-extra>
                    噢！
                </template>
                内容
                <template #footer>
                    尾部
                </template>
            </n-card>
        </n-modal>
        <n-hr />
        <n-button @click="showModal2 = true">
            来吧
        </n-button>
        <n-modal v-model:show="showModal2" :mask-closable="false" preset="dialog" title="确认" content="你确认"
            positive-text="确认" negative-text="算了" @positive-click="onPositiveClick" @negative-click="onNegativeClick" />
    </div>
</template>


<style scoped lang='scss'>

</style>