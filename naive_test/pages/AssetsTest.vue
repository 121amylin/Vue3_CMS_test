<script setup>
</script>


<template>
    <div class="assetsTest">
        <div class="area">
            <p><mark>/images/pic.jpg</mark> => OK (不要用)</p>
            <p><mark>@/images/pic.jpg</mark> => OK</p>
            <p><mark>@@/images/pic.jpg</mark> => OK</p>
            <p><mark>~/public/images/pic.jpg</mark> => OK</p>
            <p><mark>~~/public/images/pic.jpg</mark> => OK</p>
            <p><mark>public/images/pic.jpg</mark> => 圖片出不來，空白，不報錯</p>
            <p><mark>~/images/pic.jpg</mark> => 圖片出不來，報錯</p>
            <!-- <img src="/images/pic.jpg" alt=""> -->
            <!-- <img src="@/images/pic.jpg" alt=""> -->
            <!-- <img src="@@/images/pic.jpg" alt=""> -->
            <!-- <img src="~/public/images/pic.jpg" alt=""> -->
            <!-- <img src="~~/public/images/pic.jpg" alt=""> -->
            <!-- <img src="public/images/pic.jpg" alt=""> -->
            <!-- <img src="~/images/pic.jpg" alt=""> -->
        </div>
        <br>
        <hr>
        <br>
        <div class="area">
            <p><mark>/assets/images/pic.jpg</mark> => 圖片出不來，空白，不報錯</p>
            <p><mark>@/assets/images/pic.jpg</mark> => OK</p>
            <p><mark>@@/assets/images/pic.jpg</mark> => OK</p>
            <p><mark>~/assets/images/pic.jpg</mark> => OK</p>
            <p><mark>~~/assets/images/pic.jpg</mark> => OK</p>
            <p><mark>assets/images/pic.jpg</mark> => 圖片出不來，空白，不報錯</p>
            <!-- <img src="/assets/images/pic.jpg" alt=""> -->
            <!-- <img src="@/assets/images/pic.jpg" alt=""> -->
            <!-- <img src="@@/assets/images/pic.jpg" alt=""> -->
            <!-- <img src="~/assets/images/pic.jpg" alt=""> -->
            <!-- <img src="~~/assets/images/pic.jpg" alt=""> -->
            <!-- <img src="assets/images/pic.jpg" alt=""> -->
        </div>
    </div>
</template>


<style scoped lang='scss'>
.assetsTest {
    padding: 30px;
}

.area {
    padding: 24px;
    background-color: #eee;
}

img {
    max-width: 100%;
}
</style>