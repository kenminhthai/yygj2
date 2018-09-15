"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("utils");
var APIV1 = utils_1.config.APIV1;
function query(params) {
    params.key = 'i7sau1babuzwhycn';
    return utils_1.request({
        url: APIV1 + "/weather/now.json",
        method: 'get',
        data: params,
    });
}
exports.query = query;
