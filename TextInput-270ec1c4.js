import{o as a,c as o,t as r,r as c,q as d,x as i}from"./app-4711f64c.js";const m={class:"block font-medium text-sm text-gray-700"},p={key:0},_={key:1},g={__name:"InputLabel",props:["value"],setup(t){return(s,e)=>(a(),o("label",m,[t.value?(a(),o("span",p,r(t.value),1)):(a(),o("span",_,[c(s.$slots,"default")]))]))}},f=["value"],b={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(t,{expose:s}){const e=d(null);return i(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),s({focus:()=>e.value.focus()}),(n,u)=>(a(),o("input",{class:"border-gray-300 focus:border-orange-400 focus:ring-orange-400 rounded-md shadow-sm",value:t.modelValue,onInput:u[0]||(u[0]=l=>n.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:e},null,40,f))}};export{g as _,b as a};