<script setup>
import { defineComponent, ref } from "vue";
const route = useRoute()
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-p style="color:red">Popover 和 tooltip 的差別在於 Popover 可以自定義更多內容；tooltip 只能是純文字(p、h標籤也不行)</n-p>
        <n-p>Popover 在內容周圍彈出一些隱藏的信息。 Popover 裡面沒什麼內置樣式，在裡面填什麼主要靠你了。</n-p>
        <n-p>如果你只想展示一些基本的文本內容，使用 Tooltip。</n-p>
        <n-h3>【Popover】</n-h3>
        <n-popover trigger="hover">
            <template #trigger>
                <n-button>悬浮</n-button>
            </template>

            <n-h1>h1</n-h1>
            <n-p>如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。</n-p>
        </n-popover>

        <n-h3>【Tooltip】</n-h3>
        <n-tooltip trigger="hover">
            <template #trigger>
                <n-button> 鸭子 </n-button>
            </template>
            <n-h1>h1</n-h1>
            <n-p>如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。</n-p>
            如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
        </n-tooltip>
        <n-hr></n-hr>
        <n-h3>【插巢】</n-h3>
        <n-popover trigger="click">
            <template #trigger>
                <n-button>提供这个接口是因为分割线不好写</n-button>
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
        <n-h3>【觸發元素的寬度：popover】</n-h3>

        <n-popover width="trigger">
            <template #trigger>
                <n-button>I would like to leave this city</n-button>
            </template>
            This old town don't smell too pretty and I can feel the warning signs
            running around my mind
        </n-popover>

        <n-hr></n-hr>
        <n-h3>【自訂樣式&卷軸屬性:scrollable】</n-h3>
        <n-p style="color:red">除了高與寬，其與樣式設置在 style 或 content-style 都可以</n-p>
        <n-popover style="max-height: 240px;" content-style="padding: 0;background-color: #999;" trigger="click"
            scrollable>
            <template #trigger>
                <n-button>可滚动 & 无 padding</n-button>
            </template>
            演员失业 电缆失窃<br>
            共享富裕 共享恐惧<br>
            东方睡衣 涌上街头<br>
            街头嘈杂 公共聋哑<br>
            紧急换电缆 循环追捕令<br>
            紧急换电缆 循环追捕令<br>
            我有迷魂 额头滚烫<br>
            我有迷魂 人间明暗<br>
            鸟兽暗语 危险消息<br>
            自然友谊 自然躲避<br>
            西郊有密林 助君出重围<br>
            西郊有密林 助君出重围
        </n-popover>
    </div>
</template>


<style scoped lang='scss'>

</style>