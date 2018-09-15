"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var components_1 = require("components");
var _404_less_1 = require("./404.less");
var Error = function () { return (<components_1.Page inner>
  <div className={_404_less_1.default.error}>
    <antd_1.Icon type="frown-o"/>
    <h1>404 Not Found</h1>
  </div>
</components_1.Page>); };
exports.default = Error;
