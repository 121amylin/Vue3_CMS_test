<script setup>
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'
import { CheckmarkCircle } from '@vicons/ionicons5'
const message = useMessage()
const checked = ref(false)
const handleClose = () => {
  message.info('tag close')
}
const handleClick = () => {
  message.info('tag click')
}
</script>
<template>
  <div>
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
    <n-hr />
    <n-space>
      <n-tag closable @close="handleClose">
        爱在西元前
      </n-tag>
      <n-tag type="success" closable @close="handleClose">
        不该
      </n-tag>
      <n-tag type="warning" closable @close="handleClose">
        超人不会飞
      </n-tag>
      <n-tag type="error" closable @close="handleClose">
        手写的从前
      </n-tag>
      <n-tag type="info" closable @click="handleClick" @close="handleClose">
        哪里都是你
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag closable size="small" @close="handleClose">
        爱在西元前
      </n-tag>
      <n-tag type="warning" closable @close="handleClose">
        超人不会飞
      </n-tag>
      <n-tag type="info" closable size="large" @close="handleClose">
        哪里都是你
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag type="success" size="small" round closable @close="handleClose">
        不该
      </n-tag>
      <n-tag type="error" closable round @close="handleClose">
        手写的从前
      </n-tag>
      <n-tag type="error" closable size="large" round @close="handleClose">
        手写的从前
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag>
        Anyway.FM
        <template #avatar>
          <n-avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
        </template>
      </n-tag>
      <n-tag round :bordered="false">
        Anyway.FM
        <template #avatar>
          <n-avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
        </template>
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag :bordered="false">
        爱在西元前
      </n-tag>
      <n-tag :bordered="false" type="success">
        不该
      </n-tag>
      <n-tag :bordered="false" type="warning">
        超人不会飞
      </n-tag>
      <n-tag :bordered="false" type="error">
        手写的从前
      </n-tag>
      <n-tag :bordered="false" type="info">
        哪里都是你
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag closable disabled @close="handleClose">
        爱在西元前
      </n-tag>
      <n-tag type="success" closable disabled @close="handleClose">
        不该
      </n-tag>
      <n-tag type="warning" closable disabled @close="handleClose">
        超人不会飞
      </n-tag>
      <n-tag type="error" closable disabled @close="handleClose">
        手写的从前
      </n-tag>
      <n-tag type="info" closable disabled @close="handleClose">
        哪里都是你
      </n-tag>
    </n-space>
    <n-hr />
    <n-space>
      <n-tag v-model:checked="checked" checkable disabled>
        爱在西元前
      </n-tag>
      <n-tag v-model:checked="checked" checkable>
        不该
      </n-tag>
      <n-tag v-model:checked="checked" checkable>
        超人不会飞
      </n-tag>
      <n-tag v-model:checked="checked" checkable>
        手写的从前
      </n-tag>
      <n-tag v-model:checked="checked" checkable>
        哪里都是你
      </n-tag>
      <n-hr />
      <n-tag :color="{ color: '#ec9', textColor: '#595', borderColor: 'red' }">
        告别夜晚 等待天亮
      </n-tag>

    </n-space>
    <n-hr />
    <n-space>
      <n-tag type="success">
        Checked
        <template #icon>
          <n-icon :component="CheckmarkCircle" />
        </template>
      </n-tag>
      <n-tag round :bordered="false" type="success">
        Checked
        <template #icon>
          <n-icon :component="CheckmarkCircle" />
        </template>
      </n-tag>
    </n-space>
  </div>
</template>


<style scoped lang='scss'>

</style>