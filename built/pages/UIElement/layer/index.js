"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("components");
var antd_1 = require("antd");
var Enum = {
    default: 1,
};
var IcoPage = function () {
    var handleButtonClick = function (key) {
        if (key === Enum.default) {
            components_1.layer.open({
                title: '默认弹层',
                content: <div style={{ height: 360 }}>弹层内容</div>,
            });
        }
    };
    return (<div className="content-inner">
    <antd_1.Row gutter={32}>
      <antd_1.Col lg={8} md={12}>
        <antd_1.Card title="默认">
          <antd_1.Button type="primary" onClick={handleButtonClick.bind(null, Enum.default)}>打开一个Layer</antd_1.Button>
        </antd_1.Card>
      </antd_1.Col>
    </antd_1.Row>
    <h2 style={{ margin: '16px 0' }}>API</h2>
    <div style={{ margin: '16px 0' }}>
      <h2 style={{ margin: '4px 0' }}>layer.open(config)</h2>
      config对象与<a href="https://ant.design/components/modal-cn/#API" target="_blank" rel="noopener noreferrer">Modal</a>的参数基本一致，config属性如下。
      注意：1.visible属性一般不需要设置；2.afterClose无效，layer.close()可代替;3.layer.open()返回一个唯一的layer Id
    </div>
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
            props: 'content',
            desciption: '内容',
            type: 'string|ReactNode',
            default: '无',
        },
        {
            props: 'title',
            desciption: '标题',
            type: 'string|ReactNode',
            default: '标题',
        },
        {
            props: 'confirmLoading',
            desciption: '确定按钮 loading',
            type: 'boolean',
            default: '无',
        },
        {
            props: 'closable',
            desciption: '是否显示右上角的关闭按钮',
            type: 'boolean',
            default: '无',
        },
        {
            props: 'onOk',
            desciption: '点击确定回调',
            type: 'function(e)',
            default: '无',
        },
        {
            props: 'onCancel',
            desciption: '点击遮罩层或右上角叉或取消按钮的回调',
            type: 'function(e)',
            default: '"无"',
        },
        {
            props: 'width',
            desciption: '宽度',
            type: 'string|number',
            default: '520',
        },
        {
            props: 'okText',
            desciption: '确认按钮文字',
            type: 'string',
            default: '无',
        },
        {
            props: 'cancelText',
            desciption: '取消按钮文字',
            type: 'string',
            default: '无',
        },
        {
            props: 'maskClosable',
            desciption: '点击蒙层是否允许关闭',
            type: 'boolean',
            default: 'true',
        },
        {
            props: 'style',
            desciption: '可用于设置浮层的样式，调整浮层位置等',
            type: 'object',
            default: '-',
        },
        {
            props: 'wrapClassName',
            desciption: '对话框外层容器的类名',
            type: 'string',
            default: '-',
        },
    ]}/>
      </antd_1.Col>
    </antd_1.Row>
    <div style={{ margin: '16px 0' }}>
      <h2 style={{ margin: '4px 0' }}>layer.close(index)</h2>
      当index有值时，关闭指定Id的layer;当index无值时，关闭最顶层layer
    </div>
    <div style={{ margin: '16px 0' }}>
      <h2 style={{ margin: '4px 0' }}>layer.closeAll()</h2>
      关闭所有的layer
    </div>
  </div>);
};
exports.default = IcoPage;
