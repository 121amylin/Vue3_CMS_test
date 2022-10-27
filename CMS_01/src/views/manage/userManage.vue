<template>
    {{ userList }}


    <el-table :data="userList" height="250" >
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
    </el-table>
</template>


<script setup>
import { UserAPI } from '../../API/userAPI'
import { onMounted, ref } from 'vue'
const userList = ref()

const userAPI = new UserAPI()
onMounted(() => {
    userAPI.getData().then(res => {
        userList.value = res
    })
})
</script>