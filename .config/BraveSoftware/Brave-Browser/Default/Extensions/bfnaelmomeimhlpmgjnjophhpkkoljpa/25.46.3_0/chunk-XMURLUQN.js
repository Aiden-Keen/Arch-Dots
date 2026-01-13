import{b as s}from"./chunk-JUI4ISS4.js";import{S as c,db as P,m as t}from"./chunk-4EXJCS3P.js";import{t as f}from"./chunk-2UWPPO5V.js";import{jb as w}from"./chunk-4T2FPKLQ.js";import{b as m,c as C}from"./chunk-A3JYJELV.js";import{b as T}from"./chunk-MVNJOY5H.js";import{U as n,b as E,q as y}from"./chunk-R3MCCTIW.js";import{s as l}from"./chunk-FA7LVEFF.js";import{a,g as b,i as x,n as h}from"./chunk-WKJYWAXG.js";x();h();var r=b(E(),1),R="Unknown Error",D="Looks like you ran into an unknown error. Please close Phantom and try again.",F="Close",g=t(P).attrs({wordBreak:"break-word",color:n.colors.legacy.textDiminished,size:16,lineHeight:20.8,maxWidth:"400px"})``,k=t.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${n.colors.legacy.spotBase};
  text-decoration: none;
  cursor: pointer;
  svg {
    fill: ${n.colors.legacy.spotBase};
    margin-right: 5px;
  }
`,B=a(o=>(0,r.jsx)(f,{fallback:e=>e instanceof w?(0,r.jsx)(A,{}):o.fallback,children:o.children}),"ErrorBoundaryWithDefaultFallback"),A=a(()=>{let{t:o}=y(),e=a(()=>{T.capture("walletScreenErrorBoundaryClosed"),self.close()},"onClose");return(0,r.jsx)(H,{children:(0,r.jsxs)(s,{icon:"error",title:o("transactionsDisabledTitle"),buttonText:o("commandClose"),onClose:e,children:[(0,r.jsx)(g,{margin:"0 0 5px 0",children:o("transactionsDisabledMessage")}),(0,r.jsxs)(k,{href:l,onClick:e,children:[(0,r.jsx)(c,{}),"Help & Support"]})]})})},"WalletScreenErrorFallback"),H=t.main`
  width: ${m}px;
  height: ${C}px;
  padding: 15px;
`,q=a(({title:o=R,message:e=D,buttonText:d=F,onReset:i=a(()=>self.close(),"onReset"),children:p})=>{function u(){return(0,r.jsx)(S,{children:(0,r.jsxs)(s,{icon:"error",title:o,buttonText:d,onClose:i,children:[(0,r.jsx)(g,{margin:"0 0 5px 0",children:e}),(0,r.jsxs)(k,{href:l,onClick:i,children:[(0,r.jsx)(c,{}),"Help & Support"]})]})})}return a(u,"PopupAndNotificationFallback"),(0,r.jsx)(B,{fallback:(0,r.jsx)(u,{}),children:p})},"PopupAndNotificationErrorBoundary"),S=t.main`
  min-width: ${m}px;
  height: 100vh;
  padding: 15px;
  width: 100vw;
`,J=a(({title:o=R,message:e="Looks like you ran into an unknown error. Please refresh the page and try again.",buttonText:d="Refresh",onReset:i=a(()=>self.location.reload(),"onReset"),children:p})=>{function u(){return(0,r.jsx)(N,{children:(0,r.jsxs)(s,{icon:"error",title:o,buttonText:d,onClose:i,children:[(0,r.jsx)(g,{margin:"0 0 5px 0",children:e}),(0,r.jsxs)(k,{href:l,onClick:i,children:[(0,r.jsx)(c,{}),"Help & Support"]})]})})}return a(u,"OnboardingAndConnectHardwareFallback"),(0,r.jsx)(B,{fallback:(0,r.jsx)(u,{}),children:p})},"OnboardingAndConnectHardwareErrorBoundary"),N=t.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 450px;
  background-color: ${n.colors.legacy.areaBase};
  border: 1px solid ${n.colors.legacy.borderDiminished};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;export{B as a,q as b,J as c};
//# sourceMappingURL=chunk-XMURLUQN.js.map
