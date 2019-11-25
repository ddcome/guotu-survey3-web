import Config from './../../config/index.js';
import axios from './../../axios/index.js';

/**
 * 默认请求的token处理.
 */
export const Token = {
    init: function () {
        console.log('init');
    },
    refreshToken: function () {
        const url = Config.URL_DEFAULT.generateToken;
        let redirect = Config.URL_DEFAULT.redirect;
        let params = {
            username: Config.URL_DEFAULT.username,
            password: Config.URL_DEFAULT.password,
            referer: redirect,
            client: 'referer',
            f: 'json'
        };
        axios.post(url, params, 'form-data').then(function (response) {
            if (response) {
                Config.URL_DEFAULT.gisConfig.queryToken =
          '?token=' + response.data.token;
            }
        });
        redirect = 'http://localhost:8080/';
        params = {
            username: Config.URL_DEFAULT.username,
            password: Config.URL_DEFAULT.password,
            referer: redirect,
            client: 'referer',
            f: 'json'
        };
        return axios.post(url, params, 'form-data').then(function (response) {
            Config.URL_DEFAULT.gisConfig.analyToken = response.data.token;
        });
    }
};
