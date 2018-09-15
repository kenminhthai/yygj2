"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var quote_less_1 = require("./quote.less");
function Quote(_a) {
    var name = _a.name, content = _a.content, title = _a.title, avatar = _a.avatar;
    return (<div className={quote_less_1.default.quote}>
      <div className={quote_less_1.default.inner}>
        {content}
      </div>
      <div className={quote_less_1.default.footer}>
        <div className={quote_less_1.default.description}>
          <p>-{name}-</p>
          <p>{title}</p>
        </div>
        <div className={quote_less_1.default.avatar} style={{ backgroundImage: "url(" + avatar + ")" }}/>
      </div>
    </div>);
}
Quote.propTypes = {
    name: prop_types_1.default.string,
    content: prop_types_1.default.string,
    title: prop_types_1.default.string,
    avatar: prop_types_1.default.string,
};
exports.default = Quote;
