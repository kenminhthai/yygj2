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
var dva_model_extend_1 = require("dva-model-extend");
exports.model = {
    reducers: {
        updateState: function (state, _a) {
            var payload = _a.payload;
            return __assign({}, state, payload);
        },
    },
};
exports.pageModel = dva_model_extend_1.default(exports.model, {
    state: {
        list: [],
        pagination: {
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: function (total) { return "Total " + total + " Items"; },
            current: 1,
            total: 0,
            pageSize: 10,
        },
    },
    reducers: {
        querySuccess: function (state, _a) {
            var payload = _a.payload;
            var list = payload.list, pagination = payload.pagination;
            return __assign({}, state, { list: list, pagination: __assign({}, state.pagination, pagination) });
        },
    },
});
