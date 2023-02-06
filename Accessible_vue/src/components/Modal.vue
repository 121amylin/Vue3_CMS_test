<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    modal_title: {
        type: String
    },
    modal_content: {
        type: String,
        required: true
    }
})

const modal_box = ref(null)
const isOpen = ref(false)
const changeIsOpenHandle = () => {
    isOpen.value = !isOpen.value
}
</script>


<template>
    <div>
        {{ isOpen }}
        <a href="javascript;:" @click.prevent="changeIsOpenHandle" tltle="開啟互動彈窗">{{
            props.modal_title
        }}</a>
        <div class="modal_box" ref="modal_box" :class="isOpen ? 'show' : ''">
            <div class="modal_box_content">

                <div class="modal_title">{{ props.modal_title }}</div>
                <div class="modal_content">{{ props.modal_content }}</div>
                <a href="javascript:;" class="modal_close_btn" @click.prevent="changeIsOpenHandle" tltle="關閉互動彈窗">
                    <div class="gg-close-o"></div>
                </a>
            </div>

        </div>

    </div>
</template>


<style scoped lang='scss'>
.modal_box {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .3);
    display: none;
    opacity: 0;


    .modal_box_content {
        width: 500px;
        max-width: 100%;
        padding: 16px 22px;
        border: 1px #999 solid;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 0 24px rgba(0, 0, 0, .2);
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }

    .modal_close_btn {
        position: absolute;
        top: 12px;
        right: 12px;
        cursor: pointer;
        transition: opacity .3s;

        &:hover,
        &:focus {
            opacity: .6;
        }
    }

    .modal_title {
        text-align: center;
        font-weight: 700;
    }

    &.show {
        display: block;
        animation-name: fade;
        animation-delay: .1s;
        animation-duration: .4s;
        animation-fill-mode: forwards;
    }
}

// 關閉按鈕
.gg-close-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 40px
}

.gg-close-o::after,
.gg-close-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px
}

.gg-close-o::after {
    transform: rotate(-45deg)
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>