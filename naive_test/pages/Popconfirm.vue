<script setup>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

const route = useRoute()
const message = useMessage();

const handlePositiveClick = () => {
    message.info("是的");
}
const handleNegativeClick = () => {
    message.info("并不");
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
            <template #trigger>
                <n-button>引用</n-button>
            </template>
            一切都将一去杳然，任何人都无法将其捕获。
        </n-popconfirm>
    </div>
</template>


<style scoped lang='scss'>

</style>