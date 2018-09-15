"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var utils_1 = require("utils");
var recharts_1 = require("recharts");
var completed_less_1 = require("./completed.less");
function Completed(_a) {
    var data = _a.data;
    return (<div className={completed_less_1.default.sales}>
      <div className={completed_less_1.default.title}>TEAM TOTAL COMPLETED</div>
      <recharts_1.ResponsiveContainer minHeight={360}>
        <recharts_1.AreaChart data={data}>
          <recharts_1.Legend verticalAlign="top" content={function (prop) {
        var _a;
        var payload = prop.payload;
        return (<ul className={classnames_1.default((_a = {}, _a[completed_less_1.default.legend] = true, _a.clearfix = true, _a))}>
                {payload.map(function (item, key) { return <li key={key}><span className={completed_less_1.default.radiusdot} style={{ background: item.color }}/>{item.value}</li>; })}
              </ul>);
    }}/>
          <recharts_1.XAxis dataKey="name" axisLine={{ stroke: utils_1.color.borderBase, strokeWidth: 1 }} tickLine={false}/>
          <recharts_1.YAxis axisLine={false} tickLine={false}/>
          <recharts_1.CartesianGrid vertical={false} stroke={utils_1.color.borderBase} strokeDasharray="3 3"/>
          <recharts_1.Tooltip wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }} content={function (content) {
        var list = content.payload.map(function (item, key) { return <li key={key} className={completed_less_1.default.tipitem}><span className={completed_less_1.default.radiusdot} style={{ background: item.color }}/>{item.name + ":" + item.value}</li>; });
        return <div className={completed_less_1.default.tooltip}><p className={completed_less_1.default.tiptitle}>{content.label}</p><ul>{list}</ul></div>;
    }}/>
          <recharts_1.Area type="monotone" dataKey="Task complete" stroke={utils_1.color.grass} fill={utils_1.color.grass} strokeWidth={2} dot={{ fill: '#fff' }} activeDot={{ r: 5, fill: '#fff', stroke: utils_1.color.green }}/>
          <recharts_1.Area type="monotone" dataKey="Cards Complete" stroke={utils_1.color.sky} fill={utils_1.color.sky} strokeWidth={2} dot={{ fill: '#fff' }} activeDot={{ r: 5, fill: '#fff', stroke: utils_1.color.blue }}/>
        </recharts_1.AreaChart>
      </recharts_1.ResponsiveContainer>
    </div>);
}
Completed.propTypes = {
    data: prop_types_1.default.array,
};
exports.default = Completed;
