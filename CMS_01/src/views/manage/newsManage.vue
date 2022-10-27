<!-- <template>
   newsManage
</template> -->


<template>
   {{currentPage1}}


   <div class="demo-pagination-block">
      <div class="demonstration">Total item count</div>
      <el-pagination v-model:currentPage="currentPage1" :page-size="100" :small="small" :disabled="disabled"
         :background="background" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange"
         @current-change="handleCurrentChange" />
   </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const currentPage1 = ref(5)

const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
   console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
   currentPage1.value=val
   console.log(`current page: ${val}`)
}
</script>
 
<style scoped>
.demo-pagination-block+.demo-pagination-block {
   margin-top: 10px;
}

.demo-pagination-block .demonstration {
   margin-bottom: 16px;
}
</style>
 