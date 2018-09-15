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
var GaugeComponent = /** @class */ (function (_super) {
    __extends(GaugeComponent, _super);
    function GaugeComponent() {
        var _this = _super.call(this) || this;
        var option = {
            backgroundColor: '#1b1b1b',
            tooltip: {
                formatter: '{a} <br/>{c} {b}',
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            series: [
                {
                    name: '速度',
                    type: 'gauge',
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '50%',
                    axisLine: {
                        lineStyle: {
                            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                            width: 3,
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisTick: {
                        length: 15,
                        lineStyle: {
                            color: 'auto',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    splitLine: {
                        length: 25,
                        lineStyle: {
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    pointer: {
                        shadowColor: '#fff',
                        shadowBlur: 5,
                    },
                    title: {
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    detail: {
                        backgroundColor: 'rgba(30,144,255,0.8)',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff',
                        shadowBlur: 5,
                        offsetCenter: [0, '50%'],
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                        },
                    },
                    data: [{ value: 40, name: 'km/h' }],
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['25%', '55%'],
                    radius: '30%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: {
                        lineStyle: {
                            color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    pointer: {
                        width: 5,
                        shadowColor: '#fff',
                        shadowBlur: 5,
                    },
                    title: {
                        offsetCenter: [0, '-30%'],
                        textStyle: {
                            fontWeight: 'bolder',
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff',
                        shadowBlur: 5,
                        width: 80,
                        height: 30,
                        offsetCenter: [25, '20%'],
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                        },
                    },
                    data: [{ value: 1.5, name: 'x1000 r/min' }],
                },
                {
                    name: '油表',
                    type: 'gauge',
                    center: ['75%', '50%'],
                    radius: '30%',
                    min: 0,
                    max: 2,
                    startAngle: 135,
                    endAngle: 45,
                    splitNumber: 2,
                    axisLine: {
                        lineStyle: {
                            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisLabel: {
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                        formatter: function (v) {
                            switch ("" + v) {
                                case '0': return 'E';
                                case '1': return 'Gas';
                                case '2': return 'F';
                                default: return null;
                            }
                        },
                    },
                    splitLine: {
                        length: 15,
                        lineStyle: {
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#fff',
                        shadowBlur: 5,
                    },
                    title: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [{ value: 0.5, name: 'gas' }],
                },
                {
                    name: '水表',
                    type: 'gauge',
                    center: ['75%', '50%'],
                    radius: '30%',
                    min: 0,
                    max: 2,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,
                    axisLine: {
                        lineStyle: {
                            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                        formatter: function (v) {
                            switch ("" + v) {
                                case '0': return 'H';
                                case '1': return 'Water';
                                case '2': return 'C';
                                default: return null;
                            }
                        },
                    },
                    splitLine: {
                        length: 15,
                        lineStyle: {
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff',
                            shadowBlur: 10,
                        },
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#fff',
                        shadowBlur: 5,
                    },
                    title: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [{ value: 0.5, name: 'gas' }],
                },
            ],
        };
        _this.state = {
            option: option,
        };
        return _this;
    }
    GaugeComponent.prototype.componentDidMount = function () {
        var _this = this;
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
        this.timeTicket = setInterval(function () {
            var option = _this.state.option;
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random() * 7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random() * 2).toFixed(2) - 0;
            _this.setState({ option: option });
        }, 1000);
    };
    GaugeComponent.prototype.componentWillUnmount = function () {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
    };
    GaugeComponent.prototype.render = function () {
        return (<div className="examples">
        <div className="parent">
          <label> render a car gauge chart. </label>
          <echarts_for_react_1.default option={this.state.option} style={{ height: '500px', width: '100%' }} className="react_for_echarts"/>
        </div>
      </div>);
    };
    return GaugeComponent;
}(react_1.default.Component));
exports.default = GaugeComponent;
