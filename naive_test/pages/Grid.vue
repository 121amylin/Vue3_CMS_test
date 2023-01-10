<template>
    <div class="code">
        <mark>n-grid x-gap="12" :y-gap="8" :cols="4"</mark>
        <p>cols="2 400:4 600:6"</p>
        <p>cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen"</p>
        <div>
            width: 100%;<br />
            display: grid;<br />
            grid-template-columns: repeat(4, minmax(0px, 1fr));<br />
            gap: 8px 12px;
        </div>
        <mark>n-gi | n-grid-item :offset="1"</mark>
        <mark>n-grid-item span="0 400:1 600:2 800:3"</mark>
        <p> 0～400px：不显示<br>
            400～600px：占据空间 1<br>
            600～800px：占据空间 2<br>
            800px 以上：占据空间 3</p>
        <mark>n-grid-item span="0 m:1 l:2"</mark>
        <p>m 以下：不显示<br>
            m 到 l：占据空间 1<br>
            l 以上：占据空间 2</p>
        <mark>n-grid :x-gap="12" :y-gap="12" :cols="4" layout-shift-disabled</mark>
    </div>
    <n-grid x-gap="12" :cols="4">
        <n-gi>
            <div class="light-green" />
        </n-gi>
        <n-gi>
            <div class="green" />
        </n-gi>
        <n-gi>
            <div class="light-green" />
        </n-gi>
        <n-gi>
            <div class="green" />
        </n-gi>
    </n-grid>
</template>


<style scoped>
.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
}

.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
}
</style>