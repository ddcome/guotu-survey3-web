<template>
    <div class="layer-tree-new">
        <el-tree
                :data='$store.state.greatMap.mapObj.treeNodes'
                show-checkbox
                node-key='id'
                :props='defaultProps'
                default-expand-all
                :default-checked-keys='$store.state.greatMap.mapObj.defaultCheckedIds'
                @check-change='layerHandleCheckChange'>
            <!--@check-change='layerHandleCheckChange'-->
            <!--@node-click='layerHandleNodeClick'-->
            <!--:default-expanded-keys='[1, 2, 3, 4, 5, 6]'-->
            <!--:default-checked-keys='getTreeCheckedArr()'-->
            <span class='tree-node-span' slot-scope='{ node }'>
                            <span class='tree-node-label' :title='node.label'>
                                {{ node.label }}
                            </span>
                        </span>
        </el-tree>
    </div>
</template>

<script>

export default {
    data () {
        return {
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        };
    },
    methods: {
        layerHandleCheckChange (data, checked) {
            this.$store.state.greatMap.mapObj.checkChange(data.id, checked);
        }
    }
};
</script>

<style lang="less" scoped>
    .layer-tree-new {

    }
</style>
