<script setup>
import Carousel2 from "../components/Carousel2.vue";

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
        <a href="#">123</a>
        <Carousel2 :data="data"></Carousel2>

        <a href="#">123</a>
    </main>
</template>
