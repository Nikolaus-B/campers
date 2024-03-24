import{u as o,a as m,j as t,b as n,r as d,t as g,c as j,d as b,e as f}from"./index-eqNzIk9h.js";import{s as C,C as y,I as v}from"./Car-BXOiGhKK.js";const F=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,w=o.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,$=o.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.loadMoreBorderColor};
  border-radius: ${e=>e.theme.radius.xlg};

  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,k=()=>{const e=m(C);return t.jsxs(F,{children:[t.jsx(w,{children:e.map(i=>t.jsx(y,{car:i.car},i.id))}),t.jsx($,{children:"Load more"})]})},T=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;
  max-width: 128px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.sm};
  background-color: transparent;
  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &.isSelected {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,q=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,r=({id:e,iconType:i,text:x})=>{const p=n(),[s,h]=d.useState(!1),u=()=>{p((i==="equipment"?g:j)(e.toLowerCase())),h(!s)};return t.jsx(T,{className:s?"isSelected":"",onClick:()=>u(),children:t.jsxs(q,{children:[t.jsx(v,{iconId:e,width:i==="equipment"?32:40,height:i==="equipment"?32:28}),t.jsx("p",{children:x})]})})},S=o.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,L=o.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,A=o.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,c=o.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,a=o.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,l=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,I=o.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: ${e=>e.theme.radius.xlg};
  border: none;
  color: ${e=>e.theme.colors.buttonText};

  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`,B=()=>{const e=n();return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx(S,{children:"Location"}),t.jsx(L,{onChange:i=>e(b(i.target.value)),name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),t.jsx(A,{children:"Filters"}),t.jsxs("div",{children:[t.jsx(c,{children:"Vehicle equipment"}),t.jsx(a,{}),t.jsxs(l,{children:[t.jsx(r,{id:"airConditioner",iconType:"equipment",text:"AC"}),t.jsx(r,{id:"automatic",iconType:"equipment",text:"Automatic"}),t.jsx(r,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),t.jsx(r,{id:"tv",iconType:"equipment",text:"TV"}),t.jsx(r,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),t.jsx(c,{children:"Vehicle type"}),t.jsx(a,{}),t.jsxs(l,{children:[t.jsx(r,{id:"paneltruck",iconType:"vehicle",text:"Van"}),t.jsx(r,{id:"fullyintegrated",iconType:"vehicle",text:"Fully Integrated"}),t.jsx(r,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),t.jsx(I,{children:"Search"})]})};function z(){const e=n();return d.useEffect(()=>{e(f())},[e]),t.jsxs("section",{className:"container",children:[t.jsx(B,{}),t.jsx(k,{})]})}export{z as default};
