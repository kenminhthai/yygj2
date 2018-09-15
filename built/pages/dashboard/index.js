"use strict";
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
var prop_types_1 = require("prop-types");
var dva_1 = require("dva");
var antd_1 = require("antd");
var utils_1 = require("utils");
var components_1 = require("components");
var components_2 = require("./components");
var index_less_1 = require("./index.less");
var bodyStyle = {
    bodyStyle: {
        height: 432,
        background: '#fff',
    },
};
function Dashboard(_a) {
    var dashboard = _a.dashboard, loading = _a.loading;
    var weather = dashboard.weather, sales = dashboard.sales, quote = dashboard.quote, numbers = dashboard.numbers, recentSales = dashboard.recentSales, comments = dashboard.comments, completed = dashboard.completed, browser = dashboard.browser, cpu = dashboard.cpu, user = dashboard.user;
    var numberCards = numbers.map(function (item, key) { return (<antd_1.Col key={key} lg={6} md={12}>
    <components_2.NumberCard {...item}/>
  </antd_1.Col>); });
    return (<components_1.Page loading={loading.models.dashboard && sales.length === 0} className={index_less_1.default.dashboard}>
      <antd_1.Row gutter={24}>
        {numberCards}
        <antd_1.Col lg={18} md={24}>
          <antd_1.Card bordered={false} bodyStyle={{
        padding: '24px 36px 24px 0',
    }}>
            <components_2.Sales data={sales}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={6} md={24}>
          <antd_1.Row gutter={24}>
            <antd_1.Col lg={24} md={12}>
              <antd_1.Card bordered={false} className={index_less_1.default.weather} bodyStyle={{
        padding: 0,
        height: 204,
        background: utils_1.color.blue,
    }}>
                <components_2.Weather {...weather} loading={loading.effects['dashboard/queryWeather']}/>
              </antd_1.Card>
            </antd_1.Col>
            <antd_1.Col lg={24} md={12}>
              <antd_1.Card bordered={false} className={index_less_1.default.quote} bodyStyle={{
        padding: 0,
        height: 204,
        background: utils_1.color.peach,
    }}>
                <components_2.Quote {...quote}/>
              </antd_1.Card>
            </antd_1.Col>
          </antd_1.Row>
        </antd_1.Col>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card bordered={false} {...bodyStyle}>
            <components_2.RecentSales data={recentSales}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={12} md={24}>
          <antd_1.Card bordered={false} {...bodyStyle}>
            <components_2.Comments data={comments}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={24} md={24}>
          <antd_1.Card bordered={false} bodyStyle={{
        padding: '24px 36px 24px 0',
    }}>
            <components_2.Completed data={completed}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={8} md={24}>
          <antd_1.Card bordered={false} {...bodyStyle}>
            <components_2.Browser data={browser}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={8} md={24}>
          <antd_1.Card bordered={false} {...bodyStyle}>
            <components_2.Cpu {...cpu}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col lg={8} md={24}>
          <antd_1.Card bordered={false} bodyStyle={__assign({}, bodyStyle.bodyStyle, { padding: 0 })}>
            <components_2.User {...user}/>
          </antd_1.Card>
        </antd_1.Col>
      </antd_1.Row>
    </components_1.Page>);
}
Dashboard.propTypes = {
    dashboard: prop_types_1.default.object,
    loading: prop_types_1.default.object,
};
exports.default = dva_1.connect(function (_a) {
    var dashboard = _a.dashboard, loading = _a.loading;
    return ({ dashboard: dashboard, loading: loading });
})(Dashboard);
