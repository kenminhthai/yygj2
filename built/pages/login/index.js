"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var dva_1 = require("dva");
var antd_1 = require("antd");
var utils_1 = require("utils");
var index_less_1 = require("./index.less");
var FormItem = antd_1.Form.Item;
var Login = function (_a) {
    var loading = _a.loading, dispatch = _a.dispatch, _b = _a.form, getFieldDecorator = _b.getFieldDecorator, validateFieldsAndScroll = _b.validateFieldsAndScroll;
    function handleOk() {
        validateFieldsAndScroll(function (errors, values) {
            if (errors) {
                return;
            }
            dispatch({ type: 'login/login', payload: values });
        });
    }
    return (<div className={index_less_1.default.form}>
      <div className={index_less_1.default.logo}>
        <img alt="logo" src={utils_1.config.logo}/>
        <span>{utils_1.config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
        rules: [
            {
                required: true,
            },
        ],
    })(<antd_1.Input onPressEnter={handleOk} placeholder="Username"/>)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
        rules: [
            {
                required: true,
            },
        ],
    })(<antd_1.Input type="password" onPressEnter={handleOk} placeholder="Password"/>)}
        </FormItem>
        <antd_1.Row>
          <antd_1.Button type="primary" onClick={handleOk} loading={loading.effects.login}>
            Sign in
          </antd_1.Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </antd_1.Row>

      </form>
    </div>);
};
Login.propTypes = {
    form: prop_types_1.default.object,
    dispatch: prop_types_1.default.func,
    loading: prop_types_1.default.object,
};
exports.default = dva_1.connect(function (_a) {
    var loading = _a.loading;
    return ({ loading: loading });
})(antd_1.Form.create()(Login));
