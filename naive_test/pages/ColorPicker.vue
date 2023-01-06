
<template>
    <div>
        <n-color-picker />
        <n-color-picker :actions="['clear']" />
        <n-color-picker disabled />
        <n-color-picker :show-alpha="false" />
        <n-color-picker size="small" />
        <n-color-picker size="large" />
        <n-color-picker :swatches="[
            '#FFFFFF',
            '#18A058',
            '#2080F0',
            '#F0A020',
            'rgba(208, 48, 80, 1)'
        ]" />
        <n-color-picker :modes="['rgb']" />
        <n-color-picker :modes="['hex']" />
        <n-color-picker :modes="['hsl']" />
        <n-color-picker :modes="['hsv']" />
        <n-color-picker :show-preview="true" />
    </div>
</template>


<style scoped lang='scss'>

</style>