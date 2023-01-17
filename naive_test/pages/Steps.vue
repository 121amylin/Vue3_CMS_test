<script setup>
import { ref } from "vue"
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
const route = useRoute()
const current = ref(1)

const next = () => {
    if (current.value === null)
        current.value = 1;
    else if (current.value >= 4)
        current.value = null;
    else
        current.value++;
}
const prev = () => {
    if (current.value === 0)
        current.value = null;
    else if (current.value === null)
        current.value = 4;
    else
        current.value--;
}
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <!-- <n-steps v-model:current="current">
            <n-step title="I Me Mine" description="All through the day, I me mine I me mine, I me mine" />
            <n-step title="Let It Be" description="When I find myself in times of trouble Mother Mary comes to me" />
            <n-step title="Come Together" description="Here come old flat top He come grooving up slowly" />
            <n-step title="Something"
                description="Something in the way she moves Attracts me like no other lover" />
        </n-steps> -->

        <n-space vertical>
            <n-steps :current="current">
                <n-step title="I Me Mine" description="All through the day, I me mine I me mine, I me mine" />
                <n-step title="Let It Be"
                    description="When I find myself in times of trouble Mother Mary comes to me" />
                <n-step title="Come Together" description="Here come old flat top He come grooving up slowly" />
                <n-step title="Something"
                    description="Something in the way she moves Attracts me like no other lover" />
            </n-steps>
            <n-space>
                <n-button-group>
                    <n-button @click="prev">
                        <template #icon>
                            <n-icon>
                                <md-arrow-round-back />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button @click="next">
                        <template #icon>
                            <n-icon>
                                <md-arrow-round-forward />
                            </n-icon>
                        </template>
                    </n-button>
                </n-button-group>
            </n-space>
        </n-space>
    </div>
</template>


<style scoped lang='scss'>

</style>