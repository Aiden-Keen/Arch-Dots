import{a as N}from"./chunk-MTUL7APM.js";import{a as ht}from"./chunk-LFJIU2JD.js";import{b as we}from"./chunk-Q2HXAMQQ.js";import{A as Re}from"./chunk-UOP6XST7.js";import{b as St,c as Ct,d as Ne}from"./chunk-PV5WDBPS.js";import{d as Q}from"./chunk-LOTYUAC5.js";import{b as At}from"./chunk-3BNSF37W.js";import{a as We}from"./chunk-BXLRR6GM.js";import{a as gt}from"./chunk-ST7U2VUQ.js";import{a as dt,l as pt,w as le}from"./chunk-M62EOSRT.js";import{a as ct,b as _e}from"./chunk-NUS6T2MC.js";import{l as ut,m as lt}from"./chunk-N3C6FBKY.js";import{b as fe}from"./chunk-S5LVVL2E.js";import{db as j,m as i,va as ft}from"./chunk-4EXJCS3P.js";import{a as mt}from"./chunk-RSJ6JVZU.js";import{a as me}from"./chunk-GC6SFTGM.js";import{$a as st,A as rt,Ia as Be,Za as at,_a as Oe,bb as Pe,o as nt,qc as it,r as De}from"./chunk-KLKDJF5S.js";import{Kb as tt,Lb as $,N as J,Sd as ot,U as Je,V as Qe,W as et,Y as P,x as Ze}from"./chunk-L3JU23Z5.js";import{Aa as F,U as R,a as ce,b as M,q as k}from"./chunk-R3MCCTIW.js";import{a as n,g as x,i as l,n as m}from"./chunk-WKJYWAXG.js";l();m();var Gt={existingAccounts:{data:[],isFetched:!1,isError:!1},hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{},onConnectHardwareAccounts:n(e=>Promise.resolve(),"onConnectHardwareAccounts"),onConnectHardwareDone:n(()=>{},"onConnectHardwareDone")},L=it((e,o)=>({...Gt,pushStep:n(t=>{let r=o().hardwareStepStack;e({hardwareStepStack:r.concat(t)})},"pushStep"),popStep:n(()=>{let r=o().hardwareStepStack.length-1;if((o().hardwareStepSubStack[r]??[]).length)return e(Be(s=>{s.hardwareStepSubStack[r]=s.hardwareStepSubStack[r].slice(0,-1)}));e(Be(s=>{s.hardwareStepStack=s.hardwareStepStack.slice(0,-1)}))},"popStep"),pushSubStep:n(t=>{let c=o().hardwareStepStack.length-1,s=o().hardwareStepSubStack[c]??[];e(Be(S=>{S.hardwareStepSubStack[c]=s.concat([t])}))},"pushSubStep"),currentStep:n(()=>{let t=o().hardwareStepStack,r=o().hardwareStepSubStack,c=t.length>0?t.length-1:t.length;return r[c]?.length?We(r[c]):We(t)},"currentStep"),setExistingAccounts:n(t=>{e({existingAccounts:t})},"setExistingAccounts"),setSelectedChains:n((t,r)=>{e({selectedChains:t,selectedChainsMap:r})},"setSelectedChains"),setDecrementChainImportStep:n(()=>{let t=o().chainImportStep;e({chainImportStep:t-1})},"setDecrementChainImportStep"),setIncrementChainImportStep:n(()=>{let t=o().chainImportStep;e({chainImportStep:t+1})},"setIncrementChainImportStep"),setDerivedAccountGroups:n(t=>{e({derivedAccountGroups:t})},"setDerivedAccountGroups"),setDiscoveredAccounts:n((t,r)=>{e({discoveredAccounts:t,activeAccountsFound:r})},"setDiscoveredAccounts"),selectAccount:n(t=>{let c={...o().selectedAccounts};c[t]=!0,e({selectedAccounts:c})},"selectAccount"),deselectAccount:n(t=>{let c={...o().selectedAccounts};delete c[t],e({selectedAccounts:c})},"deselectAccount"),setSelectedAccounts:n(t=>{e({selectedAccounts:t})},"setSelectedAccounts"),setOnConnectHardwareAccounts:n(t=>{e({onConnectHardwareAccounts:t})},"setOnConnectHardwareAccounts"),setOnConnectHardwareDone:n(t=>{e({onConnectHardwareDone:t})},"setOnConnectHardwareDone")}));l();m();l();m();l();m();var wt=i.main`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  width: ${420}px;
  min-height: ${480}px;
  position: relative;
  overflow: hidden;
  background-color: ${R.colors.legacy.areaBase};
  border: 1px solid ${R.colors.legacy.borderBase};
  border-radius: 16px;
`;var Do=i(wt)`
  display: flex;
  flex-direction: column;
`,Bo=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px 20px;
`,ee=i.div`
  padding-top: 44px;
