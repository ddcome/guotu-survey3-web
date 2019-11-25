import vueObj from './../../main';
import {InformationCode} from './../../utils/index';

let InformationUtil = {
    loading: null,
    notify: null,
    // 错误代码
    code: InformationCode,
    showLoading: function (info) {
        console.log(vueObj.vm);
        const infoWords = info || '努力加载中';
        this.loading = vueObj.vm.$loading({
            lock: true,
            text: infoWords,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    },
    closeLoading: function () {
        this.loading.close();
    },
    showNotify: function (type, infoWords, needCloseAuto) {
        if (typeof needCloseAuto === 'undefined' || (needCloseAuto && needCloseAuto === true)) {
            needCloseAuto = 2000;
        } else {
            needCloseAuto = 0;
        }
        let typeCode = '';
        let title = '';
        switch (type || 'info') {
        case 'success':
            typeCode = 'success';
            title = '成功';
            break;
        case 'warning':
            typeCode = 'warning';
            title = '警告';
            break;
        case 'info':
            typeCode = 'info';
            title = '信息';
            break;
        case 'error':
            typeCode = 'error';
            title = '错误';
            break;
        }
        this.notify = vueObj.vm.$notify({
            title: title,
            message: infoWords,
            type: typeCode,
            offset: 80,
            duration: needCloseAuto,
            position: 'top-right'
        });
        return this.notify;
    },
    closeNotify: function () {
        this.notify.close();
    }
};

/**
 * 提供提示信息.
 */
export default InformationUtil;
