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
    return <ShenHe />;
};
var ShenHe = /** @class */ (function (_super) {
    __extends(ShenHe, _super);
    function ShenHe() {
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
        _this.showInfo = function (record) {
            antd_1.message.info("\u67E5\u770B\u6587\u4EF6" + record.file + "...");
        };
        _this.onDelete = function (record) {
            var dataSource = _this.state.dataSource.slice();
            var temp = _this.state.count;
            _this.setState({ count: temp - 1 });
            _this.setState({ dataSource: dataSource.filter(function (item) { return item.key !== record.key; }) });
            antd_1.message.info("\u6587\u4EF6" + record.file + "\u5DF2\u5220\u9664");
        };
        _this.columns = [{
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '文件',
                dataIndex: 'file',
                key: 'file',
                render: function (text) { return <a className={index_less_1.default.file}>{text}</a>; },
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: function (text, record) {
                    return (<div>
                           <a><antd_1.Button shape="circle" icon="search" onClick={function () { return _this.showInfo(record); }}/></a>
                           <antd_1.Popconfirm title="确认删除文件？" onConfirm={function () { return _this.onDelete(record); }}>
                                <a><antd_1.Button shape="circle" icon="close"/></a>
                           </antd_1.Popconfirm>
                       </div>);
                }
            }
        ];
        _this.state = {
            dataSource: [
                {
                    key: '1',
                    index: '1',
                    type: '发票',
                    file: '发票.pdf',
                    action: ""
                }, {
                    key: '2',
                    index: '2',
                    type: '运单',
                    file: '运单.pdf',
                    action: <a href="javascript:;"> <antd_1.Button shape="circle" icon="search"/><antd_1.Button shape="circle" icon="close"/></a>
                }, {
                    key: '3',
                    index: '3',
                    type: '合同',
                    file: '采购合同1.pdf',
                    action: <a href="javascript:;"> <antd_1.Button shape="circle" icon="search"/><antd_1.Button shape="circle" icon="close"/></a>
                }, {
                    key: '4',
                    index: '4',
                    type: '合同',
                    file: '年度合同.pdf',
                    action: <a href="javascript:;"> <antd_1.Button shape="circle" icon="search"/><antd_1.Button shape="circle" icon="close"/></a>
                }
            ],
            count: 4,
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
        return _this;
    }
    ShenHe.prototype.render = function () {
        return (<div>
                <div id={index_less_1.default.groupbutton}>
                     <ButtonGroup>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                     </ButtonGroup>
                </div>
              <div id={index_less_1.default.title}>
                    供金平台 - 医信通 - 资料审核
              </div>
              <antd_1.Card title="医信通信息" className={index_less_1.default.card} style={{ height: '280px' }}>
                  <div className={index_less_1.default.cardcontent}>
                      <div className={index_less_1.default.list}>
                          <p className={index_less_1.default.label}>医信通单号:</p>
                          <p className={index_less_1.default.label}>应付方(医药商业):</p>
                          <p className={index_less_1.default.label}>医信通金额(元)：</p>
                      </div>
                      <div className={index_less_1.default.listinfo}>
                          <Search className={index_less_1.default.info} id={index_less_1.default.underline} disabled value="WS2018030021"/>
                          <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX药业有限公司" disabled="true"></antd_1.Input>
                          <antd_1.Input className={index_less_1.default.info} size="small" value="1286240" disabled="true"></antd_1.Input>
                      </div>
                      <div className={index_less_1.default.list}>
                          <p className={index_less_1.default.label}>创建日期:</p>
                          <p className={index_less_1.default.label}>受让方(医药工业):</p>
                          <p className={index_less_1.default.label}>应付日期:</p>
                      </div>
                      <div className={index_less_1.default.listinfo}>
                          <antd_1.Input className={index_less_1.default.info} size="small" value="2018/4/22" disabled="true"></antd_1.Input>
                          <antd_1.Input className={index_less_1.default.info} id={index_less_1.default.underline} size="small" value="浙江XX制药集团" disabled="true"></antd_1.Input>
                          <antd_1.Input className={index_less_1.default.info} size="small" value="2018/8/24" disabled></antd_1.Input>
                      </div>
                  </div>
              </antd_1.Card>
              <antd_1.Card title="资料审核" className={index_less_1.default.card} style={{ height: '600px' }}>
                  <antd_1.Table className={index_less_1.default.table} columns={this.columns} dataSource={this.state.dataSource} size="large" pagination={{
            total: '2',
            pageSize: '10',
            defaultPageSize: '10',
            showSizeChanger: true,
            showTotal: function () {
                return '共 2 条数据';
            }
        }}/>
              </antd_1.Card>
            </div>);
    };
    return ShenHe;
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
