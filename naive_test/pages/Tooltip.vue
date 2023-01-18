<script setup>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
const route = useRoute()
const showPopover = ref(false)
const handleUpdateShow = (show) => {
    message.success(show + "");
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-tooltip trigger="hover">
            <template #trigger>
                <n-button> 鸭子 </n-button>
            </template>
            如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
        </n-tooltip>
        <n-hr></n-hr>
        <n-space>
            <n-tooltip placement="bottom" trigger="hover" @update:show="handleUpdateShow">
                <template #trigger>
                    <n-button> 悬浮 </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
            <n-tooltip placement="bottom" trigger="click" @update:show="handleUpdateShow">
                <template #trigger>
                    <n-button> 点击 </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
            <n-tooltip :show="showPopover" trigger="manual" placement="bottom">
                <template #trigger>
                    <n-button @click="showPopover = !showPopover">
                        手动（不会有事件发出来）
                    </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
        </n-space>
        <n-hr></n-hr>
        <n-space>
            <n-tooltip :style="{ maxWidth: '400px' }" trigger="click">
                <template #trigger>
                    <n-button> 加州女孩 </n-button>
                </template>
                我希望她们都是加州女孩，我希望她们都是加州女孩，我希望她们都是加州女孩
            </n-tooltip>
            <n-tooltip :style="{ maxWidth: '400px' }" trigger="click">
                <template #trigger>
                    <n-button> 加州女孩 </n-button>
                </template>
                我希望...
            </n-tooltip>
        </n-space>
        <n-hr></n-hr>
        <n-space>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <n-button> 悬浮 </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
            <n-tooltip placement="bottom" trigger="click">
                <template #trigger>
                    <n-button> 点击 </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
            <n-tooltip :show="showPopover" placement="bottom">
                <template #trigger>
                    <n-button @click="showPopover = !showPopover">
                        手动
                    </n-button>
                </template>
                <span> I wish they all could be California girls </span>
            </n-tooltip>
        </n-space>
        <n-hr></n-hr>
        <n-tooltip placement="top-start" trigger="hover">
            <template #trigger>
                <n-button> 箭頭位置：上边、开始 </n-button>
            </template>
            哇哦，Awesome！
        </n-tooltip>
        <n-hr></n-hr>
        <n-tooltip :show-arrow="false" trigger="hover">
            <template #trigger>
                <n-button>不要箭头</n-button>
            </template>
            和 Popover 一样
        </n-tooltip>
    </div>
</template>


<style scoped lang='scss'>

</style>