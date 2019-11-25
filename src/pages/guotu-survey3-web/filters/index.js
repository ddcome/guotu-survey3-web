// import parseTime, formatTime and set to filter
export {parseTime, formatTime} from '@guotu-survey3-web/utils';

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * 去掉两边空格以及回车换行.
 * @param str
 * @returns {*}
 */
export function trimEmptyAndEnter (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '').replace(/[\r\n]/g, '');
}
