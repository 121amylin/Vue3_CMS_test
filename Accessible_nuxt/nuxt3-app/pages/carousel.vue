<script setup>
const data = [{
    id: 0,
    descript: '圖片一',
    src: "https://picsum.photos/1920/300?random=1",
    link: '',
    isShow: false
}, {
    id: 1,
    descript: '圖片二',
    src: "https://picsum.photos/1920/300?random=2",
    link: '',
    isShow: false
}, {
    id: 2,
    descript: '圖片三',
    src: "https://picsum.photos/1920/300?random=3",
    link: 'https://www.google.com/',
    isShow: true
}, {
    id: 3,
    descript: '',
    src: "https://picsum.photos/1920/300?random=4",
    link: '',
    isShow: true
}, {
    id: 4,
    descript: '圖片五',
    src: "https://picsum.photos/1920/300?random=5",
    link: '',
    isShow: true
}]

</script>

<template>
    <main>
        <carouselCompontent :data="data"></carouselCompontent>
    </main>
</template>

