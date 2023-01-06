<script setup>
// const router = useRouter()
const route = useRoute()
</script>


<template>
    <div>
        <dl>
            <dt>router</dt>
            <dd>template 輸出報錯：Hydration completed but contains mismatches.</dd>
        </dl>
        <!-- <p>{{ router }}</p> -->
        <hr> 
        <dl>
            <dt>route</dt>
            <dd>可 template 輸出</dd>
        </dl>
        <p>{{ route }}</p>
        <p>route.params____{{ route.params }}</p>
        <p>route.params.id____{{ route.params.id }}</p>
    </div>
</template>


<style scoped lang='scss'>

</style>