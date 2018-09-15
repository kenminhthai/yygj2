"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var dva_1 = require("dva");
var antd_1 = require("antd");
var router_1 = require("dva/router");
var query_string_1 = require("query-string");
var components_1 = require("components");
var List_1 = require("./components/List");
var TabPane = antd_1.Tabs.TabPane;
var EnumPostStatus = {
    UNPUBLISH: 1,
    PUBLISHED: 2,
};
var Index = function (_a) {
    var post = _a.post, dispatch = _a.dispatch, loading = _a.loading, location = _a.location;
    var list = post.list, pagination = post.pagination;
    var query = location.query, pathname = location.pathname;
    var listProps = {
        pagination: pagination,
        dataSource: list,
        loading: loading.effects['post/query'],
        onChange: function (page) {
            dispatch(router_1.routerRedux.push({
                pathname: pathname,
                search: query_string_1.default.stringify(__assign({}, query, { page: page.current, pageSize: page.pageSize })),
            }));
        },
    };
    var handleTabClick = function (key) {
        dispatch(router_1.routerRedux.push({
            pathname: pathname,
            search: query_string_1.default.stringify({
                status: key,
            }),
        }));
    };
    return (<components_1.Page inner>
    <antd_1.Tabs activeKey={query.status === String(EnumPostStatus.UNPUBLISH) ? String(EnumPostStatus.UNPUBLISH) : String(EnumPostStatus.PUBLISHED)} onTabClick={handleTabClick}>
      <TabPane tab="Publised" key={String(EnumPostStatus.PUBLISHED)}>
        <List_1.default {...listProps}/>
      </TabPane>
      <TabPane tab="Unpublish" key={String(EnumPostStatus.UNPUBLISH)}>
        <List_1.default {...listProps}/>
      </TabPane>
    </antd_1.Tabs>
  </components_1.Page>);
};
Index.propTypes = {
    post: prop_types_1.default.object,
    loading: prop_types_1.default.object,
    location: prop_types_1.default.object,
    dispatch: prop_types_1.default.func,
};
exports.default = dva_1.connect(function (_a) {
    var post = _a.post, loading = _a.loading;
    return ({ post: post, loading: loading });
})(Index);
