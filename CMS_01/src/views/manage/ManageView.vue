<script setup>
const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    // console.log(key, keyPath)
}
</script>

<template>

    <div class="common-layout">
        <el-container>
            <!-- <el-header>Header</el-header> -->
            <el-container>
                <el-aside>

                    <el-row class="tac">
                        <el-col :span="24">
                            <h5 class="mb-2">後台管理系統</h5>
                            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                                @close="handleClose">

                                <el-menu-item index="1">
                                    <RouterLink to="/manage">manahe Home</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="2">
                                    <RouterLink to="/manage/userManage">userManage</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="3">
                                    <RouterLink to="/manage/newsManage">newsManage</RouterLink>
                                </el-menu-item>

                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>
                <el-main>
                    <RouterView />
                  
                </el-main>
            </el-container>
        </el-container>
    </div>


</template>

<style lang="scss" scoped>
.el-aside {
    width: 200px;
    min-height: 90vh;

    a {
        display: block;
        padding: 4px 8px;

        +a {
            margin-top: 10px;
        }
    }

    .tac {
        width: 100%;
    }
}
</style>