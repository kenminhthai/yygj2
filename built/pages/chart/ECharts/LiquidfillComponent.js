"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var echarts_for_react_1 = require("echarts-for-react");
require('echarts-liquidfill');
var LiquidfillComponent = function () {
    var option = {
        series: [
            {
                type: 'liquidFill',
                data: [0.6],
            },
        ],
    };
    return (<div className="examples">
    <div className="parent">
      <label>
        render a Liquidfill chart:
      </label>
      <echarts_for_react_1.default option={option} style={{
        height: '400px',
        width: '100%',
    }} className="react_for_echarts"/>
    </div>
  </div>);
};
exports.default = LiquidfillComponent;
