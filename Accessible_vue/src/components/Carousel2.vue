<script setup>
import { ref, defineProps, onMounted } from "vue";
// 元件外部接口 ==============================
const refarr = ref([]);
const carousel_item = (el) => {
    refarr.value.push(el);
};
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    controller: {
        type: Object,
        default () {
            return {
                autoPlay: false,
                haveDotBtn: false,
                haveArror: true,
            };
        },
    },
});
onMounted(() => {
    console.log(refarr.value);
});
// const controller = {
//     autoPlay: true,
//     haveDotBtn: true,
//     haveArror: true,
// }

// 元件內部運作 ==============================
let showData = [];
props.data.forEach((item) => {
    if (item.isShow) {
        showData.push(item);
    }
});
let nowShowID = ref(0);

const changeNowShowID = (index) => {
    console.log(index);
    nowShowID.value = index;
};
const linkHandle = (url) => {
    console.log(111);
    window.open(url);
};
const cutoverItemHandle = (num, type) => {
    if (type === "arr") {
        if (num === 1) {
            nowShowID.value = Math.min(showData.length - 1, nowShowID.value + 1);
        } else {
            nowShowID.value = Math.max(0, nowShowID.value - 1);
        }
    } else {
        nowShowID.value = num;
    }
};
const enterchange_p = () => {
    // console.log(nowShowID.value);
    // refarr.value[nowShowID.value].focus();
    console.log(nowShowID.value);
    if (nowShowID.value === 0) {
        console.log(111);
        refarr.value[0].focus();
    }
};
const enterchange_n = () => {
    // console.log(nowShowID.value);
    // refarr.value[nowShowID.value].focus();
    if (nowShowID.value === 2) {
        console.log(222);
        refarr.value[2].focus();
    }
};
const autoPlayHandle = () => {
    if (props.controller.autoPlay) {
        setInterval(() => {
            if (nowShowID.value >= showData.length - 1) {
                nowShowID.value = 0;
            } else {
                nowShowID.value++;
            }
        }, 50000);
    }
};
autoPlayHandle();
</script>

<template>
    <div>
        <div class="carousel_compontent">
            <div
                class="carousel_box"
                :style="{ height: '300px' }"
            >
                <div
                    class="carousel_item"
                    v-for="(item, index) in showData"
                    :key="item.id"
                    :class="[index === nowShowID ? 'active' : '']"
                >
                    <a
                        :ref="carousel_item"
                        :href="item.link"
                        :title="`連結到${item.descript}`"
                        @focus="changeNowShowID(index)"
                    >
                        <img
                            :src="item.src"
                            :alt="item.descript"
                        />
                    </a>
                    <!-- <div
                                                                                                                                                                                                                                                class="link_area"
                                                                                                                                                                                                                                                v-if="item.link !== ''"
                                                                                                                                                                                                                                                @click.prevent="linkHandle(item.link)"
                                                                                                                                                                                                                                            ></div> -->
                    <p
                        v-if="item.descript"
                        aria-hidden="true"
                    >{{ item.descript }}</p>
                </div>
            </div>
            <div
                v-if="props.controller.haveArror"
                class="arrowBtn_box"
            >
                <a
                    href="javascript"
                    class="gg-arrow-left"
                    @click.prevent="cutoverItemHandle(-1, 'arr')"
                    title="前一項"
                    @keyup.tab="enterchange_p"
                ></a>
                <a
                    href="javascript"
                    class="gg-arrow-right"
                    @click.prevent="cutoverItemHandle(1, 'arr')"
                    title="後一項"
                    @keyup.tab="enterchange_n"
                ></a>
            </div>
            <div
                v-if="props.controller.haveDotBtn"
                class="dotBtn_box"
            >
                <a
                    href="javascript"
                    @click.prevent="cutoverItemHandle(index)"
                    v-for="(item, index) in showData"
                    :key="item.id"
                    :class="[index === nowShowID ? 'active' : '']"
                    :title="'第 ' + (index + 1) + ' 項'"
                ></a>
            </div>
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

    .dotBtn_box {
        display: flex;
        position: absolute;
        transform: translateX(-50%);
        bottom: 16px;
        left: 50%;
        z-index: 10;

        a {
            display: inline-block;
            width: clamp(10px, 0.9vw, 16px);
            height: clamp(10px, 0.9vw, 16px);
            margin: clamp(8px, 0.8vw, 12px);
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);

            &.active {
                background-color: hsla(160, 100%, 37%, 1);
                // border: 3px solid hsla(160, 100%, 37%, 1);
            }
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
        opacity: 0;
        position: absolute;

        &.active {
            opacity: 1;
            transition: opacity 1.5s;
            z-index: 1;
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