`,W=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  overflow: auto;
`;l();m();var It=x(ce(),1);l();m();var H=x(ce(),1);l();m();var se=x(ce(),1);l();m();var he=x(ce(),1);var ae=x(M(),1),Le=n(()=>{let{t:e}=k(),{discoveredAccounts:o,selectedAccounts:t,onConnectHardwareAccounts:r,onConnectHardwareDone:c}=L(),{mutateAsync:s}=at(),[S,y]=(0,he.useState)(!1),C=(0,he.useMemo)(()=>o.filter(f=>!!t[f.discoveryIdentifier]),[o,t]);return(0,he.useEffect)(()=>{if(C.length){let f=[],a=new Set;for(let u of C){let{accounts:w,seedIndex:v,accountIndex:T}=u,E=[],D=[];for(let b of w)Je(b.derivationPathType)?(D.push({pathType:b.derivationPathType,value:b.publicKey}),(!("amount"in b)||parseFloat(b.amount)!==0)&&a.add(b.chainType)):(Qe(b.derivationPathType)||et(b.derivationPathType))&&E.push({pathType:b.derivationPathType,value:b.address});f.push({derivationIndex:v,addresses:E,publicKeys:D,accountIndex:T})}r({accounts:f}).then(()=>{a.size>0&&s({addressTypes:Array.from(a)})}).finally(()=>y(!0))}else y(!0)},[C,r,s]),(0,ae.jsxs)(W,{children:[(0,ae.jsx)(ee,{children:(0,ae.jsx)(Q,{icon:(0,ae.jsx)(N,{type:"success"}),primaryText:e("connectHardwareAccountsAddedInterpolated",{numOfAccounts:C.length}),headerStyle:"large",secondaryText:e("connectHardwareFinishSecondaryText")})}),(0,ae.jsx)(F,{onClick:c,background:"spot",disabled:!S,children:e("pastParticipleDone")})]})},"ConnectHardwareImportConfirmation");l();m();var Fe=x(ce(),1);l();m();l();m();var yt=n((e,o=!1)=>{let t=Re.duration(Re().diff(Re(e))),r=[[t.years(),"y"],[t.months(),"mo"],[t.days(),"d"],[t.hours(),"h"],[t.minutes(),"m"],[t.seconds(),"s"],[t.milliseconds(),"ms"]].find(S=>S[0]!==0);if(!r)return"";let[c,s]=r;return o&&(s==="ms"||s==="s")?"< 1m":s==="ms"?"now":s==="s"?c<15?"now":"< 1m":`${c}${s}`},"formatTimestampFromNow");var Ue=x(ce(),1);var g=x(M(),1),$t=n((e,o,t)=>{switch(o){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:t});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:t})}},"getAccountName"),zt=n(({account:e})=>{let{t:o}=k();return(0,g.jsxs)(Xt,{children:[(0,g.jsx)(Ut,{children:(0,g.jsx)(me,{networkID:e.chain.id,size:40,borderColor:"elementBase"})}),(0,g.jsxs)(jt,{children:[(0,g.jsxs)(Vt,{children:[(0,g.jsx)(At,{networkID:e.chain.id,walletAddress:e.address,children:(0,g.jsx)(Ee,{children:e.chain.name})}),(0,g.jsx)(Ee,{children:rt(e.address,4)})]}),(0,g.jsxs)(Me,{children:["amount"in e&&"chain"in e?(0,g.jsxs)(bt,{children:[mt(e.amount)," ",e.chain.symbol]}):null,"amount"in e&&e.lastActivityTimestamp?(0,g.jsx)(bt,{children:o("onboardingImportAccountsLastActive",{formattedTimestamp:yt(e.lastActivityTimestamp*1e3,!0)})}):null]})]})]})},"DiscoveredAccountCard"),xt=Ue.default.memo(({accountType:e,accounts:o,checked:t,accountIndex:r,onPress:c})=>{let{t:s}=k(),S=r+1;return(0,g.jsxs)(Tt,{children:[(0,g.jsxs)(Yt,{children:[(0,g.jsx)(Ee,{children:$t(s,e,S)}),(0,g.jsx)(we,{checked:t,onChange:c,"data-testid":"account-select-address-row-checkbox"})]}),o.map((y,C)=>(0,g.jsx)(zt,{account:y},`${y.address}-${C}`))]})}),dn=Ue.default.memo(({totalAccounts:e,selectedAccounts:o,onPress:t})=>{let{t:r}=k();return(0,g.jsx)(Tt,{children:(0,g.jsxs)(qt,{children:[(0,g.jsx)(Ee,{children:r("onboardingSelectAccountsNoOfAccountsSelected",{numOfAccounts:o})})," ",(0,g.jsxs)(Kt,{children:[r("onboardingSelectAccountSelectAllText")," ",(0,g.jsx)(we,{checked:o===e,onChange:t,"data-testid":"account-select-all-checkbox"})]})]})})}),Tt=i.div`
  margin-bottom: 24px;
  width: 100%;
`,Ut=i.div`
  flex-shrink: 0;
  margin-right: 10px;
`,jt=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Me=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Vt=i(Me)`
  margin-bottom: 2px;
`,qt=i(Me)`
  background: ${R.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 10px 12px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Kt=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Yt=i(Me)`
  background: ${R.colors.legacy.elementBase};
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,Xt=i.div`
  background: ${R.colors.legacy.elementBase};
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,Ee=i(j).attrs({size:16,lineHeight:19,weight:600})``,bt=i(j).attrs({size:14,lineHeight:17,weight:400,color:R.colors.legacy.textDiminished})``;var V=x(M(),1),vt=n(({activeAccounts:e})=>{let{t:o}=k(),{selectedAccounts:t,selectAccount:r,deselectAccount:c,pushSubStep:s}=L(),S=(0,Fe.useMemo)(()=>Object.values(t).filter(f=>!!f).length===0,[t]),y=(0,Fe.useCallback)(()=>{s((0,V.jsx)(Le,{preventBack:!0}))},[s]);return(0,V.jsxs)(W,{children:[(0,V.jsxs)("div",{style:{marginBottom:15},children:[(0,V.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30},children:[(0,V.jsx)(j,{weight:500,size:30,lineHeight:34,maxWidth:"320px",children:o("connectHardwareSelectAccounts")}),(0,V.jsx)(Zt,{wordBreak:"break-word",size:18,lineHeight:22,color:R.colors.legacy.textDiminished,children:o("connectHardwareChooseAccountsToConnect")})]}),(0,V.jsx)("div",{style:{maxHeight:420,overflowY:"scroll"},children:e.map(({accounts:C,discoveryIdentifier:f,accountIndex:a})=>{let _=!!t[f];return(0,V.jsx)(xt,{accountType:"ledger",accounts:C,accountIndex:a,checked:_,onPress:n(()=>{_?c(f):r(f)},"onPress")},f)})})]}),(0,V.jsx)(F,{onClick:y,background:"spot",disabled:S,children:o("commandContinue")})]})},"ConnectHardwareSelectAccounts"),Zt=i(j)`
  margin-top: 15px;
