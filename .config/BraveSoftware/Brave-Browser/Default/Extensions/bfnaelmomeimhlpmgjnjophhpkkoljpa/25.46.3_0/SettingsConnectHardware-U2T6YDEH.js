import{a as L,b as N,d as F,e as G,h as I}from"./chunk-PYYUOQG4.js";import{a as x}from"./chunk-4MTH5I26.js";import"./chunk-MTUL7APM.js";import{a as T}from"./chunk-LFJIU2JD.js";import"./chunk-Q2HXAMQQ.js";import"./chunk-X6ZKWDLG.js";import"./chunk-2S6CZNM2.js";import"./chunk-M333XZRL.js";import"./chunk-UYM5M3AL.js";import"./chunk-UOP6XST7.js";import"./chunk-PZK75MNV.js";import"./chunk-J25C3IZ2.js";import"./chunk-DQWLAPQA.js";import"./chunk-2EBYQ5P2.js";import"./chunk-JXEDAEEX.js";import"./chunk-NZFNOPCO.js";import{a as D}from"./chunk-2V4XDYKJ.js";import"./chunk-SUKAPYGM.js";import"./chunk-736WIWZX.js";import"./chunk-PV5WDBPS.js";import"./chunk-LOTYUAC5.js";import"./chunk-3BNSF37W.js";import"./chunk-UKK3MGUG.js";import"./chunk-KOBOJI2X.js";import"./chunk-CH3CP7SO.js";import{e as _}from"./chunk-BXLRR6GM.js";import"./chunk-ST7U2VUQ.js";import{b as C}from"./chunk-LEFSCI55.js";import"./chunk-WY4HUBHZ.js";import"./chunk-X7ARO2KA.js";import"./chunk-RDJLORQI.js";import"./chunk-M62EOSRT.js";import"./chunk-4V5HUNZ6.js";import"./chunk-WWYPP3MY.js";import"./chunk-IJJXVSGB.js";import"./chunk-NUS6T2MC.js";import"./chunk-W64P7QDN.js";import"./chunk-XF26M2KT.js";import"./chunk-N3C6FBKY.js";import"./chunk-CTKHELYY.js";import"./chunk-XMURLUQN.js";import"./chunk-JUI4ISS4.js";import"./chunk-GVVB5LZG.js";import"./chunk-S5LVVL2E.js";import{m as s,v as R}from"./chunk-4EXJCS3P.js";import{a as y}from"./chunk-SG46YPDZ.js";import"./chunk-TAPPRV2Q.js";import"./chunk-C3BAWXY6.js";import"./chunk-WVRYN4MY.js";import"./chunk-M3IC3XCG.js";import"./chunk-RSJ6JVZU.js";import"./chunk-2UWPPO5V.js";import"./chunk-4T2FPKLQ.js";import"./chunk-GC6SFTGM.js";import"./chunk-A3JYJELV.js";import"./chunk-MVNJOY5H.js";import"./chunk-SIWEHH3L.js";import"./chunk-OQCZPFI2.js";import"./chunk-YJCG6GWC.js";import{kb as E,qb as P}from"./chunk-KLKDJF5S.js";import"./chunk-BQE2SXP7.js";import"./chunk-L3JU23Z5.js";import"./chunk-5HNKNX3S.js";import{U as e,a as z,b as u,na as $,ra as O}from"./chunk-R3MCCTIW.js";import"./chunk-FNC6PQ53.js";import"./chunk-5QQLABHI.js";import"./chunk-VL3IRAUM.js";import"./chunk-FA7LVEFF.js";import{a as g,g as l,i as n,n as i}from"./chunk-WKJYWAXG.js";n();i();var f=l(z(),1);n();i();n();i();var M=s(C)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${t=>t.$isExpanded?e.colors.legacy.black:e.colors.legacy.elementAccent} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${t=>t.$isExpanded?"white":e.colors.legacy.textDiminished};
    transition: fill 200ms ease;
    position: relative;
    ${t=>t.top?`top: ${t.top}px;`:""}
    ${t=>t.right?`right: ${t.right}px;`:""}
  }
`;var o=l(u(),1),K=s(D).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.areaBase};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderDiminished};
  height: 46px;
  opacity: ${t=>t.opacity??"1"};
`,Q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,W=s.div`
  width: 24px;
  height: 24px;
`,X=g(({onBackClick:t,totalSteps:c,currentStepIndex:d,isHidden:m,showBackButtonOnFirstStep:r,showBackButton:S=!0})=>(0,o.jsxs)(K,{opacity:m?0:1,children:[S&&(r||d!==0)?(0,o.jsx)(M,{right:1,onClick:t,children:(0,o.jsx)(R,{})}):(0,o.jsx)(W,{}),(0,o.jsx)(Q,{children:L(c).map(p=>{let h=p<=d?e.colors.legacy.spotBase:e.colors.legacy.elementAccent;return(0,o.jsx)(C,{diameter:12,color:h},p)})}),(0,o.jsx)(W,{})]}),"StepHeader");n();i();var a=l(u(),1),Z=g(()=>{let{mutateAsync:t}=P(),{hardwareStepStack:c,pushStep:d,popStep:m,currentStep:r,setOnConnectHardwareAccounts:S,setOnConnectHardwareDone:b,setExistingAccounts:p}=N(),{data:h=[],isFetched:H,isError:v}=E(),w=_(c,(k,q)=>k?.length===q.length),J=c.length>(w??[]).length,B=w?.length===0,U={initial:{x:B?0:J?150:-150,opacity:B?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},V=(0,f.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),m())},[r,m]);return T(()=>{S(async k=>{await t(k),await y.set(x,!await y.get(x))}),b(()=>self.close()),d((0,a.jsx)(I,{}))},c.length===0),(0,f.useEffect)(()=>{p({data:h,isFetched:H,isError:v})},[h,H,v,p]),(0,a.jsxs)(F,{children:[(0,a.jsx)(X,{totalSteps:3,onBackClick:V,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),(0,a.jsx)($,{mode:"wait",children:(0,a.jsx)(O.div,{style:{display:"flex",flexGrow:1},...U,children:(0,a.jsx)(G,{children:r()})},`${c.length}_${w?.length}`)})]})},"SettingsConnectHardware"),Tt=Z;export{Tt as default};
//# sourceMappingURL=SettingsConnectHardware-U2T6YDEH.js.map
