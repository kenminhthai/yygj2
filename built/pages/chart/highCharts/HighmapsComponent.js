"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ReactHighmaps_src_1 = require("react-highcharts/ReactHighmaps.src");
var europe_1 = require("./mapdata/europe");
var config = {
    chart: {
        spacingBottom: 20,
    },
    title: {
        text: 'Europe time zones',
    },
    legend: {
        enabled: true,
    },
    plotOptions: {
        map: {
            allAreas: false,
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                style: {
                    fontWeight: 'bold',
                },
            },
            mapData: europe_1.default,
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{series.name}</b>',
            },
        },
    },
    series: [{
            name: 'UTC',
            data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
                return { code: code };
            }),
        }, {
            name: 'UTC + 1',
            data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
                'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
                return { code: code };
            }),
        }],
};
var HighmapsComponent = function () {
    return <ReactHighmaps_src_1.default config={config}/>;
};
exports.default = HighmapsComponent;
