"use strict";(self.webpackChunkkeyui=self.webpackChunkkeyui||[]).push([[923],{44135:function(B,u,e){e.r(u),e.d(u,{default:function(){return p}});var L=e(48305),m=e.n(L),j=e(26068),S=e.n(j),t=e(75271),D=e(53911),c=e(14184),R=e(56040),U={},a=e(46574),_=e(15888),h=e(52676),E=S()({},_),P={name:"keyui",description:"Simple, Modular & Accessible UI Components for React App",version:"0.0.1",license:"MIT",authors:["acindm"]},A="browser",I=void 0,f={footer:'Copyright \xA9 2025 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"Key-UI"},v=!0;function p(){var y=(0,D.pC)(),i=(0,t.useState)(!1),C=m()(i,2),x=C[0],g=C[1],r=(0,t.useRef)(D.m8.location.pathname);(0,t.useEffect)(function(){return D.m8.listen(function(l){l.location.pathname!==r.current&&(r.current=l.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var T=t.useMemo(function(){var l={pkg:P,historyType:A,entryExports:E,demos:null,components:U,locales:a.k,loading:x,setLoading:g,hostname:I,themeConfig:f,_2_level_nav_available:v};return Object.defineProperty(l,"demos",{get:function(){return(0,c.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),l},[P,A,E,U,a.k,x,g,I,f,v]);return(0,h.jsx)(R.D.Provider,{value:T,children:y})}},22293:function(B,u,e){e.r(u);var L=e(48305),m=e.n(L),j=e(82187),S=e.n(j),t=e(75271),D=e(6610),c=e(52676),R=function(a){var _=a.duration,h=_===void 0?2:_,E=a.dots,P=E===void 0?!0:E,A=a.className,I=a.style,f=a.beforeChange,v=a.afterChange,p=a.children,y=(0,t.useRef)(null),i=t.Children.count(p),C=i+2,x=(0,t.useState)(1),g=m()(x,2),r=g[0],T=g[1],l=(0,t.useState)(!0),K=m()(l,2),W=K[0],O=K[1],k=(0,t.useState)(void 0),F=m()(k,2),s=F[0],H=F[1],N=(0,t.useRef)(!1),G=(0,t.useRef)(1),b=(0,t.useCallback)(function(n){N.current||n!==r&&(f&&f(r,n),N.current=!0,G.current=r,T(n))},[f,r]),X=(0,t.useCallback)(function(){b(r+1)},[r,b]),d=(0,t.useCallback)(function(){if(!(h<=0)){s&&clearTimeout(s);var n=window.setTimeout(function(){X()},h*1e3);H(n)}},[h,X,s]),z=(0,t.useCallback)(function(){if(N.current=!1,v&&v(r,G.current),r===C-1){O(!1),T(1),requestAnimationFrame(function(){O(!0),d()});return}if(r===0){O(!1),T(i),requestAnimationFrame(function(){O(!0),d()});return}d()},[r,C,i,v,d]);(0,t.useEffect)(function(){var n=y.current;n&&(n.style.transform="translateX(-".concat(r*100,"%)"),n.style.transition=W?"transform 0.5s ease":"none")},[r,W]),(0,t.useEffect)(function(){var n=y.current;if(n){var o=Array.from(n.children);if(!(o.length>0&&o.length!==i)){var M=o[0].cloneNode(!0),$=o[o.length-1].cloneNode(!0);return n.insertBefore($,o[0]),n.appendChild(M),n.style.transform="translateX(-100%)",d(),function(){s&&clearTimeout(s)}}}},[i,d,s]);var J=function(){s&&(clearTimeout(s),H(void 0))},Q=function(){d()},V=P&&(0,c.jsx)("div",{className:"Slide-dots-wrapper",children:t.Children.map(p,function(n,o){var M=o+1;return(0,c.jsx)("span",{className:S()("Slide-dot",{active:r===M}),onClick:function(){return b(M)}},M)})});return(0,c.jsxs)("div",{className:S()("Slide",A),style:I,onMouseEnter:J,onMouseLeave:Q,children:[(0,c.jsx)("div",{className:"Slide-container",style:{display:"flex"},ref:y,onTransitionEnd:z,children:p}),V]})};u.default=R},6610:function(B,u,e){e.r(u)}}]);