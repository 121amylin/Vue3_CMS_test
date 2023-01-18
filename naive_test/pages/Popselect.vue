<script setup>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
const route = useRoute()

const message = useMessage();
const showPopover = ref(false)
const handleUpdateShow = (show) => {
    message.success(show ? "show" : "hide");
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-popover trigger="hover">
            <template #trigger>
                <n-button>悬浮</n-button>
            </template>
            <span>或许不想知道你的花园长得咋样</span>
        </n-popover>
        <n-hr></n-hr>
        <n-popover trigger="hover" :delay="500" :duration="500">
            <template #trigger>
                <n-button>延迟 500ms, 持续 500ms</n-button>
            </template>
            <span>
                Lately did you ever feel the pain In the morning rain as it soaks it to
                the bone
            </span>
        </n-popover>
        <n-hr></n-hr>
        <n-space>
            <n-popover placement="bottom" trigger="hover" @update:show="handleUpdateShow">
                <template #trigger>
                    <n-button>悬浮</n-button>
                </template>
                <span>我希望她们都是加州女孩</span>
            </n-popover>
            <n-popover placement="bottom" trigger="click" @update:show="handleUpdateShow">
                <template #trigger>
                    <n-button>点击</n-button>
                </template>
                <span>我希望她们都是加州女孩</span>
            </n-popover>
            <n-popover :show="showPopover" placement="bottom" trigger="manual" @update:show="handleUpdateShow">
                <template #trigger>
                    <n-button @click="showPopover = !showPopover">
                        点击
                    </n-button>
                </template>
                <span>我希望她们都是加州女孩</span>
            </n-popover>
        </n-space>
        <n-hr></n-hr>
        <n-popover width="trigger">
            <template #trigger>
                <n-button>使用触发元素的宽度</n-button>
            </template>
            This old town don't smell too pretty and I can feel the warning signs
            running around my mind
        </n-popover>
        <n-hr></n-hr>
        <n-popover trigger="click">
            <template #trigger>
                <n-button>插槽：提供这个接口是因为分割线不好写</n-button>
            </template>
            <template #header>
                <n-text strong depth="1">
                    下面就是分割线
                </n-text>
            </template>
            内容
            <template #footer>
                上面就是分割线
            </template>
        </n-popover>
        <n-hr></n-hr>
        <n-space>
            <n-popover trigger="hover">
                <template #trigger>
                    <n-button>悬浮</n-button>
                </template>
                <span>I wish they all could be California girls</span>
            </n-popover>
            <n-popover trigger="hover" :keep-alive-on-hover="false">
                <template #trigger>
                    <n-button>悬浮（忽略主体）</n-button>
                </template>
                <span>I wish they all could be California girls</span>
            </n-popover>
            <n-popover trigger="click">
                <template #trigger>
                    <n-button>点击</n-button>
                </template>
                <span>I wish they all could be California girls</span>
            </n-popover>
            <n-popover trigger="focus">
                <template #trigger>
                    <n-button>聚焦</n-button>
                </template>
                <span>I wish they all could be California girls</span>
            </n-popover>
            <n-popover trigger="manual" :show="showPopover">
                <template #trigger>
                    <n-button @click="showPopover = !showPopover">
                        手动
                    </n-button>
                </template>
                <span>I wish they all could be California girls</span>
            </n-popover>
        </n-space>
        <n-hr></n-hr>
        <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
                <n-button>不要箭头</n-button>
            </template>
            <span>没有箭头就是矩形了</span>
        </n-popover>
        <n-hr></n-hr>
        <n-hr></n-hr>
        <n-hr></n-hr>
        <n-hr></n-hr>
    </div>
</template>


<style scoped lang='scss'>

</style>