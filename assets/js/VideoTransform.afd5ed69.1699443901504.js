var e,t,a,s,i,r,o,n,l,c=Object.defineProperty,d=(e,t,a)=>(((e,t,a)=>{t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a),h=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},p=(e,t,a)=>(h(e,t,"read from private field"),a?a.call(e):t.get(e)),E=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},f=(e,t,a,s)=>(h(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a);import{b as u}from"./element-plus.264a921d.1699443901504.js";import{_ as m}from"./index.8f40161f.1699443901504.js";import"./pinia.19054572.1699443901504.js";import"vue";(l=n||(n={})).LOAD="LOAD",l.EXEC="EXEC",l.WRITE_FILE="WRITE_FILE",l.READ_FILE="READ_FILE",l.DELETE_FILE="DELETE_FILE",l.RENAME="RENAME",l.CREATE_DIR="CREATE_DIR",l.LIST_DIR="LIST_DIR",l.DELETE_DIR="DELETE_DIR",l.ERROR="ERROR",l.DOWNLOAD="DOWNLOAD",l.PROGRESS="PROGRESS",l.LOG="LOG",l.MOUNT="MOUNT",l.UNMOUNT="UNMOUNT";const w=(()=>{let e=0;return()=>e++})(),R=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),y=new Error("called FFmpeg.terminate()");class L{constructor(){E(this,e,null),E(this,t,{}),E(this,a,{}),E(this,s,[]),E(this,i,[]),d(this,"loaded",!1),E(this,r,(()=>{p(this,e)&&(p(this,e).onmessage=({data:{id:e,type:r,data:o}})=>{switch(r){case n.LOAD:this.loaded=!0,p(this,t)[e](o);break;case n.MOUNT:case n.UNMOUNT:case n.EXEC:case n.WRITE_FILE:case n.READ_FILE:case n.DELETE_FILE:case n.RENAME:case n.CREATE_DIR:case n.LIST_DIR:case n.DELETE_DIR:p(this,t)[e](o);break;case n.LOG:p(this,s).forEach((e=>e(o)));break;case n.PROGRESS:p(this,i).forEach((e=>e(o)));break;case n.ERROR:p(this,a)[e](o)}delete p(this,t)[e],delete p(this,a)[e]})})),E(this,o,(({type:s,data:i},r=[],o)=>p(this,e)?new Promise(((n,l)=>{const c=w();p(this,e)&&p(this,e).postMessage({id:c,type:s,data:i},r),p(this,t)[c]=n,p(this,a)[c]=l,null==o||o.addEventListener("abort",(()=>{l(new DOMException(`Message # ${c} was aborted`,"AbortError"))}),{once:!0})})):Promise.reject(R))),d(this,"load",((t={},{signal:a}={})=>(p(this,e)||(f(this,e,new Worker(new URL("/assets/worker-e696880d.js",self.location),{type:"module"})),p(this,r).call(this)),p(this,o).call(this,{type:n.LOAD,data:t},void 0,a)))),d(this,"exec",((e,t=-1,{signal:a}={})=>p(this,o).call(this,{type:n.EXEC,data:{args:e,timeout:t}},void 0,a))),d(this,"terminate",(()=>{const s=Object.keys(p(this,a));for(const e of s)p(this,a)[e](y),delete p(this,a)[e],delete p(this,t)[e];p(this,e)&&(p(this,e).terminate(),f(this,e,null),this.loaded=!1)})),d(this,"writeFile",((e,t,{signal:a}={})=>{const s=[];return t instanceof Uint8Array&&s.push(t.buffer),p(this,o).call(this,{type:n.WRITE_FILE,data:{path:e,data:t}},s,a)})),d(this,"mount",((e,t,a)=>p(this,o).call(this,{type:n.MOUNT,data:{fsType:e,options:t,mountPoint:a}},[]))),d(this,"unmount",(e=>p(this,o).call(this,{type:n.UNMOUNT,data:{mountPoint:e}},[]))),d(this,"readFile",((e,t="binary",{signal:a}={})=>p(this,o).call(this,{type:n.READ_FILE,data:{path:e,encoding:t}},void 0,a))),d(this,"deleteFile",((e,{signal:t}={})=>p(this,o).call(this,{type:n.DELETE_FILE,data:{path:e}},void 0,t))),d(this,"rename",((e,t,{signal:a}={})=>p(this,o).call(this,{type:n.RENAME,data:{oldPath:e,newPath:t}},void 0,a))),d(this,"createDir",((e,{signal:t}={})=>p(this,o).call(this,{type:n.CREATE_DIR,data:{path:e}},void 0,t))),d(this,"listDir",((e,{signal:t}={})=>p(this,o).call(this,{type:n.LIST_DIR,data:{path:e}},void 0,t))),d(this,"deleteDir",((e,{signal:t}={})=>p(this,o).call(this,{type:n.DELETE_DIR,data:{path:e}},void 0,t)))}on(e,t){"log"===e?p(this,s).push(t):"progress"===e&&p(this,i).push(t)}off(e,t){"log"===e?f(this,s,p(this,s).filter((e=>e!==t))):"progress"===e&&f(this,i,p(this,i).filter((e=>e!==t)))}}e=new WeakMap,t=new WeakMap,a=new WeakMap,s=new WeakMap,i=new WeakMap,r=new WeakMap,o=new WeakMap;const g=new Error("failed to get response body reader"),v=new Error("failed to complete download"),D=async e=>{let t;if("string"==typeof e)t=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(",")[1]).split("").map((e=>e.charCodeAt(0))):await(await fetch(e)).arrayBuffer();else if(e instanceof URL)t=await(await fetch(e)).arrayBuffer();else{if(!(e instanceof File||e instanceof Blob))return new Uint8Array;t=await(a=e,new Promise(((e,t)=>{const s=new FileReader;s.onload=()=>{const{result:t}=s;t instanceof ArrayBuffer?e(new Uint8Array(t)):e(new Uint8Array)},s.onerror=e=>{var a,s;t(Error(`File could not be read! Code=${(null==(s=null==(a=null==e?void 0:e.target)?void 0:a.error)?void 0:s.code)||-1}`))},s.readAsArrayBuffer(a)})))}var a;return new Uint8Array(t)},I=async(e,t,a=!1,s)=>{const i=a?await(async(e,t)=>{var a;const s=await fetch(e);let i;try{const r=parseInt(s.headers.get("Content-Length")||"-1"),o=null==(a=s.body)?void 0:a.getReader();if(!o)throw g;const n=[];let l=0;for(;;){const{done:a,value:s}=await o.read(),i=s?s.length:0;if(a){if(-1!=r&&r!==l)throw v;t&&t({url:e,total:r,received:l,delta:i,done:a});break}n.push(s),l+=i,t&&t({url:e,total:r,received:l,delta:i,done:a})}const c=new Uint8Array(l);let d=0;for(const e of n)c.set(e,d),d+=e.length;i=c.buffer}catch(r){i=await s.arrayBuffer(),t&&t({url:e,total:i.byteLength,received:i.byteLength,delta:0,done:!0})}return i})(e,s):await(await fetch(e)).arrayBuffer(),r=new Blob([i],{type:t});return URL.createObjectURL(r)},T={class:"video-transform"},_="https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd",b=m(Vue.defineComponent({__name:"VideoTransform",setup(e){const t=Vue.ref(),a=new L;function s(e){Promise.all([I(`${_}/ffmpeg-core.js`,"text/javascript"),I(`${_}/ffmpeg-core.wasm`,"application/wasm")]).then((s=>{const[i,r]=s;a.load({coreURL:i,wasmURL:r}).then((async()=>{let s=await D(e.raw);await a.writeFile("input.wmv",s),await a.exec(["-i","input.wmv","-f","mp4","output.mp4"]);const i=await a.readFile("output.mp4");t.value&&(t.value.src=URL.createObjectURL(new Blob([i],{type:"video/mp4"})))})).catch((e=>{u.error({message:e.message})}))})).catch((e=>{u.error({message:e.message})}))}return(e,a)=>{const i=Vue.resolveComponent("el-button"),r=Vue.resolveComponent("el-upload");return Vue.openBlock(),Vue.createElementBlock("div",T,[Vue.createVNode(r,{ref:"uploadRef",class:"upload-demo",accept:"video/*","auto-upload":!1,"on-change":s},{trigger:Vue.withCtx((()=>[Vue.createVNode(i,{type:"primary"},{default:Vue.withCtx((()=>[Vue.createTextVNode("select file")])),_:1})])),_:1},512),Vue.createElementVNode("video",{class:"video",ref_key:"video",ref:t},null,512)])}}}),[["__scopeId","data-v-8d1a3f20"]]);export{b as default};
