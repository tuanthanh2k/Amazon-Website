import{o as l,c as n,e as a,b as s,d as e,k as m,w as u,g as y,O as h,h as f,T as x,f as V}from"./app-4711f64c.js";import{_ as p}from"./InputError-f4759c09.js";import{a as _,_ as v}from"./TextInput-270ec1c4.js";import{_ as k}from"./PrimaryButton-1ae212c5.js";import{J as b,v as w,n as S}from"./index.esm-8838cce0.js";const N=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600"},D={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(g){const d=g,r=b().props.auth.user,t=w({name:r.name,email:r.email});return(c,o)=>(l(),n("section",null,[N,a("form",{onSubmit:o[2]||(o[2]=V(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(v,{for:"name",value:"Name"}),s(_,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(p,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(v,{for:"email",value:"Email"}),s(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),s(p,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(r).email_verified_at===null?(l(),n("div",$,[a("p",B,[m(" Your email address is unverified. "),s(e(S),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),y(a("div",E," A new verification link has been sent to your email address. ",512),[[h,d.status==="verification-link-sent"]])])):f("",!0),a("div",U,[s(k,{disabled:e(t).processing},{default:u(()=>[m("Save")]),_:1},8,["disabled"]),s(x,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[e(t).recentlySuccessful?(l(),n("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{D as default};