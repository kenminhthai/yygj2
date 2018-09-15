"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var weather_less_1 = require("./weather.less");
function Weather(_a) {
    var city = _a.city, icon = _a.icon, dateTime = _a.dateTime, temperature = _a.temperature, name = _a.name, loading = _a.loading;
    return (<antd_1.Spin spinning={loading}>
      <div className={weather_less_1.default.weather}>
        <div className={weather_less_1.default.left}>
          <div className={weather_less_1.default.icon} style={{
        backgroundImage: "url(" + icon + ")",
    }}/>
          <p>{name}</p>
        </div>
        <div className={weather_less_1.default.right}>
          <h1 className={weather_less_1.default.temperature}>{temperature + "\u00B0"}</h1>
          <p className={weather_less_1.default.description}>{city},{dateTime}</p>
        </div>
      </div>
    </antd_1.Spin>);
}
Weather.propTypes = {
    city: prop_types_1.default.string,
    icon: prop_types_1.default.string,
    dateTime: prop_types_1.default.string,
    temperature: prop_types_1.default.string,
    name: prop_types_1.default.string,
    loading: prop_types_1.default.bool,
};
exports.default = Weather;
