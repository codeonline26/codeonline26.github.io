(this.webpackJsonp=this.webpackJsonp||[]).push([[64],{hPM5:function(e,s,t){e.exports={saving_progress_dialog:"saving_progress_dialog--1xX3g","progress-bar-area":"progress-bar-area--3PnEN","progress-bar":"progress-bar--33kOd","progress-text":"progress-text--qmSAb","progress-info-text":"progress-info-text--387SM","progress-btn-area":"progress-btn-area--8Fjs9"}},"tl+M":function(e,s,t){"use strict";t.r(s),t.d(s,"SavingProgressDialogComponent",(function(){return j}));var r=t("lwsE"),a=t.n(r),n=t("W8MJ"),o=t.n(n),c=t("a1gu"),i=t.n(c),p=t("Nsbk"),l=t.n(p),g=t("PJYZ"),_=t.n(g),v=t("7W2i"),u=t.n(v),d=t("q1tI"),b=t("2OET"),h=t("/MKj"),m=t("ANjH"),f=t("Gzrk"),x=t("CG87"),E=t("yC70"),M=t("5IJ9"),k=t("rAvA");t("hPM5");var N=function(e){function s(e){var t;return a()(this,s),(t=i()(this,l()(s).call(this,e))).span_dom=void 0,t.cancel_saving=t.cancel_saving.bind(_()(t)),t}return u()(s,e),o()(s,[{key:"componentDidMount",value:function(){Object(E.b)()}},{key:"cancel_saving",value:function(){this.props.action_send_save_cancel_request(),Object(k.b)()}},{key:"render",value:function(){var e=this,s=Math.ceil(this.props.saved_resource/this.props.save_resource*100)||0,t={left:"0px"};if(this.span_dom){var r=this.span_dom.getClientRects()[0].width;r>300*s/100&&(t={left:"0px"}),t=r+300*s/100>300?{left:"".concat(300-r,"px")}:{left:"".concat(Math.ceil(300*s/100)-r,"px")}}return d.createElement(x.a,{type:"saving_progress",on_request_close:function(){},close_btn:!1},d.createElement("div",{className:"saving_progress_dialog--1xX3g"},d.createElement("span",{className:"progress-text--qmSAb",style:t,ref:function(s){s&&(e.span_dom=s)}},"".concat(s,"%")),d.createElement("div",{className:"th1-bg-7 progress-bar-area--3PnEN"},d.createElement("div",{className:"th1-bg-0 progress-bar--33kOd",style:{width:"".concat(s,"%")}})),d.createElement("div",{className:"progress-info-text--387SM"},this.props.intl.formatMessage({id:"saving_progress/tips"})),d.createElement("div",{className:"progress-btn-area--8Fjs9"},d.createElement(f.a,{type:"primary-outline",width:120,height:36,border_radius:"6",on_click:this.cancel_saving},this.props.intl.formatMessage({id:"saving_progress/cancel"})))))}}]),s}(d.Component);var j=Object(b.b)(Object(h.connect)((function(e){return{save_resource:e.save_state.save_resource,saved_resource:e.save_state.saved_resource}}),(function(e){return Object(m.bindActionCreators)({action_send_save_cancel_request:M.action_send_save_cancel_request},e)}))(N))}}]);