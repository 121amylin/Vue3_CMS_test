<script setup>
import { computed, defineComponent, ref } from "vue";
import {
    createDiscreteApi,
    darkTheme,
    lightTheme
} from "naive-ui";

const themeRef = ref("light");
const configProviderPropsRef = computed(() => ({
    theme: themeRef.value === "light" ? lightTheme : darkTheme
}));

const { message, notification, dialog, loadingBar } = createDiscreteApi(
    ["message", "dialog", "notification", "loadingBar"],
    {
        configProviderProps: configProviderPropsRef
    }
);
const theme = themeRef
const handleThemeChangeClick = () => {
    if (themeRef.value === "light")
        themeRef.value = "dark";
    else
        themeRef.value = "light";
}
const handleMessageTriggerClick = () => {
    message.info("Message");
}
const handleNotificationTriggerClick = () => {
    notification.create({ title: "Notification" });
}
const handleDialogTriggerClick = () => {
    dialog.info({ title: "Dialog" });
}
const handleLoadingBarTriggerClick = () => {
    loadingBar.start();
    setTimeout(() => {
        loadingBar.finish();
    }, 1e3);
}
</script>


<template>
    <n-space>
        <n-button @click="handleThemeChangeClick">
            theme: {{ theme }}
        </n-button>
        <n-button @click="handleMessageTriggerClick">
            message
        </n-button>
        <n-button @click="handleNotificationTriggerClick">
            notification
        </n-button>
        <n-button @click="handleDialogTriggerClick">
            dialog
        </n-button>
        <n-button @click="handleLoadingBarTriggerClick">
            loadingBar
        </n-button>
    </n-space>
</template>


<style scoped lang='scss'>

</style>