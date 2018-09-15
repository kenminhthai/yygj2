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
var FormItem = antd_1.Form.Item;
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content, Divider = antd_1.Layout.Divider;
var info = function () {
    antd_1.message.info('申请医信通!');
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
    return <List />;
};
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super.call(this) || this;
        _this.onDelete = function (record) {
            var dataSource = _this.state.dataSource.slice();
            var temp = _this.state.count;
            _this.setState({ count: temp - 1 });
            _this.setState({ dataSource: dataSource.filter(function (item) { return item.key !== record.key; }) });
            antd_1.message.info("\u533B\u4FE1\u901A" + record.id + "\u5DF2\u53D6\u6D88");
        };
        _this.showInfo = function (record) {
            antd_1.message.info("\u67E5\u8BE2\u533B\u4FE1\u901A" + record.id + "\u4FE1\u606F...");
            console.log(Login.propTypes);
            console.log("x");
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
                title: '应付方',
                dataIndex: 'payer',
                key: 'payer',
                render: function (text) { return <a href="javascript:;">{text}</a>; },
            }, {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            }, {
                title: '到期时间',
                dataIndex: 'endTime',
                key: 'endTime',
            }, {
                title: '剩余医信通金额',
                dataIndex: 'blance',
                key: 'blance',
            }, {
                title: '医信通状态',
                dataIndex: 'whitestatus',
                key: 'whitestatus',
            }, {
                title: '转让状态',
                dataIndex: 'changestatus',
                key: 'changestatus',
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: function (text, record) {
                    if (record.whitestatus == '待审批' && record.changestatus == '无转让') {
                        return (<div>
                          <a onClick={function () { return _this.showInfo(record); }}><antd_1.Icon id={index_less_1.default.action} type="search"/></a>
                          <antd_1.Popconfirm title="确认取消医信通？" onConfirm={function () { return _this.onDelete(record); }}>
                              <a href="javascript:;"><antd_1.Icon id={index_less_1.default.action} type="close"/></a>
                          </antd_1.Popconfirm>
                      </div>);
                    }
                    else if (record.whitestatus == '已激活' && record.changestatus == '有转让') {
                        return (<div>
                          <a onClick={function () { return _this.showInfo(record); }}><antd_1.Icon id={index_less_1.default.action} type="search"/></a>
                      </div>);
                    }
                }
            }];
        _this.state = {
            dataSource: [{
                    key: '1',
                    index: '1',
                    id: 'WS2018030021',
                    payer: '浙江XX药业有限公司',
                    createTime: '2018/3/1',
                    endTime: '2018/6/4',
                    blance: 10000,
                    whitestatus: '待审批',
                    changestatus: '无转让',
                    action: ""
                }, {
                    key: '2',
                    index: '2',
                    id: 'WS2018030021',
                    payer: '浙江XX药业有限公司',
                    createTime: '2018/4/15',
                    endTime: '2018/8/25',
                    blance: 5000,
                    whitestatus: '已激活',
                    changestatus: '有转让',
                    action: ""
                }
            ],
            count: 2,
        };
        return _this;
    }
    List.prototype.render = function () {
        return (<div>
              <antd_1.Layout className={index_less_1.default.layout1}>
                  <Header className={index_less_1.default.hed1}>医信通列表</Header>
                  <Content className={index_less_1.default.content1}>
                      <span id={index_less_1.default.owner}>持有方：</span>
                      <antd_1.Input className={index_less_1.default.order} value="浙江XX制药集团" disabled></antd_1.Input>
                  </Content>
                  <Footer className={index_less_1.default.foot1}>
                      <antd_1.Table columns={this.columns} dataSource={this.state.dataSource} pagination={{
            total: 2,
            pageSize: 10,
            defaultPageSize: 10,
            showSizeChanger: true,
            showTotal: function () {
                return "共 2 条数据";
            }
        }}/>
                      <antd_1.Button id={index_less_1.default.save} size="large" type="primary" href="apply">
                          申请医信通
                      </antd_1.Button>
                  </Footer>
              </antd_1.Layout>
          </div>);
    };
    return List;
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
