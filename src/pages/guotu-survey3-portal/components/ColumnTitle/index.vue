<template>
    <div class="leader">
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
};
</script>

<style lang="less" scoped>
.leader{
    height: 1px;
    border-top: 1px solid #e5e5e5;
    margin: 100px 0 40px 0;
    text-align: center;
    line-height: 4px;
    h3{
        color: #FF5A69;
        margin-top: -15px;
        display: inline-block;
        padding: 0 25px;
        background-color: #ffffff;
    }
}
</style>
