<script setup>
const checkedValue = ref(null)
const handleChange = (e) => {
    checkedValue.value = e.target.value;
}
</script>


<template>
    <div>
        <n-radio :checked="checkedValue === 'Definitely Maybe'" value="Definitely Maybe" name="basic-demo"
            @change="handleChange">
            Definitely Maybe
        </n-radio>
        <n-radio :checked="checkedValue === 'Be Here Now'" value="Be Here Now" name="basic-demo" @change="handleChange">
            Be Here Now
        </n-radio>
        <n-radio :checked="checkedValue === 'Be Here Now'" value="Be Here Now" :disabled="disabled" name="basic-demo"
            label=" Be Here Now" @change="handleChange" />
    </div>

</template>


<style scoped lang='scss'>

</style>