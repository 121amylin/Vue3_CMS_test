<script setup>
import { defineComponent, ref, computed } from "vue";
const route = useRoute()
const value = ref("")
const options = computed(() => {
  return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
    const prefix = value.value.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix
    };
  });
})
</script>


<template>
  <div>
    <h1>{{ route.name }}</h1>
    <n-auto-complete  clear-after-select v-model:value="value" :input-props="{
      autocomplete: 'disabled'
    }" :options="options" placeholder="邮箱" />
  </div>
</template>


<style scoped lang='scss'>

</style>