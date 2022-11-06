<script setup>
  const boxWidth="100px"
</script>
<template>
  <div class="box">
  </div>
</template>

<style lang="scss">
.box{
  width: v-bind(boxWidth);
  height: 100px;
  background-color: red;
  margin-bottom: 10px;
}
</style>