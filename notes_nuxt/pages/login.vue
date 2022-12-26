<!--  -->
<script setup>
const router = useRouter();
const ruleFormRef = ref(null)
const ruleForm = reactive({
    username: '',
    password: '',
})

const rules = {
    username: [
        { required: true, message: '請輸入帳號', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '請輸入密碼', trigger: 'blur' }
    ],
}

const submitForm = () => {
    ruleFormRef.value.validate((valid) => {
        if (valid) {
            const result = fetch('/api/login').then().then(res => {
                router.push({ path: "/" });
            })
            if (result) {
            } else {
                ElMessage.error("登入失敗!");
            }

        } else {
            ElMessage.error("請輸入正確的帳號和密碼!");
            return false;
        }
    });
}
const resetForm = () => {
    ruleFormRef.value.resetFields();
}
</script>


<template>
    <div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
            <el-form-item label="帳號" prop="username">
                <el-input v-model="ruleForm.username" placeholder="password" />
            </el-form-item>
            <el-form-item label="密碼" prop="password">
                <el-input v-model="ruleForm.password" type="password" placeholder="請輸入密碼" show-password />
            </el-form-item>
            <el-button type="primary" @click="submitForm">登入</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form>
    </div>
</template>


<style scoped lang='scss'>

</style>