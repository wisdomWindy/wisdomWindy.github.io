import{b as e,s as a,u as s,E as t,_ as i,w as l,r as n}from"./index.6a0d3800.1699407817023.js";import{I as o,f as c,v as r,x as u,W as d,X as f,a7 as p,u as m,Y as h,O as k,J as b,r as v,G as y,y as g,a1 as _,S as q,aa as w,ab as S,ac as j}from"./vue.94dea421.1699407817023.js";import"./pinia.84b9aba5.1699407817023.js";const x=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:a}}),E={click:e=>e instanceof MouseEvent},$=["href"],C=o({name:"ElLink"});const I=l(i(o({...C,props:x,emits:E,setup(e,{emit:a}){const i=e,l=s("link"),n=c((()=>[l.b(),l.m(i.type),l.is("disabled",i.disabled),l.is("underline",i.underline&&!i.disabled)]));function o(e){i.disabled||a("click",e)}return(e,a)=>(r(),u("a",{class:k(m(n)),href:e.disabled||!e.href?void 0:e.href,onClick:o},[e.icon?(r(),d(m(t),{key:0},{default:f((()=>[(r(),d(p(e.icon)))])),_:1})):h("v-if",!0),e.$slots.default?(r(),u("span",{key:1,class:k(m(l).e("inner"))},[b(e.$slots,"default")],2)):h("v-if",!0),e.$slots.icon?b(e.$slots,"icon",{key:2}):h("v-if",!0)],10,$))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]])),J=e=>(S("data-v-e2f3ed74"),e=e(),j(),e),L={class:"contianer"},Q=J((()=>g("h2",null,"个人介绍",-1))),T={class:"self-description"},W=J((()=>g("h2",null,"联系我",-1))),Y={class:"link-list"},Z=n(o({__name:"About",setup(e){let a=new Date("2021/03/08"),s=(new Date).getFullYear()-a.getFullYear(),t=v(""),i=[{href:"https://github.com/wisdomWindy",title:"github",icon:"icon-github"},{href:"mailto:me@1659140773@qq.com",title:"mail",icon:"icon-email"},{href:"https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi",title:"qq",icon:"icon-QQ"}];return y((()=>{fetch("https://el-bot-api.elpsy.cn/api/words/young").then((e=>e.json())).then((e=>{t.value=e[0]}))})),(e,a)=>{const l=I;return r(),u("div",L,[Q,g("div",T," 鄙人于2021年从事前端开发职业，距今已有"+_(m(s))+"年。主要技术栈是HTML、CSS、JavaScript、Vue、React、typescript、webpack、小程序。 ",1),W,g("div",Y,[(r(!0),u(q,null,w(m(i),((e,a)=>(r(),d(l,{class:"link",key:a,href:e.href,alt:e.title,title:e.title,underline:!1},{default:f((()=>[g("span",{class:k(["iconfont",e.icon])},null,2)])),_:2},1032,["href","alt","title"])))),128))]),g("p",null,_(m(t)),1)])}}}),[["__scopeId","data-v-e2f3ed74"]]);export{Z as default};