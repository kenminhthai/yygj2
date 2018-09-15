"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var dva_1 = require("dva");
var index_less_1 = require("./index.less");
var Detail = function (_a) {
    var userDetail = _a.userDetail;
    var data = userDetail.data;
    var content = [];
    for (var key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            content.push(<div key={key} className={index_less_1.default.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>);
        }
    }
    return (<div className="content-inner">
    <div className={index_less_1.default.content}>
      {content}
    </div>
  </div>);
};
Detail.propTypes = {
    userDetail: prop_types_1.default.object,
};
exports.default = dva_1.connect(function (_a) {
    var userDetail = _a.userDetail, loading = _a.loading;
    return ({ userDetail: userDetail, loading: loading.models.userDetail });
})(Detail);
