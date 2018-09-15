"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("components");
var antd_1 = require("antd");
var index_less_1 = require("./index.less");
require("./emoji");
var colorfulIcons = ['boluo', 'baixiangguo', 'chengzi', 'boluomei', 'caomei', 'dayouzi', 'chelizi', 'fanqie', 'hamigua', 'ganlan',
    'juzi', 'heimei', 'huolongguo', 'hongmei', 'lizi', 'lanmei', 'mangguo', 'mihoutao', 'longyan', 'mugua', 'lizi1', 'ningmeng'];
var flatIcons = ['home', 'user', 'timelimit', 'shopcart', 'message', 'remind', 'service', 'shop', 'sweep', 'express',
    'payment', 'search', 'feedback', 'pencil', 'setting', 'refund', 'delete', 'star', 'heart', 'share', 'location', 'console'];
var localSVGIcons = ['vomiting', 'smirking', 'surprised', 'unamused', 'zombie', 'tired', 'tongue', 'wink'];
var localRequireSVGIcons = [
    require('../../../svg/cute/congratulations.svg'),
    require('../../../svg/cute/cry.svg'),
    require('../../../svg/cute/kiss.svg'),
    require('../../../svg/cute/leisurely.svg'),
    require('../../../svg/cute/notice.svg'),
    require('../../../svg/cute/proud.svg'),
    require('../../../svg/cute/shy.svg'),
    require('../../../svg/cute/sweat.svg'),
    require('../../../svg/cute/think.svg'),
];
var IcoPage = function () { return (<components_1.Page inner>
  <antd_1.Icon type="star-oo"/>
  <h2 style={{ margin: '16px 0' }}>Colorful Icon</h2>
  <ul className={index_less_1.default.list}>
    {colorfulIcons.map(function (item) { return (<li key={item}>
      <components_1.Iconfont className={index_less_1.default.icon} colorful type={item}/>
      <span className={index_less_1.default.name}>{item}</span>
    </li>); })}
  </ul>
  <h2 style={{ margin: '16px 0' }}>Flat Icon</h2>
  <ul className={index_less_1.default.list}>
    {flatIcons.map(function (item) { return (<li key={item}>
      <components_1.Iconfont className={index_less_1.default.icon} type={item}/>
      <span className={index_less_1.default.name}>{item}</span>
    </li>); })}
  </ul>
  <h2 style={{ margin: '16px 0' }}>Local SVG</h2>
  <ul className={index_less_1.default.list}>
    {localSVGIcons.map(function (item) { return (<li key={item}>
      <components_1.Iconfont className={index_less_1.default.icon} colorful type={item}/>
      <span className={index_less_1.default.name}>{item}</span>
    </li>); })}
  </ul>
  <h2 style={{ margin: '16px 0' }}>Local Require SVG</h2>
  <ul className={index_less_1.default.list}>
    {localRequireSVGIcons.map(function (item) { return (<li key={item.default.id}>
      <components_1.Iconfont className={index_less_1.default.icon} colorful type={item.default.id}/>
      <span className={index_less_1.default.name}>{item.default.id}</span>
    </li>); })}
  </ul>
  <h2 style={{ margin: '16px 0' }}>API</h2>
  <antd_1.Row>
    <antd_1.Col lg={18} md={24}>
      <antd_1.Table rowKey={function (record, key) { return key; }} pagination={false} bordered scroll={{ x: 800 }} columns={[
    {
        title: 'Property',
        dataIndex: 'props',
    },
    {
        title: 'Description',
        dataIndex: 'desciption',
    },
    {
        title: 'Type',
        dataIndex: 'type',
    },
    {
        title: 'Default',
        dataIndex: 'default',
    },
]} dataSource={[
    {
        props: 'type',
        desciption: 'icon type',
        type: 'String',
        default: '-',
    },
    {
        props: 'colorful',
        desciption: "to set the SVG has 'symbol element'",
        type: 'Bool',
        default: 'false',
    }
]}/>
    </antd_1.Col>
  </antd_1.Row>
  <h2 style={{ margin: '16px 0' }}>Thanks</h2>
  <div style={{ margin: '16px 0', lineHeight: 2 }}>
    <p>
      <a href="http://www.iconfont.cn/user/detail?uid=116813">何阿酥</a> colorful fruit icon
      <a href="http://www.iconfont.cn/collections/detail?cid=4014" target="_blank" rel="noopener noreferrer"> http://www.iconfont.cn/collections/detail?cid=4014</a>
    </p>
    <p>
      <a href="http://www.iconfont.cn/user/detail?uid=496384">ColinXu</a> colorful &apos;tsundere&apos; emoji icon
      <a href="http://www.iconfont.cn/collections/detail?cid=4116" target="_blank" rel="noopener noreferrer"> http://www.iconfont.cn/collections/detail?cid=4116</a>
    </p>
    <p>
      <a href="http://www.iconfont.cn/user/detail?uid=116813">咕噜小莫莫</a> colorful &apos;face cute&apos; emoji icon
      <a href="http://www.iconfont.cn/collections/detail?cid=4268" target="_blank" rel="noopener noreferrer"> http://www.iconfont.cn/collections/detail?cid=4268</a>
    </p>
  </div>
</components_1.Page>); };
exports.default = IcoPage;
