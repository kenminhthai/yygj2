"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var echarts_for_react_1 = require("echarts-for-react");
var echarts_1 = require("echarts");
var GCalendarComponent = function () {
    var getVirtulData = function (year) {
        year = year || '2017';
        var date = +echarts_1.default.number.parseDate(year + "-01-01");
        var end = +echarts_1.default.number.parseDate(+year + 1 + "-01-01");
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts_1.default.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 1000),
            ]);
        }
        return data;
    };
    var option = {
        tooltip: {
            position: 'top',
        },
        visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            top: 'top',
        },
        calendar: [{
                range: '2017',
                cellSize: ['auto', 20],
            }, {
                top: 260,
                range: '2016',
                cellSize: ['auto', 20],
            }],
        series: [{
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtulData(2017),
            }, {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: getVirtulData(2016),
            }],
    };
    return (<div className="examples">
      <div className="parent">
        <label> render a calendar like github commit history. </label>
        <echarts_for_react_1.default option={option} style={{ height: '500px', width: '100%' }} className="react_for_echarts"/>
      </div>
    </div>);
};
exports.default = GCalendarComponent;
