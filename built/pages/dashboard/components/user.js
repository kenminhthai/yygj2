"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var react_countup_1 = require("react-countup");
var utils_1 = require("utils");
var user_less_1 = require("./user.less");
var countUpProps = {
    start: 0,
    duration: 2.75,
    useEasing: true,
    useGrouping: true,
    separator: ',',
};
function User(_a) {
    var avatar = _a.avatar, name = _a.name, email = _a.email, sales = _a.sales, sold = _a.sold;
    return (<div className={user_less_1.default.user}>
    <div className={user_less_1.default.header}>
      <div className={user_less_1.default.headerinner}>
        <div className={user_less_1.default.avatar} style={{ backgroundImage: "url(" + avatar + ")" }}/>
        <h5 className={user_less_1.default.name}>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
    <div className={user_less_1.default.number}>
      <div className={user_less_1.default.item}>
        <p>EARNING SALES</p>
        <p style={{ color: utils_1.color.green }}><react_countup_1.default end={sales} prefix="$" {...countUpProps}/></p>
      </div>
      <div className={user_less_1.default.item}>
        <p>ITEM SOLD</p>
        <p style={{ color: utils_1.color.blue }}><react_countup_1.default end={sold} {...countUpProps}/></p>
      </div>
    </div>
    <div className={user_less_1.default.footer}>
      <antd_1.Button type="ghost" size="large">View Profile</antd_1.Button>
    </div>
  </div>);
}
User.propTypes = {
    avatar: prop_types_1.default.string,
    name: prop_types_1.default.string,
    email: prop_types_1.default.string,
    sales: prop_types_1.default.number,
    sold: prop_types_1.default.number,
};
exports.default = User;
