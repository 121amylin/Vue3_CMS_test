<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: {
        typeof: String,
        required: true,
    },
    content: {
        typeof: String,
        required: true
    },
    isShowItem: {
        typeof: String,
        required: true
    },
    index: {
        typeof: String,
        required: true
    }
})

</script>


<template>
    <div>
        <div class="accordion_box">
            <div class="accordion_item">
                <div class="accordion_link">
                    <a href="javascript:;">{{ props.title }}</a>

                </div>
                <div class="accordion_content" :class="props.isShowItem === props.index ? 'show' : ''">
                    {{ props.content }}
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped lang='scss'>
.accordion_box {
    .accordion_content {
        opacity: 0;
        display: none;

        &.show {
            display: block;
            animation-name: fade;
            animation-delay: .2s;
            animation-duration: .6s;
            animation-fill-mode: forwards;
        }
    }
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