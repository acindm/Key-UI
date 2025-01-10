"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[826],{30946:function(p,r,e){var c;e.r(r),e.d(r,{demos:function(){return U}});var l=e(90228),x=e.n(l),E=e(87999),a=e.n(E),h=e(75271),I=e(34980),M=e(15888),U={"src-toast-demo-base":{component:h.memo(h.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,56159))})),asset:{type:"BLOCK",id:"src-toast-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32713).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:M,react:c||(c=e.t(h,2))},renderOpts:{compile:function(){var o=a()(x()().mark(function _(){var v,C=arguments;return x()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,C));case 3:case"end":return s.stop()}},_)}));function y(){return o.apply(this,arguments)}return y}()}}}},22293:function(p,r,e){e.r(r);var c=e(48305),l=e.n(c),x=e(82187),E=e.n(x),a=e(75271),h=e(6610),I=e(52676),M=function(o){var y=o.duration,_=y===void 0?2:y,v=o.dots,C=v===void 0?!0:v,L=o.className,s=o.style,T=o.beforeChange,P=o.afterChange,O=o.children,g=(0,a.useRef)(null),m=a.Children.count(O),R=m+2,$=(0,a.useState)(1),b=l()($,2),t=b[0],B=b[1],X=(0,a.useState)(!0),S=l()(X,2),W=S[0],D=S[1],Z=(0,a.useState)(void 0),F=l()(Z,2),u=F[0],N=F[1],K=(0,a.useRef)(!1),j=(0,a.useRef)(1),A=(0,a.useCallback)(function(n){K.current||n!==t&&(T&&T(t,n),K.current=!0,j.current=t,B(n))},[T,t]),G=(0,a.useCallback)(function(){A(t+1)},[t,A]),i=(0,a.useCallback)(function(){if(!(_<=0)){u&&clearTimeout(u);var n=window.setTimeout(function(){G()},_*1e3);N(n)}},[_,G,u]),z=(0,a.useCallback)(function(){if(K.current=!1,P&&P(t,j.current),t===R-1){D(!1),B(1),requestAnimationFrame(function(){D(!0),i()});return}if(t===0){D(!1),B(m),requestAnimationFrame(function(){D(!0),i()});return}i()},[t,R,m,P,i]);(0,a.useEffect)(function(){var n=g.current;n&&(n.style.transform="translateX(-".concat(t*100,"%)"),n.style.transition=W?"transform 0.5s ease":"none")},[t,W]),(0,a.useEffect)(function(){var n=g.current;if(n){var d=Array.from(n.children);if(!(d.length>0&&d.length!==m)){var f=d[0].cloneNode(!0),H=d[d.length-1].cloneNode(!0);return n.insertBefore(H,d[0]),n.appendChild(f),n.style.transform="translateX(-100%)",i(),function(){u&&clearTimeout(u)}}}},[m,i,u]);var J=function(){u&&(clearTimeout(u),N(void 0))},Q=function(){i()},V=C&&(0,I.jsx)("div",{className:"Slide-dots-wrapper",children:a.Children.map(O,function(n,d){var f=d+1;return(0,I.jsx)("span",{className:E()("Slide-dot",{active:t===f}),onClick:function(){return A(f)}},f)})});return(0,I.jsxs)("div",{className:E()("Slide",L),style:s,onMouseEnter:J,onMouseLeave:Q,children:[(0,I.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:g,onTransitionEnd:z,children:O}),V]})};r.default=M},6610:function(p,r,e){e.r(r)},10172:function(p,r,e){e.r(r),e.d(r,{texts:function(){return l}});var c=e(34980);const l=[{value:"\u5728\u7528\u6237\u64CD\u4F5C\u540E\u5F39\u51FA\u7684\u5168\u5C40\u63D0\u793A\u6846\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u53CD\u9988\u64CD\u4F5C\u7ED3\u679C\u6216\u63D0\u4F9B\u5FC5\u8981\u7684\u4FE1\u606F\u63D0\u793A\u3002",paraId:0,tocIndex:0},{value:"\u8F7B\u91CF\u7EA7\u53CD\u9988",paraId:1,tocIndex:1},{value:"\uFF1A\u5FEB\u901F\u63D0\u793A\u7528\u6237\u64CD\u4F5C\u6210\u529F\u3001\u5931\u8D25\u6216\u8B66\u544A\u4FE1\u606F\u3002",paraId:1,tocIndex:1},{value:"\u64CD\u4F5C\u5F15\u5BFC",paraId:1,tocIndex:1},{value:"\uFF1A\u63D0\u9192\u7528\u6237\u4E0B\u4E00\u6B65\u64CD\u4F5C\u7684\u65B9\u5411\u3002",paraId:1,tocIndex:1},{value:"\u4FE1\u606F\u5C55\u793A",paraId:1,tocIndex:1},{value:"\uFF1A\u5C55\u793A\u7B80\u77ED\u7684\u7CFB\u7EDF\u4FE1\u606F\u3002",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u5F39\u7A97\u65F6\u957F 3s\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u81EA\u5B9A\u4E49\u663E\u793A\u65F6\u957F\u3002",paraId:2,tocIndex:2},{value:`
\u5F39\u7A97\u7C7B\u578B\u5982\u4E0B\u56DB\u79CD\uFF1A`,paraId:2,tocIndex:2},{value:"info",paraId:3,tocIndex:2},{value:"\uFF1A\u4FE1\u606F\u3002\u63D0\u793A\u666E\u901A\u4FE1\u606F",paraId:3,tocIndex:2},{value:"success",paraId:3,tocIndex:2},{value:"\uFF1A\u6210\u529F\u3002\u63D0\u793A\u6210\u529F\u4FE1\u606F",paraId:3,tocIndex:2},{value:"warning",paraId:3,tocIndex:2},{value:"\uFF1A\u8B66\u544A\u3002\u63D0\u793A\u8B66\u544A\u4FE1\u606F",paraId:3,tocIndex:2},{value:"error",paraId:3,tocIndex:2},{value:"\uFF1A\u5931\u8D25\u3002\u63D0\u793A\u5931\u8D25\u4FE1\u606F",paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:3},{value:"\u63CF\u8FF0",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u6D88\u606F\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\uFF1A",paraId:4,tocIndex:3},{value:"info",paraId:4,tocIndex:3},{value:" / ",paraId:4,tocIndex:3},{value:"success",paraId:4,tocIndex:3},{value:" / ",paraId:4,tocIndex:3},{value:"error",paraId:4,tocIndex:3},{value:" / ",paraId:4,tocIndex:3},{value:"warning",paraId:4,tocIndex:3},{value:"'info' | 'success' | 'error' | 'warning'",paraId:4,tocIndex:3},{value:"info",paraId:4,tocIndex:3},{value:"open",paraId:4,tocIndex:3},{value:"\u662F\u5426\u663E\u793A Toast",paraId:4,tocIndex:3},{value:"boolean",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"content",paraId:4,tocIndex:3},{value:"\u6D88\u606F\u5185\u5BB9",paraId:4,tocIndex:3},{value:"string",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"duration",paraId:4,tocIndex:3},{value:"\u663E\u793A\u65F6\u957F\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF0C\u5230\u8FBE\u65F6\u95F4\u540E\u81EA\u52A8\u5173\u95ED",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"3",paraId:4,tocIndex:3}]},32713:function(p,r){r.Z=`import { Button, Space, toast } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  const info = () => {\r
    toast.info('This is an info toast', 3);\r
  };\r
  const success = () => {\r
    toast.success('This is a success toast', 3);\r
  };\r
\r
  const error = () => {\r
    toast.error('This is an error toast', 3);\r
  };\r
\r
  const warning = () => {\r
    toast.warning('This is a warning toast', 3);\r
  };\r
  return (\r
    <Space>\r
      <Button onClick={info}>Info</Button>\r
      <Button type="primary" onClick={success}>\r
        Success\r
      </Button>\r
      <Button type="warning" onClick={warning}>\r
        Warning\r
      </Button>\r
      <Button type="danger" onClick={error}>\r
        Error\r
      </Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`}}]);
