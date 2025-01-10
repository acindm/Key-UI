"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[122],{36358:function(y,r,e){var s;e.r(r),e.d(r,{demos:function(){return R}});var v=e(90228),c=e.n(v),C=e(87999),t=e.n(C),l=e(75271),B=e(22131),h=e(15888),R={"src-space-demo-base":{component:l.memo(l.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,85819))})),asset:{type:"BLOCK",id:"src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19858).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:s||(s=e.t(l,2))},renderOpts:{compile:function(){var o=t()(c()().mark(function i(){var u,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,f));case 3:case"end":return n.stop()}},i)}));function I(){return o.apply(this,arguments)}return I}()}},"src-space-demo-direction":{component:l.memo(l.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,38257))})),asset:{type:"BLOCK",id:"src-space-demo-direction",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32710).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:s||(s=e.t(l,2))},renderOpts:{compile:function(){var o=t()(c()().mark(function i(){var u,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,f));case 3:case"end":return n.stop()}},i)}));function I(){return o.apply(this,arguments)}return I}()}},"src-space-demo-size":{component:l.memo(l.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,13792))})),asset:{type:"BLOCK",id:"src-space-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77941).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:s||(s=e.t(l,2))},renderOpts:{compile:function(){var o=t()(c()().mark(function i(){var u,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,f));case 3:case"end":return n.stop()}},i)}));function I(){return o.apply(this,arguments)}return I}()}}}},22293:function(y,r,e){e.r(r);var s=e(48305),v=e.n(s),c=e(82187),C=e.n(c),t=e(75271),l=e(6610),B=e(52676),h=function(o){var I=o.duration,i=I===void 0?2:I,u=o.dots,f=u===void 0?!0:u,D=o.className,n=o.style,S=o.beforeChange,O=o.afterChange,T=o.children,g=(0,t.useRef)(null),E=t.Children.count(T),U=E+2,$=(0,t.useState)(1),z=v()($,2),d=z[0],A=z[1],Z=(0,t.useState)(!0),F=v()(Z,2),N=F[0],M=F[1],X=(0,t.useState)(void 0),W=v()(X,2),p=W[0],j=W[1],L=(0,t.useRef)(!1),G=(0,t.useRef)(1),K=(0,t.useCallback)(function(a){L.current||a!==d&&(S&&S(d,a),L.current=!0,G.current=d,A(a))},[S,d]),H=(0,t.useCallback)(function(){K(d+1)},[d,K]),x=(0,t.useCallback)(function(){if(!(i<=0)){p&&clearTimeout(p);var a=window.setTimeout(function(){H()},i*1e3);j(a)}},[i,H,p]),J=(0,t.useCallback)(function(){if(L.current=!1,O&&O(d,G.current),d===U-1){M(!1),A(1),requestAnimationFrame(function(){M(!0),x()});return}if(d===0){M(!1),A(E),requestAnimationFrame(function(){M(!0),x()});return}x()},[d,U,E,O,x]);(0,t.useEffect)(function(){var a=g.current;a&&(a.style.transform="translateX(-".concat(d*100,"%)"),a.style.transition=N?"transform 0.5s ease":"none")},[d,N]),(0,t.useEffect)(function(){var a=g.current;if(a){var m=Array.from(a.children);if(!(m.length>0&&m.length!==E)){var P=m[0].cloneNode(!0),b=m[m.length-1].cloneNode(!0);return a.insertBefore(b,m[0]),a.appendChild(P),a.style.transform="translateX(-100%)",x(),function(){p&&clearTimeout(p)}}}},[E,x,p]);var Q=function(){p&&(clearTimeout(p),j(void 0))},V=function(){x()},Y=f&&(0,B.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(T,function(a,m){var P=m+1;return(0,B.jsx)("span",{className:C()("Slide-dot",{active:d===P}),onClick:function(){return K(P)}},P)})});return(0,B.jsxs)("div",{className:C()("Slide",D),style:n,onMouseEnter:Q,onMouseLeave:V,children:[(0,B.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:g,onTransitionEnd:J,children:T}),Y]})};r.default=h},6610:function(y,r,e){e.r(r)},29179:function(y,r,e){e.r(r),e.d(r,{texts:function(){return v}});var s=e(22131);const v=[{value:"\u7528\u4E8E\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u7EDF\u4E00\u95F4\u8DDD\u3002",paraId:0,tocIndex:0},{value:"\u6392\u5217\u5E03\u5C40",paraId:1,tocIndex:1},{value:"\uFF1A\u4E3A\u7EC4\u4EF6\u4E4B\u95F4\u63D0\u4F9B\u56FA\u5B9A\u95F4\u8DDD\uFF0C\u907F\u514D\u5143\u7D20\u7D27\u8D34\u3002",paraId:1,tocIndex:1},{value:"\u7075\u6D3B\u5BF9\u9F50",paraId:1,tocIndex:1},{value:"\uFF1A\u652F\u6301\u6C34\u5E73\u3001\u5782\u76F4\u4E24\u79CD\u65B9\u5411\u4EE5\u53CA\u4E0D\u540C\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u7EDF\u4E00\u95F4\u8DDD",paraId:1,tocIndex:1},{value:"\uFF1A\u4F7F\u5F97\u5E03\u5C40\u66F4\u7B80\u6D01\u7F8E\u89C2\uFF0C\u7EDF\u4E00\u7EC4\u4EF6\u95F4\u7684\u95F4\u8DDD\u3002",paraId:1,tocIndex:1},{value:`\u4EE5\u4E0B\u5C55\u793A\u4E86\u9ED8\u8BA4\u7684\u6C34\u5E73\u6392\u5217\u95F4\u8DDD\uFF0C\u9002\u7528\u4E8E\u884C\u5185\u5143\u7D20\u7684\u6C34\u5E73\u95F4\u8DDD\uFF1A\r
`,paraId:2,tocIndex:2},{value:`\u7EC4\u4EF6\u5782\u76F4\u6392\u5217\u95F4\u8DDD\uFF1A\r
`,paraId:3,tocIndex:3},{value:"\u4F7F\u7528",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:"\u5C5E\u6027\u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F\uFF0C\u652F\u6301",paraId:4,tocIndex:4},{value:"small",paraId:4,tocIndex:4},{value:"\u3001",paraId:4,tocIndex:4},{value:"middle",paraId:4,tocIndex:4},{value:"\u548C",paraId:4,tocIndex:4},{value:"large",paraId:4,tocIndex:4},{value:`\uFF1A\r
`,paraId:4,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:5,tocIndex:5},{value:"\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"children",paraId:5,tocIndex:5},{value:"\u9700\u8981\u5C55\u793A\u7684\u5B50\u5143\u7D20",paraId:5,tocIndex:5},{value:"ReactNode",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5BB9\u5668\u7684\u884C\u5185\u6837\u5F0F",paraId:5,tocIndex:5},{value:"React.CSSProperties",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u5BB9\u5668\u989D\u5916\u7684 ",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"direction",paraId:5,tocIndex:5},{value:"\u5E03\u5C40\u65B9\u5411\uFF0C\u53EF\u9009\u503C\uFF1A",paraId:5,tocIndex:5},{value:"- ",paraId:5,tocIndex:5},{value:"horizontal",paraId:5,tocIndex:5},{value:" (\u6C34\u5E73\u6392\u5217)",paraId:5,tocIndex:5},{value:"- ",paraId:5,tocIndex:5},{value:"vertical",paraId:5,tocIndex:5},{value:" (\u5782\u76F4\u6392\u5217)",paraId:5,tocIndex:5},{value:"'horizontal' | 'vertical'",paraId:5,tocIndex:5},{value:"horizontal",paraId:5,tocIndex:5},{value:"size",paraId:5,tocIndex:5},{value:"\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\uFF1A",paraId:5,tocIndex:5},{value:"- \u9884\u8BBE\u5B57\u7B26\u4E32\uFF1A",paraId:5,tocIndex:5},{value:"mini",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"small",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"medium",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"large",paraId:5,tocIndex:5},{value:"- \u6570\u503C(\u5355\u4F4D px)",paraId:5,tocIndex:5},{value:"- \u5143\u7EC4 ",paraId:5,tocIndex:5},{value:"[number, number]",paraId:5,tocIndex:5},{value:" \u8868\u793A\u6A2A\u5411\u4E0E\u7EB5\u5411\u7684\u4E0D\u540C\u95F4\u8DDD",paraId:5,tocIndex:5},{value:"SizeType | number | [number, number]",paraId:5,tocIndex:5},{value:"small",paraId:5,tocIndex:5},{value:"align",paraId:5,tocIndex:5},{value:"\u5B50\u5143\u7D20\u5728\u6A2A\u5411\u5E03\u5C40\u65F6\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1A",paraId:5,tocIndex:5},{value:"- ",paraId:5,tocIndex:5},{value:"start",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"center",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"end",paraId:5,tocIndex:5},{value:" / ",paraId:5,tocIndex:5},{value:"baseline",paraId:5,tocIndex:5},{value:"'start' | 'center' | 'end' | 'baseline'",paraId:5,tocIndex:5},{value:"center",paraId:5,tocIndex:5}]},19858:function(y,r){r.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space>\r
      <Button type="primary">Button1</Button>\r
      <Button type="primary">Button2</Button>\r
      <Button type="primary">Button3</Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`},32710:function(y,r){r.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space direction="vertical">\r
      <Button type="primary">Button1</Button>\r
      <Button type="primary">Button2</Button>\r
      <Button type="primary">Button3</Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`},77941:function(y,r){r.Z=`import { Button, Space } from 'keyui';\r
import React, { FC, useState } from 'react';\r
\r
const App: FC = () => {\r
  const [size, setSize] = useState<'mini' | 'small' | 'medium' | 'large'>(\r
    'small',\r
  );\r
\r
  return (\r
    <>\r
      <Space align="end">\r
        <Button type="info" onClick={() => setSize('small')}>\r
          small\r
        </Button>\r
        <Button type="info" onClick={() => setSize('medium')}>\r
          medium\r
        </Button>\r
        <Button type="info" onClick={() => setSize('large')}>\r
          large\r
        </Button>\r
      </Space>\r
\r
      <Space size={size}>\r
        <Button type="primary">Primary</Button>\r
        <Button>Default</Button>\r
        <Button type="dashed">Dashed</Button>\r
        <Button type="link">Link</Button>\r
      </Space>\r
\r
      <br />\r
      <br />\r
\r
      <Space size={[30, 30]}>\r
        <Button type="primary">Primary</Button>\r
        <Button>Default</Button>\r
        <Button type="dashed">Dashed</Button>\r
        <Button type="link">Link</Button>\r
      </Space>\r
    </>\r
  );\r
};\r
\r
export default App;\r
`}}]);
