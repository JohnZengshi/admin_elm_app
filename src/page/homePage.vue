<template>
    <div class="homePage">
        <el-row class="tac">
            <el-col class="tacCol" :span="4">
                <el-menu default-active="1" class="el-menu-vertical-demo" @select="currentSelect" @open="handleOpen" @close="handleClose"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
                    <!-- 首页 -->
                    <el-menu-item index="homePage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <!-- 子选项 -->
                    <el-submenu index="导航一">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group title="分组1">
                            <el-menu-item index="path1">path1</el-menu-item>
                            <el-menu-item index="path2">path2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                    </el-submenu>
                    <el-menu-item index="6">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col class='view' :span="20">
                <el-breadcrumb class="commonTop flex flex-align-center" separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/homePage' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item,index) in topList" :key="index">{{item}}</el-breadcrumb-item>
                    <el-dropdown class="dropdown">
                        <el-button class="el-dropdown-link el-icon-setting avatar"></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-breadcrumb>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                topList: []
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            currentSelect(index, indexPath) {
                // console.log(index)
                // console.log(indexPath)
                this.topList = indexPath;
                if (index == "homePage") {
                    this.$router.push({
                        path: '/' + index
                    })
                } else {
                    this.$router.push({
                        path: '/homePage/' + index
                    })
                }
            }
        },

    }

</script>
<style lang="less">
    .homePage {
        width: 100%;
        height: 100%;
        .tac {
            height: 100%;
            .tacCol {
                height: 100%;
                background-color: #eef1f6;
            }
        }
        .view {
            height: 100%;
            .commonTop {
                height: 56px;
                padding: 0 20px;
                background-color: #eef1f6;
                position: relative;
                .dropdown {
                    position: absolute;
                    right: 15px;
                    .avatar {
                        border-radius: 50% !important;
                        padding: 15px !important;
                    }
                }

            }
        }
    }

</style>
