<script setup>
import Modal from '../components/Modal.vue'
const modalList = [
    { id: 0, title: "標題一", content: '內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一' },
    { id: 0, title: "標題二", content: '內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二' }
]


</script>


<template>
    <div>
        <Modal v-for="item in modalList" :key="item.id" :modal_title="item.title" :modal_content="item.content"></Modal>
    </div>
</template>


