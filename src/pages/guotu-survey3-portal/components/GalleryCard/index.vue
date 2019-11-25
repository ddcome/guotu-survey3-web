<template>
    <div class="gallery-card">
        <a href="#">
            <img class="img-responsive"
                 :src="imgUrl"
                 alt="">
        </a>
        <div class="caption">
            <p class="author-info clearfix">
                <span class="author-name text-overflow">
                    <img src="./../../assets/images/apps16.png" alt="">{{serviceType}}
                </span>
                <span class="comment-count fr">
                    <span class="iconfont icon-message" aria-hidden="true"></span>
                    {{read}}
                </span>
                <span class="view-count fr">
                    <span class="iconfont icon-eye" aria-hidden="true"></span> &nbsp;
                    {{comment}}
                </span>
            </p>
            <p class="gallery-card-label text-overflow">{{title}}</p>
            <div class="rating">
                <el-rate
                        v-model="rateData"
                        disabled
                        show-score
                        :score-template="'（' + rateData + '次评级）'">
                </el-rate>
            </div>
            <p class="gallery-card-description">{{description}}</p>
            <p class="gallery-card-time">
                <span class="author-avatar">
                    <img name="huangbh" src="./../../assets/images/no-user-thumb.png">
                </span>
                <span code="huangbh" class="author-name text-overflow">{{publisher}}</span>
                <span class="comment-count fr">{{publishTime}}</span>
            </p>
            <div class="box-footer">
                <a @click.stop="open(title)">打开</a>
                <a href="#">详情</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    props: {
        option: {
            type: Object,
            default: function () {
                return {
                    imgUrl: 'http://gis37.arcgisonline.cn/esri/sharing/rest/content/items/e7c21befda764a968fdd1547ed82b2c4/info/thumbnail/ago_downloaded.png',
                    title: '无标题',
                    serviceType: '不详',
                    read: 0,
                    comment: 0,
                    rateData: 0,
                    description: '无描述',
                    publisher: '不详',
                    publishTime: '-'
                };
            }
        },
        imgUrl: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        serviceType: {
            type: String,
            default: ''
        },
        read: {
            type: Number,
            default: 0
        },
        comment: {
            type: Number,
            default: 0
        },
        rateData: {
            type: Number,
            default: 0
        },
        description: {
            type: String,
            default: ''
        },
        publisher: {
            type: String,
            default: ''
        },
        publishTime: {
            type: String,
            default: ''
        }
    },
    methods: {
        open (title) {
            this.$emit('openGalleryCardEmitter', title);
        }
    }
};
</script>

<style lang="less" scoped>
    .gallery-card {
        display: block;
        position: relative;
        cursor: pointer;
        padding: 0;
        border: 0;
        margin-bottom: 30px;
        border-radius: 0;
        overflow: hidden;
        text-decoration: none;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transition: 0.3s;
        transition: 0.3s;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &:hover,
        &:focus {
            box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);
            -webkit-box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15);
            color: #1A4C87;
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
            -moz-transform: none;
        }
        a {
            display: block;
            .img-responsive {
                height: 146px;
                width: 100%;
            }
        }
        .caption {
            padding: 14px 12px 0 12px;
            .author-info {
                height: 22px;
                .author-name {
                    color: #999;
                    font-size: 12px;
                    display: inline-block;
                    max-width: 53%;
                    img {
                        vertical-align: bottom;
                    }
                }
                .comment-count,
                .view-count {
                    color: #999;
                    font-size: 12px;
                    margin: 0 0 0 8px;
                }
            }
            .gallery-card-label {
                font-size: 16px;
                color: #222;
                line-height: 26px;
                margin: 20px 0 10px;
                width: 100%;
                vertical-align: middle;
            }
            .rating {
                margin-bottom: 10px;
            }
            .gallery-card-description {
                color: #666;
                font-size: 12px;
                line-height: 1.5em;
                height: 54px;
                margin-bottom: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
            .gallery-card-time {
                margin-left: -12px;
                margin-right: -12px;
                border-top: 1px solid #ddd;
                color: #999;
                font-size: 12px;
                line-height: 20px;
                padding: 10px 9px;
                margin-bottom: 0px;
                .author-avatar {
                    overflow: hidden;
                    img {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        margin-top: 0px;
                        vertical-align: middle;
                    }
                    .author-name {
                        color: #999;
                        font-size: 12px;
                        display: inline-block;
                        max-width: 53%;
                    }
                    .comment-count {
                        color: #999;
                        font-size: 12px;
                        margin: 0 0 0 8px;
                    }
                }
            }
        }
        .box-footer {
            position: absolute;
            left: 0;
            bottom: -65px;
            height: 45px;
            line-height: 45px;
            width: 100%;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
            background: #ffffff;
            border-top: 1px solid #ddd;
            & > a:hover {
                color: #FF0000;
            }
            &::after {
                position: absolute;
                content: '';
                width: 1px;
                height: 100%;
                background: #ddd;
                top: 0;
                left: 50%;
            }
            a {
                float: left;
                width: 50%;
                text-align: center;
                font-size: 14px;
                color: #969696;
            }
        }
    }

    .gallery-card:hover .box-footer {
        bottom: 0;
    }
</style>
