<script setup>
const data = [
    {
        id: 0,
        title: "標題一",
        content: "內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一內容一",
        isShow: true,
        html: '',
        link: []
    },
    {
        id: 1,
        title: "標題二",
        content: "內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二內容二",
        isShow: true,
        html: '',
        link: [
            {
                id: 0,
                title: "連結標題三",
                url: 'https://bootstrap5.hexschool.com/docs/5.1/getting-started/introduction/'
            },
            {
                id: 0,
                title: "連結標題四",
                url: 'https://translate.google.com.tw/?hl=zh-TW&sl=en&tl=zh-TW&text=Whitespace%20was%20expected.&op=translate'
            }
        ]
    },
    {
        id: 2,
        title: "標題三",
        content: "內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三內容三",
        isShow: true,
        html: ` <h3>lorem</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, tempore in. Porro odio illo voluptas? Voluptatum sit expedita adipisci maiores? Facere aliquam nemo est maiores aperiam molestiae quasi accusamus nesciunt?</p>`,
        link: [
            {
                id: 0,
                title: "連結標題一",
                url: 'https://bootstrap5.hexschool.com/docs/5.1/getting-started/introduction/'
            },
            {
                id: 0,
                title: "連結標題二",
                url: 'https://translate.google.com.tw/?hl=zh-TW&sl=en&tl=zh-TW&text=Whitespace%20was%20expected.&op=translate'
            }
        ]
    },
    {
        id: 3,
        title: "標題四",
        content: "內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四內容四",
        isShow: false,
        html: '',
        link: []
    },
]


// const isShowItem = ref(0)
</script>

<template>
    <div>
        <Tabs :data="data">
            <div v-for="(item, index) in data" :key="index">{{ item.title }}</div>
        </Tabs>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio vel ducimus laborum, ex repellat quidem autem dolore iure alias ad id, molestias quo rerum sapiente eaque distinctio, a deserunt consectetur.</p>
        <a href="#" >頁尾區塊(頁籤下方一定要有個連結，不然操作會中斷)</a>
    </div>
</template>


<style scoped lang='scss'>

</style>