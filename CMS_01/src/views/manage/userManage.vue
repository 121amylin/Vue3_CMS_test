<template>
    <!-- {{ userList }} -->

    <!-- {{ newUserList }} -->

    <!-- {{tempArr}} -->
    <el-table :data="userList">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
    </el-table>


    <el-pagination background layout="prev, pager, next" :total="totalNumber" />
</template>


<script setup>
import { UserAPI } from '../../API/userAPI'
import { onMounted, ref, computed } from 'vue'
const userList = ref()
const totalNumber = ref()
const userAPI = new UserAPI()

// const newUserList = computed(() => {
    let tempArr = []
    let count = Math.ceil((totalNumber.length) * 1 / 10)
    for (let i = 0; i < 50; i++) {
        console.log(i)
        // tempArr.push(userList.value.splice(0, 10))
    }
    console.log(tempArr)
    // while (userList.value.length > 0) {
    //     tempArr.push(userList.value.splice(0, 10))
    // }

//     return tempArr
// })
onMounted(() => {
    userAPI.getData().then(res => {
        userList.value = res
        totalNumber.value = userList.value.length
    })
})

</script>