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
var echarts_for_react_1 = require("echarts-for-react");
var ChartShowLoadingComponent = /** @class */ (function (_super) {
    __extends(ChartShowLoadingComponent, _super);
    function ChartShowLoadingComponent() {
        var _this = _super.call(this) || this;
        _this._t = null;
        _this.onChartReady = _this.onChartReady.bind(_this);
        return _this;
    }
    ChartShowLoadingComponent.prototype.componentWillUnmount = function () {
        clearTimeout(this._t);
    };
    ChartShowLoadingComponent.prototype.onChartReady = function (chart) {
        this._t = setTimeout(function () {
            chart.hideLoading();
        }, 3000);
    };
    ChartShowLoadingComponent.prototype.render = function () {
        var getOtion = function () {
            var option = {
                title: {
                    text: '基础雷达图',
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
                },
                radar: {
                    indicator: [
                        { name: '销售（sales）', max: 6500 },
                        { name: '管理（Administration）', max: 16000 },
                        { name: '信息技术（Information Techology）', max: 30000 },
                        { name: '客服（Customer Support）', max: 38000 },
                        { name: '研发（Development）', max: 52000 },
                        { name: '市场（Marketing）', max: 25000 },
                    ],
                },
                series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: '预算分配（Allocated Budget）',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: '实际开销（Actual Spending）',
                            },
                        ],
                    }],
            };
            return option;
        };
        var getLoadingOption = function () {
            var option = {
                text: '加载中...',
                color: '#4413c2',
                textColor: '#270240',
                maskColor: 'rgba(194, 88, 86, 0.3)',
                zlevel: 0,
            };
            return option;
        };
        var code = 'onChartReady: function(chart) {\n' +
            "  'chart.hideLoading();\n" +
            '}\n\n' +
            '<ReactEcharts \n' +
            '    option={this.getOtion()} \n' +
            '    onChartReady={this.onChartReady} \n' +
            '    loadingOption={this.getLoadingOption()} \n' +
            '    showLoading={true} />';
        return (<div className="examples">
        <div className="parent">
          <label> Chart loading With <strong> showLoading </strong>: (when chart ready, hide the loading mask.)</label>
          <echarts_for_react_1.default option={getOtion()} onChartReady={this.onChartReady} loadingOption={getLoadingOption()} showLoading/>
          <label> code below: </label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>);
    };
    return ChartShowLoadingComponent;
}(react_1.default.Component));
exports.default = ChartShowLoadingComponent;
