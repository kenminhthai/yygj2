"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("components");
var antd_1 = require("antd");
var SearchPage = function () { return (<components_1.Page inner>
  <antd_1.Row gutter={32}>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="默认">
        <components_1.Search />
      </antd_1.Card>
    </antd_1.Col>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="附带选择">
        <components_1.Search {...{
    select: true,
    selectOptions: [
        { value: 'components', name: '组件' },
        { value: 'page', name: '页面' },
    ],
    selectProps: {
        defaultValue: 'components',
    },
}}/>
      </antd_1.Card>
    </antd_1.Col>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="大小">
        <components_1.Search style={{ marginBottom: 16 }}/>
        <components_1.Search size="small"/>
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
        props: 'size',
        desciption: '设置Search大小，可选值为 【small】 【large】 或者不设',
        type: 'String',
        default: '-',
    },
    {
        props: 'select',
        desciption: '设置是否有选择器',
        type: 'Boolean',
        default: 'false',
    },
    {
        props: 'selectOptions',
        desciption: '选择器的选项，格式为[{name:"",value:""}]或者[{value:""}]',
        type: 'Array',
        default: '-',
    },
    {
        props: 'selectProps',
        desciption: '选择器的属性，可参考antd的【Select】组件',
        type: 'Object',
        default: '-',
    },
    {
        props: 'onSearch',
        desciption: '点击搜索按钮, 按Enter键或者点击清除时的回调',
        type: 'Function({keyword:string,field:string})',
        default: '-',
    },
]}/>
    </antd_1.Col>
  </antd_1.Row>
</components_1.Page>); };
exports.default = SearchPage;
