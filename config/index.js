// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
// const gisServer = 'https://gis120.arcgisonline.cn';
const gisServer = 'http://wh.greatmap.com.cn';
// const gisServer = 'https://gis120.arcgisonline.cn';

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
        assetsPublicPath: process.env.NODE_ENV === 'production' ? '/mh/' : '/',
        // 代理配置
        proxyTable: {
            // 三调数据库管理系统的代理
            '/web_api/*': {
                target: 'http://192.168.1.120:6083',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/web_api': ''
                }
            },
            // 门户后台代理
            '/back_api/*': {
                target: 'http://192.168.1.120:6081/cms-server',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/back_api': ''
                }
            },
            '/portal_api/*': {
                // target: 'http://wh.greatmap.com.cn:16444/cms-server',
                target: 'http://192.168.1.78:8081/cms-server',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/portal_api': '' // 测试环境代理使用
                }
            },
            '/portal_arcgis/*': {
                target: 'https://gis120.arcgisonline.cn',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/portal_arcgis': ''
                }
            },
            // 内网的 gis-server 代理
            '/portal/': {
                target: gisServer,
                changeOrigin: true,
                secure: false
            },
            '/server/': {
                target: gisServer,
                changeOrigin: true,
                secure: false
            },
            '/arcgis/': {
                target: `${gisServer}:16443`,
                changeOrigin: true,
                secure: false
            }
        },
        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // https://webpack.js.org/configuration/devtool/#development
        // devtool: 'cheap-module-eval-source-map',
        devtool: 'eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true,

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false
    },

    build: {
        // Template for index.html
        // index: path.resolve(__dirname, '../dist/index.html'),
        web: path.resolve(__dirname, '../dist/web.html'),
        portal: path.resolve(__dirname, '../dist/portal.html'),
        back: path.resolve(__dirname, '../dist/back.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
        assetsPublicPath: process.env.NODE_ENV === 'production' ? '/mh/' : '/',

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
