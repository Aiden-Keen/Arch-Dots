import{a as f,c as m}from"./chunk-O43INWHJ.js";import{a as k}from"./chunk-MTUL7APM.js";import"./chunk-HY5EE4BL.js";import{Ga as F,Q as w}from"./chunk-UOP6XST7.js";import"./chunk-PZK75MNV.js";import"./chunk-J25C3IZ2.js";import"./chunk-DQWLAPQA.js";import"./chunk-2EBYQ5P2.js";import"./chunk-JXEDAEEX.js";import"./chunk-NZFNOPCO.js";import"./chunk-2V4XDYKJ.js";import"./chunk-SUKAPYGM.js";import"./chunk-736WIWZX.js";import"./chunk-PV5WDBPS.js";import"./chunk-LOTYUAC5.js";import"./chunk-3BNSF37W.js";import"./chunk-UKK3MGUG.js";import"./chunk-KOBOJI2X.js";import"./chunk-CH3CP7SO.js";import"./chunk-BXLRR6GM.js";import"./chunk-ST7U2VUQ.js";import"./chunk-LEFSCI55.js";import"./chunk-WY4HUBHZ.js";import"./chunk-RDJLORQI.js";import"./chunk-M62EOSRT.js";import"./chunk-4V5HUNZ6.js";import"./chunk-WWYPP3MY.js";import"./chunk-IJJXVSGB.js";import"./chunk-XF26M2KT.js";import"./chunk-N3C6FBKY.js";import"./chunk-CTKHELYY.js";import"./chunk-XMURLUQN.js";import"./chunk-JUI4ISS4.js";import"./chunk-GVVB5LZG.js";import{c as T,d as b}from"./chunk-S5LVVL2E.js";import{db as s,m as o}from"./chunk-4EXJCS3P.js";import"./chunk-TAPPRV2Q.js";import"./chunk-C3BAWXY6.js";import"./chunk-WVRYN4MY.js";import"./chunk-M3IC3XCG.js";import"./chunk-RSJ6JVZU.js";import"./chunk-2UWPPO5V.js";import"./chunk-4T2FPKLQ.js";import"./chunk-GC6SFTGM.js";import"./chunk-A3JYJELV.js";import"./chunk-MVNJOY5H.js";import"./chunk-SIWEHH3L.js";import"./chunk-OQCZPFI2.js";import"./chunk-YJCG6GWC.js";import"./chunk-KLKDJF5S.js";import"./chunk-BQE2SXP7.js";import{Lb as l,Sb as B,fc as h}from"./chunk-L3JU23Z5.js";import"./chunk-5HNKNX3S.js";import{U as a,a as P,b as x,ba as I,q as C}from"./chunk-R3MCCTIW.js";import"./chunk-FNC6PQ53.js";import"./chunk-5QQLABHI.js";import"./chunk-VL3IRAUM.js";import"./chunk-FA7LVEFF.js";import{a as d,g as r,i as y,n as g}from"./chunk-WKJYWAXG.js";y();g();var v=r(P(),1);var e=r(x(),1),N=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,S=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,V=o(s).attrs({size:28,weight:500,color:a.colors.legacy.textBase})`
  margin: 16px;
`,$=o(s).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textDiminished})`
  max-width: 275px;

  span {
    color: white;
  }
`,q=d(({networkId:t,token:c})=>{let{t:n}=C(),{handleHideModalVisibility:p}=F(),u=(0,v.useCallback)(()=>{p("insufficientBalance")},[p]),R=t&&B(h(l.getChainID(t))),{canBuy:D,openBuy:M}=w({caip19:R||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),i=t?l.getTokenSymbol(t):n("tokens");return(0,e.jsxs)(N,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(S,{children:[(0,e.jsx)(k,{type:"failure",backgroundWidth:75}),(0,e.jsx)(V,{children:n("insufficientBalancePrimaryText",{tokenSymbol:i})}),(0,e.jsx)($,{children:n("insufficientBalanceSecondaryText",{tokenSymbol:i})}),c?(0,e.jsxs)(I,{borderRadius:8,gap:1,marginTop:32,width:"100%",children:[(0,e.jsx)(f,{label:n("insufficientBalanceRemaining"),children:(0,e.jsx)(m,{color:a.colors.legacy.spotNegative,children:`${c.balance} ${i}`})}),(0,e.jsx)(f,{label:n("insufficientBalanceRequired"),children:(0,e.jsx)(m,{children:`${c.required} ${i}`})})]}):null]})}),D?(0,e.jsx)(b,{primaryText:n("buyAssetInterpolated",{tokenSymbol:i}),onPrimaryClicked:M,secondaryText:n("commandCancel"),onSecondaryClicked:u}):(0,e.jsx)(T,{onClick:u,children:n("commandCancel")})]})},"InsufficientBalance"),X=q;export{q as InsufficientBalance,X as default};
//# sourceMappingURL=InsufficientBalance-XJWDG5GA.js.map
