<template>
    <BoxContainer class="select-analysis">
        <template slot="title">选择分析类型</template>
        <template slot="content">
            <div class="btn-outter" @click="btnClick($event)">
                <WordCard icon="&#xe6cd;" word="现状分析" height="80px" :wordCardClick="wordCardClickHandle"/>
                <WordCard icon="&#xe850;" word="临时用地分析" height="80px" :wordCardClick="wordCardClickHandle"/>
                <WordCard icon="&#xe626;" word="批而未建用地分析" height="80px" :wordCardClick="wordCardClickHandle"/>
                <WordCard icon="&#xe61c;" word="违法用地分析" height="80px" :wordCardClick="wordCardClickHandle"/>
            </div>
        </template>
    </BoxContainer>
</template>

<script>
import WordCard from '@guotu-survey3-web/views/common/WordCard/index';
import BoxContainer from '@guotu-survey3-web/views/common/BoxContainer/index';

export default {
    components: {BoxContainer, WordCard},
    data () {
        return {
            code: ''
        };
    },
    methods: {
        btnClick (e) {
            try {
                if (e.path[0].localName === 'button') {
                    this.code = e.target.attributes['code'].nodeValue;
                } else if (e.path[0].localName === 'span' && e.path[1].localName === 'button') {
                    this.code = e.path[1].attributes['code'].nodeValue;
                }
            } catch (err) {
                console.log('Error ', err);
            }
        },
        wordCardClickHandle () {

        }
    }
};
</script>

<style lang="less" scoped>
    .select-analysis {
        text-align: left;
        .btn-outter {
            font-size: 0px;
            text-align: center;
            .btn-common {
                font-size: 12px;
                width: 128px;
                height: 75px;
                margin: 0;
                padding: 0px;
                white-space: inherit;
                box-sizing: border-box;
                display: inline-block;
            }
            .boder-top-right {
                border-color: transparent;
                border-left-color: #E0E0E0;
                border-bottom-color: #E0E0E0;
                border-width: 1px;
            }
            .boder-top-left {
                border-color: transparent;
                border-right-color: #E0E0E0;
                border-bottom-color: #E0E0E0;
                border-width: 1px;
            }
            .boder-bottom-right {
                border-color: transparent;
                border-top-color: #E0E0E0;
                border-left-color: #E0E0E0;
                border-width: 1px;
            }
            .boder-bottom-left {
                border-color: transparent;
                border-top-color: #E0E0E0;
                border-right-color: #E0E0E0;
                border-width: 1px;
            }
            .btn-active {
                background-color: #409EFF;
                color: #ffffff;
            }
        }
    }

    .select-analysis {
        text-align: left;
        .pub-btn {
            width: 128px;
            height: 75px;
            margin: 0;
            padding: 0px;
            box-sizing: border-box;
        }
        .boder-top-right {
            border-color: transparent;
            border-left-color: #E0E0E0;
            border-bottom-color: #E0E0E0;
            border-width: 1px;
        }
        .boder-top-left {
            border-color: transparent;
            border-right-color: #E0E0E0;
            border-bottom-color: #E0E0E0;
            border-width: 1px;
        }
        .boder-bottom-right {
            border-color: transparent;
            border-top-color: #E0E0E0;
            border-left-color: #E0E0E0;
            border-width: 1px;
        }
        .boder-bottom-left {
            border-color: transparent;
            border-top-color: #E0E0E0;
            border-right-color: #E0E0E0;
            border-width: 1px;
        }
        .btn-out {
            text-align: center;
        }
    }
</style>
