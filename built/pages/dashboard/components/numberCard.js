"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var react_countup_1 = require("react-countup");
var numberCard_less_1 = require("./numberCard.less");
function NumberCard(_a) {
    var icon = _a.icon, color = _a.color, title = _a.title, number = _a.number, countUp = _a.countUp;
    return (<antd_1.Card className={numberCard_less_1.default.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <antd_1.Icon className={numberCard_less_1.default.iconWarp} style={{ color: color }} type={icon}/>
      <div className={numberCard_less_1.default.content}>
        <p className={numberCard_less_1.default.title}>{title || 'No Title'}</p>
        <p className={numberCard_less_1.default.number}>
          <react_countup_1.default start={0} end={number} duration={2.75} useEasing useGrouping separator="," {...countUp || {}}/>
        </p>
      </div>
    </antd_1.Card>);
}
NumberCard.propTypes = {
    icon: prop_types_1.default.string,
    color: prop_types_1.default.string,
    title: prop_types_1.default.string,
    number: prop_types_1.default.number,
    countUp: prop_types_1.default.object,
};
exports.default = NumberCard;
