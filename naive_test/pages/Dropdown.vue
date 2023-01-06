<script setup>
import { useMessage } from "naive-ui";
const message = useMessage();
const options = [
    {
        label: "滨海湾金沙，新加坡",
        key: "marina bay sands",
        disabled: true
    },
    {
        label: "布朗酒店，伦敦",
        key: "brown's hotel, london"
    },
    {
        label: "亚特兰蒂斯巴哈马，拿骚",
        key: "atlantis nahamas, nassau"
    },
    {
        label: "比佛利山庄酒店，洛杉矶",
        key: "the beverly hills hotel, los angeles"
    }
]
const handleSelect = (key) => {
    message.info(String(key));
}
const handleClick = () => {
    showDropdown.value = !showDropdown.value;
}
const showDropdown = ref(false)
</script>


<template>
    <div>
        <ClientOnly>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect" :show-arrow="true" size="huge">
                <n-button>找个地方休息</n-button>
            </n-dropdown>
        </ClientOnly>
        <hr>
        <ClientOnly>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect" size="small">
                <n-button>懸浮</n-button>
            </n-dropdown>
        </ClientOnly>
        <hr>
        <ClientOnly>
            <n-dropdown trigger="click" :options="options" @select="handleSelect" size="medium">
                <n-button>點擊</n-button>
            </n-dropdown>
        </ClientOnly>
        <hr>
        <ClientOnly>
            <n-dropdown :show="showDropdown" :options="options" @select="handleSelect" size="large">
                <n-button @click="handleClick">
                    自定義觸發條件
                </n-button>
            </n-dropdown>
        </ClientOnly>

    </div>
</template>


<style scoped lang='scss'>

</style>