`;var Z=x(M(),1),Ht=n(()=>{let{t:e}=k(),{discoveredAccounts:o,activeAccountsFound:t,setSelectedAccounts:r,pushSubStep:c}=L(),s=(0,se.useMemo)(()=>{let C;if(t){let f=o.filter(a=>a.status==="undiscovered"||a.isSelectedByDefault);C=e(f.length===1?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:f.length})}else C=e("connectHardwareFoundSomeAccounts");return C},[t,e,o]),S=(0,se.useCallback)(()=>{c((0,Z.jsx)(vt,{activeAccounts:o}))},[c,o]),y=(0,se.useCallback)(()=>{c((0,Z.jsx)(Le,{preventBack:!0}))},[c]);return(0,se.useEffect)(()=>{let C=o.reduce((f,a,_)=>((a.status==="discovered"&&a.isSelectedByDefault||_===0)&&(f[a.discoveryIdentifier]=!0),f),{});r(C)},[o,r,t,e]),(0,Z.jsxs)(W,{children:[(0,Z.jsx)(Jt,{children:(0,Z.jsx)(Q,{icon:(0,Z.jsx)(N,{type:"success"}),primaryText:e("connectHardwareConnectAccounts"),headerStyle:"large",secondaryText:s})}),(0,Z.jsx)(Qt,{onClick:S,theme:"default",children:e("connectHardwareSelectAccounts")}),(0,Z.jsx)(F,{onClick:y,background:"spot",children:e("commandContinue")})]})},"ConnectHardwareImportAccounts"),Jt=i(ee)`
  margin-bottom: 35px;
