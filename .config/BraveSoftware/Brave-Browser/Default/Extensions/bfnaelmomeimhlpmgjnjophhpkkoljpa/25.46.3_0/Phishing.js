import{a as Y,b as z}from"./chunk-NGUMFBJN.js";import{a as M}from"./chunk-XMURLUQN.js";import"./chunk-JUI4ISS4.js";import{a as $}from"./chunk-GVVB5LZG.js";import"./chunk-S5LVVL2E.js";import{d as _,db as p,k as E,m as c,s as J}from"./chunk-4EXJCS3P.js";import"./chunk-7DNVCCG7.js";import{d as D,f as F}from"./chunk-7R3NEG4N.js";import{a as P}from"./chunk-SG46YPDZ.js";import{b as S,g as I}from"./chunk-TAPPRV2Q.js";import"./chunk-C3BAWXY6.js";import"./chunk-WVRYN4MY.js";import"./chunk-M3IC3XCG.js";import"./chunk-RSJ6JVZU.js";import{u as U}from"./chunk-2UWPPO5V.js";import"./chunk-4T2FPKLQ.js";import"./chunk-GC6SFTGM.js";import"./chunk-A3JYJELV.js";import{a as N}from"./chunk-MVNJOY5H.js";import{a as C}from"./chunk-SIWEHH3L.js";import"./chunk-OQCZPFI2.js";import"./chunk-YJCG6GWC.js";import"./chunk-KLKDJF5S.js";import{Nb as Z}from"./chunk-BQE2SXP7.js";import{Dc as L,Tc as T,jd as m,sc as W}from"./chunk-L3JU23Z5.js";import"./chunk-5HNKNX3S.js";import{U as f,a as B,b as l,q as v}from"./chunk-R3MCCTIW.js";import"./chunk-FNC6PQ53.js";import"./chunk-5QQLABHI.js";import"./chunk-VL3IRAUM.js";import"./chunk-FA7LVEFF.js";import{a as e,g as i,i as a,n as s}from"./chunk-WKJYWAXG.js";a();s();var vo=i(B(),1);var Q=i(Y(),1);a();s();var y=i(B(),1);a();s();var A=i(Z(),1);var o=i(l(),1),g=f.colors.legacy.spotNegative,j=c.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${f.colors.brand.white};
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,oo=c.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,to=c.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,G=c.a`
  text-decoration: underline;
  color: ${g};
`,h=new N,H=e(({origin:r,subdomain:n})=>{let{t:d}=v(),b=r?I(r):"",V=r??"",k=new URL(V).hostname,R=n==="true"?k:b,w=(0,A.toUnicode)(R),X=e(async()=>{if(n==="true"){let O=await h.get(m.UserWhitelistSubdomains),t=JSON.parse(`${O}`);t?t.push(k):t=[k],t=[...new Set(t)],h.set(m.UserWhitelistSubdomains,JSON.stringify(t))}else{let O=await h.get(m.UserWhitelistedOrigins),t=JSON.parse(`${O}`);t?t.push(b):t=[b],t=[...new Set(t)],h.set(m.UserWhitelistedOrigins,JSON.stringify(t))}self.location.href=r},"handleClick");return(0,o.jsx)(j,{children:(0,o.jsxs)(to,{children:[(0,o.jsx)(oo,{children:(0,o.jsx)(J,{width:128,fill:f.colors.brand.white})}),(0,o.jsx)(p,{size:30,color:g,weight:"600",children:d("blocklistOriginDomainIsBlocked",{domainName:w||d("blocklistOriginThisDomain")})}),(0,o.jsx)(p,{color:g,children:d("blocklistOriginSiteIsMalicious")}),(0,o.jsx)(p,{color:g,children:(0,o.jsxs)(U,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated",children:["This site has been flagged as part of a",(0,o.jsx)(G,{href:S,rel:"noopener",target:"_blank",children:"community-maintained database"}),"of known phishing websites and scams. If you believe the site has been flagged in error,",(0,o.jsx)(G,{href:S,rel:"noopener",target:"_blank",children:"please file an issue"}),"."]})}),R?(0,o.jsx)(p,{color:g,onClick:X,hoverUnderline:!0,children:d("blocklistOriginIgnoreWarning",{domainName:w})}):(0,o.jsx)(o.Fragment,{})]})})},"BlocklistOrigin");var u=i(l(),1),ro=e(()=>{let r;try{r=new URLSearchParams(self.location.search).get("origin")||"",new URL(r)}catch{r=""}return r},"getOriginParam"),io=e(()=>new URLSearchParams(self.location.search).get("subdomain")||"","getSubdomainParam"),q=e(()=>{let r=(0,y.useMemo)(ro,[]),n=(0,y.useMemo)(io,[]);return(0,u.jsx)(_,{future:{v7_startTransition:!0},children:(0,u.jsx)(M,{children:(0,u.jsx)(H,{origin:r,subdomain:n})})})},"Blocklist");var x=i(l(),1);C();W([[T,P]]);L.init({provider:z});await D("frontend",F);var eo=document.getElementById("root"),no=(0,Q.createRoot)(eo);no.render((0,x.jsx)(E,{theme:$,children:(0,x.jsx)(q,{})}));
//# sourceMappingURL=Phishing.js.map
