"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[698],{97305:function(c,r,n){var m;n.r(r),n.d(r,{demos:function(){return v}});var l=n(90228),x=n.n(l),E=n(87999),t=n.n(E),y=n(75271),f=n(33567),g=n(22293),D=n(82187),o=n.n(D),I=n(6610),v={"src-slide-demo-base":{component:y.memo(y.lazy(function(){return Promise.all([n.e(476),n.e(379),n.e(887),n.e(888),n.e(433)]).then(n.bind(n,99553))})),asset:{type:"BLOCK",id:"src-slide-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(11770).Z},react:{type:"NPM",value:"18.3.1"},"../slide.tsx":{type:"FILE",value:n(79388).Z},classnames:{type:"NPM",value:"2.5.1"},"./slide.scss":{type:"FILE",value:n(24905).Z}},entry:"index.tsx"},context:{"../slide.tsx":g,"./slide.scss":I,react:m||(m=n.t(y,2)),"F:/Documents/GitHub/Key-UI/src/Slide/slide.tsx":g,classnames:D,"F:/Documents/GitHub/Key-UI/src/Slide/slide.scss":I},renderOpts:{compile:function(){var C=t()(x()().mark(function S(){var T,_=arguments;return x()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(379),n.e(41)]).then(n.bind(n,50041));case 2:return s.abrupt("return",(T=s.sent).default.apply(T,_));case 3:case"end":return s.stop()}},S)}));function M(){return C.apply(this,arguments)}return M}()}}}},22293:function(c,r,n){n.r(r);var m=n(48305),l=n.n(m),x=n(82187),E=n.n(x),t=n(75271),y=n(6610),f=n(52676),g=function(o){var I=o.duration,v=I===void 0?2:I,C=o.dots,M=C===void 0?!0:C,S=o.className,T=o.style,_=o.beforeChange,P=o.afterChange,s=o.children,L=(0,t.useRef)(null),p=t.Children.count(s),K=p+2,X=(0,t.useState)(1),A=l()(X,2),a=A[0],R=A[1],Z=(0,t.useState)(!0),U=l()(Z,2),B=U[0],b=U[1],$=(0,t.useState)(void 0),F=l()($,2),d=F[0],H=F[1],O=(0,t.useRef)(!1),W=(0,t.useRef)(1),N=(0,t.useCallback)(function(e){O.current||e!==a&&(_&&_(a,e),O.current=!0,W.current=a,R(e))},[_,a]),G=(0,t.useCallback)(function(){N(a+1)},[a,N]),u=(0,t.useCallback)(function(){if(!(v<=0)){d&&clearTimeout(d);var e=window.setTimeout(function(){G()},v*1e3);H(e)}},[v,G,d]),z=(0,t.useCallback)(function(){if(O.current=!1,P&&P(a,W.current),a===K-1){b(!1),R(1),requestAnimationFrame(function(){b(!0),u()});return}if(a===0){b(!1),R(p),requestAnimationFrame(function(){b(!0),u()});return}u()},[a,K,p,P,u]);(0,t.useEffect)(function(){var e=L.current;e&&(e.style.transform="translateX(-".concat(a*100,"%)"),e.style.transition=B?"transform 0.5s ease":"none")},[a,B]),(0,t.useEffect)(function(){var e=L.current;if(e){var i=Array.from(e.children);if(!(i.length>0&&i.length!==p)){var h=i[0].cloneNode(!0),j=i[i.length-1].cloneNode(!0);return e.insertBefore(j,i[0]),e.appendChild(h),e.style.transform="translateX(-100%)",u(),function(){d&&clearTimeout(d)}}}},[p,u,d]);var J=function(){d&&(clearTimeout(d),H(void 0))},Q=function(){u()},V=M&&(0,f.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(s,function(e,i){var h=i+1;return(0,f.jsx)("span",{className:E()("Slide-dot",{active:a===h}),onClick:function(){return N(h)}},h)})});return(0,f.jsxs)("div",{className:E()("Slide",S),style:T,onMouseEnter:J,onMouseLeave:Q,children:[(0,f.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:L,onTransitionEnd:z,children:s}),V]})};r.default=g},6610:function(c,r,n){n.r(r)},82580:function(c,r,n){n.r(r),n.d(r,{texts:function(){return l}});var m=n(33567);const l=[{value:"\u56FE\u7247\u5E7F\u544A",paraId:0,tocIndex:1},{value:"\uFF1A\u5728\u7F51\u7AD9\u6216\u5E94\u7528\u9996\u9875\u8F6E\u64AD\u5C55\u793A\u591A\u5F20\u7126\u70B9\u56FE\u3001\u5E7F\u544A\u6A2A\u5E45\u7B49\u3002",paraId:0,tocIndex:1},{value:"\u4FE1\u606F\u5C55\u793A",paraId:0,tocIndex:1},{value:"\uFF1A\u53EF\u8F6E\u64AD\u6587\u5B57\u3001\u5361\u7247\u7B49\uFF0C\u51CF\u5C11\u9875\u9762\u5207\u6362\uFF0C\u63D0\u9AD8\u4FE1\u606F\u7684\u53EF\u9605\u8BFB\u6027\u3002",paraId:0,tocIndex:1},{value:"\u4EA7\u54C1\u5C55\u793A",paraId:0,tocIndex:1},{value:"\uFF1A\u5728\u540C\u4E00\u7EC4\u4EF6\u4E2D\uFF0C\u5206\u591A\u5C4F\u5E55\u5C55\u793A\u4EA7\u54C1\u7684\u4E0D\u540C\u89D2\u5EA6\u6216\u529F\u80FD\u70B9\u3002",paraId:0,tocIndex:1},{value:`\u9ED8\u8BA4\u5F00\u542F\u81EA\u52A8\u64AD\u653E\u3002\u53EF\u81EA\u5B9A\u4E49\u5207\u6362\u901F\u5EA6\u3001\u56FE\u7247\u5927\u5C0F\u7B49\u3002\r
`,paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"duration",paraId:2,tocIndex:3},{value:"\u81EA\u52A8\u8F6E\u64AD\u95F4\u9694\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF0C\u8BBE\u7F6E\u4E3A 0 \u6216\u5C0F\u4E8E 0 \u65F6\u8868\u793A\u4E0D\u81EA\u52A8\u64AD\u653E",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"2",paraId:2,tocIndex:3},{value:"dots",paraId:2,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u6307\u793A\u70B9",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"true",paraId:2,tocIndex:3},{value:"className",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u5BB9\u5668\u989D\u5916\u7684 ",paraId:2,tocIndex:3},{value:"className",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"style",paraId:2,tocIndex:3},{value:"\u5BB9\u5668\u7684\u884C\u5185\u6837\u5F0F",paraId:2,tocIndex:3},{value:"React.CSSProperties",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"beforeChange",paraId:2,tocIndex:3},{value:"\u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u7D22\u5F15 ",paraId:2,tocIndex:3},{value:"from",paraId:2,tocIndex:3},{value:" \u548C\u76EE\u6807\u7D22\u5F15 ",paraId:2,tocIndex:3},{value:"to",paraId:2,tocIndex:3},{value:"(from: number, to: number) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"afterChange",paraId:2,tocIndex:3},{value:"\u5207\u6362\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u7D22\u5F15 ",paraId:2,tocIndex:3},{value:"current",paraId:2,tocIndex:3},{value:" \u548C\u4E0A\u4E00\u4E2A\u7D22\u5F15 ",paraId:2,tocIndex:3},{value:"from",paraId:2,tocIndex:3},{value:"(current: number, from: number) => void",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u8F6E\u64AD\u7684\u5B50\u5143\u7D20\uFF08\u901A\u5E38\u662F\u82E5\u5E72\u5305\u542B\u56FE\u7247\u6216\u5185\u5BB9\u7684 ",paraId:2,tocIndex:3},{value:"<div>",paraId:2,tocIndex:3},{value:" \u7B49\uFF09",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},11770:function(c,r){r.Z=`import React, { FC } from 'react';\r
import Slide from '../slide';\r
\r
const App: FC = () => {\r
  return (\r
    <div className="App">\r
      <Slide duration={2} dots={true}>\r
        <div className="slide-item">\r
          <img\r
            src="https://via.placeholder.com/600x300?text=Slide1"\r
            alt="Slide 1"\r
            style={{ width: '500px', height: 'auto' }}\r
          />\r
        </div>\r
        <div className="slide-item">\r
          <img\r
            src="https://via.placeholder.com/600x300?text=Slide2"\r
            alt="Slide 2"\r
            style={{ width: '500px', height: 'auto' }}\r
          />\r
        </div>\r
        <div className="slide-item">\r
          <img\r
            src="https://via.placeholder.com/600x300?text=Slide3"\r
            alt="Slide 3"\r
            style={{ width: '500px', height: 'auto' }}\r
          />\r
        </div>\r
      </Slide>\r
    </div>\r
  );\r
};\r
\r
export default App;\r
`},24905:function(c,r){r.Z=`.Slide {\r
    width: 500px;\r
    margin: 0 auto;\r
    overflow: hidden;\r
    position: relative;\r
\r
    > .Slide-container {\r
      display: flex;\r
      width: 100%;\r
      transform: translateX(-100%);\r
      &.has-transition-class-name {\r
        transition: transform 0.5s cubic-bezier(.645, .045, .355, 1);\r
      }\r
    }\r
\r
    > .Slide-dots-wrapper {\r
      position: absolute;\r
      bottom: 15px;\r
      left: 50%;\r
      transform: translateX(-50%);\r
      display: inline-flex;\r
      justify-content: center;\r
      align-items: center;\r
\r
      > .Slide-dot {\r
        display: block;\r
        background-color: #fff;\r
        opacity: 0.3;\r
        width: 16px;\r
        height: 3px;\r
        border-radius: 1px;\r
        margin: 0 2px;\r
        transition: all 0.3s cubic-bezier(.645, .045, .355, 1);\r
        cursor: pointer;\r
\r
        &:hover {\r
          opacity: 0.6;\r
        }\r
\r
        &.active {\r
          width: 24px;\r
          opacity: 0.9;\r
        }\r
      }\r
    }\r
  }\r
`},79388:function(c,r){r.Z=`import classNames from 'classnames';\r
import React, {\r
  Children,\r
  CSSProperties,\r
  useCallback,\r
  useEffect,\r
  useRef,\r
  useState,\r
} from 'react';\r
import './slide.scss';\r
\r
export interface SlideProps {\r
  duration?: number;\r
  dots?: boolean;\r
  className?: string;\r
  style?: CSSProperties;\r
  autoplay?: boolean;\r
  beforeChange?: (from: number, to: number) => void;\r
  afterChange?: (current: number, from: number) => void;\r
  children: React.ReactNode;\r
}\r
\r
const Slide: React.FC<SlideProps> = ({\r
  duration = 2,\r
  dots = true,\r
  className,\r
  style,\r
  beforeChange,\r
  afterChange,\r
  children,\r
}) => {\r
  const containerRef = useRef<HTMLDivElement>(null);\r
\r
  // \u9996\u5C3E\u5404\u81EA\u514B\u9686\u4E00\u4E2A\u8282\u70B9\r
  const originalLength = Children.count(children);\r
  const totalLength = originalLength + 2; // \u514B\u9686\u9996\u5C3E\u540E\u603B\u8282\u70B9\u6570\r
\r
  const [current, setCurrent] = useState(1);\r
  const [hasTransition, setHasTransition] = useState(true);\r
  const [timerId, setTimerId] = useState<number | undefined>(undefined);\r
\r
  const isTransitioning = useRef(false);\r
  const prevIndex = useRef(1);\r
\r
  // \u8DF3\u8F6C\u5230\u6307\u5B9A\u9879\r
  const goTo = useCallback(\r
    (n: number) => {\r
      if (isTransitioning.current) return;\r
      if (n === current) return;\r
\r
      // \u8C03\u7528 beforeChange\r
      if (beforeChange) {\r
        beforeChange(current, n);\r
      }\r
\r
      isTransitioning.current = true;\r
      prevIndex.current = current;\r
      setCurrent(n);\r
    },\r
    [beforeChange, current],\r
  );\r
\r
  const next = useCallback(() => {\r
    goTo(current + 1);\r
  }, [current, goTo]);\r
\r
  /**\r
   * \u81EA\u52A8\u8F6E\u64AD\r
   */\r
  const autoPlay = useCallback(() => {\r
    // duration <= 0 \u65F6\u4E0D\u81EA\u52A8\u64AD\u653E\r
    if (duration <= 0) return;\r
\r
    // \u5982\u679C\u5DF2\u6709\u5B9A\u65F6\u5668\uFF0C\u5148\u6E05\u6389\r
    if (timerId) {\r
      clearTimeout(timerId);\r
    }\r
\r
    // \u8BBE\u7F6E\u65B0\u7684\u5B9A\u65F6\u5668\r
    const id = window.setTimeout(() => {\r
      next();\r
    }, duration * 1000);\r
    setTimerId(id);\r
  }, [duration, next, timerId]);\r
\r
  /**\r
   * \u8FC7\u6E21\u7ED3\u675F\uFF0C\u5904\u7406\u9996\u5C3E\u8DF3\u8F6C\r
   */\r
  const handleTransitionEnd = useCallback(() => {\r
    isTransitioning.current = false;\r
    if (afterChange) {\r
      afterChange(current, prevIndex.current);\r
    }\r
\r
    // \u5F53 current \u5230\u5934\u6216\u5230\u5C3E\u7684\u65F6\u5019\uFF0C\u5173\u95ED\u52A8\u753B\uFF0C\u77AC\u95F4\u62C9\u56DE\u5230\u771F\u5B9E\u4F4D\u7F6E\r
    if (current === totalLength - 1) {\r
      setHasTransition(false);\r
      setCurrent(1);\r
\r
      requestAnimationFrame(() => {\r
        setHasTransition(true);\r
        autoPlay();\r
      });\r
      return;\r
    }\r
\r
    if (current === 0) {\r
      setHasTransition(false);\r
      setCurrent(originalLength);\r
\r
      requestAnimationFrame(() => {\r
        setHasTransition(true);\r
        autoPlay();\r
      });\r
      return;\r
    }\r
\r
    autoPlay();\r
  }, [current, totalLength, originalLength, afterChange, autoPlay]);\r
\r
  /**\r
   * \u6BCF\u6B21 current \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u6839\u636E current \u503C\u66F4\u65B0\u5BB9\u5668\u7684 transform\uFF0C\u5B9E\u73B0\u8F6E\u64AD\u6548\u679C\r
   */\r
  useEffect(() => {\r
    const container = containerRef.current;\r
    if (!container) return;\r
    container.style.transform = \`translateX(-\${current * 100}%)\`;\r
    container.style.transition = hasTransition ? 'transform 0.5s ease' : 'none';\r
  }, [current, hasTransition]);\r
\r
  /**\r
   * \u521D\u59CB\u5316\uFF1A\u7ED9\u5BB9\u5668\u9996\u5C3E\u514B\u9686\u8282\u70B9 + \u542F\u52A8\u81EA\u52A8\u64AD\u653E\r
   */\r
  useEffect(() => {\r
    const container = containerRef.current;\r
    if (!container) return;\r
\r
    const slides = Array.from(container.children) as HTMLElement[];\r
    // \u82E5\u5DF2\u514B\u9686\u8FC7\uFF0C\u907F\u514D\u91CD\u590D\u514B\u9686\r
    if (slides.length > 0 && slides.length !== originalLength) {\r
      return;\r
    }\r
\r
    const firstNode = slides[0].cloneNode(true);\r
    const lastNode = slides[slides.length - 1].cloneNode(true);\r
\r
    container.insertBefore(lastNode, slides[0]);\r
    container.appendChild(firstNode);\r
\r
    container.style.transform = 'translateX(-100%)';\r
\r
    // \u542F\u52A8\u81EA\u52A8\u64AD\u653E\r
    autoPlay();\r
\r
    // \u6E05\u7406\u5B9A\u65F6\u5668\r
    return () => {\r
      if (timerId) {\r
        clearTimeout(timerId);\r
      }\r
    };\r
  }, [originalLength, autoPlay, timerId]);\r
\r
  /**\r
   * \u9F20\u6807\u8FDB\u5165\u6682\u505C\u81EA\u52A8\u64AD\u653E\r
   */\r
  const handleMouseEnter = () => {\r
    if (timerId) {\r
      clearTimeout(timerId);\r
      setTimerId(undefined);\r
    }\r
  };\r
\r
  /**\r
   * \u9F20\u6807\u79BB\u5F00\u7EE7\u7EED\u81EA\u52A8\u64AD\u653E\r
   */\r
  const handleMouseLeave = () => {\r
    autoPlay();\r
  };\r
\r
  /**\r
   * \u6307\u793A\u70B9\uFF08\u53EF\u9009\uFF09\r
   */\r
  const renderDots = dots && (\r
    <div className="Slide-dots-wrapper">\r
      {React.Children.map(children, (_, index) => {\r
        // dots \u7684 index \u4ECE 1 \u5F00\u59CB\r
        const dotIndex = index + 1;\r
        return (\r
          <span\r
            key={dotIndex}\r
            className={classNames('Slide-dot', {\r
              active: current === dotIndex,\r
            })}\r
            onClick={() => goTo(dotIndex)}\r
          />\r
        );\r
      })}\r
    </div>\r
  );\r
\r
  return (\r
    <div\r
      className={classNames('Slide', className)}\r
      style={style}\r
      onMouseEnter={handleMouseEnter}\r
      onMouseLeave={handleMouseLeave}\r
    >\r
      <div\r
        className="Slide-container"\r
        style={{ display: 'flex' }}\r
        ref={containerRef}\r
        onTransitionEnd={handleTransitionEnd}\r
      >\r
        {children}\r
      </div>\r
      {renderDots}\r
    </div>\r
  );\r
};\r
\r
export default Slide;\r
`}}]);
