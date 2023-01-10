<script setup>
import { NIcon } from "naive-ui"
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";
const renderIcon = (icon) => {
    return () => {
        return h(NIcon, null, {
            default: () => h(icon)
        });
    };
}
const options = [
    {
        label: "用户资料",
        key: "profile",
        icon: renderIcon(UserIcon)
    },
    {
        label: "编辑用户资料",
        key: "editProfile",
        icon: renderIcon(EditIcon)
    },
    {
        label: "退出登录",
        key: "logout",
        icon: renderIcon(LogoutIcon)
    }
]
</script>


<template>
    <div>
        <ClientOnly>
            <n-dropdown :options="options">
                <n-button>用户资料</n-button>
            </n-dropdown>
        </ClientOnly>
    </div>
</template>


<style scoped lang='scss'>

</style>