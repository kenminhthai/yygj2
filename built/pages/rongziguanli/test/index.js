"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var _a = this.props, _b = _a.name, name = _b === void 0 ? 'xxxx' : _b, _c = _a.enthusiasmLevel, enthusiasmLevel = _c === void 0 ? 1 : _c;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (<div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(1)}
        </div>
      </div>);
    };
    return Hello;
}(React.Component));
exports.default = Hello;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
