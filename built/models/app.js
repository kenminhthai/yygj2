"use strict";
/* global window */
/* global document */
/* global location */
/* eslint no-restricted-globals: ["error", "event"] */
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
var router_1 = require("dva/router");
var qs_1 = require("qs");
var config_1 = require("config");
var enums_1 = require("enums");
var app_1 = require("services/app");
var menusService = require("services/menus");
var query_string_1 = require("query-string");
var prefix = config_1.default.prefix;
exports.default = {
    namespace: 'app',
    state: {
        user: {},
        permissions: {
            visit: [],
        },
        menu: [
            {
                id: 1,
                icon: 'laptop',
                name: 'Dashboard',
                router: '/dashboard',
            },
        ],
        menuPopoverVisible: false,
        siderFold: window.localStorage.getItem(prefix + "siderFold") === 'true',
        darkTheme: window.localStorage.getItem(prefix + "darkTheme") === 'true',
        isNavbar: document.body.clientWidth < 769,
        navOpenKeys: JSON.parse(window.localStorage.getItem(prefix + "navOpenKeys")) || [],
        locationPathname: '',
        locationQuery: {},
    },
    subscriptions: {
        setupHistory: function (_a) {
            var dispatch = _a.dispatch, history = _a.history;
            history.listen(function (location) {
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname,
                        locationQuery: location.query,
                    },
                });
            });
        },
        setup: function (_a) {
            var dispatch = _a.dispatch;
            dispatch({ type: 'query' });
            var tid;
            window.onresize = function () {
                clearTimeout(tid);
                tid = setTimeout(function () {
                    dispatch({ type: 'changeNavbar' });
                }, 300);
            };
        },
    },
    effects: {
        query: function (_a, _b) {
            var _c, success, user, locationPathname, list, permissions_1, menu;
            var payload = _a.payload;
            var call = _b.call, put = _b.put, select = _b.select;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, call(app_1.query, payload)];
                    case 1:
                        _c = _d.sent(), success = _c.success, user = _c.user;
                        return [4 /*yield*/, select(function (_) { return _.app; })];
                    case 2:
                        locationPathname = (_d.sent()).locationPathname;
                        if (!(success && user)) return [3 /*break*/, 7];
                        return [4 /*yield*/, call(menusService.query)];
                    case 3:
                        list = (_d.sent()).list;
                        permissions_1 = user.permissions;
                        menu = list;
                        if (permissions_1.role === enums_1.EnumRoleType.ADMIN || permissions_1.role === enums_1.EnumRoleType.DEVELOPER) {
                            permissions_1.visit = list.map(function (item) { return item.id; });
                        }
                        else {
                            menu = list.filter(function (item) {
                                var cases = [
                                    permissions_1.visit.includes(item.id),
                                    item.mpid ? permissions_1.visit.includes(item.mpid) || item.mpid === '-1' : true,
                                    item.bpid ? permissions_1.visit.includes(item.bpid) : true,
                                ];
                                return cases.every(function (_) { return _; });
                            });
                        }
                        return [4 /*yield*/, put({
                                type: 'updateState',
                                payload: {
                                    user: user,
                                    permissions: permissions_1,
                                    menu: menu,
                                },
                            })];
                    case 4:
                        _d.sent();
                        if (!(location.pathname === '/login')) return [3 /*break*/, 6];
                        return [4 /*yield*/, put(router_1.routerRedux.push({
                                pathname: '/dashboard',
                            }))];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        if (!(config_1.default.openPages && config_1.default.openPages.indexOf(locationPathname) < 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, put(router_1.routerRedux.push({
                                pathname: '/login',
                                search: query_string_1.default.stringify({
                                    from: locationPathname,
                                }),
                            }))];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        },
        logout: function (_a, _b) {
            var data;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, call(app_1.logout, qs_1.parse(payload))];
                    case 1:
                        data = _c.sent();
                        if (!data.success) return [3 /*break*/, 4];
                        return [4 /*yield*/, put({ type: 'updateState', payload: {
                                    user: {},
                                    permissions: { visit: [] },
                                    menu: [{
                                            id: 1,
                                            icon: 'laptop',
                                            name: 'Dashboard',
                                            router: '/dashboard',
                                        }],
                                } })];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, put({ type: 'query' })];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4: throw (data);
                    case 5: return [2 /*return*/];
                }
            });
        },
        changeNavbar: function (action, _a) {
            var app, isNavbar;
            var put = _a.put, select = _a.select;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (select(function (_) { return _; }))];
                    case 1:
                        app = (_b.sent()).app;
                        isNavbar = document.body.clientWidth < 769;
                        if (!(isNavbar !== app.isNavbar)) return [3 /*break*/, 3];
                        return [4 /*yield*/, put({ type: 'handleNavbar', payload: isNavbar })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        },
    },
    reducers: {
        updateState: function (state, _a) {
            var payload = _a.payload;
            return __assign({}, state, payload);
        },
        switchSider: function (state) {
            window.localStorage.setItem(prefix + "siderFold", !state.siderFold);
            return __assign({}, state, { siderFold: !state.siderFold });
        },
        switchTheme: function (state) {
            window.localStorage.setItem(prefix + "darkTheme", !state.darkTheme);
            return __assign({}, state, { darkTheme: !state.darkTheme });
        },
        switchMenuPopver: function (state) {
            return __assign({}, state, { menuPopoverVisible: !state.menuPopoverVisible });
        },
        handleNavbar: function (state, _a) {
            var payload = _a.payload;
            return __assign({}, state, { isNavbar: payload });
        },
        handleNavOpenKeys: function (state, _a) {
            var navOpenKeys = _a.payload;
            return __assign({}, state, navOpenKeys);
        },
    },
};
