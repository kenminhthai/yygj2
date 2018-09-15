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
/* global document */
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var moment_1 = require("moment");
var components_1 = require("components");
var antd_1 = require("antd");
var city_1 = require("utils/city");
var Search = antd_1.Input.Search;
var RangePicker = antd_1.DatePicker.RangePicker;
var ColProps = {
    xs: 24,
    sm: 12,
    style: {
        marginBottom: 16,
    },
};
var TwoColProps = __assign({}, ColProps, { xl: 96 });
var Filter = function (_a) {
    var onAdd = _a.onAdd, isMotion = _a.isMotion, switchIsMotion = _a.switchIsMotion, onFilterChange = _a.onFilterChange, filter = _a.filter, _b = _a.form, getFieldDecorator = _b.getFieldDecorator, getFieldsValue = _b.getFieldsValue, setFieldsValue = _b.setFieldsValue;
    var handleFields = function (fields) {
        var createTime = fields.createTime;
        if (createTime.length) {
            fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')];
        }
        return fields;
    };
    var handleSubmit = function () {
        var fields = getFieldsValue();
        fields = handleFields(fields);
        onFilterChange(fields);
    };
    var handleReset = function () {
        var fields = getFieldsValue();
        for (var item in fields) {
            if ({}.hasOwnProperty.call(fields, item)) {
                if (fields[item] instanceof Array) {
                    fields[item] = [];
                }
                else {
                    fields[item] = undefined;
                }
            }
        }
        setFieldsValue(fields);
        handleSubmit();
    };
    var handleChange = function (key, values) {
        var fields = getFieldsValue();
        fields[key] = values;
        fields = handleFields(fields);
        onFilterChange(fields);
    };
    var name = filter.name, address = filter.address;
    var initialCreateTime = [];
    if (filter.createTime && filter.createTime[0]) {
        initialCreateTime[0] = moment_1.default(filter.createTime[0]);
    }
    if (filter.createTime && filter.createTime[1]) {
        initialCreateTime[1] = moment_1.default(filter.createTime[1]);
    }
    return (<antd_1.Row gutter={24}>
      <antd_1.Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
        {getFieldDecorator('name', { initialValue: name })(<Search placeholder="Search Name" onSearch={handleSubmit}/>)}
      </antd_1.Col>
      <antd_1.Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }} id="addressCascader">
        {getFieldDecorator('address', { initialValue: address })(<antd_1.Cascader style={{ width: '100%' }} options={city_1.default} placeholder="Please pick an address" onChange={handleChange.bind(null, 'address')} getPopupContainer={function () { return document.getElementById('addressCascader'); }}/>)}
      </antd_1.Col>
      <antd_1.Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} id="createTimeRangePicker">
        <components_1.FilterItem label="Createtime">
          {getFieldDecorator('createTime', { initialValue: initialCreateTime })(<RangePicker style={{ width: '100%' }} onChange={handleChange.bind(null, 'createTime')} getCalendarContainer={function () {
        return document.getElementById('createTimeRangePicker');
    }}/>)}
        </components_1.FilterItem>
      </antd_1.Col>
      <antd_1.Col {...TwoColProps} xl={{ span: 10 }} md={{ span: 24 }} sm={{ span: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <antd_1.Button type="primary" className="margin-right" onClick={handleSubmit}>Search</antd_1.Button>
            <antd_1.Button onClick={handleReset}>Reset</antd_1.Button>
          </div>
          <div className="flex-vertical-center">
            <antd_1.Switch className="ant-switch-large" style={{ marginRight: 16 }} defaultChecked={isMotion} onChange={switchIsMotion} checkedChildren="Motion" unCheckedChildren="Motion"/>
            <antd_1.Button type="ghost" onClick={onAdd}>Create</antd_1.Button>
          </div>
        </div>
      </antd_1.Col>
    </antd_1.Row>);
};
Filter.propTypes = {
    onAdd: prop_types_1.default.func,
    isMotion: prop_types_1.default.bool,
    switchIsMotion: prop_types_1.default.func,
    form: prop_types_1.default.object,
    filter: prop_types_1.default.object,
    onFilterChange: prop_types_1.default.func,
};
exports.default = antd_1.Form.create()(Filter);
