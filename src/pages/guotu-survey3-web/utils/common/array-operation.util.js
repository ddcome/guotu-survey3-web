export default {
    /**
 * @param arr 元数据
 * @param childrensKey 子项的键值
 * @param aimKey 汇总的目标key
 */
    getDiffLevelDataFromArray (arr, childrensKey = 'childrens', aimKey) {
        console.time('getDiffLevelDataFromArray');
        console.log('算法[getDiffLevelDataFromArray] input', arr);
        let res = [];
        for (let index in arr) {
            let pile = 0; // 定桩,第一层
            this.beforePush(res, 0);
            res[0].push(arr[index][aimKey]);
            this.diffLevelHandle(arr[index][childrensKey], pile, 1, res, childrensKey, aimKey);
        }
        console.timeEnd('getDiffLevelDataFromArray');
        console.log('算法[getDiffLevelDataFromArray] output', res);
        return res;
    },
    diffLevelHandle (arr, pile, resWhichLevel, res, childrensKey, aimKey) {
        for (let index in arr) {
            this.beforePush(res, resWhichLevel);
            res[resWhichLevel].push(arr[index][aimKey]);
            if (arr[index].hasOwnProperty(childrensKey) && arr[index][childrensKey].length > 0) {
                resWhichLevel += 1;
                // 递归
                this.diffLevelHandle(arr[index][childrensKey], pile, resWhichLevel, res, childrensKey, aimKey);
            }
        }
    },
    beforePush (res, resWhichLevel) {
        if (res.length === 0) {
            res.push([]);
            return;
        }
        if (res.length < resWhichLevel + 1) {
            res.push([]);
        }
    },
    makeMoreLevelToOneLevel (arr, childrensKey) {
        console.time('makeMoreLevelToOneLevel');
        console.log('算法[makeMoreLevelToOneLevel] input', arr);
        let res = [];
        for (let index in arr) {
            if (arr[index].hasOwnProperty(childrensKey) && arr[index][childrensKey].length > 0) {
                // 递归单元
                this.moreLevelToOneLevelUnit(arr[index][childrensKey], childrensKey, res);
                arr[index][childrensKey] = null; // 删除childrensKey值
            }
            res.push(arr[index]);
        }
        console.timeEnd('makeMoreLevelToOneLevel');
        console.log('算法[makeMoreLevelToOneLevel] output', res);
        return res;
    },
    moreLevelToOneLevelUnit (arr, childrensKey, res) {
        for (let index in arr) {
            res.push(arr[index]);
            if (arr[index].hasOwnProperty(childrensKey) && arr[index][childrensKey].length > 0) {
                // 递归单元
                this.moreLevelToOneLevelUnit(arr[index][childrensKey], childrensKey, res);
            }
        }
    }
};
