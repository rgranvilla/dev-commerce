var B=Object.defineProperty;var u=(e,t)=>B(e,"name",{value:t,configurable:!0});import{j as r,a as d,F as c}from"./jsx-runtime.41452875.js";import{r as k}from"./index.304de3c8.js";import"./iframe.e17417cb.js";function h({icon:e,className:t="",ariaLabel:o,...i}){return r("button",{className:`${t} flex items-center justify-center p-2 rounded-md disabled:cursor-not-allowed`,"aria-label":o,...i,children:e})}u(h,"IconButton");try{h.displayName="IconButton",h.__docgenInfo={description:"",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/IconButton.tsx#IconButton"]={docgenInfo:h.__docgenInfo,name:"IconButton",path:"src/components/Button/IconButton.tsx#IconButton"})}catch{}var I=k.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),M=u(function(t,o,i){var n=i.get(t);return n?n(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function x(e,t){if(e==null)return{};var o={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}u(x,"_objectWithoutPropertiesLoose");var y=k.exports.forwardRef(function(e,t){var o=e.alt,i=e.color,n=e.size,s=e.weight,H=e.mirrored,W=e.children,b=e.renderPath,_=x(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=k.exports.useContext(I),p=l.color,f=p===void 0?"currentColor":p,L=l.size,g=l.weight,C=g===void 0?"regular":g,m=l.mirrored,v=m===void 0?!1:m,w=x(l,["color","size","weight","mirrored"]);return d("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n!=null?n:L,height:n!=null?n:L,fill:i!=null?i:f,viewBox:"0 0 256 256",transform:H||v?"scale(-1, 1)":void 0},w,_),children:[!!o&&r("title",{children:o}),W,r("rect",{width:"256",height:"256",fill:"none"}),b(s!=null?s:C,i!=null?i:f)]})});y.displayName="IconBase";const A=y;var a=new Map;a.set("bold",function(e){return d(c,{children:[r("path",{d:"M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("circle",{cx:"80",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("circle",{cx:"184",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});a.set("duotone",function(e){return d(c,{children:[r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48Z",opacity:"0.2"}),r("path",{d:"M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("circle",{cx:"80",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("circle",{cx:"184",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});a.set("fill",function(){return r(c,{children:r("path",{d:"M223.9,65.4l-12.2,66.9A24,24,0,0,1,188.1,152H72.1l4.4,24H184a24,24,0,1,1-24,24,23.6,23.6,0,0,1,1.4-8H102.6a23.6,23.6,0,0,1,1.4,8,24,24,0,1,1-42.2-15.6L34.1,32H16a8,8,0,0,1,0-16H34.1A16,16,0,0,1,49.8,29.1L54.7,56H216a7.9,7.9,0,0,1,6.1,2.9A7.7,7.7,0,0,1,223.9,65.4Z"})})});a.set("light",function(e){return d(c,{children:[r("path",{d:"M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("circle",{cx:"80",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("circle",{cx:"184",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});a.set("thin",function(e){return d(c,{children:[r("path",{d:"M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("circle",{cx:"80",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("circle",{cx:"184",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});a.set("regular",function(e){return d(c,{children:[r("path",{d:"M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("circle",{cx:"80",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("circle",{cx:"184",cy:"204",r:"20",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("path",{d:"M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var S=u(function(t,o){return M(t,o,a)},"renderPath"),j=k.exports.forwardRef(function(e,t){return r(A,{...Object.assign({ref:t},e,{renderPath:S})})});j.displayName="ShoppingCart";const O=j,$={title:"Components/IconButton",component:h,argTypes:{icon:{table:{disable:!0}},className:{table:{disable:!0}},ariaLabel:{table:{disable:!0}}}},E={args:{ariaLabel:"Cart",className:"bg-purple-700 text-base-card transition-colors hover:bg-purple-400",icon:r(O,{size:"1.375rem",weight:"fill"})},parameters:{docs:{source:{type:"dynamic"}}}},T=["Default"];export{E as Default,T as __namedExportsOrder,$ as default};
//# sourceMappingURL=IconButton.stories.3a9c38dd.js.map
