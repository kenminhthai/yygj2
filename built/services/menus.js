"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var api = utils_1.config.api;
var menus = api.menus;
function query(params) {
    return utils_1.request({
        url: menus,
        method: 'get',
        data: params,
    });
}
exports.query = query;
