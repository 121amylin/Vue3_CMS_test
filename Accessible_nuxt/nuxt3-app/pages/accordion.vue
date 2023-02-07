<script setup>
const data = [
    { id: 0, title: "標題一", content: '內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一' },
    { id: 0, title: "標題二", content: '內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二' }
]
const isShowItem = ref(0)
const changeItemHandle = (index) => {
    isShowItem.value = index
}
</script>


<template>
    <div>
        <accordionCompontent v-for="(item, index) in data" :key="item.id" :title="item.title" :content="item.content"
            :isShowItem="isShowItem" :index="index" @click="changeItemHandle(index)">
        </accordionCompontent>
    </div>
</template>


<style scoped lang='scss'>

</style>