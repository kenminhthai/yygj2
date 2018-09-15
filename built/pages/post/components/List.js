"use strict";
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
var antd_1 = require("antd");
var List_less_1 = require("./List.less");
var List = function (_a) {
    var tableProps = __rest(_a, []);
    var columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            className: List_less_1.default.image,
            width: 64,
            render: function (text) { return <img alt="Feture" width={26} src={text}/>; },
        }, {
            title: 'Title',
            dataIndex: 'title',
        }, {
            title: 'Author',
            dataIndex: 'author',
        }, {
            title: 'Categories',
            dataIndex: 'categories',
        }, {
            title: 'Tags',
            dataIndex: 'tags',
        }, {
            title: 'Visibility',
            dataIndex: 'visibility',
        }, {
            title: 'Comments',
            dataIndex: 'comments',
        }, {
            title: 'Views',
            dataIndex: 'views',
        }, {
            title: 'Date',
            dataIndex: 'date',
        },
    ];
    return (<div>
      <antd_1.Table {...tableProps} bordered scroll={{ x: 1200 }} columns={columns} simple className={List_less_1.default.table} rowKey={function (record) { return record.id; }}/>
    </div>);
};
exports.default = List;
