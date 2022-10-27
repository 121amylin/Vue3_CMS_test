<template>
    <div v-if="userList">
        <el-table :data="newUserList[currentPage]">
            <el-table-column prop="id" label="Id" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="email" label="Email" />
        </el-table>
    </div>

    <el-pagination background layout="prev, pager, next" :total="totalNumber" v-model='currentPage'
        @current-change="handleCurrentChange" />
</template>


<script setup>
import { UserAPI } from '../../API/userAPI'
import { onMounted, ref, computed } from 'vue'
const userList = ref()
const totalNumber = ref()
const newUserList = ref()
const currentPage = ref(0)
const userAPI = new UserAPI()

onMounted(() => {
    userAPI.getData().then(res => {
        userList.value = res
        totalNumber.value = userList.value.length


        let tempArr = []
        let count = Math.ceil((totalNumber.value) * 1 / 10)
        for (let i = 0; i < count; i++) {
            if (userList.value) {
                tempArr.push(userList.value.splice(0, 10))
            }
        }

        newUserList.value = tempArr
    })
})

const handleCurrentChange = (val) => {
    currentPage.value = val - 1
    console.log(`current page: ${val}`)
}

</script>