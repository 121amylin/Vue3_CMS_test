<script setup>
const users_components = ref(null)
users_components.value = await useFetch('/users', {
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com'
}).then(res => {
    console.log(res.data)
    return res.data
})

const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains')
)


</script>


<template>
    <div>
        <p style="color:#8117ff">useFetch____{{ users_components }}</p>
        <p style="color:#996644">useAsyncData____{{ data }}</p>
    </div>
</template>


<style scoped lang='scss'>

</style>