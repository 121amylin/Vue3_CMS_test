<script setup>
import { NIcon } from "naive-ui";
import { CashOutline as CashIcon } from '@vicons/ionicons5'


const options = [
    {
        type: "group",
        label: "主角和吃的",
        key: "main",
        children: [
            {
                label: "杰·盖茨比",
                key: "jay gatsby"
            },
            {
                label: "黛西·布坎南",
                key: "daisy buchanan"
            },
            {
                label: "尼克·卡拉威",
                key: "nick carraway"
            },
            {
                label: "吃的",
                key: "food",
                children: [
                    {
                        label: "鸡肉",
                        key: "chicken"
                    },
                    {
                        label: "牛肉",
                        key: "beef"
                    }
                ]
            }
        ]
    }
]

const renderDropdownLabel = (option) => {
    if (option.type === "group") {
        return option.label;
    }
    return h(
        "a",
        {
            href: "",
            target: "_blank"
        },
        {
            default: () => option.label
        }
    );
}
const renderDropdownIcon = () => {
    return h(NIcon, null, {
        default: () => h(CashIcon)
    });
}
</script>


<template>
    <div>
        <ClientOnly>
            <n-dropdown :options="options" placement="bottom-start" trigger="click" :render-label="renderDropdownLabel"
                :render-icon="renderDropdownIcon">
                <n-button>我是批量渲染</n-button>
            </n-dropdown>
        </ClientOnly>
    </div>
</template>


<style scoped lang='scss'>

</style>