<template>
  <el-container class="news">
    <el-main>
      <div class="main-title">
        <h1>新闻动态</h1>
      </div>
      <div class="news-wrap">
        <el-row :gutter="24" class="picture">
          <el-col class="wrap-col" :span="10">
            <div class="carousel-wrap">
              <el-carousel trigger="click" indicator-position="none">
                <el-carousel-item v-for="(item,index) in swiperInfo" :key="index">
                  <a>
                    <img v-lazy="item.imgSrc" @click="previewArticleClick(item)"/>
                    <p class="public-li-font-size">{{item.title}}</p>
                  </a>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col class="pic-news-col" :span="14">
            <el-card class="public-clear-card-default">
              <div class="headline public-margin-bottom-20">
                <h4 class="public-tabs-font-size">图片新闻</h4>
              </div>
              <ul class="newslist-ul">
                <li
                  class="public-li-font-size public-margin-bottom-10"
                  v-for="articles in TParticleList"
                  :title="articles.title"
                  :key="articles.id"
                  @click.stop="previewArticleClick(articles)">
                  <a target="_blank">{{articles.title}}</a><span>{{articles.ctime | timeToSimpleString}}</span>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <hr class="public-background-color-red"/>
        <el-row>
          <el-col :span="8">
            <el-card class="tabs-card public-clear-card-default">
              <div class="headline public-margin-bottom-20">
                <h4 class="public-tabs-font-size">新闻动态</h4>
              </div>
              <ul class="newslist-ul">
                <li
                  class="public-li-font-size public-padding-right-10 public-margin-bottom-10"
                  v-for="articles in XWDTarticleList"
                  :title="articles.title"
                  :key="articles.id"
                  @click.stop="previewArticleClick(articles)">
                  <a target="_blank">{{articles.title}}</a>
                </li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="tabs-card public-clear-card-default">
              <div class="headline public-margin-bottom-20">
                <h4 class="public-tabs-font-size">信息公告</h4>
              </div>
              <ul class="newslist-ul">
                <li
                  class="public-li-font-size public-padding-right-10 public-margin-bottom-10"
                  v-for="articles in XXGGarticleList"
                  :title="articles.title"
                  :key="articles.id"
                  @click.stop="previewArticleClick(articles)">
                  <a target="_blank">{{articles.title}}</a>
                </li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="tabs-card public-clear-card-default">
              <div class="headline public-margin-bottom-20">
                <h4 class="public-tabs-font-size">政策快递</h4>
              </div>
              <ul class="newslist-ul">
                <li
                  class="public-color-dark public-li-font-size public-margin-bottom-10"
                  v-for="articles in ZCKDarticleList"
                  :title="articles.title"
                  :key="articles.id"
                  @click.stop="previewArticleClick(articles.id)">
                  <a target="_blank">{{articles.title}}</a>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>

    </el-main>
  </el-container>
</template>

<script>
import newsService from '../../service/news.service';
import localStoreService from '../../service/localstore.service';

export default {
    data () {
        return {
            activeName: '',
            search: '',
            newsFolderList: [],
            swiperInfo: [],
            TParticleList: [],
            XWDTarticleList: [],
            XXGGarticleList: [],
            ZCKDarticleList: [],
            paginationTotal: 10,
            folderInfo: {
                folderId: '',
                current: 1,
                size: 10
            }
        };
    },
    methods: {
        handleSizeChange (val) {
        },
        handleCurrentChange (val) {
        },
        pageNumberClick (pageNum) {
            console.log('current', pageNum);
        },
        previewArticleClick (articleId) {
            this.$router.push({name: 'preview', params: {articleId: articleId, path: 'news'}});
        },
        inItFolder () {
            let $this = this;
            try {
                if (localStoreService.getFolderList('initFolderList') === null) {
                    newsService.queryAllNewsFolder(this).then(function (res) {
                        JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                            if (value.name === '新闻') {
                                $this.newsFolderList = value.children;
                            }
                        }, $this);
                        $this.activeName = $this.newsFolderList[0].id;
                    });
                } else {
                    JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                        if (value.name === '新闻') {
                            this.newsFolderList = value.children;
                        }
                    }, this);
                    this.activeName = this.newsFolderList[0].id;
                    for (let one in this.newsFolderList) {
                        newsService.queryArticleList(
                            {folderId: this.newsFolderList[one].id, current: 1, size: 10},
                            this, this.newsFolderList[one].name);
                    }
                }
            } catch (e) {
                console.log('e', e);
            }
        }
    },
    created () {
        this.inItFolder();
    }
};
</script>

<style lang="less" scoped>
  @deep: ~'>>>';
  .news {
    width: 1100px;
    margin: 0 auto;
    padding: 0;
    .main-title {
      height: 60px;
      width: 1100px;
      margin: 0 auto;
      background: url('../../assets/images/gallery_banner.jpg') no-repeat scroll center center #0172B6;
      h1 {
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 26px;
          margin-left: 10px;
      }
    }
    .news-wrap {
      width: 1100px;
      background-color: #fff;
      border-radius: 4px;
      .newslist-ul {
        li {
          text-align: left;
          padding-left: 10px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          &::before {
            position: absolute;
            left: 0;
            top: calc(50% - 2px);
            content: '';
            width: 4px;
            height: 4px;
            background: #e74c3c;
            border-radius: 50%;
          }
          span {
            position: absolute;
            right: 0;
          }
          a {
            white-space: nowrap;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .picture {
      margin-left: 0px !important;
      margin-right: 0px !important;
      .wrap-col {
        padding-left: 0px !important;
      }
      .carousel-wrap {
        background-color: #fff;
        padding: 30px 0;
        border-radius: 4px;
        .el-carousel__container {
          a {
            display: block;
            height: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            p {
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
    .pic-news-col {
      padding-left: 20px !important;
      padding-right: 0px !important;
    }
    hr {
      margin-top: 20px;
      border: none;
      height: 3px;
    }
    .flex-style {
      display: flex;
      vertical-align: top;
    }
    .tabs-card {
      height: auto;
      width: 100%;
      display: inline-block;
    }
    @{deep}.el-card__body {
      padding: 30px 0;
    }
    .pagination {
      margin-bottom: 20px;
    }
  }

</style>
<style lang="less">
  .tabs {
    .el-tabs__nav-wrap::after {
      background-color: #e74c3c;
    }
    .el-tabs__active-bar {
      background-color: #e74c3c;
    }
    .el-tabs__item.is-active {
      background-color: #e74c3c;
      color: #fff;
    }
    .el-tabs__item {
      padding: 15px 20px;
      height: auto;
      line-height: 1;
    }
    .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
      padding-left: 20px;
    }
    .el-tabs--top .el-tabs__item.is-top:last-child {
      padding-right: 20px;
    }
  }
</style>
