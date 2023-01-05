<script setup>
import { h, defineComponent } from "vue";
import { NButton, useMessage } from "naive-ui";
// const message = useMessage()
const createColumns = ({
    play
}) => {
    return [
        {
            title: "No",
            key: "no"
        },
        {
            title: "Title",
            key: "title"
        },
        {
            title: "Length",
            key: "length"
        },
        {
            title: "Action",
            key: "actions",
            render(row) {
                return h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: "small",
                        onClick: () => play(row)
                    },
                    { default: () => "Play" }
                );
            }
        }
    ];
};

const data = [
    { no: 3, title: "Wonderwall", length: "4:18" },
    { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 15, title: " Supernova", length: "12:27" }
];



const columns = createColumns({
    play(row) {
        // useMessage().info(`Play ${row.title}`)
        console.log(`${row.title}`)
        // message.info(`Play ${row.title}`);
    }
})
</script>


<template>
    <div>
        <n-data-table :columns="columns" :data="data" :bordered="false" striped  />
    </div>
</template>


<style scoped lang='scss'>

</style>