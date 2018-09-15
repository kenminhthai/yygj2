"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var HighstockComponent_1 = require("./HighstockComponent");
var HighmapsComponent_1 = require("./HighmapsComponent");
var HighMoreComponent_1 = require("./HighMoreComponent");
var HighChartsComponent = function (_a) {
    var type = _a.type;
    if (type === 'Highmaps')
        return (<HighmapsComponent_1.default />);
    if (type === 'HighMore')
        return (<HighMoreComponent_1.default />);
    return (<HighstockComponent_1.default />);
};
HighChartsComponent.propTypes = {
    type: prop_types_1.default.string,
};
exports.default = HighChartsComponent;
