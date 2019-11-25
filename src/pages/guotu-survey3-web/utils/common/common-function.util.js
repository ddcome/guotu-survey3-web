export default {
    // 添加URL参数
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
    // 判断是否为空值.
    isEmpty (val) {
        try {
            if (
                val !== 0 && val !== 1 && (!val || typeof val === 'undefined' || (typeof val === 'string' && val.constructor === String && (val.toLowerCase() === 'undefined' || val.toLowerCase() === 'null')))
            ) {
                return true;
            }
            return false;
        } catch (e) {
            return 'Error: find isEmpty(val) val is error';
        }
    },
    toRgbaArr (sHex, alpha = 255) {
        let res = [];
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        let sColor = sHex.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = '#';
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            // 处理六位的颜色值  web前端学习交流扣qun：731771211   志同道合者进！
            let sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
            }
            return res.concat(sColorChange).concat(alpha);
        } else {
            return sColor;
        }
    },
    deepCopy (data) {
        let temp = JSON.stringify(data);
        return JSON.parse(temp);
    },
    uuid () {
        let s = [];
        let hexDigits = '0123456789abcdef';
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';

        let uuid = s.join('');
        return uuid;
    }
};
