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
    return <ZhuanRang />;
};
var ZhuanRang = /** @class */ (function (_super) {
    __extends(ZhuanRang, _super);
    function ZhuanRang() {
        var _this = _super.call(this) || this;
        _this.handleAdd = function () {
            var _a = _this.state, count = _a.count, dataSource = _a.dataSource;
            var newData = {
                key: count + 1,
                index: count + 1,
                ss: "XX\u836F\u4E1A\u6709\u9650\u516C\u53F8" + (count + 1),
                blance: '100000',
                note: ''
            };
            _this.setState({
                dataSource: dataSource.concat([newData]),
                count: count + 1,
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
        _this.onDelete = function () {
            var temp = _this.state.dataSource;
            var lastobj = temp[temp.length - 1];
            console.log(lastobj);
            console.log(_this.state.dataSource.length);
            _this.setState({ dataSource: temp.filter(function (item) { return item.key !== lastobj.key; }) });
        };
        _this.columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                width: 60,
            }, {
                title: '受让方',
                dataIndex: 'ss',
                key: 'ss',
                width: 200,
            }, {
                title: '转让金额(元)',
                dataIndex: 'blance',
                key: 'blance',
                width: 300,
            }, {
                title: '备注',
                dataIndex: 'note',
                key: 'note',
            }
        ];
        _this.state = {
            dataSource: [
                {
                    key: '1',
                    index: '1',
                    ss: '宁波XX药业有限公司',
                    blance: '100000',
                    note: ''
                }, {
                    key: '2',
                    index: '2',
                    ss: '宁波XX药业有限公司',
                    blance: '500000',
                    note: ''
                },
            ],
            count: 2,
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
    ZhuanRang.prototype.render = function () {
        return (<div>
                <div id={index_less_1.default.groupbutton}>
                   <ButtonGroup>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                          <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                    </ButtonGroup>
                </div>
                <div id={index_less_1.default.title}>
                  医药工业 - 医信通 - 背书转让
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
                <antd_1.Card title="转让医信通" className={index_less_1.default.card} style={{ height: '600px' }}>
                    <div className={index_less_1.default.cardcontent}>
                        <antd_1.Table className={index_less_1.default.table} columns={this.columns} dataSource={this.state.dataSource} size="small" scroll={{ y: 320 }} pagination={{
            total: '2',
            pageSize: '10',
            defaultPageSize: '10',
            showSizeChanger: true,
            showTotal: function () {
                return '共 2 条数据';
            }
        }}/>
                        <div id={index_less_1.default.icon}>
                            <a onClick={this.handleAdd}><antd_1.Icon type="plus" style={{ color: 'green', fontSize: '24px' }}/></a>
                            <a onClick={this.onDelete}><antd_1.Icon type="close" style={{ color: 'red', fontSize: '24px' }}/></a>
                        </div>
                        <div className={index_less_1.default.blance}>
                              剩余医信通金额(元):
                              <antd_1.Input value="1286240" style={{ width: '100px' }} disabled/>
                         </div>
                     </div>
                </antd_1.Card>
            </div>);
    };
    return ZhuanRang;
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
