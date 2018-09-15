"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var mockjs_1 = require("mockjs");
var utils_1 = require("utils");
var antd_1 = require("antd");
var index_less_1 = require("./index.less");
var api = utils_1.config.api;
var dashboard = api.dashboard, users = api.users, userLogin = api.userLogin, user = api.user, v1test = api.v1test, v2test = api.v2test;
var requestOptions = [
    {
        url: user.replace('/:id', ''),
        desc: 'intercept request by mock.js',
    },
    {
        url: dashboard,
        desc: 'intercept request by mock.js',
    },
    {
        url: userLogin,
        method: 'post',
        data: {
            username: 'guest',
            password: 'guest',
        },
        desc: 'intercept request by mock.js',
    },
    {
        url: users,
        desc: 'intercept request by mock.js',
    },
    {
        url: user,
        desc: 'intercept request by mock.js',
        data: mockjs_1.default.mock({
            id: '@id',
        }),
    },
    {
        url: user.replace('/:id', ''),
        desc: 'intercept request by mock.js',
        method: 'post',
        data: mockjs_1.default.mock({
            name: '@cname',
            nickName: '@last',
            phone: /^1[34578]\d{9}$/,
            'age|11-99': 1,
            address: '@county(true)',
            isMale: '@boolean',
            email: '@email',
            avatar: function () {
                return mockjs_1.default.Random.image('100x100', mockjs_1.default.Random.color(), '#757575', 'png', this.nickName.substr(0, 1));
            },
        }),
    },
    {
        url: user,
        desc: 'intercept request by mock.js',
        method: 'patch',
        data: mockjs_1.default.mock({
            id: '@id',
            name: '@cname',
        }),
    },
    {
        url: user,
        desc: 'intercept request by mock.js',
        method: 'delete',
        data: mockjs_1.default.mock({
            id: '@id',
        }),
    },
    {
        url: v1test,
        desc: 'intercept request by mock.js',
        method: 'get',
    },
    {
        url: v2test,
        desc: 'intercept request by mock.js',
        method: 'get',
    },
    {
        url: 'http://api.asilu.com/weather/',
        desc: 'cross-domain request, but match config.baseURL(./src/utils/config.js)',
    },
    {
        url: 'http://www.zuimeitianqi.com/zuimei/queryWeather',
        data: {
            cityCode: '01010101',
        },
        desc: 'cross-domain request by yahoo\'s yql',
    }
];
var RequestPage = /** @class */ (function (_super) {
    __extends(RequestPage, _super);
    function RequestPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRequest = function () {
            var currntRequest = _this.state.currntRequest;
            var desc = currntRequest.desc, requestParams = __rest(currntRequest, ["desc"]);
            _this.setState(__assign({}, _this.state, { result: <div key="sending">
        请求中<br />
        url:{currntRequest.url}<br />
        method:{currntRequest.method}<br />
        params:{currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'}<br />
      </div> }));
            utils_1.request(__assign({}, requestParams)).then(function (data) {
                var state = _this.state;
                state.result = [_this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data)}</div>];
                _this.setState(state);
            });
        };
        _this.handeleURLChange = function (value) {
            var state = _this.state;
            var curretUrl = value.split('?')[0];
            var curretMethod = value.split('?')[1];
            var currntItem = requestOptions.filter(function (item) {
                var _a = item.method, method = _a === void 0 ? 'get' : _a;
                return curretUrl === item.url && curretMethod === method;
            });
            var currntRequest = currntItem[0];
            state.currntRequest = currntRequest;
            _this.setState(state);
        };
        _this.state = {
            currntRequest: requestOptions[0],
            method: 'get',
            result: '',
        };
        return _this;
    }
    RequestPage.prototype.componentDidMount = function () {
        this.handleRequest();
    };
    RequestPage.prototype.render = function () {
        var colProps = {
            lg: 12,
            md: 24,
        };
        var _a = this.state, result = _a.result, currntRequest = _a.currntRequest;
        var _b = currntRequest.method, method = _b === void 0 ? 'get' : _b;
        return (<div className="content-inner">
        <antd_1.Row gutter={32}>
          <antd_1.Col {...colProps}>
            <antd_1.Card title="Request" style={{
            overflow: 'visible',
        }}>
              <div className={index_less_1.default.option}>
                <antd_1.Select style={{
            width: '100%',
            flex: 1,
        }} defaultValue={method.toLocaleUpperCase() + "   " + requestOptions[0].url} size="large" onChange={this.handeleURLChange}>
                  {requestOptions.map(function (item, index) {
            var m = item.method || 'get';
            return (<antd_1.Select.Option key={index} value={item.url + "?" + m}>
                      {m.toLocaleUpperCase() + "    "}{item.url}
                    </antd_1.Select.Option>);
        })}
                </antd_1.Select>
                <antd_1.Button type="primary" style={{ width: 100, marginLeft: 16 }} onClick={this.handleRequest}>发送</antd_1.Button>
              </div>
              <div className={index_less_1.default.params}>
                <div className={index_less_1.default.label}>Params：</div>
                <antd_1.Input disabled value={currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'} size="large" style={{ width: 200 }} placeholder="null"/>
                <div style={{ flex: 1, marginLeft: 16 }}>{currntRequest.desc}</div>
              </div>
              <div className={index_less_1.default.result}>
                {result}
              </div>
            </antd_1.Card>
          </antd_1.Col>
        </antd_1.Row>
      </div>);
    };
    return RequestPage;
}(react_1.default.Component));
exports.default = RequestPage;
