(function(){"use strict";var e={2370:function(e,t,n){var o=n(9242),r=n(3396),i=n(4870),a=n(2268),u=n(7139);const s={class:"container"},c={class:"other"};var d={name:"BaseHeader",setup(e){const t=(0,u.oR)();let n=(0,i.iH)([]),o=(0,i.iH)(!0);function d(){const e=document.documentElement;e.style.setProperty("--el-color-primary",o.value?"#409eff":"#000")}return(0,r.wF)((()=>{n.value=t.state.menuList})),(e,t)=>{const u=(0,r.up)("el-menu-item"),l=(0,r.up)("el-menu"),m=(0,r.up)("el-switch");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(l,{class:"menu",mode:"horizontal","default-active":(0,i.SU)(n)[0].path,"unique-opened":!0,router:!0},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(n),((e,t)=>((0,r.wg)(),(0,r.j4)(u,{class:"menu-item",key:t,index:e.path},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.label),1)])),_:2},1032,["index"])))),128))])),_:1},8,["default-active"]),(0,r._)("div",c,[(0,r.Wm)(m,{modelValue:(0,i.SU)(o),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.dq)(o)?o.value=e:o=e),"active-text":"Light","inactive-text":"Dark",onChange:d},null,8,["modelValue"])])])}}},l=n(89);const m=(0,l.Z)(d,[["__scopeId","data-v-49b5387e"]]);var f=m;const p=e=>((0,r.dD)("data-v-d70a16e2"),e=e(),(0,r.Cn)(),e),g={class:"container"},h=(0,r.Uk)(" 个人制作"),v=p((()=>(0,r._)("span",null,"©",-1))),b=(0,r.Uk)("版权"),y=p((()=>(0,r._)("a",{href:"https://beian.miit.gov.cn"},"鄂ICP备2021014624号",-1))),w=[h,v,b,y];function j(e,t){return(0,r.wg)(),(0,r.iD)("div",g,w)}const k={},C=(0,l.Z)(k,[["render",j],["__scopeId","data-v-d70a16e2"]]);var U=C;const _={class:"root"},T={class:"header"},O={class:"main"},A={class:"footer"};var S={name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",T,[(0,r.Wm)(f)]),(0,r._)("div",O,[(0,r.Wm)(n)]),(0,r._)("div",A,[(0,r.Wm)(U)])])}}};const P=S;var x=P,E={state:{swiperList:[{path:"./dist/images/moiverout1.jpg",alt:"moiverout1.jpg"},{path:"./dist/images/moiverout2.jpg",alt:"moiverout2.jpg"},{path:"./dist/images/moiverout3.jpg",alt:"moiverout3.jpg"},{path:"./dist/images/moiverout4.jpg",alt:"moiverout4.jpg"}],blackList:[{name:"琴酒（Gin，ジン）",imgUrl:"./dist/images/gin.jpg",description:"黑衣组织重要成员，经常和伏特加一起出现。是最早登场也是最重要的组织成员之一。银色（动画早期为金色）长发，左撇子。冷酷残忍，头脑冷静，似乎可以毫不犹豫地杀死任何人。经常执行各种暗杀和清除组织内奸的任务，自称从不去记杀掉的人的姓名和长相。是给新一灌下APTX4869使其身体变小的罪魁祸首。爱车是黑色的保时捷356A。"},{name:"伏特加（Vodka，ウォッカ）",imgUrl:"./dist/images/vodka.jpg",description:"黑衣组织重要成员，琴酒的搭档，最早登场的组织成员之一。总是带着墨镜。但头脑简单，做事稍不细密。完全服从琴酒且一起行动，尊称琴酒为“大哥”。"},{name:"贝尔摩得（Vermouth，ベルモット，又译苦艾酒）",imgUrl:"./dist/images/vermouth.jpg",description:"黑衣组织重要成员。真实身份为美国大明星莎朗·温亚德，因某种原因恢复年轻或停止衰老（具体不详），而后对外宣称为“莎朗的女儿”克丽丝·温亚德。精通易容与变声。负责收集重要情报，是个“秘密主义者”。在纽约的时候，新一和小兰曾救过她，此后一直保护两人。知道柯南和灰原的真实身份，但却并没有上报组织，原因似乎也与她自身原因有关。与Boss有着特殊关系，具体不明。"},{name:"基安蒂（Chianti，キアンティ）",imgUrl:"./dist/images/chianti.jpg",description:"黑衣组织中的狙击手，与科恩搭档，有效射程为600码左右，实力强劲。左眼有凤尾蝶图案纹身并且常画很重的眼影。性格激进，痛恨对卡尔瓦多斯见死不救的贝尔摩得。"},{name:"科恩（Korn，コルン）",imgUrl:"./dist/images/korn.jpg",description:"黑衣组织中的狙击手，与基安蒂搭档，狙击能力在600码左右，技术出众。性格冷酷、沉默寡言。参与过多次暗杀行动。同样讨厌贝尔摩得。"},{name:"基尔（Kir，キール）",imgUrl:"./dist/images/kir.jpg",description:"CIA派入组织的卧底，本名本堂瑛海，化名水无怜奈。伊森·本堂的女儿，本堂瑛祐的姐姐。表面身份为日卖电视台主持人（重回组织后已辞职）。在于一次暗杀政要的行动中遭遇车祸，被FBI当作真正组织成员擒获，一直在医院昏迷。苏醒后FBI才得知其身份，将她送回组织继续完成任务。"},{name:"波本（Bourbon，バーボン）",imgUrl:"./dist/images/bourbon.jpg",description:"日本公安警察派入组织的卧底，本名降谷零，化名安室透。人称“神秘主义者”。曾在小时候与宫野艾莲娜有过接触。表面职业为私家侦探，并在波洛咖啡厅打工，拜毛利小五郎为师。对柯南的身份产生了兴趣。与赤井秀一相互反感，曾伪装成伤疤赤井来试探FBI\n        [13] ，后推断出赤井未死及赤井假扮为冲矢昴活动。"},{name:"苏格兰威士忌（Scotch，スコッチ；死亡）",imgUrl:"./dist/images/scotch.png",description:"日本公安警察派入组织的卧底，本名诸伏景光，是诸伏高明之弟，安室透的发小和同事。卧底身份暴露后，在组织套问出其名字之前，在赤井秀一面前自杀。"},{name:"雪莉（Sherry，シェリー；已脱离组织）",imgUrl:"./dist/images/sherry.jpg",description:"黑衣组织重要成员。本名宫野志保。组织中的科学家，药物APTX4869的制造者。据琴酒所言是“在组织里算是少数头脑顶尖的人”。但在组织杀害她的姐姐宫野明美后以停止研发以示抗议，被组织囚禁时服下APTX4869自尽，却身体恢复幼年并逃出组织。化名灰原哀，阿笠博士将之收留。"},{name:"宫野明美（死亡）",imgUrl:"./dist/images/gym.jpg",description:"黑衣组织的基层成员，宫野志保的姐姐，赤井秀一的女友。因父母都是组织成员而被迫加入组织。为了自己和妹妹能够脱离组织，化名广田雅美，完成了组织交给的抢劫十亿日元的任务，后被琴酒杀害。"}]},mutations:{},actions:{},getters:{}},L=(0,u.MT)({state:{webTitle:"website",menuList:[{label:"首页",path:"/home"},{label:"工具",path:"/tool"},{label:"关于",path:"/about"}],test:""},mutations:{setTest(e,t){e.test=t}},actions:{},getters:{},modules:{home:E}}),B=n(2483);const I=(0,B.p7)({history:(0,B.PO)(),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>n.e(229).then(n.bind(n,9229))},{path:"/about",name:"about",component:()=>n.e(920).then(n.bind(n,1920))},{path:"/tool",name:"tool",component:()=>n.e(368).then(n.bind(n,4368)),children:[{path:"videoTransform",name:"videoTransform",component:()=>n.e(225).then(n.bind(n,5225))},{path:"base64",name:"base64",component:()=>n.e(16).then(n.bind(n,1016))},{path:"docxpreview",name:"docxpreview",component:()=>n.e(382).then(n.bind(n,4382))}]}]});var D=I,F=n(7866),N=(n(4415),n(812)),H=n(2748);const M=(0,o.ri)(x);M.component("Message",H.v0C),M.use(L).use(D).use(F.Z,{locale:N.Z}).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{16:"58df03d1ff50db40",225:"d09f5703934a1a5d",229:"c883db0b70ed29b6",368:"5d63a5bd7eb3da0d",382:"c359f058a5780efb",920:"3eb0a2e8ae18abff",999:"6b839389d42ddc9c"}[e]+".1697193882526.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1697193882526.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="web:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={225:1,229:1,368:1,382:1,920:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){n.b=document.baseURI||self.location.href;var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var d=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkweb"]=self["webpackChunkweb"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2370)}));o=n.O(o)})();