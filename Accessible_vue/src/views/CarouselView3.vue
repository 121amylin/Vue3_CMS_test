<script setup>
import Carousel3 from "../components/Carousel3.vue";

const data = [
    {
        id: 2,
        descript: "圖片一",
        src: "https://picsum.photos/1920/300?random=3",
        link: "https://www.google.com/",
        isShow: true,
    },
    {
        id: 3,
        descript: "圖片二",
        src: "https://picsum.photos/1920/300?random=4",
        link: "https://www.google.com/",
        isShow: true,
    },
    {
        id: 4,
        descript: "圖片三",
        src: "https://picsum.photos/1920/300?random=5",
        link: "https://www.google.com/",
        isShow: true,
    },
];
</script>

<template>
    <main>
        <h4>Composition API 寫法</h4>
        <a href="#">123</a>
        <Carousel3 :data="data"></Carousel3>

        <a href="#">123</a>
    </main>
</template>
