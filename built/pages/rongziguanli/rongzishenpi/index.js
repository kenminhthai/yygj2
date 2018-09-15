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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var dva_1 = require("dva");
var antd_1 = require("antd");
var index_less_1 = require("./index.less");
var ButtonGroup = antd_1.Button.Group;
var Search = antd_1.Input.Search;
var FormItem = antd_1.Form.Item;
var RadioGroup = antd_1.Radio.Group;
antd_1.message.config({
    top: 60,
    duration: 2,
    maxCount: 3,
    getContainer: function () { return document.body; },
});
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
    return <ShenPi />;
};
var ShenPi = /** @class */ (function (_super) {
    __extends(ShenPi, _super);
    function ShenPi() {
        var _this = _super.call(this) || this;
        _this.state = {
            value: 1,
        };
        _this.onChange = function (e) {
            _this.setState({
                value: e.target.value,
            });
        };
        _this.saveinfo = function () {
            antd_1.message.info('保存成功!');
        };
        _this.commintinfo = function () {
            antd_1.message.info("提交成功!");
        };
        _this.closeinfo = function () {
            antd_1.message.info("关闭页面!");
        };
        _this.props = {
            name: 'file',
            action: '',
            headers: {
                authorization: 'authorization-text',
            },
            onChange: function (info) {
            },
        };
        _this.props2 = (<antd_1.Menu>
                <antd_1.Menu.Item key="1">兴业银行</antd_1.Menu.Item>
                <antd_1.Menu.Item key="2">光大银行</antd_1.Menu.Item>
            </antd_1.Menu>);
        return _this;
    }
    ShenPi.prototype.render = function () {
        return (<div>
                <div id={index_less_1.default.groupbutton}>
                    <ButtonGroup>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                    </ButtonGroup>
                </div>
                <div id={index_less_1.default.title}>
                  资金方 - 医信通 - 融资审批
                </div>
                <antd_1.Card title="医信通信息 - WS2018030021" className={index_less_1.default.card} style={{ height: '280px' }}>
                    <div className={index_less_1.default.cardcontent}>
                        <div className={index_less_1.default.list}>
                          <p className={index_less_1.default.label}>医信通单号:</p>
                          <p className={index_less_1.default.label}>应付方(医药商业):</p>
                          <p className={index_less_1.default.label}>医信通金额(元)：</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                            <Search className={index_less_1.default.info} id={index_less_1.default.underline} disabled value="WS2018030021"/>
                            <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX药业有限公司" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="1286240" disabled></antd_1.Input>
                        </div>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>创建日期:</p>
                            <p className={index_less_1.default.label}>受让方(医药工业):</p>
                            <p className={index_less_1.default.label}>应付日期:</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="2018/4/22" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX制药集团" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="2018/8/24" disabled></antd_1.Input>
                        </div>
                    </div>
                </antd_1.Card>
                <antd_1.Card title="融资申请 - WS2018030021F001" className={index_less_1.default.card} style={{ height: '450px' }}>
                    <div className={index_less_1.default.cardcontent}>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>申请单号:</p>
                            <p className={index_less_1.default.label}>医信通持有方:</p>
                            <p className={index_less_1.default.label}>医信通金额(元)：</p>
                            <p className={index_less_1.default.label}>融资渠道：<span style={{ color: 'red' }}>*</span></p>
                            <p className={index_less_1.default.label}>收款账户：</p>
                            <p className={index_less_1.default.label}>融资成本(年化)</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                            <Search className={index_less_1.default.info} id={index_less_1.default.underline} disabled value="WS2018030021F001"/>
                            <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="宁波XX药业有限公司" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="100000" disabled></antd_1.Input>
                            <antd_1.Dropdown overlay={this.props2} disabled>
                                <antd_1.Button id={index_less_1.default.infoselect}>
                                    <span id={index_less_1.default.selectlael}>兴业银行</span> <antd_1.Icon type="down"/>
                                </antd_1.Button>
                            </antd_1.Dropdown>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="已开通" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="10%" disabled></antd_1.Input>
                        </div>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>申请日期 :</p>
                            <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>医信通持有方:</p>
                            <p className={index_less_1.default.label}>融资时间(天)：</p>
                            <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>融资渠道：<span style={{ color: 'red' }}>*</span></p>
                            <p className={index_less_1.default.label}>收款账号：</p>
                            <p className={index_less_1.default.label}>扣息实收(元)</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                            <Search className={index_less_1.default.info} disabled value="2018/4/28"/>
                            <antd_1.Input className={index_less_1.default.info} style={{ visibility: 'hidden' }} size="small" value="宁波XX药业有限公司" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="118" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} style={{ visibility: 'hidden' }} size="small" value="兴业银行" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="622908123456123000" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="96767.12" disabled></antd_1.Input>
                        </div>
                    </div>
                </antd_1.Card>
                <antd_1.Card title="融资审批 - WS2018030021F001" className={index_less_1.default.card} style={{ height: '250px' }}>
                    <div className={index_less_1.default.cardcontent}>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>批准融资:</p>
                            <p className={index_less_1.default.label}>放款日期:</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                        <RadioGroup className={index_less_1.default.info} onChange={this.onChange} value={this.state.value}>
                                 <antd_1.Radio value="1">是</antd_1.Radio>
                                 <antd_1.Radio value="2">否</antd_1.Radio>
                        </RadioGroup>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="2018/4/28" disabled></antd_1.Input>
                        </div>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>审批日期 :</p>
                            <p className={index_less_1.default.label}>实际需打款(元):</p>
                        </div>
                        <div className={index_less_1.default.listinfo}>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="2018/4/28" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="small" value="96767.12" disabled></antd_1.Input>
                        </div>
                    </div>
                </antd_1.Card>
            </div>);
    };
    return ShenPi;
}(react_1.default.Component));
Login.propTypes = {
    form: prop_types_1.default.object,
    dispatch: prop_types_1.default.func,
    loading: prop_types_1.default.object,
};
exports.default = dva_1.connect(function (_a) {
    var loading = _a.loading;
    return ({ loading: loading });
})(antd_1.Form.create()(Login));
