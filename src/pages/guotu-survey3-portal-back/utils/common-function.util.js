export default {
    /**
   * @description 添加URL参数
   * @method addURLParam
   * @param {String} strUrl URL
   * @param {String} strName 参数名
   * @param {String} strValue 参数值
   * @return {String} 添加参数后的全路径
   */
    addURLParam (strUrl, strName, strValue) {
        if (strUrl) {
            if (strUrl.indexOf('?') >= 0) {
                strUrl += '&' + strName + '=' + strValue;
            } else {
                strUrl += '?' + strName + '=' + strValue;
            }
            return strUrl;
        }
        return null;
    },
    /**
   * 判断是否为空值.
   * @param val 要判断的值.
   * @returns {*}
   */
    isEmpty (val) {
        try {
            if (
                val !== 0 &&
        val !== 1 &&
        (!val ||
          typeof val === 'undefined' ||
          (typeof val === 'string' &&
            val.constructor === String &&
            (val.toLowerCase() === 'undefined' ||
              val.toLowerCase() === 'null')))
            ) {
                return true;
            }
            return false;
        } catch (e) {
            return 'Error: find isEmpty(val) val is error';
        }
    }
};
