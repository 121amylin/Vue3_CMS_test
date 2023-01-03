<script setup>
</script>


<template>
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

        <n-space>
            <n-tag> 爱在西元前 </n-tag>
            <n-tag type="success">
                不该
            </n-tag>
            <n-tag type="warning">
                超人不会飞
            </n-tag>
            <n-tag type="error">
                手写的从前
            </n-tag>
            <n-tag type="info">
                哪里都是你
            </n-tag>
        </n-space>

        <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
    </n-space>
</template>


<style scoped lang='scss'>

</style>