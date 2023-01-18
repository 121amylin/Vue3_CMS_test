<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
            <template #footer>
                <n-button>找点乐子吧</n-button>
            </template>
        </n-result>
    </div>
</template>


<style scoped lang='scss'>

</style>