<script >
import Carousel4 from "../components/Carousel4.vue";
export default {
    components: { Carousel4 },
    data() {
        return {
            data: [
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
            ]
        }
    }
}
</script>

<template>
    <main>
        <h4>Options API 寫法</h4>
        <a href="#">123</a>
        <Carousel4 :data="data"></Carousel4>

        <a href="#">123</a>
    </main>
</template>
