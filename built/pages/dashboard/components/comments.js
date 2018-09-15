"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var antd_1 = require("antd");
var utils_1 = require("utils");
var comments_less_1 = require("./comments.less");
var status = {
    1: {
        color: utils_1.color.green,
        text: 'APPROVED',
    },
    2: {
        color: utils_1.color.yellow,
        text: 'PENDING',
    },
    3: {
        color: utils_1.color.red,
        text: 'REJECTED',
    },
};
function Comments(_a) {
    var data = _a.data;
    var columns = [
        {
            title: 'avatar',
            dataIndex: 'avatar',
            width: 48,
            className: comments_less_1.default.avatarcolumn,
            render: function (text) { return <span style={{ backgroundImage: "url(" + text + ")" }} className={comments_less_1.default.avatar}/>; },
        }, {
            title: 'content',
            dataIndex: 'content',
            render: function (text, it) { return (<div>
        <h5 className={comments_less_1.default.name}>{it.name}</h5>
        <p className={comments_less_1.default.content}>{it.content}</p>
        <div className={comments_less_1.default.daterow}>
          <antd_1.Tag color={status[it.status].color}>{status[it.status].text}</antd_1.Tag>
          <span className={comments_less_1.default.date}>{it.date}</span>
        </div>
      </div>); },
        },
    ];
    return (<div className={comments_less_1.default.comments}>
      <antd_1.Table pagination={false} showHeader={false} columns={columns} rowKey={function (record, key) { return key; }} dataSource={data.filter(function (item, key) { return key < 3; })}/>
    </div>);
}
Comments.propTypes = {
    data: prop_types_1.default.array,
};
exports.default = Comments;
