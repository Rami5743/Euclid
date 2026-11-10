(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const Qt=[];let te=null,J=null,ut=null;function P(t,e){Qt.push({pattern:t.split("/").filter(Boolean),factory:e})}function Me(t){te=t}function T(t){location.hash==="#"+t?mt():location.hash=t}function ve(){history.length>1?history.back():T("/")}function Le(){return location.hash.replace(/^#/,"")||"/"}function qe(t){const e=t.split("/").filter(Boolean);for(const n of Qt){if(n.pattern.length!==e.length)continue;const r={};let a=!0;for(let s=0;s<n.pattern.length;s++){const l=n.pattern[s],i=e[s];if(l.startsWith(":"))r[l.slice(1)]=decodeURIComponent(i);else if(l!==i){a=!1;break}}if(a)return{factory:n.factory,params:r}}return null}function mt(){if(!J)return;ut?.destroy?.(),J.replaceChildren();const t=Le(),e=qe(t),n=e?.factory??te;n&&(ut=n(e?.params??{}),J.append(ut.el),J.scrollTop=0)}function Ze(t){J=t,addEventListener("hashchange",mt),mt()}const gt="euclid.";class Ae{read(e){try{const n=localStorage.getItem(gt+e);return n===null?null:JSON.parse(n)}catch{return null}}write(e,n){try{localStorage.setItem(gt+e,JSON.stringify(n))}catch{}}remove(e){try{localStorage.removeItem(gt+e)}catch{}}}const ee=new Ae,ne="profile";function Se(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function $e(t){return t.solvedTopics??=[],t.conquered??=[],t.missions??={},t}let z=$e(ee.read(ne)??Se());const wt=new Set;function N(){return z}function Ee(t){return wt.add(t),()=>wt.delete(t)}function U(t){t(z),ee.write(ne,z);for(const e of wt)e(z);return z}function o(t,e={},...n){const r=document.createElement(t);for(const[a,s]of Object.entries(e))a==="class"?r.className=s:r.setAttribute(a,s);return r.append(...n),r}function I(t,...e){const n=o("button",{class:"stars",type:"button",title:"תפריט המשימות"}),r=()=>{n.replaceChildren(o("span",{class:"star-icon"},"★"),o("span",{},String(N().stars)))};r();const a=Ee(r);n.addEventListener("click",()=>T("/missions"));const s=o("header",{class:"top"});if(t.showBack!==!1){const i=o("button",{class:"back",type:"button","aria-label":"חזרה"},"→");i.addEventListener("click",()=>ve()),s.append(i)}return s.append(o("div",{class:"titles"},o("h1",{},t.title),...t.subtitle?[o("p",{class:"subtitle"},t.subtitle)]:[])),t.showStars!==!1&&s.append(n),{el:o("div",{class:"page"},s,o("main",{class:"content"},...e)),destroy:()=>a()}}const St=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function $t(t){return St.find(e=>e.id===t)}function Et(t){for(const e of St){const n=e.fortresses.find(r=>r.id===t);if(n)return{continent:e,fortress:n}}}function Mt(t){return t.fortresses.filter(e=>!e.home)}const re=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]}];function Fe(t){return re.find(e=>e.id===t)}function ae(t){return re.filter(e=>e.continent===t)}function se(t){let e=t>>>0;const r=()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296};return r.seed=t,r}function Q(t,e,n){return e+t()*(n-e)}const Ce="http://www.w3.org/2000/svg",le=1e3,Ne=300,X=70,et=le-70,C=130;function q(t,e={}){const n=document.createElementNS(Ce,t);for(const[r,a]of Object.entries(e))n.setAttribute(r,a);return n}function Ge(t){const{from:e,to:n,tickStep:r,labelEvery:a}=t,s=q("svg",{class:"board number-line",viewBox:`0 0 ${le} ${Ne}`}),l=q("g",{class:"hints"}),i=q("g",{class:"main"}),c=q("g",{class:"drag"});s.append(l,i,c);const h=n-e,d=g=>X+(g-e)/h*(et-X),f=g=>e+(g-X)/(et-X)*h,u=g=>{const x=Math.round((g-e)/r),k=Math.min(Math.max(x,0),Math.round(h/r));return e+k*r};i.append(q("line",{class:"axis",x1:String(X-40),y1:String(C),x2:String(et+40),y2:String(C)})),i.append(q("path",{class:"axis-head",d:`M${et+40} ${C} l-22 -11 v22 Z`}));for(let g=0;g*r<=h+1e-9;g++){const x=e+g*r,k=d(x),y=g%a===0;if(i.append(q("line",{class:`tick${y?" labelled":""}`,x1:k.toFixed(1),y1:String(C-(y?20:11)),x2:k.toFixed(1),y2:String(C+(y?20:11))})),y){const m=q("text",{class:"tick-label",x:k.toFixed(1),y:String(C+50),"text-anchor":"middle"});m.textContent=String(x),i.append(m)}}const M=g=>{const x=s.getScreenCTM();if(!x)return e;const k=new DOMPoint(g.clientX,g.clientY).matrixTransform(x.inverse());return u(f(k.x))},Z=[];return{el:s,xOf:d,flag(g){const x=d(g),k=q("g",{class:"flag",transform:`translate(${x.toFixed(1)} ${C})`});k.append(q("path",{d:"M0 0 v-96",class:"pole"})),k.append(q("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),i.append(k)},chest(g,x){let k=u(g);const y=q("g",{class:"chest"});y.innerHTML=`
        <ellipse class="chest-shadow" cx="0" cy="34" rx="44" ry="12"/>
        <path d="M-38 34 h76 v-30 h-76 Z" class="chest-body"/>
        <path d="M-38 4 q38 -34 76 0 Z" class="chest-lid"/>
        <rect x="-9" y="0" width="18" height="22" rx="4" class="chest-lock"/>
        <path d="M-38 16 h76" class="chest-band"/>`;const m=q("line",{class:"chest-thread",y1:String(C+6),y2:String(C+78)});c.append(m);const b=()=>{const B=d(k);y.setAttribute("transform",`translate(${B.toFixed(1)} ${C+112})`),m.setAttribute("x1",B.toFixed(1)),m.setAttribute("x2",B.toFixed(1))};b(),c.append(y);let v=!1;const L=B=>{v=!0,y.setPointerCapture(B.pointerId),k=M(B),b(),x(k),B.preventDefault()},E=B=>{v&&(k=M(B),b(),x(k))},F=()=>{v=!1};y.addEventListener("pointerdown",L),y.addEventListener("pointermove",E),y.addEventListener("pointerup",F),y.addEventListener("pointercancel",F);const W=B=>{k=M(B),b(),x(k)};return s.addEventListener("pointerdown",W),Z.push(()=>{y.removeEventListener("pointerdown",L),y.removeEventListener("pointermove",E),y.removeEventListener("pointerup",F),y.removeEventListener("pointercancel",F),s.removeEventListener("pointerdown",W)}),{get:()=>k,set:B=>{k=u(B),b(),x(k)}}},band(g,x){const k=d(Math.min(g,x)),y=d(Math.max(g,x));l.append(q("rect",{class:"hint-band",x:k.toFixed(1),y:String(C-60),width:(y-k).toFixed(1),height:"120",rx:"10"}))},bracket(g,x,k){const y=d(g),m=d(x),b=C+74,v=q("g",{class:"hint-bracket"});v.append(q("path",{d:`M${y.toFixed(1)} ${b-12} v12 H${m.toFixed(1)} v-12`}));const L=q("text",{x:((y+m)/2).toFixed(1),y:String(b+30),"text-anchor":"middle"});L.textContent=k,v.append(L),l.append(v)},count(g,x){const k=g<=x?r:-r,y=Math.round(Math.abs(x-g)/r);for(let m=1;m<=y;m++){const b=g+k*m,v=q("text",{class:"hint-count",x:d(b).toFixed(1),y:String(C-34),"text-anchor":"middle"});v.textContent=String(m),l.append(v)}},arrow(g,x,k,y="plus"){const m=d(g),b=d(x),v=C-56,L=q("g",{class:`line-arrow ${y}`});L.append(q("path",{d:`M${m.toFixed(1)} ${C-6} C${m.toFixed(1)} ${v} ${b.toFixed(1)} ${v} ${b.toFixed(1)} ${C-6}`,fill:"none"}));const E=b>=m?1:-1;L.append(q("path",{class:"head",d:`M${b.toFixed(1)} ${C-6} l${(-12*E).toFixed(1)} -14 l${(24*E).toFixed(1)} 0 Z`}));const F=q("text",{x:((m+b)/2).toFixed(1),y:String(v-8),"text-anchor":"middle"});return F.textContent=k,L.append(F),i.append(L),L},clearHints(){l.replaceChildren()},destroy(){for(const g of Z)g();s.remove()}}}function nt(t){return`⁦${t}⁩`}const Ht=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function Ie(t){const e=se(t),n=Ht[Math.floor(e()*Ht.length)],r=Math.round((n.to-n.from)/n.tickStep),a=[];for(let i=1;i<r;i++)i%n.labelEvery!==0&&a.push(n.from+i*n.tickStep);const s=a[Math.floor(e()*a.length)],l=n.tickStep*n.labelEvery;return{config:{...n,target:s},solution:s,check:i=>i===s,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${nt(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${nt(l)}.`,`כל סימון קטן שווה ${nt(n.tickStep)}.`,`היעד הוא ${nt(s)}.`]}}function Be(t,e){const{from:n,to:r,tickStep:a,labelEvery:s,target:l}=t.config,i=Ge({from:n,to:r,tickStep:a,labelEvery:s});i.flag(l);let c=null;const h=i.chest(n,u=>{c=u,e()});c=null;const d=n+Math.floor((l-n)/(a*s))*a*s,f=d+a*s;return{el:i.el,answer:()=>c,hint(u){u===1&&i.band(d,f),u===2&&i.bracket(n,n+a,String(a)),u===3&&i.count(d,l),u>=4&&h.set(l)},demonstrate(){i.count(d,l),h.set(l)},place:u=>h.set(u),destroy:()=>i.destroy()}}const Te={kind:"treasure-line",generate:Ie,mount:Be};const oe={"treasure-line":Te};function Re(t){return oe[t]}function ie(t){return oe[t]!==void 0}const K=5;function kt(t,e){return Math.max(1,K-t-e)}function Oe(t,e){return Math.max(0,e-t)}const He=.8;function Ft(){return[...St].sort((t,e)=>t.order-e.order)}function pt(t,e){return t.missions[e]??0}function Pe(t,e){return pt(t,e)>0}function je(t,e){return ie(t.kind)&&t.requires.every(n=>Pe(e,n))}function De(t,e){return ae(t.id).filter(n=>je(n,e))}function Ct(t){return ae(t.id).filter(e=>ie(e.kind))}function _e(t,e){return Ct(t).reduce((n,r)=>n+pt(e,r.id),0)}function Ue(t){return Ct(t).length*K}function ce(t,e){const n=Ue(t);return n===0?!1:_e(t,e)>=He*n}function Ve(t,e){return Mt(t).every(n=>e.conquered.includes(n.id))}function Nt(t,e){const n=Ft(),r=n.findIndex(a=>a.id===t.id);return r<=0?!0:ce(n[r-1],e)}function Ke(t){const e=Ft();return e.find(n=>!ce(n,t)||!Ve(n,t))??e[e.length-1]}const lt={width:2e3,height:1e3};function vt(t,e){return{x:(t+180)/360*lt.width,y:(90-e)/180*lt.height}}const We={x:0,y:0,w:lt.width,h:lt.height};function Ye(t,e){const n=vt(t.lon0,t.lat0),r=vt(t.lon1,t.lat1);let a=Math.min(n.x,r.x),s=Math.min(n.y,r.y),l=Math.abs(r.x-n.x),i=Math.abs(r.y-n.y);if(l/i<e){const c=i*e;a-=(c-l)/2,l=c}else{const c=l/e;s-=(c-i)/2,i=c}return{x:a,y:s,w:l,h:i}}function Xe(t,e,n){const r=vt(t,e);return{left:(r.x-n.x)/n.w*100,top:(r.y-n.y)/n.h*100}}function de(t,e,n){const r=o("div",{class:"map-art","aria-hidden":"true"});r.innerHTML=t;const a=r.firstElementChild;a instanceof SVGSVGElement&&(a.setAttribute("viewBox",`${e.x.toFixed(1)} ${e.y.toFixed(1)} ${e.w.toFixed(1)} ${e.h.toFixed(1)}`),a.setAttribute("preserveAspectRatio","xMidYMid slice"));const s=o("div",{class:"map-markers"});for(const l of n){const{left:i,top:c}=Xe(l.lon,l.lat,e),h=l.onClick?"button":"div",d=o(h,{class:`marker ${l.state}`,style:`left:${i.toFixed(2)}%; top:${c.toFixed(2)}%`});h==="button"&&d.setAttribute("type","button");const f=o("span",{class:"marker-icon"});f.innerHTML=l.icon;const u=o("span",{class:"marker-caption"},o("span",{class:"marker-label"},l.label),...l.sub?[o("span",{class:"marker-sub"},l.sub)]:[]);d.append(f,u),l.onClick&&d.addEventListener("click",l.onClick),s.append(d)}return o("div",{class:"map"},r,s)}const fe=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
  <defs>
    <linearGradient id="w-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cfe3df"/><stop offset="100%" stop-color="#a9c6c3"/>
    </linearGradient>
    <linearGradient id="w-land" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e9d6a9"/><stop offset="100%" stop-color="#d2b27c"/>
    </linearGradient>
    <pattern id="w-waves" width="120" height="60" patternUnits="userSpaceOnUse">
      <path d="M0 40 q30 -22 60 0 q30 22 60 0" fill="none" stroke="#8fb3ae" stroke-width="2.4" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="2000" height="1000" fill="url(#w-sea)"/>
  <rect width="2000" height="1000" fill="url(#w-waves)"/>
  <g fill="url(#w-land)" stroke="#9c6f3c" stroke-width="5" stroke-linejoin="round" vector-effect="non-scaling-stroke">
    <path d="M950.0 261.1 L955.6 255.6 L994.4 244.4 L977.8 233.3 L994.4 227.8 L1011.1 216.7 L1022.2 211.1 L1038.9 205.6 L1044.4 194.4 L1055.6 183.3 L1072.2 200.0 L1105.6 200.0 L1116.7 188.9 L1133.3 183.3 L1155.6 172.2 L1166.7 166.7 L1144.4 138.9 L1122.2 133.3 L1138.9 111.1 L1222.2 122.2 L1305.6 111.1 L1388.9 100.0 L1444.4 94.4 L1527.8 72.2 L1611.1 77.8 L1722.2 100.0 L1777.8 94.4 L1888.9 116.7 L1944.4 122.2 L2000.0 138.9 L1972.2 155.6 L1916.7 166.7 L1877.8 183.3 L1833.3 172.2 L1794.4 205.6 L1777.8 222.2 L1750.0 261.1 L1722.2 266.7 L1700.0 288.9 L1677.8 288.9 L1666.7 311.1 L1677.8 333.3 L1650.0 366.7 L1611.1 388.9 L1600.0 416.7 L1588.9 444.4 L1572.2 494.4 L1555.6 466.7 L1544.4 433.3 L1527.8 411.1 L1522.2 383.3 L1500.0 377.8 L1472.2 388.9 L1455.6 405.6 L1444.4 427.8 L1427.8 455.6 L1405.6 411.1 L1388.9 383.3 L1377.8 366.7 L1350.0 361.1 L1316.7 361.1 L1288.9 344.4 L1266.7 333.3 L1311.1 361.1 L1327.8 377.8 L1305.6 400.0 L1277.8 427.8 L1244.4 433.3 L1238.9 405.6 L1216.7 383.3 L1194.4 344.4 L1188.9 327.8 L1200.0 300.0 L1166.7 300.0 L1150.0 294.4 L1127.8 288.9 L1111.1 277.8 L1088.9 288.9 L1100.0 277.8 L1077.8 266.7 L1066.7 255.6 L1044.4 255.6 L1016.7 266.7 L988.9 272.2 L966.7 294.4 L950.0 288.9 Z"/>
    <path d="M905.6 383.3 L911.1 433.3 L927.8 455.6 L977.8 472.2 L1016.7 466.7 L1050.0 477.8 L1050.0 505.6 L1072.2 533.3 L1066.7 594.4 L1083.3 650.0 L1100.0 688.9 L1138.9 688.9 L1183.3 655.6 L1194.4 616.7 L1222.2 588.9 L1227.8 561.1 L1222.2 516.7 L1238.9 494.4 L1266.7 488.9 L1283.3 438.9 L1244.4 433.3 L1211.1 416.7 L1205.6 377.8 L1188.9 344.4 L1177.8 327.8 L1138.9 322.2 L1094.4 327.8 L1055.6 311.1 L1016.7 300.0 L988.9 305.6 L966.7 300.0 L944.4 327.8 L922.2 355.6 Z"/>
    <path d="M66.7 133.3 L111.1 111.1 L277.8 111.1 L388.9 116.7 L472.2 111.1 L527.8 127.8 L555.6 155.6 L566.7 188.9 L638.9 222.2 L666.7 238.9 L633.3 255.6 L611.1 272.2 L583.3 305.6 L550.0 361.1 L527.8 333.3 L500.0 338.9 L461.1 355.6 L461.1 377.8 L488.9 400.0 L511.1 383.3 L533.3 444.4 L566.7 455.6 L555.6 411.1 L500.0 422.2 L472.2 411.1 L416.7 388.9 L388.9 366.7 L366.7 333.3 L333.3 311.1 L311.1 277.8 L305.6 233.3 L266.7 205.6 L222.2 166.7 L166.7 166.7 L111.1 188.9 L77.8 155.6 Z"/>
    <path d="M550.0 455.6 L577.8 438.9 L611.1 433.3 L655.6 444.4 L711.1 472.2 L722.2 500.0 L755.6 511.1 L805.6 527.8 L788.9 572.2 L733.3 638.9 L700.0 688.9 L677.8 716.7 L655.6 727.8 L638.9 750.0 L622.2 788.9 L588.9 794.4 L594.4 750.0 L600.0 711.1 L605.6 666.7 L611.1 611.1 L577.8 577.8 L550.0 533.3 L555.6 500.0 L566.7 488.9 Z"/>
    <path d="M1627.8 622.2 L1633.3 644.4 L1638.9 688.9 L1661.1 688.9 L1694.4 677.8 L1716.7 677.8 L1750.0 694.4 L1766.7 694.4 L1777.8 711.1 L1811.1 716.7 L1833.3 705.6 L1850.0 666.7 L1850.0 638.9 L1811.1 605.6 L1788.9 561.1 L1755.6 566.7 L1722.2 566.7 L1694.4 577.8 L1677.8 600.0 Z"/>
    <path d="M0.0 900.0 L166.7 916.7 L333.3 905.6 L500.0 911.1 L666.7 888.9 L750.0 866.7 L888.9 888.9 L1055.6 883.3 L1222.2 877.8 L1388.9 872.2 L1555.6 866.7 L1722.2 866.7 L1888.9 888.9 L2000.0 900.0 L2000.0 1000.0 L0.0 1000.0 Z"/>
  </g>
  <g fill="url(#w-land)" stroke="#9c6f3c" stroke-width="4" stroke-linejoin="round" vector-effect="non-scaling-stroke">
    <path d="M750.0 166.7 L722.2 138.9 L694.4 111.1 L722.2 83.3 L777.8 55.6 L833.3 50.0 L877.8 94.4 L861.1 122.2 L805.6 155.6 Z"/>
    <path d="M1238.9 566.7 L1277.8 583.3 L1266.7 638.9 L1244.4 622.2 Z"/>
    <path d="M1722.2 322.2 L1750.0 311.1 L1783.3 277.8 L1805.6 255.6 L1788.9 250.0 L1766.7 294.4 L1738.9 316.7 Z"/>
    <path d="M972.2 222.2 L988.9 205.6 L983.3 177.8 L966.7 177.8 L955.6 200.0 L966.7 222.2 Z"/>
    <path d="M944.4 211.1 L966.7 205.6 L966.7 194.4 L950.0 194.4 Z"/>
    <path d="M1961.1 694.4 L1988.9 711.1 L1966.7 727.8 L1944.4 755.6 L1927.8 750.0 L1955.6 722.2 Z"/>
    <path d="M1527.8 472.2 L1583.3 533.3 L1655.6 544.4 L1711.1 550.0 L1727.8 544.4 L1666.7 511.1 L1611.1 500.0 L1555.6 477.8 Z"/>
    <path d="M1666.7 400.0 L1688.9 427.8 L1700.0 455.6 L1677.8 466.7 L1661.1 438.9 Z"/>
    <path d="M1444.4 450.0 L1455.6 461.1 L1450.0 466.7 L1438.9 461.1 Z"/>
    <path d="M866.7 138.9 L900.0 133.3 L922.2 138.9 L894.4 150.0 Z"/>
    <path d="M527.8 377.8 L566.7 372.2 L588.9 388.9 L555.6 388.9 Z"/>
  </g>
  <g fill="none" stroke="#a8803f" stroke-width="4" opacity="0.4" stroke-linecap="round" vector-effect="non-scaling-stroke">
    <path d="M1490 306 l7 -7 l7 7 M1506 310 l7 -7 l7 7"/>
    <path d="M1423 311 l7 -7 l7 7 M1439 315 l7 -7 l7 7"/>
    <path d="M1379 300 l7 -7 l7 7 M1395 304 l7 -7 l7 7"/>
    <path d="M1034 244 l7 -7 l7 7 M1050 248 l7 -7 l7 7"/>
    <path d="M379 278 l7 -7 l7 7 M395 282 l7 -7 l7 7"/>
    <path d="M601 583 l7 -7 l7 7 M617 587 l7 -7 l7 7"/>
    <path d="M1157 528 l7 -7 l7 7 M1173 532 l7 -7 l7 7"/>
    <path d="M1796 639 l7 -7 l7 7 M1812 643 l7 -7 l7 7"/>
  </g>
  <g fill="#7d9b74" opacity="0.5">
    <circle cx="1111" cy="500" r="6"/><circle cx="1120" cy="506" r="5"/><circle cx="1103" cy="505" r="5"/>
    <circle cx="667" cy="528" r="6"/><circle cx="676" cy="534" r="5"/><circle cx="659" cy="533" r="5"/>
    <circle cx="1556" cy="500" r="6"/><circle cx="1565" cy="506" r="5"/><circle cx="1548" cy="505" r="5"/>
    <circle cx="1139" cy="194" r="6"/><circle cx="1148" cy="200" r="5"/><circle cx="1131" cy="199" r="5"/>
    <circle cx="472" cy="222" r="6"/><circle cx="481" cy="228" r="5"/><circle cx="464" cy="227" r="5"/>
    <circle cx="1750" cy="583" r="6"/><circle cx="1759" cy="589" r="5"/><circle cx="1742" cy="588" r="5"/>
  </g>
