"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var utils_1 = require("utils");
var recentSales_less_1 = require("./recentSales.less");
var status = {
    1: {
        color: utils_1.color.green,
        text: 'SALE',
    },
    2: {
        color: utils_1.color.yellow,
        text: 'REJECT',
    },
    3: {
        color: utils_1.color.red,
        text: 'TAX',
    },
    4: {
        color: utils_1.color.blue,
        text: 'EXTENDED',
    },
};
function RecentSales(_a) {
    var data = _a.data;
    var columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
        }, {
            title: 'STATUS',
            dataIndex: 'status',
            render: function (text) { return <antd_1.Tag color={status[text].color}>{status[text].text}</antd_1.Tag>; },
        }, {
            title: 'DATE',
            dataIndex: 'date',
            render: function (text) { return new Date(text).format('yyyy-MM-dd'); },
        }, {
            title: 'PRICE',
            dataIndex: 'price',
            render: function (text, it) { return <span style={{ color: status[it.status].color }}>${text}</span>; },
        },
    ];
    return (<div className={recentSales_less_1.default.recentsales}>
      <antd_1.Table pagination={false} columns={columns} rowKey={function (record, key) { return key; }} dataSource={data.filter(function (item, key) { return key < 5; })}/>
    </div>);
}
RecentSales.propTypes = {
    data: prop_types_1.default.array,
};
exports.default = RecentSales;
