<!--  -->
<script setup>
</script>


<template>
    <header class="header">
        <slot />
    </header>
</template>


<style scoped lang='scss'>
.header {
    padding: 10px;
    background-color: #222222;
    color: #fff;

    .title {
        font-size: clamp(20px, 1.5vw, 28px);
        font-weight: 700;
    }
}
</style>