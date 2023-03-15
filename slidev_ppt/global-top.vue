<template>
    <footer v-if="$slidev.nav.currentLayout == 'default'" class="absolute bottom-0 left-0 right-0 p-2">
        <span class="pptname">{{ $slidev.configs.title }}</span>
        <span>，第{{ $slidev.nav.currentPage }}頁</span>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    text-align: right;
    padding-right: 22px;
    padding-bottom: 16px;
        letter-spacing: 2px;

    .pptname {
        margin-right: 2px;
        background-color: #e2e2e2;
        padding: 0 10px 1px 10px;
        border-radius: 50px;
        font-size: 14px;
    }

}
</style>