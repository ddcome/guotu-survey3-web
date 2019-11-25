<template>
    <div class="box-container">
        <div class="box-container-inner">
            <div class="box-title">
                <slot name="title"></slot>
            </div>
            <div class="box-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
    .box-container {
        border-radius: 5px;
        border: 1px solid #cccccc;
        margin: 15px 5px;
        font-size: 12px;
        .box-container-inner {
            padding: 5px;
            .box-title {
                background-color: rgb(239, 239, 239);
                height: 36px;
                line-height: 36px;
                text-align: left;
                padding-left: 10px;
            }
            .box-content {
                margin: 10px 0px;
            }
        }
    }
</style>
