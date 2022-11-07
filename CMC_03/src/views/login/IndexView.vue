<script setup>
import { ref } from "vue";
import { Setting, User } from "@element-plus/icons-vue";
const input = ref({
  userName: "",
  userPassword: "",
});
</script>
<template>
  <div class="login_page">
    <div class="login_container">
      <h3 class="page_title">login</h3>
      <el-form :model="form" label-width="120px" class="login_form">
        <div class="input_item">
          <el-icon :size="size" :color="color">
            <User />
          </el-icon>
          <el-input v-model="input.userName" placeholder="請輸入使用者名稱" />
        </div>
        <div class="input_item">
          <el-icon :size="size" :color="color">
            <Setting />
          </el-icon>
          <el-input
            v-model="input.userPassword"
            type="password"
            placeholder="請輸入密碼"
            show-password
          />
        </div>
        <el-button type="primary" >送出</el-button></el-form
      >
    </div>
  </div>
</template>

<style lang="scss">
#app {
  background-color: rgb(101, 100, 116);
}
.login_page {
  display: flex;
  min-height: 100vh;
}
.login_container {
  width: 100%;
  max-width: 480px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.page_title {
  text-align: center;
  font-size: clamp(24px, 2vw, 40px);
  margin-bottom: clamp(10px, 1.5vw, 30px);
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
}
.input_item {
  display: flex;
  position: relative;
  margin-bottom: 14px;

  .el-form-item__label {
    color: #fff;
    font-size: clamp(18px, 1.15vw, 24px);
    font-weight: 700;
  }
  .el-icon {
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: clamp(18px, 1.5vw, 28px);
    z-index: 1;
    color: #999;
    &.el-input__password {
      left: unset;
      right: 0;
    }
  }
  .el-input__inner {
    text-indent: 24px;
    // &::placeholder {
    //   text-indent: 24px;
    // }
  }
}
.el-form-item__content {
  color: #fff;
}
.el-form {
  display: flex;
  flex-direction: column;
}
</style>
