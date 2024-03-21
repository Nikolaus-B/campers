import{j as e,u as o,a as j}from"./index-Byu_Fb7F.js";const b=t=>t.cars.cars;var c=256,u=[],a=256,d;for(;c--;)u[c]=(c+256).toString(16).substring(1);function l(t){var r=0,n=t||11;if(!d||c+n>a*2)for(d="",c=0;r<a;r++)d+=u[Math.random()*256|0];return d.substring(c,c+++n)}const f="/campers/assets/sprite-wAsfQexd.svg",m=({styles:t,width:r,height:n,iconId:i})=>e.jsx(e.Fragment,{children:e.jsx("svg",{style:t,width:r,height:n,children:e.jsx("use",{href:`${f}#${i}`})})}),w=o.li`
  display: flex;
  gap: 24px;

  width: 888px;
  height: 358px;
  padding: 24px;

  border: 1px solid ${t=>t.theme.colors.borderColor};
  border-radius: 20px;
`,v=o.div`
  width: 100%;
  height: 310px;

  border-radius: 10px;
  background-image: url(${t=>t.$bgImage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,y=o.div`
  display: flex;
  justify-content: space-between;
`,C=o.div`
  display: flex;
  gap: 10px;
`,x=o.p`
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
`,$=o.div`
  display: flex;
  gap: 16px;
`,k=o.p`
  width: 525px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${t=>t.theme.colors.grey};
`,T=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  height: 96px;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`,F=o.div`
  padding: 12px 18px;
  background-color: ${t=>t.theme.colors.mainWhite};
  border-radius: 100px;
`,I=o.p`
  line-height: 20px;
  background-color: ${t=>t.theme.colors.mainWhite};
`,S=o.button`
  width: 166px;
  height: 56px;

  background-color: ${t=>t.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${t=>t.theme.colors.buttonText};
  transition: background-color ${t=>t.theme.transition.transitionDurAndFunc};
  &:hover {
    background-color: ${t=>t.theme.colors.hoverColor};
  }
`,q=({car:t})=>{const r=(n,i)=>n==="beds"||n==="hob"||n==="adult"?i:i===1?"":i;return e.jsxs(w,{children:[e.jsx(v,{$bgImage:t.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}),e.jsxs("div",{children:[e.jsxs(y,{children:[e.jsx(x,{children:t.name}),e.jsxs(C,{children:[e.jsxs(x,{children:["€",t.price,".00"]}),e.jsx(m,{width:24,height:24,iconId:"heart"})]})]}),e.jsxs($,{children:[e.jsxs("p",{children:[t.rating," ",e.jsxs("span",{children:[t.reviews.length||0," Reviews"]})]}),e.jsx("p",{children:t.location})]}),e.jsx(k,{children:t.description}),e.jsx(T,{children:Object.entries(t.details).map(([n,i])=>i===0?e.jsx("div",{style:{display:"none"}},l()):e.jsx(F,{children:e.jsxs(I,{children:[r(n,i)," ",n]})},l()))}),e.jsx(S,{children:"Show more"})]})]})},B=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,L=o.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,A=o.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${t=>t.theme.colors.loadMoreBorderColor};
  border-radius: 200px;

  transition: border ${t=>t.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${t=>t.theme.colors.red};
  }
`,D=()=>{const t=j(b);return e.jsxs(B,{children:[e.jsx(L,{children:t.map(r=>e.jsx(q,{car:r.car},r.id))}),e.jsx(A,{children:"Load more"})]})},M=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;
  max-width: 128px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: transparent;
`,V=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,s=({id:t,iconType:r,text:n})=>e.jsx(M,{onClick:()=>console.log(n),children:e.jsxs(V,{children:[e.jsx(m,{iconId:t,width:r==="equipment"?32:40,height:r==="equipment"?32:28}),e.jsx("p",{children:n})]})}),H=o.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,z=o.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.white};
  outline: none;
`,E=o.p`
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
`,g=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,R=o.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${t=>t.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${t=>t.theme.colors.buttonText};

  transition: background-color ${t=>t.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${t=>t.theme.colors.hoverColor};
  }
`,U=()=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(H,{children:"Location"}),e.jsx(z,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),e.jsx(E,{children:"Filters"}),e.jsxs("div",{children:[e.jsx(p,{children:"Vehicle equipment"}),e.jsx(h,{}),e.jsxs(g,{children:[e.jsx(s,{id:"ac",iconType:"equipment",text:"AC"}),e.jsx(s,{id:"automatic",iconType:"equipment",text:"Automatic"}),e.jsx(s,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),e.jsx(s,{id:"tv",iconType:"equipment",text:"TV"}),e.jsx(s,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),e.jsx(p,{children:"Vehicle type"}),e.jsx(h,{}),e.jsxs(g,{children:[e.jsx(s,{id:"camper-2",iconType:"vehicle",text:"Van"}),e.jsx(s,{id:"camper-1",iconType:"vehicle",text:"Fully Integrated"}),e.jsx(s,{id:"camper-3",iconType:"vehicle",text:"Alcove"})]})]}),e.jsx(R,{children:"Search"})]});function _(){return e.jsxs("section",{className:"container",children:[e.jsx(U,{}),e.jsx(D,{})]})}export{_ as default};
