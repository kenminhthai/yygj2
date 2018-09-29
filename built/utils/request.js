"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global window */
var axios_1 = require("axios");
var qs_1 = require("qs");
var jsonp_1 = require("jsonp");
var lodash_clonedeep_1 = require("lodash.clonedeep");
var path_to_regexp_1 = require("path-to-regexp");
var antd_1 = require("antd");
var config_1 = require("./config");
var fetch = function (options) {
    var _a = options.method, method = _a === void 0 ? 'get' : _a, data = options.data, fetchType = options.fetchType, url = options.url;
    var cloneData = lodash_clonedeep_1.default(data);
    try {
        var domain = '';
        if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
            domain = url.match(/[a-zA-z]+:\/\/[^/]*/)[0];
            url = url.slice(domain.length);
        }
        var match = path_to_regexp_1.default.parse(url);
      url = path_to_regexp_1.default.compile(url)(data);
        for (var _i = 0, match_1 = match; _i < match_1.length; _i++) {
            var item = match_1[_i];
            if (item instanceof Object && item.name in cloneData) {
                delete cloneData[item.name];
            }
        }
        url = domain + url;
    }
    catch (e) {
        antd_1.message.error(e.message);
    }
    if (fetchType === 'JSONP') {
        return new Promise(function (resolve, reject) {
            jsonp_1.default(url, {
                param: qs_1.default.stringify(data) + "&callback",
                name: "jsonp_" + new Date().getTime(),
                timeout: 4000,
            }, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve({ statusText: 'OK', status: 200, data: result });
            });
        });
    }
    else if (fetchType === 'YQL') {
        url = "http://query.yahooapis.com/v1/public/yql?q=select * from json where url='" + options.url + "?" + encodeURIComponent(qs_1.default.stringify(options.data)) + "'&format=json";
        data = null;
    }
    switch (method.toLowerCase()) {
        case 'get':
            return axios_1.default.get(url, {
                params: cloneData,
            });
        case 'delete':
            return axios_1.default.delete(url, {
                data: cloneData,
            });
        case 'post':
            return axios_1.default.post(url, cloneData);
        case 'put':
            return axios_1.default.put(url, cloneData);
        case 'patch':
            return axios_1.default.patch(url, cloneData);
        default:
            return axios_1.default(options);
    }
};
function request(options) {
    if (options.url && options.url.indexOf('//') > -1) {
        var origin = options.url.split('//')[0] + "//" + options.url.split('//')[1].split('/')[0];
        if (window.location.origin !== origin) {
            if (config_1.CORS && config_1.CORS.indexOf(origin) > -1) {
                options.fetchType = 'CORS';
            }
            else if (config_1.YQL && config_1.YQL.indexOf(origin) > -1) {
                options.fetchType = 'YQL';
            }
            else {
                options.fetchType = 'JSONP';
            }
        }
    }
    return fetch(options).then(function (response) {
        var statusText = response.statusText, status = response.status;
        var data = options.fetchType === 'YQL' ? response.data.query.results.json : response.data;
        if (data instanceof Array) {
            data = {
                list: data,
            };
        }
        return Promise.resolve(__assign({ success: true, message: statusText, statusCode: status }, data));
    }).catch(function (error) {
        var response = error.response;
        var msg;
        var statusCode;
        if (response && response instanceof Object) {
            var data = response.data, statusText = response.statusText;
            statusCode = response.status;
            msg = data.message || statusText;
        }
        else {
            statusCode = 600;
            msg = error.message || 'Network Error';
        }
        /* eslint-disable */
        return Promise.reject({ success: false, statusCode: statusCode, message: msg });
    });
}
exports.default = request;
