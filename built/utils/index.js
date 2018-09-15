"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global window */
var lodash_clonedeep_1 = require("lodash.clonedeep");
classnames;
from;
'classnames';
config;
from;
'./config';
request;
from;
'./request';
var theme_1 = require("./theme");
exports.color = theme_1.color;
// 连字符转驼峰
String.prototype.hyphenToHump = function () {
    return this.replace(/-(\w)/g, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args[1].toUpperCase();
    });
};
// 驼峰转连字符
String.prototype.humpToHyphen = function () {
    return this.replace(/([A-Z])/g, '-$1').toLowerCase();
};
// 日期格式化
Date.prototype.format = function (format) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'H+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, ("" + this.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
/**
 * @param  name {String}
 * @return  {String}
 */
function queryURL(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return decodeURI(r[2]);
    return null;
}
exports.queryURL = queryURL;
/**
 * 数组内查询
 * @param   {array}      array
 * @param   {String}    id
 * @param   {String}    keyAlias
 * @return  {Array}
 */
function queryArray(array, key, keyAlias) {
    if (keyAlias === void 0) { keyAlias = 'key'; }
    if (!(array instanceof Array)) {
        return null;
    }
    var item = array.filter(function (_) { return _[keyAlias] === key; });
    if (item.length) {
        return item[0];
    }
    return null;
}
exports.queryArray = queryArray;
/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
function arrayToTree(array, id, pid, children) {
    if (id === void 0) { id = 'id'; }
    if (pid === void 0) { pid = 'pid'; }
    if (children === void 0) { children = 'children'; }
    var data = lodash_clonedeep_1.default(array);
    var result = [];
    var hash = {};
    data.forEach(function (item, index) {
        hash[data[index][id]] = data[index];
    });
    data.forEach(function (item) {
        var hashVP = hash[item[pid]];
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(item);
        }
        else {
            result.push(item);
        }
    });
    return result;
}
exports.arrayToTree = arrayToTree;
