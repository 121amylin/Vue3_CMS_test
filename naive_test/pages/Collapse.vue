<script setup>
</script>


<template>
    <div style="max-width:300px"><n-collapse arrow-placement="right" accordion :default-expanded-names="['2', '3']">
            <n-collapse-item title="青铜" name="1">
                <div>可以</div>
            </n-collapse-item>
            <n-collapse-item title="白银" name="2">
                <div>很好</div>
            </n-collapse-item>
            <n-collapse-item title="黄金" name="3">
                <template #header-extra>
                    本周工作日工作时长：58 小时
                </template>
                <div>真棒</div>
            </n-collapse-item>
            <n-collapse-item title="嵌套" name="4">
                <n-collapse>
                    <n-collapse-item title="常亮" name="1">
                        <div>通过</div>
                    </n-collapse-item>
                    <n-collapse-item title="闪烁" name="2">
                        <div>快速通过</div>
                    </n-collapse-item>
                </n-collapse>
            </n-collapse-item>
            <n-collapse-item title="禁用" name="5" disabled>
                <div>禁用</div>
            </n-collapse-item>
        </n-collapse></div>
</template>


<style scoped lang='scss'>

</style>