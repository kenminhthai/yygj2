"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var utils_1 = require("utils");
var react_countup_1 = require("react-countup");
var recharts_1 = require("recharts");
var cpu_less_1 = require("./cpu.less");
var countUpProps = {
    start: 0,
    duration: 2.75,
    useEasing: true,
    useGrouping: true,
    separator: ',',
};
function Cpu(_a) {
    var usage = _a.usage, space = _a.space, cpu = _a.cpu, data = _a.data;
    return (<div className={cpu_less_1.default.cpu}>
    <div className={cpu_less_1.default.number}>
      <div className={cpu_less_1.default.item}>
        <p>usage</p>
        <p><react_countup_1.default end={usage || 0} suffix="GB" {...countUpProps}/></p>
      </div>
      <div className={cpu_less_1.default.item}>
        <p>space</p>
        <p><react_countup_1.default end={space} suffix="GB" {...countUpProps}/></p>
      </div>
      <div className={cpu_less_1.default.item}>
        <p>cpu</p>
        <p><react_countup_1.default end={cpu} suffix="%" {...countUpProps}/></p>
      </div>
    </div>
    <recharts_1.ResponsiveContainer minHeight={300}>
      <recharts_1.LineChart data={data} margin={{ left: -40 }}>
        <recharts_1.XAxis dataKey="name" axisLine={{ stroke: utils_1.color.borderBase, strokeWidth: 1 }} tickLine={false}/>
        <recharts_1.YAxis axisLine={false} tickLine={false}/>
        <recharts_1.CartesianGrid vertical={false} stroke={utils_1.color.borderBase} strokeDasharray="3 3"/>
        <recharts_1.Line type="monotone" connectNulls dataKey="cpu" stroke={utils_1.color.blue} fill={utils_1.color.blue}/>
      </recharts_1.LineChart>
    </recharts_1.ResponsiveContainer>
  </div>);
}
Cpu.propTypes = {
    data: prop_types_1.default.array,
    usage: prop_types_1.default.number,
    space: prop_types_1.default.number,
    cpu: prop_types_1.default.number,
};
exports.default = Cpu;
