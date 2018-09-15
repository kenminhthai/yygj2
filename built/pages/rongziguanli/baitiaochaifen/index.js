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
var part_png_1 = require("./part.png");
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
    return <ChaiFen />;
};
var ChaiFen = /** @class */ (function (_super) {
    __extends(ChaiFen, _super);
    function ChaiFen() {
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
        _this.columns = [{
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            }, {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                render: function (text) { return <a className={index_less_1.default.chain} href="javascript:;">{text}</a>; },
            }, {
                title: '持有方',
                dataIndex: 'owner',
                key: 'owner',
                render: function (text) { return <a href="javascript:;">{text}</a>; },
            }, {
                title: '持有金额',
                dataIndex: 'blance',
                key: 'blance',
            }, {
                title: '占比',
                dataIndex: 'part',
                key: 'part',
            }
        ];
        //表格列
        _this.columns2 = [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            }, {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
            }, {
                title: '转让方',
                dataIndex: 'zhuanrang',
                key: 'zhuanrang',
            }, {
                title: '受让方',
                dataIndex: 'shourang',
                key: 'shourang',
            }, {
                title: '金额',
                dataIndex: 'price',
                key: 'price',
            }, {
                title: '事件',
                dataIndex: 'action',
                key: 'action',
            }, {
                title: '单号',
                dataIndex: 'id',
                key: 'id',
                render: function (text) { return <a href="javascript:;">{text}</a>; },
            }
        ];
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
        _this.state = {
            dataSource: [
                {
                    key: '1',
                    index: '1',
                    id: 'WS2018030021',
                    owner: '宁波XX制药公司',
                    blance: '150000',
                    part: '18.75%',
                }, {
                    key: '2',
                    index: '2',
                    id: 'WS2018030021',
                    owner: '杭州XX制药公司',
                    blance: '250000',
                    part: '31.25%',
                }, {
                    key: '3',
                    index: '3',
                    id: 'WS2018030021',
                    owner: 'XX保理公司',
                    blance: '100000',
                    part: '12.50%',
                }, {
                    key: '4',
                    index: '4',
                    id: 'WS2018030021',
                    owner: '兴业银行',
                    blance: '300000',
                    part: '37.50%',
                },
            ],
            count1: 4,
            dataSource2: [
                {
                    key: '1',
                    index: '1',
                    time: '2018/4/22',
                    zhuanrang: '浙江XX药业有限公司',
                    shourang: '浙江XX制药集团',
                    price: '800000',
                    action: '初次发行',
                    id: 'WS2018030021',
                }, {
                    key: '2',
                    index: '2',
                    time: '2018/4/22',
                    zhuanrang: '浙江XX制药集团',
                    shourang: '宁波XX制药公司',
                    price: '600000',
                    action: '转让',
                    id: 'WS2018030021',
                }, {
                    key: '3',
                    index: '3',
                    time: '2018/4/22',
                    zhuanrang: '浙江XX制药集团',
                    shourang: '兴业银行',
                    price: '200000',
                    action: '融资',
                    id: 'WS2018030021',
                }, {
                    key: '4',
                    index: '4',
                    time: '2018/4/22',
                    zhuanrang: '宁波XX制药集团',
                    shourang: '杭州XX制药公司',
                    price: '450000',
                    action: '转让',
                    id: 'WS2018030021',
                }, {
                    key: '5',
                    index: '5',
                    time: '2018/4/22',
                    zhuanrang: '杭州XX制药公司',
                    shourang: 'XX保理公司',
                    price: '100000',
                    action: '融资',
                    id: 'WS2018030021',
                }, {
                    key: '6',
                    index: '6',
                    time: '2018/4/22',
                    zhuanrang: '杭州XX制药公司',
                    shourang: '兴业银行',
                    price: '100000',
                    action: '融资',
                    id: 'WS2018030021',
                }
            ],
            count2: 6
        };
        return _this;
    }
    ChaiFen.prototype.render = function () {
        return (<div>
                <div id={index_less_1.default.groupbutton}>
                    <ButtonGroup>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.commintinfo} style={{ backgroundColor: '	LawnGreen', color: 'white' }}>提交</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.saveinfo} style={{ backgroundColor: '	MediumTurquoise', color: 'white' }}>保存</antd_1.Button>
                        <antd_1.Button className={index_less_1.default.button} onClick={this.closeinfo} style={{ backgroundColor: 'orange', color: 'white' }}>关闭</antd_1.Button>
                    </ButtonGroup>
                </div>
                <div id={index_less_1.default.title}>
                    医信通状态
                </div>
                <antd_1.Card title="医信通信息 - WS2018030021：" className={index_less_1.default.card}>
                    <div className={index_less_1.default.cardcontent} style={{ height: '170px' }}>
                        <div className={index_less_1.default.list} style={{ height: '150px' }}>
                            <p className={index_less_1.default.label}>医信通单号:</p>
                            <p className={index_less_1.default.label}>应付方（医药商业）:</p>
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
                <antd_1.Card title="持有信息" className={index_less_1.default.card} id={index_less_1.default.card2}>
                    <div className={index_less_1.default.cardcontent}>
                        <ul id={index_less_1.default.ulinfo}>
                            <li><antd_1.Table className={index_less_1.default.table} columns={this.columns} dataSource={this.state.dataSource} pagination={{
            total: '2',
            pageSize: '10',
            defaultPageSize: '10',
            showSizeChanger: true,
            showTotal: function () {
                return '共 4 条数据';
            }
        }}/></li>
                            <li id={index_less_1.default.liinfo}><img src={part_png_1.default} alt="Norway" width="280" height="130"/></li>
                        </ul>
                    </div>
                </antd_1.Card>
                <antd_1.Card title="流转记录" className={index_less_1.default.card} id={index_less_1.default.card3}>
                    <div className={index_less_1.default.cardcontent}>
                        <antd_1.Table className={index_less_1.default.table} columns={this.columns2} dataSource={this.state.dataSource2} id={index_less_1.default.table2} pagination={{
            total: '2',
            pageSize: '10',
            defaultPageSize: '10',
            showSizeChanger: true,
            showTotal: function () {
                return '共 6 条数据';
            }
        }}/>
                    </div>
                </antd_1.Card>
            </div>);
    };
    return ChaiFen;
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
