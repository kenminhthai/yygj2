"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_adsense_1 = require("react-adsense");
var react_router_1 = require("react-router");
var DynamicChartComponent_js_1 = require("./DynamicChartComponent.js");
var MainPageComponent = function () {
    return (<div>
      <h1> echarts-for-react {_this.props.params.type} </h1>
      <h3> A very simple echarts(v3.0) wrapper for React. <a href="https://github.com/hustcc/echarts-for-react">hustcc/echarts-for-react</a></h3>

      <react_adsense_1.default.Google client="ca-pub-7292810486004926" slot="7806394673"/>

      <h4>
        <react_router_1.Link to="/echarts/simple">Simple demo</react_router_1.Link> |
        <react_router_1.Link to="/echarts/loading">Echarts loading</react_router_1.Link> |
        <react_router_1.Link to="/echarts/api">Echarts API</react_router_1.Link> |
        <react_router_1.Link to="/echarts/events">Echarts events</react_router_1.Link> |
        <react_router_1.Link to="/echarts/theme">Echarts theme</react_router_1.Link> |
        <react_router_1.Link to="/echarts/dynamic">Dynamic chart</react_router_1.Link> |
        <react_router_1.Link to="/echarts/map">Map chart</react_router_1.Link>
      </h4>
      <h4>
        <span style={{ color: 'red' }}>New</span>:&nbsp;&nbsp;
        <react_router_1.Link to="/echarts/airport">Airport</react_router_1.Link> |
        <react_router_1.Link to="/echarts/graph">Graph</react_router_1.Link> |
        <react_router_1.Link to="/echarts/calendar">Calendar</react_router_1.Link> |
        <react_router_1.Link to="/echarts/treemap">Treemap</react_router_1.Link> |
        <react_router_1.Link to="/echarts/gauge">Gauge</react_router_1.Link> |
        <react_router_1.Link to="/echarts/gcalendar">GCalendar</react_router_1.Link> |
        <react_router_1.Link to="/echarts/lunar">Lunar</react_router_1.Link> |
        <react_router_1.Link to="/echarts/liquid">Liquidfill</react_router_1.Link>
      </h4>
      {_this.props.children || <DynamicChartComponent_js_1.default />}

      <h3>Get it on GitHub! <a href="https://github.com/hustcc/echarts-for-react">hustcc/echarts-for-react</a></h3>
    </div>);
};
exports.default = MainPageComponent;
