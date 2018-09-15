"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_highcharts_1 = require("react-highcharts");
var highcharts_exporting_1 = require("highcharts-exporting");
var highcharts_more_1 = require("highcharts-more");
highcharts_more_1.default(react_highcharts_1.default.Highcharts);
highcharts_exporting_1.default(react_highcharts_1.default.Highcharts);
var config = {
    chart: {
        polar: true,
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        }],
};
var HighMoreComponent = function () {
    return <react_highcharts_1.default config={config}/>;
};
exports.default = HighMoreComponent;
