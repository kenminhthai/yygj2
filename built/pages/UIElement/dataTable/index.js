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
var react_1 = require("react");
var components_1 = require("components");
var antd_1 = require("antd");
var DataTablePage = /** @class */ (function (_super) {
    __extends(DataTablePage, _super);
    function DataTablePage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelectChange = function (gender) {
            _this.setState({
                filterCase: {
                    gender: gender,
                },
            });
        };
        _this.state = {
            filterCase: {
                gender: '',
            },
        };
        return _this;
    }
    DataTablePage.prototype.render = function () {
        var filterCase = this.state.filterCase;
        var staticDataTableProps = {
            dataSource: [{
                    key: '1', name: 'John Brown', age: 24, address: 'New York',
                }, {
                    key: '2', name: 'Jim Green', age: 23, address: 'London',
                }],
            columns: [{ title: 'name', dataIndex: 'name' }, { title: 'Age', dataIndex: 'age' }, { title: 'Address', dataIndex: 'address' }],
            pagination: false,
        };
        var fetchDataTableProps = {
            fetch: {
                url: 'https://randomuser.me/api',
                data: {
                    results: 10,
                    testPrams: 'test',
                },
                dataKey: 'results',
            },
            columns: [
                { title: 'Name', dataIndex: 'name', render: function (text) { return text.first + " " + text.last; } },
                { title: 'Phone', dataIndex: 'phone' },
                { title: 'Gender', dataIndex: 'gender' },
            ],
            rowKey: 'email',
        };
        var caseChangeDataTableProps = {
            fetch: {
                url: 'https://randomuser.me/api',
                data: __assign({ results: 10, testPrams: 'test' }, filterCase),
                dataKey: 'results',
            },
            columns: [
                { title: 'Name', dataIndex: 'name', render: function (text) { return text.first + " " + text.last; } },
                { title: 'Phone', dataIndex: 'phone' },
                { title: 'Gender', dataIndex: 'gender' },
            ],
            rowKey: 'email',
        };
        return (<div className="content-inner">
      <antd_1.Row gutter={32}>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card title="默认">
            <components_1.DataTable pagination={false}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card title="静态数据">
            <components_1.DataTable {...staticDataTableProps}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card title="远程数据">
            <components_1.DataTable {...fetchDataTableProps}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card title="参数变化">
            <antd_1.Select placeholder="Please select gender" allowClear onChange={this.handleSelectChange} style={{ width: 200, marginBottom: 16 }}>
              <antd_1.Select.Option value="male">Male</antd_1.Select.Option>
              <antd_1.Select.Option value="female">Female</antd_1.Select.Option>
            </antd_1.Select>
            <components_1.DataTable {...caseChangeDataTableProps}/>
          </antd_1.Card>
        </antd_1.Col>
      </antd_1.Row>
      <h2 style={{ margin: '16px 0' }}>Props</h2>
      <antd_1.Row>
        <antd_1.Col lg={18} md={24}>
          <antd_1.Table rowKey={function (record, key) { return key; }} pagination={false} bordered scroll={{ x: 800 }} columns={[
            {
                title: '参数',
                dataIndex: 'props',
            },
            {
                title: '说明',
                dataIndex: 'desciption',
            },
            {
                title: '类型',
                dataIndex: 'type',
            },
            {
                title: '默认值',
                dataIndex: 'default',
            },
        ]} dataSource={[
            {
                props: 'fetch',
                desciption: '远程获取数据的参数',
                type: 'Object',
                default: '后面有空加上',
                key: 'basetable'
            }
        ]}/>
        </antd_1.Col>
      </antd_1.Row>
    </div>);
    };
    return DataTablePage;
}(react_1.default.Component));
exports.default = DataTablePage;
