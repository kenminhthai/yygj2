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
var city_1 = require("utils/city");
var FormItem = antd_1.Form.Item;
var formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
var modal = function (_a) {
    var _b = _a.item, item = _b === void 0 ? {} : _b, onOk = _a.onOk, _c = _a.form, getFieldDecorator = _c.getFieldDecorator, validateFields = _c.validateFields, getFieldsValue = _c.getFieldsValue, modalProps = __rest(_a, ["item", "onOk", "form"]);
    var handleOk = function () {
        validateFields(function (errors) {
            if (errors) {
                return;
            }
            var data = __assign({}, getFieldsValue(), { key: item.key });
            data.address = data.address.join(' ');
            onOk(data);
        });
    };
    var modalOpts = __assign({}, modalProps, { onOk: handleOk });
    return (<antd_1.Modal {...modalOpts}>
      <antd_1.Form layout="horizontal">
        <FormItem label="Name" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
        initialValue: item.name,
        rules: [
            {
                required: true,
            },
        ],
    })(<antd_1.Input />)}
        </FormItem>
        <FormItem label="NickName" hasFeedback {...formItemLayout}>
          {getFieldDecorator('nickName', {
        initialValue: item.nickName,
        rules: [
            {
                required: true,
            },
        ],
    })(<antd_1.Input />)}
        </FormItem>
        <FormItem label="Gender" hasFeedback {...formItemLayout}>
          {getFieldDecorator('isMale', {
        initialValue: item.isMale,
        rules: [
            {
                required: true,
                type: 'boolean',
            },
        ],
    })(<antd_1.Radio.Group>
            <antd_1.Radio value>Male</antd_1.Radio>
            <antd_1.Radio value={false}>Female</antd_1.Radio>
          </antd_1.Radio.Group>)}
        </FormItem>
        <FormItem label="Age" hasFeedback {...formItemLayout}>
          {getFieldDecorator('age', {
        initialValue: item.age,
        rules: [
            {
                required: true,
                type: 'number',
            },
        ],
    })(<antd_1.InputNumber min={18} max={100}/>)}
        </FormItem>
        <FormItem label="Phone" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
        initialValue: item.phone,
        rules: [
            {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
            },
        ],
    })(<antd_1.Input />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
        initialValue: item.email,
        rules: [
            {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: 'The input is not valid E-mail!',
            },
        ],
    })(<antd_1.Input />)}
        </FormItem>
        <FormItem label="Address" hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
        initialValue: item.address && item.address.split(' '),
        rules: [
            {
                required: true,
            },
        ],
    })(<antd_1.Cascader style={{ width: '100%' }} options={city_1.default} placeholder="Pick an address"/>)}
        </FormItem>
      </antd_1.Form>
    </antd_1.Modal>);
};
modal.propTypes = {
    form: prop_types_1.default.object.isRequired,
    type: prop_types_1.default.string,
    item: prop_types_1.default.object,
    onOk: prop_types_1.default.func,
};
exports.default = antd_1.Form.create()(modal);
