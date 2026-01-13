import{a as h}from"./chunk-LEFSCI55.js";import{db as T,l as c,m as x}from"./chunk-4EXJCS3P.js";import{aa as f}from"./chunk-OQCZPFI2.js";import{nc as d}from"./chunk-KLKDJF5S.js";import{$ as m}from"./chunk-L3JU23Z5.js";import{U as n,a as g,b as p}from"./chunk-R3MCCTIW.js";import{a,g as r,i as s,n as l}from"./chunk-WKJYWAXG.js";s();l();var w=r(g(),1);var k=r(p(),1),b=a(o=>{let{txHash:t}=o,{data:i}=d(m.Solana),u=t&&i?{id:t,networkID:i}:void 0,{data:e}=f(u),R=(0,w.useCallback)(()=>{e&&self.open(e)},[e]);return(0,k.jsx)(y,{opacity:t?1:0,onClick:R,children:o.children})},"TransactionLink"),y=x(T).attrs({size:16,weight:500,color:n.colors.legacy.spotBase})`
  margin-top: 18px;
  text-decoration: none;
  ${o=>o.opacity===0?c`
          pointer-events: none;
        `:c`
          &:hover {
            cursor: pointer;
            color: ${h(n.colors.legacy.spotAccent,.5)};
          }
        `}
  }
`;export{b as a};
//# sourceMappingURL=chunk-SUKAPYGM.js.map
