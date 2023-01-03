<script setup>
import {
    useMessage
} from "naive-ui";

const formRef = ref(null);
const model = ref({
    username: null,
    password: null,
})
const rules = {
    username: [
        {
            required: true,
            message: "请输入帳號",
            validator(rule, value) {
                if (!value) {
                    return alert("需要帳號");
                } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
                    return alert("编码只能使用字母、数字");
                }
                return true;
            },
        }
    ],
    password: [
        {
            required: true,
            message: "请输入密码"
        }
    ]
}
const handlePasswordInput = () => {
    if (modelRef.value.reenteredPassword) {
        rPasswordFormItemRef.value?.validate({ trigger: "請輸入密碼" });
    }
}
const handleUsernameInput = () => {
    if (modelRef.value.reenteredPassword) {
        rPasswordFormItemRef.value?.validate({ trigger: "請輸入帳號" });
    }
}


const handleValidateButtonClick = (e) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success("验证成功");
        } else {
            console.log(errors);
            message.error("验证失败");
        }
    });
}
</script>


<template>
    <div>
        <n-form ref="formRef" :model="model" :rules="rules">
            <n-form-item path="password" label="密码">
                <n-input v-model:value="model.password" type="password" @input="handlePasswordInput"
                    @keydown.enter.prevent placeholder="請輸入密碼" />
            </n-form-item>
            <n-form-item path="username" label="帳號(只能使用中文、英文)">
                <n-input v-model:value="model.username" type="text" @input="handleUsernameInput" @keydown.enter.prevent
                    placeholder="請輸入帳號" />
            </n-form-item>
            <n-button round type="primary" @click="handleValidateButtonClick">
                验证
            </n-button>
        </n-form>
    </div>

</template>


<style scoped lang='scss'>

</style>

<!-- [vue3 + naiveUI 的常用表单验证：正则验证](https://juejin.cn/post/7119047987854049317) -->
<!-- [範例___naive ui 表单 form 自定义规则判断 手机号，身份证号码](https://blog.csdn.net/m0_64409387/article/details/126456983) -->
<!-- [官網DOME](https://www.naiveui.com/zh-CN/os-theme/components/form#custom-rule.vue) -->
