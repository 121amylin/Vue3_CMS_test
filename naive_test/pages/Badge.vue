<script setup>
import { defineComponent, ref } from "vue";
import { MdAdd, MdRemove } from "@vicons/ionicons4";
import { LockClosedOutline } from '@vicons/ionicons5'
const route = useRoute()
const value = ref(5)
const value2 = ref(105)
const value3 = ref(0)
const show = ref(true)
const offset = [-16, 16] 
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-p>{{ value }}</n-p>
        <n-space :size="24" align="center">
            <n-badge :value="value" :max="15">
                <n-avatar />
            </n-badge>
            <n-badge :value="value" dot>
                <n-avatar />
            </n-badge>
            <n-button-group>
                <n-button @click="value = Math.min(16, value + 1)">
                    <template #icon>
                        <n-icon><md-add /></n-icon>
                    </template>
                </n-button>
                <n-button @click="value = Math.max(0, value - 1)">
                    <template #icon>
                        <n-icon><md-remove /></n-icon>
                    </template>
                </n-button>
            </n-button-group>
            <n-space :size="24" align="center">
                <n-badge dot processing>
                    <n-avatar />
                </n-badge>
                <n-badge :value="20" processing>
                    <n-avatar />
                </n-badge>
                <n-badge dot type="info" processing>
                    <n-avatar />
                </n-badge>
                <n-badge dot type="success" processing>
                    <n-avatar />
                </n-badge>
            </n-space>
        </n-space>
        <br><br>
        <n-space>
            <n-badge :value="value2" show-zero>
                <n-avatar />
            </n-badge>
            <n-badge :value="value2" :max="99">
                <n-avatar />
            </n-badge>
            <n-badge :value="value2" show-zero :max="100">
                <n-avatar />
            </n-badge>
            <n-badge :value="value2" show-zero :max="10">
                <n-avatar />
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge value="新">
                <n-avatar />
            </n-badge>
            <n-badge value="火">
                <n-avatar />
            </n-badge>
            <n-badge processing>
                <n-avatar />
                <template #value>
                    <n-icon :component="LockClosedOutline" />
                </template>
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge :value="value" :max="15" />
            <n-badge :value="value" dot />
        </n-space>
        <br><br>
        <n-space>
            <n-badge dot>
                <n-avatar />
            </n-badge>
            <n-badge dot type="error">
                <n-avatar />
            </n-badge>
            <n-badge dot type="info">
                <n-avatar />
            </n-badge>
            <n-badge dot type="success">
                <n-avatar />
            </n-badge>
            <n-badge dot type="warning">
                <n-avatar />
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge :value="value3">
                <n-avatar />
            </n-badge>
            <n-badge :value="value3" show-zero>
                <n-avatar />
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge :value="value" :max="15" :show="show">
                <n-avatar />
            </n-badge>
            <n-badge :value="value" dot :show="show">
                <n-avatar />
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge value="15" color="#996644">
                <n-avatar />
            </n-badge>
        </n-space>
        <br><br>
        <n-space>
            <n-badge :value="value" :max="15" :offset="offset">
                <n-avatar />
            </n-badge>
        </n-space>
    </div>
</template>


<style scoped lang='scss'>

</style>