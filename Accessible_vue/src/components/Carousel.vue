<script setup>

import { ref } from 'vue'
// 元件外部接口 ==============================
const data = [{
    id: 0,
    descript: '圖片一',
    src: "https://picsum.photos/1920/300?random=1",
    link: 'javascript;:',
    isShow: false
}, {
    id: 1,
    descript: '圖片二',
    src: "https://picsum.photos/1920/300?random=2",
    link: 'javascript;:',
    isShow: false
}, {
    id: 2,
    descript: '圖片三',
    src: "https://picsum.photos/1920/300?random=3",
    link: 'javascript;:',
    isShow: true
}, {
    id: 3,
    descript: '圖片四',
    src: "https://picsum.photos/1920/300?random=4",
    link: 'javascript;:',
    isShow: true
}, {
    id: 4,
    descript: '圖片五',
    src: "https://picsum.photos/1920/300?random=5",
    link: 'javascript;:',
    isShow: true
}]

const controller = {
    autoPlay: true,
    haveDotBtn: true,
    haveArror: true,
}

// 元件內部運作 ==============================
let showData = []
data.forEach(item => {
    if (item.isShow) {
        showData.push(item)
    }
})
let nowShowID = ref(0)

const cutoverItemHandle = (num, type) => {
    if (type === "arr") {
        if (num === 1) {
            nowShowID.value = Math.min(showData.length - 1, nowShowID.value + 1)
        } else {
            nowShowID.value = Math.max(0, nowShowID.value - 1)
        }
    } else {
        nowShowID.value = num
    }
}

const autoPlayHandle = () => {
    if (controller.autoPlay) {
        setInterval(() => {
            if (nowShowID.value >= showData.length - 1) {
                nowShowID.value = 0
            } else {
                nowShowID.value++
            }
        }, 5000)
    }
}
autoPlayHandle()
</script>


<template>
    <div>
        <div class="carousel_compontent">
            <div class="carousel_box" :style="{ height: '300px' }">
                <div class="carousel_item" v-for="(item, index) in showData" :key="item.id"
                    :class="[index === nowShowID ? 'active' : '']">
                    <a :href="item.link"><img :src="item.src" alt="">
                        <p>{{ item.descript }}</p>
                    </a>
                </div>
            </div>
            <div v-if="controller.haveDotBtn" class="dotBtn_box">
                <a href="#" @click="cutoverItemHandle(index)" v-for="(item, index) in showData" :key="item.id"></a>
            </div>

            <div v-if="controller.haveArror" class="arrowBtn_box">
                <a href="#" class="gg-arrow-left" @click="cutoverItemHandle(-1, 'arr')"></a>
                <a href="#" class="gg-arrow-right" @click="cutoverItemHandle(1, 'arr')"></a>
            </div>
        </div>
    </div>
</template>


<style scoped lang='scss'>
.carousel_compontent {
    position: relative;

    .dotBtn_box {
        display: flex;
        position: absolute;
        transform: translateX(-50%);
        bottom: 16px;
        left: 50%;

        a {
            display: inline-block;
            width: clamp(12px, 1vw, 20px);
            height: clamp(12px, 1vw, 20px);
            margin: 8px;
            background-color: aqua;
            border-radius: 50%;
        }
    }

    .arrowBtn_box {
        display: flex;
        position: absolute;
        justify-content: space-between;
        width: calc(100% - 40px);
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
}



.carousel_box {
    display: flex;
    width: 100%;
    overflow: hidden;

    .carousel_item {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 0;
        opacity: 0;
        position: absolute;

        &.active {
            opacity: 1;
            transition: opacity 1.5s;
        }

        a {
            display: block;
            position: relative;
        }

        p {
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            font-size: clamp(32px, 4vw, 80px);
            font-weight: 700;
            color: #fff;
            text-shadow: 0 0 20px rgba(0, 0, 0, .6);
            letter-spacing: clamp(10px, 1vw, 20px);
        }
    }
}

// 右側箭頭
.gg-arrow-left {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px
}

.gg-arrow-left::after,
.gg-arrow-left::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px
}

.gg-arrow-left::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 7px
}

.gg-arrow-left::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: currentColor
}

// 左側箭頭
.gg-arrow-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px
}

.gg-arrow-right::after,
.gg-arrow-right::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 3px
}

.gg-arrow-right::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 7px
}

.gg-arrow-right::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: currentColor
}
</style>