</svg>
`,Je=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,ze=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function Qe(){const t=N(),e=Ft().map(n=>{const r=Mt(n).length,a=Mt(n).filter(s=>t.conquered.includes(s.id)).length;return Nt(n,t)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${a}/${r}`,state:"continent",icon:Je,onClick:()=>T(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:ze}});return I({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},de(fe,We,e),o("div",{class:"row"},yt("שדרוג הגיבורים","/upgrades"),yt("תפריט המשימות","/missions"),yt("הגיבורים שלי","/setup")))}function yt(t,e){const n=o("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>T(e)),n}const xt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#5d3b1a" stroke-width="2.2" stroke-linejoin="round">
    <path d="M10 56 V30 h8 v-8 h8 v8 h12 v-8 h8 v8 h8 v26 Z" fill="#cfc3ad"/>
    <path d="M10 30 h44" fill="none"/>
    <rect x="27" y="40" width="10" height="16" fill="#8a5a2b"/>
    <rect x="16" y="36" width="7" height="8" fill="#8a5a2b"/>
    <rect x="41" y="36" width="7" height="8" fill="#8a5a2b"/>
  </g>
  <g stroke="#5d3b1a" stroke-width="2">
    <path d="M32 22 V6" fill="none"/>
    <path d="M32 7 l16 5 -16 5 Z" fill="currentColor"/>
  </g>
</svg>
`,tn=5/3;function en(t){const e=$t(t.id??"");if(!e)return I({title:"יבשת לא נמצאה"},o("p",{},"חזרה למפת העולם."));const n=N();if(!Nt(e,n)){const a=o("button",{class:"btn primary",type:"button"},"למפת העולם");return a.addEventListener("click",()=>T("/")),I({title:e.name,subtitle:e.domain},o("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),o("div",{class:"row"},a))}const r=e.fortresses.map(a=>a.home?{lon:a.lon,lat:a.lat,label:a.name,sub:"הבית שלך",state:"player",icon:xt}:n.conquered.includes(a.id)?{lon:a.lon,lat:a.lat,label:a.name,sub:"נכבש",state:"player",icon:xt}:{lon:a.lon,lat:a.lat,label:a.name,sub:a.starsNeeded>0?`${a.level} · ★ ${a.starsNeeded}`:String(a.level),state:"enemy",icon:xt,onClick:()=>T(`/battle/${a.id}`)});return I({title:e.name,subtitle:e.domain},de(fe,Ye(e.view,tn),r),o("div",{class:"row"},Pt("שדרוג הגיבורים","/upgrades"),Pt("תפריט המשימות",`/missions/${e.id}`)))}function Pt(t,e){const n=o("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>T(e)),n}function D(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}function ot(t,e){return t.units.filter(n=>n.alive&&n.side===e)}function nn(t,e){return t.units.filter(n=>n.alive&&n.side!==e)}function _(t,e){return e===null?void 0:t.units.find(n=>n.id===e)}function Lt(t,e){let n=null,r=1/0;for(const a of e){const s=D(t,a);(s<r-1e-9||Math.abs(s-r)<=1e-9&&n&&a.id<n.id)&&(n=a,r=s)}return n}const rn=2.2;function an(t,e){const n=nn(t,e.side);if(n.length===0)return{kind:"idle"};const r=Lt(e,n.filter(l=>l.stats.range<=1.5));if(e.stats.range>2&&r&&D(e,r)<rn){const l=e.x-r.x,i=e.y-r.y,c=Math.hypot(l,i)||1;return{kind:"move",x:e.x+l/c*3,y:e.y+i/c*3}}const s=Lt(e,n);return s?{kind:"attack",targetId:s.id}:{kind:"idle"}}const qt=1/30,jt=50;function sn(t,e){return t*jt/(jt+e)}const Dt=.3,he=.45,pe={arrow:14,fire:9,heal:12},ln=.85,on=.15;function cn(t,e,n,r){const a=e==="player"?1:-1,s=e==="player"?3:n-3,l=r/2,i=[0,-1.6,1.6];return t.map((c,h)=>({x:s+(c.stats.range<=1.5?2*a:0),y:l+(i[h]??0)}))}function dn(t){const e={width:t.arenaWidth??24,height:t.arenaHeight??14},n=se(t.seed),r={time:0,arena:e,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:t.manual??null},a=(s,l)=>{const i=cn(s,l,e.width,e.height);s.forEach((c,h)=>{const d=i[h];r.units.push({id:`${l}-${c.cls}-${h}`,side:l,cls:c.cls,name:c.name,gender:c.gender,x:d.x+Q(n,-.6,.6),y:d.y+Q(n,-.6,.6),hp:c.stats.hp,maxHp:c.stats.hp,stats:c.stats,order:l===r.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:Q(n,0,1/c.stats.attackRate),healCooldown:Q(n,0,c.stats.healRate??3),facing:l==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return a(t.player,"player"),a(t.enemy,"enemy"),r}function bt(t,e,n){const r=_(t,e);r?.alive&&(r.order=n)}function _t(t,e){return e.side===t.manual?{kind:"hold"}:{kind:"auto"}}function Ut(t,e){const n=_(t,e);if(!n?.alive||!n.stats.healing)return null;let r=null;for(const a of ot(t,n.side))a.id===n.id||a.hp>=a.maxHp||D(n,a)>n.stats.range||(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);return r}function fn(t,e){const n=_(t,e);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function hn(t,e,n){const r=_(t,e),a=_(t,n),s=r?.stats.healing;return!r?.alive||!s||r.healCooldown>0||!a?.alive||a.side!==r.side||a.id===r.id||D(r,a)>r.stats.range?!1:(ue(t,r,a,s),!0)}function ue(t,e,n,r){t.projectiles.push({id:`p${t.nextId++}`,kind:"heal",side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:r,speed:pe.heal}),e.healCooldown=e.stats.healRate??3}function pn(t,e=qt){if(!t.winner){t.time+=e,un(t,e);for(const n of t.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-e),n.healCooldown=Math.max(0,n.healCooldown-e),gn(t,n),kn(t,n,e));bn(t),mn(t),wn(t),t.events.length>0&&(t.events=t.events.filter(n=>t.time-n.time<2))}}function un(t,e){const n=[];for(const r of t.projectiles){const a=_(t,r.targetId);if(!a||!a.alive)continue;const s=a.x-r.x,l=a.y-r.y,i=Math.hypot(s,l),c=r.speed*e;if(i<=c){if(r.kind==="heal"){const h=Math.min(a.maxHp-a.hp,r.amount);a.hp+=h,t.events.push({kind:"heal",unitId:a.id,amount:h,time:t.time})}else ge(t,a,r.amount);continue}r.x+=s/i*c,r.y+=l/i*c,r.angle=Math.atan2(l,s),n.push(r)}t.projectiles=n}function gn(t,e){if(e.side===t.manual)return;const n=e.stats.healing;if(!n||e.healCooldown>0)return;const r=ot(t,e.side).filter(s=>s.id!==e.id&&s.hp<s.maxHp*ln&&D(e,s)<=e.stats.range);let a=null;for(const s of r)(!a||s.hp/s.maxHp<a.hp/a.maxHp)&&(a=s);a&&ue(t,e,a,n)}function kn(t,e,n){const r=yn(t,e);if(r.kind==="idle"){e.targetId=null;return}if(r.kind==="move"){e.targetId=null,Vt(e,r.x,r.y,n);return}const a=_(t,r.targetId);if(!a||!a.alive){e.targetId=null;return}if(e.targetId=a.id,D(e,a)>e.stats.range){Vt(e,a.x,a.y,n);return}e.facing=a.x>=e.x?1:-1,e.cooldown<=0&&xn(t,e,a)}function yn(t,e){const n=e.order;if(n.kind==="move")if(D(e,n)<=on)e.order=_t(t,e);else return{kind:"move",x:n.x,y:n.y};if(e.order.kind==="attack"){const r=_(t,e.order.targetId);if(r?.alive)return{kind:"attack",targetId:r.id};e.order=_t(t,e)}if(e.order.kind==="hold"){const r=t.units.filter(s=>s.alive&&s.side!==e.side&&D(e,s)<=e.stats.range),a=Lt(e,r);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}return an(t,e)}function Vt(t,e,n,r){const a=e-t.x,s=n-t.y,l=Math.hypot(a,s);if(l<1e-6)return;const i=Math.min(l,t.stats.speed*r);t.x+=a/l*i,t.y+=s/l*i,Math.abs(a)>1e-6&&(t.facing=a>0?1:-1)}function xn(t,e,n){const r=sn(e.stats.attack,n.stats.defense)*(1+Q(t.rng,-Dt,Dt));if(e.cooldown=1/e.stats.attackRate,e.lastAttackAt=t.time,e.stats.range<=1.5){ge(t,n,r);return}const a=e.cls==="mage"?"fire":"arrow";t.projectiles.push({id:`p${t.nextId++}`,kind:a,side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:r,speed:pe[a]})}function ge(t,e,n){e.hp-=n,e.lastHitAt=t.time,t.events.push({kind:"damage",unitId:e.id,amount:n,time:t.time}),e.hp<=0&&(e.hp=0,e.alive=!1,e.targetId=null)}function bn(t){const e=t.units.filter(r=>r.alive),n=he*2;for(let r=0;r<e.length;r++)for(let a=r+1;a<e.length;a++){const s=e[r],l=e[a],i=l.x-s.x,c=l.y-s.y,h=Math.hypot(i,c);if(h>=n)continue;const d=(n-h)/2,f=h<1e-6?1:i/h,u=h<1e-6?0:c/h;s.x-=f*d,s.y-=u*d,l.x+=f*d,l.y+=u*d}}function mn(t){const e=he;for(const n of t.units)n.x=Math.min(t.arena.width-e,Math.max(e,n.x)),n.y=Math.min(t.arena.height-e,Math.max(e,n.y))}function wn(t){const e=ot(t,"player").length,n=ot(t,"enemy").length;e===0?t.winner="enemy":n===0&&(t.winner="player")}const tt={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function it(t,e){return tt[t][e]}const ct={warrior:tt.warrior.m,archer:tt.archer.m,mage:tt.mage.m},Gt={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},Mn={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},It={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Bt=[2,3,5,8,12,17,23,30],ke=Bt.length,vn=.08;function Ln(t){return t>=ke?null:Bt[t]}function ye(t){return 1+vn*t}const Kt=8;function qn(t,e,n){return t*ye(n)}function Zn(t){let e=0;for(let n=0;n<Math.min(t,ke);n++)e+=Bt[n];return e}const xe=["warrior","archer","mage"],An={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Sn=["hp","attack","defense"];function $n(t,e){const r={...Gt[t]};for(const a of It[t]){const s=e[a]??0;if(s<=0)continue;const l=r[a];typeof l=="number"&&(r[a]=l*ye(s))}return r}function En(t){return xe.map(e=>{const n=t.heroes[e];return{cls:e,name:n.name||ct[e],gender:n.gender,stats:$n(e,n.levels)}})}function Fn(t){return xe.map(e=>{const n={...Gt[e]};for(const r of Sn){const a=n[r];typeof a=="number"&&(n[r]=a*t)}return{cls:e,name:An[e],gender:"m",stats:n}})}function Cn(t,e,n){const r=Et(t);return!r||r.fortress.home?null:{player:En(e),enemy:Fn(r.fortress.difficulty),seed:n,manual:"player"}}let at=null;function Nn(t){at=t}function Gn(t){return at&&at.fortressId===t?at:null}const O={x:64,y:84},H={x:56,y:58},j={x:77,y:56},dt={x:66,y:50},ft={x:60,y:52},Wt={x:100,y:70},ht={x:99,y:51};function In(t){const e=n=>t.querySelector(`.part-${n}`);return{cloak:e("cloak"),legBack:e("leg-back"),legFront:e("leg-front"),armBack:e("arm-back"),armFront:e("arm-front"),body:e("body"),head:e("head"),robe:e("robe"),quiver:e("quiver"),arrow:e("arrow"),bow:e("bow"),staff:e("staff"),sword:e("sword"),swoosh:e("swoosh"),orb:e("orb"),orbHalo:e("orb-halo")}}function A(t,e,n,r,a=""){t&&t.setAttribute("transform",`rotate(${e.toFixed(2)} ${n} ${r})${a}`)}function Bn(t){return t<0||t>.42?0:t<.13?-Math.sin(t/.13*(Math.PI/2)):Math.cos((t-.13)/.29*(Math.PI/2))}function Tn(t,e){const{phase:n,stride:r,time:a}=e,s=Math.sin(n)*r,l=Math.sin(n*2)*r,i=Math.sin(a*2.1)*(1-r),c=Bn(e.sinceAttack);A(t.legBack,s*26,O.x,O.y),A(t.legFront,-s*26,O.x,O.y),A(t.cloak,s*9+i*1.6,ft.x,ft.y),A(t.robe,s*4+i*1.2,O.x,O.y+20),A(t.quiver,s*6,H.x,H.y);const h=-Math.abs(l)*3;switch(t.body&&t.body.setAttribute("transform",`translate(0 ${h.toFixed(2)}) rotate(${(s*2+i*.9).toFixed(2)} ${O.x} ${O.y})`),t.head&&t.head.setAttribute("transform",`translate(0 ${(h*1.15).toFixed(2)}) rotate(${(-s*2.5+i*1.4).toFixed(2)} ${dt.x} ${dt.y})`),e.cls){case"warrior":{A(t.armBack,-s*14,H.x,H.y),A(t.armFront,s*10+c*60,j.x,j.y),A(t.sword,c*42,ht.x,ht.y),st(t.swoosh,e.sinceAttack<.42?Math.max(0,c)*.9:0);break}case"archer":{const d=e.sinceAttack<.42?c:-.35;if(A(t.armFront,s*5,j.x,j.y),A(t.armBack,-s*8-d*16,H.x,H.y),t.arrow){const f=e.sinceAttack>=0&&e.sinceAttack<.5;t.arrow.style.opacity=f?"0":"1",t.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}t.bow&&A(t.bow,d*4,104,68),st(t.swoosh,e.sinceAttack>=0&&e.sinceAttack<.22?1-e.sinceAttack/.22:0);break}case"mage":{A(t.armBack,-s*10,H.x,H.y),A(t.armFront,s*6+c*26,j.x,j.y),A(t.staff,c*18,Wt.x,Wt.y);const d=e.sinceAttack>=0&&e.sinceAttack<.5?1+.9*Math.max(0,1-e.sinceAttack/.5):1+.08*Math.sin(a*4);t.orb&&Yt(t.orb,d,100,20),t.orbHalo&&Yt(t.orbHalo,d*1.1,100,20);const f=e.sinceAttack>=0&&e.sinceAttack<.45;st(t.swoosh,f?1-e.sinceAttack/.45:0),t.swoosh&&f&&t.swoosh.setAttribute("transform",`rotate(${(e.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function st(t,e){t&&(t.style.opacity=e.toFixed(2))}function Yt(t,e,n,r){t.setAttribute("transform",`translate(${(n*(1-e)).toFixed(2)} ${(r*(1-e)).toFixed(2)}) scale(${e.toFixed(3)})`)}function Rn(t,e){const n=Math.min(1,e),r=1-Math.pow(1-n,3);A(t.legBack,r*30,O.x,O.y),A(t.legFront,-r*20,O.x,O.y),A(t.armBack,r*40,H.x,H.y),A(t.armFront,-r*60,j.x,j.y),A(t.sword,r*50,ht.x,ht.y),st(t.swoosh,0),A(t.head,r*18,dt.x,dt.y),A(t.cloak,r*12,ft.x,ft.y)}const On=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="ar-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7f9a52"/>
      <stop offset="45%" stop-color="#8fab5d"/>
      <stop offset="100%" stop-color="#6f8a47"/>
    </linearGradient>
    <linearGradient id="ar-road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b79a6a"/><stop offset="100%" stop-color="#9c7f52"/>
    </linearGradient>
    <linearGradient id="ar-stone" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b9b3a6"/><stop offset="55%" stop-color="#9d968a"/><stop offset="100%" stop-color="#7d766c"/>
    </linearGradient>
    <linearGradient id="ar-stone-dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8e887c"/><stop offset="100%" stop-color="#6b6559"/>
    </linearGradient>
    <linearGradient id="ar-canvas" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f1e6cd"/><stop offset="60%" stop-color="#d8c6a2"/><stop offset="100%" stop-color="#b7a382"/>
    </linearGradient>
    <linearGradient id="ar-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6fa6bd"/><stop offset="100%" stop-color="#4d7f98"/>
    </linearGradient>
    <radialGradient id="ar-leaf">
      <stop offset="0%" stop-color="#5f8f4a"/><stop offset="70%" stop-color="#47713a"/><stop offset="100%" stop-color="#355a2c"/>
    </radialGradient>
    <radialGradient id="ar-fire">
      <stop offset="0%" stop-color="#fff0c2"/><stop offset="45%" stop-color="#f3a63a"/><stop offset="100%" stop-color="rgba(217,72,15,0)"/>
    </radialGradient>
    <radialGradient id="ar-shadow">
      <stop offset="0%" stop-color="rgba(30,36,20,0.42)"/><stop offset="100%" stop-color="rgba(30,36,20,0)"/>
    </radialGradient>
    <pattern id="ar-blades" width="160" height="150" patternUnits="userSpaceOnUse">
      <path d="M24 118 q6 -24 13 -34 M34 120 q3 -18 11 -27 M104 138 q6 -22 13 -32 M114 140 q3 -16 11 -25
               M66 72 q5 -18 11 -26 M140 60 q5 -18 11 -26"
            fill="none" stroke="#6b8a44" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
    </pattern>
  </defs>

  <rect width="2400" height="1400" fill="url(#ar-ground)"/>
  <rect width="2400" height="1400" fill="url(#ar-blades)"/>

  <!-- distant hills -->
  <g>
    <path d="M-40 150 q180 -110 400 -40 q180 60 360 -10 q220 -86 460 -16 q240 68 480 -14 q220 -76 420 -6 q140 44 360 10 L2440 0 L-40 0 Z"
          fill="#6c8a48" opacity="0.55"/>
    <path d="M-40 196 q200 -90 420 -26 q200 58 380 -4 q230 -80 470 -10 q250 70 500 -10 q230 -70 430 0 q130 42 320 12 L2440 0 L-40 0 Z"
          fill="#7b9a52" opacity="0.5"/>
  </g>

  <!-- ground patches -->
  <g opacity="0.55">
    <ellipse cx="520" cy="300" rx="330" ry="110" fill="#9cb768"/>
    <ellipse cx="1500" cy="1140" rx="470" ry="140" fill="#9cb768"/>
    <ellipse cx="2000" cy="420" rx="280" ry="100" fill="#7d9a4e"/>
    <ellipse cx="900" cy="900" rx="400" ry="130" fill="#85a254"/>
    <ellipse cx="1750" cy="760" rx="260" ry="90" fill="#9cb768"/>
  </g>

  <!-- road -->
  <path d="M-40 690 C560 614 900 786 1400 714 C1720 668 1960 742 2440 694"
        fill="none" stroke="url(#ar-road)" stroke-width="150" stroke-linecap="round"/>
  <path d="M-40 690 C560 614 900 786 1400 714 C1720 668 1960 742 2440 694"
        fill="none" stroke="#8c7046" stroke-width="150" stroke-linecap="round" opacity="0.25"
        stroke-dasharray="4 70"/>
  <g fill="#8d8577" opacity="0.8">
    <ellipse cx="300" cy="648" rx="17" ry="10"/><ellipse cx="760" cy="706" rx="14" ry="8"/>
    <ellipse cx="1180" cy="752" rx="19" ry="11"/><ellipse cx="1660" cy="690" rx="15" ry="9"/>
    <ellipse cx="2050" cy="716" rx="18" ry="10"/>
  </g>

  <!-- pond -->
  <g>
    <ellipse cx="1240" cy="1250" rx="330" ry="110" fill="#8a9a5e"/>
    <ellipse cx="1240" cy="1246" rx="304" ry="94" fill="url(#ar-water)"/>
    <g fill="none" stroke="#bfe0ea" stroke-width="5" opacity="0.6">
      <path class="ripple" d="M1100 1224 q40 -16 80 0"/>
      <path class="ripple slow" d="M1240 1272 q40 -16 80 0"/>
      <path class="ripple fast" d="M1310 1206 q34 -14 68 0"/>
    </g>
  </g>

  <!-- rocks -->
  <g>
    <ellipse cx="1700" cy="300" rx="64" ry="24" fill="url(#ar-shadow)"/>
    <path d="M1650 300 l26 -46 44 -10 36 30 -10 30 Z" fill="url(#ar-stone)" stroke="#5f5a50" stroke-width="5" stroke-linejoin="round"/>
    <path d="M1676 254 l20 26 44 -6" fill="none" stroke="#cfc9bd" stroke-width="4" opacity="0.7"/>
    <ellipse cx="420" cy="1060" rx="48" ry="18" fill="url(#ar-shadow)"/>
    <path d="M384 1058 l20 -34 34 -6 26 22 -8 22 Z" fill="url(#ar-stone)" stroke="#5f5a50" stroke-width="4" stroke-linejoin="round"/>
  </g>

  <!-- trees -->
  <g>
    <g transform="translate(300 330)">
      <ellipse cx="6" cy="18" rx="96" ry="34" fill="url(#ar-shadow)"/>
      <path d="M-14 20 q10 -60 0 -104 h30 q-10 44 0 104 Z" fill="#6b4a26" stroke="#4a331a" stroke-width="5"/>
      <g class="canopy">
        <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
        <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
        <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
        <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
      </g>
    </g>
    <g transform="translate(1180 230) scale(0.8)">
      <ellipse cx="6" cy="18" rx="96" ry="34" fill="url(#ar-shadow)"/>
      <path d="M-14 20 q10 -60 0 -104 h30 q-10 44 0 104 Z" fill="#6b4a26" stroke="#4a331a" stroke-width="6"/>
      <g class="canopy slow">
        <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
      </g>
    </g>
    <g transform="translate(2140 1120) scale(0.9)">
      <ellipse cx="6" cy="18" rx="96" ry="34" fill="url(#ar-shadow)"/>
      <path d="M-14 20 q10 -60 0 -104 h30 q-10 44 0 104 Z" fill="#6b4a26" stroke="#4a331a" stroke-width="6"/>
      <g class="canopy slow">
        <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
        <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
      </g>
    </g>
  </g>

  <!-- flowers -->
  <g>
    <g fill="#e8d75e" stroke="#b9a53c" stroke-width="3">
      <circle cx="1020" cy="1080" r="9"/><circle cx="1048" cy="1104" r="8"/><circle cx="996" cy="1110" r="8"/>
      <circle cx="1880" cy="980" r="9"/><circle cx="1908" cy="1004" r="8"/>
    </g>
    <g fill="#e07aa0" stroke="#b05078" stroke-width="3">
      <circle cx="560" cy="430" r="9"/><circle cx="588" cy="452" r="8"/>
      <circle cx="1560" cy="1080" r="9"/><circle cx="1590" cy="1100" r="8"/>
    </g>
  </g>

  <!-- bushes -->
  <g>
    <g transform="translate(980 520)">
      <ellipse cx="0" cy="26" rx="62" ry="20" fill="url(#ar-shadow)"/>
      <circle cx="-22" cy="0" r="30" fill="#4f7c3c" stroke="#2e4f26" stroke-width="5"/>
      <circle cx="18" cy="-6" r="34" fill="#55873f" stroke="#2e4f26" stroke-width="5"/>
      <circle cx="2" cy="16" r="26" fill="#4a763a" stroke="#2e4f26" stroke-width="5"/>
      <circle cx="26" cy="-18" r="7" fill="#e05a5a" stroke="#9c3030" stroke-width="3"/>
      <circle cx="-30" cy="-10" r="6" fill="#e05a5a" stroke="#9c3030" stroke-width="3"/>
    </g>
    <g transform="translate(1680 1060) scale(0.85)">
      <ellipse cx="0" cy="26" rx="62" ry="20" fill="url(#ar-shadow)"/>
      <circle cx="-22" cy="0" r="30" fill="#4f7c3c" stroke="#2e4f26" stroke-width="6"/>
      <circle cx="18" cy="-6" r="34" fill="#55873f" stroke="#2e4f26" stroke-width="6"/>
      <circle cx="2" cy="16" r="26" fill="#4a763a" stroke="#2e4f26" stroke-width="6"/>
    </g>
    <g transform="translate(420 760) scale(0.7)">
      <ellipse cx="0" cy="26" rx="62" ry="20" fill="url(#ar-shadow)"/>
      <circle cx="-22" cy="0" r="30" fill="#4f7c3c" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="18" cy="-6" r="34" fill="#55873f" stroke="#2e4f26" stroke-width="7"/>
    </g>
  </g>

  <!-- fence and practice target by the camp -->
  <g stroke="#4a331a" stroke-width="5" stroke-linecap="round">
    <g>
      <path d="M60 1240 h420" stroke="#8a5f34" stroke-width="12"/>
      <path d="M60 1290 h420" stroke="#8a5f34" stroke-width="12"/>
      <path d="M90 1200 v120 M230 1200 v120 M370 1200 v120 M470 1200 v120" stroke="#6f4a24" stroke-width="14"/>
    </g>
    <g transform="translate(880 980)">
      <path d="M0 60 v-48" stroke="#6f4a24" stroke-width="12"/>
      <circle cx="0" cy="-20" r="34" fill="#efe3c8" stroke="#6f4a24" stroke-width="6"/>
      <circle cx="0" cy="-20" r="21" fill="none" stroke="#b23b2e" stroke-width="6"/>
      <circle cx="0" cy="-20" r="8" fill="#b23b2e" stroke="none"/>
      <path d="M-26 -34 l34 10 M-20 -6 l30 -6" stroke="#5d4b3a" stroke-width="5"/>
    </g>
  </g>

  <!-- supply crates and a cart by the road -->
  <g>
    <g transform="translate(1480 560)">
      <ellipse cx="0" cy="40" rx="66" ry="20" fill="url(#ar-shadow)"/>
      <rect x="-50" y="-16" width="56" height="56" rx="6" fill="#a97b45" stroke="#4a331a" stroke-width="6"/>
      <path d="M-50 12 h56 M-22 -16 v56" stroke="#7a5326" stroke-width="5"/>
      <rect x="6" y="2" width="42" height="38" rx="5" fill="#8a5f34" stroke="#4a331a" stroke-width="6"/>
    </g>
    <g transform="translate(1930 1180) scale(0.9)">
      <ellipse cx="0" cy="34" rx="90" ry="22" fill="url(#ar-shadow)"/>
      <path d="M-70 20 h140 l-14 -46 h-112 Z" fill="#a97b45" stroke="#4a331a" stroke-width="6"/>
      <circle cx="-44" cy="26" r="24" fill="#8a5f34" stroke="#4a331a" stroke-width="6"/>
      <circle cx="44" cy="26" r="24" fill="#8a5f34" stroke="#4a331a" stroke-width="6"/>
      <path d="M-44 26 l16 -16 M44 26 l16 -16" stroke="#6f4a24" stroke-width="5"/>
    </g>
  </g>

  <!-- the enemy keep -->
  <g>
    <ellipse cx="2200" cy="1180" rx="300" ry="70" fill="url(#ar-shadow)"/>
    <!-- curtain wall -->
    <path d="M2060 1170 V640 h300 v530 Z" fill="url(#ar-stone)" stroke="#55504a" stroke-width="7" stroke-linejoin="round"/>
    <g stroke="#7d766c" stroke-width="5" opacity="0.85">
      <path d="M2060 740 h300 M2060 840 h300 M2060 940 h300 M2060 1040 h300"/>
      <path d="M2135 640 v100 M2210 740 v100 M2285 640 v100 M2135 840 v100 M2285 840 v100 M2210 940 v100 M2135 1040 v100 M2285 1040 v100"/>
    </g>
    <!-- battlements -->
    <g fill="url(#ar-stone-dark)" stroke="#55504a" stroke-width="6" stroke-linejoin="round">
      <path d="M2050 640 h70 v-60 h-70 Z"/><path d="M2160 640 h70 v-60 h-70 Z"/><path d="M2270 640 h70 v-60 h-70 Z"/>
    </g>
    <!-- gate -->
    <path d="M2140 1170 v-180 a70 70 0 0 1 140 0 v180 Z" fill="#6f4a24" stroke="#45290f" stroke-width="7"/>
    <g stroke="#3c2a16" stroke-width="6" opacity="0.8">
      <path d="M2210 1170 V930"/><path d="M2140 1050 h140"/><path d="M2140 1110 h140"/>
    </g>
    <g fill="#c9c2b4" stroke="#55504a" stroke-width="4">
      <circle cx="2168" cy="1082" r="9"/><circle cx="2252" cy="1082" r="9"/>
    </g>
    <g stroke="#3a3228" stroke-width="5" opacity="0.65">
      <path d="M2168 960 v210 M2210 940 v230 M2252 960 v210"/>
      <path d="M2140 1000 h140 M2140 1120 h140"/>
    </g>
    <g fill="#6f8a47" opacity="0.5">
      <path d="M2060 980 q24 -16 44 2 q-20 14 -44 -2 Z"/>
      <path d="M2330 860 q26 -14 46 4 q-22 14 -46 -4 Z"/>
    </g>
    <!-- towers -->
    <g>
      <path d="M1990 1170 V560 h130 v610 Z" fill="url(#ar-stone)" stroke="#55504a" stroke-width="7" stroke-linejoin="round"/>
      <path d="M1980 560 h150 l-75 -120 Z" fill="#9c4b3a" stroke="#5f2d22" stroke-width="7" stroke-linejoin="round"/>
      <rect x="2026" y="700" width="58" height="84" rx="28" fill="#3f3930" stroke="#55504a" stroke-width="5"/>
      <g stroke="#55504a" stroke-width="5">
        <path d="M2040 850 v46 M2070 850 v46"/>
      </g>
      <path d="M2055 440 v-70" stroke="#5a4a32" stroke-width="8"/>
      <path class="banner" d="M2055 372 l92 28 -92 28 Z" fill="#b23b2e" stroke="#6b3a2a" stroke-width="6"/>
    </g>
    <g>
      <path d="M2300 1170 V600 h120 v570 Z" fill="url(#ar-stone)" stroke="#55504a" stroke-width="7" stroke-linejoin="round"/>
      <path d="M2290 600 h140 l-70 -112 Z" fill="#9c4b3a" stroke="#5f2d22" stroke-width="7" stroke-linejoin="round"/>
      <rect x="2332" y="730" width="54" height="80" rx="26" fill="#3f3930" stroke="#55504a" stroke-width="5"/>
    </g>
    <!-- torches -->
    <g>
      <circle cx="2104" cy="900" r="34" fill="url(#ar-fire)"/>
      <path class="flame" d="M2104 918 q-14 -24 0 -44 q14 20 0 44 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="3"/>
      <circle cx="2316" cy="900" r="34" fill="url(#ar-fire)"/>
      <path class="flame slow" d="M2316 918 q-14 -24 0 -44 q14 20 0 44 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="3"/>
    </g>
  </g>

  <!-- the player's camp -->
  <g>
    <ellipse cx="220" cy="1180" rx="250" ry="62" fill="url(#ar-shadow)"/>
    <g>
      <path d="M40 1170 L180 800 L320 1170 Z" fill="url(#ar-canvas)" stroke="#6b5847" stroke-width="7" stroke-linejoin="round"/>
      <path d="M180 800 L320 1170 L250 1170 Z" fill="#b19a76" opacity="0.5"/>
      <path d="M130 1170 v-150 a52 52 0 0 1 104 0 v150 Z" fill="#6f4a24" stroke="#45290f" stroke-width="6"/>
      <path d="M180 800 v-96" stroke="#5a4a32" stroke-width="9"/>
      <path class="banner slow" d="M180 706 l96 30 -96 30 Z" fill="#2f6fb3" stroke="#23527f" stroke-width="6"/>
    </g>
    <g transform="translate(236 1134) scale(0.56)">
      <path d="M40 110 L180 -260 L320 110 Z" fill="url(#ar-canvas)" stroke="#6b5847" stroke-width="9" stroke-linejoin="round"/>
      <path d="M180 -260 L320 110 L250 110 Z" fill="#b19a76" opacity="0.5"/>
    </g>
    <!-- campfire -->
    <g transform="translate(470 1222)">
      <ellipse cx="0" cy="26" rx="78" ry="26" fill="url(#ar-shadow)"/>
      <g stroke="#5a4028" stroke-width="12" stroke-linecap="round">
        <path d="M-46 16 L34 -10"/><path d="M46 16 L-34 -10"/>
      </g>
      <circle cx="0" cy="-14" r="54" fill="url(#ar-fire)"/>
      <path class="flame" d="M0 10 q-26 -40 0 -74 q26 34 0 74 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="4"/>
      <path class="flame fast" d="M0 2 q-12 -22 0 -40 q12 18 0 40 Z" fill="#fff0c2"/>
    </g>
    <!-- barrels -->
    <g transform="translate(660 1300)">
      <ellipse cx="0" cy="14" rx="44" ry="14" fill="url(#ar-shadow)"/>
      <rect x="-34" y="-60" width="68" height="74" rx="18" fill="#8a5f34" stroke="#4a331a" stroke-width="6"/>
      <path d="M-34 -32 h68 M-34 -6 h68" stroke="#d6c08a" stroke-width="6"/>
    </g>
  </g>

  <!-- birds -->
  <g class="birds" fill="none" stroke="#4a4536" stroke-width="5" stroke-linecap="round" opacity="0.65">
    <path d="M0 150 q16 -14 32 0 q16 -14 32 0"/>
    <path d="M70 196 q13 -11 26 0 q13 -11 26 0"/>
    <path d="M30 240 q11 -9 22 0 q11 -9 22 0"/>
  </g>

  <!-- ambient edges -->
  <rect width="2400" height="1400" fill="none" stroke="rgba(40,46,28,0.18)" stroke-width="60"/>
</svg>
`,Hn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="w-steel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2f6fb"/><stop offset="45%" stop-color="#bcc6d3"/><stop offset="100%" stop-color="#78828f"/>
    </linearGradient>
    <linearGradient id="w-blade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#d3dbe6"/><stop offset="100%" stop-color="#8b94a2"/>
    </linearGradient>
    <linearGradient id="w-leather" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a5f34"/><stop offset="100%" stop-color="#52361b"/>
    </linearGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-cloak">
      <path d="M50 52 q-20 34 -14 66 q16 6 34 2 q-10 -34 -4 -64 Z" fill="currentColor"/>
      <path d="M50 52 q-20 34 -14 66 q6 2 12 2 q-6 -36 6 -66 Z" fill="rgba(0,0,0,0.33)" stroke="none"/>
    </g>

    <g class="part-leg-back">
      <path d="M52 82 h14 v30 h-14 Z" fill="#6a4a2a"/>
      <path d="M48 110 h20 q4 5 2 11 h-24 q-2 -7 2 -11 Z" fill="url(#w-leather)"/>
      <path d="M52 94 h14" stroke="#4a331a" stroke-width="2.6"/>
    </g>
    <g class="part-leg-front">
      <path d="M66 82 h14 v30 h-14 Z" fill="#7d5932"/>
      <path d="M64 110 h20 q4 5 2 11 h-24 q-2 -7 2 -11 Z" fill="url(#w-leather)"/>
      <path d="M66 94 h14" stroke="#4a331a" stroke-width="2.6"/>
    </g>

    <g class="part-arm-back">
      <path d="M52 58 q-14 10 -14 24 q10 8 20 2 q-6 -14 0 -24 Z" fill="url(#w-leather)"/>
      <circle cx="36" cy="82" r="17" fill="currentColor"/>
      <circle cx="36" cy="82" r="17" fill="none" stroke="#c9ced8" stroke-width="4"/>
      <circle cx="36" cy="82" r="6" fill="#e8c45a"/>
      <path d="M26 72 l20 20 M46 72 l-20 20" stroke="rgba(0,0,0,0.25)" stroke-width="3"/>
    </g>

    <g class="part-body">
      <path d="M46 84 q18 10 36 0 l3 20 q-21 10 -42 0 Z" fill="url(#w-steel)"/>
      <path d="M46 52 q18 -12 36 0 l2 32 q-20 10 -40 0 Z" fill="url(#w-steel)"/>
      <path d="M50 58 q14 -8 28 0" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
      <path d="M58 50 h14 l3 42 q-10 5 -20 0 Z" fill="currentColor"/>
      <path d="M65 52 v40" stroke="rgba(0,0,0,0.22)" stroke-width="3"/>
      <path d="M46 84 q18 10 36 0 l0 8 q-18 10 -36 0 Z" fill="url(#w-leather)"/>
      <rect x="59" y="86" width="13" height="10" rx="3" fill="#e8c45a"/>
      <path d="M44 54 q8 -14 20 -8 q-6 10 -4 18 Z" fill="url(#w-steel)"/>
      <path d="M84 54 q-8 -14 -20 -8 q6 10 4 18 Z" fill="url(#w-steel)"/>
      <path d="M46 60 q6 -8 14 -6" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2.6"/>
    </g>

    <g class="part-head">
      <path d="M54.5 34 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#f4cea8"/>
      
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="43" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="48.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="38.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="37.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="43.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="43.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 40.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 40.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="39.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="39.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="39.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="39.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="39.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="39" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 40.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 39.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 41.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 41.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 36.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 35.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 39.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="42.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <g class="face" stroke="none">
        <path d="M64.5 45.6 q2.4 -0.9 4.8 -0.2 q-2.2 1.2 -4.8 0.2 Z" fill="#9e5b5c"/>
        <path d="M64.5 45.7 q2.5 1.6 4.8 -0.4 q-2.3 1.5 -4.8 0.4 Z" fill="#bd7a77"/>
      </g>
      <path d="M50 38 q2 -24 16 -24 q14 0 16 24 q-16 -9 -32 0 Z" fill="url(#w-steel)"/>
      <path d="M66 14 v-9" stroke="#8b94a2" stroke-width="4"/>
      <path d="M66 5 q12 -7 18 0 q-10 3 -12 10 Z" fill="currentColor"/>
      <path d="M66 20 v14" stroke="#8b94a2" stroke-width="2.6"/>
      <path d="M52 36 q4 -18 14 -19" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
      <path d="M52 42 q-6 18 -2 30 l7 -2 q-4 -15 -1 -27 Z" fill="#8a4b1c"/>
      <path d="M50 71 q4 4 8 1" fill="none" stroke="#6d3a13" stroke-width="3"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q16 -4 22 -12 l8 8 q-10 12 -26 16 Z" fill="#f4cea8"/>
      <circle cx="99" cy="51" r="5" fill="#f4cea8"/>
      <g class="part-sword">
        <path class="part-swoosh" d="M101 49 q34 -16 44 -46 q6 26 -14 48 q-16 17 -30 10 Z"
              fill="rgba(255,255,255,0.4)" stroke="none" opacity="0"/>
        <path d="M102 46 L96.5 55.5" stroke="#5d3b1a" stroke-width="9"/>
        <circle cx="95" cy="57.5" r="4" fill="#e8c45a"/>
        <path d="M94 41 L110 51" stroke="#e8c45a" stroke-width="6"/>
        <path d="M99 44 L106 48 L126 8 L120.5 5 Z" fill="url(#w-blade)"/>
        <path d="M101.5 44.6 L104 46 L124 7 L122.6 6.2 Z" fill="rgba(255,255,255,0.6)" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,Pn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="w-steel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f2f6fb"/><stop offset="45%" stop-color="#bcc6d3"/><stop offset="100%" stop-color="#78828f"/>
    </linearGradient>
    <linearGradient id="w-blade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#d3dbe6"/><stop offset="100%" stop-color="#8b94a2"/>
    </linearGradient>
    <linearGradient id="w-leather" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a5f34"/><stop offset="100%" stop-color="#52361b"/>
    </linearGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-cloak">
      <path d="M50 52 q-20 34 -14 66 q16 6 34 2 q-10 -34 -4 -64 Z" fill="currentColor"/>
      <path d="M50 52 q-20 34 -14 66 q6 2 12 2 q-6 -36 6 -66 Z" fill="rgba(0,0,0,0.33)" stroke="none"/>
    </g>

    <g class="part-leg-back">
      <path d="M52 82 h14 v30 h-14 Z" fill="#6a4a2a"/>
      <path d="M48 110 h20 q4 5 2 11 h-24 q-2 -7 2 -11 Z" fill="url(#w-leather)"/>
      <path d="M52 94 h14" stroke="#4a331a" stroke-width="2.6"/>
    </g>
    <g class="part-leg-front">
      <path d="M66 82 h14 v30 h-14 Z" fill="#7d5932"/>
      <path d="M64 110 h20 q4 5 2 11 h-24 q-2 -7 2 -11 Z" fill="url(#w-leather)"/>
      <path d="M66 94 h14" stroke="#4a331a" stroke-width="2.6"/>
    </g>

    <g class="part-arm-back">
      <path d="M52 58 q-14 10 -14 24 q10 8 20 2 q-6 -14 0 -24 Z" fill="url(#w-leather)"/>
      <circle cx="36" cy="82" r="17" fill="currentColor"/>
      <circle cx="36" cy="82" r="17" fill="none" stroke="#c9ced8" stroke-width="4"/>
      <circle cx="36" cy="82" r="6" fill="#e8c45a"/>
      <path d="M26 72 l20 20 M46 72 l-20 20" stroke="rgba(0,0,0,0.25)" stroke-width="3"/>
    </g>

    <g class="part-body">
      <path d="M46 84 q18 10 36 0 l3 20 q-21 10 -42 0 Z" fill="url(#w-steel)"/>
      <path d="M46 52 q18 -12 36 0 l2 32 q-20 10 -40 0 Z" fill="url(#w-steel)"/>
      <path d="M50 58 q14 -8 28 0" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
      <path d="M58 50 h14 l3 42 q-10 5 -20 0 Z" fill="currentColor"/>
      <path d="M65 52 v40" stroke="rgba(0,0,0,0.22)" stroke-width="3"/>
      <path d="M46 84 q18 10 36 0 l0 8 q-18 10 -36 0 Z" fill="url(#w-leather)"/>
      <rect x="59" y="86" width="13" height="10" rx="3" fill="#e8c45a"/>
      <path d="M44 54 q8 -14 20 -8 q-6 10 -4 18 Z" fill="url(#w-steel)"/>
      <path d="M84 54 q-8 -14 -20 -8 q6 10 4 18 Z" fill="url(#w-steel)"/>
      <path d="M46 60 q6 -8 14 -6" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2.6"/>
    </g>

    <g class="part-head">
      <path d="M54.5 34 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#e8c096"/>
      <path d="M57.5 50.5 q8.5 5 16 0 q-1.5 8 -8 8 q-6.5 0 -8 -8 Z" fill="#6b5236" opacity="0.95"/>
      <path d="M62.6 47.4 q3.4 -1.2 6.8 -0.2 q-3.2 2.4 -6.8 0.2 Z" fill="#6b5236" stroke="none"/>
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="43" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="48.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="38.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="37.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="43.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="43.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 40.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 40.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="39.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="39.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="39.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="39.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="39.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="39" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 40.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 39.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 41.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 41.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 36.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 35.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 39.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="42.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <path class="face" d="M64.8 45.8 q2.3 0.9 4.4 -0.4" fill="none" stroke="rgba(90,52,34,0.5)" stroke-width="0.7" stroke-linecap="butt"/>
      <path d="M50 38 q2 -24 16 -24 q14 0 16 24 q-16 -9 -32 0 Z" fill="url(#w-steel)"/>
      <path d="M66 14 v-9" stroke="#8b94a2" stroke-width="4"/>
      <path d="M66 5 q12 -7 18 0 q-10 3 -12 10 Z" fill="currentColor"/>
      <path d="M66 20 v14" stroke="#8b94a2" stroke-width="2.6"/>
      <path d="M52 36 q4 -18 14 -19" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q16 -4 22 -12 l8 8 q-10 12 -26 16 Z" fill="#e8c096"/>
      <circle cx="99" cy="51" r="5" fill="#e8c096"/>
      <g class="part-sword">
        <path class="part-swoosh" d="M101 49 q34 -16 44 -46 q6 26 -14 48 q-16 17 -30 10 Z"
              fill="rgba(255,255,255,0.4)" stroke="none" opacity="0"/>
        <path d="M102 46 L96.5 55.5" stroke="#5d3b1a" stroke-width="9"/>
        <circle cx="95" cy="57.5" r="4" fill="#e8c45a"/>
        <path d="M94 41 L110 51" stroke="#e8c45a" stroke-width="6"/>
        <path d="M99 44 L106 48 L126 8 L120.5 5 Z" fill="url(#w-blade)"/>
        <path d="M101.5 44.6 L104 46 L124 7 L122.6 6.2 Z" fill="rgba(255,255,255,0.6)" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,jn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="a-leather" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#b08552"/><stop offset="100%" stop-color="#6d4a24"/>
    </linearGradient>
    <linearGradient id="a-bow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b98747"/><stop offset="100%" stop-color="#6b4620"/>
    </linearGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-cloak">
      <path d="M52 50 q-20 36 -14 68 q16 6 32 2 q-10 -36 -2 -66 Z" fill="currentColor"/>
      <path d="M52 50 q-20 36 -14 68 q6 2 11 2 q-5 -38 7 -68 Z" fill="rgba(0,0,0,0.33)" stroke="none"/>
    </g>

    <g class="part-leg-back">
      <path d="M54 82 h12 v30 h-12 Z" fill="#5e4a2e"/>
      <path d="M50 110 h18 q4 5 2 11 h-22 q-2 -7 2 -11 Z" fill="#43301a"/>
    </g>
    <g class="part-leg-front">
      <path d="M66 82 h12 v30 h-12 Z" fill="#6f5836"/>
      <path d="M64 110 h18 q4 5 2 11 h-22 q-2 -7 2 -11 Z" fill="#51391f"/>
    </g>

    <g class="part-quiver">
      <path d="M36 42 l16 -6 13 32 -16 7 Z" fill="url(#a-leather)"/>
      <g stroke="#efe6cf" stroke-width="3.4">
        <path d="M40 38 l5 -15"/><path d="M47 36 l5 -15"/><path d="M54 34 l5 -15"/>
      </g>
      <path d="M38 48 l16 -6" stroke="#4a3418" stroke-width="3"/>
    </g>

    <g class="part-body">
      <path d="M48 52 q16 -12 32 0 l3 32 q-19 10 -38 0 Z" fill="url(#a-leather)"/>
      <path d="M56 50 q8 16 16 0 l2 30 q-10 6 -20 0 Z" fill="#d3b078"/>
      <path d="M48 84 q16 10 32 0 l0 8 q-16 10 -32 0 Z" fill="#5d3b1a"/>
      <rect x="59" y="86" width="12" height="9" rx="3" fill="#e8c45a"/>
      <path d="M52 56 l14 24" stroke="#4a3418" stroke-width="3"/>
      <path d="M50 54 q6 -8 14 -6" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2.6"/>
    </g>

    <g class="part-arm-back">
      <path d="M58 56 q-6 12 -2 22 q10 4 16 -2 q-6 -10 -4 -20 Z" fill="url(#a-leather)"/>
      <circle cx="68" cy="76" r="5" fill="#f4cea8"/>
    </g>

    <g class="part-head">
      <path d="M54.5 34 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#f4cea8"/>
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="43" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="48.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="38.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="37.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="43.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="43.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 40.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 40.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="39.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="39.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="39.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="39.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="39.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="39" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 40.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 39.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 41.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 41.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 36.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 35.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 39.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="42.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <g class="face" stroke="none">
        <path d="M64.5 45.6 q2.4 -0.9 4.8 -0.2 q-2.2 1.2 -4.8 0.2 Z" fill="#9e5b5c"/>
        <path d="M64.5 45.7 q2.5 1.6 4.8 -0.4 q-2.3 1.5 -4.8 0.4 Z" fill="#bd7a77"/>
      </g>
      <path d="M50 38 q0 -26 16 -26 q16 0 16 26 q-8 -9 -16 -9 q-8 0 -16 9 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l11 -5 q-7 -11 -5 -21 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l5 -2 q-6 -12 -3 -24 Z" fill="rgba(0,0,0,0.28)" stroke="none"/>
      <path d="M52 44 q-6 18 -2 30 l7 -2 q-4 -15 -1 -27 Z" fill="#8a4b1c"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q14 -2 20 -6 l5 9 q-10 7 -24 9 Z" fill="#f4cea8"/>
      <circle cx="101" cy="64" r="5.5" fill="#f4cea8"/>
      <g class="part-bow">
        <path d="M104 26 q24 42 0 84" fill="none" stroke="url(#a-bow)" stroke-width="7"/>
        <path class="part-string" d="M104 26 q4 42 0 84" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
        <path class="part-swoosh" d="M104 26 q-16 42 0 84" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="3" opacity="0"/>
        <path d="M100 22 l8 4 M100 114 l8 -4" stroke="#5d3b1a" stroke-width="4"/>
      </g>
      <g class="part-arrow">
        <path d="M64 68 L116 68" stroke="#c6a96f" stroke-width="3.6"/>
        <path d="M116 68 l-9 -5 M116 68 l-9 5" stroke="#9aa6b5" stroke-width="3"/>
        <path d="M64 68 l-7 -5 M64 68 l-7 5" stroke="#efe6cf" stroke-width="3"/>
      </g>
    </g>
  </g>
</svg>
`,Dn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="a-leather" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#b08552"/><stop offset="100%" stop-color="#6d4a24"/>
    </linearGradient>
    <linearGradient id="a-bow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b98747"/><stop offset="100%" stop-color="#6b4620"/>
    </linearGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-cloak">
      <path d="M52 50 q-20 36 -14 68 q16 6 32 2 q-10 -36 -2 -66 Z" fill="currentColor"/>
      <path d="M52 50 q-20 36 -14 68 q6 2 11 2 q-5 -38 7 -68 Z" fill="rgba(0,0,0,0.33)" stroke="none"/>
    </g>

    <g class="part-leg-back">
      <path d="M54 82 h12 v30 h-12 Z" fill="#5e4a2e"/>
      <path d="M50 110 h18 q4 5 2 11 h-22 q-2 -7 2 -11 Z" fill="#43301a"/>
    </g>
    <g class="part-leg-front">
      <path d="M66 82 h12 v30 h-12 Z" fill="#6f5836"/>
      <path d="M64 110 h18 q4 5 2 11 h-22 q-2 -7 2 -11 Z" fill="#51391f"/>
    </g>

    <g class="part-quiver">
      <path d="M36 42 l16 -6 13 32 -16 7 Z" fill="url(#a-leather)"/>
      <g stroke="#efe6cf" stroke-width="3.4">
        <path d="M40 38 l5 -15"/><path d="M47 36 l5 -15"/><path d="M54 34 l5 -15"/>
      </g>
      <path d="M38 48 l16 -6" stroke="#4a3418" stroke-width="3"/>
    </g>

    <g class="part-body">
      <path d="M48 52 q16 -12 32 0 l3 32 q-19 10 -38 0 Z" fill="url(#a-leather)"/>
      <path d="M56 50 q8 16 16 0 l2 30 q-10 6 -20 0 Z" fill="#d3b078"/>
      <path d="M48 84 q16 10 32 0 l0 8 q-16 10 -32 0 Z" fill="#5d3b1a"/>
      <rect x="59" y="86" width="12" height="9" rx="3" fill="#e8c45a"/>
      <path d="M52 56 l14 24" stroke="#4a3418" stroke-width="3"/>
      <path d="M50 54 q6 -8 14 -6" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2.6"/>
    </g>

    <g class="part-arm-back">
      <path d="M58 56 q-6 12 -2 22 q10 4 16 -2 q-6 -10 -4 -20 Z" fill="url(#a-leather)"/>
      <circle cx="68" cy="76" r="5" fill="#e8c096"/>
    </g>

    <g class="part-head">
      <path d="M54.5 34 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#e8c096"/>
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="43" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="48.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="38.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="37.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="43.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="43.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 40.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 40.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="39.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="39.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="39.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="39.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="39.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="39" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 40.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 39.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 41.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 41.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 36.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 35.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 39.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="42.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <path class="face" d="M64.8 45.8 q2.3 0.9 4.4 -0.4" fill="none" stroke="rgba(90,52,34,0.5)" stroke-width="0.7" stroke-linecap="butt"/>
      <path d="M50 38 q0 -26 16 -26 q16 0 16 26 q-8 -9 -16 -9 q-8 0 -16 9 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l11 -5 q-7 -11 -5 -21 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l5 -2 q-6 -12 -3 -24 Z" fill="rgba(0,0,0,0.28)" stroke="none"/>
      <path d="M57.5 50.5 q8.5 5 16 0 q-1.5 8 -8 8 q-6.5 0 -8 -8 Z" fill="#5a4530" opacity="0.95"/>
      <path d="M62.6 47.4 q3.4 -1.2 6.8 -0.2 q-3.2 2.4 -6.8 0.2 Z" fill="#5a4530" stroke="none"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q14 -2 20 -6 l5 9 q-10 7 -24 9 Z" fill="#e8c096"/>
      <circle cx="101" cy="64" r="5.5" fill="#e8c096"/>
      <g class="part-bow">
        <path d="M104 26 q24 42 0 84" fill="none" stroke="url(#a-bow)" stroke-width="7"/>
        <path class="part-string" d="M104 26 q4 42 0 84" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
        <path class="part-swoosh" d="M104 26 q-16 42 0 84" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="3" opacity="0"/>
        <path d="M100 22 l8 4 M100 114 l8 -4" stroke="#5d3b1a" stroke-width="4"/>
      </g>
      <g class="part-arrow">
        <path d="M64 68 L116 68" stroke="#c6a96f" stroke-width="3.6"/>
        <path d="M116 68 l-9 -5 M116 68 l-9 5" stroke="#9aa6b5" stroke-width="3"/>
        <path d="M64 68 l-7 -5 M64 68 l-7 5" stroke="#efe6cf" stroke-width="3"/>
      </g>
    </g>
  </g>
</svg>
`,_n=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <radialGradient id="m-orb">
      <stop offset="0%" stop-color="#fff6de"/><stop offset="45%" stop-color="#f6ad3e"/><stop offset="100%" stop-color="#bf420b"/>
    </radialGradient>
    <radialGradient id="m-halo">
      <stop offset="0%" stop-color="rgba(246,173,62,0.8)"/><stop offset="100%" stop-color="rgba(246,173,62,0)"/>
    </radialGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-robe">
      <path d="M40 122 q24 -12 48 0 l-9 -66 q-15 -9 -30 0 Z" fill="currentColor"/>
      <path d="M40 122 q12 -6 24 -7 l-6 -63 q-7 2 -9 4 Z" fill="rgba(0,0,0,0.3)" stroke="none"/>
      <path d="M58 56 q8 38 0 64 q10 3 18 0 q-8 -30 -6 -64 Z" fill="#f2ead7" opacity="0.72"/>
      <path d="M44 104 q20 9 40 0" fill="none" stroke="#e8c45a" stroke-width="4"/>
      <path d="M42 118 q22 -9 44 0" fill="none" stroke="#e8c45a" stroke-width="3.4"/>
      <path d="M50 80 q14 8 28 0 l0 8 q-14 8 -28 0 Z" fill="#6d3f7a"/>
      <path d="M48 62 q16 -8 32 0" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
    </g>

    <g class="part-arm-back">
      <path d="M52 58 q-10 10 -8 22 q9 5 16 0 q-5 -12 -2 -20 Z" fill="currentColor"/>
      <circle cx="48" cy="80" r="5.5" fill="#f4cea8"/>
    </g>

    <g class="part-head">
      <path d="M54.5 36 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#f4cea8"/>
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="45" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="50.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="40.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="39.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="45.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="45.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 42.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 42.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="41.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="41.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="41.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="41.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="41.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="41" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 42.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 41.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 43.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 43.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 38.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 37.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 41.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="44.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <g class="face" stroke="none">
        <path d="M64.5 47.6 q2.4 -0.9 4.8 -0.2 q-2.2 1.2 -4.8 0.2 Z" fill="#9e5b5c"/>
        <path d="M64.5 47.7 q2.5 1.6 4.8 -0.4 q-2.3 1.5 -4.8 0.4 Z" fill="#bd7a77"/>
      </g>
      <path d="M53 48 q-7 20 -2 34 l8 -2 q-5 -17 -1 -30 Z" fill="#c9a0d6"/>
      <path d="M66 2 q14 14 22 30 q-24 -9 -46 0 q8 -17 24 -30 Z" fill="currentColor"/>
      <path d="M66 4 q-9 12 -14 20 l-8 10 q10 -4 20 -5 Z" fill="rgba(255,255,255,0.18)" stroke="none"/>
      <path d="M42 32 q24 -9 46 0 q-24 11 -46 0 Z" fill="rgba(0,0,0,0.3)"/>
      <circle cx="78" cy="24" r="3.6" fill="#e8c45a"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 58 q14 -4 20 -10 l7 8 q-10 10 -25 13 Z" fill="#f4cea8"/>
      <circle cx="99" cy="60" r="5.5" fill="#f4cea8"/>
      <g class="part-staff">
        <path d="M100 32 L100 118" fill="none" stroke="#7a5326" stroke-width="7"/>
        <path d="M100 32 q-11 -7 -11 -16 q11 5 11 16 Z" fill="#7a5326"/>
        <circle class="part-orb-halo" cx="100" cy="20" r="19" fill="url(#m-halo)" stroke="none"/>
        <g class="part-swoosh" opacity="0">
          <path d="M100 20 m-17 0 a17 17 0 0 1 28 -12" fill="none" stroke="rgba(255,196,110,0.85)" stroke-width="4" stroke-linecap="round"/>
          <path d="M100 20 m17 0 a17 17 0 0 1 -28 12" fill="none" stroke="rgba(255,150,60,0.7)" stroke-width="3.4" stroke-linecap="round"/>
        </g>
        <circle class="part-orb" cx="100" cy="20" r="10" fill="url(#m-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
        <circle cx="96" cy="17" r="3.4" fill="#fff6e0" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,Un=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <radialGradient id="m-orb">
      <stop offset="0%" stop-color="#fff6de"/><stop offset="45%" stop-color="#f6ad3e"/><stop offset="100%" stop-color="#bf420b"/>
    </radialGradient>
    <radialGradient id="m-halo">
      <stop offset="0%" stop-color="rgba(246,173,62,0.8)"/><stop offset="100%" stop-color="rgba(246,173,62,0)"/>
    </radialGradient>
  </defs>
  <g stroke="#241a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">

    <g class="part-robe">
      <path d="M40 122 q24 -12 48 0 l-9 -66 q-15 -9 -30 0 Z" fill="currentColor"/>
      <path d="M40 122 q12 -6 24 -7 l-6 -63 q-7 2 -9 4 Z" fill="rgba(0,0,0,0.3)" stroke="none"/>
      <path d="M58 56 q8 38 0 64 q10 3 18 0 q-8 -30 -6 -64 Z" fill="#f2ead7" opacity="0.72"/>
      <path d="M44 104 q20 9 40 0" fill="none" stroke="#e8c45a" stroke-width="4"/>
      <path d="M42 118 q22 -9 44 0" fill="none" stroke="#e8c45a" stroke-width="3.4"/>
      <path d="M50 80 q14 8 28 0 l0 8 q-14 8 -28 0 Z" fill="#6d3f7a"/>
      <path d="M48 62 q16 -8 32 0" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3"/>
    </g>

    <g class="part-arm-back">
      <path d="M52 58 q-10 10 -8 22 q9 5 16 0 q-5 -12 -2 -20 Z" fill="currentColor"/>
      <circle cx="48" cy="80" r="5.5" fill="#e8c096"/>
    </g>

    <g class="part-head">
      <path d="M54.5 36 q11.5 -7.5 23 0 l-1.4 9.5 q-1.2 5.4 -5.6 7.8 q-4.6 2.4 -9 0 q-4.4 -2.4 -5.6 -7.8 Z" fill="#e8c096"/>
      <g class="face" stroke="none">
        <ellipse cx="59.5" cy="45" rx="4.6" ry="8" fill="rgba(74,44,20,0.09)"/>
        <ellipse cx="66" cy="50.6" rx="7" ry="3.4" fill="rgba(74,44,20,0.07)"/>
        <ellipse cx="62.8" cy="40.1" rx="3.3" ry="1.7" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="71" cy="39.8" rx="3.6" ry="1.8" fill="rgba(74,44,20,0.13)"/>
        <ellipse cx="60.4" cy="45.4" rx="2.6" ry="1.5" fill="rgba(196,120,96,0.2)"/>
        <ellipse cx="73.6" cy="45.1" rx="2.4" ry="1.4" fill="rgba(196,120,96,0.2)"/>
      </g>
      <g class="face" fill="#fbf7f0" stroke="none">
        <path d="M60.9 42.4 q2.1 -2.4 4.2 -0.2 q-2 1.9 -4.2 0.2 Z"/>
        <path d="M69 42.1 q2.3 -2.5 4.6 -0.2 q-2.2 2 -4.6 0.2 Z"/>
      </g>
      <g class="face" stroke="none">
        <circle cx="63.1" cy="41.8" r="1.05" fill="#4e3620"/>
        <circle cx="71.3" cy="41.5" r="1.15" fill="#4e3620"/>
        <circle cx="63.1" cy="41.8" r="0.5" fill="#1b1410"/>
        <circle cx="71.3" cy="41.5" r="0.55" fill="#1b1410"/>
        <circle cx="62.8" cy="41.3" r="0.26" fill="#ffffff"/>
        <circle cx="71" cy="41" r="0.3" fill="#ffffff"/>
      </g>
      <g class="face" fill="none" stroke="#2b2017" stroke-width="1.05" stroke-linecap="round">
        <path d="M60.8 42.2 q2.2 -2.5 4.5 -0.5"/>
        <path d="M68.9 41.9 q2.4 -2.6 4.8 -0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(60,36,16,0.3)" stroke-width="0.7" stroke-linecap="round">
        <path d="M61.2 43.8 q2 0.8 3.8 -0.2"/>
        <path d="M69.4 43.6 q2.2 0.9 4.1 -0.2"/>
      </g>
      <g class="face" fill="none" stroke="#4a3118" stroke-width="1.5" stroke-linecap="round">
        <path d="M60.3 38.4 q2.4 -1.5 4.8 -0.3"/>
        <path d="M68.4 37.9 q2.6 -1.3 4.9 0.5"/>
      </g>
      <g class="face" fill="none" stroke="rgba(120,78,44,0.42)" stroke-width="0.75" stroke-linecap="round">
        <path d="M69.1 41.2 q0.7 2 1.5 3.2"/>
      </g>
      <circle class="face" cx="69.5" cy="44.5" r="0.42" fill="rgba(60,36,16,0.45)" stroke="none"/>
      <path class="face" d="M64.8 47.8 q2.3 0.9 4.4 -0.4" fill="none" stroke="rgba(90,52,34,0.5)" stroke-width="0.7" stroke-linecap="butt"/>
      <path d="M57 53 q9 5 17 0 q-1 16 -8.5 16 q-7.5 0 -8.5 -16 Z" fill="#f2ead7"/>
      <path d="M62.4 49.4 q3.6 -1.4 7.2 -0.2 q-3.4 2.6 -7.2 0.2 Z" fill="#ddd5c0" stroke="none"/>
      <path d="M66 2 q14 14 22 30 q-24 -9 -46 0 q8 -17 24 -30 Z" fill="currentColor"/>
      <path d="M66 4 q-9 12 -14 20 l-8 10 q10 -4 20 -5 Z" fill="rgba(255,255,255,0.18)" stroke="none"/>
      <path d="M42 32 q24 -9 46 0 q-24 11 -46 0 Z" fill="rgba(0,0,0,0.3)"/>
      <circle cx="78" cy="24" r="3.6" fill="#e8c45a"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 58 q14 -4 20 -10 l7 8 q-10 10 -25 13 Z" fill="#e8c096"/>
      <circle cx="99" cy="60" r="5.5" fill="#e8c096"/>
      <g class="part-staff">
        <path d="M100 32 L100 118" fill="none" stroke="#7a5326" stroke-width="7"/>
        <path d="M100 32 q-11 -7 -11 -16 q11 5 11 16 Z" fill="#7a5326"/>
        <circle class="part-orb-halo" cx="100" cy="20" r="19" fill="url(#m-halo)" stroke="none"/>
        <g class="part-swoosh" opacity="0">
          <path d="M100 20 m-17 0 a17 17 0 0 1 28 -12" fill="none" stroke="rgba(255,196,110,0.85)" stroke-width="4" stroke-linecap="round"/>
          <path d="M100 20 m17 0 a17 17 0 0 1 -28 12" fill="none" stroke="rgba(255,150,60,0.7)" stroke-width="3.4" stroke-linecap="round"/>
        </g>
        <circle class="part-orb" cx="100" cy="20" r="10" fill="url(#m-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
        <circle cx="96" cy="17" r="3.4" fill="#fff6e0" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,Vn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="64" cy="112" rx="44" ry="14" fill="#6f6a4f" opacity="0.55" stroke="none"/>
    <!-- a fallen banner and shield -->
    <path d="M26 112 L92 96" stroke="#5a4a32" stroke-width="6"/>
    <path d="M92 96 l20 -10 2 12 -20 8 Z" fill="currentColor"/>
    <ellipse cx="54" cy="106" rx="20" ry="13" fill="currentColor"/>
    <ellipse cx="54" cy="106" rx="7" ry="5" fill="#e8c45a"/>
    <path d="M70 114 l30 -8" stroke="#b9c2cf" stroke-width="6"/>
  </g>
</svg>
`,G=100,V=128,Xt=2.05,Jt=.7,Kn="http://www.w3.org/2000/svg",Wn={"warrior-f":Hn,"warrior-m":Pn,"archer-f":jn,"archer-m":Dn,"mage-f":_n,"mage-m":Un};function S(t,e={}){const n=document.createElementNS(Kn,t);for(const[r,a]of Object.entries(e))n.setAttribute(r,a);return n}function Zt(t,e,n){const r=t.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width",String(e)),r.setAttribute("height",String(n)),r.setAttribute("overflow","visible"))}function Yn(){const t=S("defs");return t.innerHTML=`
    <radialGradient id="fx-fire" cx="40%" cy="40%">
      <stop offset="0%" stop-color="#fff6d8"/>
      <stop offset="40%" stop-color="#ffb43c"/>
      <stop offset="100%" stop-color="#d9480f"/>
    </radialGradient>
    <radialGradient id="fx-heal" cx="40%" cy="40%">
      <stop offset="0%" stop-color="#f0fff0"/>
      <stop offset="55%" stop-color="#8fe07a"/>
      <stop offset="100%" stop-color="#3f7a35"/>
    </radialGradient>
    <radialGradient id="fx-shadow">
      <stop offset="0%" stop-color="rgba(47,36,24,0.42)"/>
      <stop offset="100%" stop-color="rgba(47,36,24,0)"/>
    </radialGradient>
    <radialGradient id="fx-vignette">
      <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(47,36,24,0.22)"/>
    </radialGradient>
    <filter id="fx-glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="9" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>`,t}function Xn(t,e){const n=S("svg",{class:"arena",viewBox:`0 0 ${t.arena.width*G} ${t.arena.height*G}`,preserveAspectRatio:"xMidYMid meet"}),r=S("g",{class:"arena-art"});r.innerHTML=On,Zt(r,t.arena.width*G,t.arena.height*G);const a=S("g",{class:"layer-ground"}),s=S("g",{class:"layer-units"}),l=S("g",{class:"layer-shots"}),i=S("g",{class:"layer-bursts"}),c=S("g",{class:"layer-text"}),h=S("rect",{class:"vignette",width:String(t.arena.width*G),height:String(t.arena.height*G),fill:"url(#fx-vignette)"});n.append(Yn(),r,a,s,l,i,c,h);const d=new Map;for(const u of t.units){const M=Jn(u);d.set(u.id,M),a.append(M.ring,M.shadow,M.dust),s.append(M.group)}const f=u=>{u.preventDefault();const M=n.getScreenCTM();if(!M)return;const Z=new DOMPoint(u.clientX,u.clientY).matrixTransform(M.inverse()),w=Z.x/G,g=Z.y/G;let x=null,k=1;for(const y of t.units){if(!y.alive)continue;const m=Math.hypot(y.x-w,y.y-.5-g);m<k&&(k=m,x=y)}e({x:w,y:g,unit:x})};return n.addEventListener("pointerdown",f),{el:n,update(u,M){for(const w of u.units)d.get(w.id)?.update(w,u.time,M.has(w.id));const Z=[...u.units].sort((w,g)=>Number(w.alive)-Number(g.alive)||w.y-g.y);for(const w of Z){const g=d.get(w.id);g&&s.append(g.group)}zn(l,u.projectiles,u.time),tr(i,u,d),er(c,u,d)},destroy(){n.removeEventListener("pointerdown",f),n.remove()}}}function Jn(t){const e=S("ellipse",{class:`ring ${t.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});e.style.display="none";const n=S("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),r=S("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});r.style.opacity="0";const a=S("g",{class:`unit ${t.side} ${t.cls}`}),s=S("g",{class:"sprite"});s.innerHTML=Wn[`${t.cls}-${t.gender}`]??"",Zt(s,V,V);const l=S("g",{class:"fallen"});l.innerHTML=Vn,Zt(l,V,V),l.setAttribute("transform",`scale(${Xt}) translate(${-V/2} -122)`),l.style.display="none";const i=S("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),c=S("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});a.append(l,s,i,c);const h=In(s),d={group:a,ring:e,shadow:n,dust:r,px:t.x,py:t.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(f,u,M){const Z=f.x*G,w=f.y*G,g=Math.hypot(f.x-d.px,f.y-d.py);d.px=f.x,d.py=f.y,g>8e-4&&(d.phase+=g*4.4,d.lastMoveAt=u);const x=u-d.lastMoveAt<.25,k=u-f.lastAttackAt;f.alive?Tn(h,{cls:f.cls,phase:d.phase,stride:x?1:0,sinceAttack:k,time:u}):Rn(h,(u-f.lastHitAt)/Jt);const y=f.alive&&k>=0&&k<.3?Math.sin(k/.3*Math.PI)*16*f.facing:0;a.setAttribute("transform",`translate(${(Z+y).toFixed(1)} ${w.toFixed(1)})`),e.setAttribute("cx",Z.toFixed(1)),e.setAttribute("cy",w.toFixed(1)),e.style.display=M&&f.alive?"":"none",n.setAttribute("cx",Z.toFixed(1)),n.setAttribute("cy",(w+6).toFixed(1)),n.style.opacity=f.alive?"1":"0.4",r.setAttribute("cx",(Z-26*f.facing).toFixed(1)),r.setAttribute("cy",(w+10).toFixed(1)),r.style.opacity=x&&f.alive?(.18+.12*Math.abs(Math.sin(u*9))).toFixed(2):"0";const m=u-f.lastHitAt<.18,b=m&&f.alive?1.05:1,v=Xt*b;s.setAttribute("transform",`scale(${(f.facing*v).toFixed(3)} ${v.toFixed(3)}) translate(${-V/2} -122)`);const L=f.alive?0:(u-f.lastHitAt)/Jt;s.style.display=f.alive||L<1?"":"none",s.style.opacity=f.alive?"1":String(Math.max(0,1-L)),l.style.display=!f.alive&&L>.55?"":"none",l.style.opacity=String(Math.min(1,Math.max(0,(L-.55)/.45)));const E=Math.max(0,f.hp/f.maxHp);c.setAttribute("width",(94*E).toFixed(1)),a.classList.toggle("hurt",m&&f.alive),a.classList.toggle("dead",!f.alive),i.style.display=f.alive?"":"none",c.style.display=f.alive?"":"none"}};return d}function zn(t,e,n){for(;t.childNodes.length>e.length;)t.lastChild?.remove();for(;t.childNodes.length<e.length;)t.append(S("g"));e.forEach((r,a)=>{const s=t.childNodes[a];s.getAttribute("data-kind")!==r.kind&&(s.setAttribute("data-kind",r.kind),s.setAttribute("class",`shot ${r.kind}`),s.innerHTML=Qn(r.kind));const i=r.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";s.setAttribute("transform",`translate(${(r.x*G).toFixed(1)} ${(r.y*G).toFixed(1)}) rotate(${(r.angle*180/Math.PI).toFixed(1)})${i}`)})}function Qn(t){return t==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:t==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function tr(t,e,n){const r=e.events.filter(a=>e.time-a.time<.32);for(;t.childNodes.length>r.length;)t.lastChild?.remove();for(;t.childNodes.length<r.length;)t.append(S("circle"));r.forEach((a,s)=>{const l=t.childNodes[s],i=n.get(a.unitId);if(!i)return;const c=(e.time-a.time)/.32;l.setAttribute("class",`burst ${a.kind}`),l.setAttribute("cx",(i.px*G).toFixed(1)),l.setAttribute("cy",(i.py*G-90).toFixed(1)),l.setAttribute("r",(14+c*40).toFixed(1)),l.setAttribute("opacity",(1-c).toFixed(2))})}function er(t,e,n){const r=e.events.filter(a=>e.time-a.time<1.1&&a.amount>=1);for(;t.childNodes.length>r.length;)t.lastChild?.remove();for(;t.childNodes.length<r.length;)t.append(S("text",{"text-anchor":"middle"}));r.forEach((a,s)=>{const l=t.childNodes[s],i=n.get(a.unitId);if(!i)return;const c=(e.time-a.time)/1.1;l.setAttribute("class",`floater ${a.kind}`),l.setAttribute("x",(i.px*G).toFixed(1)),l.setAttribute("y",(i.py*G-210-c*70).toFixed(1)),l.setAttribute("opacity",(1-c*c).toFixed(2));const h=`${a.kind==="heal"?"+":"-"}${Math.round(a.amount)}`;l.textContent!==h&&(l.textContent=h)})}function nr(t){const e=Et(t.id??""),n=e?Cn(e.fortress.id,N(),Date.now()&65535||1):null;if(!e||!n)return I({title:"מבצר לא נמצא"},o("p",{},"חזרה למפת העולם."));const{continent:r,fortress:a}=e;if(N().conquered.includes(a.id)){const p=o("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return p.addEventListener("click",()=>T(`/continent/${r.id}`)),I({title:a.name,subtitle:r.name,showStars:!1},o("p",{class:"notice"},"המבצר הזה כבר נכבש."),o("div",{class:"row"},p))}const s=dn(n),l=new Set(s.units.filter(p=>p.side==="player").map(p=>p.id)),i=ar(new URLSearchParams(location.search).get("speed"));let c=!1,h=!1,d=0,f=0,u=0;window.__battle=s;const M=Xn(s,p=>me(p)),Z=o("div",{class:"stage"});Z.append(M.el);const w=o("div",{class:"overlay"});Z.append(w);const g=()=>{w.replaceChildren(o("div",{class:"panel"},o("h2",{},a.name),o("p",{},`רמת האויב: ${a.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),o("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),k())),w.classList.remove("hidden")},x=p=>{Nn({fortressId:a.id,won:p,seconds:s.time,heroes:W.map(R=>({cls:R.cls,name:R.name||it(R.cls,R.gender),alive:R.alive,health:Math.max(0,R.hp/R.maxHp)}))});const $=o("button",{class:"btn primary",type:"button"},"המשך");$.addEventListener("click",()=>T(`/result/${a.id}/${p?"win":"lose"}`)),w.replaceChildren(o("div",{class:"panel"},o("h2",{},p?"המבצר נכבש":"הקרב אבד"),o("p",{},p?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),$)),w.classList.remove("hidden")};function k(){const p=o("button",{class:"btn primary",type:"button"},"התחל קרב");return p.addEventListener("click",()=>{w.classList.add("hidden"),c=!0,f=performance.now()}),p}const y=o("div",{class:"portraits"}),m=o("button",{class:"btn small",type:"button"},"השהה"),b=o("button",{class:"btn small",type:"button"},"ריפוי"),v=o("button",{class:"btn small",type:"button"},"בחר הכול"),L=o("button",{class:"btn small",type:"button"},"עמוד במקום");m.addEventListener("click",()=>{h||(c=!c,f=performance.now(),m.textContent=c?"השהה":"המשך")}),v.addEventListener("click",()=>{l.clear();for(const p of s.units)p.side==="player"&&p.alive&&l.add(p.id);Y()}),L.addEventListener("click",()=>{for(const p of l)bt(s,p,{kind:"hold"})});const E=s.units.find(p=>p.side==="player"&&p.cls==="mage");b.addEventListener("click",()=>{if(!E)return;const p=Ut(s,E.id);p&&(hn(s,E.id,p.id),F())});function F(){(E?fn(s,E.id)&&Ut(s,E.id)!==null:!1)?b.removeAttribute("disabled"):b.setAttribute("disabled","true")}const W=s.units.filter(p=>p.side==="player"),B=W.map(p=>{const $=o("span",{class:"portrait-fill"}),R=o("button",{class:`portrait ${p.cls}`,type:"button"},o("span",{class:"portrait-name"},p.name||it(p.cls,p.gender)),o("span",{class:"portrait-bar"},$));return R.addEventListener("click",()=>{p.alive&&(l.clear(),l.add(p.id),Y())}),y.append(R),{unit:p,button:R,fill:$}});function Y(){F();for(const p of B){const $=Math.max(0,p.unit.hp/p.unit.maxHp);p.fill.style.width=`${($*100).toFixed(0)}%`,p.button.classList.toggle("selected",l.has(p.unit.id)),p.button.classList.toggle("dead",!p.unit.alive)}}Y();function me(p){if(!c)return;const $=p.unit;if($&&$.side==="player"&&$.alive){l.clear(),l.add($.id),Y();return}if(l.size!==0)for(const R of l)$&&$.side==="enemy"&&$.alive?bt(s,R,{kind:"attack",targetId:$.id}):bt(s,R,{kind:"move",x:p.x,y:p.y})}const Tt=p=>{p.code==="Space"&&(p.preventDefault(),m.click())};addEventListener("keydown",Tt);const Rt=()=>{if(d=requestAnimationFrame(Rt),c&&!h){const p=performance.now();u+=Math.min(.1,(p-f)/1e3)*i*rr,f=p;let $=0;for(;u>=qt&&$<8*i;)we(),u-=qt,$++}M.update(s,l)},we=()=>{pn(s),s.winner&&!h&&(h=!0,c=!1,x(s.winner==="player")),Y()};g(),d=requestAnimationFrame(Rt);const Ot=I({title:a.name,subtitle:`${r.name} · ${r.domain}`,showStars:!1},Z,o("div",{class:"hud"},y,o("div",{class:"hud-actions"},b,v,L,m)));return{el:Ot.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",Tt),M.destroy(),Ot.destroy()}}}const rr=.6;function ar(t){const e=Number(t??1);return!Number.isFinite(e)||e<=0?1:Math.min(16,Math.max(1,e))}function sr(t){const e=Et(t.id??"");if(!e)return I({title:"מבצר לא נמצא"},o("p",{},"חזרה למפת העולם."));const{continent:n,fortress:r}=e,a=t.outcome==="win",s=Gn(r.id),l=!N().flags.sawUpgrades;U(d=>{a&&!d.conquered.includes(r.id)&&d.conquered.push(r.id),l&&(d.flags.sawUpgrades=!0,d.stars+=Kt)});const i=[];s&&i.push(o("section",{class:"card"},o("h3",{},"הגיבורים שלך"),...s.heroes.map(d=>o("div",{class:"stat-row"},o("span",{class:"stat-name"},d.name),o("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),o("p",{class:"muted"},`אורך הקרב: ${Math.round(s.seconds)} שניות`))),l&&i.push(o("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Kt} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const c=n.fortresses.filter(d=>!d.home&&!N().conquered.includes(d.id)).length;a&&c===0?i.push(o("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):a||i.push(o("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const h=o("div",{class:"row"},rt(a?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...a?[]:[rt("קרב נוסף באותו מבצר",`/battle/${r.id}`)],rt("חזרה ליבשת",`/continent/${n.id}`),rt("תפריט המשימות","/missions"));return I({title:a?"המבצר נכבש":"הקרב אבד",subtitle:`${r.name} · ${$t(n.id)?.name??""}`,showBack:!1},...i,h)}function rt(t,e,n=!1){const r=o("button",{class:n?"btn primary":"btn",type:"button"},t);return r.addEventListener("click",()=>T(e)),r}function lr(t){let e=0;for(const n of Object.keys(t.heroes)){const r=t.heroes[n];for(const a of It[n])e+=Zn(r.levels[a]??0)}return e}function or(t,e,n){const r=()=>{i.remove(),removeEventListener("keydown",a)},a=c=>{c.key==="Escape"&&r()},s=n.map(c=>{const h=o("button",{class:c.primary?"btn primary":"btn",type:"button"},c.label);return h.addEventListener("click",()=>{r(),c.onClick()}),h}),l=o("div",{class:"modal",role:"dialog","aria-modal":"true"},o("h2",{},t),o("p",{},e),o("div",{class:"modal-actions"},...s)),i=o("div",{class:"backdrop"},l);i.addEventListener("click",c=>{c.target===i&&r()}),addEventListener("keydown",a),document.body.append(i),s.find(c=>c.classList.contains("primary"))?.focus()}function ir(){if(!N().flags.sawUpgrades)return I({title:"שדרוג הגיבורים"},o("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const t=o("div",{class:"stack"}),e=()=>{const n=N();t.replaceChildren(...Object.keys(ct).map(r=>{const a=n.heroes[r],s=It[r].map(i=>cr(r,i,e)),l=it(r,a.gender);return o("section",{class:"card hero"},o("h3",{},a.name?`${a.name} · ${l}`:l),o("div",{class:"stats"},...s))}))};return e(),I({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${lr(N())}`},t)}function cr(t,e,n){const s=N().heroes[t].levels[e]??0,l=Gt[t][e]??0,i=qn(l,e,s),c=Ln(s),h=o("button",{class:"btn small",type:"button"},c===null?"מרבי":`★ ${c}`);return c===null&&h.setAttribute("disabled","true"),h.addEventListener("click",()=>{if(c!==null){if(N().stars<c){or("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>T("/missions")}]);return}U(d=>{d.stars-=c;const f=d.heroes[t];f.levels[e]=(f.levels[e]??0)+1}),n()}}),o("div",{class:"stat-row"},o("span",{class:"stat-name"},Mn[e]),o("span",{class:"stat-value"},dr(i)),o("span",{class:"stat-level"},`דרגה ${s}`),h)}function dr(t){return t>=10?String(Math.round(t)):t.toFixed(1)}function be(t){const e=N(),n=$t(t.id??""),r=n&&Nt(n,e)?n:Ke(e),a=De(r,e),s=Ct(r).length-a.length,l=a.map(c=>{const h=pt(e,c.id),d=o("button",{class:"card mission-card",type:"button"},o("h3",{},c.title),o("span",{class:"stars-row"},fr(h)));return d.addEventListener("click",()=>T(`/mission/${c.id}`)),d}),i=l.length>0?[o("div",{class:"grid"},...l)]:[o("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return s>0&&i.push(o("p",{class:"muted"},`עוד ${s} משימות ייפתחו לפי ההתקדמות.`)),I({title:"משימות",subtitle:`${r.name} · ${r.domain}`},...i)}function fr(t){return"★".repeat(t)+"☆".repeat(K-t)}const At={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},hr=["m","f"];function pr(){const t=o("div",{class:"stack"}),e=()=>{const r=N();t.replaceChildren(...Object.keys(ct).map(a=>ur(a,r.heroes[a].gender,r.heroes[a].name,e)))};e();const n=o("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{U(r=>{for(const a of Object.keys(ct)){const s=r.heroes[a];s.name.trim()||(s.name=At[a][s.gender][0])}r.flags.setupDone=!0}),T("/")}),I({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:N().flags.setupDone},t,o("div",{class:"row"},n))}function ur(t,e,n,r){const a=o("input",{class:"name-input",type:"text",maxlength:"14",placeholder:At[t][e][0],value:n,"aria-label":`שם ה${it(t,e)}`});a.addEventListener("input",()=>{U(i=>{i.heroes[t].name=a.value})});const s=i=>{const c=o("button",{class:`btn small${e===i?" primary":""}`,type:"button"},tt[t][i]);return c.addEventListener("click",()=>{U(h=>{h.heroes[t].gender=i}),r()}),c},l=At[t][e].map(i=>{const c=o("button",{class:"chip",type:"button"},i);return c.addEventListener("click",()=>{U(h=>{h.heroes[t].name=i}),r()}),c});return o("section",{class:"card hero-setup"},o("div",{class:"setup-row"},...hr.map(s)),o("div",{class:"setup-row"},a),o("div",{class:"setup-row chips"},...l))}function gr(t){const e=Fe(t.id??""),n=e?Re(e.kind):void 0;if(!e||!n)return I({title:"משימה לא נמצאה"},o("p",{},"חזרה לתפריט המשימות."));const r=o("div",{class:"mission-stage"}),a=o("p",{class:"hint-line"}),s=o("div",{class:"stars-row big"}),l=o("div",{class:"overlay hidden"}),i=o("button",{class:"btn",type:"button"},"רמז"),c=o("button",{class:"btn primary",type:"button"},"בדיקה");c.setAttribute("disabled","true");let h,d,f=0,u=0,M=!1;const Z=()=>{const b=M?w:kt(f,u);s.replaceChildren(...Array.from({length:K},(v,L)=>o("span",{class:`star${L<b?" lit":""}`},"★")))};let w=K;const g=()=>{M||(d.answer()===null?c.setAttribute("disabled","true"):c.removeAttribute("disabled"))},x=b=>{d?.destroy(),h=n.generate(b),d=n.mount(h,g),f=0,u=0,M=!1,w=K,a.textContent="",r.replaceChildren(d.el,l),l.classList.add("hidden"),c.setAttribute("disabled","true"),i.removeAttribute("disabled"),Z(),k()};function k(){window.__mission={solve:()=>{d.demonstrate(),g()},place:b=>{d.place?.(b),g()},solution:()=>h.solution,state:()=>({hintsUsed:f,mistakes:u,finished:M,score:kt(f,u)})}}i.addEventListener("click",()=>{M||f>=h.hints.length||(f++,d.hint(f),a.textContent=h.hints[f-1]?.text??"",f>=h.hints.length&&i.setAttribute("disabled","true"),Z(),g())}),c.addEventListener("click",()=>{if(M)return;const b=d.answer();if(b!==null){if(h.check(b)){y();return}u++,a.textContent="לא שם. נסה שוב.",r.classList.add("shake"),setTimeout(()=>r.classList.remove("shake"),400),Z()}});function y(){M=!0,w=kt(f,u);const b=pt(N(),e.id),v=Oe(b,w);U(F=>{F.stars+=v,F.missions[e.id]=Math.max(b,w),F.solvedTopics.includes(e.topicId)||F.solvedTopics.push(e.topicId)}),Z();const L=o("button",{class:"btn",type:"button"},"עוד אחת");L.addEventListener("click",()=>x(Math.floor(Math.random()*65535)+1));const E=o("button",{class:"btn primary",type:"button"},"לתפריט המשימות");E.addEventListener("click",()=>T("/missions")),l.replaceChildren(o("div",{class:"panel"},o("h2",{},"נכון"),...h.explain.map(F=>o("p",{},F)),o("p",{class:"reward"},v>0?`+${v} ★`:"★"),o("div",{class:"modal-actions"},E,L))),l.classList.remove("hidden")}x(Date.now()&65535||1);const m=I({title:e.title,subtitle:""},r,a,o("div",{class:"hud"},s,o("div",{class:"hud-actions"},i,c)));return{el:m.el,destroy(){d.destroy(),m.destroy()}}}P("/",Qe);P("/continent/:id",en);P("/battle/:id",nr);P("/result/:id/:outcome",sr);P("/upgrades",ir);P("/missions",be);P("/missions/:id",be);P("/mission/:id",gr);P("/setup",pr);Me(()=>{const t=o("button",{class:"btn primary",type:"button"},"למפת העולם");return t.addEventListener("click",()=>T("/")),I({title:"הדף לא נמצא",showBack:!1},t)});!N().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const zt=document.getElementById("app");zt&&Ze(zt);
