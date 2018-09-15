"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var utils_1 = require("utils");
var recharts_1 = require("recharts");
var sales_less_1 = require("./sales.less");
function Sales(_a) {
    var data = _a.data;
    return (<div className={sales_less_1.default.sales}>
      <div className={sales_less_1.default.title}>Yearly Sales</div>
      <recharts_1.ResponsiveContainer minHeight={360}>
        <recharts_1.LineChart data={data}>
          <recharts_1.Legend verticalAlign="top" content={function (prop) {
        var _a;
        var payload = prop.payload;
        return (<ul className={classnames_1.default((_a = {}, _a[sales_less_1.default.legend] = true, _a.clearfix = true, _a))}>
                {payload.map(function (item, key) { return <li key={key}><span className={sales_less_1.default.radiusdot} style={{ background: item.color }}/>{item.value}</li>; })}
              </ul>);
    }}/>
          <recharts_1.XAxis dataKey="name" axisLine={{ stroke: utils_1.color.borderBase, strokeWidth: 1 }} tickLine={false}/>
          <recharts_1.YAxis axisLine={false} tickLine={false}/>
          <recharts_1.CartesianGrid vertical={false} stroke={utils_1.color.borderBase} strokeDasharray="3 3"/>
          <recharts_1.Tooltip wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }} content={function (content) {
        var list = content.payload.map(function (item, key) { return <li key={key} className={sales_less_1.default.tipitem}><span className={sales_less_1.default.radiusdot} style={{ background: item.color }}/>{item.name + ":" + item.value}</li>; });
        return <div className={sales_less_1.default.tooltip}><p className={sales_less_1.default.tiptitle}>{content.label}</p><ul>{list}</ul></div>;
    }}/>
          <recharts_1.Line type="monotone" dataKey="Food" stroke={utils_1.color.purple} strokeWidth={3} dot={{ fill: utils_1.color.purple }} activeDot={{ r: 5, strokeWidth: 0 }}/>
          <recharts_1.Line type="monotone" dataKey="Clothes" stroke={utils_1.color.red} strokeWidth={3} dot={{ fill: utils_1.color.red }} activeDot={{ r: 5, strokeWidth: 0 }}/>
          <recharts_1.Line type="monotone" dataKey="Electronics" stroke={utils_1.color.green} strokeWidth={3} dot={{ fill: utils_1.color.green }} activeDot={{ r: 5, strokeWidth: 0 }}/>
        </recharts_1.LineChart>
      </recharts_1.ResponsiveContainer>
    </div>);
}
Sales.propTypes = {
    data: prop_types_1.default.array,
};
exports.default = Sales;
