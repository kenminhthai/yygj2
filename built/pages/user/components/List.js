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
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var classnames_1 = require("classnames");
var components_1 = require("components");
var react_router_dom_1 = require("react-router-dom");
var AnimTableBody_1 = require("components/DataTable/AnimTableBody");
var List_less_1 = require("./List.less");
var confirm = antd_1.Modal.confirm;
var List = function (_a) {
    var onDeleteItem = _a.onDeleteItem, onEditItem = _a.onEditItem, isMotion = _a.isMotion, location = _a.location, tableProps = __rest(_a, ["onDeleteItem", "onEditItem", "isMotion", "location"]);
    var _b;
    var handleMenuClick = function (record, e) {
        if (e.key === '1') {
            onEditItem(record);
        }
        else if (e.key === '2') {
            confirm({
                title: 'Are you sure delete this record?',
                onOk: function () {
                    onDeleteItem(record.id);
                },
            });
        }
    };
    var columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 64,
            className: List_less_1.default.avatar,
            render: function (text) { return <img alt="avatar" width={24} src={text}/>; },
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: function (text, record) { return <react_router_dom_1.Link to={"user/" + record.id}>{text}</react_router_dom_1.Link>; },
        }, {
            title: 'NickName',
            dataIndex: 'nickName',
            key: 'nickName',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Gender',
            dataIndex: 'isMale',
            key: 'isMale',
            render: function (text) { return (<span>{text
                ? 'Male'
                : 'Female'}</span>); },
        }, {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'CreateTime',
            dataIndex: 'createTime',
            key: 'createTime',
        }, {
            title: 'Operation',
            key: 'operation',
            width: 100,
            render: function (text, record) {
                return <components_1.DropOption onMenuClick={function (e) { return handleMenuClick(record, e); }} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]}/>;
            },
        },
    ];
    var AnimateBody = function (props) {
        return <AnimTableBody_1.default {...props}/>;
    };
    var CommonBody = function (props) {
        return <tbody {...props}/>;
    };
    return (<antd_1.Table {...tableProps} className={classnames_1.default(List_less_1.default.table, (_b = {}, _b[List_less_1.default.motion] = isMotion, _b))} bordered scroll={{ x: 1250 }} columns={columns} simple rowKey={function (record) { return record.id; }} components={{
        body: { wrapper: isMotion ? AnimateBody : CommonBody },
    }}/>);
};
List.propTypes = {
    onDeleteItem: prop_types_1.default.func,
    onEditItem: prop_types_1.default.func,
    isMotion: prop_types_1.default.bool,
    location: prop_types_1.default.object,
};
exports.default = List;
