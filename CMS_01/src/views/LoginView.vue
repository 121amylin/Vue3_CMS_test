<template>
    <div class="login_box">
        <el-input v-model="input" type="text" placeholder="請輸入使用名稱" />
        <el-input v-model="input" type="password" placeholder="請輸入密碼" show-password />
        <el-button type="primary">送出</el-button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="scss" scoped>
.login_box {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;

    .el-input+.el-input {
        margin: 10px 0;
    }
}
</style>