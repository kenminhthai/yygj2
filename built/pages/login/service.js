"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var api = utils_1.config.api;
var userLogin = api.userLogin;
function login(data) {
    return utils_1.request({
        url: userLogin,
        method: 'post',
        data: data,
    });
}
exports.login = login;
