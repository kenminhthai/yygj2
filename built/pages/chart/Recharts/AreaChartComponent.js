"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var d3 = require("d3-shape");
var recharts_1 = require("recharts");
var Container_1 = require("./Container");
var data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
var mixData = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
var percentData = [
    {
        month: '2015.01',
        a: 4000,
        b: 2400,
        c: 2400,
    }, {
        month: '2015.02',
        a: 3000,
        b: 1398,
        c: 2210,
    }, {
        month: '2015.03',
        a: 2000,
        b: 9800,
        c: 2290,
    }, {
        month: '2015.04',
        a: 2780,
        b: 3908,
        c: 2000,
    }, {
        month: '2015.05',
        a: 1890,
        b: 4800,
        c: 2181,
    }, {
        month: '2015.06',
        a: 2390,
        b: 3800,
        c: 2500,
    }, {
        month: '2015.07',
        a: 3490,
        b: 4300,
        c: 2100,
    },
];
var colProps = {
    lg: 12,
    md: 24,
};
var SimpleAreaChart = function () { return (<Container_1.default>
    <recharts_1.AreaChart data={data} margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
    </recharts_1.AreaChart>
  </Container_1.default>); };
var StackedAreaChart = function () { return (<Container_1.default>
    <recharts_1.AreaChart data={mixData} margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8"/>
      <recharts_1.Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
      <recharts_1.Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658"/>
    </recharts_1.AreaChart>
  </Container_1.default>); };
// StackedAreaChart
var toPercent = function (decimal, fixed) {
    if (fixed === void 0) { fixed = 0; }
    return (decimal * 100).toFixed(fixed) + "%";
};
var getPercent = function (value, total) {
    var ratio = total > 0
        ? value / total
        : 0;
    return toPercent(ratio, 2);
};
var renderTooltipContent = function (o) {
    var payload = o.payload, label = o.label;
    var total = payload.reduce(function (result, entry) { return (result + entry.value); }, 0);
    return (<div className="customized-tooltip-content">
      <p className="total">{label + " (Total: " + total + ")"}</p>
      <ul className="list">
        {payload.map(function (entry, index) { return (<li key={"item-" + index} style={{
        color: entry.color,
    }}>
            {entry.name + ": " + entry.value + "(" + getPercent(entry.value, total) + ")"}
          </li>); })}
      </ul>
    </div>);
};
var PercentAreaChart = function () { return (<Container_1.default>
    <recharts_1.AreaChart data={percentData} stackOffset="expand" margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
}}>
      <recharts_1.XAxis dataKey="month"/>
      <recharts_1.YAxis tickFormatter={toPercent}/>
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip content={renderTooltipContent}/>
      <recharts_1.Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8"/>
      <recharts_1.Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
      <recharts_1.Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658"/>
    </recharts_1.AreaChart>
  </Container_1.default>); };
// CardinalAreaChart
var cardinal = d3.curveCardinal.tension(0.2);
var CardinalAreaChart = function () { return (<Container_1.default>
    <recharts_1.AreaChart data={mixData} margin={{
    top: 10,
    right: 30,
    left: 0,
    bottom: 0,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3}/>
      <recharts_1.Area type={cardinal} dataKey="pv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3}/>
    </recharts_1.AreaChart>
  </Container_1.default>); };
var AreaChartPage = function () { return (<div className="content-inner">
    <antd_1.Button type="primary" style={{
    position: 'absolute',
    right: 0,
    top: -48,
}}>
      <a href="http://recharts.org/#/en-US/examples/TinyBarChart" target="blank">Show More</a>
    </antd_1.Button>
    <antd_1.Row gutter={32}>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="SimpleAreaChart">
          <SimpleAreaChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="StackedAreaChart">
          <StackedAreaChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="PercentAreaChart">
          <PercentAreaChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="CardinalAreaChart">
          <CardinalAreaChart />
        </antd_1.Card>
      </antd_1.Col>
    </antd_1.Row>
  </div>); };
exports.default = AreaChartPage;
