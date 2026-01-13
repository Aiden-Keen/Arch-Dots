import{a as $}from"./chunk-NPRK7ORI.js";import{a as S,b as P}from"./chunk-7FT3EEKI.js";import{a as V}from"./chunk-UOIYOLTX.js";import{a as L}from"./chunk-ST7U2VUQ.js";import{aa as H,m as v}from"./chunk-4EXJCS3P.js";import{aa as R,r as D}from"./chunk-M3IC3XCG.js";import{a as y,b as g}from"./chunk-R3MCCTIW.js";import{a as h,g as n,i as b,n as C}from"./chunk-WKJYWAXG.js";b();C();var I=n(y(),1);b();C();var w=n(y(),1);b();C();var E=n(y(),1);var x=n(g(),1),k=v.div`
  visibility: ${e=>e.isHidden?"hidden":"visible"};
  model-viewer {
    --poster-color: transparent;
    --progress-bar-color: transparent;
    --progress-mask: transparent;
    width: ${e=>e.width}px;
    height: ${e=>e.height}px;
  }
`,A=!1;function F(){A||(A=!0,import("./model-viewer-DQPPBUJJ.js"))}h(F,"loadModelViewer");var W=h(({src:e,alt:d,autoRotate:r,autoPlay:i,cameraControls:o,loading:l,width:m=154,height:u=154,onLoad:s=L,onError:p=L,isHidden:M=!1})=>{F();let f=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let c=f.current;if(c)return c.addEventListener("load",s),c.addEventListener("error",p),()=>{c.removeEventListener("load",s),c.removeEventListener("error",p)}},[p,s,f]),(0,x.jsx)(k,{width:m,height:u,isHidden:M,children:(0,x.jsx)("model-viewer",{alt:d,loading:l??"eager","auto-rotate-delay":0,"auto-rotate":r||void 0,autoplay:i||void 0,"camera-controls":o||void 0,ref:f,src:e})})},"ModelViewer"),O=W;var t=n(g(),1),T=w.default.memo(e=>{let{uri:d,width:r,height:i,isCameraControlsEnabled:o}=e,[l,m]=(0,w.useState)(!0),[u,s]=(0,w.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[u?(0,t.jsx)(V,{children:(0,t.jsx)(H,{})}):(0,t.jsx)(V,{children:(0,t.jsx)(O,{src:d,autoRotate:!0,autoPlay:!0,cameraControls:o,onLoad:h(()=>{m(!1),s(!1)},"onLoad"),onError:h(()=>{m(!1),s(!0)},"onError"),width:r,height:i,isHidden:l})}),l?(0,t.jsx)(S,{showBadge:!1}):null]})});var a=n(g(),1),U=328,Z=v.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
`,me=I.default.memo(({media:e,collectibleChainData:d,width:r=328,height:i=328})=>{let o=e?.type??"image",l=R(e,o,!0),m=R(e,"image",!1,"large"),u=o==="image",s=o==="video",p=o==="audio",M=o==="model",f=o==="other"||s||p,c=(0,I.useMemo)(()=>{if(l)return(0,a.jsx)(a.Fragment,{children:u?(0,a.jsx)(P,{width:U,height:U,uri:l,isZoomControlsEnabled:!0,showSkeletonBadge:!1}):M?(0,a.jsx)(T,{uri:l,width:r,height:i,isCameraControlsEnabled:!0}):f?(0,a.jsx)(P,{uri:m??"",width:r,height:i}):null});if(D(d))return(0,a.jsx)($,{...d.utxoDetails})},[d,i,u,M,f,l,m,r]);return(0,a.jsx)(Z,{width:r,height:i,children:c})});export{me as a};
//# sourceMappingURL=chunk-X6SVISSE.js.map
