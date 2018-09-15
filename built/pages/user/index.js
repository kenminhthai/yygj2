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
var router_1 = require("dva/router");
var dva_1 = require("dva");
var antd_1 = require("antd");
var components_1 = require("components");
var query_string_1 = require("query-string");
var List_1 = require("./components/List");
var Filter_1 = require("./components/Filter");
var Modal_1 = require("./components/Modal");
var User = function (_a) {
    var location = _a.location, dispatch = _a.dispatch, user = _a.user, loading = _a.loading;
    var query = location.query, pathname = location.pathname;
    var list = user.list, pagination = user.pagination, currentItem = user.currentItem, modalVisible = user.modalVisible, modalType = user.modalType, isMotion = user.isMotion, selectedRowKeys = user.selectedRowKeys;
    var handleRefresh = function (newQuery) {
        dispatch(router_1.routerRedux.push({
            pathname: pathname,
            search: query_string_1.default.stringify(__assign({}, query, newQuery)),
        }));
    };
    var modalProps = {
        item: modalType === 'create' ? {} : currentItem,
        visible: modalVisible,
        maskClosable: false,
        confirmLoading: loading.effects["user/" + modalType],
        title: "" + (modalType === 'create' ? 'Create User' : 'Update User'),
        wrapClassName: 'vertical-center-modal',
        onOk: function (data) {
            dispatch({
                type: "user/" + modalType,
                payload: data,
            })
                .then(function () {
                handleRefresh();
            });
        },
        onCancel: function () {
            dispatch({
                type: 'user/hideModal',
            });
        },
    };
    var listProps = {
        dataSource: list,
        loading: loading.effects['user/query'],
        pagination: pagination,
        location: location,
        isMotion: isMotion,
        onChange: function (page) {
            handleRefresh({
                page: page.current,
                pageSize: page.pageSize,
            });
        },
        onDeleteItem: function (id) {
            dispatch({
                type: 'user/delete',
                payload: id,
            })
                .then(function () {
                handleRefresh({
                    page: (list.length === 1 && pagination.current > 1) ? pagination.current - 1 : pagination.current,
                });
            });
        },
        onEditItem: function (item) {
            dispatch({
                type: 'user/showModal',
                payload: {
                    modalType: 'update',
                    currentItem: item,
                },
            });
        },
        rowSelection: {
            selectedRowKeys: selectedRowKeys,
            onChange: function (keys) {
                dispatch({
                    type: 'user/updateState',
                    payload: {
                        selectedRowKeys: keys,
                    },
                });
            },
        },
    };
    var filterProps = {
        isMotion: isMotion,
        filter: __assign({}, query),
        onFilterChange: function (value) {
            handleRefresh(__assign({}, value, { page: 1 }));
        },
        onAdd: function () {
            dispatch({
                type: 'user/showModal',
                payload: {
                    modalType: 'create',
                },
            });
        },
        switchIsMotion: function () {
            dispatch({ type: 'user/switchIsMotion' });
        },
    };
    var handleDeleteItems = function () {
        dispatch({
            type: 'user/multiDelete',
            payload: {
                ids: selectedRowKeys,
            },
        })
            .then(function () {
            handleRefresh({
                page: (list.length === selectedRowKeys.length && pagination.current > 1) ? pagination.current - 1 : pagination.current,
            });
        });
    };
    return (<components_1.Page inner>
      <Filter_1.default {...filterProps}/>
      {selectedRowKeys.length > 0 &&
        <antd_1.Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
          <antd_1.Col>
            {"Selected " + selectedRowKeys.length + " items "}
            <antd_1.Popconfirm title="Are you sure delete these items?" placement="left" onConfirm={handleDeleteItems}>
              <antd_1.Button type="primary" style={{ marginLeft: 8 }}>Remove</antd_1.Button>
            </antd_1.Popconfirm>
          </antd_1.Col>
        </antd_1.Row>}
      <List_1.default {...listProps}/>
      {modalVisible && <Modal_1.default {...modalProps}/>}
    </components_1.Page>);
};
User.propTypes = {
    user: prop_types_1.default.object,
    location: prop_types_1.default.object,
    dispatch: prop_types_1.default.func,
    loading: prop_types_1.default.object,
};
exports.default = dva_1.connect(function (_a) {
    var user = _a.user, loading = _a.loading;
    return ({ user: user, loading: loading });
})(User);
