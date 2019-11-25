import init from '../init.service';

const FirstLoadService = {
    // 判断是否第一次加载
    isFistLoad () {
        return window.performance.navigation.type === 0;
    },
    ready (success) {
        // ...
        if (this.isFistLoad()) {
            // 第一次
            // ... code
            init.initFolderService().then(function (res) {
                success();
            });
            init.initArticleService();
            setTimeout(success(), 3000);
        } else {
            success();
        }
    }
};
export default FirstLoadService;
