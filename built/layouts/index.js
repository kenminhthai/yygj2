"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var en_US_1 = require("antd/lib/locale-provider/en_US");
var withRouter_1 = require("umi/withRouter");
var app_1 = require("./app");
exports.default = withRouter_1.default(function (props) {
    return (<antd_1.LocaleProvider locale={en_US_1.default}>
      <app_1.default>
        {props.children}
      </app_1.default>
    </antd_1.LocaleProvider>);
});
