"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var api = utils_1.config.api;
var user = api.user, userLogout = api.userLogout, userLogin = api.userLogin;
function login(params) {
    return utils_1.request({
        url: userLogin,
        method: 'post',
        data: params,
    });
}
exports.login = login;
function logout(params) {
    return utils_1.request({
        url: userLogout,
        method: 'get',
        data: params,
    });
}
exports.logout = logout;
function query(params) {
    return utils_1.request({
        url: user.replace('/:id', ''),
        method: 'get',
        data: params,
    });
}
exports.query = query;
