"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var recharts_1 = require("recharts");
var Container_less_1 = require("./Container.less");
var Container = function (_a) {
    var children = _a.children, _b = _a.ratio, ratio = _b === void 0 ? 5 / 2 : _b, _c = _a.minHeight, minHeight = _c === void 0 ? 250 : _c, _d = _a.maxHeight, maxHeight = _d === void 0 ? 350 : _d;
    return (<div className={Container_less_1.default.container} style={{ minHeight: minHeight, maxHeight: maxHeight }}>
  <div style={{ marginTop: 100 / ratio + "%" || '100%' }}/>
  <div className={Container_less_1.default.content} style={{ minHeight: minHeight, maxHeight: maxHeight }}>
    <recharts_1.ResponsiveContainer>
      {children}
    </recharts_1.ResponsiveContainer>
  </div>
    </div>);
};
Container.propTypes = {
    children: prop_types_1.default.element.isRequired,
    ratio: prop_types_1.default.number,
    minHeight: prop_types_1.default.number,
    maxHeight: prop_types_1.default.number,
};
exports.default = Container;
