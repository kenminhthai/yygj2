"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global window */
/* global document */
var react_1 = require("react");
var nprogress_1 = require("nprogress");
var prop_types_1 = require("prop-types");
var path_to_regexp_1 = require("path-to-regexp");
var dva_1 = require("dva");
var components_1 = require("components");
var antd_1 = require("antd");
var utils_1 = require("utils");
var react_helmet_1 = require("react-helmet");
var router_1 = require("dva/router");
var _404_1 = require("../pages/404");
require("../themes/index.less");
require("./app.less");
var Content = antd_1.Layout.Content, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider;
var Header = components_1.MyLayout.Header, Bread = components_1.MyLayout.Bread, styles = components_1.MyLayout.styles;
var prefix = utils_1.config.prefix, openPages = utils_1.config.openPages;
var lastHref;
var App = function (_a) {
    var children = _a.children, dispatch = _a.dispatch, app = _a.app, loading = _a.loading, location = _a.location;
    var _b;
    var user = app.user, siderFold = app.siderFold, darkTheme = app.darkTheme, isNavbar = app.isNavbar, menuPopoverVisible = app.menuPopoverVisible, navOpenKeys = app.navOpenKeys, menu = app.menu, permissions = app.permissions;
    var pathname = location.pathname;
    pathname = pathname.startsWith('/') ? pathname : "/" + pathname;
    var iconFontJS = utils_1.config.iconFontJS, iconFontCSS = utils_1.config.iconFontCSS, logo = utils_1.config.logo;
    var current = menu.filter(function (item) { return path_to_regexp_1.default(item.route || '').exec(pathname); });
    var hasPermission = current.length ? permissions.visit.includes(current[0].id) : false;
    var href = window.location.href;
    if (lastHref !== href) {
        nprogress_1.default.start();
        if (!loading.global) {
            nprogress_1.default.done();
            lastHref = href;
        }
    }
    var headerProps = {
        menu: menu,
        user: user,
        location: location,
        siderFold: siderFold,
        isNavbar: isNavbar,
        menuPopoverVisible: menuPopoverVisible,
        navOpenKeys: navOpenKeys,
        switchMenuPopover: function () {
            dispatch({ type: 'app/switchMenuPopver' });
        },
        logout: function () {
            dispatch({ type: 'app/logout' });
        },
        switchSider: function () {
            dispatch({ type: 'app/switchSider' });
        },
        changeOpenKeys: function (openKeys) {
            dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
        },
    };
    var siderProps = {
        menu: menu,
        location: location,
        siderFold: siderFold,
        darkTheme: darkTheme,
        navOpenKeys: navOpenKeys,
        changeTheme: function () {
            dispatch({ type: 'app/switchTheme' });
        },
        changeOpenKeys: function (openKeys) {
            window.localStorage.setItem(prefix + "navOpenKeys", JSON.stringify(openKeys));
            dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } });
        },
    };
    var breadProps = {
        menu: menu,
        location: location,
    };
    if (openPages && openPages.includes(pathname)) {
        return (<div>
      <components_1.Loader fullScreen spinning={loading.effects['app/query']}/>
      {children}
    </div>);
    }
    return (<div>
      <components_1.Loader fullScreen spinning={loading.effects['app/query']}/>
      <react_helmet_1.Helmet>
        <title>ANTD ADMIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href={logo} type="image/x-icon"/>
        {iconFontJS && <script src={iconFontJS}/>}
        {iconFontCSS && <link rel="stylesheet" href={iconFontCSS}/>}
      </react_helmet_1.Helmet>

      <antd_1.Layout className={utils_1.classnames((_b = {}, _b[styles.dark] = darkTheme, _b[styles.light] = !darkTheme, _b))}>
        {!isNavbar && <Sider trigger={null} collapsible collapsed={siderFold}>
          {siderProps.menu.length === 0 ? null : <components_1.MyLayout.Sider {...siderProps}/>}
        </Sider>}
        <antd_1.Layout style={{ height: '100vh', overflow: 'scroll' }} id="mainContainer">
          <antd_1.BackTop target={function () { return document.getElementById('mainContainer'); }}/>
          <Header {...headerProps}/>
          <Content>
            <Bread {...breadProps}/>
            {hasPermission ? children : <_404_1.default />}
          </Content>
          <Footer>
            {utils_1.config.footerText}
          </Footer>
        </antd_1.Layout>
      </antd_1.Layout>
    </div>);
};
App.propTypes = {
    children: prop_types_1.default.element.isRequired,
    location: prop_types_1.default.object,
    dispatch: prop_types_1.default.func,
    app: prop_types_1.default.object,
    loading: prop_types_1.default.object,
};
exports.default = router_1.withRouter(dva_1.connect(function (_a) {
    var app = _a.app, loading = _a.loading;
    return ({ app: app, loading: loading });
})(App));
