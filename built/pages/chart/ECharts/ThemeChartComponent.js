"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var echarts_for_react_1 = require("echarts-for-react");
var echarts_1 = require("echarts");
var ThemeChartComponent = function () {
    var option = {
        title: {
            text: '阶梯瀑布图',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            data: ['支出', '收入'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: ['11月1日', '11月2日', '11月3日', '11月4日', '11月5日', '11月6日', '11月7日', '11月8日', '11月9日', '11月10日', '11月11日'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)',
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)',
                    },
                },
                data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
            },
            {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                    },
                },
                data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-'],
            },
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                    },
                },
                data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203],
            },
        ],
    };
    echarts_1.default.registerTheme('my_theme', {
        backgroundColor: '#f4cccc',
    });
    var code = "echarts.registerTheme('my_theme', {\n" +
        "  backgroundColor: '#f4cccc'\n" +
        '});\n\n' +
        '<ReactEcharts \n' +
        '    option={this.getOtion()} \n' +
        "    theme='my_theme' />";
    return (<div className="examples">
      <div className="parent">
        <label> render a echart With <strong>theme</strong>, should <strong>echarts.registerTheme(themeName, themeObj)</strong> before use.</label>
        <echarts_for_react_1.default option={option} theme="my_theme"/>
        <label> the theme object format: https://github.com/ecomfe/echarts/blob/master/theme/dark.js</label>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>);
};
exports.default = ThemeChartComponent;
