"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[465],{3989:function(h,a,e){var o;e.r(a),e.d(a,{demos:function(){return l}});var I=e(90228),c=e.n(I),R=e(87999),t=e.n(R),i=e(75271),E=e(86272),P=e(15888),U=e(7355),l={"src-virtualist-demo-base":{component:i.memo(i.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,27567))})),asset:{type:"BLOCK",id:"src-virtualist-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63209).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:P,react:o||(o=e.t(i,2))},renderOpts:{compile:function(){var m=t()(c()().mark(function v(){var s,x=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(41).then(e.bind(e,50041));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,x));case 3:case"end":return n.stop()}},v)}));function u(){return m.apply(this,arguments)}return u}()}},"src-virtualist-demo-fs":{component:i.memo(i.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,18369))})),asset:{type:"BLOCK",id:"src-virtualist-demo-fs",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90947).Z},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{keyui:P,react:o||(o=e.t(i,2))},renderOpts:{compile:function(){var m=t()(c()().mark(function v(){var s,x=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(41).then(e.bind(e,50041));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,x));case 3:case"end":return n.stop()}},v)}));function u(){return m.apply(this,arguments)}return u}()}},"src-virtualist-demo-vs":{component:i.memo(i.lazy(function(){return Promise.all([e.e(476),e.e(379),e.e(887),e.e(888),e.e(433)]).then(e.bind(e,66667))})),asset:{type:"BLOCK",id:"src-virtualist-demo-vs",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86774).Z},"@faker-js/faker":{type:"NPM",value:"9.3.0"},keyui:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@faker-js/faker":U,keyui:P,react:o||(o=e.t(i,2))},renderOpts:{compile:function(){var m=t()(c()().mark(function v(){var s,x=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(41).then(e.bind(e,50041));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,x));case 3:case"end":return n.stop()}},v)}));function u(){return m.apply(this,arguments)}return u}()}}}},22293:function(h,a,e){e.r(a);var o=e(48305),I=e.n(o),c=e(82187),R=e.n(c),t=e(75271),i=e(6610),E=e(52676),P=function(l){var m=l.duration,u=m===void 0?2:m,v=l.dots,s=v===void 0?!0:v,x=l.className,C=l.style,n=l.beforeChange,L=l.afterChange,g=l.children,S=(0,t.useRef)(null),M=t.Children.count(g),b=M+2,G=(0,t.useState)(1),B=I()(G,2),d=B[0],T=B[1],H=(0,t.useState)(!0),F=I()(H,2),z=F[0],O=F[1],V=(0,t.useState)(void 0),N=I()(V,2),f=N[0],W=N[1],A=(0,t.useRef)(!1),j=(0,t.useRef)(1),K=(0,t.useCallback)(function(r){A.current||r!==d&&(n&&n(d,r),A.current=!0,j.current=d,T(r))},[n,d]),_=(0,t.useCallback)(function(){K(d+1)},[d,K]),y=(0,t.useCallback)(function(){if(!(u<=0)){f&&clearTimeout(f);var r=window.setTimeout(function(){_()},u*1e3);W(r)}},[u,_,f]),Z=(0,t.useCallback)(function(){if(A.current=!1,L&&L(d,j.current),d===b-1){O(!1),T(1),requestAnimationFrame(function(){O(!0),y()});return}if(d===0){O(!1),T(M),requestAnimationFrame(function(){O(!0),y()});return}y()},[d,b,M,L,y]);(0,t.useEffect)(function(){var r=S.current;r&&(r.style.transform="translateX(-".concat(d*100,"%)"),r.style.transition=z?"transform 0.5s ease":"none")},[d,z]),(0,t.useEffect)(function(){var r=S.current;if(r){var p=Array.from(r.children);if(!(p.length>0&&p.length!==M)){var D=p[0].cloneNode(!0),$=p[p.length-1].cloneNode(!0);return r.insertBefore($,p[0]),r.appendChild(D),r.style.transform="translateX(-100%)",y(),function(){f&&clearTimeout(f)}}}},[M,y,f]);var X=function(){f&&(clearTimeout(f),W(void 0))},J=function(){y()},Y=s&&(0,E.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(g,function(r,p){var D=p+1;return(0,E.jsx)("span",{className:R()("Slide-dot",{active:d===D}),onClick:function(){return K(D)}},D)})});return(0,E.jsxs)("div",{className:R()("Slide",x),style:C,onMouseEnter:X,onMouseLeave:J,children:[(0,E.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:S,onTransitionEnd:Z,children:g}),Y]})};a.default=P},6610:function(h,a,e){e.r(a)},68462:function(h,a,e){e.r(a),e.d(a,{texts:function(){return I}});var o=e(86272);const I=[{value:"\u6839\u636E\u6EDA\u52A8\u5BB9\u5668\u5143\u7D20\u7684\u53EF\u89C6\u533A\u57DF\u6765\u6E32\u67D3\u957F\u5217\u8868\u6570\u636E\u4E2D\u67D0\u4E00\u90E8\u5206\u6570\u636E\u3002",paraId:0,tocIndex:0},{value:`
\u865A\u62DF\u5217\u8868\u901A\u8FC7\u4EC5\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u5185\u7684 DOM \u5143\u7D20\uFF0C\u5728\u5904\u7406\u8D85\u957F\u5217\u8868\u65F6\u663E\u8457\u63D0\u5347\u6E32\u67D3\u6027\u80FD\uFF0C\u51CF\u5C11\u8D44\u6E90\u5360\u7528\u3002`,paraId:0,tocIndex:0},{value:"\u957F\u5217\u8868\u6E32\u67D3",paraId:1,tocIndex:1},{value:"\uFF1A\u5F53\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF08\u5982 1000+ \u6761\u6570\u636E\uFF09\uFF0C\u4F7F\u7528\u865A\u62DF\u5217\u8868\u53EF\u4EE5\u51CF\u5C11 DOM \u8282\u70B9\u6570\u3002",paraId:1,tocIndex:1},{value:"\u6027\u80FD\u4F18\u5316",paraId:1,tocIndex:1},{value:"\uFF1A\u51CF\u5C11\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\uFF0C\u63D0\u5347\u6EDA\u52A8\u6D41\u7545\u5EA6\u3002",paraId:1,tocIndex:1},{value:`\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u666E\u901A\u5217\u8868\u548C\u865A\u62DF\u5217\u8868\u7684\u6027\u80FD\u5DEE\u5F02\u3002\r
`,paraId:2,tocIndex:2},{value:`\r
\u901A\u8FC7\u63A7\u5236\u53F0\u53EF\u4EE5\u89C2\u5BDF\u5230\u4EE5\u4E0B\u5DEE\u5F02\uFF1A`,paraId:3},{value:"\u666E\u901A\u5217\u8868",paraId:4},{value:"\uFF1A\u4E00\u6B21\u6027\u6E32\u67D3 1000 \u4E2A DOM \u8282\u70B9\uFF0C\u52A0\u8F7D\u65F6\u95F4\u8F83\u957F\uFF08\u7EA6 36ms\uFF09\u3002",paraId:4},{value:"\u865A\u62DF\u5217\u8868",paraId:4},{value:"\uFF1A\u4EC5\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u90E8\u5206 DOM \u8282\u70B9\uFF0C\u52A0\u8F7D\u65F6\u95F4\u663E\u8457\u51CF\u5C11\uFF08\u7EA6 1.3ms\uFF09\u3002",paraId:4},{value:"\u6EDA\u52A8\u4EA4\u4E92",paraId:4},{value:"\uFF1A\u666E\u901A\u5217\u8868\u5728\u6EDA\u52A8\u65F6\u4E0D\u4F1A\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u865A\u62DF\u5217\u8868\u9700\u8981\u5B9E\u65F6\u8BA1\u7B97\u53EF\u89C6\u533A\u57DF\uFF0C\u53EF\u80FD\u89E6\u53D1\u591A\u6B21\u66F4\u65B0\u3002",paraId:4},{value:"\u540E\u7EED\u5B9E\u73B0\u4E86\u4E24\u4E2A\u865A\u62DF\u5217\u8868\uFF1A\u5143\u7D20\u5B9A\u9AD8 & \u5143\u7D20\u4E0D\u5B9A\u9AD8\u3002",paraId:5,tocIndex:3},{value:`\u9002\u7528\u4E8E\u6240\u6709\u5217\u8868\u9879\u9AD8\u5EA6\u56FA\u5B9A\u7684\u573A\u666F\uFF0C\u8BA1\u7B97\u7B80\u5355\u4E14\u6027\u80FD\u4F18\u8D8A\u3002\r
`,paraId:6,tocIndex:4},{value:`\u652F\u6301\u9AD8\u5EA6\u4E0D\u56FA\u5B9A\u7684\u5217\u8868\u9879\uFF0C\u9002\u7528\u66F4\u590D\u6742\u7684\u573A\u666F\u3002\r
`,paraId:7,tocIndex:5},{value:"\u5C5E\u6027\u540D",paraId:8,tocIndex:6},{value:"\u63CF\u8FF0",paraId:8,tocIndex:6},{value:"\u7C7B\u578B",paraId:8,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:6},{value:"children",paraId:8,tocIndex:6},{value:"\u63A5\u6536\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u6BCF\u884C\u5185\u5BB9\uFF0C\u51FD\u6570\u53C2\u6570\u5305\u542B ",paraId:8,tocIndex:6},{value:"index",paraId:8,tocIndex:6},{value:" \u53CA ",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"\uFF08\u884C\u5185\u6837\u5F0F\uFF09",paraId:8,tocIndex:6},{value:"(props: { index: number; style: React.CSSProperties; }) => React.JSX.Element",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"width",paraId:8,tocIndex:6},{value:"\u5217\u8868\u5BB9\u5668\u7684\u5BBD\u5EA6",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"height",paraId:8,tocIndex:6},{value:"\u5217\u8868\u5BB9\u5668\u7684\u53EF\u89C6\u9AD8\u5EA6",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"itemCount",paraId:8,tocIndex:6},{value:"\u5217\u8868\u9879\u76EE\u7684\u603B\u6570",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"itemSize",paraId:8,tocIndex:6},{value:"\u6BCF\u4E2A\u9879\u76EE\u7684\u56FA\u5B9A\u9AD8\u5EA6\u6216\u5927\u5C0F\uFF08\u7528\u4E8E\u8BA1\u7B97\u53EF\u89C6\u8303\u56F4\u4E0E\u6EDA\u52A8\u504F\u79FB\uFF09",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6}]},63209:function(h,a){a.Z=`import { FixedSizeList } from 'keyui';\r
import React, { Profiler } from 'react';\r
\r
interface RowProps {\r
  index: number;\r
  style?: React.CSSProperties;\r
}\r
\r
const Row = ({ index, style }: RowProps) => (\r
  <div style={style}>Row {index + 1}</div>\r
);\r
\r
// \u666E\u901A\u957F\u5217\u8868\r
const List = ({ data }: { data: number[] }) => (\r
  <div style={{ height: 250, width: 300, overflowY: 'scroll' }}>\r
    {data.map((_, index) => (\r
      <Row\r
        style={{ height: '36px', lineHeight: '36px' }}\r
        index={index}\r
        key={index}\r
      />\r
    ))}\r
  </div>\r
);\r
\r
// \u865A\u62DF\u957F\u5217\u8868\r
const VirtualList = () => (\r
  <FixedSizeList height={250} width={300} itemCount={1000} itemSize={36}>\r
    {({ index, style }) => <Row index={index} style={style} />}\r
  </FixedSizeList>\r
);\r
\r
const data = new Array(1000).fill(0);\r
\r
const onRender = (id: string, phase: string, actualDuration: number) => {\r
  console.log(\`id: \${id}, phase: \${phase}, actualDuration: \${actualDuration}\`);\r
};\r
\r
export default () => (\r
  <div style={{ display: 'flex' }}>\r
    <div>\r
      <h2>\u666E\u901A\u5217\u8868</h2>\r
      <Profiler id="normal-list" onRender={onRender}>\r
        <List data={data} />\r
      </Profiler>\r
    </div>\r
    <div style={{ marginLeft: '30px' }}>\r
      <h2>\u865A\u62DF\u5217\u8868</h2>\r
      <Profiler id="virtual-list" onRender={onRender}>\r
        <VirtualList />\r
      </Profiler>\r
    </div>\r
  </div>\r
);\r
`},90947:function(h,a){a.Z=`import { FixedSizeList } from 'keyui';\r
import React from 'react';\r
\r
interface RowProps {\r
  index: number;\r
  style: React.CSSProperties;\r
}\r
\r
const Row = ({ index, style }: RowProps) => {\r
  const data = new Array(1000).fill(0).map((_, idx) => \`Row \${idx + 1}\`);\r
  return (\r
    <div\r
      style={{\r
        ...style,\r
        background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',\r
      }}\r
    >\r
      {data[index]}\r
    </div>\r
  );\r
};\r
\r
export default () => {\r
  return (\r
    <FixedSizeList height={300} itemCount={1000} itemSize={36} width={500}>\r
      {({ index, style }: { index: number; style: React.CSSProperties }) => (\r
        <Row index={index} style={style} />\r
      )}\r
    </FixedSizeList>\r
  );\r
};\r
`},86774:function(h,a){a.Z=`import { faker } from '@faker-js/faker';\r
import { VariableSizeList } from 'keyui';\r
import React from 'react';\r
\r
interface Props {\r
  index: number;\r
  style: object;\r
}\r
\r
export default () => {\r
  const data = new Array(1000).fill(0).map((_, idx) => ({\r
    id: idx + 1,\r
    content: faker.lorem.sentences(),\r
  }));\r
\r
  const Row = ({ index, style, ...rest }: Props) => {\r
    return (\r
      <div\r
        style={{\r
          ...style,\r
          padding: '20px 10px',\r
          background: index % 2 === 1 ? 'rgb(248, 248, 240)' : '',\r
          boxSizing: 'border-box',\r
        }}\r
        {...rest}\r
      >\r
        {\`\${index}: \${data[index]?.content}\`}\r
      </div>\r
    );\r
  };\r
\r
  return (\r
    <VariableSizeList height={300} itemCount={1000} itemSize={36} width={500}>\r
      {({ index, style }: { index: number; style: React.CSSProperties }) => (\r
        <Row index={index} style={style} />\r
      )}\r
    </VariableSizeList>\r
  );\r
};\r
`}}]);
