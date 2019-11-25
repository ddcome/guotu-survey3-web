<template>
  <div class="application-list">
    <el-table
      :header-cell-style="{backgroundColor:'#F2F8FD'}"
      :data="applicationList"
      style="width: 100%"
       size="mini">
      <el-table-column prop="serviceName" label="服务名称"></el-table-column>
      <el-table-column prop="serviceType" label="服务类型"></el-table-column>
      <el-table-column prop="application" label="申请结果"></el-table-column>
      <el-table-column label="token"><a>查看</a></el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
    data () {
        return {
            applicationList: [
                {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'},
                {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'},
                {serviceName: 'TDX2017884294G', serviceType: '资源服务', application: '审核中...'}
            ]
        };
    },
    computed: {
    },
    methods: {},
    created () {
    }
};
</script>

<style lang="less" scoped>
</style>
