<script setup>
import { ref, onMounted } from "vue";
import { login } from "../../api/login";
import { Setting, User } from "@element-plus/icons-vue";
import axios from "axios";
const form = ref({
  userName: "",
  userPassword: "",
});

const rules = ref({
  userName: [{ required: true, message: "請輸入使用者名稱", trigger: "blur" }],
  userPassword: [{ required: true, message: "請輸入密碼", trigger: "blur" }],
});
const formRef = ref(null);
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      // alert("submit!");
      // await login(form.value);
      await login();
      // 沒有登入接口，用 OPEN API 代替
      // await axios
      //   .get("https://jsonplaceholder.typicode.com/posts/1")
      //   .then((res) => {
      //     console.log(res);
      //   });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};

onMounted(() => {
  // axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
  //   console.log(res);
  // });
  // 代理測試
  // axios
  //   .get(
  //     "path/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4"
  //   )
  //   .then((res) => {
  //     console.log(res);
  //   });
});

// https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4

// https://element.eleme.io/#/zh-CN/component/form#biao-dan-yan-zheng
</script>
<template>
  <div class="login_page">
    <div class="login_container">
      <h3 class="page_title">login</h3>
      <el-form ref="formRef" :model="form" class="login_form" :rules="rules">
        <el-form-item class="input_item" prop="userName">
          <el-icon>
            <User />
          </el-icon>
          <el-input v-model="form.userName" placeholder="請輸入使用者名稱" />
        </el-form-item>
        <el-form-item class="input_item" prop="userPassword">
          <el-icon>
            <Setting />
          </el-icon>
          <el-input
            v-model="form.userPassword"
            type="password"
            placeholder="請輸入密碼"
            show-password
          />
        </el-form-item>
        <el-button type="primary" @click="handleLogin">送出</el-button>
      </el-form>
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
    // top: 6px;
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
    text-indent: 32px;
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
