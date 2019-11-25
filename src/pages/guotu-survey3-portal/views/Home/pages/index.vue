<template>
    <div class="wrap">
        <div class="banner public-margin-bottom-40" >
            <div class="container">
                <!--<h1>甘肃省全面启动第三次国土调查成果汇交工作</h1>-->
            </div>
        </div>
        <div class="container">
            <el-row :gutter="10">
                <el-col :span="7" class="tabs">
                    <el-tabs class="public-tabs-font-size" v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="公告" name="first">
                            <ul class="list">
                              <li
                                class="public-color-dark public-li-font-size public-margin-bottom-10"
                                v-for="item in articleList"
                                :key="item.id"
                                :title="item.title"
                                @click.stop="previewArticleClick(item)"
                              >
                                <a><i class="public-color-red iconfont icon-arrow-circle-right"></i>{{item.title}}</a>
                              </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="市场动态" name="second">
                            <ul class="list">
                              <li
                                class="public-color-dark public-li-font-size public-margin-bottom-10"
                                v-for="item in SCarticleList"
                                :key="item.id"
                                :title="item.title"
                                @click.stop="previewArticleClick(item)"
                              >
                                <i class="public-color-red iconfont icon-arrow-circle-right"></i><a>{{item.title}}</a>
                              </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span="12">
                    <div class="carousel-wrap">
                        <el-carousel trigger="click" indicator-position="none" height="340px">
                            <el-carousel-item v-for="(item,index) in swiperInfo" :key="index">
                              <a>
                                <img v-lazy="item.imgSrc" @click="previewArticleClick(item)"/>
                                <p class="public-li-font-size">{{item.title}}</p>
                              </a>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="5">
                    <el-collapse class="public-tabs-font-size" accordion>
                        <el-collapse-item title="影像数据" name="1">
                            <div>影像数据</div>
                        </el-collapse-item>
                        <el-collapse-item title="行政区划" name="2">
                            <div>行政区划</div>
                        </el-collapse-item>
                        <el-collapse-item title="土地利用现状" name="3">
                            <div>土地利用现状</div>
                        </el-collapse-item>
                        <el-collapse-item title="耕地后备资源" name="4">
                            <div>耕地</div>
                        </el-collapse-item>
                        <el-collapse-item title="农用地分等定级" name="5">
                            <div>农用地</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-col>
            </el-row>
            <div class="public-margin-top-50"></div>
            <el-divider><span class="public-tabs-font-size">公告信息</span></el-divider>
            <Notice></Notice>
        </div>
    </div>
</template>

<script>
import ColumnTitle from '../../../components/ColumnTitle';
import Notice from '../../Notice/index';
import newsService from '../../../service/news.service';
import homePageService from '../../../service/home-page.service';
import localStoreService from '../../../service/localstore.service';
export default {
    data () {
        return {
            swiperInfo: [],
            activeName: 'first',
            SCarticleList: [],
            articleList: [],
            newsFolderList: [],
            folderInfo: {
                folderId: '',
                size: 5,
                current: 1
            }
        };
    },
    methods: {
        handleClick (tab, event) {
            console.log(tab, event);
        },
        previewArticleClick (articleId) {
            this.$router.push({name: 'preview', params: {articleId: articleId, path: 'pages'}});
        },
        initData () {
            let $this = this;
            try {
                if (localStoreService.getFolderList('initFolderList') === null) {
                    newsService.queryAllNewsFolder(this).then(function () {
                        JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                            if (value.name === '新闻') {
                                $this.newsFolderList = value.children;
                            }
                        }, $this);
                    });
                } else {
                    JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                        if (value.name === '新闻') {
                            this.newsFolderList = value.children;
                        }
                    }, this);
                    for (let one in this.newsFolderList) {
                        newsService.queryArticleList(
                            {folderId: this.newsFolderList[one].id, current: 1, size: 10},
                            this, this.newsFolderList[one].name);
                    }
                }
            } catch (e) {
                console.log('e', e);
            }
            if (localStoreService.getFolderList('initFolderList') === null) {
                homePageService.queryNoticeFolderId(this);
            } else {
                JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                    if (value.name === '公告信息') {
                        this.folderInfo.folderId = value.id;
                    }
                }, this);
                homePageService.queryArticleList(this);
            }
            homePageService.querySCFolderId(this);
        }
    },
    components: {
        'column-title': ColumnTitle,
        Notice
    },
    created () {
        this.initData();
    }
};
</script>

<style lang="less" scoped>
.wrap{
   width: 1100px;
  margin: 0 auto;
    .banner{
        width: 100%;
        height: 200px;
        background: url('../../../assets/images/home-banner.png');
        background-position-y: bottom;
        h1{
            color: #fff;
            font-size: 50px;
            text-align: center;
            height: 200px;
            line-height: 200px;
        }
    }
    .container{
        .list{
            li{
              padding-right: 10px;
                position: relative;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              i{
                margin-right: 5px;
              }
              a:hover{
                text-decoration: underline;
              }
            }
        }
        .carousel-wrap{
            background-color: #fff;
            padding: 5px;
            margin:0 10px;
            .el-carousel__container{
                a{
                    display: block;
                    height: 100%;
                    position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    p{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        padding: 10px 15px;
                        text-align: center;
                        color: #fff;
                        background: rgba(0, 0, 0, .7);
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.tabs{
    .el-tabs__nav-wrap::after{
        background-color: #e74c3c;
    }
    .el-tabs__active-bar{
        background-color: #e74c3c;
    }
    .el-tabs__item.is-active{
        background-color: #e74c3c;
        color: #fff;
    }
    .el-tabs__item{
        padding: 15px 20px;
      font-size: unset;
        height: auto;
        line-height: 1;
    }
    .el-tabs--top .el-tabs__item.is-top:nth-child(2){
        padding-left: 20px;
    }
    .el-tabs--top .el-tabs__item.is-top:last-child{
        padding-right: 20px;
    }
}
.el-collapse-item__header{
    font-size: unset;
  }
</style>
