/**
 * 时间戳转换成时间字符串.
 */
import Vue from 'vue';

/**
 * 年月日 时分秒
 */
Vue.filter('timestampToString', (value) => {
    try {
        if (!value) {
            return '';
        } else {
            const d = new Date(parseInt(value, 10));
            const dateStr =
        d.getFullYear() +
        '-' +
        (d.getMonth() + 1) +
        '-' +
        d.getDate() +
        ' ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
            return dateStr;
        }
    } catch (e) {
        return 'Error';
    }
});

/**
 * 年月日
 */
Vue.filter('timestampToSimpleString', (value) => {
    try {
        if (!value) {
            return '';
        } else {
            const d = new Date(parseInt(value, 10));
            const dateStr =
        d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            return dateStr;
        }
    } catch (e) {
        return 'Error';
    }
});
/*
* 将详细事件简化到年月日
* */
Vue.filter('timeToSimpleString', (value) => {
    try {
        if (!value) {
            return '';
        } else {
            return value.substring(0, 10);
        }
    } catch (e) {
        return 'Error';
    }
});
