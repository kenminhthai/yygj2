"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
exports.default = {
    onError: function (e) {
        e.preventDefault();
        antd_1.message.error(e.message);
    },
};