`,Qt=i(F)`
  margin-bottom: 10px;
`;var A=x(M(),1),eo=19,to=n(e=>{let o=new Set;for(let t of e)for(let{address:r}of t.addresses)o.add(r);return o},"getExistingAddressesSet"),ye=n(()=>{let{chainImportStep:e,setIncrementChainImportStep:o,selectedChains:t,selectedChainsMap:r,pushStep:c,pushSubStep:s,setDiscoveredAccounts:S,setDerivedAccountGroups:y,derivedAccountGroups:C}=L(),f=(0,H.useRef)(C),{t:a,i18n:_}=k(),u=e-1,w=t[u],{data:v=[],isFetched:T,isError:E}=L(p=>p.existingAccounts),[D,b]=(0,H.useState)(!1),B=(0,H.useMemo)(()=>{let p=[],h=r.get(w)||{};for(let[U,oe]of Object.entries(h))oe&&p.push(U);return[p[0]]},[w,r]),{chainNameTextOr:te,chainNameTextAnd:ie}=(0,H.useMemo)(()=>{let p=B.map(oe=>$.getChainName(le.get(oe).ledgerAppOverride??oe)),h=new Intl.ListFormat(_.resolvedLanguage,{style:"long",type:"disjunction"}),U=new Intl.ListFormat(_.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:h.format(p),chainNameTextAnd:U.format(p)}},[B,_]),be=(0,H.useMemo)(()=>B.map(p=>{let h=le.get(p).ledgerAppOverride??p;return(0,A.jsx)(me,{networkID:h,size:72,borderColor:"areaBase"},$.getMainnetNetworkID(le.get(h).ledgerAppOverride??h))}),[B]);(0,H.useEffect)(()=>{let p=L.subscribe(h=>f.current=h.derivedAccountGroups);return()=>p()},[]);let q=(0,H.useMemo)(()=>{let p=[];switch(w){case P.Solana:{p.push({pathType:J.Bip44RootSolana});break}case P.EVM:{p.push({pathType:J.Bip44RootEthereum});break}case P.BitcoinTaproot:case P.BitcoinNativeSegwit:case P.BitcoinNestedSegwit:case P.BitcoinLegacy:case P.Sui:break}for(let h=0;h<eo;++h)switch(w){case P.Solana:{p.push({index:h,pathType:J.Bip44ChangeSolana}),p.push({index:h,pathType:J.Bip44Solana});break}case P.EVM:{p.push({index:h,pathType:J.Bip44Ethereum}),p.push({index:h,pathType:J.Bip44EthereumSecondary});break}case P.BitcoinTaproot:case P.BitcoinNativeSegwit:case P.BitcoinNestedSegwit:case P.BitcoinLegacy:{p.push({index:h,pathType:J.BitcoinTaproot},{index:h,pathType:J.BitcoinNativeSegwit});break}case P.Sui:throw new tt("connect hardware")}return p},[w]),[xe,Te]=(0,H.useState)(!0),{data:de=dt}=Ct(xe,!0),{data:[Dt]}=ot(["kill-ledger-xpub-derivation"]),{data:ne,error:je,fetchStatus:Bt,refetch:Ve}=St(de,q,!0,!Dt),Ot=Bt==="fetching",Ge=!de.isConnected&&de.status!=="reconnecting",[Pt,Rt]=(0,H.useState)(!1),{data:ve,refetch:qe}=Ne(Pt,!0);(0,H.useEffect)(()=>{Ge&&Te(!1)},[Ge]),(0,H.useEffect)(()=>{ve?.type==="granted"&&(Te(!0),Rt(!1))},[ve]);let Ke=st(),Ye=(0,H.useCallback)(async()=>{if(ne&&Object.keys(ne).length){let p=[...f.current],h=0;for(let U of Object.values(ne)){let Ae={accounts:{...(p[h]??{accounts:{}}).accounts},derivationIndex:q[h].index},He=$.getChainIDs(U.addressType).filter(ke=>Ke.includes(ke));for(let ke of He){let Se=$.getNetworkIDs(ke);for(let ue of Se)B.includes(ue)&&(Ae.accounts[`${ue}-${U.address}`]={chainType:U.addressType,chainId:ue,address:U.address,publicKey:U.publicKey,pathParams:q[h]})}p[h]=Ae,h++}if(y(p),T&&t.length===e){b(!0);let U=to(v),oe=p.reduce((d,O)=>{let Ce=!1;for(let Ie of Object.values(O.accounts))Ce=Ce||U.has(Ie.address);return Ce||d.push(O),d},[]),Ae=[],He=[];for(let d=0;d<oe.length;d+=_e.extension){let O=oe.slice(d,d+_e.extension).map(Ce=>Object.entries(Ce.accounts).reduce((Ie,[Mt,Ft])=>(Ie[Mt]={account:Ft},Ie),{}));He.push(O)}for(let d of He)Ae.push(ct(d));let Se=(await Promise.all(Ae)).flat().map(d=>{switch(d.status){case"discovered":return{...d,accounts:d.accounts.filter(O=>O.hasAccountActivity||De(O.derivationPathType))};case"undiscovered":return{...d,accounts:d.accounts.filter(O=>De(O.derivationPathType))}}}).filter(d=>d.accounts.length>0).map(d=>{let O=Ze();return{...d,discoveryIdentifier:O}}),ue=Se.filter(d=>d.status==="undiscovered"||d.isSelectedByDefault),Nt=Se.filter(d=>!(d.status==="undiscovered"||d.isSelectedByDefault)).slice(0,2),Xe=ue.length>0,Lt=v.filter(d=>d.type===nt.Ledger).length,Et=(Xe?[...ue,...Nt]:Se.filter(d=>!d.accounts.some(O=>!De(O.derivationPathType))).slice(0,3)).map((d,O)=>({...d,accountIndex:Lt+O}));S(Et,Xe),c((0,A.jsx)(Ht,{preventBack:!0}))}}},[ne,y,T,t.length,e,q,Ke,B,v,S,c]);(0,H.useEffect)(()=>{ne&&Object.keys(ne).length===q.length&&(Ye(),t.length!==e&&(o(),s((0,A.jsx)(ye,{preventBack:!0}))))},[ne,q,c,s,e,t,Ye,o]);let K,Y,X,re,pe=n(()=>{},"onClick");return E?(K=(0,A.jsx)(N,{type:"failure"}),Y=a("connectHardwareErrorLedgerGeneric"),X=a("connectHardwareErrorLedgerPhantomLocked"),pe=n(async()=>{let p=await ut();p.id!==void 0&&lt(p.id)},"onClick"),re=a("commandClose")):ve&&ve.type!=="granted"?(K=(0,A.jsx)(N,{type:"warning"}),Y=a("connectHardwarePermissionDeniedPrimary"),X=a("connectHardwarePermissionDeniedSecondary"),re=a("homeErrorButtonText"),pe=qe):Ge?(K=(0,A.jsx)(N,{type:"warning"}),Y=a("connectHardwarePermissionUnableToConnect"),X=a("connectHardwarePermissionUnableToConnectDescription"),re=a("commandConnect"),pe=qe):je instanceof pt?(K=(0,A.jsx)(N,{type:"failure"}),Y=a("connectHardwareErrorLedgerLocked"),X=a("connectHardwareErrorLedgerLockedDescription"),re=a("homeErrorButtonText"),pe=Ve):je?(K=(0,A.jsx)(N,{type:"failure"}),Y=a("connectHardwareErrorLedgerGeneric"),X=a("connectHardwareErrorLedgerGenericDescription"),re=a("homeErrorButtonText"),pe=Ve):de.status=="reconnecting"?(K=(0,A.jsx)(N,{defaultIcon:(0,A.jsx)(fe,{}),type:"default"}),Y=a("connectHardwareConnecting"),X=a("connectHardwareConnectingDescription")):D?(K=(0,A.jsx)(N,{defaultIcon:(0,A.jsx)(fe,{}),type:"default"}),Y=a("connectHardwareDiscoveringAccounts"),X=a("connectHardwareDiscoveringAccountsDescription")):Ot?(K=(0,A.jsx)(N,{defaultIcon:(0,A.jsx)(fe,{}),type:"default"}),Y=a("connectHardwareConnectingAccounts"),X=a("connectHardwareFindingAccountsWithActivity",{chainName:ie})):(K=(0,A.jsx)(no,{children:be}),Y=a("connectHardwareMobileOpenAppSingleChain",{chainName:te}),X=a("connectHardwareOpenAppDescription")),(0,A.jsxs)(W,{children:[(0,A.jsx)(ee,{children:(0,A.jsx)(Q,{icon:K,primaryText:Y,headerStyle:"large",secondaryText:X})}),re?(0,A.jsx)(F,{onClick:pe,background:"spot",children:re}):(0,A.jsx)(oo,{children:(0,A.jsx)(j,{color:R.colors.legacy.textDiminished,size:14,children:a("connectHardwareAccountsStepOfSteps",{stepNum:e,totalSteps:t.length})})})]})},"ConnectHardwareOpenApp"),oo=i.div`
  align-self: center;
  background-color: ${R.colors.legacy.borderDiminished};
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,no=i.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: -12.5px;
  }
