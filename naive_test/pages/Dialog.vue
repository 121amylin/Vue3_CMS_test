<script setup>
import { defineComponent, ref } from "vue";
import { useMessage, useDialog } from "naive-ui";
const route = useRoute()
const message = useMessage()
const dialog = useDialog()
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1e3));
const countDown = (second) => `倒计时 ${second} 秒`;
const handleConfirm = () => {
    dialog.warning({
        title: "警告",
        content: "你确定？",
        positiveText: "确定",
        negativeText: "不确定",
        onPositiveClick: () => {
            message.success("确定");
        },
        onNegativeClick: () => {
            message.error("不确定");
        }
    });
}
const handleSuccess = () => {
    dialog.success({
        title: "成功",
        content: "厉害",
        positiveText: "哇",
        onPositiveClick: () => {
            message.success("耶！");
        }
    });
}
const handleError = () => {
    dialog.error({
        title: "错误",
        content: "错了",
        positiveText: "啊",
        onPositiveClick: () => {
            message.success("我就知道");
        }
    })
}

const handleNegativeClick = () => {
    message.warning("取消");
}
const handlePositiveClick = () => {
    message.success("确认");
}

const handleClick = () => {
    const d = dialog.success({
        title: "异步",
        content: "点击，倒计时 3 秒",
        positiveText: "确认",
        onPositiveClick: () => {
            d.loading = true;
            return new Promise((resolve) => {
                sleep().then(() => {
                    d.content = countDown(2);
                    return sleep();
                }).then(() => {
                    d.content = countDown(1);
                    return sleep();
                }).then(() => {
                    d.content = countDown(0);
                }).then(resolve);
            });
        }
    });
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-p>
            點擊遮罩：maskClosable | onMaskClick
        </n-p>
        <n-space>
            <n-button @click="handleConfirm">
                警告
            </n-button>
            <n-button @click="handleSuccess">
                成功
            </n-button>
            <n-button @click="handleError">
                错误
            </n-button>
        </n-space>
        <br><br>
        <n-space>
            <n-dialog bordered="true" title="确认" content="你确定" negative-text="不确认" positive-text="确认"
                @positive-click="handlePositiveClick" @negative-click="handleNegativeClick" />
        </n-space>
        <br><br>
        <n-space>
            <n-button @click="handleClick">
                成功
            </n-button>
        </n-space>
    </div>
</template>


<style scoped lang='scss'>

</style>