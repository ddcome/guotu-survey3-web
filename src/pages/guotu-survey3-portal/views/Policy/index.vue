<template>
  <div class="main-container">
    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>政策法规</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-aside>
          <leftPanel :policyFolderList="policyFolderList" :defaultIndex="defaultIndex"></leftPanel>
        </el-aside>
        <el-container>
          <mainPanel :articleList="articleList" :title="title"></mainPanel>
          <el-footer height="auto">
            <PortalPagination
              ref="portalPaginationRef"
              :total="paginationTotal"
              :layout="'total, prev, pager, next'"
              style="margin-right: 20px"
              @pageNumberClickEmitter="pageNumberClick"
            ></PortalPagination>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import policyService from '../../service/policy.service';
import localStoreService from '../../service/localstore.service';
import Bus from '../../assets/Bus';
import leftPanel from './components/leftPanel/index';
import mainPanel from './components/mainPanel/index';
import PortalPagination from '../../components/PortalPagination/index';

export default {
    components: {
        leftPanel,
        mainPanel,
        PortalPagination
    },
    data () {
        return {
            policyFolderList: [],
            defaultIndex: '',
            articleList: [],
            title: '',
            // 请求信息对象
            folderInfo: {
                folderId: '',
                current: 1,
                size: 10
            },
            paginationTotal: 0
        };
    },
    methods: {
        pageNumberClick (pageNum) {
            this.folderInfo.current = pageNum;
            policyService.queryArticleList(this.folderInfo, this);
        },
        /* 初始化政策法规目录列表（页面上左边菜单项），判断是否有本地缓存，如果没有则从新获取 */
        initFolderList () {
            try {
                let $this = this;
                if (localStoreService.getFolderList('initFolderList') === null) {
                    policyService.queryAllPolicyFolder(this).then(function (res) {
                        JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                            if (value.name === '政策法规') {
                                $this.policyFolderList = value.children;
                            }
                        }, $this);
                        $this.defaultIndex = $this.policyFolderList[0].id;
                    });
                } else {
                    JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                        if (value.name === '政策法规') {
                            this.policyFolderList = value.children;
                        }
                    }, this);
                    this.defaultIndex = this.policyFolderList[0].id;
                    this.folderInfo.folderId = this.defaultIndex;
                    policyService.queryArticleList(this.folderInfo, this);
                }
            } catch (e) {
                console.log('ErrMessage', e);
            }
        }
    },
    created () {
        this.initFolderList();
        let $this = this;
        // 监听leftPaneld的点击事件传过来的folderId
        Bus.$on('sendIndex', function (list) {
            $this.folderInfo.folderId = list;
            policyService.queryArticleList($this.folderInfo, $this);
        });
    }
};
</script>
<style lang="less" scoped>
  @deep: ~">>>";
  @{deep}.el-card {
    .el-card__body {
      padding: 20px 0;
    }
  }
  @{deep}.el-breadcrumb{
    line-height: 60px;
  }
  .main-container {
    width: 1100px ;
    margin: 0 auto;
    .el-aside{
      width: 175px !important;
      margin-right: 60px;
    }
  }
</style>
