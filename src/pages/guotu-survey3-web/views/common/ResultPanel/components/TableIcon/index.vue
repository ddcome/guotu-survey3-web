<template>
    <el-row class="table-icon" @click.native.stop="tableBtnClick($event)">
        <el-col :span="12" class="one-icon public-cursor" :class="isTableActive? 'active' : ''" nameKey="table">
            <!--表格 icon -->
            <i class="iconfont" nameKey="table">&#xe72d;</i>
        </el-col>
        <el-col :span="12" class="one-icon public-cursor" :class="isTableActive? '' : 'active'" nameKey="chart">
            <!--图表 icon -->
            <i class="iconfont" nameKey="chart">&#xe61f;</i>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data () {
        return {
            isTableActive: true
        };
    },
    methods: {
        tableBtnClick (e) {
            const $this = this;
            if (!e.target.attributes['nameKey']) return;
            switch (e.target.attributes['nameKey'].nodeValue) {
            case 'table':
                $this.isTableActive = true;
                $this.$emit('tableBtnClickEmitter');
                break;
            case 'chart':
                $this.isTableActive = false;
                $this.$emit('chartBtnClickEmitter');
                break;
            }
        }
    }
};
</script>

<style lang="less" scoped>
    .table-icon {
        display: inline-block;
        width: 80px;
        height: 35px;
        background-color: rgb(30, 104, 197);
        border-radius: 20px;
        .one-icon {
            font-size: 22px;
            text-align: center;
            height: 35px;
            line-height: 35px;
        }
        .active {
            background-color: rgb(228, 239, 250);
            border-radius: 50px;
            color: rgb(30, 104, 197);
        }
    }
</style>
