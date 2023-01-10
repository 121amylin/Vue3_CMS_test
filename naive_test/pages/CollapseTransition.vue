<script setup>
const show = ref(true)
const show2 = ref(true)
</script>


<template>
    <n-space vertical>
        <n-switch v-model:value="show">
            <template #checked>
                展开
            </template>
            <template #unchecked>
                折叠
            </template>
        </n-switch>
        <n-collapse-transition :show="show">
            感知度，方法论，组合拳，引爆点，点线面，精细化，差异化，平台化，结构化，影响力，耦合性，便捷性，一致性，端到端，短平快，护城河，体验感，颗粒度
        </n-collapse-transition>
    </n-space>

    <n-divider />

    <n-p v-model:value="show2" @click="show2 = !show2">{{ show2?'展开': '折叠' }}</n-p>
    <n-collapse-transition :show="show2">
        感知度，方法论，组合拳，引爆点，点线面，精细化，差异化，平台化，结构化，影响力，耦合性，便捷性，一致性，端到端，短平快，护城河，体验感，颗粒度
    </n-collapse-transition>
</template>


<style scoped lang='scss'>

</style>