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
require('echarts/map/js/china.js');
var MapChartComponent = /** @class */ (function (_super) {
    __extends(MapChartComponent, _super);
    function MapChartComponent() {
        var _this = _super.call(this) || this;
        _this.timeTicket = null;
        var randomData = function () {
            return Math.round(Math.random() * 1000);
        };
        var option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['iphone3', 'iphone4', 'iphone5'],
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                calculable: true,
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '河南', value: randomData() },
                        { name: '云南', value: randomData() },
                        { name: '辽宁', value: randomData() },
                        { name: '黑龙江', value: randomData() },
                        { name: '湖南', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '山东', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '江苏', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '湖北', value: randomData() },
                        { name: '广西', value: randomData() },
                        { name: '甘肃', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '陕西', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '贵州', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '青海', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '海南', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() },
                    ],
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '重庆', value: randomData() },
                        { name: '河北', value: randomData() },
                        { name: '安徽', value: randomData() },
                        { name: '新疆', value: randomData() },
                        { name: '浙江', value: randomData() },
                        { name: '江西', value: randomData() },
                        { name: '山西', value: randomData() },
                        { name: '内蒙古', value: randomData() },
                        { name: '吉林', value: randomData() },
                        { name: '福建', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '西藏', value: randomData() },
                        { name: '四川', value: randomData() },
                        { name: '宁夏', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() },
                    ],
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    data: [
                        { name: '北京', value: randomData() },
                        { name: '天津', value: randomData() },
                        { name: '上海', value: randomData() },
                        { name: '广东', value: randomData() },
                        { name: '台湾', value: randomData() },
                        { name: '香港', value: randomData() },
                        { name: '澳门', value: randomData() },
                    ],
                },
            ],
        };
        _this.state = {
            option: option,
        };
        return _this;
    }
    MapChartComponent.prototype.componentDidMount = function () {
        var _this = this;
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
        this.timeTicket = setInterval(function () {
            var option = _this.state.option;
            var r = new Date().getSeconds();
            option.title.text = "iphone\u9500\u91CF" + r;
            option.series[0].name = "iphone\u9500\u91CF" + r;
            option.legend.data[0] = "iphone\u9500\u91CF" + r;
            _this.setState({ option: option });
        }, 1000);
    };
    MapChartComponent.prototype.componentWillUnmount = function () {
        if (this.timeTicket) {
            clearInterval(this.timeTicket);
        }
    };
    MapChartComponent.prototype.render = function () {
        var code = "require('echarts/map/js/china.js'); \n" +
            '<ReactEcharts \n' +
            '    option={this.state.option || {}} \n' +
            "    style={{height: '350px', width: '100%'}}  \n" +
            "    className='react_for_echarts' />";
        return (<div className="examples">
        <div className="parent">
          <label> render a china map. <strong>MAP charts</strong>: </label>
          <echarts_for_react_1.default option={this.state.option} style={{ height: '500px', width: '100%' }} className="react_for_echarts"/>
          <label> code below: </label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>);
    };
    return MapChartComponent;
}(react_1.default.Component));
exports.default = MapChartComponent;
