<template>
    <div>
        <n-space>
            <n-button>Default</n-button>
            <n-button type="tertiary">
                Tertiary
            </n-button>
            <n-button type="primary">
                Primary
            </n-button>
            <n-button type="info">
                Info
            </n-button>
            <n-button type="success">
                Success
            </n-button>
            <n-button type="warning">
                Warning
            </n-button>
            <n-button type="error">
                Error
            </n-button>
        </n-space>
    </div>
</template>

<style lang="scss">
.n-button--error-type {
    background-color: aqua;

    // .n-button__border {
    //     border-color: aqua;
    // }
}
</style>