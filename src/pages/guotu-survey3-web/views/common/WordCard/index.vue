<template>
    <div class="word-card-outer" :class="active?'word-card-outer-active':''"
         :style="{height: height, width: width}" @click.stop="wordCardClick(obj, word)">
        <div class="word-card">
            <div class="word-card-inner">
                <i class="iconfont word-icon" v-html="icon"></i>
                <span class="word">{{word}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: 'auto'
        },
        width: {
            type: String,
            default: '50%'
        },
        icon: {
            type: String,
            default: ''
        },
        word: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        obj: {
            type: Object,
            default: () => {
            }
        }
    },
    methods: {
        wordCardClick (obj, word) {
            this.$emit('wordCardClick', obj);
        }
    }
};
</script>

<style lang="less" scoped>
    .word-card-outer {
        display: inline-block;
        font-size: 12px;
        text-align: center;
        vertical-align: top;
        .word-card {
            width: 100%;
            height: 100%;
            display: flex;
            .word-card-inner {
                clear: both;
                margin: 20px;
                width: calc(100% - 40px);
                align-self: center;
                justify-content: center;
                .word-icon,
                .word {
                    justify-content: center;
                    display: block;
                }
                .word-icon {
                    font-size: 30px;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .word-card-outer:hover,
    .word-card-outer-active {
        background-color: #409EFF;
        -moz-box-shadow: 0px 0px 5px #cccccc;
        -webkit-box-shadow: 0px 0px 5px #cccccc;
        box-shadow: 0px 0px 5px #cccccc;
        cursor: pointer;
        -moz-transition: background-color 0.5s linear; /* Firefox 4 */
        -webkit-transition: background-color 0.5s linear; /* Safari and Chrome */
        -o-transition: background-color 0.5s linear; /* Opera */
        transition: background-color 0.5s linear;
        .word-card {
            .word-card-inner {
                .word-icon,
                .word {
                    color: #fff;
                }
            }
        }
    }
</style>
