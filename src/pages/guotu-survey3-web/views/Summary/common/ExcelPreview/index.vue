<template>
  <el-dialog
    class="excel-preview"
    title="预览"
    :visible.sync="previewVisible"
    :close-on-click-modal="false"
    :modal="false"
    :fullscreen="true"
  >
    <h1 class="h1-table-title">
      {{$store.state.summary.param.year}}年{{tableTitle}}
    </h1>
    <div class="export-btn">
      <el-button size="mini" icon="el-icon-printer">
        <a @click.stop="printExcel">下载</a>
      </el-button>
    </div>
    <el-table
      class="el-table-self"
      :data="excelTableData"
      stripe
      size="mini"
      height="500px"
      v-loading="loading"
      :element-loading-text="loadingText"
      :element-loading-background="rgbaColor"
      :element-loading-spinner="elIconName"
      v-loadmore="loadExcelData"
    >
      <template v-for="item in tableHeaderData">
        <DynamicTableHeader :coloumnHeader="item" :key="item.Id"></DynamicTableHeader>
      </template>
    </el-table>
  </el-dialog>
</template>

<script>
import DynamicTableHeader from '@guotu-survey3-web/views/common/DynamicTableHeader/index';
import tablePreviewService from '@guotu-survey3-web/service/table-preview.service';

export default {
    data () {
        return {
            tableTitle: '',
            excelTableData: [],
            tableHeaderData: {},
            downloadUrl: '',
            loadingText: '数据拼命加载中！',
            rgbaColor: 'rgba(0,0,0,0)',
            elIconName: 'el-icon-loading',
            previewVisible: false,
            busy: false,
            loading: true,
            currentPage: 0,
            pageSize: 15,
            pageTotal: 100
        };
    },
    computed: {
        noMore () {
            return this.currentPage >= this.pageTotal || this.pageTotal === 0;
        },
        disabledLoadMore () {
            return this.noMore || this.busy;
        }
    },
    components: {
        DynamicTableHeader
    },
    methods: {
        init () {
            tablePreviewService.queryTableDataByPagenation(0, this.pageSize, this.$store.getters.getParamSameAsServer, this);
        },
        printExcel () {
            tablePreviewService.queryExcel(this.$store.getters.getParamSameAsServer, this);
        },
        loadExcelData () {
            try {
                if (!this.busy && !this.noMore) {
                    this.busy = true;
                    this.loading = true;
                    let selfthis = this;
                    tablePreviewService.queryTableDataByPagenation(this.currentPage,
                        this.pageSize, this.$store.getters.getParamSameAsServer, this).then(function (res) {
                        selfthis.busy = false;
                    });
                } else if (this.noMore) {
                    this.loadingText = '已经不能给你更多了！';
                    this.elIconName = 'emppty';
                }
            } catch (e) {
                console.log('Error:', e);
            }
        }
    },
    directives: {
        loadmore: {
            bind (el, binding) {
                var p = 0;
                var t = 0;
                var down = true;
                var selectWrap = el.querySelector('.el-table__body-wrapper');
                selectWrap.addEventListener('scroll', function () {
                    // 判断是否向下滚动
                    p = this.scrollTop;
                    if (t < p) {
                        down = true;
                    } else {
                        down = false;
                    }
                    t = p;
                    // 判断是否到底
                    const sign = 5;
                    const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight;
                    if (scrollDistance <= sign && down) {
                        binding.value();
                    }
                });
            }
        }
    }
};
</script>

<style lang="less" scoped>
  @deep: ~'>>>';
  @{deep} .el-dialog {
    .el-dialog__header {
      text-align: left;
    }
  }

  .excel-preview {
    width: 100%;
    height: 100%;
    .h1-table-title {
      font-size: 14px;
      font-weight: bolder;
      height: 30px;
      line-height: 30px;
    }
    .export-btn {
      text-align: right;
      margin-bottom: 10px;
    }
    .el-table-self {
      max-height: 1000px;
    }
  }
</style>
