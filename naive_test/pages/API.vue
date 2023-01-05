<script setup>
const users = ref(null)
const posts = ref(null)
users.value = await useFetch('/users', {
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com'
}).then(res => {
    return res.data
    // console.log(res)
})
posts.value = await useFetch('/posts', {
    method: 'GET',
    baseURL: 'https://jsonplaceholder.typicode.com'
}).then(res => {
    return res.data
    // console.log(res)
})
</script>


<template>
    <div>
        <h3>https://jsonplaceholder.typicode.com/users</h3>
        <p>{{ users }}</p>
        <br>
        <br>
        <hr>
        <br>
        <br>
        <p>{{ posts }}</p>
    </div>
</template>


<style scoped lang='scss'>

</style>