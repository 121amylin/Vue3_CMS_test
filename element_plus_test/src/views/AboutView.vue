<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>


<template>
  <!-- <el-skeleton />
  <br /> -->


  <!-- <el-skeleton style="--el-skeleton-circle-size: 100px">
    <template #template>
      <el-skeleton-item />
      <el-skeleton-item />
      <el-skeleton-item variant="circle" />

      <el-skeleton-item variant="p" style="width: 50%" />
      <div style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          ">
        <el-skeleton-item variant="text" style="margin-right: 16px" />
        <el-skeleton-item variant="text" style="width: 30%" />
        </div>
    </template>
  </el-skeleton> -->

  <!-- <el-breadcrumb separator="->"> -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="#">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>


  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>


  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>


  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>
  <hr>

  <el-backtop :right="30" :bottom="30" />

  <el-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </el-backtop>
</template>


<!-- <template>
  <el-skeleton :rows="2" animated  />
</template> -->


<style scoped lang='scss'>

</style>