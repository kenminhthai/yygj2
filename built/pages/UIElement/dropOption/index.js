"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("components");
var antd_1 = require("antd");
var DropOptionPage = function () { return (<components_1.Page inner>
  <antd_1.Row gutter={32}>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="默认">
        <components_1.DropOption menuOptions={[{ key: '1', name: '编辑' }, { key: '2', name: '删除' }]}/>
      </antd_1.Card>
    </antd_1.Col>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="样式">
        <components_1.DropOption menuOptions={[{ key: '1', name: '编辑' }, { key: '2', name: '删除' }]} buttonStyle={{ border: 'solid 1px #eee', width: 60 }}/>
      </antd_1.Card>
    </antd_1.Col>
    <antd_1.Col lg={8} md={12}>
      <antd_1.Card title="事件">
        <components_1.DropOption menuOptions={[{ key: '1', name: '编辑' }, { key: '2', name: '删除' }]} buttonStyle={{ border: 'solid 1px #eee', width: 60 }} onMenuClick={function (_a) {
    var key = _a.key;
    switch (key) {
        case '1':
            antd_1.message.success('点击了编辑');
            break;
        case '2':
            antd_1.message.success('点击了删除');
            break;
        default:
            break;
    }
}}/>
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
        props: 'menuOptions',
        desciption: '下拉操作的选项，格式为[{name:string,key:string}]',
        type: 'Array',
        default: '必选',
    },
    {
        props: 'onMenuClick',
        desciption: '点击 menuitem 调用此函数，参数为 {item, key, keyPath}',
        type: 'Function',
        default: '-',
    },
    {
        props: 'buttonStyle',
        desciption: '按钮的样式',
        type: 'Object',
        default: '-',
    },
    {
        props: 'dropdownProps',
        desciption: '下拉菜单的参数，可参考antd的【Dropdown】组件',
        type: 'Object',
        default: '-',
    },
]}/>
    </antd_1.Col>
  </antd_1.Row>
</components_1.Page>); };
exports.default = DropOptionPage;
