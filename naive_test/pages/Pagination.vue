<script setup>
const route = useRoute()

const page = ref(2)
const pageSize = ref(20)
const pageSizes = [
    {
        label: '10 每页',
        value: 10
    },
    {
        label: '20 每页',
        value: 20
    },
    {
        label: '30 每页',
        value: 30
    },
    {
        label: '40 每页',
        value: 40
    }
]

</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <!-- <n-pagination v-model:page="page" :page-count="100" /> -->
        <!-- <n-pagination v-model:page="page" :page-count="100" simple /> -->
        <!-- <n-pagination :item-count="201" :page-sizes="[10, 20, 30, 40]" show-size-picker /> -->

        <!-- <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="100" show-size-picker
            :page-sizes="pageSizes" /> -->
        <n-pagination :display-order="['pages', 'quick-jumper', 'size-picker']" :page-count="100" show-quick-jumper
            show-size-picker />
    </div>
</template>


<style scoped lang='scss'>

</style>