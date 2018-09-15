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
var react_1 = require("react");
var components_1 = require("components");
var draft_js_1 = require("draft-js");
var antd_1 = require("antd");
var draftjs_to_html_1 = require("draftjs-to-html");
var draftjs_to_markdown_1 = require("draftjs-to-markdown");
var EditorPage = /** @class */ (function (_super) {
    __extends(EditorPage, _super);
    function EditorPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onEditorStateChange = function (editorContent) {
            _this.setState({
                editorContent: editorContent,
            });
        };
        _this.state = {
            editorContent: null,
        };
        return _this;
    }
    EditorPage.prototype.render = function () {
        var editorContent = this.state.editorContent;
        var colProps = {
            lg: 12,
            md: 24,
        };
        var textareaStyle = {
            minHeight: 496,
            width: '100%',
            background: '#f7f7f7',
            borderColor: '#F1F1F1',
            padding: '16px 8px',
        };
        return (<div className="content-inner">
      <antd_1.Row gutter={32}>
        <antd_1.Col {...colProps}>
          <antd_1.Card title="Editor" style={{ overflow: 'visible' }}>
            <components_1.Editor wrapperStyle={{
            minHeight: 500,
        }} editorStyle={{
            minHeight: 376,
        }} editorState={editorContent} onEditorStateChange={this.onEditorStateChange}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col {...colProps}>
          <antd_1.Card title="HTML">
            <textarea style={textareaStyle} disabled value={editorContent ? draftjs_to_html_1.default(draft_js_1.convertToRaw(editorContent.getCurrentContent())) : ''}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col {...colProps}>
          <antd_1.Card title="Markdown">
            <textarea style={textareaStyle} disabled value={editorContent ? draftjs_to_markdown_1.default(draft_js_1.convertToRaw(editorContent.getCurrentContent())) : ''}/>
          </antd_1.Card>
        </antd_1.Col>
        <antd_1.Col {...colProps}>
          <antd_1.Card title="JSON">
            <textarea style={textareaStyle} disabled value={editorContent ? JSON.stringify(draft_js_1.convertToRaw(editorContent.getCurrentContent())) : ''}/>
          </antd_1.Card>
        </antd_1.Col>
      </antd_1.Row>
    </div>);
    };
    return EditorPage;
}(react_1.default.Component));
exports.default = EditorPage;
