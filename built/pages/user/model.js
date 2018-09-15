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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global window */
var dva_model_extend_1 = require("dva-model-extend");
var utils_1 = require("utils");
var user_1 = require("./services/user");
var usersService = require("./services/users");
var model_1 = require("utils/model");
var query = usersService.query;
var prefix = utils_1.config.prefix;
exports.default = dva_model_extend_1.default(model_1.pageModel, {
    namespace: 'user',
    state: {
        currentItem: {},
        modalVisible: false,
        modalType: 'create',
        selectedRowKeys: [],
        isMotion: window.localStorage.getItem(prefix + "userIsMotion") === 'true',
    },
    subscriptions: {
        setup: function (_a) {
            var dispatch = _a.dispatch, history = _a.history;
            history.listen(function (location) {
                if (location.pathname === '/user') {
                    var payload = location.query || { page: 1, pageSize: 10 };
                    dispatch({
                        type: 'query',
                        payload: payload,
                    });
                }
            });
        },
    },
    effects: {
        query: function (_a, _b) {
            var data;
            var _c = _a.payload, payload = _c === void 0 ? {} : _c;
            var call = _b.call, put = _b.put;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, call(query, payload)];
                    case 1:
                        data = _d.sent();
                        if (!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, put({
                                type: 'querySuccess',
                                payload: {
                                    list: data.data,
                                    pagination: {
                                        current: Number(payload.page) || 1,
                                        pageSize: Number(payload.pageSize) || 10,
                                        total: data.total,
                                    },
                                },
                            })];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        },
        delete: function (_a, _b) {
            var data, selectedRowKeys;
            var payload = _a.payload;
            var call = _b.call, put = _b.put, select = _b.select;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, call(user_1.remove, { id: payload })];
                    case 1:
                        data = _c.sent();
                        return [4 /*yield*/, select(function (_) { return _.user; })];
                    case 2:
                        selectedRowKeys = (_c.sent()).selectedRowKeys;
                        if (!data.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(function (_) { return _ !== payload; }) } })];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4: throw data;
                    case 5: return [2 /*return*/];
                }
            });
        },
        multiDelete: function (_a, _b) {
            var data;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, call(usersService.remove, payload)];
                    case 1:
                        data = _c.sent();
                        if (!data.success) return [3 /*break*/, 3];
                        return [4 /*yield*/, put({ type: 'updateState', payload: { selectedRowKeys: [] } })];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3: throw data;
                    case 4: return [2 /*return*/];
                }
            });
        },
        create: function (_a, _b) {
            var data;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, call(user_1.create, payload)];
                    case 1:
                        data = _c.sent();
                        if (!data.success) return [3 /*break*/, 3];
                        return [4 /*yield*/, put({ type: 'hideModal' })];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3: throw data;
                    case 4: return [2 /*return*/];
                }
            });
        },
        update: function (_a, _b) {
            var id, newUser, data;
            var payload = _a.payload;
            var select = _b.select, call = _b.call, put = _b.put;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, select(function (_a) {
                            var user = _a.user;
                            return user.currentItem.id;
                        })];
                    case 1:
                        id = _c.sent();
                        newUser = __assign({}, payload, { id: id });
                        return [4 /*yield*/, call(user_1.update, newUser)];
                    case 2:
                        data = _c.sent();
                        if (!data.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, put({ type: 'hideModal' })];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4: throw data;
                    case 5: return [2 /*return*/];
                }
            });
        },
    },
    reducers: {
        showModal: function (state, _a) {
            var payload = _a.payload;
            return __assign({}, state, payload, { modalVisible: true });
        },
        hideModal: function (state) {
            return __assign({}, state, { modalVisible: false });
        },
        switchIsMotion: function (state) {
            window.localStorage.setItem(prefix + "userIsMotion", !state.isMotion);
            return __assign({}, state, { isMotion: !state.isMotion });
        },
    },
});
