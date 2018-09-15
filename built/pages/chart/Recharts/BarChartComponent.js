"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
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
        female: 2400,
        male: 2400,
    }, {
        name: 'Page B',
        uv: 3000,
        female: 1398,
        male: 2210,
    }, {
        name: 'Page C',
        uv: 2000,
        female: 9800,
        male: 2290,
    }, {
        name: 'Page D',
        uv: 2780,
        female: 3908,
        male: 2000,
    }, {
        name: 'Page E',
        uv: 1890,
        female: 4800,
        male: 2181,
    }, {
        name: 'Page F',
        uv: 2390,
        female: 3800,
        male: 2500,
    }, {
        name: 'Page G',
        uv: 3490,
        female: 4300,
        male: 2100,
    },
];
var colProps = {
    lg: 12,
    md: 24,
};
var SimpleBarChart = function () { return (<Container_1.default>
    <recharts_1.BarChart data={data} margin={{
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Legend />
      <recharts_1.Bar dataKey="pv" fill="#8884d8"/>
      <recharts_1.Bar dataKey="uv" fill="#82ca9d"/>
    </recharts_1.BarChart>
  </Container_1.default>); };
var StackedBarChart = function () { return (<Container_1.default>
    <recharts_1.BarChart data={data} margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Legend />
      <recharts_1.Bar dataKey="pv" stackId="a" fill="#8884d8"/>
      <recharts_1.Bar dataKey="uv" stackId="a" fill="#82ca9d"/>
    </recharts_1.BarChart>
  </Container_1.default>); };
var MixBarChart = function () { return (<Container_1.default>
    <recharts_1.BarChart data={mixData} margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Tooltip />
      <recharts_1.Legend />
      <recharts_1.Bar dataKey="female" stackId="a" fill="#8884d8"/>
      <recharts_1.Bar dataKey="male" stackId="a" fill="#82ca9d"/>
      <recharts_1.Bar dataKey="uv" fill="#ffc658"/>
    </recharts_1.BarChart>
  </Container_1.default>); };
// CustomShapeBarChart
var getPath = function (x, y, width, height) {
    return "M" + x + "," + (y + height) + "\n        C" + (x + width / 3) + "," + (y + height) + " " + (x + width / 2) + "," + (y + height / 3) + " " + (x + width / 2) + ", " + y + "\n        C" + (x + width / 2) + "," + (y + height / 3) + " " + (x + 2 * width / 3) + "," + (y + height) + " " + (x + width) + ", " + (y + height) + "\n        Z";
};
var TriangleBar = function (props) {
    var fill = props.fill, x = props.x, y = props.y, width = props.width, height = props.height;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};
TriangleBar.propTypes = {
    fill: prop_types_1.default.string,
    x: prop_types_1.default.number,
    y: prop_types_1.default.number,
    width: prop_types_1.default.number,
    height: prop_types_1.default.number,
};
var CustomShapeBarChart = function () { return (<Container_1.default>
    <recharts_1.BarChart data={mixData} margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
}}>
      <recharts_1.XAxis dataKey="name"/>
      <recharts_1.YAxis />
      <recharts_1.CartesianGrid strokeDasharray="3 3"/>
      <recharts_1.Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label/>
    </recharts_1.BarChart>
  </Container_1.default>); };
var BarChartPage = function () { return (<div className="content-inner">
    <antd_1.Button type="primary" style={{
    position: 'absolute',
    right: 0,
    top: -48,
}}>
      <a href="http://recharts.org/#/en-US/examples/TinyBarChart" target="blank">Show More</a>
    </antd_1.Button>
    <antd_1.Row gutter={32}>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="SimpleBarChart">
          <SimpleBarChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="StackedBarChart">
          <StackedBarChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="MixBarChart">
          <MixBarChart />
        </antd_1.Card>
      </antd_1.Col>
      <antd_1.Col {...colProps}>
        <antd_1.Card title="CustomShapeBarChart">
          <CustomShapeBarChart />
        </antd_1.Card>
      </antd_1.Col>
    </antd_1.Row>
  </div>); };
exports.default = BarChartPage;