`;l();m();var ge=x(ce(),1);var G=x(M(),1),kt=n(()=>{let{t:e}=k(),{pushSubStep:o,selectedChains:t,setSelectedChains:r,selectedChainsMap:c}=L(),s=Pe(),S=(0,ge.useMemo)(()=>s.filter(u=>le.get(u).isLedgerEnabled),[s]),y=Oe(),C=(0,ge.useCallback)(u=>{let w=new Map(c),v=$.getAddressTypes(u);for(let E of v){let D=c.get(E),b=D?.[u];w.set(E,{...D,[u]:!b})}let T=y.filter(E=>{let D=w.get(E)||{};return Object.values(D).reduce((B,te)=>te?++B:B,0)>0});r(T,w)},[y,r,c]),f=n(()=>{o((0,G.jsx)(ye,{preventBack:!0}))},"onPressContinue");ht(()=>{let u=new Map;for(let w of y)u.set(w,{});for(let w of S){let v=$.getAddressTypes(w);for(let T of v){let E=u.get(T);u.set(T,{...E,[w]:!1})}}r(t,u)},y.length>0&&S.length>0);let a=(0,ge.useMemo)(()=>S.map(u=>{let w=$.getAddressTypes(u),v=!1;for(let T of w)v=c.get(T)?.[u]||v;return(0,G.jsx)(ro,{icon:(0,G.jsx)(me,{networkID:u,size:40}),networkID:u,onPressChain:C,isChecked:v},u)}),[S,c,C]),_=(0,ge.useMemo)(()=>{let u=0;for(let w of c.values())u+=Object.values(w).reduce((v,T)=>T?++v:v,0);return u===0},[c]);return(0,G.jsxs)(W,{children:[(0,G.jsx)(j,{weight:500,size:28,lineHeight:34,children:e("connectHardwareSelectChains")}),(0,G.jsx)(so,{children:a}),(0,G.jsx)(F,{onClick:f,background:"spot",disabled:_,children:e("commandContinue")})]})},"ConnectHardwareSelectChains"),ro=n(({networkID:e,icon:o,onPressChain:t,isChecked:r})=>(0,G.jsxs)(co,{onClick:n(()=>{t(e)},"onClickCheckbox"),children:[(0,G.jsxs)(io,{children:[(0,G.jsx)(ao,{children:o}),(0,G.jsx)(j,{size:16,weight:600,children:$.getNetworkName(e)})]}),(0,G.jsx)(we,{checked:r})]}),"SelectChainRow"),co=i.div`
  align-items: center;
  background-color: ${R.colors.legacy.elementBase};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  > span {
    margin-right: 0px;
  }
