<template>
    <div class="notice">
        <el-card class="notice-card public-margin-bottom-10">
            <el-carousel :autoplay="false" height="160px">
                <el-carousel-item v-for="item in articleList" :key="item.id">
                    <ul class="news-ul">
                        <li
                                class="public-li-font-size public-margin-bottom-10"
                                v-for="(noticeList,index) in item"
                                :key="noticeList.id"
                                :title="noticeList.title"
                                @click.stop="previewArticleClick(noticeList)"
                        >
                            <span class="li-inner">
                                <a class="inner-a public-color-dark" :class="index%2===0?'inner-a-left':'inner-a-right'"><i
                                        class="public-color-red iconfont icon-arrow-circle-right"></i>{{noticeList.title}}</a>
                            </span>
                        </li>
                    </ul>
                </el-carousel-item>
            </el-carousel>

        </el-card>
    </div>
</template>

<script>
import noticeService from '../../service/notice.service';
import localStoreService from '../../service/localstore.service';

export default {
    data () {
        return {
            noticePosition: 0,
            articleList: [],
            folderInfo: {
                folderId: '',
                current: 1,
                size: 10000
            }

        };
    },
    methods: {
        changeListClick () {
            this.noticePosition = this.noticePosition - 1183;
        },
        previewArticleClick (noticeInfo) {
            this.$router.push({name: 'preview', params: {articleId: noticeInfo, path: 'pages'}});
        },
        inItFolder () {
            if (localStoreService.getFolderList('initFolderList') === null) {
                console.log('进入');
                noticeService.queryNoticeFolderId(this);
            } else {
                JSON.parse(localStoreService.getFolderList('initFolderList')).forEach(function (value) {
                    if (value.name === '公告信息') {
                        this.folderInfo.folderId = value.id;
                    }
                }, this);
                noticeService.queryArticleList(this);
            }
        }
    },
    created () {
        this.inItFolder();
    }
};
</script>
<style lang="less" scoped>
    @deep: ~">>>";
    @{deep}.el-carousel {
        .el-carousel__arrow--left {
            display: none;
        }
        .el-carousel__arrow--right {
            bottom: 11px;
            right: 19px;
            border-radius: 16px;
            top: auto;
            left: auto;
            width: 90px;
            line-height: 29px;
            height: 37px;
            margin-bottom: unset;
            z-index: 9;
            background-color: #e74c3c;

            .el-icon-arrow-right:before {
                content: "换一批";
            }
        }
        .el-carousel__indicator {
            background-color: transparent;
            cursor: pointer;
            .el-carousel__button {
                display: block;
                opacity: .48;
                width: 6px;
                height: 6px;
                border-radius: 3px;
                background-color: #FFF;
                border: none;
                outline: 0;
                padding: 0;
                margin: 0;
                cursor: pointer;
                -webkit-transition: .3s;
                transition: .3s;
            }
        }
        .is-active {
            background-color: #fff;
        }
        .el-carousel__indicators {
            position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            z-index: 9;
        }
        .el-carousel__indicator--horizontal {
            display: inline-block;
            width: 6px;
            padding: 0px 0px;
            margin: 2px;
            height: 6px;
            border-radius: 3px;
        }
        .el-carousel__indicators--horizontal {
            bottom: 27px;
            right: 44px;
            left: auto;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
        }
    }

    @niticePosition: 0px;
    .notice {
        @{deep}.el-card {
            width: 100%;
            margin: 0 auto;
            box-shadow: none;
            border: 0px;
            height: 200px;
            .el-card__body {
                padding: 0px;
                padding-bottom: 30px;
            }
            .news-ul {
                height: 224px;
                box-sizing: border-box;
                li {
                    position: relative;
                    width: 50%;
                    float: left;
                    .li-inner {
                        width: 100%;
                        .inner-a {
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            i {
                                margin-right: 5px;
                            }
                        }
                        .inner-a:hover {
                            text-decoration: underline;

                        }
                        .inner-a-left {
                            padding-right: 15px;
                        }
                        .inner-a-right {
                            padding-left: 15px;
                        }
                    }
                }
            }
        }
    }
</style>
