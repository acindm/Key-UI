"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[998],{16822:function(E,r,e){var c;e.r(r),e.d(r,{demos:function(){return K}});var l=e(90228),p=e.n(l),h=e(87999),t=e.n(h),D=e(75271),_=e(68787),M=e(15888),K={"src-drag-list-demo-drag":{component:D.memo(D.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,23228))})),asset:{type:"BLOCK",id:"src-drag-list-demo-drag",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9850).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:M,react:c||(c=e.t(D,2))},renderOpts:{compile:function(){var o=t()(p()().mark(function m(){var v,C=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,C));case 3:case"end":return s.stop()}},m)}));function y(){return o.apply(this,arguments)}return y}()}}}},22293:function(E,r,e){e.r(r);var c=e(48305),l=e.n(c),p=e(82187),h=e.n(p),t=e(75271),D=e(6610),_=e(52676),M=function(o){var y=o.duration,m=y===void 0?2:y,v=o.dots,C=v===void 0?!0:v,U=o.className,s=o.style,P=o.beforeChange,g=o.afterChange,O=o.children,T=(0,t.useRef)(null),f=t.Children.count(O),b=f+2,$=(0,t.useState)(1),B=l()($,2),a=B[0],L=B[1],V=(0,t.useState)(!0),W=l()(V,2),S=W[0],x=W[1],X=(0,t.useState)(void 0),F=l()(X,2),u=F[0],N=F[1],A=(0,t.useRef)(!1),j=(0,t.useRef)(1),R=(0,t.useCallback)(function(n){A.current||n!==a&&(P&&P(a,n),A.current=!0,j.current=a,L(n))},[P,a]),G=(0,t.useCallback)(function(){R(a+1)},[a,R]),i=(0,t.useCallback)(function(){if(!(m<=0)){u&&clearTimeout(u);var n=window.setTimeout(function(){G()},m*1e3);N(n)}},[m,G,u]),Z=(0,t.useCallback)(function(){if(A.current=!1,g&&g(a,j.current),a===b-1){x(!1),L(1),requestAnimationFrame(function(){x(!0),i()});return}if(a===0){x(!1),L(f),requestAnimationFrame(function(){x(!0),i()});return}i()},[a,b,f,g,i]);(0,t.useEffect)(function(){var n=T.current;n&&(n.style.transform="translateX(-".concat(a*100,"%)"),n.style.transition=S?"transform 0.5s ease":"none")},[a,S]),(0,t.useEffect)(function(){var n=T.current;if(n){var d=Array.from(n.children);if(!(d.length>0&&d.length!==f)){var I=d[0].cloneNode(!0),H=d[d.length-1].cloneNode(!0);return n.insertBefore(H,d[0]),n.appendChild(I),n.style.transform="translateX(-100%)",i(),function(){u&&clearTimeout(u)}}}},[f,i,u]);var z=function(){u&&(clearTimeout(u),N(void 0))},J=function(){i()},Q=C&&(0,_.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(O,function(n,d){var I=d+1;return(0,_.jsx)("span",{className:h()("Slide-dot",{active:a===I}),onClick:function(){return R(I)}},I)})});return(0,_.jsxs)("div",{className:h()("Slide",U),style:s,onMouseEnter:z,onMouseLeave:J,children:[(0,_.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:T,onTransitionEnd:Z,children:O}),Q]})};r.default=M},6610:function(E,r,e){e.r(r)},92842:function(E,r,e){e.r(r),e.d(r,{texts:function(){return l}});var c=e(68787);const l=[{value:"\u652F\u6301\u5217\u8868\u9879\u7684\u62D6\u62FD\u64CD\u4F5C\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u4EA4\u4E92\u8C03\u6574\u987A\u5E8F\u3002",paraId:0,tocIndex:0},{value:"\u81EA\u5B9A\u4E49\u6392\u5E8F",paraId:1,tocIndex:1},{value:"\uFF1A\u5BF9\u6570\u636E\u5217\u8868\u8FDB\u884C\u91CD\u65B0\u6392\u5E8F\uFF0C\u5982\u4EFB\u52A1\u5217\u8868\u3001\u56FE\u7247\u6392\u5217\u7B49\u3002",paraId:1,tocIndex:1},{value:"\u4EA4\u4E92\u6027\u8C03\u6574",paraId:1,tocIndex:1},{value:"\uFF1A\u589E\u5F3A\u7528\u6237\u4F53\u9A8C\uFF0C\u4FBF\u4E8E\u62D6\u62FD\u5F0F\u64CD\u4F5C\u3002",paraId:1,tocIndex:1},{value:`\u652F\u6301\u62D6\u62FD\u91CD\u65B0\u6392\u5E8F\u7684\u5217\u8868\uFF0C\u5237\u65B0\u9875\u9762\u540E\u987A\u5E8F\u4F1A\u91CD\u7F6E\u3002(\u4E0D\u91CD\u7F6E\u987A\u5E8F\u7684\u529F\u80FD\u5C06\u5F85\u540E\u7EED\u5B8C\u5584)\r
`,paraId:2,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:3},{value:"\u63CF\u8FF0",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"children",paraId:3,tocIndex:3},{value:"\u88AB\u62D6\u62FD\u6392\u5E8F\u7684\u5B50\u5143\u7D20\u5217\u8868\uFF0C\u5FC5\u987B\u4E3A ",paraId:3,tocIndex:3},{value:"ReactElement[]",paraId:3,tocIndex:3},{value:"ReactElement[]",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"onChange",paraId:3,tocIndex:3},{value:"\u5F53\u5143\u7D20\u4F4D\u7F6E\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u65B0\u6570\u7EC4\u3001\u65B0\u7D22\u5F15\u3001\u65E7\u7D22\u5F15",paraId:3,tocIndex:3},{value:"(newVal: ReactElement[], fromIndex: number, toIndex: number) => void",paraId:3,tocIndex:3},{value:"() => {}",paraId:3,tocIndex:3},{value:"onDragEnd",paraId:3,tocIndex:3},{value:"\u62D6\u62FD\u5B8C\u6210\u65F6\u89E6\u53D1\u7684\u56DE\u8C03",paraId:3,tocIndex:3},{value:"() => void",paraId:3,tocIndex:3},{value:"() => {}",paraId:3,tocIndex:3}]},9850:function(E,r){r.Z=`import { DragList } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  const els = new Array(6).fill(0).map((_, i) => (\r
    <div\r
      key={i}\r
      style={{\r
        height: '50px',\r
        lineHeight: '50px',\r
        textAlign: 'center',\r
        cursor: 'pointer',\r
        margin: '6px 0',\r
        background: '#50c9d2',\r
      }}\r
    >\r
      {i + 1}\r
    </div>\r
  ));\r
\r
  return (\r
    <DragList\r
      onChange={(newVal: any, from: any, to: any) => {\r
        console.log('onChange: ', newVal, from, to);\r
      }}\r
    >\r
      {els}\r
    </DragList>\r
  );\r
};\r
\r
export default App;\r
`}}]);
