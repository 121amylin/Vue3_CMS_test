<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="帳號">
      <el-input v-model="form.name"
          type="text" 
          placeholder="請輸入帳號"/>
    </el-form-item>

    <el-form-item label="密碼">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="請輸入密碼"
          show-password
        />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">登入</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import {login} from '../http/api'
import router from '../router/index'
// do not use same name with ref
const form = reactive({
  name: '',
  password:''
})

const onSubmit = () => {
  if(!form.name||!form.password){
      ElMessage.error('請輸入帳號與密碼!')
      return
  }
  login(form).then(res=>{
    console.log(res)
    router.push('/home')
  })
}
</script>