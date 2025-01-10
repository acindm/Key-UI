"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[461],{70789:function(f,a,n){var s;n.r(a),n.d(a,{demos:function(){return K}});var y=n(90228),c=n.n(y),C=n(87999),t=n.n(C),u=n(75271),h=n(51765),B=n(15888),K={"src-button-demo-base":{component:u.memo(u.lazy(function(){return Promise.all([n.e(476),n.e(379),n.e(887),n.e(888),n.e(433)]).then(n.bind(n,81942))})),asset:{type:"BLOCK",id:"src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47642).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:B,react:s||(s=n.t(u,2))},renderOpts:{compile:function(){var d=t()(c()().mark(function i(){var o,I=arguments;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(379),n.e(41)]).then(n.bind(n,50041));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,I));case 3:case"end":return e.stop()}},i)}));function p(){return d.apply(this,arguments)}return p}()}},"src-button-demo-circle":{component:u.memo(u.lazy(function(){return Promise.all([n.e(476),n.e(379),n.e(887),n.e(888),n.e(433)]).then(n.bind(n,94146))})),asset:{type:"BLOCK",id:"src-button-demo-circle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(22282).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:B,react:s||(s=n.t(u,2))},renderOpts:{compile:function(){var d=t()(c()().mark(function i(){var o,I=arguments;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(379),n.e(41)]).then(n.bind(n,50041));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,I));case 3:case"end":return e.stop()}},i)}));function p(){return d.apply(this,arguments)}return p}()}},"src-button-demo-size":{component:u.memo(u.lazy(function(){return Promise.all([n.e(476),n.e(379),n.e(887),n.e(888),n.e(433)]).then(n.bind(n,16473))})),asset:{type:"BLOCK",id:"src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(78300).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:B,react:s||(s=n.t(u,2))},renderOpts:{compile:function(){var d=t()(c()().mark(function i(){var o,I=arguments;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(379),n.e(41)]).then(n.bind(n,50041));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,I));case 3:case"end":return e.stop()}},i)}));function p(){return d.apply(this,arguments)}return p}()}},"src-button-demo-disabled":{component:u.memo(u.lazy(function(){return Promise.all([n.e(476),n.e(379),n.e(887),n.e(888),n.e(433)]).then(n.bind(n,99179))})),asset:{type:"BLOCK",id:"src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(79442).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:B,react:s||(s=n.t(u,2))},renderOpts:{compile:function(){var d=t()(c()().mark(function i(){var o,I=arguments;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(379),n.e(41)]).then(n.bind(n,50041));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,I));case 3:case"end":return e.stop()}},i)}));function p(){return d.apply(this,arguments)}return p}()}}}},22293:function(f,a,n){n.r(a);var s=n(48305),y=n.n(s),c=n(82187),C=n.n(c),t=n(75271),u=n(6610),h=n(52676),B=function(d){var p=d.duration,i=p===void 0?2:p,o=d.dots,I=o===void 0?!0:o,E=d.className,e=d.style,g=d.beforeChange,O=d.afterChange,A=d.children,L=(0,t.useRef)(null),P=t.Children.count(A),U=P+2,$=(0,t.useState)(1),F=y()($,2),l=F[0],T=F[1],Z=(0,t.useState)(!0),N=y()(Z,2),W=N[0],D=N[1],X=(0,t.useState)(void 0),b=y()(X,2),m=b[0],j=b[1],R=(0,t.useRef)(!1),H=(0,t.useRef)(1),S=(0,t.useCallback)(function(r){R.current||r!==l&&(g&&g(l,r),R.current=!0,H.current=l,T(r))},[g,l]),z=(0,t.useCallback)(function(){S(l+1)},[l,S]),x=(0,t.useCallback)(function(){if(!(i<=0)){m&&clearTimeout(m);var r=window.setTimeout(function(){z()},i*1e3);j(r)}},[i,z,m]),J=(0,t.useCallback)(function(){if(R.current=!1,O&&O(l,H.current),l===U-1){D(!1),T(1),requestAnimationFrame(function(){D(!0),x()});return}if(l===0){D(!1),T(P),requestAnimationFrame(function(){D(!0),x()});return}x()},[l,U,P,O,x]);(0,t.useEffect)(function(){var r=L.current;r&&(r.style.transform="translateX(-".concat(l*100,"%)"),r.style.transition=W?"transform 0.5s ease":"none")},[l,W]),(0,t.useEffect)(function(){var r=L.current;if(r){var v=Array.from(r.children);if(!(v.length>0&&v.length!==P)){var M=v[0].cloneNode(!0),G=v[v.length-1].cloneNode(!0);return r.insertBefore(G,v[0]),r.appendChild(M),r.style.transform="translateX(-100%)",x(),function(){m&&clearTimeout(m)}}}},[P,x,m]);var Q=function(){m&&(clearTimeout(m),j(void 0))},V=function(){x()},Y=I&&(0,h.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(A,function(r,v){var M=v+1;return(0,h.jsx)("span",{className:C()("Slide-dot",{active:l===M}),onClick:function(){return S(M)}},M)})});return(0,h.jsxs)("div",{className:C()("Slide",E),style:e,onMouseEnter:Q,onMouseLeave:V,children:[(0,h.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:L,onTransitionEnd:J,children:A}),Y]})};a.default=B},6610:function(f,a,n){n.r(a)},72536:function(f,a,n){n.r(a),n.d(a,{texts:function(){return y}});var s=n(51765);const y=[{value:"\u7528\u4E8E\u6807\u8BB0\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\u5E76\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u8868\u5355\u63D0\u4EA4",paraId:1,tocIndex:1},{value:"\uFF1A\u7528\u4F5C\u63D0\u4EA4\u6216\u91CD\u7F6E\u64CD\u4F5C\u3002",paraId:1,tocIndex:1},{value:"\u9875\u9762\u8DF3\u8F6C",paraId:1,tocIndex:1},{value:"\uFF1A\u70B9\u51FB\u540E\u8DF3\u8F6C\u5230\u76EE\u6807\u9875\u9762\u3002",paraId:1,tocIndex:1},{value:"\u529F\u80FD\u89E6\u53D1",paraId:1,tocIndex:1},{value:"\uFF1A\u89E6\u53D1\u9875\u9762\u4E2D\u7684\u7279\u5B9A\u529F\u80FD\uFF0C\u5982\u5F39\u7A97\u3001\u83DC\u5355\u3002",paraId:1,tocIndex:1},{value:`\u4EE5\u4E0B\u5C55\u793A\u4E86 7 \u79CD\u6700\u5E38\u7528\u6309\u94AE\u6837\u5F0F\uFF0C\u5305\u542B\u57FA\u7840\u6837\u5F0F\u548C\u4E3B\u9898\u6837\u5F0F\u7B49\uFF1A\r
`,paraId:2,tocIndex:2},{value:"\u901A\u8FC7\u914D\u7F6E ",paraId:3,tocIndex:3},{value:"circle",paraId:3,tocIndex:3},{value:` \u5C5E\u6027\u53EF\u5C06\u6309\u94AE\u53D8\u4E3A\u5706\u5F62\u3002\r
`,paraId:3,tocIndex:3},{value:"\u63D0\u4F9B\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002\u4F7F\u7528 ",paraId:4,tocIndex:4},{value:"size",paraId:4,tocIndex:4},{value:" \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:4,tocIndex:4},{value:"middle",paraId:4,tocIndex:4},{value:`\uFF1A\r
`,paraId:4,tocIndex:4},{value:"\u901A\u8FC7\u914D\u7F6E ",paraId:5,tocIndex:5},{value:"disabled",paraId:5,tocIndex:5},{value:` \u5C5E\u6027\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u65E0\u6CD5\u88AB\u70B9\u51FB\u3002\r
`,paraId:5,tocIndex:5},{value:"\u5C5E\u6027\u540D",paraId:6,tocIndex:6},{value:"\u63CF\u8FF0",paraId:6,tocIndex:6},{value:"\u7C7B\u578B",paraId:6,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:6},{value:"style",paraId:6,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u884C\u5185\u6837\u5F0F",paraId:6,tocIndex:6},{value:"React.CSSProperties",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"className",paraId:6,tocIndex:6},{value:"\u989D\u5916\u7684\u6837\u5F0F\u7C7B\u540D",paraId:6,tocIndex:6},{value:"string",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"disabled",paraId:6,tocIndex:6},{value:"\u662F\u5426\u7981\u7528\u6309\u94AE\uFF1B\u82E5\u7C7B\u578B\u4E3A ",paraId:6,tocIndex:6},{value:"link",paraId:6,tocIndex:6},{value:" \u65F6\uFF0C\u4F1A\u7ED9\u94FE\u63A5\u6DFB\u52A0 ",paraId:6,tocIndex:6},{value:"disabled",paraId:6,tocIndex:6},{value:" \u6837\u5F0F",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"false",paraId:6,tocIndex:6},{value:"size",paraId:6,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:6,tocIndex:6},{value:"'small' | 'middle' | 'large'",paraId:6,tocIndex:6},{value:"middle",paraId:6,tocIndex:6},{value:"type",paraId:6,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:6,tocIndex:6},{value:"'primary' | 'default' | 'danger' | 'link' | 'warning' | 'info' | 'dashed'",paraId:6,tocIndex:6},{value:"default",paraId:6,tocIndex:6},{value:"children",paraId:6,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9\uFF08\u53EF\u4F20\u5165\u6587\u672C\u3001\u56FE\u6807\u6216\u4EFB\u610F ",paraId:6,tocIndex:6},{value:"ReactNode",paraId:6,tocIndex:6},{value:"\uFF09",paraId:6,tocIndex:6},{value:"ReactNode",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"href",paraId:6,tocIndex:6},{value:"\u5F53 ",paraId:6,tocIndex:6},{value:"type='link'",paraId:6,tocIndex:6},{value:" \u65F6\uFF0C\u6309\u94AE\u4F1A\u88AB\u6E32\u67D3\u4E3A ",paraId:6,tocIndex:6},{value:"<a>",paraId:6,tocIndex:6},{value:"\uFF0C\u6B64\u5C5E\u6027\u4E3A\u94FE\u63A5\u5730\u5740",paraId:6,tocIndex:6},{value:"string",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"circle",paraId:6,tocIndex:6},{value:"\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE\uFF1B\u4EC5\u5F53 ",paraId:6,tocIndex:6},{value:"type !== 'link'",paraId:6,tocIndex:6},{value:" \u65F6\u751F\u6548",paraId:6,tocIndex:6},{value:"boolean",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"onClick",paraId:6,tocIndex:6},{value:"\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03",paraId:6,tocIndex:6},{value:"MouseEventHandler<HTMLElement>",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6}]},47642:function(f,a){a.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space>\r
      <Button>Default</Button>\r
      <Button type="primary">Primary</Button>\r
      <Button type="warning">Warning</Button>\r
      <Button type="danger">Error</Button>\r
      <Button type="info">Info</Button>\r
      <Button type="link">Link</Button>\r
      <Button type="dashed">Dashed</Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`},22282:function(f,a){a.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space>\r
      <Button type="default" circle>\r
        1\r
      </Button>\r
      <Button type="primary" circle>\r
        2\r
      </Button>\r
      <Button type="danger" circle>\r
        3\r
      </Button>\r
      <Button type="warning" circle>\r
        4\r
      </Button>\r
      <Button type="info" circle>\r
        5\r
      </Button>\r
      <Button type="link" circle>\r
        6\r
      </Button>\r
      <Button type="dashed" circle>\r
        7\r
      </Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`},79442:function(f,a){a.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space>\r
      <Button type="default" disabled>\r
        Default\r
      </Button>\r
      <Button type="warning" disabled>\r
        Warning\r
      </Button>\r
      <Button type="primary" disabled>\r
        Primary\r
      </Button>\r
      <Button type="danger" disabled>\r
        Error\r
      </Button>\r
      <Button type="info" disabled>\r
        Info\r
      </Button>\r
      <Button type="link" disabled>\r
        Link\r
      </Button>\r
      <Button type="dashed" disabled>\r
        Dashed\r
      </Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`},78300:function(f,a){a.Z=`import { Button, Space } from 'keyui';\r
import React, { FC } from 'react';\r
\r
const App: FC = () => {\r
  return (\r
    <Space>\r
      <Button size="small" type="primary">\r
        small\r
      </Button>\r
      <Button type="primary">middle</Button>\r
      <Button size="large" type="primary">\r
        large\r
      </Button>\r
    </Space>\r
  );\r
};\r
\r
export default App;\r
`}}]);
