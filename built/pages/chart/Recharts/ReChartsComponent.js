"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var AreaChartComponent_1 = require("./AreaChartComponent");
var BarChartComponent_1 = require("./BarChartComponent");
var LineChartComponent_1 = require("./LineChartComponent");
var ReChartsComponent = function (_a) {
    var type = _a.type;
    if (type === 'areaChart')
        return (<AreaChartComponent_1.default />);
    if (type === 'barChart')
        return (<BarChartComponent_1.default />);
    return (<LineChartComponent_1.default />);
};
ReChartsComponent.propTypes = {
    type: prop_types_1.default.string,
};
exports.default = ReChartsComponent;
