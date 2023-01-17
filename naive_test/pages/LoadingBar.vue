<script setup>
import { useLoadingBar } from 'naive-ui'
const route = useRoute()

const loadingBar = useLoadingBar()
const disabledRef = ref(true)

const disabled = disabledRef
const handleStart = () => {
    loadingBar.start()
    disabledRef.value = false
}
const handleFinish = () => {
    loadingBar.finish()
    disabledRef.value = true
}
const handleError = () => {
    disabledRef.value = true
    loadingBar.error()
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-space>
            <n-button @click="handleStart">
                start
            </n-button>
            <n-button :disabled="disabled" @click="handleFinish">
                finish
            </n-button>
            <n-button @click="handleError">
                error
            </n-button>
        </n-space>
    </div>
</template>


<style scoped lang='scss'>

</style>