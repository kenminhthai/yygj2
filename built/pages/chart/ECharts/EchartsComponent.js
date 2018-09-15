"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var SimpleChartComponent_1 = require("./SimpleChartComponent");
var ChartWithEventComponent_1 = require("./ChartWithEventComponent");
var ThemeChartComponent_1 = require("./ThemeChartComponent");
var ChartShowLoadingComponent_1 = require("./ChartShowLoadingComponent");
var ChartAPIComponent_1 = require("./ChartAPIComponent");
var DynamicChartComponent_1 = require("./DynamicChartComponent");
var MapChartComponent_1 = require("./MapChartComponent");
// v1.2.0 add 7 demo.
var AirportCoordComponent_1 = require("./AirportCoordComponent");
var CalendarComponent_1 = require("./CalendarComponent");
var GaugeComponent_1 = require("./GaugeComponent");
var GCalendarComponent_1 = require("./GCalendarComponent");
var GraphComponent_1 = require("./GraphComponent");
var LunarCalendarComponent_1 = require("./LunarCalendarComponent");
var TreemapComponent_1 = require("./TreemapComponent");
var LiquidfillComponent_1 = require("./LiquidfillComponent");
var BubbleGradientComponent_1 = require("./BubbleGradientComponent");
var TransparentBar3DComPonent_1 = require("./TransparentBar3DComPonent");
var MoonComponent_1 = require("./MoonComponent");
var EchartsComponent = function (_a) {
    var type = _a.type;
    if (type === 'simple')
        return (<SimpleChartComponent_1.default />);
    if (type === 'loading')
        return (<ChartShowLoadingComponent_1.default />);
    if (type === 'api')
        return (<ChartAPIComponent_1.default />);
    if (type === 'events')
        return (<ChartWithEventComponent_1.default />);
    if (type === 'theme')
        return (<ThemeChartComponent_1.default />);
    if (type === 'dynamic')
        return (<DynamicChartComponent_1.default />);
    if (type === 'map')
        return (<MapChartComponent_1.default />);
    if (type === 'airport')
        return (<AirportCoordComponent_1.default />);
    if (type === 'graph')
        return (<GraphComponent_1.default />);
    if (type === 'calendar')
        return (<CalendarComponent_1.default />);
    if (type === 'treemap')
        return (<TreemapComponent_1.default />);
    if (type === 'gauge')
        return (<GaugeComponent_1.default />);
    if (type === 'gcalendar')
        return (<GCalendarComponent_1.default />);
    if (type === 'lunar')
        return (<LunarCalendarComponent_1.default />);
    if (type === 'liquid')
        return (<LiquidfillComponent_1.default />);
    if (type === 'BubbleGradientComponent')
        return (<BubbleGradientComponent_1.default />);
    if (type === 'TransparentBar3DComPonent')
        return (<TransparentBar3DComPonent_1.default />);
    if (type === 'MoonComponent')
        return (<MoonComponent_1.default />);
    return (<DynamicChartComponent_1.default />);
};
EchartsComponent.propTypes = {
    type: prop_types_1.default.string,
};
exports.default = EchartsComponent;
