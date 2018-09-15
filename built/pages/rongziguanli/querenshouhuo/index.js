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
var Dragger = antd_1.Upload.Dragger;
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
    antd_1.message.config({
        top: 60,
        duration: 2,
        maxCount: 3,
        getContainer: function () { return document.body; },
    });
    return <Insure />;
};
var Insure = /** @class */ (function (_super) {
    __extends(Insure, _super);
    function Insure() {
        var _this = _super.call(this) || this;
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
        _this.props2 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange: function (_a) {
                var file = _a.file, fileList = _a.fileList;
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [{
                    uid: 1,
                    name: '入库凭证.pdf',
                    status: 'done',
                    reponse: 'Server Error 500',
                    url: 'http://www.baidu.com/xxx.png',
                }],
        };
        _this.props3 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            className: 'upload-list-inline-test',
        };
        return _this;
    }
    Insure.prototype.render = function () {
        return (<div>
              <div id={index_less_1.default.groupbutton}>
                 <ButtonGroup>
                      <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                      <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                      <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                 </ButtonGroup>
              </div>
              <div id={index_less_1.default.title}>
                医药工业 - 医信通 - 确权
              </div>
              <antd_1.Card title="医信通信息" className={index_less_1.default.card}>
                <div className={index_less_1.default.cardcontent} style={{ height: '170px' }}>
                  <div className={index_less_1.default.list} style={{ height: '150px' }}>
                    <p className={index_less_1.default.label}>医信通单号:</p>
                    <p className={index_less_1.default.label}>应付方(医药商业):</p>
                    <p className={index_less_1.default.label}>医信通金额（元）：</p>
                  </div>
                  <div className={index_less_1.default.listinfo} id={index_less_1.default.listinfo2}>
                    <Search size="small" className={index_less_1.default.info} id={index_less_1.default.underline} value="WS2018030021" disabled/>
                    <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX药业有限公司" disabled="true"></antd_1.Input>
                    <antd_1.Input className={index_less_1.default.info} size="small" value="1286240" disabled="true"></antd_1.Input>

                  </div>
                  <div className={index_less_1.default.list} style={{ height: '150px' }}>
                    <p className={index_less_1.default.label}>创建日期:</p>
                    <p className={index_less_1.default.label}>受让方(医药工业):</p>
                    <p className={index_less_1.default.label}>应付日期:</p>
                  </div>
                  <div className={index_less_1.default.listinfo} style={{ height: '150px' }}>
                    <antd_1.Input className={index_less_1.default.info} size="small" value="2018/4/22" disabled="true"></antd_1.Input>
                    <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX制药集团" disabled="true"></antd_1.Input>
                    <antd_1.Input className={index_less_1.default.info} size="small" value="2018/8/24" disabled></antd_1.Input>
                  </div>
                </div>
              </antd_1.Card>
              <antd_1.Card title="确权信息" className={index_less_1.default.card} id={index_less_1.default.card2}>
                  <div className={index_less_1.default.cardcontent}>
                    <div className={index_less_1.default.list}>
                      <p className={index_less_1.default.label} id={index_less_1.default.quequan}>确权:</p>
                      <p className={index_less_1.default.labelfukuan} id={index_less_1.default.labeltime}>付款日期:</p>
                      <p className={index_less_1.default.labelfangshi} id={index_less_1.default.labeltime}>付款方式:</p>
                      <p className={index_less_1.default.labelfujian} id={index_less_1.default.labeltime}>附件:</p>
                    </div>
                    <div className={index_less_1.default.listinfo} id={index_less_1.default.listinfo3}>
                        <ul className={index_less_1.default.checklist}>
                          <li><antd_1.Checkbox id={index_less_1.default.checkfirst} className={index_less_1.default.check}>订单明细无误</antd_1.Checkbox></li>
                          <li><antd_1.Checkbox className={index_less_1.default.check}>发票信息无误</antd_1.Checkbox></li>
                          <li><antd_1.Checkbox className={index_less_1.default.check}>已收货入库</antd_1.Checkbox></li>
                          <li><antd_1.Checkbox className={index_less_1.default.check2}>确认到期足额偿付1286240元至医信通持有人</antd_1.Checkbox></li>
                        </ul>
                      <antd_1.Input id={index_less_1.default.times} size="small" value="2018/8/24"></antd_1.Input>
                      <antd_1.Input id={index_less_1.default.change} size="small" value="银行转账"></antd_1.Input><br />
                      <ul id={index_less_1.default.ulupload}>
                      <li id={index_less_1.default.liuploadlabel2}><div>
                              <Dragger {...this.props3} id={index_less_1.default.liupload2}>
                              <p className="ant-upload-text">点击或拖拽上传</p>
                            </Dragger>
                      </div></li>
                      </ul>
                    </div>
                    <div className={index_less_1.default.list3}>
                      <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>创建日期:</p>
                      <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>受让方(医药工业):</p>
                      <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>应付日期:</p>
                      <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>应付日期:</p>
                      <p id={index_less_1.default.payaccount}>付款账户:</p>
                    </div>
                    <div className={index_less_1.default.listinfo}>
                      <antd_1.Input id={index_less_1.default.accountpay} size="small" value="622908654321654321" disabled="true"></antd_1.Input>
                    </div>
                  </div>
                </antd_1.Card>
            </div>);
    };
    return Insure;
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
