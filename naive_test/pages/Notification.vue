<script setup>
import { h, defineComponent, ref } from "vue";
import { useNotification, useMessage, NButton, NAvatar } from "naive-ui";
const route = useRoute()

const message = useMessage();
const notification = useNotification();
const index = ref(0);
const handleClick1 = () => {
    notification.create({
        title: "Wouldn't it be Nice",
        description: "From the Beach Boys",
        content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
        meta: "2019-5-27 15:11",
        avatar: () => h(NAvatar, {
            size: "small",
            round: true,
            src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        }),
        onAfterLeave: () => {
            message.success("Wouldn't it be Nice");
        }
    });
}
const handleClick2 = () => {
    let markAsRead = false;
    const n = notification.create({
        title: "Satisfaction",
        content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
        meta: "2019-5-27 15:11",
        action: () => h(
            NButton,
            {
                text: true,
                type: "primary",
                onClick: () => {
                    markAsRead = true;
                    n.destroy();
                }
            },
            {
                default: () => "已读"
            }
        ),
        onClose: () => {
            if (!markAsRead) {
                message.warning("请设为已读");
                return false;
            }
        }
    });
}

const NotificationButton = defineComponent({
    setup() {
        const notification = useNotification();
        const index = ref(0);
        return {
            notification,
            index
        };
    },
    render() {
        return h(
            NButton,
            {
                onClick: () => {
                    this.index++;
                    this.notification.info({
                        title: `通知框序号: ${this.index}`,
                        content: "你可以限制通知框的数量"
                    });
                }
            },
            { default: () => "最多允许 3 个通知" }
        );
    }
});

</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-p>不可關閉，設置在 script 裡，建置時候的參數 closable: false</n-p>
        <n-space>
            <n-button @click="handleClick1">
                Wouldn't it be Nice
            </n-button>
            <n-button @click="handleClick2">
                Satisfaction
            </n-button>
        </n-space>

        <n-p>數量限制，設置在 template 的 placement='top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-left' | 'bottom
            -right'</n-p>
        <n-p>彈出位置，設置在 template 的 :max="3"</n-p>
        <n-p style="color:red">預設就有卷軸效果</n-p>
        <n-notification-provider :max="3" placement='top'>
            <notification-button />
        </n-notification-provider>
        <n-p style="color:red">可以直接創造 notification，也可以指定類型。
            notification.create | info | success | warning | error </n-p>
    </div>
</template>


<style scoped lang='scss'>

</style>