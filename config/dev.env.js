const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASIC_URL: '"//wh.greatmap.com.cn:16444/cms-server"',
    WEB_BASIC_URL: '"//wh.greatmap.com.cn:16446"',
    GIS_URL: '"//wh.greatmap.com.cn:16442"'
});
