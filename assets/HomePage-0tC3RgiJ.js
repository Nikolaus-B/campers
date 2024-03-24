import{u as o,r as d,a as m,j as t,b as x,t as g,c as b,d as j,e as C}from"./index-Tx5IeN8Z.js";import{s as f,C as y,I as v}from"./Car-3JBImcqb.js";const F=o.div`
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
`,k=()=>{const[e,r]=d.useState(4),c=m(f),a=()=>{r(n=>n+4)},s=e>=c.length;return t.jsxs(F,{children:[t.jsx(w,{children:c.map((n,l)=>t.jsx(y,{car:n.car,hidden:l>=e},n.id))}),!s&&t.jsx($,{onClick:a,disabled:s,children:"Load more"})]})},S=o.button`
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
`,T=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,i=({id:e,iconType:r,text:c})=>{const a=x(),[s,n]=d.useState(!1),l=()=>{a((r==="equipment"?g:b)(e.toLowerCase())),n(!s)};return t.jsx(S,{className:s?"isSelected":"",onClick:()=>l(),children:t.jsxs(T,{children:[t.jsx(v,{iconId:e,width:r==="equipment"?32:40,height:r==="equipment"?32:28}),t.jsx("p",{children:c})]})})},q=o.p`
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
`,p=o.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,h=o.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,u=o.div`
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
`,B=()=>{const e=x();return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx(q,{children:"Location"}),t.jsx(L,{onChange:r=>e(j(r.target.value)),name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),t.jsx(A,{children:"Filters"}),t.jsxs("div",{children:[t.jsx(p,{children:"Vehicle equipment"}),t.jsx(h,{}),t.jsxs(u,{children:[t.jsx(i,{id:"airConditioner",iconType:"equipment",text:"AC"}),t.jsx(i,{id:"automatic",iconType:"equipment",text:"Automatic"}),t.jsx(i,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),t.jsx(i,{id:"tv",iconType:"equipment",text:"TV"}),t.jsx(i,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),t.jsx(p,{children:"Vehicle type"}),t.jsx(h,{}),t.jsxs(u,{children:[t.jsx(i,{id:"paneltruck",iconType:"vehicle",text:"Van"}),t.jsx(i,{id:"fullyintegrated",iconType:"vehicle",text:"Fully Integrated"}),t.jsx(i,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),t.jsx(I,{children:"Search"})]})};function M(){const e=x();return d.useEffect(()=>{e(C())},[e]),t.jsxs("section",{className:"container",children:[t.jsx(B,{}),t.jsx(k,{})]})}export{M as default};
