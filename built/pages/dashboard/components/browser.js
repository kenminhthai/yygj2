"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var utils_1 = require("utils");
var browser_less_1 = require("./browser.less");
var status = {
    1: {
        color: utils_1.color.green,
    },
    2: {
        color: utils_1.color.red,
    },
    3: {
        color: utils_1.color.blue,
    },
    4: {
        color: utils_1.color.yellow,
    },
};
function Browser(_a) {
    var data = _a.data;
    var columns = [
        {
            title: 'name',
            dataIndex: 'name',
            className: browser_less_1.default.name,
        }, {
            title: 'percent',
            dataIndex: 'percent',
            className: browser_less_1.default.percent,
            render: function (text, it) { return <antd_1.Tag color={status[it.status].color}>{text}%</antd_1.Tag>; },
        },
    ];
    return <antd_1.Table pagination={false} showHeader={false} columns={columns} rowKey={function (record, key) { return key; }} dataSource={data}/>;
}
Browser.propTypes = {
    data: prop_types_1.default.array,
};
exports.default = Browser;
