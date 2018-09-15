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
var antd_1 = require("antd");
var components_1 = require("components");
var EchartsComponent_1 = require("./EchartsComponent");
var index_less_1 = require("./index.less");
var RadioGroup = antd_1.Radio.Group;
var chartList = [
    {
        label: 'SimpleChart',
        value: 'simple',
    },
    {
        label: 'ChartShowLoading',
        value: 'loading',
    },
    {
        label: 'ChartAPI',
        value: 'api',
    },
    {
        label: 'ChartWithEvent',
        value: 'events',
    },
    {
        label: 'ThemeChart',
        value: 'theme',
    },
    {
        label: 'DynamicChart',
        value: 'dynamic',
    },
    {
        label: 'MapChart',
        value: 'map',
    },
    {
        label: 'AirportCoord',
        value: 'airport',
    },
    {
        label: 'Graph',
        value: 'graph',
    },
    {
        label: 'Calendar',
        value: 'calendar',
    },
    {
        label: 'Treemap',
        value: 'treemap',
    },
    {
        label: 'Gauge',
        value: 'gauge',
    },
    {
        label: 'GCalendar',
        value: 'gcalendar',
    },
    {
        label: 'LunarCalendar',
        value: 'lunar',
    },
    {
        label: 'Liquidfill',
        value: 'liquid',
    },
    {
        label: 'BubbleGradient',
        value: 'BubbleGradientComponent',
    },
    {
        label: 'TransparentBar3D',
        value: 'TransparentBar3DComPonent',
    },
    {
        label: 'MoonComponent',
        value: 'MoonComponent',
    },
];
var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        var _this = _super.call(this) || this;
        _this.state = {
            type: '',
        };
        _this.handleRadioGroupChange = _this.handleRadioGroupChange.bind(_this);
        return _this;
    }
    Chart.prototype.handleRadioGroupChange = function (e) {
        this.setState({
            type: e.target.value,
        });
    };
    Chart.prototype.render = function () {
        return (<components_1.Page inner id="EChartsMain">
      <RadioGroup options={chartList} defaultValue="dynamic" onChange={this.handleRadioGroupChange}/>
      <div className={index_less_1.default.chart}>
        <EchartsComponent_1.default type={this.state.type}/>
      </div>
      <div style={{ pading: 24, marginTop: 24 }}>
         All demos from <a href="https://github.com/hustcc/echarts-for-react">https://github.com/hustcc/echarts-for-react</a>
      </div>
    </components_1.Page>);
    };
    return Chart;
}(react_1.default.Component));
exports.default = Chart;
