"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var api = utils_1.config.api;
var user = api.user;
function query(params) {
    return utils_1.request({
        url: user,
        method: 'get',
        data: params,
    });
}
exports.query = query;
function create(params) {
    return utils_1.request({
        url: user.replace('/:id', ''),
        method: 'post',
        data: params,
    });
}
exports.create = create;
function remove(params) {
    return utils_1.request({
        url: user,
        method: 'delete',
        data: params,
    });
}
exports.remove = remove;
function update(params) {
    return utils_1.request({
        url: user,
        method: 'patch',
        data: params,
    });
}
exports.update = update;
