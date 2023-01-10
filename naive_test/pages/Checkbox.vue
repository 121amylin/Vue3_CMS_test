<script setup>
import { useMessage } from "naive-ui";
const message = useMessage()
const value = ref(false)
const value2 = ref(false)
const value3 = ref(false)
const disabled = ref(true)
const cities = ref(null)
const indeterminate = ref(false)
const checkedRef = ref(false)
const citiesRef = ref(null)
const checkboxInstRef = ref(null);
const handleCheckedChange = (checked) => {
  checkedRef.value = checked;
  message.info(JSON.stringify(checked));
}
const handleUpdateValue = (value) => {
  citiesRef.value = value;
  message.info(JSON.stringify(value));
}
const handleClick = () => {
  checkboxInstRef.value?.focus();
  setTimeout(() => {
    checkboxInstRef.value?.blur();
  }, 1000);
}

const handleUpdateChecked = (value) => {
  message.info(String(value));
}
</script>


<template>
  <div>
    <p>value：{{ value }}</p>
    <n-space item-style="display: flex;" align="center">
      <n-checkbox size="small" v-model:checked="value">
        复选框
      </n-checkbox>
      <n-checkbox size="medium" v-model:checked="value" />
      <n-checkbox size="large" v-model:checked="value" :disabled="disabled">
        复选框
      </n-checkbox>
      <n-button size="small" @click="disabled = !disabled">
        禁用
      </n-button>
    </n-space>
    <n-divider />
    <n-space item-style="display: flex;" align="center">
      <n-checkbox size="small" label="小" />
      <n-checkbox label="預設：中" />
      <n-checkbox size="medium" label="中" />
      <n-checkbox size="large" label="大" />
    </n-space>
    <n-divider />
    <p>cities：{{ cities }}</p>
    <n-checkbox-group v-model:value="cities">
      <n-space item-style="display: flex;">
        <n-checkbox value="Beijing" label="北京" />
        <n-checkbox value="Shanghai" label="上海" />
        <n-checkbox value="Guangzhou" label="广州" />
        <n-checkbox value="Shenzen" label="深圳" />
      </n-space>
    </n-checkbox-group>
    <n-divider />
    <n-space item-style="display: flex;" align="center">
      <n-checkbox v-model:checked="value2" :indeterminate="indeterminate">
        复选框
      </n-checkbox>
      <n-checkbox v-model:checked="value2" :indeterminate="indeterminate" />
      <n-checkbox v-model:checked="value2" :indeterminate="indeterminate" disabled />
      <n-button size="small" @click="value2 = !value2">
        选中
      </n-button>
      <n-button size="small" @click="indeterminate = !indeterminate">
        部分选中
      </n-button>
    </n-space>
    <n-divider />
    <p>checkedRef：{{ checkedRef }}</p>
    <n-space item-style="display: flex;" vertical>
      <n-checkbox :checked="checkedRef" label="事件" @update:checked="handleCheckedChange" />
      <n-checkbox-group :value="citiesRef" @update:value="handleUpdateValue">
        <n-space item-style="display: flex;" align="center">
          <n-checkbox value="Beijing" label="北京" />
          <n-checkbox value="Shanghai" label="上海" />
          <n-checkbox value="Guangzhou" label="广州" />
          <n-checkbox value="Shenzen" label="深圳" />
        </n-space>
      </n-checkbox-group>
    </n-space>
    <n-divider />
    <!-- <p>{{ checkboxInstRef }}</p> -->
    <n-space item-style="display: flex; align-items: center;">
      <n-button @click="handleClick">
        聚焦，一秒后失效
      </n-button>
      <n-checkbox ref="checkboxInstRef" />
    </n-space>
    <n-divider />
    <n-checkbox-group>
      <n-grid :y-gap="12" :cols="3">
        <n-gi>
          <n-checkbox value="Pushes Open" label="推开" />
        </n-gi>
        <n-gi>
          <n-checkbox value="The Window" label="窗户" />
        </n-gi>
        <n-gi>
          <n-checkbox value="And Raises" label="举起" />
        </n-gi>
        <n-gi>
          <n-checkbox value="The Spyglass" label="望远镜" />
        </n-gi>
      </n-grid>
    </n-checkbox-group>
    <n-divider />
    <n-space align="center" item-style="display: flex;">
      <n-checkbox :checked="value3">
        复选框
      </n-checkbox>
      <n-switch v-model:value="value3" />
    </n-space>
    <n-divider />
    <n-checkbox checked-value="周末加班" unchecked-value="周末支持一下" @update:checked="handleUpdateChecked">
      抉择时刻
    </n-checkbox>

  </div>
</template>


<style scoped lang='scss'>

</style>