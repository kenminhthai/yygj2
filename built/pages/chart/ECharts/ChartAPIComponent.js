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
var ChartAPIComponent = /** @class */ (function (_super) {
    __extends(ChartAPIComponent, _super);
    function ChartAPIComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartAPIComponent.prototype.render = function () {
        var _this = this;
        var option = {
            title: {
                text: '漏斗图',
                subtext: '纯属虚构',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            legend: {
                data: ['展现', '点击', '访问', '咨询', '订单'],
            },
            series: [
                {
                    name: '预期',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    label: {
                        normal: {
                            formatter: '{b}预期',
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}预期: {c}%',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.7,
                        },
                    },
                    data: [
                        { value: 60, name: '访问' },
                        { value: 40, name: '咨询' },
                        { value: 20, name: '订单' },
                        { value: 80, name: '点击' },
                        { value: 100, name: '展现' },
                    ],
                },
                {
                    name: '实际',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        normal: {
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#fff',
                            },
                        },
                        emphasis: {
                            position: 'inside',
                            formatter: '{b}实际: {c}%',
                        },
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.5,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                    },
                    data: [
                        { value: 30, name: '访问' },
                        { value: 10, name: '咨询' },
                        { value: 5, name: '订单' },
                        { value: 50, name: '点击' },
                        { value: 80, name: '展现' },
                    ],
                },
            ],
        };
        var code = '<ReactEcharts ref={(e) => { this.echarts_react = e; }} \n' +
            '    option={this.getOtion()} /> \n' +
            '\n' +
            '// use echarts API: http://echarts.baidu.com/api.html#echartsInstance' +
            'this.echarts_react.getEchartsInstance().getDataURL();';
        return (<div className="examples">
        <div className="parent">
          <label> use echarts API With <strong> getEchartsInstance() </strong>: (the API will return the echarts instance, then you can use any API of echarts.)</label>
          <echarts_for_react_1.default ref={function (e) { _this.echarts_react = e; }} option={option}/>
          <label> code below: (echarts API list see: http://echarts.baidu.com/api.html#echartsInstance)</label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>);
    };
    return ChartAPIComponent;
}(react_1.default.Component));
exports.default = ChartAPIComponent;
