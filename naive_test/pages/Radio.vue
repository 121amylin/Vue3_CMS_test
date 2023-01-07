<script setup>
const checkedValue = ref(null)
const value = ref(null)
const value2 = ref(null)
const songs = [
    {
        value: "Rock'n'Roll Star",
        label: "Rock'n'Roll Star"
    },
    {
        value: "Shakermaker",
        label: "Shakermaker"
    },
    {
        value: "Live Forever",
        label: "Live Forever"
    },
    {
        value: "Up in the Sky",
        label: "Up in the Sky"
    },
    {
        value: "...",
        label: "..."
    }
].map((s) => {
    s.value = s.value.toLowerCase();
    console.log(s)
    return s;
})

const songs2 = [
    {
        value: "Rock'n'Roll Star",
        label: "Rock'n'Roll Star"
    },
    {
        value: "Shakermaker",
        label: "Shakermaker"
    },
    {
        value: "Live Forever",
        label: "Live Forever"
    },
    {
        value: "Up in the Sky",
        label: "Up in the Sky"
    },
    {
        value: "...",
        label: "...",
        disabled: true
    }
]

const handleChange = (e) => {
    checkedValue.value = e.target.value;
}
</script>


<template>
    <div>
        <n-radio size="large" :checked="checkedValue === 'Definitely Maybe'" value="Definitely Maybe" name="basic-demo"
            @change="handleChange">
            大：Definitely Maybe
        </n-radio>
        <n-radio size="medium" :checked="checkedValue === 'Be Here Now'" value="Be Here Now" name="basic-demo"
            @change="handleChange">
            中 ( 預設 )：Be Here Now
        </n-radio>
        <n-radio size="small" :checked="checkedValue === 'Be Here Now 2'" value="Be Here Now 2" :disabled="disabled"
            name="basic-demo" label="小:Be Here Now 2" @change="handleChange" />
        <n-divider />
        <n-radio-group v-model:value="value" name="radiogroup">
            <n-space>
                <n-radio v-for="song in songs" :key="song.value" :value="song.value">
                    {{ song.label }}
                </n-radio>
            </n-space>
        </n-radio-group>
        <n-divider />

        <n-space vertical>
            <n-radio-group v-model:value="value2" name="radiobuttongroup1">
                <n-radio-button v-for="song in songs2" :key="song.value" :value="song.value" :disabled="song.disabled"
                    :label="song.label" />
            </n-radio-group>

        </n-space>

    </div>

</template>


<style scoped lang='scss'>

</style>