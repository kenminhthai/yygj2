"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var api = utils_1.config.api;
var users = api.users;
function query(params) {
    return utils_1.request({
        url: users,
        method: 'get',
        data: params,
    });
}
exports.query = query;
function remove(params) {
    return utils_1.request({
        url: users + '/delete',
        method: 'post',
        data: params,
    });
}
exports.remove = remove;
