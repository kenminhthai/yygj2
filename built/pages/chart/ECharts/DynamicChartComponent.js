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
var DynamicChartComponent = /** @class */ (function (_super) {
    __extends(DynamicChartComponent, _super);
    function DynamicChartComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.timeTicket = null;
        _this.count = 51;
        var option = {
            title: {
                text: 'Hello Echarts-for-react.',
            },
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['最新成交价', '预购队列'],
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            grid: {
                top: 60,
                left: 30,
                right: 60,
                bottom: 30,
            },
            dataZoom: {
                show: false,
                start: 0,
                end: 100,
            },
            visualMap: {
                show: false,
                min: 0,
                max: 1000,
                color: ['#BE002F', '#F20C00', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500',
                    '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22',
                    '#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0'],
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: (function () {
                        var now = new Date();
                        var res = [];
                        var len = 50;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                            now = new Date(now - 2000);
                        }
                        return res;
                    }()),
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    data: (function () {
                        var res = [];
                        var len = 50;
                        while (len--) {
                            res.push(50 - len + 1);
                        }
                        return res;
                    }()),
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '价格',
                    max: 20,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                },
                {
                    type: 'value',
                    scale: true,
                    name: '预购量',
                    max: 1200,
                    min: 0,
                    boundaryGap: [0.2, 0.2],
                },
            ],
            series: [
                {
                    name: '预购队列',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 4,
                        },
                    },
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                    animationDelayUpdate: function (idx) {
                        return idx * 10;
                    },
                    data: (function () {
                        var res = [];
                        var len = 50;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    }()),
                },
                {
                    name: '最新成交价',
                    type: 'line',
                    data: (function () {
                        var res = [];
                        var len = 0;
                        while (len < 50) {
                            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                            len++;
                        }
                        return res;
                    }()),
                },
            ],
        };
        _this.state = {
            option: option,
        };
        _this.fetchNewDate = _this.fetchNewDate.bind(_this);
        return _this;
    }
    DynamicChartComponent.prototype.fetchNewDate = function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var option = this.state.option;
        option.title.text = "Hello Echarts-for-react." + new Date().getSeconds();
        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(this.count += 1);
        this.setState({ option: option });
    };
    DynamicChartComponent.prototype.componentDidMount = function () {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
        this.timeTicket = setInterval(this.fetchNewDate, 1000);
    };
    DynamicChartComponent.prototype.componentWillUnmount = function () {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
    };
    DynamicChartComponent.prototype.render = function () {
        var code = "<ReactEcharts ref='echartsInstance' \n" +
            '    option={this.state.option} />\n';
        return (<div className="examples">
        <div className="parent">
          <label> use React state to render dynamic chart</label>
          <echarts_for_react_1.default ref="echarts_react" option={this.state.option} style={{ height: 400 }}/>
          <label> code below: use state of react to render dynamic chart</label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>);
    };
    return DynamicChartComponent;
}(react_1.default.Component));
exports.default = DynamicChartComponent;
