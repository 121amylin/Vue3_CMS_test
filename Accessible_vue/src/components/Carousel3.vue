<script setup>
import { ref, defineProps, computed } from "vue";
// 元件外部接口 ==============================
const carousel_item = ref(null);

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    controller: {
        type: Object,
        default() {
            return {
                haveArror: true,
            };
        },
    },
});

const showNow = computed(() => {
    return props.data[nowShowID.value]
})


// 元件內部運作 ==============================
let showData = [];
props.data.forEach((item) => {
    if (item.isShow) {
        showData.push(item);
    }
});
let nowShowID = ref(0);
const cutoverItemHandle = async (num, type) => {
    if (type === "arr") {
        if (num === 1) {
            nowShowID.value = await Math.min(showData.length - 1, nowShowID.value + 1);
        } else {
            nowShowID.value = await Math.max(0, nowShowID.value - 1);
        }
    } else {
        nowShowID.value = num;
    }
    carousel_item.value.focus();
};

</script>

<template>
    <div>
        {{ showNow }}
        {{ nowShowID }}
        <div class="carousel_compontent">
            <div class="carousel_box" :style="{ height: '300px' }">
                <div class="carousel_item">
                    <a ref="carousel_item" :href="showNow.link" :title="`連結到${showNow.descript}`">
                        <img :src="showNow.src" :alt="showNow.descript" />
                    </a>

                    <p v-if="showNow.descript" aria-hidden="true">{{ showNow.descript }}</p>
                </div>
            </div>
            <div v-if="props.controller.haveArror" class="arrowBtn_box">
                <a href="javascript" class="gg-arrow-left" @click.prevent="cutoverItemHandle(-1, 'arr')" @enter.prevent="cutoverItemHandle(-1, 'arr')" title="前一項"></a>
                <a href="javascript" class="gg-arrow-right" @click.prevent="cutoverItemHandle(1, 'arr')" @enter.prevent="cutoverItemHandle(1, 'arr')" title="後一項"></a>
            </div>
            <!-- <div v-if="props.controller.haveDotBtn" class="dotBtn_box">
                            <a href="javascript" @click.prevent="cutoverItemHandle(index)" v-for="(item, index) in showData"
                                :key="item.id" :class="[index === nowShowID ? 'active' : '']" :title="'第 ' + (index + 1) + ' 項'"></a>
                        </div> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.carousel_compontent {
    position: relative;

    a {
        &:focus {
            border: red 3px dashed;
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
        z-index: 20;
    }
}

.carousel_box {
    display: flex;
    width: 100%;
    overflow: hidden;

    .carousel_item {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 0;
        position: absolute;



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
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            letter-spacing: clamp(10px, 1vw, 20px);
        }

        img {
            vertical-align: middle;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .link_area {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            cursor: pointer;
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
    height: 22px;
}

.gg-arrow-left::after,
.gg-arrow-left::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
}

.gg-arrow-left::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 7px;
}

.gg-arrow-left::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: currentColor;
}

// 左側箭頭
.gg-arrow-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
}

.gg-arrow-right::after,
.gg-arrow-right::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    right: 3px;
}

.gg-arrow-right::after {
    width: 8px;
    height: 8px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    bottom: 7px;
}

.gg-arrow-right::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: currentColor;
}
</style>
