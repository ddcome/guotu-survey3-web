import {CommonFunctionUtil} from './../utils/index';
import axios from 'axios';

/**
 * 封装axios，实现发送/响应接口的拦截，来实现统一提示等效果
 */
// 请求拦截器
// axios.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     // 导出
//     if (
//       response.headers &&
//       (response.headers['content-type'] === 'text/xml' ||
//         response.headers['content-type'] === 'application/x-msdownload' ||
//         response.headers['content-type'] ===
//           'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
//     ) {
//       return response;
//     }
//     return response.data;
//   },
//   (err) => {
//     if (err && err.response) {
//       switch (err.response.status) {
//         case 400:
//           err.message = '错误请求';
//           break;
//         case 401:
//           err.message = '未授权，请重新登录';
//           break;
//         case 403:
//           err.message = '拒绝访问';
//           break;
//         case 404:
//           err.message = '请求错误,未找到该资源';
//           break;
//         case 405:
//           err.message = '请求方法未允许';
//           break;
//         case 408:
//           err.message = '请求超时';
//           break;
//         case 500:
//           err.message = '服务器端出错';
//           break;
//         case 501:
//           err.message = '网络未实现';
//           break;
//         case 502:
//           err.message = '网络错误';
//           break;
//         case 503:
//           err.message = '服务不可用';
//           break;
//         case 504:
//           err.message = '网络超时';
//           break;
//         case 505:
//           err.message = 'http版本不支持该请求';
//           break;
//         default:
//           err.message = `连接错误${err.response.status}`;
//       }
//     } else {
//       err.message = '连接到服务器失败';
//     }
//     return Promise.reject(err);
//   }
// );

export default {
    $father: axios,
    post (url, params, contentType) {
        if (contentType === 'form-data') {
            // 设置axios为form-data
            contentType = 'application/x-www-form-urlencoded';
            axios.defaults.transformRequest = [
                function (data) {
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }
            ];
        } else if (contentType === 'json') {
            contentType = 'application/json;charset=UTF-8';
            params = JSON.stringify(params);
        }

        return axios({
            method: 'post',
            url: url,
            data: params,
            timeout: 15000,
            headers: {
                // 'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': contentType,
                token: params.token
            }
        })
            .then((response) => {
                if (response.success === false) {
                    return Promise.reject(response);
                } else {
                    return Promise.resolve(response);
                }
            })
            .catch((res) => {
                return Promise.reject(res);
            });
    },
    get (url, params) {
        // 如果是get请求，则加上时间戳，避免缓存
        url = CommonFunctionUtil.addURLParam(
            url,
            'timestamp',
            new Date().getTime()
        );
        return axios({
            method: 'get',
            url: url,
            params: params, // get 请求时带的参数
            timeout: 15000,
            headers: {
                // 'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8',
                token: params.token
            }
        })
            .then((response) => {
                if (response && response.success === false) {
                    return Promise.reject(response);
                } else {
                    return Promise.resolve(response);
                }
            })
            .catch((res) => {
                return Promise.reject(res);
            });
    }
};
