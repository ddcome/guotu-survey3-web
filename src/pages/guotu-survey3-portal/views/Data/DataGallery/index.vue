<template>
  <el-container class="container-out">
    <el-main>
      <div class="container">
        <div class="search-bar">
          <el-breadcrumb separator="/" class="bread custom">
            <el-breadcrumb-item :to="{ path: '/' }">
              <i class="iconfont icon-home"></i> 首页
            </el-breadcrumb-item>
            <el-breadcrumb-item>数据服务</el-breadcrumb-item>
            <el-breadcrumb-item v-show="breadVal">{{breadVal}} <i class="iconfont icon-guanbi"></i>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-container class="content">
          <el-aside width="260px">
            <template v-for="o in catalogData">
              <CatalogCard :key="o.id" :title="o.title" :data="o.children"/>
            </template>
          </el-aside>
          <el-main class="main-content">
            <div class="panel-heading">
              <span>{{title}}</span>
              <el-input size= "mini" placeholder="快速检索..." v-model="search" class="search-input">
                <el-button slot="append" icon="el-icon-search" @click.stop="searchDataClick"></el-button>
              </el-input>
            </div>
            <div class="sortOrder">
              <span class="icon-bar">排序方式：</span>
              <span class="icon-bar"><a href="javascript:void(0);"
                                        class="sort-content active">最高访问量</a></span>
              <span class="icon-bar"><a href="javascript:void(0);" class="sort-content">最高评级</a></span>
              <span class="icon-bar"><a href="javascript:void(0);" class="sort-content">最新修改</a></span>
              <span class="icon-bar"><a href="javascript:void(0);" class="sort-content asc desc">标题<i
                class="sort-icon"></i></a></span>
              <span style="float: right;">
                                <i class="el-icon-menu"></i>
                            </span>
            </div>
            <div class="tabgallery">
              <el-row :gutter="24">
                <el-col :span="8" v-for="one in galleryCardList" :key="one.id">
                  <GalleryCard
                    :imgUrl="one.imgUrl"
                    :title="one.title"
                    :serviceType="one.type"
                    :read="parseInt(one.numViews)"
                    :comment="parseInt(one.numComments)"
                    :rateData="parseInt(one.numRatings)"
                    :description="one.description"
                    :publisher="one.owner"
                    :publishTime="one.created | timestampToString"
                    v-on:openGalleryCardEmitter="previewClick"
                  />
                </el-col>
              </el-row>
              <el-row class="portal-pagination">
                <PortalPagination
                  ref="portalPaginationRef"
                  :total="paginationTotal"
                  :layout="'total, prev, pager, next'"
                  @pageNumberClickEmitter="pageNumberClick"
                />
              </el-row>
            </div>
          </el-main>
        </el-container>
      </div>
      <!--服务预览-->
      <ServicesPreview
        ref="servicesPreviewRef"
      />
    </el-main>
  </el-container>
</template>
<script>
import GalleryCard from '../../../components/GalleryCard/index';
import CatalogCard from '../../../components/CatalogCard/index';
import PortalPagination from '../../../components/PortalPagination/index';
import ServicesPreview from './components/ServicesPreview/index';
import DataGalleryService from './../../../service/data-gallery.service';

export default {
    data () {
        return {
            value: 0,
            search: '',
            catalogData: [],
            galleryCardList: [],
            paginationTotal: 0,
            currentPageNum: 1
        };
    },
    computed: {
        breadVal () {
            return this.$store.getters.bread;
        },
        title () {
            let val = this.$store.getters.bread;
            if (val) {
                val = val.substring(0, val.indexOf('：'));
            } else {
                val = '资源目录';
            }
            return val;
        }
    },
    methods: {
        pageNumberClick (pageNum) {
            this.currentPageNum = pageNum;
            DataGalleryService.queryCatalogCardList(
                this.$refs.portalPaginationRef.everyPages,
                (pageNum - 1) * this.$refs.portalPaginationRef.everyPages,
                this
            );
        },
        previewClick (title) {
            this.$refs.servicesPreviewRef.openServicesMonitorPreview(
                title
            );
        },
        searchDataClick () {
            DataGalleryService.queryCatalogCardList(6, 1, this);
        }
    },
    created () {
        DataGalleryService.queryCatalogData(this);
        DataGalleryService.queryCatalogCardList(6, 1, this);
    },
    mounted () {
        // this.getList();
        // this.getToken();
    },
    components: {
        GalleryCard,
        CatalogCard,
        PortalPagination,
        ServicesPreview
    }
};
</script>

<style lang="less" scoped>
  .container-out {
    width: 1100px;
    margin: 0 auto;
    .search-bar {
      padding: 10px 15px;
      overflow: hidden;
      .bread {
        float: left;
        margin-top: 14px;
      }
    }
    .main-content {
      padding-right: 0px;
    }
    .panel-heading {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      span {
        font-weight: 700;
        border-bottom: 2px solid #0473c2;
        padding-bottom: 10px;
      }
      .search-input {
        float: right;
        width: 300px;
      }
    }

    .sortOrder {
      padding: 15px 0 0 15px;
      span {
        font-size: 14px;
        color: #222;
        a {
          font-size: 14px;
          color: #0473C2;
          margin-right: 10px;
          &.active {
            color: red;
          }
        }
      }
    }

    .tabgallery {
      margin-top: 20px;
      .el-row {
        margin-right: 0px !important;
        margin-left: 0px !important;
        .el-col {
          padding-right: 0px !important;
        }
      }
      .portal-pagination {
        margin: 30px 0px 50px 0px;
      }
    }
  }

</style>
<style lang="less">
  .custom {
    .el-breadcrumb__inner.is-link {
      color: #337ab7;
    }
    .el-breadcrumb__inner {
      color: #222;
    }
    .el-breadcrumb__item:last-child .el-breadcrumb__inner {
      color: #ee3531;
      border: 1px dotted #ee3531;
      padding: 2px 5px;
      cursor: pointer;
    }
  }

  .content .el-main {
    padding: 0px 20px;
  }
</style>
