(this.webpackJsonp=this.webpackJsonp||[]).push([[54],{ZMK3:function(e,t,n){e.exports={container:"container--18oWI",header:"header--3-FoD",content:"content--33Pd_",label_text:"label_text--3jEno",properties_container:"properties_container--1Nq2m",label:"label--30PFE",error_info:"error_info--2L2_H",properties_input:"properties_input--2gw_f",footer:"footer--2oies",button_wrapper:"button_wrapper--HRlON",bottom_tips:"bottom_tips--2xz-_"}},juKs:function(e,t,n){"use strict";n.r(t),n.d(t,"CommonInputDialogComponent",(function(){return v}));var o=n("pVnL"),i=n.n(o),r=n("J4zp"),a=n.n(r),c=n("q1tI"),l=n("ANjH"),s=n("/MKj"),_=n("2OET"),p=n("CG87"),m=n("G72A"),d=n("5nG9"),u=n("Gzrk");n("ZMK3");var b=c.useState,f=c.useEffect,v=Object(_.b)(Object(s.connect)((function(e){return{setting:e.dialog_state.setting.common_input_dialog_setting}}),(function(e){return Object(l.bindActionCreators)({close_dialog:m.c,set_dialog_props:m.f,show_toast:d.d},e)}))((function(e){var t=e.setting,n=e.intl,o=e.close_dialog,r=e.set_dialog_props,l=t||{},s=l.title,_=l.intl_title,m=l.btn_left,d=l.btn_right,v=l.validator,g=l.label,h=l.default_value,E=l.input_props,N=l.bottom_tips,w=l.intl_bottom_tips,k=b(h||""),x=a()(k,2),j=x[0],y=x[1],O=b(""),C=a()(O,2),H=C[0],q=C[1];f((function(){return function(){r({common_input_dialog_setting:void 0})}}),[r]);var z=function(e){return n.formatMessage({id:e})},F=function(e){var t=e.target.value;if(y(t),v){var n=h===t?"":v(t);q(n||"")}};return c.createElement(p.a,{type:"common_input",on_request_close:function(){return o({dialog_type:"common_input"})},close_btn:!1},c.createElement("div",{className:"container--18oWI"},c.createElement("div",{className:"header--3-FoD"},_||(s?z(s):"")),c.createElement("div",{className:"content--33Pd_"},c.createElement("div",{className:"properties_container--1Nq2m"},g&&c.createElement("div",{className:"label--30PFE"},z(g)),c.createElement("div",{className:"properties_input--2gw_f"},c.createElement(u.d,i()({autofocus:!0,width:"100%",input_style:{paddingRight:"10px",borderColor:H?"#ff472e":void 0},value:j,on_change:F,on_blur:F,on_enter_down:H||""===j?void 0:d&&d.callback.bind(void 0,j),classname:"th1-bg-8 ".concat(""===H?"th1-border-impt-focus-0 th1-border-impt-hover-0":"")},E)),c.createElement("div",{className:"error_info--2L2_H"},H&&z(H))))),c.createElement("div",{className:"footer--2oies"},c.createElement("div",{className:"button_wrapper--HRlON"},c.createElement(u.a,{type:"primary-outline",width:120,height:36,on_click:m&&m.callback},m&&z(m.text)),c.createElement(u.a,{width:120,height:36,type:"primary",disable:!!H||""===j,on_click:d&&d.callback.bind(void 0,j)},d&&z(d.text)))),c.createElement("div",{className:"bottom_tips--2xz-_"},w||(N?z(N):""))))})))}}]);