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
var HighChartsComponent_1 = require("./HighChartsComponent");
var index_less_1 = require("./index.less");
var RadioGroup = antd_1.Radio.Group;
var chartList = [
    {
        label: 'Highstock',
        value: 'Highstock',
    },
    {
        label: 'Highmaps',
        value: 'Highmaps',
    },
    {
        label: 'HighMore',
        value: 'HighMore',
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
        return (<components_1.Page inner>
      <RadioGroup options={chartList} defaultValue="Highstock" onChange={this.handleRadioGroupChange}/>
      <div className={index_less_1.default.chart}>
        <HighChartsComponent_1.default type={this.state.type}/>
      </div>
    </components_1.Page>);
    };
    return Chart;
}(react_1.default.Component));
exports.default = Chart;
