<template>
    <div class="home">
        <el-row :gutter="100" class="homeRow">
            <el-col :span="6">
                <span class="title">api请求总数：</span>
                <div class="grid-content bg-purple content" v-model="apiAllCount">{{apiAllCount}}</div>
            </el-col>
            <el-col :span="6">
                <span class="title">今日api请求总数：</span>
                <div class="grid-content bg-purple content" v-model="apiCount">{{apiCount}}</div>
            </el-col>
            <el-col :span="6">
                <span class="title">所有用户注册量：</span>
                <div class="grid-content bg-purple content"></div>
            </el-col>
            <el-col :span="6">
                <span class="title">今日用户注册量：</span>
                <div class="grid-content bg-purple content"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Api from '../../api/api';
    export default {
        data() {
            return {
                apiAllCount: 0,
                apiCount:0,
            }
        },
        created() {
            (async () => {
                // 获取所有api请求数
                this.apiAllCount = (await Api.apiAllCount("")).data.count;
                // 获取当日api请求数
                const date = this.moment().format("YYYY-MM-DD");
                this.apiCount = (await Api.apiCount(date)).data.count
            })()
        }
    }

</script>
<style lang="less">
    .homeRow {
        padding: 50px;
        height: 200px;
        .title {
            margin: 20px;
        }
        .content {
            text-align: center;
            line-height: 100px;
            font-size: 30px;
        }
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 100px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>
