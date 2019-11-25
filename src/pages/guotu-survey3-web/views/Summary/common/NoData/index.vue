<template>
    <div class="no-data" :style="{height: height}">
        <span :style="{height: height}">
            <i class="iconfont">&#xe60c;</i>
            <p>无数据</p>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '200px'
        }
    }
};
</script>

<style lang="less" scoped>
    .no-data {
        width: 100%;
        height: 100%;
        color: #CCCCCC;
        display: table;
        span {
            display: table-cell;
            vertical-align: middle;
            i {
                font-size: 80px;
            }
        }
    }
</style>