`,ao=i.div`
  margin-right: 12px;
`,so=i.div`
  margin-top: 20px;
`,io=i.div`
  display: flex;
  align-items: center;
`;var I=x(M(),1),po=n(()=>{let{t:e}=k(),{pushStep:o,setSelectedChains:t}=L(),r=Pe(),c=Oe(),{data:s,isFetching:S,refetch:y}=Ne(!0,!0),{buttonDisabled:C,defaultIcon:f,primaryText:a,secondaryText:_,buttonText:u,iconType:w,onClick:v}=(0,It.useMemo)(()=>{let T=!1,E=(0,I.jsx)(fe,{}),D,b,B,te="default",ie=gt;if(S)D=e("connectHardwareSearching"),b=e("connectHardwareMakeSureConnected"),B=e("commandContinue"),T=!0;else if(s?.type==="granted"){let be=s.transport.deviceModel?.productName??"Ledger";te="success",D=e("connectHardwarePairSuccessPrimary",{productName:be}),b=e("connectHardwarePairSuccessSecondary",{productName:be}),B=e("commandContinue"),T=!1,ie=n(()=>{if(c.length===1){let q=new Map;q.set(c[0],{});for(let xe of r){let Te=$.getAddressTypes(xe);for(let de of Te)q.set(de,{[xe]:!0})}t(c,q),o((0,I.jsx)(ye,{preventBack:!0}))}else o((0,I.jsx)(kt,{onBackCallback:()=>{t([],new Map)}}))},"onClick")}else s?.type==="denied"?(te="failure",D=e("connectHardwarePermissionDeniedPrimary"),b=e("connectHardwarePermissionDeniedSecondary"),B=e("commandTryAgain"),T=!1,ie=y):(!s||s.type==="unable-to-connect")&&(te="failure",D=e("connectHardwarePermissionUnableToConnect"),b=e("connectHardwareWaitingForApplicationSecondaryText"),B=e("commandTryAgain"),T=!1,ie=y);return{buttonDisabled:T,defaultIcon:E,primaryText:D,secondaryText:b,buttonText:B,iconType:te,onClick:ie}},[r,c,s,o,y,S,t,e]);return(0,I.jsxs)(W,{children:[(0,I.jsx)(ee,{children:(0,I.jsx)(Q,{icon:(0,I.jsx)(N,{defaultIcon:f,type:w}),primaryText:a,headerStyle:"large",secondaryText:_})}),(0,I.jsx)(F,{onClick:v,background:"spot",disabled:C,children:u})]})},"ConnectHardwareSearchForWallet"),qr=n(()=>{let{t:e}=k(),{pushSubStep:o}=L(),t=n(()=>o((0,I.jsx)(po,{})),"onPressConnect");return(0,I.jsxs)(W,{children:[(0,I.jsx)(ee,{children:(0,I.jsx)(Q,{icon:(0,I.jsx)(ft,{}),primaryText:e("connectHardwareLedger"),headerStyle:"large",secondaryText:e("connectHardwareStartConnection"),animateText:!0})}),(0,I.jsx)(F,{onClick:t,background:"spot",children:e("commandConnect")})]})},"ConnectHardware");l();m();var Jr=n(e=>[...Array(e).keys()],"range");export{Jr as a,L as b,wt as c,Do as d,Bo as e,xt as f,dn as g,qr as h};
//# sourceMappingURL=chunk-PYYUOQG4.js.map
