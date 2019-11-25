<template>
    <transition name="fade">
        <div v-if="show" class="analysis-process-message el-notification">
            <div class="el-notification__group">
                <h2 class="el-notification__title">缓冲区分析</h2>
                <div class="el-notification__content">
                    <p>正在分析中，请稍等...</p>
                    <p v-if="message"><i class="el-icon-loading"></i>{{ message }}</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        message: String,
        show: Boolean
    }
};
</script>

<style lang="less" scoped>
    .analysis-process-message {
        position: absolute;
        top: 80px;
        right: 10px;
    }
</style>
