<template>
  <div class="area-tree">
    <div class="area-tree-inner">
      <div class="current-location">
        <p>
          <span>当前所在省：{{currentPosition}}</span>
        </p>
      </div>
      <div class="area-tree-line"></div>
      <div class="usual-position" v-if="isHasUsualPosition" @click.stop="usualPositionListClick($event)">
        <a href="javascript:void(0)" v-if="item in usualPositionList" :key="item.id"
           :nameKey="item.name">{{item.name}}</a>
      </div>
      <div class="operation" v-if="isHasBtnBar || isHasSearchGroup">
        <div class="btn-bar" v-if="isHasBtnBar" @click.stop="changeBy($event)">
                    <span href="javascript:void(0)" class="the-one-btn by-province"
                          :class="byProvinceActive?'btn-active':''" tid="byProvince">按省份</span>
          <span href="javascript:void(0)" class="the-one-btn by-city"
                :class="!byProvinceActive?'btn-active':''" tid="byCity">按城市</span>
        </div>
        <div class="search-group" v-if="isHasSearchGroup">
          <input type="text"
                 tid="selCitySearchInput"
                 class="search-input"
                 placeholder="输入位置名称"
                 onfocus=""
                 autocomplete="off">
          <span class="search-btn" @click.stop="search()">搜索</span>
          <div class="search-form-tip" style="display: none;">请输入正确的城市名</div>
        </div>
      </div>
      <div class="area-tree-category" v-if="isHasAreaTreeLetter">
        <a href="javascript:void(0)" v-for="item in data" :key="item.id">{{item.letter}}</a>
      </div>
      <div class="area-tree-line" v-if="isHasBtnBar || isHasSearchGroup || isHasAreaTreeLetter"></div>
      <div class="area-tree">
        <table class="area-tree-table" cellpadding="0" cellspacing="0" v-if="data && data.length>0">
          <tbody @click.stop="areaTreeTableListClick($event)">
          <tr v-for="f in data" :key="f.id">
            <td v-if="isHasAreaTreeLetter" class="td-letter">
              <div>{{f.letter}}</div>
            </td>
            <td class="td-father" :nameKey="f.name">{{f.name}}：</td>
            <td class="td-children">
              <a href="javascript:void(0)" v-for="s in f.children" :key="s.id" :nameKey="s.name">{{s.name}}</a>
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else>
          <p>暂无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        // 当前的位置
        currentPosition: {
            type: String,
            required: true,
            default: '北京市'
        },
        // 是否提供常用城市
        isHasUsualPosition: {
            type: Boolean,
            required: false,
            default: false
        },
        // 是否提供切换按钮组
        isHasBtnBar: {
            type: Boolean,
            required: false,
            default: false
        },
        // 是否提供搜索功能
        isHasSearchGroup: {
            type: Boolean,
            required: false,
            default: false
        },
        // 是否提供字母索引功能
        isHasAreaTreeLetter: {
            type: Boolean,
            required: false,
            default: false
        },
        // 当前按钮组被激活的是城市还是省份
        byProvinceActive: {
            type: Boolean,
            required: false,
            default: true
        },
        // 常用的地理位置列表
        usualPositionList: {
            type: Array,
            required: false,
            default: function () {
                return [
                    {
                        'id': '0000',
                        'letter': '',
                        'name': 'Empty Data',
                        'nameEn': '',
                        'code': ''
                    }
                ];
            }
        },
        // 辖区树数据
        data: {
            type: Array,
            required: true,
            default: function () {
                return [
                    {
                        'id': '0001',
                        'letter': 'A',
                        'name': 'demo data',
                        'nameEn': 'demo data',
                        'code': '0001',
                        'children': [
                            {
                                'id': '',
                                'name': 'demo data',
                                'nameEn': '',
                                'code': ''
                            }
                        ]
                    }
                ];
            }
        }
    },
    computed: {
        currentPositionComputed () {
            return this.currentPosition;
        }
    },
    methods: {
        init: function () {

        },
        search: function () {

        },
        byProvinceClick: function () {
            this.byProvinceActive = true;
            this.$emit('byProvinceClickEvent');
        },
        byCityClick: function () {
            this.byProvinceActive = false;
            this.$emit('byCityClickEvent');
        },
        changeBy: function (e) {
            if (!e.target.attributes['tid']) return;
            switch (e.target.attributes['tid'].nodeValue) {
            case 'byProvince':
                this.byProvinceClick();
                break;
            case 'byCity':
                this.byCityClick();
                break;
            }
        },
        areaTreeTableListClick: function (e) {
            if (!e.target.attributes['nameKey']) return;
            let selectedOption = e.target.attributes['nameKey'].nodeValue;
            this.$emit('changePositionEvent', selectedOption);
        },
        usualPositionListClick: function (e) {
            if (!e.target.attributes['nameKey']) return;
            let selectedOption = e.target.attributes['nameKey'].nodeValue;
            this.$emit('changePositionEvent', selectedOption);
        }
    }
};
</script>

<style lang="less" scoped>
  @import './index';
</style>
