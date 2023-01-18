<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
const loading = ref(true)
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-skeleton text :repeat="2" />
        <n-skeleton text style="width: 60%" />
        <n-hr />
        <n-space vertical>
            <n-space><n-switch v-model:value="loading" />加载</n-space>
            <n-space>
                <n-skeleton v-if="loading" :width="146" :sharp="false" size="medium" />
                <n-button v-else>
                    Won't you fly high
                </n-button>
                <n-skeleton v-if="loading" :width="132" round size="medium" />
                <n-button v-else round>
                    free bird, yeah
                </n-button>
                <n-skeleton v-if="loading" circle size="medium" />
                <n-button v-else circle>
                    ?
                </n-button>
            </n-space>
        </n-space>
        <n-hr />
        <n-space vertical>
            <n-skeleton height="40px" width="33%" />
            <n-skeleton height="40px" width="66%" :sharp="false" />
            <n-skeleton height="40px" width="66%" :sharp="true" />
            <n-skeleton height="40px" round />
            <n-skeleton height="40px" circle />
        </n-space>
    </div>
</template>


<style scoped lang='scss'>

</style>