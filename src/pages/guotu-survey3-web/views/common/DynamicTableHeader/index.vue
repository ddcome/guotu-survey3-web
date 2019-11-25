<template :slot-scope="labelHead" >
    <el-table-column
            :label="coloumnHeader.HeaderName"
            :prop="coloumnHeader.Prop"
            align="center">
        <template v-for="item in coloumnHeader.Children">
            <DynamicTableHeader v-if="item.Children && item.Children.length >= 1" :key="item.Id"
                                :coloumnHeader="item"></DynamicTableHeader>
            <el-table-column
                    v-else :key="item.Id"
                    :label="item.HeaderName"
                    :prop="item.Prop"
                    align="center">
            </el-table-column>
        </template>
    </el-table-column>

</template>

<script>
export default {
    name: 'DynamicTableHeader',
    props: {
        coloumnHeader: {
            type: Object,
            required: true
        }
    },
    methods: {
        labelHead (h, {column, index}) {
            const l = column.label.length;
            const f = 10;
            let CminW = 0;
            if (f * l < 160) {
                CminW = 160;
            } else {
                CminW = f * l;
            }
            column.minWidth = CminW;
            return h('div', {
                class: 'table-head',
                style: {
                    width: '100%', whiteSpace: 'pre', lineHeight: 'unset'
                }
            },
            [
                column.label
            ]
            )
            ;
        }
    }
};
</script>
