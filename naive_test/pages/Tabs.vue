<script setup>
const route = useRoute()
</script>


<template>
    <div>
        <h1>{{ route.name }}</h1>
        <n-p>type="line | card | segment"</n-p>
        <n-tabs type="segment" animated :bar-width="10" trigger="hover">
            <template #prefix>
                Prefix
            </template>
            <template #suffix>
                Suffix
            </template>
            <n-tab-pane name="oasis" tab="Oasis">
                Wonderwall
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="the Beatles">
                Hey Jude
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="周杰伦">
                七里香
            </n-tab-pane>
        </n-tabs>
        <n-hr></n-hr>
        <n-tabs class="card-tabs" default-value="signin" size="large" animated style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;">
            <n-tab-pane name="signin" tab="登录">
                <n-form>
                    <n-form-item-row label="用户名">
                        <n-input />
                    </n-form-item-row>
                    <n-form-item-row label="密码">
                        <n-input />
                    </n-form-item-row>
                </n-form>
                <n-button type="primary" block secondary strong>
                    登录
                </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
                <n-form>
                    <n-form-item-row label="用户名">
                        <n-input />
                    </n-form-item-row>
                    <n-form-item-row label="密码">
                        <n-input />
                    </n-form-item-row>
                    <n-form-item-row label="重复密码">
                        <n-input />
                    </n-form-item-row>
                </n-form>
                <n-button type="primary" block secondary strong>
                    注册
                </n-button>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>


<style scoped lang='scss'>
.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}
</style>