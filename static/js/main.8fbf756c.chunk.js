(this.webpackJsonpformatter=this.webpackJsonpformatter||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(8),l=a(9),i=a(10),o=a(0),c=a.n(o),s=a(11),u=a.n(s),m=(a(32),a(33),a(12)),d=a(43),p=a(40),h=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).onTextChange=function(e){n.setState({url:e.target.value})},n.onSubmit=function(){if(2===n.state.url.split("?").length){var e,t=n.state.url.split("?")[1],a=Object(m.c)(t.split("&"),(function(t,a){if(2===(e=a.split("=")).length){if(e[0]&&e[1])return t[e[0]]=e[1],t;n.setState({error:"Invalid URL: expecting each key and value to be present."})}else n.setState({error:"Invalid URL: expecting each parameter to be a key value pair separated by =."})}),{});a&&0!==Object.keys(a).length?n.props.onSubmit(a,n.state.url.split("?")[0]):n.setState({error:"Invalid URL: expecting at least one parameter."})}else n.setState({error:"Invalid URL: expecting exactly 1 ? at the start of the query."})},n.state={url:""},n}return Object(n.a)(a,[{key:"render",value:function(){var e=c.a.createElement(d.a,{variant:"danger"},this.state.error);return c.a.createElement("div",{className:"urlInput"},this.state.error&&e,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputUrl"},"Paste URL here:"),c.a.createElement("br",null),c.a.createElement("textarea",{className:"form-control",id:"inputUrl",rows:"12",onChange:this.onTextChange})),c.a.createElement(p.a,{variant:"primary",size:"lg",block:!0,disabled:!this.state.url,onClick:this.onSubmit},"Submit"))}}]),a}(c.a.Component),v=a(24),b=a(42),E=a(41),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).onChange=function(e){var t=Object(v.a)({},n.state.params);t[e.target.id]=e.target.value,n.setState({params:t})},n.onSubmit=function(){var e,t=n.props.url?n.props.url:"",a=!0;Object(m.a)(n.state.params,(function(r,n){a?(e="".concat(n,"=").concat(r),a=!1):e="&".concat(n,"=").concat(r),t=t.concat(e)})),n.setState({showConvertedUrl:!0,convertedUrl:t})},n.state={params:Object.assign({},e.params),showConvertedUrl:!1},n}return Object(n.a)(a,[{key:"renderTable",value:function(){var e=this,t=Object(m.b)(this.state.params,(function(t,a){return c.a.createElement("tr",{key:"".concat(a,"_row")},c.a.createElement("td",null,c.a.createElement("textarea",{className:"parameterEditorKeyColumn",readOnly:!0,value:a})),c.a.createElement("td",null,c.a.createElement(b.a.Control,{type:"text",id:a,value:t,onChange:e.onChange})))}));return c.a.createElement(E.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Key"),c.a.createElement("th",null,"Value"))),c.a.createElement("tbody",null,t))}},{key:"renderConvertedUrl",value:function(){return c.a.createElement("div",{id:"convertedUrl"},c.a.createElement("div",null,this.state.convertedUrl))}},{key:"render",value:function(){return c.a.createElement("div",{className:"parameterEditor"},this.renderTable(),c.a.createElement("div",{id:"parameterEditorButtonsContainer"},c.a.createElement(p.a,{id:"parameterEditorCancelButton",variant:"secondary",size:"lg",onClick:this.props.onCancel},"Go Back"),c.a.createElement(p.a,{id:"parameterEditorSubmitButton",variant:"primary",size:"lg",onClick:this.onSubmit},"Convert")),this.state.showConvertedUrl&&this.renderConvertedUrl())}}]),a}(c.a.Component),C=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).onUrlSubmit=function(e,t){n.setState({urlSubmitted:!0,params:e,url:t})},n.onEditorSubmit=function(){},n.onEditorCancel=function(){n.setState({urlSubmitted:!1})},n.state={urlSubmitted:!1},n}return Object(n.a)(a,[{key:"render",value:function(){var e=c.a.createElement(h,{onSubmit:this.onUrlSubmit}),t=c.a.createElement(f,{params:this.state.params,url:this.state.url,onCancel:this.onEditorCancel});return c.a.createElement("div",{className:"formatter"},c.a.createElement("h1",null,"not a tag splitter"),this.state.urlSubmitted?t:e)}}]),a}(c.a.Component);u.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8fbf756c.chunk.js.map