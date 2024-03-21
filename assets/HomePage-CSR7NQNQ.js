import{j as e,u as m,a as s}from"./index-erk-ssc0.js";const g=t=>t.cars.cars;var c=256,j=[],x=256,d;for(;c--;)j[c]=(c+256).toString(16).substring(1);function l(t){var n=0,i=t||11;if(!d||c+i>x*2)for(d="",c=0;n<x;n++)d+=j[Math.random()*256|0];return d.substring(c,c+++i)}const b="/campers/assets/sprite-wAsfQexd.svg",u=({styles:t,width:n,height:i,iconId:r})=>e.jsx(e.Fragment,{children:e.jsx("svg",{style:t,width:n,height:i,children:e.jsx("use",{href:`${b}#${r}`})})}),f=({car:t})=>{const n=(i,r)=>i==="beds"||i==="hob"||i==="adult"?r:r===1?"":r;return e.jsxs("li",{children:[e.jsx("img",{src:t.gallery[0]||"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",alt:"car image"}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:t.name}),e.jsxs("p",{children:["€",t.price,".00"]}),e.jsx(u,{width:24,height:24,iconId:"heart"})]}),e.jsxs("div",{children:[e.jsxs("p",{children:[t.rating," ",e.jsxs("span",{children:[t.reviews.length||0," Reviews"]})]}),e.jsx("p",{children:t.location})]}),e.jsx("p",{children:t.description}),e.jsx("div",{children:Object.entries(t.details).map(([i,r])=>r===0?e.jsx("div",{style:{display:"none"}},l()):e.jsx("div",{children:e.jsxs("p",{style:{color:"red"},children:[n(i,r)," ",i]})},l()))}),e.jsx("button",{children:"Show more"})]})]})},v=()=>{const t=m(g);return e.jsx("div",{children:e.jsx("ul",{children:t.map(n=>e.jsx(f,{car:n.car},n.id))})})},y=s.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  max-width: 128px;
  height: 95px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  background-color: transparent;
`,w=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`,o=({id:t,iconType:n,text:i})=>e.jsx(y,{onClick:()=>console.log(i),children:e.jsxs(w,{children:[e.jsx(u,{iconId:t,width:n==="equipment"?32:40,height:n==="equipment"?32:28}),e.jsx("p",{children:i})]})}),C=s.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,F=s.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: 10px;
  background-color: ${t=>t.theme.colors.white};
  outline: none;
`,T=s.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,p=s.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,a=s.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,h=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,q=s.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${t=>t.theme.colors.red};
  border-radius: 200px;
  border: none;
  color: ${t=>t.theme.colors.buttonText};
`,S=()=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(C,{children:"Location"}),e.jsx(F,{name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]}),e.jsx(T,{children:"Filters"}),e.jsxs("div",{children:[e.jsx(p,{children:"Vehicle equipment"}),e.jsx(a,{}),e.jsxs(h,{children:[e.jsx(o,{id:"ac",iconType:"equipment",text:"AC"}),e.jsx(o,{id:"automatic",iconType:"equipment",text:"Automatic"}),e.jsx(o,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),e.jsx(o,{id:"tv",iconType:"equipment",text:"TV"}),e.jsx(o,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),e.jsx(p,{children:"Vehicle type"}),e.jsx(a,{}),e.jsxs(h,{children:[e.jsx(o,{id:"camper-2",iconType:"vehicle",text:"Van"}),e.jsx(o,{id:"camper-1",iconType:"vehicle",text:"Fully Integrated"}),e.jsx(o,{id:"camper-3",iconType:"vehicle",text:"Alcove"})]})]}),e.jsx(q,{children:"Search"})]});function I(){return e.jsxs("section",{className:"container",children:[e.jsx(S,{}),e.jsx(v,{})]})}export{I as default};
