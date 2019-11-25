import { CommonFunctionUtil } from './index';
export default {
    columnFormatter (row, column, cellValue) {
        if (CommonFunctionUtil.isEmpty(cellValue)) {
            return '-';
        }
        return cellValue;
    }
};
