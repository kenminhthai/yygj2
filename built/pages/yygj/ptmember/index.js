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
var TextArea = antd_1.Input.TextArea;
var Dragger = antd_1.Upload.Dragger;
var selectRow = [];
var props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange: function (info) {
        var status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            antd_1.message.success(info.file.name + " file uploaded successfully.");
        }
        else if (status === 'error') {
            antd_1.message.error(info.file.name + " file upload failed.");
        }
    },
};
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
    return <Apply />;
};
var Apply = /** @class */ (function (_super) {
    __extends(Apply, _super);
    function Apply(props) {
        var _this = _super.call(this, props) || this;
        _this.onDelete = function () {
            console.log(selectRow);
            var temp = _this.state.dataSource;
            for (var i = 0; i < selectRow.length; i++) {
                console.log("i=" + i + "selectRow[" + i + "]=" + selectRow[i]);
                //console.log(this.state.dataSource);
                temp = temp.filter(function (item) { return item.key !== selectRow[i]; });
            }
            _this.setState({ dataSource: temp });
            //console.log(this.state.dataSource.length);
            //this.setState({count:temp.length});
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
        _this.rowSelection = {
            onChange: function (selectedRowKeys, selectedRows) {
                var temp = selectedRowKeys;
                selectRow = temp;
            }
        };
        _this.handleAdd = function () {
            var _a = _this.state, count = _a.count, dataSource = _a.dataSource;
            var newData = {
                key: count + 1,
                index: count + 1,
                medname: "\u836F\u54C1" + (count + 1),
                medtype: '',
                rule: '',
                pack: '',
                unit: '',
                sum: '',
                order: '',
                price: '',
            };
            _this.setState({
                dataSource: dataSource.concat([newData]),
                count: count + 1,
            });
        };
        _this.columns = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
                width: 60,
            }, {
                title: '药品名',
                dataIndex: 'medname',
                key: 'medname',
                render: function (text) { return <div>{text}<antd_1.Icon type="search" style={{ float: 'right' }}/></div>; },
                width: 170,
            }, {
                title: '剂型',
                dataIndex: 'medtype',
                key: 'medtype',
                width: 100,
            }, {
                title: '规格',
                dataIndex: 'rule',
                key: 'rule',
                width: 130,
            }, {
                title: '包装',
                dataIndex: 'pack',
                key: 'pack',
                width: 70,
            }, {
                title: '单位',
                dataIndex: 'unit',
                key: 'unit',
                width: 60,
            }, {
                title: '数量',
                dataIndex: 'sum',
                key: 'sum',
                width: 100,
            }, {
                title: '批次',
                dataIndex: 'order',
                key: 'order',
                width: 60,
            }, {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
            }
        ];
        //表格数据
        _this.state = {
            dataSource: [
                { key: '1',
                    index: '1',
                    medname: '葡萄糖注射液',
                    medtype: '注射液',
                    rule: '50ml:0.45g',
                    pack: '1',
                    unit: '瓶',
                    sum: 50000,
                    order: '',
                    price: '2.35',
                }, {
                    key: '2',
                    index: '2',
                    medname: '葡萄糖氯化钠注射液',
                    medtype: '注射液',
                    rule: '500ml:25g:4.5g',
                    pack: '1',
                    unit: '袋',
                    sum: 10000,
                    order: '',
                    price: '5.32',
                }, {
                    key: '3',
                    index: '3',
                    medname: '阿奇霉素胶囊',
                    medtype: '胶囊剂',
                    rule: '0.5g(50万单位)',
                    pack: '6',
                    unit: '盒',
                    sum: 8000,
                    order: '',
                    price: '14.35',
                }, {
                    key: '4',
                    index: '4',
                    medname: '玉屏风颗粒',
                    medtype: '颗粒剂',
                    rule: '5g',
                    pack: '15',
                    unit: '盒',
                    sum: 100000,
                    order: '',
                    price: '24.35',
                }, {
                    key: '5',
                    index: '5',
                    medname: '叶酸片',
                    medtype: '素片',
                    rule: '5mg',
                    pack: '100',
                    unit: '瓶',
                    sum: 20000,
                    order: '',
                    price: '2.7',
                },
            ],
            count: 5,
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
            listType: 'picture',
            className: 'upload-list-inline-test',
        };
        _this.props3 = (<antd_1.Menu>
                <antd_1.Menu.Item key="1">已发货</antd_1.Menu.Item>
                <antd_1.Menu.Item key="2">未发货</antd_1.Menu.Item>
            </antd_1.Menu>);
        _this.props4 = (<antd_1.Menu>
                <antd_1.Menu.Item key="1">浙江XX药业有限公司</antd_1.Menu.Item>
            </antd_1.Menu>);
        return _this;
    }
    Apply.prototype.render = function () {
        return (<div>
                <div id={index_less_1.default.groupbutton}>
                    <ButtonGroup>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                    </ButtonGroup>
                    <div id={index_less_1.default.title}>
                        医药工业 - 医信通 - 申请
                    </div>
                </div>
                <antd_1.Card title="编号:  WS2018030021" className={index_less_1.default.card}>
                    <div className={index_less_1.default.cardcontent}>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>申请方(医药工业):</p>
                            <p className={index_less_1.default.label}>申请类型:</p>
                            <p className={index_less_1.default.label}>订单状态：<span style={{ color: 'red' }}> *</span></p>
                            <p className={index_less_1.default.label}>工业公司销售订单编号:</p>
                            <p className={index_less_1.default.label}>合同编号:</p>
                        </div>
                        <div className={index_less_1.default.list} style={{ width: "240px" }}>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="浙江XX制药集团" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="药品销售订单应付医信通" disabled></antd_1.Input>
                            <antd_1.Dropdown overlay={this.props3}>
                                <antd_1.Button id={index_less_1.default.infoselect} size="large">
                                   <span id={index_less_1.default.fahuo}>已发货</span><antd_1.Icon type="down"/>
                                </antd_1.Button>
                            </antd_1.Dropdown>
                            <antd_1.Input className={index_less_1.default.info} size="large"></antd_1.Input>
                            <Search className={index_less_1.default.info}/><a><antd_1.Icon type="plus" id={index_less_1.default.icon2}/></a>
                        </div>
                        <div className={index_less_1.default.list}>
                            <p className={index_less_1.default.label}>创建日期:</p>
                            <p className={index_less_1.default.label}>应付方(医药商业):</p>
                            <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>box</p>
                            <p className={index_less_1.default.label}>商业公司采购订单编号:</p>
                        </div>
                        <div className={index_less_1.default.list} style={{ width: "220px" }}>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="2018/4/18" disabled></antd_1.Input>
                            <antd_1.Dropdown overlay={this.props4}>
                                <antd_1.Button className={index_less_1.default.info} disabled>
                                    浙江XX药业有限公司 <antd_1.Icon type="down"/>
                                </antd_1.Button>
                            </antd_1.Dropdown>
                            <antd_1.Input className={index_less_1.default.info} style={{ visibility: 'hidden' }}></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="100008956"></antd_1.Input>
                        </div>
                    </div>
                </antd_1.Card>
                <antd_1.Card title="订单明细" className={index_less_1.default.card} style={{ height: '500px' }}>
                    <antd_1.Table className={index_less_1.default.table} columns={this.columns} dataSource={this.state.dataSource} rowSelection={this.rowSelection} scroll={{ y: 320 }} pagination={{
            total: 2,
            pageSize: 10,
            defaultPageSize: 10,
            showSizeChanger: true,
            showTotal: function () {
                return "共 6 条数据";
            }
        }}/>
                    <div id={index_less_1.default.icon}>
                        <a onClick={this.handleAdd}><antd_1.Icon type="plus" style={{ color: 'green', fontSize: '24px' }}/></a>
                        <a onClick={this.onDelete}><antd_1.Icon type="close" style={{ color: 'red', fontSize: '24px' }}/></a>
                    </div>
                    <div style={{ float: 'right' }}>
                        总价:
                        <antd_1.Input value="1286240" style={{ width: '100px' }}/>
                    </div>
                </antd_1.Card>
                <antd_1.Card title="医信通申请" className={index_less_1.default.card} style={{ height: '280px' }}>
                    <div className={index_less_1.default.cardcontent}>
                        <div className={index_less_1.default.list} id={index_less_1.default.applylist}>
                            <p className={index_less_1.default.label}>订单总金额(元):</p>
                            <p className={index_less_1.default.label}>账期(天):</p>
                            <p className={index_less_1.default.label}>申请医信通金额(元)：<span style={{ color: 'red' }}> *</span></p>
                        </div>
                        <div className={index_less_1.default.list} id={index_less_1.default.applylist}>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="1286240" disabled></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="90"></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="128640" style={{ backgroundColor: 'MediumSpringGreen' }}></antd_1.Input>
                        </div>
                        <div className={index_less_1.default.list} id={index_less_1.default.applylist} style={{ marginLeft: '50px' }}>
                            <p className={index_less_1.default.label}>应收金额(元):<span style={{ color: 'red' }}> *</span></p>
                            <p className={index_less_1.default.label} style={{ visibility: 'hidden' }}>应收金额(元):</p>
                            <p className={index_less_1.default.label}>医信通比例:<span style={{ color: 'red' }}> *</span></p>
                        </div>
                        <div className={index_less_1.default.list} id={index_less_1.default.applylist}>
                            <antd_1.Input className={index_less_1.default.info} size="large" value="1286240"></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} style={{ visibility: 'hidden' }} value="1286240"></antd_1.Input>
                            <antd_1.Input className={index_less_1.default.info} disabled size="large" value="100%"></antd_1.Input>
                        </div>
                     </div>
                </antd_1.Card>
                <antd_1.Card title="相关材料" className={index_less_1.default.card3}>
                <div className={index_less_1.default.cardcontent}>
                      <div className={index_less_1.default.upload}>
                            <ul>
                                <li><div><p className={index_less_1.default.lilable}>发票编号:</p><antd_1.Input className={index_less_1.default.liinfo} size="large" value="131001761234"></antd_1.Input></div></li>
                                <li id={index_less_1.default.liuploadlabel}><div><p id={index_less_1.default.lilable3}>发票扫描件:</p>
                                        <Dragger {...props} id={index_less_1.default.liupload2}>
                                        <p className="ant-upload-text">点击或拖拽上传</p>
                                      </Dragger>
                                </div></li>
                                <li><div><p className={index_less_1.default.lilable}>物流单号:</p><antd_1.Input className={index_less_1.default.liinfo} size="large" value="131001761234"></antd_1.Input></div></li>
                                <li id={index_less_1.default.liuploadlabel}><div><p id={index_less_1.default.lilable3}>物流扫描件:</p>
                                        <Dragger {...props} id={index_less_1.default.liupload2}>
                                        <p className="ant-upload-text">点击或拖拽上传</p>
                                      </Dragger>
                                </div></li>
                                <li id={index_less_1.default.liuploadlabel2}><div><p id={index_less_1.default.lilable3}>其他材料:</p>
                                        <Dragger {...props} id={index_less_1.default.liupload2}>
                                        <p className="ant-upload-text">点击或拖拽上传</p>
                                      </Dragger>
                                </div></li>
                            </ul>
                      </div>
                      <div className={index_less_1.default.upload}>
                            <ul id={index_less_1.default.uploadul}>
                                <li><p className={index_less_1.default.lilable2}>发票金额(元):</p><antd_1.Input className={index_less_1.default.liinfo2} size="large" value="1376276.8"></antd_1.Input></li>
                                <li style={{ visibility: "hidden" }}><p className={index_less_1.default.lilable2}>发票金额:</p><antd_1.Input className={index_less_1.default.liinfo2} size="large" value="1376276.8"></antd_1.Input></li>
                                <li><p className={index_less_1.default.lilable2}>发货时间:</p><antd_1.Input className={index_less_1.default.liinfo2} size="large" value="2018/4/17"></antd_1.Input></li>
                                <li style={{ visibility: "hidden" }}><p className={index_less_1.default.lilable2}>发票金额:</p><antd_1.Input className={index_less_1.default.liinfo2} size="large" value="1376276.8"></antd_1.Input></li>
                                <li><p className={index_less_1.default.lilable2}>备注:</p><TextArea className={index_less_1.default.liinfo2} rows={20} style={{ height: '60px', marginLeft: '87px', width: "220px" }}/></li>
                            </ul>
                      </div>
                </div>
                </antd_1.Card>
            </div>);
    };
    return Apply;
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
