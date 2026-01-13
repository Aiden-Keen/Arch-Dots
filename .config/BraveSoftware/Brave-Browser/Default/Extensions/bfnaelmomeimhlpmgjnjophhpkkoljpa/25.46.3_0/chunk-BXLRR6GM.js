import{a as S}from"./chunk-ST7U2VUQ.js";import{b as j}from"./chunk-WWYPP3MY.js";import{c as Y}from"./chunk-IJJXVSGB.js";import{R as F,ba as Z,da as O,db as I,m as w}from"./chunk-4EXJCS3P.js";import{d as Q}from"./chunk-A3JYJELV.js";import{Ab as q,Ia as A}from"./chunk-KLKDJF5S.js";import{U as b,a as v,b as C,gb as ye,na as X,ra as J}from"./chunk-R3MCCTIW.js";import{a as o,g as c,i as a,j as p,n as s}from"./chunk-WKJYWAXG.js";a();s();var N=c(v());a();s();var _=c(v());function ee(){var e=(0,_.useRef)(!0);return e.current?(e.current=!1,!0):e.current}o(ee,"useFirstMountState");var Ve=o(function(e,t){return e===t},"strictEquals");function P(e,t){t===void 0&&(t=Ve);var r=(0,N.useRef)(),u=(0,N.useRef)(e),n=ee();return!n&&!t(u.current,e)&&(r.current=u.current,u.current=e),r.current}o(P,"usePreviousDistinct");a();s();a();s();var te=o(function(){},"noop");function L(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}o(L,"on");function E(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}o(E,"off");var M=typeof self<"u";a();s();var D=c(v());var Ce=["mousedown","touchstart"],be=o(function(e,t,r){r===void 0&&(r=Ce);var u=(0,D.useRef)(t);(0,D.useEffect)(function(){u.current=t},[t]),(0,D.useEffect)(function(){for(var n=o(function(l){var g=e.current;g&&!g.contains(l.target)&&u.current(l)},"handler"),i=0,f=r;i<f.length;i++){var m=f[i];L(document,m,n)}return function(){for(var l=0,g=r;l<g.length;l++){var B=g[l];E(document,B,n)}}},[r,e])},"useClickAway"),Pe=be;a();s();var re=c(v());var Le=o(function(e){return(e+1)%1e6},"updateReducer");function W(){var e=(0,re.useReducer)(Le,0),t=e[1];return t}o(W,"useUpdate");a();s();var k=c(v());var Ee=M?k.useLayoutEffect:k.useEffect,oe=Ee;a();s();var h=c(v());function U(e,t){t===void 0&&(t=0);var r=(0,h.useRef)(!1),u=(0,h.useRef)(),n=(0,h.useRef)(e),i=(0,h.useCallback)(function(){return r.current},[]),f=(0,h.useCallback)(function(){r.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout(function(){r.current=!0,n.current()},t)},[t]),m=(0,h.useCallback)(function(){r.current=null,u.current&&clearTimeout(u.current)},[]);return(0,h.useEffect)(function(){n.current=e},[e]),(0,h.useEffect)(function(){return f(),m},[t]),[i,m,f]}o(U,"useTimeoutFn");a();s();var ae=c(v());var Me=o(function(e){(0,ae.useEffect)(e,[])},"useEffectOnce"),se=Me;a();s();var R=c(v());a();s();var ue=c(v());var ke=o(function(e){var t=(0,ue.useRef)(e);t.current=e,se(function(){return function(){return t.current()}})},"useUnmount"),z=ke;var He=o(function(e){var t=(0,R.useRef)(0),r=(0,R.useState)(e),u=r[0],n=r[1],i=(0,R.useCallback)(function(f){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){n(f)})},[]);return z(function(){cancelAnimationFrame(t.current)}),[u,i]},"useRafState"),ne=He;a();s();var H=c(v());function ie(e){var t=(0,H.useRef)();return(0,H.useEffect)(function(){t.current=e}),t.current}o(ie,"usePrevious");a();s();var fe=c(v());var Te=o(function(e){p.NODE_ENV==="development"&&(typeof e!="object"||typeof e.current>"u")&&console.error("`useScroll` expects a single ref argument.");var t=ne({x:0,y:0}),r=t[0],u=t[1];return(0,fe.useEffect)(function(){var n=o(function(){e.current&&u({x:e.current.scrollLeft,y:e.current.scrollTop})},"handler");return e.current&&L(e.current,"scroll",n,{capture:!1,passive:!0}),function(){e.current&&E(e.current,"scroll",n)}},[e]),r},"useScroll"),Be=Te;a();s();function le(e){e===void 0&&(e=0);var t=W();return U(t,e)}o(le,"useTimeout");a();s();var y=c(v());var ce={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function Ae(){var e=(0,y.useState)(null),t=e[0],r=e[1],u=(0,y.useState)(ce),n=u[0],i=u[1],f=(0,y.useMemo)(function(){return new self.ResizeObserver(function(m){if(m[0]){var l=m[0].contentRect,g=l.x,B=l.y,ge=l.width,he=l.height,we=l.top,Se=l.left,Re=l.bottom,De=l.right;i({x:g,y:B,width:ge,height:he,top:we,left:Se,bottom:Re,right:De})}})},[]);return oe(function(){if(t)return f.observe(t),function(){f.disconnect()}},[t]),[r,n]}o(Ae,"useMeasure");var Fe=M&&typeof self.ResizeObserver<"u"?Ae:function(){return[te,ce]};a();s();a();s();var pe=o(e=>{if(e.length!==0)return e[e.length-1]},"getLast");var de=c(ye(),1);var x=c(v(),1);var V=c(C(),1),me=(0,x.createContext)({pushDetailViewCallback:o(()=>S,"pushDetailViewCallback"),pushDetailView:S,popDetailView:S,resetDetailView:S,detailViewStackLength:0}),Oe=w(J.div)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${e=>e.theme?.detailViewMaxHeight??"100%"};
  min-height: ${e=>e.theme?.detailViewMinHeight??"initial"};
`,Mr=x.default.memo(({children:e,shouldResetOnAccountChange:t,shouldPushDetailView:r})=>{let{detailViewStack:u,setDetailViewStack:n,pushDetailView:i,...f}=Ne(),{data:m}=q();return(0,x.useEffect)(()=>{t&&n([])},[m,n,t]),(0,x.useEffect)(()=>{r&&i(e)},[e,r,i]),(0,V.jsx)(me.Provider,{value:{...f,pushDetailView:i,detailViewStackLength:u.length},children:(0,V.jsx)(Ue,{stack:u,children:e})})}),Ie=navigator.webdriver?0:500,Ne=o(()=>{let[e,t]=(0,x.useState)([]),r=(0,x.useMemo)(()=>(0,de.default)(f=>{t(m=>A(m,l=>{l.push(f)}))},Ie,{leading:!0,trailing:!1}),[t]),u=(0,x.useCallback)(()=>{t(f=>A(f,m=>{m.pop()}))},[t]),n=(0,x.useCallback)(f=>()=>{r(f)},[r]),i=(0,x.useCallback)(()=>()=>{t([])},[t]);return(0,x.useMemo)(()=>({detailViewStack:e,setDetailViewStack:t,pushDetailView:r,popDetailView:u,resetDetailView:i,pushDetailViewCallback:n}),[e,u,r,i,n])},"useDetailViewStack"),We=.15,Ue=o(({children:e,stack:t})=>{let r=P(t,(l,g)=>l?.length===g.length),u=pe(t),n=t.length>(r??[]).length,i=r===void 0;return(0,V.jsx)(X,{mode:"wait",children:(0,V.jsx)(Oe,{initial:{x:i?0:n?10:-10,opacity:i?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:We},ref:ze,children:u||e},`${t.length}_${r?.length}`)})},"DetailViewsController"),$=o(()=>{let e=(0,x.useContext)(me);if(!e)throw new Error("Missing detail view context");return e},"useDetailViews"),ze=o(e=>{e&&e.parentElement&&(e.parentElement.scrollTop=0)},"resetScroll");a();s();var T=c(v(),1);var $e=(0,T.createContext)({isOpen:!1,showSettingsMenu:S,hideSettingsMenu:S}),xe=o(()=>(0,T.useContext)($e),"useSettingsMenu");a();s();var K=c(v(),1);var d=c(C(),1),Ge=w.section`
  z-index: 1;
  background-color: ${b.colors.legacy.areaBase};
  padding: 10px 16px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${b.colors.legacy.elementBase};
  height: ${Q}px;
  width: 100%;
`,Ke=w(I).attrs(e=>({size:16,weight:500,lineHeight:25,maxWidth:e.maxWidth??"280px",noWrap:e.noWrap??!0}))``,qe=w.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding-bottom: 17px;
  position: relative;
  width: 100%;
`,ve=w(j)`
  position: absolute;
  right: 0;
`,G=w(Y)`
  position: absolute;
  left: 0;
`,Zr=o(({children:e,items:t,sections:r,icon:u,shouldWrap:n,onIconClick:i,onLeftButtonClick:f,useCloseButton:m})=>{let l=Qe({withCloseButton:m??!1,onLeftButtonClick:f}),g=r&&r.length>0||t&&t.length>0;return(0,d.jsxs)(qe,{children:[l,(0,d.jsx)(I,{weight:500,size:22,noWrap:!n,maxWidth:"280px",children:e}),g||i?(0,d.jsx)(ve,{sections:r,items:t,icon:u||(0,d.jsx)(Z,{}),onIconClick:i}):(0,d.jsx)("div",{})]})},"PageHeader"),Xe=w(Ge)`
  position: relative;
  border-bottom: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    border-bottom: 1px solid ${b.colors.legacy.borderDiminished};
  }
`,Je=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`,Yr=o(({children:e,sections:t,items:r,icon:u,shouldWrap:n,onIconClick:i,onLeftButtonClick:f,disableIconBackground:m})=>{let l=Ze(f),g=t&&t.length>0||r&&r.length>0;return(0,d.jsxs)(Xe,{children:[l,(0,d.jsx)(Je,{children:typeof e=="string"?(0,d.jsx)(Ke,{noWrap:!n,children:e}):e}),g||i?(0,d.jsx)(ve,{sections:t,items:r,icon:u,onIconClick:i,disableIconBackground:m}):(0,d.jsx)("div",{})]})},"SettingsHeader"),Qe=o(({withCloseButton:e,onLeftButtonClick:t})=>{let{popDetailView:r,detailViewStackLength:u}=$();return(0,K.useMemo)(()=>u===0?(0,d.jsx)("div",{}):(0,d.jsx)(G,{onClick:()=>{t?.(),r()},"data-testid":"header--back",children:e?(0,d.jsx)(F,{}):(0,d.jsx)(O,{})}),[e])},"usePageHeaderLeftButton"),Ze=o(e=>{let{hideSettingsMenu:t}=xe(),{popDetailView:r,detailViewStackLength:u}=$();return(0,K.useMemo)(()=>u>0?(0,d.jsx)(G,{onClick:()=>{r()},"data-testid":"header--back",children:(0,d.jsx)(O,{})}):(0,d.jsx)(G,{"data-testid":"settings-menu-close-button",onClick:e??t,children:(0,d.jsx)(F,{})}),[])},"useSettingsHeaderLeftButton");export{pe as a,Pe as b,z as c,ie as d,P as e,Be as f,le as g,Fe as h,Mr as i,$ as j,$e as k,xe as l,Ge as m,Ke as n,Zr as o,Yr as p,Ze as q};
//# sourceMappingURL=chunk-BXLRR6GM.js.map
