(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const se=[];let ae=null,et=null,bt=null;function U(e,t){se.push({pattern:e.split("/").filter(Boolean),factory:t})}function qe(e){ae=e}function H(e){location.hash==="#"+e?qt():location.hash=e}function Ze(){history.length>1?history.back():H("/")}function $e(){return location.hash.replace(/^#/,"")||"/"}function Ae(e){const t=e.split("/").filter(Boolean);for(const n of se){if(n.pattern.length!==t.length)continue;const r={};let s=!0;for(let a=0;a<n.pattern.length;a++){const l=n.pattern[a],o=t[a];if(l.startsWith(":"))r[l.slice(1)]=decodeURIComponent(o);else if(l!==o){s=!1;break}}if(s)return{factory:n.factory,params:r}}return null}function qt(){if(!et)return;bt?.destroy?.(),et.replaceChildren();const e=$e(),t=Ae(e),n=t?.factory??ae;n&&(bt=n(t?.params??{}),et.append(bt.el),et.scrollTop=0)}function Se(e){et=e,addEventListener("hashchange",qt),qt()}const mt="euclid.";class Ee{read(t){try{const n=localStorage.getItem(mt+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(mt+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(mt+t)}catch{}}}const le=new Ee,oe="profile";function Ce(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function Fe(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let nt=Fe(le.read(oe)??Ce());const Zt=new Set;function I(){return nt}function Ne(e){return Zt.add(e),()=>Zt.delete(e)}function z(e){e(nt),le.write(oe,nt);for(const t of Zt)t(nt);return nt}function c(e,t={},...n){const r=document.createElement(e);for(const[s,a]of Object.entries(t))s==="class"?r.className=a:r.setAttribute(s,a);return r.append(...n),r}function T(e,...t){const n=c("button",{class:"stars",type:"button",title:"תפריט המשימות"}),r=()=>{n.replaceChildren(c("span",{class:"star-icon"},"★"),c("span",{},String(I().stars)))};r();const s=Ne(r);n.addEventListener("click",()=>H("/missions"));const a=c("header",{class:"top"});if(e.showBack!==!1){const o=c("button",{class:"back",type:"button","aria-label":"חזרה"},"→");o.addEventListener("click",()=>Ze()),a.append(o)}return a.append(c("div",{class:"titles"},c("h1",{},e.title),...e.subtitle?[c("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:c("div",{class:"page"},a,c("main",{class:"content"},...t)),destroy:()=>s()}}const Nt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function It(e){return Nt.find(t=>t.id===e)}function Gt(e){for(const t of Nt){const n=t.fortresses.find(r=>r.id===e);if(n)return{continent:t,fortress:n}}}function $t(e){return e.fortresses.filter(t=>!t.home)}const ie=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]}];function Ie(e){return ie.find(t=>t.id===e)}function ce(e){return ie.filter(t=>t.continent===e)}function kt(e){let t=e>>>0;const r=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return r.seed=e,r}function rt(e,t,n){return t+e()*(n-t)}const Ge="http://www.w3.org/2000/svg",de=1e3,Te=300,tt=70,lt=de-70,C=130;function Z(e,t={}){const n=document.createElementNS(Ge,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function Tt(e){const{from:t,to:n,tickStep:r,labelEvery:s}=e,a=document.createElement("div");a.className="board-wrap";const l=Z("svg",{class:"board number-line",viewBox:`0 0 ${de} ${Te}`});a.append(l);const o=document.createElement("div");o.className="tray",a.append(o);const i=Z("g",{class:"hints"}),h=Z("g",{class:"main"}),d=Z("g",{class:"drag"});l.append(i,h,d);const f=n-t,p=u=>tt+(u-t)/f*(lt-tt),w=u=>t+(u-tt)/(lt-tt)*f,M=u=>{const x=Math.round((u-t)/r),y=Math.min(Math.max(x,0),Math.round(f/r));return t+y*r};h.append(Z("line",{class:"axis",x1:String(tt-40),y1:String(C),x2:String(lt+40),y2:String(C)})),h.append(Z("path",{class:"axis-head",d:`M${lt+40} ${C} l-22 -11 v22 Z`}));for(let u=0;u*r<=f+1e-9;u++){const x=t+u*r,y=p(x),m=u%s===0;if(h.append(Z("line",{class:`tick${m?" labelled":""}`,x1:y.toFixed(1),y1:String(C-(m?20:11)),x2:y.toFixed(1),y2:String(C+(m?20:11))})),m){const b=Z("text",{class:"tick-label",x:y.toFixed(1),y:String(C+50),"text-anchor":"middle"});b.textContent=String(x),h.append(b)}}const k=u=>{const x=l.getScreenCTM();if(!x)return t;const y=new DOMPoint(u.clientX,u.clientY).matrixTransform(x.inverse());return M(w(y.x))},L=[],A={chest:`
      <ellipse class="chest-shadow" cx="0" cy="34" rx="44" ry="12"/>
      <path d="M-38 34 h76 v-30 h-76 Z" class="chest-body"/>
      <path d="M-38 4 q38 -34 76 0 Z" class="chest-lid"/>
      <rect x="-9" y="0" width="18" height="22" rx="4" class="chest-lock"/>
      <path d="M-38 16 h76" class="chest-band"/>`,frog:`
      <ellipse class="chest-shadow" cx="0" cy="30" rx="40" ry="11"/>
      <ellipse class="frog-body" cx="0" cy="8" rx="34" ry="24"/>
      <circle class="frog-eye" cx="-14" cy="-12" r="11"/>
      <circle class="frog-eye" cx="14" cy="-12" r="11"/>
      <circle class="frog-pupil" cx="-14" cy="-12" r="4.5"/>
      <circle class="frog-pupil" cx="14" cy="-12" r="4.5"/>
      <path class="frog-mouth" d="M-16 16 q16 10 32 0"/>
      <path class="frog-leg" d="M-30 22 q-14 6 -18 -6"/>
      <path class="frog-leg" d="M30 22 q14 6 18 -6"/>`,ship:`
      <ellipse class="chest-shadow" cx="0" cy="32" rx="46" ry="12"/>
      <path class="ship-hull" d="M-44 10 h88 l-16 22 h-56 Z"/>
      <path class="ship-mast" d="M0 10 v-46"/>
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:a,xOf:p,flag(u){const x=p(u),y=Z("g",{class:"flag",transform:`translate(${x.toFixed(1)} ${C})`});y.append(Z("path",{d:"M0 0 v-96",class:"pole"})),y.append(Z("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),h.append(y)},chest(u,x,y="chest"){let m=M(u);const b=Z("g",{class:`chest ${y}`});b.innerHTML=A[y];const $=Z("line",{class:"chest-thread",y1:String(C+6),y2:String(C+78)});d.append($);const q=()=>{const E=p(m);b.setAttribute("transform",`translate(${E.toFixed(1)} ${C+112})`),$.setAttribute("x1",E.toFixed(1)),$.setAttribute("x2",E.toFixed(1))};q(),d.append(b);let B=!1;const V=E=>{B=!0,b.setPointerCapture(E.pointerId),m=k(E),q(),x(m),E.preventDefault()},R=E=>{B&&(m=k(E),q(),x(m))},_=()=>{B=!1};b.addEventListener("pointerdown",V),b.addEventListener("pointermove",R),b.addEventListener("pointerup",_),b.addEventListener("pointercancel",_);const K=E=>{m=k(E),q(),x(m)};return l.addEventListener("pointerdown",K),L.push(()=>{b.removeEventListener("pointerdown",V),b.removeEventListener("pointermove",R),b.removeEventListener("pointerup",_),b.removeEventListener("pointercancel",_),l.removeEventListener("pointerdown",K)}),{get:()=>m,set:E=>{m=M(E),q(),x(m)}}},token(u,x="ship"){let y=M(u);const m=Z("g",{class:`chest static ${x}`});m.innerHTML=A[x],d.append(m);const b=()=>{m.setAttribute("transform",`translate(${p(y).toFixed(1)} ${C-18}) scale(0.78)`)};return b(),{get:()=>y,set:$=>{y=M($),b()}}},tray(u){o.replaceChildren();for(const x of u){const y=document.createElement("button");y.type="button",y.className="btn small tray-key",y.textContent=x.label,y.addEventListener("click",x.onClick),o.append(y)}},trayEnabled(u){for(const x of Array.from(o.children))u?x.removeAttribute("disabled"):x.setAttribute("disabled","true")},clearArrows(){for(const u of Array.from(h.querySelectorAll(".line-arrow")))u.remove()},band(u,x){const y=p(Math.min(u,x)),m=p(Math.max(u,x));i.append(Z("rect",{class:"hint-band",x:y.toFixed(1),y:String(C-60),width:(m-y).toFixed(1),height:"120",rx:"10"}))},bracket(u,x,y){const m=p(u),b=p(x),$=C+74,q=Z("g",{class:"hint-bracket"});q.append(Z("path",{d:`M${m.toFixed(1)} ${$-12} v12 H${b.toFixed(1)} v-12`}));const B=Z("text",{x:((m+b)/2).toFixed(1),y:String($+30),"text-anchor":"middle"});B.textContent=y,q.append(B),i.append(q)},count(u,x){const y=u<=x?r:-r,m=Math.round(Math.abs(x-u)/r);for(let b=1;b<=m;b++){const $=u+y*b,q=Z("text",{class:"hint-count",x:p($).toFixed(1),y:String(C-34),"text-anchor":"middle"});q.textContent=String(b),i.append(q)}},arrow(u,x,y,m="plus",b=0,$){const q=p(u),B=p(x),V=C-56-b*34,R=Z("g",{class:`line-arrow ${m}`});R.append(Z("path",{d:`M${q.toFixed(1)} ${C-6} C${q.toFixed(1)} ${V} ${B.toFixed(1)} ${V} ${B.toFixed(1)} ${C-6}`,fill:"none"}));const _=B>=q?1:-1;R.append(Z("path",{class:"head",d:`M${B.toFixed(1)} ${C-6} l${(-12*_).toFixed(1)} -14 l${(24*_).toFixed(1)} 0 Z`}));const K=Z("text",{x:((q+B)/2).toFixed(1),y:String(V-8),"text-anchor":"middle"});if(K.textContent=y,R.append(K),$!==void 0){const E=Z("g",{class:"order"});E.append(Z("circle",{cx:q.toFixed(1),cy:String(C-26),r:"15"}));const at=Z("text",{x:q.toFixed(1),y:String(C-19),"text-anchor":"middle"});at.textContent=String($),E.append(at),R.append(E)}return h.append(R),R},clearHints(){i.replaceChildren()},destroy(){for(const u of L)u();a.remove()}}}function j(e){return`⁦${e}⁩`}function fe(e,t,n){const r=t*n,s=Math.min(...e)-r,a=Math.max(...e)+r;return{tickStep:t,labelEvery:n,from:Math.floor(s/r)*r,to:Math.ceil(a/r)*r}}function Be(e){const t=kt(e),n=t()<.6?1:2,r=3+Math.floor(t()*2),s=n*(t()<.5?0:-2),a=[],l=[s];for(let d=0;d<r;d++){const f=n*(2+Math.floor(t()*5)),p=t()<.45?-1:1;a.push(p*f),l.push(l[l.length-1]+p*f)}if(l[l.length-1]===s){const d=n*3;a.push(d),l.push(l[l.length-1]+d)}const o=l[l.length-1],i=fe(l,n,5),h=a.map(d=>j(d)).join(" , ");return{config:{...i,start:s,moves:a},solution:o,check:d=>d===o,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${h}`,`הסכום שלהם הוא ${j(o-s)}.`,`מ־${j(s)} מגיעים ל־${j(o)}.`]}}function Re(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,start:l,moves:o}=e.config,i=Tt({from:n,to:r,tickStep:s,labelEvery:a}),h=[l];let d=l;const f=o.map((k,L)=>{const A=d+k,v=i.arrow(d,A,(k>0?"+":"")+k,k>=0?"plus":"minus",L%2,L+1);return d=A,h.push(A),v}),p=i.token(l,"ship");let w=null;const M=i.chest(l,k=>{w=k,t()},"chest");return{el:i.el,answer:()=>w,hint(k){if(k===1&&f[0]?.classList.add("lit"),k===2&&p.set(h[1]??l),k===3&&p.set(h[2]??h[h.length-1]??l),k>=4){for(const L of f)L.classList.add("lit");p.set(h[h.length-1]),M.set(h[h.length-1])}},demonstrate(){p.set(h[h.length-1]),M.set(h[h.length-1])},place:k=>M.set(k),destroy:()=>i.destroy()}}const He={kind:"voyage",generate:Be,mount:Re},_t=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function Oe(e){const t=kt(e),n=_t[Math.floor(t()*_t.length)],r=3+Math.floor(t()*2),s=t()<.5?0:-n[0],a=[],l=[s];for(let f=0;f<r;f++){const p=n[Math.floor(t()*n.length)];a.push(p),l.push(l[l.length-1]+p)}l[l.length-1]===s&&a.push(n[0]);const i=s+a.reduce((f,p)=>f+p,0),h=fe([...l,i],1,5),d=i-s;return{config:{...h,start:s,target:i,keys:n,route:a},solution:i,check:f=>f===i,hints:[{text:`מהצפרדע ליעד יש ${j(d)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${j(a[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${j(d)}.`,`${a.map(f=>j(f)).join(" ועוד ")} ביחד נותנים ${j(d)}.`]}}function je(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,start:l,target:o,keys:i,route:h}=e.config,d=Tt({from:n,to:r,tickStep:s,labelEvery:a});d.flag(o);let f=l,p=!1;const w=d.chest(l,()=>{},"frog"),M=document.createElement("p");M.className="running-total";const k=()=>{M.textContent=p?`${j(f-l)}`:""},L=v=>{const u=f+v;u<n||u>r||(d.arrow(f,u,(v>0?"+":"")+v,v>=0?"plus":"minus"),f=u,p=!0,w.set(f),k(),t())},A=()=>{d.clearArrows(),f=l,p=!1,w.set(l),k(),t()};return d.tray([...i.map(v=>({label:(v>0?"+":"")+v,onClick:()=>L(v)})),{label:"התחלה",onClick:A}]),d.el.append(M),{el:d.el,answer:()=>p?f:null,hint(v){if(v===1&&d.band(Math.min(l,o),Math.max(l,o)),v===2&&M.classList.add("lit"),v===3&&(A(),L(h[0]??0)),v>=4){A();for(const u of h)L(u)}},demonstrate(){A();for(const v of h)L(v)},place:v=>{f=v,p=!0,w.set(v),k(),t()},destroy:()=>d.destroy()}}const Pe={kind:"jumps",generate:Oe,mount:je},Ut=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function De(e){const t=kt(e),n=Ut[Math.floor(t()*Ut.length)],r=Math.round((n.to-n.from)/n.tickStep),s=[];for(let o=1;o<r;o++)o%n.labelEvery!==0&&s.push(n.from+o*n.tickStep);const a=s[Math.floor(t()*s.length)],l=n.tickStep*n.labelEvery;return{config:{...n,target:a},solution:a,check:o=>o===a,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${j(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${j(l)}.`,`כל סימון קטן שווה ${j(n.tickStep)}.`,`היעד הוא ${j(a)}.`]}}function _e(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,target:l}=e.config,o=Tt({from:n,to:r,tickStep:s,labelEvery:a});o.flag(l);let i=null;const h=o.chest(n,p=>{i=p,t()});i=null;const d=n+Math.floor((l-n)/(s*a))*s*a,f=d+s*a;return{el:o.el,answer:()=>i,hint(p){p===1&&o.band(d,f),p===2&&o.bracket(n,n+s,String(s)),p===3&&o.count(d,l),p>=4&&h.set(l)},demonstrate(){o.count(d,l),h.set(l)},place:p=>h.set(p),destroy:()=>o.destroy()}}const Ue={kind:"treasure-line",generate:De,mount:_e};const he={"treasure-line":Ue,jumps:Pe,voyage:He};function Ve(e){return he[e]}function pe(e){return he[e]!==void 0}const Q=5;function wt(e,t){return Math.max(1,Q-e-t)}function Ke(e,t){return Math.max(0,t-e)}const Ye=.8;function Bt(){return[...Nt].sort((e,t)=>e.order-t.order)}function xt(e,t){return e.missions[t]??0}function We(e,t){return xt(e,t)>0}function Xe(e,t){return pe(e.kind)&&e.requires.every(n=>We(t,n))}function ze(e,t){return ce(e.id).filter(n=>Xe(n,t))}function Rt(e){return ce(e.id).filter(t=>pe(t.kind))}function Je(e,t){return Rt(e).reduce((n,r)=>n+xt(t,r.id),0)}function Qe(e){return Rt(e).length*Q}function ue(e,t){const n=Qe(e);return n===0?!1:Je(e,t)>=Ye*n}function tn(e,t){return $t(e).every(n=>t.conquered.includes(n.id))}function Ht(e,t){const n=Bt(),r=n.findIndex(s=>s.id===e.id);return r<=0?!0:ue(n[r-1],t)}function en(e){const t=Bt();return t.find(n=>!ue(n,e)||!tn(n,e))??t[t.length-1]}const dt={width:2e3,height:1e3};function At(e,t){return{x:(e+180)/360*dt.width,y:(90-t)/180*dt.height}}const nn={x:0,y:0,w:dt.width,h:dt.height};function rn(e,t){const n=At(e.lon0,e.lat0),r=At(e.lon1,e.lat1);let s=Math.min(n.x,r.x),a=Math.min(n.y,r.y),l=Math.abs(r.x-n.x),o=Math.abs(r.y-n.y);if(l/o<t){const i=o*t;s-=(i-l)/2,l=i}else{const i=l/t;a-=(i-o)/2,o=i}return{x:s,y:a,w:l,h:o}}function sn(e,t,n){const r=At(e,t);return{left:(r.x-n.x)/n.w*100,top:(r.y-n.y)/n.h*100}}function ge(e,t,n){const r=c("div",{class:"map-art","aria-hidden":"true"});r.innerHTML=e;const s=r.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),s.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=c("div",{class:"map-markers"});for(const l of n){const{left:o,top:i}=sn(l.lon,l.lat,t),h=l.onClick?"button":"div",d=c(h,{class:`marker ${l.state}`,style:`left:${o.toFixed(2)}%; top:${i.toFixed(2)}%`});h==="button"&&d.setAttribute("type","button");const f=c("span",{class:"marker-icon"});f.innerHTML=l.icon;const p=c("span",{class:"marker-caption"},c("span",{class:"marker-label"},l.label),...l.sub?[c("span",{class:"marker-sub"},l.sub)]:[]);d.append(f,p),l.onClick&&d.addEventListener("click",l.onClick),a.append(d)}return c("div",{class:"map"},r,a)}const ye=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,an=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,ln=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function on(){const e=I(),t=Bt().map(n=>{const r=$t(n).length,s=$t(n).filter(a=>e.conquered.includes(a.id)).length;return Ht(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${s}/${r}`,state:"continent",icon:an,onClick:()=>H(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:ln}});return T({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},ge(ye,nn,t),c("div",{class:"row"},Mt("שדרוג הגיבורים","/upgrades"),Mt("תפריט המשימות","/missions"),Mt("הגיבורים שלי","/setup")))}function Mt(e,t){const n=c("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>H(t)),n}const vt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,cn=5/3;function dn(e){const t=It(e.id??"");if(!t)return T({title:"יבשת לא נמצאה"},c("p",{},"חזרה למפת העולם."));const n=I();if(!Ht(t,n)){const s=c("button",{class:"btn primary",type:"button"},"למפת העולם");return s.addEventListener("click",()=>H("/")),T({title:t.name,subtitle:t.domain},c("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),c("div",{class:"row"},s))}const r=t.fortresses.map(s=>s.home?{lon:s.lon,lat:s.lat,label:s.name,sub:"הבית שלך",state:"player",icon:vt}:n.conquered.includes(s.id)?{lon:s.lon,lat:s.lat,label:s.name,sub:"נכבש",state:"player",icon:vt}:{lon:s.lon,lat:s.lat,label:s.name,sub:s.starsNeeded>0?`${s.level} · ★ ${s.starsNeeded}`:String(s.level),state:"enemy",icon:vt,onClick:()=>H(`/battle/${s.id}`)});return T({title:t.name,subtitle:t.domain},ge(ye,rn(t.view,cn),r),c("div",{class:"row"},Vt("שדרוג הגיבורים","/upgrades"),Vt("תפריט המשימות",`/missions/${t.id}`)))}function Vt(e,t){const n=c("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>H(t)),n}function W(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function ft(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function fn(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function X(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function St(e,t){let n=null,r=1/0;for(const s of t){const a=W(e,s);(a<r-1e-9||Math.abs(a-r)<=1e-9&&n&&s.id<n.id)&&(n=s,r=a)}return n}const hn=2.2;function pn(e,t){const n=fn(e,t.side);if(n.length===0)return{kind:"idle"};const r=St(t,n.filter(l=>l.stats.range<=1.5));if(t.stats.range>2&&r&&W(t,r)<hn){const l=t.x-r.x,o=t.y-r.y,i=Math.hypot(l,o)||1;return{kind:"move",x:t.x+l/i*3,y:t.y+o/i*3}}const a=St(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}const Et=1/30,Kt=50;function un(e,t){return e*Kt/(Kt+t)}const Yt=.3,ke=.45,xe={arrow:14,fire:9,heal:12},gn=.85,yn=.15;function kn(e,t,n,r){const s=t==="player"?1:-1,a=t==="player"?3:n-3,l=r/2,o=[0,-1.6,1.6];return e.map((i,h)=>({x:a+(i.stats.range<=1.5?2*s:0),y:l+(o[h]??0)}))}function xn(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=kt(e.seed),r={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},s=(a,l)=>{const o=kn(a,l,t.width,t.height);a.forEach((i,h)=>{const d=o[h];r.units.push({id:`${l}-${i.cls}-${h}`,side:l,cls:i.cls,name:i.name,gender:i.gender,x:d.x+rt(n,-.6,.6),y:d.y+rt(n,-.6,.6),hp:i.stats.hp,maxHp:i.stats.hp,stats:i.stats,order:l===r.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:rt(n,0,1/i.stats.attackRate),healCooldown:rt(n,0,i.stats.healRate??3),facing:l==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return s(e.player,"player"),s(e.enemy,"enemy"),r}function Lt(e,t,n){const r=X(e,t);r?.alive&&(r.order=n)}function Wt(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function Xt(e,t){const n=X(e,t);if(!n?.alive||!n.stats.healing)return null;let r=null;for(const s of ft(e,n.side))s.id===n.id||s.hp>=s.maxHp||W(n,s)>n.stats.range||(!r||s.hp/s.maxHp<r.hp/r.maxHp)&&(r=s);return r}function bn(e,t){const n=X(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function mn(e,t,n){const r=X(e,t),s=X(e,n),a=r?.stats.healing;return!r?.alive||!a||r.healCooldown>0||!s?.alive||s.side!==r.side||s.id===r.id||W(r,s)>r.stats.range?!1:(be(e,r,s,a),!0)}function be(e,t,n,r){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:r,speed:xe.heal}),t.healCooldown=t.stats.healRate??3}function wn(e,t=Et){if(!e.winner){e.time+=t,Mn(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),vn(e,n),Ln(e,n,t));$n(e),An(e),Sn(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Mn(e,t){const n=[];for(const r of e.projectiles){const s=X(e,r.targetId);if(!s||!s.alive)continue;const a=s.x-r.x,l=s.y-r.y,o=Math.hypot(a,l),i=r.speed*t;if(o<=i){if(r.kind==="heal"){const h=Math.min(s.maxHp-s.hp,r.amount);s.hp+=h,e.events.push({kind:"heal",unitId:s.id,amount:h,time:e.time})}else me(e,s,r.amount);continue}r.x+=a/o*i,r.y+=l/o*i,r.angle=Math.atan2(l,a),n.push(r)}e.projectiles=n}function vn(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const r=ft(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*gn&&W(t,a)<=t.stats.range);let s=null;for(const a of r)(!s||a.hp/a.maxHp<s.hp/s.maxHp)&&(s=a);s&&be(e,t,s,n)}function Ln(e,t,n){const r=qn(e,t);if(r.kind==="idle"){t.targetId=null;return}if(r.kind==="move"){t.targetId=null,zt(t,r.x,r.y,n);return}const s=X(e,r.targetId);if(!s||!s.alive){t.targetId=null;return}if(t.targetId=s.id,W(t,s)>t.stats.range){zt(t,s.x,s.y,n);return}t.facing=s.x>=t.x?1:-1,t.cooldown<=0&&Zn(e,t,s)}function qn(e,t){const n=t.order;if(n.kind==="move")if(W(t,n)<=yn)t.order=Wt(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const r=X(e,t.order.targetId);if(r?.alive)return{kind:"attack",targetId:r.id};t.order=Wt(e,t)}if(t.order.kind==="hold"){const r=e.units.filter(a=>a.alive&&a.side!==t.side&&W(t,a)<=t.stats.range),s=St(t,r);return s?{kind:"attack",targetId:s.id}:{kind:"idle"}}return pn(e,t)}function zt(e,t,n,r){const s=t-e.x,a=n-e.y,l=Math.hypot(s,a);if(l<1e-6)return;const o=Math.min(l,e.stats.speed*r);e.x+=s/l*o,e.y+=a/l*o,Math.abs(s)>1e-6&&(e.facing=s>0?1:-1)}function Zn(e,t,n){const r=un(t.stats.attack,n.stats.defense)*(1+rt(e.rng,-Yt,Yt));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){me(e,n,r);return}const s=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:s,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:r,speed:xe[s]})}function me(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function $n(e){const t=e.units.filter(r=>r.alive),n=ke*2;for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const a=t[r],l=t[s],o=l.x-a.x,i=l.y-a.y,h=Math.hypot(o,i);if(h>=n)continue;const d=(n-h)/2,f=h<1e-6?1:o/h,p=h<1e-6?0:i/h;a.x-=f*d,a.y-=p*d,l.x+=f*d,l.y+=p*d}}function An(e){const t=ke;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function Sn(e){const t=ft(e,"player").length,n=ft(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const st={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function ht(e,t){return st[e][t]}const pt={warrior:st.warrior.m,archer:st.archer.m,mage:st.mage.m},Ot={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},En={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},jt={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Pt=[2,3,5,8,12,17,23,30],we=Pt.length,Cn=.08;function Fn(e){return e>=we?null:Pt[e]}function Me(e){return 1+Cn*e}const Jt=8;function Nn(e,t,n){return e*Me(n)}function In(e){let t=0;for(let n=0;n<Math.min(e,we);n++)t+=Pt[n];return t}const ve=["warrior","archer","mage"],Gn={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Tn=["hp","attack","defense"];function Bn(e,t){const r={...Ot[e]};for(const s of jt[e]){const a=t[s]??0;if(a<=0)continue;const l=r[s];typeof l=="number"&&(r[s]=l*Me(a))}return r}function Rn(e){return ve.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||pt[t],gender:n.gender,stats:Bn(t,n.levels)}})}function Hn(e){return ve.map(t=>{const n={...Ot[t]};for(const r of Tn){const s=n[r];typeof s=="number"&&(n[r]=s*e)}return{cls:t,name:Gn[t],gender:"m",stats:n}})}function On(e,t,n){const r=Gt(e);return!r||r.fortress.home?null:{player:Rn(t),enemy:Hn(r.fortress.difficulty),seed:n,manual:"player"}}let it=null;function jn(e){it=e}function Pn(e){return it&&it.fortressId===e?it:null}const P={x:64,y:84},D={x:56,y:58},Y={x:77,y:56},ut={x:66,y:50},gt={x:60,y:52},Qt={x:100,y:70},yt={x:99,y:51};function Dn(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function S(e,t,n,r,s=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${r})${s}`)}function _n(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function Un(e,t){const{phase:n,stride:r,time:s}=t,a=Math.sin(n)*r,l=Math.sin(n*2)*r,o=Math.sin(s*2.1)*(1-r),i=_n(t.sinceAttack);S(e.legBack,a*26,P.x,P.y),S(e.legFront,-a*26,P.x,P.y),S(e.cloak,a*9+o*1.6,gt.x,gt.y),S(e.robe,a*4+o*1.2,P.x,P.y+20),S(e.quiver,a*6,D.x,D.y);const h=-Math.abs(l)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${h.toFixed(2)}) rotate(${(a*2+o*.9).toFixed(2)} ${P.x} ${P.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(h*1.15).toFixed(2)}) rotate(${(-a*2.5+o*1.4).toFixed(2)} ${ut.x} ${ut.y})`),t.cls){case"warrior":{S(e.armBack,-a*14,D.x,D.y),S(e.armFront,a*10+i*60,Y.x,Y.y),S(e.sword,i*42,yt.x,yt.y),ct(e.swoosh,t.sinceAttack<.42?Math.max(0,i)*.9:0);break}case"archer":{const d=t.sinceAttack<.42?i:-.35;if(S(e.armFront,a*5,Y.x,Y.y),S(e.armBack,-a*8-d*16,D.x,D.y),e.arrow){const f=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=f?"0":"1",e.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}e.bow&&S(e.bow,d*4,104,68),ct(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{S(e.armBack,-a*10,D.x,D.y),S(e.armFront,a*6+i*26,Y.x,Y.y),S(e.staff,i*18,Qt.x,Qt.y);const d=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(s*4);e.orb&&te(e.orb,d,100,20),e.orbHalo&&te(e.orbHalo,d*1.1,100,20);const f=t.sinceAttack>=0&&t.sinceAttack<.45;ct(e.swoosh,f?1-t.sinceAttack/.45:0),e.swoosh&&f&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function ct(e,t){e&&(e.style.opacity=t.toFixed(2))}function te(e,t,n,r){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(r*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function Vn(e,t){const n=Math.min(1,t),r=1-Math.pow(1-n,3);S(e.legBack,r*30,P.x,P.y),S(e.legFront,-r*20,P.x,P.y),S(e.armBack,r*40,D.x,D.y),S(e.armFront,-r*60,Y.x,Y.y),S(e.sword,r*50,yt.x,yt.y),ct(e.swoosh,0),S(e.head,r*18,ut.x,ut.y),S(e.cloak,r*12,gt.x,gt.y)}const Kn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Yn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Wn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Xn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,zn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Jn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Qn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,tr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,G=100,J=128,ee=2.05,ne=.7,er="http://www.w3.org/2000/svg",nr={"warrior-f":Yn,"warrior-m":Wn,"archer-f":Xn,"archer-m":zn,"mage-f":Jn,"mage-m":Qn};function F(e,t={}){const n=document.createElementNS(er,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function Ct(e,t,n){const r=e.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width",String(t)),r.setAttribute("height",String(n)),r.setAttribute("overflow","visible"))}function rr(){const e=F("defs");return e.innerHTML=`
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
    </filter>`,e}function sr(e,t){const n=F("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*G} ${e.arena.height*G}`,preserveAspectRatio:"xMidYMid meet"}),r=F("g",{class:"arena-art"});r.innerHTML=Kn,Ct(r,e.arena.width*G,e.arena.height*G);const s=F("g",{class:"layer-ground"}),a=F("g",{class:"layer-units"}),l=F("g",{class:"layer-shots"}),o=F("g",{class:"layer-bursts"}),i=F("g",{class:"layer-text"}),h=F("rect",{class:"vignette",width:String(e.arena.width*G),height:String(e.arena.height*G),fill:"url(#fx-vignette)"});n.append(rr(),r,s,a,l,o,i,h);const d=new Map;for(const p of e.units){const w=ar(p);d.set(p.id,w),s.append(w.ring,w.shadow,w.dust),a.append(w.group)}const f=p=>{p.preventDefault();const w=n.getScreenCTM();if(!w)return;const M=new DOMPoint(p.clientX,p.clientY).matrixTransform(w.inverse()),k=M.x/G,L=M.y/G;let A=null,v=1;for(const u of e.units){if(!u.alive)continue;const x=Math.hypot(u.x-k,u.y-.5-L);x<v&&(v=x,A=u)}t({x:k,y:L,unit:A})};return n.addEventListener("pointerdown",f),{el:n,update(p,w){for(const k of p.units)d.get(k.id)?.update(k,p.time,w.has(k.id));const M=[...p.units].sort((k,L)=>Number(k.alive)-Number(L.alive)||k.y-L.y);for(const k of M){const L=d.get(k.id);L&&a.append(L.group)}lr(l,p.projectiles,p.time),ir(o,p,d),cr(i,p,d)},destroy(){n.removeEventListener("pointerdown",f),n.remove()}}}function ar(e){const t=F("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=F("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),r=F("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});r.style.opacity="0";const s=F("g",{class:`unit ${e.side} ${e.cls}`}),a=F("g",{class:"sprite"});a.innerHTML=nr[`${e.cls}-${e.gender}`]??"",Ct(a,J,J);const l=F("g",{class:"fallen"});l.innerHTML=tr,Ct(l,J,J),l.setAttribute("transform",`scale(${ee}) translate(${-J/2} -122)`),l.style.display="none";const o=F("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),i=F("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});s.append(l,a,o,i);const h=Dn(a),d={group:s,ring:t,shadow:n,dust:r,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(f,p,w){const M=f.x*G,k=f.y*G,L=Math.hypot(f.x-d.px,f.y-d.py);d.px=f.x,d.py=f.y,L>8e-4&&(d.phase+=L*4.4,d.lastMoveAt=p);const A=p-d.lastMoveAt<.25,v=p-f.lastAttackAt;f.alive?Un(h,{cls:f.cls,phase:d.phase,stride:A?1:0,sinceAttack:v,time:p}):Vn(h,(p-f.lastHitAt)/ne);const u=f.alive&&v>=0&&v<.3?Math.sin(v/.3*Math.PI)*16*f.facing:0;s.setAttribute("transform",`translate(${(M+u).toFixed(1)} ${k.toFixed(1)})`),t.setAttribute("cx",M.toFixed(1)),t.setAttribute("cy",k.toFixed(1)),t.style.display=w&&f.alive?"":"none",n.setAttribute("cx",M.toFixed(1)),n.setAttribute("cy",(k+6).toFixed(1)),n.style.opacity=f.alive?"1":"0.4",r.setAttribute("cx",(M-26*f.facing).toFixed(1)),r.setAttribute("cy",(k+10).toFixed(1)),r.style.opacity=A&&f.alive?(.18+.12*Math.abs(Math.sin(p*9))).toFixed(2):"0";const x=p-f.lastHitAt<.18,y=x&&f.alive?1.05:1,m=ee*y;a.setAttribute("transform",`scale(${(f.facing*m).toFixed(3)} ${m.toFixed(3)}) translate(${-J/2} -122)`);const b=f.alive?0:(p-f.lastHitAt)/ne;a.style.display=f.alive||b<1?"":"none",a.style.opacity=f.alive?"1":String(Math.max(0,1-b)),l.style.display=!f.alive&&b>.55?"":"none",l.style.opacity=String(Math.min(1,Math.max(0,(b-.55)/.45)));const $=Math.max(0,f.hp/f.maxHp);i.setAttribute("width",(94*$).toFixed(1)),s.classList.toggle("hurt",x&&f.alive),s.classList.toggle("dead",!f.alive),o.style.display=f.alive?"":"none",i.style.display=f.alive?"":"none"}};return d}function lr(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(F("g"));t.forEach((r,s)=>{const a=e.childNodes[s];a.getAttribute("data-kind")!==r.kind&&(a.setAttribute("data-kind",r.kind),a.setAttribute("class",`shot ${r.kind}`),a.innerHTML=or(r.kind));const o=r.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(r.x*G).toFixed(1)} ${(r.y*G).toFixed(1)}) rotate(${(r.angle*180/Math.PI).toFixed(1)})${o}`)})}function or(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function ir(e,t,n){const r=t.events.filter(s=>t.time-s.time<.32);for(;e.childNodes.length>r.length;)e.lastChild?.remove();for(;e.childNodes.length<r.length;)e.append(F("circle"));r.forEach((s,a)=>{const l=e.childNodes[a],o=n.get(s.unitId);if(!o)return;const i=(t.time-s.time)/.32;l.setAttribute("class",`burst ${s.kind}`),l.setAttribute("cx",(o.px*G).toFixed(1)),l.setAttribute("cy",(o.py*G-90).toFixed(1)),l.setAttribute("r",(14+i*40).toFixed(1)),l.setAttribute("opacity",(1-i).toFixed(2))})}function cr(e,t,n){const r=t.events.filter(s=>t.time-s.time<1.1&&s.amount>=1);for(;e.childNodes.length>r.length;)e.lastChild?.remove();for(;e.childNodes.length<r.length;)e.append(F("text",{"text-anchor":"middle"}));r.forEach((s,a)=>{const l=e.childNodes[a],o=n.get(s.unitId);if(!o)return;const i=(t.time-s.time)/1.1;l.setAttribute("class",`floater ${s.kind}`),l.setAttribute("x",(o.px*G).toFixed(1)),l.setAttribute("y",(o.py*G-210-i*70).toFixed(1)),l.setAttribute("opacity",(1-i*i).toFixed(2));const h=`${s.kind==="heal"?"+":"-"}${Math.round(s.amount)}`;l.textContent!==h&&(l.textContent=h)})}function dr(e){const t=Gt(e.id??""),n=t?On(t.fortress.id,I(),Date.now()&65535||1):null;if(!t||!n)return T({title:"מבצר לא נמצא"},c("p",{},"חזרה למפת העולם."));const{continent:r,fortress:s}=t;if(I().conquered.includes(s.id)){const g=c("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return g.addEventListener("click",()=>H(`/continent/${r.id}`)),T({title:s.name,subtitle:r.name,showStars:!1},c("p",{class:"notice"},"המבצר הזה כבר נכבש."),c("div",{class:"row"},g))}const a=xn(n),l=new Set(a.units.filter(g=>g.side==="player").map(g=>g.id)),o=hr(new URLSearchParams(location.search).get("speed"));let i=!1,h=!1,d=0,f=0,p=0;window.__battle=a;const w=sr(a,g=>_(g)),M=c("div",{class:"stage"});M.append(w.el);const k=c("div",{class:"overlay"});M.append(k);const L=()=>{k.replaceChildren(c("div",{class:"panel"},c("h2",{},s.name),c("p",{},`רמת האויב: ${s.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),c("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),v())),k.classList.remove("hidden")},A=g=>{jn({fortressId:s.id,won:g,seconds:a.time,heroes:B.map(O=>({cls:O.cls,name:O.name||ht(O.cls,O.gender),alive:O.alive,health:Math.max(0,O.hp/O.maxHp)}))});const N=c("button",{class:"btn primary",type:"button"},"המשך");N.addEventListener("click",()=>H(`/result/${s.id}/${g?"win":"lose"}`)),k.replaceChildren(c("div",{class:"panel"},c("h2",{},g?"המבצר נכבש":"הקרב אבד"),c("p",{},g?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),N)),k.classList.remove("hidden")};function v(){const g=c("button",{class:"btn primary",type:"button"},"התחל קרב");return g.addEventListener("click",()=>{k.classList.add("hidden"),i=!0,f=performance.now()}),g}const u=c("div",{class:"portraits"}),x=c("button",{class:"btn small",type:"button"},"השהה"),y=c("button",{class:"btn small",type:"button"},"ריפוי"),m=c("button",{class:"btn small",type:"button"},"בחר הכול"),b=c("button",{class:"btn small",type:"button"},"עמוד במקום");x.addEventListener("click",()=>{h||(i=!i,f=performance.now(),x.textContent=i?"השהה":"המשך")}),m.addEventListener("click",()=>{l.clear();for(const g of a.units)g.side==="player"&&g.alive&&l.add(g.id);R()}),b.addEventListener("click",()=>{for(const g of l)Lt(a,g,{kind:"hold"})});const $=a.units.find(g=>g.side==="player"&&g.cls==="mage");y.addEventListener("click",()=>{if(!$)return;const g=Xt(a,$.id);g&&(mn(a,$.id,g.id),q())});function q(){($?bn(a,$.id)&&Xt(a,$.id)!==null:!1)?y.removeAttribute("disabled"):y.setAttribute("disabled","true")}const B=a.units.filter(g=>g.side==="player"),V=B.map(g=>{const N=c("span",{class:"portrait-fill"}),O=c("button",{class:`portrait ${g.cls}`,type:"button"},c("span",{class:"portrait-name"},g.name||ht(g.cls,g.gender)),c("span",{class:"portrait-bar"},N));return O.addEventListener("click",()=>{g.alive&&(l.clear(),l.add(g.id),R())}),u.append(O),{unit:g,button:O,fill:N}});function R(){q();for(const g of V){const N=Math.max(0,g.unit.hp/g.unit.maxHp);g.fill.style.width=`${(N*100).toFixed(0)}%`,g.button.classList.toggle("selected",l.has(g.unit.id)),g.button.classList.toggle("dead",!g.unit.alive)}}R();function _(g){if(!i)return;const N=g.unit;if(N&&N.side==="player"&&N.alive){l.clear(),l.add(N.id),R();return}if(l.size!==0)for(const O of l)N&&N.side==="enemy"&&N.alive?Lt(a,O,{kind:"attack",targetId:N.id}):Lt(a,O,{kind:"move",x:g.x,y:g.y})}const K=g=>{g.code==="Space"&&(g.preventDefault(),x.click())};addEventListener("keydown",K);const E=()=>{if(d=requestAnimationFrame(E),i&&!h){const g=performance.now();p+=Math.min(.1,(g-f)/1e3)*o*fr,f=g;let N=0;for(;p>=Et&&N<8*o;)at(),p-=Et,N++}w.update(a,l)},at=()=>{wn(a),a.winner&&!h&&(h=!0,i=!1,A(a.winner==="player")),R()};L(),d=requestAnimationFrame(E);const Dt=T({title:s.name,subtitle:`${r.name} · ${r.domain}`,showStars:!1},M,c("div",{class:"hud"},u,c("div",{class:"hud-actions"},y,m,b,x)));return{el:Dt.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",K),w.destroy(),Dt.destroy()}}}const fr=.6;function hr(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function pr(e){const t=Gt(e.id??"");if(!t)return T({title:"מבצר לא נמצא"},c("p",{},"חזרה למפת העולם."));const{continent:n,fortress:r}=t,s=e.outcome==="win",a=Pn(r.id),l=!I().flags.sawUpgrades;z(d=>{s&&!d.conquered.includes(r.id)&&d.conquered.push(r.id),l&&(d.flags.sawUpgrades=!0,d.stars+=Jt)});const o=[];a&&o.push(c("section",{class:"card"},c("h3",{},"הגיבורים שלך"),...a.heroes.map(d=>c("div",{class:"stat-row"},c("span",{class:"stat-name"},d.name),c("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),c("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),l&&o.push(c("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Jt} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const i=n.fortresses.filter(d=>!d.home&&!I().conquered.includes(d.id)).length;s&&i===0?o.push(c("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):s||o.push(c("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const h=c("div",{class:"row"},ot(s?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...s?[]:[ot("קרב נוסף באותו מבצר",`/battle/${r.id}`)],ot("חזרה ליבשת",`/continent/${n.id}`),ot("תפריט המשימות","/missions"));return T({title:s?"המבצר נכבש":"הקרב אבד",subtitle:`${r.name} · ${It(n.id)?.name??""}`,showBack:!1},...o,h)}function ot(e,t,n=!1){const r=c("button",{class:n?"btn primary":"btn",type:"button"},e);return r.addEventListener("click",()=>H(t)),r}function ur(e){let t=0;for(const n of Object.keys(e.heroes)){const r=e.heroes[n];for(const s of jt[n])t+=In(r.levels[s]??0)}return t}function gr(e,t,n){const r=()=>{o.remove(),removeEventListener("keydown",s)},s=i=>{i.key==="Escape"&&r()},a=n.map(i=>{const h=c("button",{class:i.primary?"btn primary":"btn",type:"button"},i.label);return h.addEventListener("click",()=>{r(),i.onClick()}),h}),l=c("div",{class:"modal",role:"dialog","aria-modal":"true"},c("h2",{},e),c("p",{},t),c("div",{class:"modal-actions"},...a)),o=c("div",{class:"backdrop"},l);o.addEventListener("click",i=>{i.target===o&&r()}),addEventListener("keydown",s),document.body.append(o),a.find(i=>i.classList.contains("primary"))?.focus()}function yr(){if(!I().flags.sawUpgrades)return T({title:"שדרוג הגיבורים"},c("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=c("div",{class:"stack"}),t=()=>{const n=I();e.replaceChildren(...Object.keys(pt).map(r=>{const s=n.heroes[r],a=jt[r].map(o=>kr(r,o,t)),l=ht(r,s.gender);return c("section",{class:"card hero"},c("h3",{},s.name?`${s.name} · ${l}`:l),c("div",{class:"stats"},...a))}))};return t(),T({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${ur(I())}`},e)}function kr(e,t,n){const a=I().heroes[e].levels[t]??0,l=Ot[e][t]??0,o=Nn(l,t,a),i=Fn(a),h=c("button",{class:"btn small",type:"button"},i===null?"מרבי":`★ ${i}`);return i===null&&h.setAttribute("disabled","true"),h.addEventListener("click",()=>{if(i!==null){if(I().stars<i){gr("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>H("/missions")}]);return}z(d=>{d.stars-=i;const f=d.heroes[e];f.levels[t]=(f.levels[t]??0)+1}),n()}}),c("div",{class:"stat-row"},c("span",{class:"stat-name"},En[t]),c("span",{class:"stat-value"},xr(o)),c("span",{class:"stat-level"},`דרגה ${a}`),h)}function xr(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function Le(e){const t=I(),n=It(e.id??""),r=n&&Ht(n,t)?n:en(t),s=ze(r,t),a=Rt(r).length-s.length,l=s.map(i=>{const h=xt(t,i.id),d=c("button",{class:"card mission-card",type:"button"},c("h3",{},i.title),c("span",{class:"stars-row"},br(h)));return d.addEventListener("click",()=>H(`/mission/${i.id}`)),d}),o=l.length>0?[c("div",{class:"grid"},...l)]:[c("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return a>0&&o.push(c("p",{class:"muted"},`עוד ${a} משימות ייפתחו לפי ההתקדמות.`)),T({title:"משימות",subtitle:`${r.name} · ${r.domain}`},...o)}function br(e){return"★".repeat(e)+"☆".repeat(Q-e)}const Ft={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},mr=["m","f"];function wr(){const e=c("div",{class:"stack"}),t=()=>{const r=I();e.replaceChildren(...Object.keys(pt).map(s=>Mr(s,r.heroes[s].gender,r.heroes[s].name,t)))};t();const n=c("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{z(r=>{for(const s of Object.keys(pt)){const a=r.heroes[s];a.name.trim()||(a.name=Ft[s][a.gender][0])}r.flags.setupDone=!0}),H("/")}),T({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:I().flags.setupDone},e,c("div",{class:"row"},n))}function Mr(e,t,n,r){const s=c("input",{class:"name-input",type:"text",maxlength:"14",placeholder:Ft[e][t][0],value:n,"aria-label":`שם ה${ht(e,t)}`});s.addEventListener("input",()=>{z(o=>{o.heroes[e].name=s.value})});const a=o=>{const i=c("button",{class:`btn small${t===o?" primary":""}`,type:"button"},st[e][o]);return i.addEventListener("click",()=>{z(h=>{h.heroes[e].gender=o}),r()}),i},l=Ft[e][t].map(o=>{const i=c("button",{class:"chip",type:"button"},o);return i.addEventListener("click",()=>{z(h=>{h.heroes[e].name=o}),r()}),i});return c("section",{class:"card hero-setup"},c("div",{class:"setup-row"},...mr.map(a)),c("div",{class:"setup-row"},s),c("div",{class:"setup-row chips"},...l))}function vr(e){const t=Ie(e.id??""),n=t?Ve(t.kind):void 0;if(!t||!n)return T({title:"משימה לא נמצאה"},c("p",{},"חזרה לתפריט המשימות."));const r=c("div",{class:"mission-stage"}),s=c("p",{class:"hint-line"}),a=c("div",{class:"stars-row big"}),l=c("div",{class:"overlay hidden"}),o=c("button",{class:"btn",type:"button"},"רמז"),i=c("button",{class:"btn primary",type:"button"},"בדיקה");i.setAttribute("disabled","true");let h,d,f=0,p=0,w=!1;const M=()=>{const y=w?k:wt(f,p);a.replaceChildren(...Array.from({length:Q},(m,b)=>c("span",{class:`star${b<y?" lit":""}`},"★")))};let k=Q;const L=()=>{!d||w||(d.answer()===null?i.setAttribute("disabled","true"):i.removeAttribute("disabled"))},A=y=>{d?.destroy(),h=n.generate(y),d=n.mount(h,L),f=0,p=0,w=!1,k=Q,s.textContent="",r.replaceChildren(d.el,l),l.classList.add("hidden"),i.setAttribute("disabled","true"),o.removeAttribute("disabled"),M(),v()};function v(){window.__mission={solve:()=>{d.demonstrate(),L()},place:y=>{d.place?.(y),L()},solution:()=>h.solution,state:()=>({hintsUsed:f,mistakes:p,finished:w,score:wt(f,p)})}}o.addEventListener("click",()=>{w||f>=h.hints.length||(f++,d.hint(f),s.textContent=h.hints[f-1]?.text??"",f>=h.hints.length&&o.setAttribute("disabled","true"),M(),L())}),i.addEventListener("click",()=>{if(w)return;const y=d.answer();if(y!==null){if(h.check(y)){u();return}p++,s.textContent="לא שם. נסה שוב.",r.classList.add("shake"),setTimeout(()=>r.classList.remove("shake"),400),M()}});function u(){w=!0,k=wt(f,p);const y=xt(I(),t.id),m=Ke(y,k);z(q=>{q.stars+=m,q.missions[t.id]=Math.max(y,k),q.solvedTopics.includes(t.topicId)||q.solvedTopics.push(t.topicId)}),M();const b=c("button",{class:"btn",type:"button"},"עוד אחת");b.addEventListener("click",()=>A(Math.floor(Math.random()*65535)+1));const $=c("button",{class:"btn primary",type:"button"},"לתפריט המשימות");$.addEventListener("click",()=>H("/missions")),l.replaceChildren(c("div",{class:"panel"},c("h2",{},"נכון"),...h.explain.map(q=>c("p",{},q)),c("p",{class:"reward"},m>0?`+${m} ★`:"★"),c("div",{class:"modal-actions"},$,b))),l.classList.remove("hidden")}A(Date.now()&65535||1);const x=T({title:t.title,subtitle:""},r,s,c("div",{class:"hud"},a,c("div",{class:"hud-actions"},o,i)));return{el:x.el,destroy(){d.destroy(),x.destroy()}}}U("/",on);U("/continent/:id",dn);U("/battle/:id",dr);U("/result/:id/:outcome",pr);U("/upgrades",yr);U("/missions",Le);U("/missions/:id",Le);U("/mission/:id",vr);U("/setup",wr);qe(()=>{const e=c("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>H("/")),T({title:"הדף לא נמצא",showBack:!1},e)});!I().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const re=document.getElementById("app");re&&Se(re);
