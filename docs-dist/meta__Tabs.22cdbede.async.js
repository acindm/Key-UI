"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[541],{80027:function(x,r,e){var u;e.r(r),e.d(r,{demos:function(){return R}});var p=e(90228),c=e.n(p),C=e(87999),a=e.n(C),s=e(75271),T=e(87997),h=e(15888),R={"src-tabs-demo-base":{component:s.memo(s.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,6774))})),asset:{type:"BLOCK",id:"src-tabs-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98089).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:u||(u=e.t(s,2))},renderOpts:{compile:function(){var d=a()(c()().mark(function i(){var o,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,f));case 3:case"end":return n.stop()}},i)}));function I(){return d.apply(this,arguments)}return I}()}},"src-tabs-demo-type":{component:s.memo(s.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,34925))})),asset:{type:"BLOCK",id:"src-tabs-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56629).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:u||(u=e.t(s,2))},renderOpts:{compile:function(){var d=a()(c()().mark(function i(){var o,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,f));case 3:case"end":return n.stop()}},i)}));function I(){return d.apply(this,arguments)}return I}()}},"src-tabs-demo-disabled":{component:s.memo(s.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,97143))})),asset:{type:"BLOCK",id:"src-tabs-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2381).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:h,react:u||(u=e.t(s,2))},renderOpts:{compile:function(){var d=a()(c()().mark(function i(){var o,f=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(379),e.e(41)]).then(e.bind(e,50041));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,f));case 3:case"end":return n.stop()}},i)}));function I(){return d.apply(this,arguments)}return I}()}}}},22293:function(x,r,e){e.r(r);var u=e(48305),p=e.n(u),c=e(82187),C=e.n(c),a=e(75271),s=e(6610),T=e(52676),h=function(d){var I=d.duration,i=I===void 0?2:I,o=d.dots,f=o===void 0?!0:o,M=d.className,n=d.style,D=d.beforeChange,O=d.afterChange,A=d.children,g=(0,a.useRef)(null),E=a.Children.count(A),S=E+2,Z=(0,a.useState)(1),U=p()(Z,2),l=U[0],B=U[1],k=(0,a.useState)(!0),F=p()(k,2),N=F[0],P=F[1],z=(0,a.useState)(void 0),W=p()(z,2),m=W[0],j=W[1],K=(0,a.useRef)(!1),G=(0,a.useRef)(1),L=(0,a.useCallback)(function(t){K.current||t!==l&&(D&&D(l,t),K.current=!0,G.current=l,B(t))},[D,l]),H=(0,a.useCallback)(function(){L(l+1)},[l,L]),y=(0,a.useCallback)(function(){if(!(i<=0)){m&&clearTimeout(m);var t=window.setTimeout(function(){H()},i*1e3);j(t)}},[i,H,m]),X=(0,a.useCallback)(function(){if(K.current=!1,O&&O(l,G.current),l===S-1){P(!1),B(1),requestAnimationFrame(function(){P(!0),y()});return}if(l===0){P(!1),B(E),requestAnimationFrame(function(){P(!0),y()});return}y()},[l,S,E,O,y]);(0,a.useEffect)(function(){var t=g.current;t&&(t.style.transform="translateX(-".concat(l*100,"%)"),t.style.transition=N?"transform 0.5s ease":"none")},[l,N]),(0,a.useEffect)(function(){var t=g.current;if(t){var v=Array.from(t.children);if(!(v.length>0&&v.length!==E)){var b=v[0].cloneNode(!0),$=v[v.length-1].cloneNode(!0);return t.insertBefore($,v[0]),t.appendChild(b),t.style.transform="translateX(-100%)",y(),function(){m&&clearTimeout(m)}}}},[E,y,m]);var J=function(){m&&(clearTimeout(m),j(void 0))},Q=function(){y()},V=f&&(0,T.jsx)("div",{className:"Slide-dots-wrapper",children:a.Children.map(A,function(t,v){var b=v+1;return(0,T.jsx)("span",{className:C()("Slide-dot",{active:l===b}),onClick:function(){return L(b)}},b)})});return(0,T.jsxs)("div",{className:C()("Slide",M),style:n,onMouseEnter:J,onMouseLeave:Q,children:[(0,T.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:g,onTransitionEnd:X,children:A}),V]})};r.default=h},6610:function(x,r,e){e.r(r)},44749:function(x,r,e){e.r(r),e.d(r,{texts:function(){return p}});var u=e(87997);const p=[{value:"\u7528\u4E8E\u7EC4\u7EC7\u5185\u5BB9\u533A\u57DF\uFF0C\u4FBF\u4E8E\u7528\u6237\u5FEB\u901F\u5207\u6362\u548C\u67E5\u770B\u4E0D\u540C\u7684\u5185\u5BB9\u3002",paraId:0,tocIndex:0},{value:"\u591A\u89C6\u56FE\u5207\u6362",paraId:1,tocIndex:1},{value:"\uFF1A\u5728\u6709\u9650\u7684\u7A7A\u95F4\u5185\u5C55\u793A\u4E0D\u540C\u7684\u5185\u5BB9\u3002",paraId:1,tocIndex:1},{value:"\u6A21\u5757\u5206\u7EC4",paraId:1,tocIndex:1},{value:"\uFF1A\u5C06\u4FE1\u606F\u5206\u7EC4\u5E76\u901A\u8FC7\u6807\u7B7E\u9875\u8FDB\u884C\u5207\u6362\u3002",paraId:1,tocIndex:1},{value:"\u8282\u7701\u7A7A\u95F4",paraId:1,tocIndex:1},{value:"\uFF1A\u907F\u514D\u5728\u9875\u9762\u4E0A\u5C55\u793A\u8FC7\u591A\u5185\u5BB9\uFF0C\u4FDD\u6301\u754C\u9762\u6574\u6D01\u3002",paraId:1,tocIndex:1},{value:"Tabs \u7684\u9ED8\u8BA4\u6837\u5F0F\u4E3A",paraId:2,tocIndex:2},{value:"line",paraId:2,tocIndex:2},{value:`\uFF0C\u9002\u7528\u4E8E\u5E38\u89C4\u573A\u666F\uFF0C\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF1A\r
`,paraId:2,tocIndex:2},{value:"\u901A\u8FC7",paraId:3,tocIndex:3},{value:"type = card",paraId:3,tocIndex:3},{value:`\u5207\u6362\u5230\u5361\u7247\u98CE\u683C\u7684\u6807\u7B7E\u9875\uFF0C\u66F4\u9002\u5408\u6A21\u5757\u5316\u5185\u5BB9\u5C55\u793A\uFF1A\r
`,paraId:3,tocIndex:3},{value:"\u901A\u8FC7",paraId:4,tocIndex:4},{value:"disabled",paraId:4,tocIndex:4},{value:`\u5C5E\u6027\u7981\u7528\u67D0\u4E2A\u6807\u7B7E\u9875\uFF0C\u7528\u6237\u65E0\u6CD5\u5207\u6362\u5230\u8BE5\u6807\u7B7E\u9875\uFF1A\r
`,paraId:4,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:5,tocIndex:5},{value:"\u63CF\u8FF0",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5BB9\u5668\u989D\u5916\u7684\u7C7B\u540D",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"\u884C\u5185\u6837\u5F0F",paraId:5,tocIndex:5},{value:"React.CSSProperties",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"defaultActiveKey",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u6807\u7B7E ",paraId:5,tocIndex:5},{value:"key",paraId:5,tocIndex:5},{value:"\uFF0C\u5E94\u4E0E ",paraId:5,tocIndex:5},{value:"items",paraId:5,tocIndex:5},{value:" \u6570\u7EC4\u4E2D\u67D0\u4E2A ",paraId:5,tocIndex:5},{value:"key",paraId:5,tocIndex:5},{value:" \u5BF9\u5E94\u624D\u80FD\u5C55\u793A\u5BF9\u5E94\u7684\u5185\u5BB9",paraId:5,tocIndex:5},{value:"string | number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"type",paraId:5,tocIndex:5},{value:"\u6807\u7B7E\u6837\u5F0F\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:5,tocIndex:5},{value:"line",paraId:5,tocIndex:5},{value:"\uFF08\u7EBF\u4E0B\u5212\u6837\u5F0F\uFF09\u6216 ",paraId:5,tocIndex:5},{value:"card",paraId:5,tocIndex:5},{value:"\uFF08\u5361\u7247\u5F0F\uFF09",paraId:5,tocIndex:5},{value:"'line' | 'card'",paraId:5,tocIndex:5},{value:"line",paraId:5,tocIndex:5},{value:"items",paraId:5,tocIndex:5},{value:"\u6807\u7B7E\u9879\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u9879\u5305\u542B ",paraId:5,tocIndex:5},{value:"key",paraId:5,tocIndex:5},{value:", ",paraId:5,tocIndex:5},{value:"label",paraId:5,tocIndex:5},{value:", ",paraId:5,tocIndex:5},{value:"children",paraId:5,tocIndex:5},{value:", ",paraId:5,tocIndex:5},{value:"disabled",paraId:5,tocIndex:5},{value:" \u7B49\u4FE1\u606F",paraId:5,tocIndex:5},{value:"TabItemType[]",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"onTabClick",paraId:5,tocIndex:5},{value:"\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u88AB\u70B9\u51FB\u6807\u7B7E\u7684 ",paraId:5,tocIndex:5},{value:"key",paraId:5,tocIndex:5},{value:" \u548C\u9F20\u6807\u4E8B\u4EF6\u5BF9\u8C61 ",paraId:5,tocIndex:5},{value:"MouseEvent",paraId:5,tocIndex:5},{value:"(key: string | number, e: MouseEvent) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5}]},98089:function(x,r){r.Z=`import { Button, Space, TabItemType, Tabs } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  const items: TabItemType[] = [\r
    {\r
      label: \`Tab 1\`,\r
      key: '1',\r
      children: \`Text Test: This is a test.\`,\r
    },\r
    {\r
      label: \`Tab 2\`,\r
      key: '2',\r
      children: \`Emoji Test: \u{1F618}\`,\r
    },\r
    {\r
      label: \`Tab 3\`,\r
      key: '3',\r
      children: (\r
        <Space direction="vertical">\r
          <Button>Button Test</Button>\r
        </Space>\r
      ),\r
    },\r
  ];\r
\r
  const handleClick = (key: string | number) => {\r
    console.log(key);\r
  };\r
\r
  return <Tabs defaultActiveKey="1" onTabClick={handleClick} items={items} />;\r
};\r
\r
export default App;\r
`},2381:function(x,r){r.Z=`import { Button, Space, TabItemType, Tabs } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  const items: TabItemType[] = [\r
    {\r
      label: \`Tab 1\`,\r
      key: '1',\r
      children: \`Text Test: This is a test.\`,\r
    },\r
    {\r
      label: \`Tab 2\`,\r
      key: '2',\r
      disabled: true,\r
      children: \`Emoji Test: \u{1F618}\`,\r
    },\r
    {\r
      label: \`Tab 3\`,\r
      key: '3',\r
      children: (\r
        <Space direction="vertical">\r
          <Button>Button Test</Button>\r
        </Space>\r
      ),\r
    },\r
  ];\r
\r
  const handleClick = (key: string | number) => {\r
    console.log(key);\r
  };\r
\r
  return <Tabs defaultActiveKey="1" onTabClick={handleClick} items={items} />;\r
};\r
\r
export default App;\r
`},56629:function(x,r){r.Z=`import { Button, Space, TabItemType, Tabs } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  const items: TabItemType[] = [\r
    {\r
      label: \`Tab 1\`,\r
      key: '1',\r
      children: \`Text Test: This is a test.\`,\r
    },\r
    {\r
      label: \`Tab 2\`,\r
      key: '2',\r
      children: \`Emoji Test: \u{1F618}\`,\r
    },\r
    {\r
      label: \`Tab 3\`,\r
      key: '3',\r
      children: (\r
        <Space direction="vertical">\r
          <Button>Button Test</Button>\r
        </Space>\r
      ),\r
    },\r
  ];\r
\r
  const handleClick = (key: string | number) => {\r
    // eslint-disable-next-line no-console\r
    console.log(key);\r
  };\r
\r
  return (\r
    <Tabs\r
      type="card"\r
      defaultActiveKey="1"\r
      onTabClick={handleClick}\r
      items={items}\r
    />\r
  );\r
};\r
\r
export default App;\r
`}}]);
