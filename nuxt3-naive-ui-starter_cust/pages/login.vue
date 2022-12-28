<script setup>
// const { data } = await useFetch('/api/login')

const router = useRouter();
let dateList = ref(null)

onMounted(async () => {
    const { data, pending, error, refresh } = await useFetch("/api/login")
    if (data.value.ok) {
        router.push({ path: "/" });
    } else {
        console.log('登入失敗')
    }
})


console.log(dateList.value)
</script>


<template>
    <div>
        <h1>about</h1>
    </div>
</template>


<style scoped lang='scss'>

</style>