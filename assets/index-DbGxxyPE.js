(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const xe=[];let ye=null,it=null,Et=null;function Q(e,t){xe.push({pattern:e.split("/").filter(Boolean),factory:t})}function Re(e){ye=e}function V(e){location.hash==="#"+e?Gt():location.hash=e}function Pe(){history.length>1?history.back():V("/")}function De(){return location.hash.replace(/^#/,"")||"/"}function _e(e){const t=e.split("/").filter(Boolean);for(const r of xe){if(r.pattern.length!==t.length)continue;const s={};let n=!0;for(let o=0;o<r.pattern.length;o++){const a=r.pattern[o],l=t[o];if(a.startsWith(":"))s[a.slice(1)]=decodeURIComponent(l);else if(a!==l){n=!1;break}}if(n)return{factory:r.factory,params:s}}return null}function Gt(){if(!it)return;Et?.destroy?.(),it.replaceChildren();const e=De(),t=_e(e),r=t?.factory??ye;r&&(Et=r(t?.params??{}),it.append(Et.el),it.scrollTop=0)}function Ve(e){it=e,addEventListener("hashchange",Gt),Gt()}const St="euclid.";class Ue{read(t){try{const r=localStorage.getItem(St+t);return r===null?null:JSON.parse(r)}catch{return null}}write(t,r){try{localStorage.setItem(St+t,JSON.stringify(r))}catch{}}remove(t){try{localStorage.removeItem(St+t)}catch{}}}const me=new Ue,ke="profile";function Ye(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function Ke(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let ct=Ke(me.read(ke)??Ye());const Tt=new Set;function R(){return ct}function We(e){return Tt.add(e),()=>Tt.delete(e)}function rt(e){e(ct),me.write(ke,ct);for(const t of Tt)t(ct);return ct}function g(e,t={},...r){const s=document.createElement(e);for(const[n,o]of Object.entries(t))n==="class"?s.className=o:s.setAttribute(n,o);return s.append(...r),s}function _(e,...t){const r=g("button",{class:"stars",type:"button",title:"תפריט המשימות"}),s=()=>{r.replaceChildren(g("span",{class:"star-icon"},"★"),g("span",{},String(R().stars)))};s();const n=We(s);r.addEventListener("click",()=>V("/missions"));const o=g("header",{class:"top"});if(e.showBack!==!1){const l=g("button",{class:"back",type:"button","aria-label":"חזרה"},"→");l.addEventListener("click",()=>Pe()),o.append(l)}return o.append(g("div",{class:"titles"},g("h1",{},e.title),...e.subtitle?[g("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&o.append(r),{el:g("div",{class:"page"},o,g("main",{class:"content"},...t)),destroy:()=>n()}}const Pt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function Dt(e){return Pt.find(t=>t.id===e)}function _t(e){for(const t of Pt){const r=t.fortresses.find(s=>s.id===e);if(r)return{continent:t,fortress:r}}}function zt(e){return e.fortresses.filter(t=>!t.home)}const be=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]},{id:"australia-product",continent:"australia",topicId:"mul-div",title:"מלבן המכפלה",kind:"product",requires:["asia-quadrant"]},{id:"australia-powers",continent:"australia",topicId:"powers",title:"סולם החזקות",kind:"powers",requires:["australia-product"]},{id:"australia-square",continent:"australia",topicId:"powers",title:"הריבוע השלם",kind:"perfect-square",requires:["australia-powers"]},{id:"australia-sum-letters",continent:"australia",topicId:"mul-div",title:"חיבור בטור עם אותיות",kind:"alphametic-sum",requires:["australia-product"]},{id:"australia-product-letters",continent:"australia",topicId:"mul-div",title:"כפל בטור עם אותיות",kind:"alphametic-product",requires:["australia-sum-letters"]}];function Xe(e){return be.find(t=>t.id===e)}function we(e){return be.filter(t=>t.continent===e)}function J(e){let t=e>>>0;const s=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return s.seed=e,s}function dt(e,t,r){return t+e()*(r-t)}function ze(e,t){const{rows:r,sign:s,letters:n}=e,o=document.createElement("div");o.className="board-wrap columns-board";const a=document.createElement("div");a.className="columns";const l=Math.max(...r.map(x=>x.length));r.forEach((x,y)=>{const u=document.createElement("div");u.className="col-row";const w=x.padStart(l," "),b=document.createElement("span");b.className="col-cell sign",b.textContent=y===r.length-2?s:"",u.append(b);for(const q of w){const L=document.createElement("span");L.className=q===" "?"col-cell blank":"col-cell letter",L.dataset.letter=q.trim(),L.textContent=q.trim(),u.append(L)}y===r.length-2&&u.classList.add("last-addend"),a.append(u)});const i=document.createElement("div");i.className="col-rule",a.insertBefore(i,a.lastElementChild);const c=document.createElement("p");c.className="columns-live";const d=document.createElement("p");d.className="chain-hint";const p=document.createElement("div");p.className="letters";const f=document.createElement("div");f.className="keypad",o.append(a,c,d,p,f);const m={};let $=n[0]??"";const h=()=>{p.replaceChildren();for(const x of n){const y=document.createElement("button");y.type="button",y.className=`chip letter-chip${x===$?" selected":""}`;const u=m[x];Object.entries(m).some(([b,q])=>b!==x&&q===u&&u!==void 0)&&y.classList.add("clash"),y.innerHTML=`<span class="chip-letter">${x}</span><span class="chip-digit">${u??"?"}</span>`,y.addEventListener("click",()=>{$=x,h()}),p.append(y)}for(const x of Array.from(a.querySelectorAll(".col-cell.letter"))){const y=x.dataset.letter??"",u=m[y];x.textContent=u===void 0?y:String(u),x.classList.toggle("filled",u!==void 0)}};for(let x=0;x<=9;x++){const y=document.createElement("button");y.type="button",y.className="btn small tray-key digit-key",y.textContent=String(x),y.addEventListener("click",()=>{$&&(m[$]=x,h(),t())}),f.append(y)}const k=document.createElement("button");return k.type="button",k.className="btn small tray-key",k.textContent="נקה",k.addEventListener("click",()=>{for(const x of n)delete m[x];h(),t()}),f.append(k),h(),{el:o,assignment:()=>({...m}),set(x,y){m[x]=y,h(),t()},clear(){for(const x of n)delete m[x];h(),t()},live:x=>{c.textContent=x},reveal(x,y){m[x]=y,h(),t()},mark:x=>{d.textContent=x},destroy:()=>o.remove()}}function v(e){return`⁦${e}⁩`}const Jt=["א","ב","ג","ד","ה","ו"];function Qt(e,t,r){const s=[...new Set([...String(e),...String(t),...String(r)])];if(s.length>Jt.length)return null;const n=new Map;s.forEach((l,i)=>n.set(l,Jt[i]));const o=l=>String(l).split("").map(i=>n.get(i)).join(""),a=[o(e),o(t),o(r)];return{rows:a,letters:s.map(l=>n.get(l)),leading:[...new Set(a.map(l=>l[0]))]}}function Je(e,t){let r=0;for(const s of e){const n=t[s];if(n===void 0)return null;r=r*10+n}return r}function Qe(e,t){const r=e.letters.map(a=>t[a]);if(r.some(a=>a===void 0)||new Set(r).size!==r.length||e.leading.some(a=>t[a]===0))return!1;const[s,n,o]=e.rows.map(a=>Je(a,t));return s===null||n===null||o===null?!1:e.sign==="+"?s+n===o:s*n===o}function Me(e,t){const r=J(e);let s=0,n=0,o=0,a=null;for(let f=0;f<400;f++)if(t==="+"?(s=11+Math.floor(r()*78),n=11+Math.floor(r()*78),o=s+n):(s=12+Math.floor(r()*38),n=3+Math.floor(r()*7),o=s*n),!(String(o).includes("0")||String(s).includes("0")||String(n).includes("0"))){if(a=Qt(s,n,o),a&&a.letters.length>=3)break;a=null}a||(s=12,n=34,o=46,a=Qt(s,n,o));const l={rows:a.rows,sign:t,letters:a.letters,values:{a:s,b:n,result:o},leading:a.leading},i={},c=(f,m)=>{f.split("").forEach(($,h)=>{i[$]=Number(String(m)[h])})};c(a.rows[0],s),c(a.rows[1],n),c(a.rows[2],o);const d=a.rows[2][a.rows[2].length-1],p=a.letters[0];return{config:l,solution:i,check:f=>Qe(l,f),hints:[{text:"מתחילים מטור היחידות"},{text:`${p} = ${v(i[p])}`},{text:`${d} = ${v(i[d])}`},{text:"כל האותיות"}],explain:[t==="+"?`${v(s)} + ${v(n)} = ${v(o)}.`:`${v(s)} × ${v(n)} = ${v(o)}.`,"כל אות היא ספרה אחת, ולשתי אותיות שונות ספרות שונות."]}}function tn(e){return Me(e,"+")}function en(e){return Me(e,"×")}function ve(e,t){const{rows:r,sign:s,letters:n}=e.config,o=e.solution;let a=!1;const l=ze({rows:r,sign:s,letters:n},()=>{a=!0,i(),t()});function i(){const c=l.assignment(),d=r.map(p=>p.split("").map(f=>c[f]??"?").join(""));l.live(`${d[0]} ${s} ${d[1]} = ${d[2]}`)}return i(),{el:l.el,answer:()=>a?l.assignment():null,hint(c){if(c===1&&l.mark(`${r[0].slice(-1)} ${s} ${r[1].slice(-1)} → ${r[2].slice(-1)}`),c===2&&l.reveal(n[0],o[n[0]]),c===3){const d=n.find(p=>l.assignment()[p]===void 0)??n[1];l.reveal(d,o[d])}if(c>=4)for(const d of n)l.reveal(d,o[d])},demonstrate(){for(const c of n)l.reveal(c,o[c])},place:c=>{l.clear();for(const[d,p]of Object.entries(c))l.set(d,p)},destroy:()=>l.destroy()}}const nn={kind:"alphametic-sum",generate:tn,mount:ve},rn={kind:"alphametic-product",generate:en,mount:ve},sn="http://www.w3.org/2000/svg",Le=1e3,on=300,lt=70,pt=Le-70,G=130;function A(e,t={}){const r=document.createElementNS(sn,e);for(const[s,n]of Object.entries(t))r.setAttribute(s,n);return r}function Vt(e){const{from:t,to:r,tickStep:s,labelEvery:n}=e,o=document.createElement("div");o.className="board-wrap";const a=A("svg",{class:"board number-line",viewBox:`0 0 ${Le} ${on}`});o.append(a);const l=document.createElement("div");l.className="tray",o.append(l);const i=A("g",{class:"hints"}),c=A("g",{class:"main"}),d=A("g",{class:"drag"});a.append(i,c,d);const p=r-t,f=u=>lt+(u-t)/p*(pt-lt),m=u=>t+(u-lt)/(pt-lt)*p,$=u=>{const w=Math.round((u-t)/s),b=Math.min(Math.max(w,0),Math.round(p/s));return t+b*s};c.append(A("line",{class:"axis",x1:String(lt-40),y1:String(G),x2:String(pt+40),y2:String(G)})),c.append(A("path",{class:"axis-head",d:`M${pt+40} ${G} l-22 -11 v22 Z`}));for(let u=0;u*s<=p+1e-9;u++){const w=t+u*s,b=f(w),q=u%n===0;if(c.append(A("line",{class:`tick${q?" labelled":""}`,x1:b.toFixed(1),y1:String(G-(q?20:11)),x2:b.toFixed(1),y2:String(G+(q?20:11))})),q){const L=A("text",{class:"tick-label",x:b.toFixed(1),y:String(G+50),"text-anchor":"middle"});L.textContent=String(w),c.append(L)}}const h=u=>{const w=a.getScreenCTM();if(!w)return t;const b=new DOMPoint(u.clientX,u.clientY).matrixTransform(w.inverse());return $(m(b.x))},k=[],x={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:o,xOf:f,flag(u){const w=f(u),b=A("g",{class:"flag",transform:`translate(${w.toFixed(1)} ${G})`});b.append(A("path",{d:"M0 0 v-96",class:"pole"})),b.append(A("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),c.append(b)},chest(u,w,b="chest"){let q=$(u);const L=A("g",{class:`chest ${b}`});L.innerHTML=x[b];const S=A("line",{class:"chest-thread",y1:String(G+6),y2:String(G+78)});d.append(S);const E=()=>{const C=f(q);L.setAttribute("transform",`translate(${C.toFixed(1)} ${G+112})`),S.setAttribute("x1",C.toFixed(1)),S.setAttribute("x2",C.toFixed(1))};E(),d.append(L);let Z=!1;const K=C=>{Z=!0,L.setPointerCapture(C.pointerId),q=h(C),E(),w(q),C.preventDefault()},O=C=>{Z&&(q=h(C),E(),w(q))},W=()=>{Z=!1};L.addEventListener("pointerdown",K),L.addEventListener("pointermove",O),L.addEventListener("pointerup",W),L.addEventListener("pointercancel",W);const U=C=>{q=h(C),E(),w(q)};return a.addEventListener("pointerdown",U),k.push(()=>{L.removeEventListener("pointerdown",K),L.removeEventListener("pointermove",O),L.removeEventListener("pointerup",W),L.removeEventListener("pointercancel",W),a.removeEventListener("pointerdown",U)}),{get:()=>q,set:C=>{q=$(C),E(),w(q)}}},token(u,w="ship"){let b=$(u);const q=A("g",{class:`chest static ${w}`});q.innerHTML=x[w],d.append(q);const L=()=>{q.setAttribute("transform",`translate(${f(b).toFixed(1)} ${G-18}) scale(0.78)`)};return L(),{get:()=>b,set:S=>{b=$(S),L()}}},tray(u){l.replaceChildren();for(const w of u){const b=document.createElement("button");b.type="button",b.className="btn small tray-key",b.textContent=w.label,b.addEventListener("click",w.onClick),l.append(b)}},trayEnabled(u){for(const w of Array.from(l.children))u?w.removeAttribute("disabled"):w.setAttribute("disabled","true")},clearArrows(){for(const u of Array.from(c.querySelectorAll(".line-arrow")))u.remove()},band(u,w){const b=f(Math.min(u,w)),q=f(Math.max(u,w));i.append(A("rect",{class:"hint-band",x:b.toFixed(1),y:String(G-60),width:(q-b).toFixed(1),height:"120",rx:"10"}))},bracket(u,w,b){const q=f(u),L=f(w),S=G+74,E=A("g",{class:"hint-bracket"});E.append(A("path",{d:`M${q.toFixed(1)} ${S-12} v12 H${L.toFixed(1)} v-12`}));const Z=A("text",{x:((q+L)/2).toFixed(1),y:String(S+30),"text-anchor":"middle"});Z.textContent=b,E.append(Z),i.append(E)},count(u,w){const b=u<=w?s:-s,q=Math.round(Math.abs(w-u)/s);for(let L=1;L<=q;L++){const S=u+b*L,E=A("text",{class:"hint-count",x:f(S).toFixed(1),y:String(G-34),"text-anchor":"middle"});E.textContent=String(L),i.append(E)}},arrow(u,w,b,q="plus",L=0,S){const E=f(u),Z=f(w),K=G-56-L*34,O=A("g",{class:`line-arrow ${q}`});O.append(A("path",{d:`M${E.toFixed(1)} ${G-6} C${E.toFixed(1)} ${K} ${Z.toFixed(1)} ${K} ${Z.toFixed(1)} ${G-6}`,fill:"none"}));const W=Z>=E?1:-1;O.append(A("path",{class:"head",d:`M${Z.toFixed(1)} ${G-6} l${(-12*W).toFixed(1)} -14 l${(24*W).toFixed(1)} 0 Z`}));const U=A("text",{x:((E+Z)/2).toFixed(1),y:String(K-8),"text-anchor":"middle"});if(U.textContent=b,O.append(U),S!==void 0){const C=A("g",{class:"order"});C.append(A("circle",{cx:E.toFixed(1),cy:String(G-26),r:"15"}));const j=A("text",{x:E.toFixed(1),y:String(G-19),"text-anchor":"middle"});j.textContent=String(S),C.append(j),O.append(C)}return c.append(O),O},clearHints(){i.replaceChildren()},destroy(){for(const u of k)u();o.remove()}}}function qe(e,t,r){const s=t*r,n=Math.min(...e)-s,o=Math.max(...e)+s;return{tickStep:t,labelEvery:r,from:Math.floor(n/s)*s,to:Math.ceil(o/s)*s}}function an(e){const t=J(e),r=t()<.6?1:2,s=3+Math.floor(t()*2),n=r*(t()<.5?0:-2),o=[],a=[n];for(let d=0;d<s;d++){const p=r*(2+Math.floor(t()*5)),f=t()<.45?-1:1;o.push(f*p),a.push(a[a.length-1]+f*p)}if(a[a.length-1]===n){const d=r*3;o.push(d),a.push(a[a.length-1]+d)}const l=a[a.length-1],i=qe(a,r,5),c=o.map(d=>v(d)).join(" , ");return{config:{...i,start:n,moves:o},solution:l,check:d=>d===l,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${c}`,`הסכום שלהם הוא ${v(l-n)}.`,`מ־${v(n)} מגיעים ל־${v(l)}.`]}}function ln(e,t){const{from:r,to:s,tickStep:n,labelEvery:o,start:a,moves:l}=e.config,i=Vt({from:r,to:s,tickStep:n,labelEvery:o}),c=[a];let d=a;const p=l.map((h,k)=>{const x=d+h,y=i.arrow(d,x,(h>0?"+":"")+h,h>=0?"plus":"minus",k%2,k+1);return d=x,c.push(x),y}),f=i.token(a,"ship");let m=null;const $=i.chest(a,h=>{m=h,t()},"chest");return{el:i.el,answer:()=>m,hint(h){if(h===1&&p[0]?.classList.add("lit"),h===2&&f.set(c[1]??a),h===3&&f.set(c[2]??c[c.length-1]??a),h>=4){for(const k of p)k.classList.add("lit");f.set(c[c.length-1]),$.set(c[c.length-1])}},demonstrate(){f.set(c[c.length-1]),$.set(c[c.length-1])},place:h=>$.set(h),destroy:()=>i.destroy()}}const cn={kind:"voyage",generate:an,mount:ln},te=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function dn(e){const t=J(e),r=te[Math.floor(t()*te.length)],s=3+Math.floor(t()*2),n=t()<.5?0:-r[0],o=[],a=[n];for(let p=0;p<s;p++){const f=r[Math.floor(t()*r.length)];o.push(f),a.push(a[a.length-1]+f)}a[a.length-1]===n&&o.push(r[0]);const i=n+o.reduce((p,f)=>p+f,0),c=qe([...a,i],1,5),d=i-n;return{config:{...c,start:n,target:i,keys:r,route:o},solution:i,check:p=>p===i,hints:[{text:`מהצפרדע ליעד יש ${v(d)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${v(o[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${v(d)}.`,`${o.map(p=>v(p)).join(" ועוד ")} ביחד נותנים ${v(d)}.`]}}function fn(e,t){const{from:r,to:s,tickStep:n,labelEvery:o,start:a,target:l,keys:i,route:c}=e.config,d=Vt({from:r,to:s,tickStep:n,labelEvery:o});d.flag(l);let p=a,f=!1;const m=d.chest(a,()=>{},"frog"),$=document.createElement("p");$.className="running-total";const h=()=>{$.textContent=f?`${v(p-a)}`:""},k=y=>{const u=p+y;u<r||u>s||(d.arrow(p,u,(y>0?"+":"")+y,y>=0?"plus":"minus"),p=u,f=!0,m.set(p),h(),t())},x=()=>{d.clearArrows(),p=a,f=!1,m.set(a),h(),t()};return d.tray([...i.map(y=>({label:(y>0?"+":"")+y,onClick:()=>k(y)})),{label:"התחלה",onClick:x}]),d.el.append($),{el:d.el,answer:()=>f?p:null,hint(y){if(y===1&&d.band(Math.min(a,l),Math.max(a,l)),y===2&&$.classList.add("lit"),y===3&&(x(),k(c[0]??0)),y>=4){x();for(const u of c)k(u)}},demonstrate(){x();for(const y of c)k(y)},place:y=>{p=y,f=!0,m.set(y),h(),t()},destroy:()=>d.destroy()}}const pn={kind:"jumps",generate:dn,mount:fn},hn="http://www.w3.org/2000/svg",P=720,B=40;function F(e,t={}){const r=document.createElementNS(hn,e);for(const[s,n]of Object.entries(t))r.setAttribute(s,n);return r}function $e(e){const{range:t}=e,r=document.createElement("div");r.className="board-wrap";const s=F("svg",{class:"board grid-board",viewBox:`0 0 ${P} ${P}`});r.append(s);const n=F("g",{class:"hints"}),o=F("g",{class:"main"}),a=F("g",{class:"drag"});s.append(n,o,a);const l=(P-2*B)/(2*t),i=h=>P/2+h*l,c=h=>P/2-h*l,d=(h,k)=>({x:Math.max(-t,Math.min(t,Math.round((h-P/2)/l))),y:Math.max(-t,Math.min(t,Math.round((P/2-k)/l)))});for(let h=-t;h<=t;h++)o.append(F("line",{class:"grid-line",x1:String(B),y1:c(h).toFixed(1),x2:String(P-B),y2:c(h).toFixed(1)})),o.append(F("line",{class:"grid-line",x1:i(h).toFixed(1),y1:String(B),x2:i(h).toFixed(1),y2:String(P-B)}));o.append(F("line",{class:"grid-axis",x1:String(B-14),y1:c(0).toFixed(1),x2:String(P-B+14),y2:c(0).toFixed(1)})),o.append(F("line",{class:"grid-axis",x1:i(0).toFixed(1),y1:String(P-B+14),x2:i(0).toFixed(1),y2:String(B-14)})),o.append(F("path",{class:"grid-head",d:`M${P-B+14} ${c(0)} l-18 -9 v18 Z`})),o.append(F("path",{class:"grid-head",d:`M${i(0)} ${B-14} l-9 18 h18 Z`}));for(let h=-t;h<=t;h++){if(h===0)continue;const k=F("text",{class:"grid-label",x:i(h).toFixed(1),y:(c(0)+30).toFixed(1),"text-anchor":"middle"});k.textContent=String(h);const x=F("text",{class:"grid-label",x:(i(0)-16).toFixed(1),y:(c(h)+9).toFixed(1),"text-anchor":"end"});x.textContent=String(h),o.append(k,x)}const p=h=>{const k=s.getScreenCTM();if(!k)return{x:0,y:0};const x=new DOMPoint(h.clientX,h.clientY).matrixTransform(k.inverse());return d(x.x,x.y)},f=[],m=(h,k)=>h.map(x=>`${i(x.x+k.x).toFixed(1)},${c(x.y+k.y).toFixed(1)}`).join(" ");return{el:r,xOf:i,yOf:c,pick(h){let k={x:0,y:0};const x=F("g",{class:"pick hidden"});x.append(F("circle",{class:"pick-ring",r:"22"})),x.append(F("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),a.append(x);const y=()=>{x.classList.remove("hidden"),x.setAttribute("transform",`translate(${i(k.x).toFixed(1)} ${c(k.y).toFixed(1)})`)},u=w=>{k=p(w),y(),h(k),w.preventDefault()};return s.addEventListener("pointerdown",u),f.push(()=>s.removeEventListener("pointerdown",u)),{get:()=>k,set:w=>{k=w,y(),h(k)}}},shape(h,k=""){const x=F("polygon",{class:`shape ${k}`,points:m(h,{x:0,y:0})});return o.append(x),x},dragShape(h,k,x){let y={...k};const u=F("polygon",{class:"shape ghost",points:m(h,y)});a.append(u);const w=()=>u.setAttribute("points",m(h,y));let b=!1;const q=Z=>{b=!0,u.setPointerCapture(Z.pointerId),Z.preventDefault()},L=Z=>{b&&(y=p(Z),w(),x(y))},S=()=>{b=!1};u.addEventListener("pointerdown",q),u.addEventListener("pointermove",L),u.addEventListener("pointerup",S),u.addEventListener("pointercancel",S);const E=Z=>{Z.target!==u&&(y=p(Z),w(),x(y))};return s.addEventListener("pointerdown",E),f.push(()=>{u.removeEventListener("pointerdown",q),u.removeEventListener("pointermove",L),u.removeEventListener("pointerup",S),u.removeEventListener("pointercancel",S),s.removeEventListener("pointerdown",E)}),{get:()=>y,set:Z=>{y={...Z},w(),x(y)}}},scout(h,k){const x=i(k==="x"?h:0),y=c(k==="x"?0:h),u=F("g",{class:`scout ${k}`,transform:`translate(${x.toFixed(1)} ${y.toFixed(1)})`});u.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,o.append(u)},guide(h,k){const x=k==="x"?{x1:i(h),y1:B,x2:i(h),y2:P-B}:{x1:B,y1:c(h),x2:P-B,y2:c(h)};n.append(F("line",{class:"guide",x1:x.x1.toFixed(1),y1:x.y1.toFixed(1),x2:x.x2.toFixed(1),y2:x.y2.toFixed(1)}))},mirrorAxis(h){const k=h==="y"?{x1:i(0),y1:B-14,x2:i(0),y2:P-B+14}:{x1:B-14,y1:c(0),x2:P-B+14,y2:c(0)};o.append(F("line",{class:"mirror-axis",x1:k.x1.toFixed(1),y1:k.y1.toFixed(1),x2:k.x2.toFixed(1),y2:k.y2.toFixed(1)}))},span(h,k,x){const y=F("g",{class:"hint-span"});y.append(F("line",{x1:i(h.x).toFixed(1),y1:c(h.y).toFixed(1),x2:i(k.x).toFixed(1),y2:c(k.y).toFixed(1)}));const u=F("text",{x:((i(h.x)+i(k.x))/2).toFixed(1),y:((c(h.y)+c(k.y))/2-10).toFixed(1),"text-anchor":"middle"});u.textContent=x,y.append(u),n.append(y)},dot(h,k=""){n.append(F("circle",{class:`grid-dot ${k}`,cx:i(h.x).toFixed(1),cy:c(h.y).toFixed(1),r:"11"}))},clearHints(){n.replaceChildren()},destroy(){for(const h of f)h();r.remove()}}}function un(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const ee=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function gn(e){const t=J(e),r=6,s=ee[Math.floor(t()*ee.length)],n=t()<.5?"y":"x",o=n==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},a=un(o,n);return{config:{range:r,shape:s,anchor:o,axis:n},solution:a,check:i=>i.x===a.x&&i.y===a.y,hints:[{text:`הציר ${n==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[n==="y"?`בשיקוף סביב הציר האנכי כל ${v("x")} מחליף סימן ו־${v("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${v("y")} מחליף סימן ו־${v("x")} נשאר.`,`${v(`(${o.x}, ${o.y})`)} הולך ל־${v(`(${a.x}, ${a.y})`)}.`]}}function xn(e,t){const{range:r,shape:s,anchor:n,axis:o}=e.config,a=e.solution,l=$e({range:r});l.mirrorAxis(o),l.shape(s.map(f=>({x:f.x+n.x,y:f.y+n.y})));const i=s.map(f=>o==="y"?{x:-f.x,y:f.y}:{x:f.x,y:-f.y});let c=null;const d=o==="y"?{x:-r+1,y:-r+2}:{x:-r+2,y:-r+1},p=l.dragShape(i,d,f=>{c=f,t()});return{el:l.el,answer:()=>c,hint(f){if(f===1&&l.guide(0,o==="y"?"x":"y"),f===2){const m=o==="y"?{x:0,y:n.y}:{x:n.x,y:0};l.span(n,m,v(Math.abs(o==="y"?n.x:n.y)))}f===3&&l.dot(a,"lit"),f>=4&&p.set(a)},demonstrate(){l.dot(a,"lit"),p.set(a)},place:f=>p.set(f),destroy:()=>l.destroy()}}const yn={kind:"mirror",generate:gn,mount:xn};function mn(){const e=document.createElement("div");e.className="board-wrap chain-board";const t=document.createElement("p");t.className="chain-goal";const r=document.createElement("p");r.className="chain-value";const s=document.createElement("p");s.className="chain-steps";const n=document.createElement("p");n.className="chain-hint";const o=document.createElement("div");return o.className="tray",e.append(t,r,s,n,o),{el:e,setValue:a=>{r.textContent=String(a)},setChain:a=>{s.textContent=a.join(" → ")},goal:a=>{t.textContent=a},keys:a=>{o.replaceChildren();for(const l of a){const i=document.createElement("button");i.type="button",i.className="btn small tray-key",i.textContent=l.label,i.addEventListener("click",l.onClick),o.append(i)}},mark:a=>{n.textContent=a},matched:a=>r.classList.toggle("matched",a),clearHints:()=>{n.textContent=""},destroy:()=>e.remove()}}function kn(e){const t=J(e),r=[2,3,5],s=r[Math.floor(t()*r.length)],n=s===2?4+Math.floor(t()*4):s===3?3+Math.floor(t()*2):2+Math.floor(t()*2),o=s**n,a=[...new Set([s,...r])].sort((l,i)=>l-i);return{config:{base:s,exponent:n,target:o,keys:a},solution:o,check:l=>l===o,hints:[{text:`${v(o)} הוא חזקה של ${v(s)}`},{text:`${v(s)} × ${v(s)} = ${v(s*s)}`},{text:`צריך ${v(n)} פעמים ${v(s)}`},{text:"כך בונים את המספר"}],explain:[`${v(o)} = ${v(`${s}^${n}`)}.`,`${Array.from({length:n},()=>v(s)).join(" × ")} = ${v(o)}.`]}}function bn(e,t){const{base:r,exponent:s,target:n,keys:o}=e.config,a=mn();a.goal(`${n}`);let l=1,i=["1"],c=!1;const d=()=>{a.setValue(l),a.setChain(i),a.matched(l===n)},p=m=>{l*m>n*100||(l*=m,i.push(`×${m}`),c=!0,d(),t())},f=()=>{l=1,i=["1"],c=!1,d(),t()};return a.keys([...o.map(m=>({label:`× ${m}`,onClick:()=>p(m)})),{label:"התחלה",onClick:f}]),d(),{el:a.el,answer:()=>c?l:null,hint(m){if(m===1&&a.mark(`${n} = ?`),m===2&&a.mark(`${r} × ${r} = ${r*r}`),m===3&&(f(),p(r),p(r)),m>=4){f();for(let $=0;$<s;$++)p(r)}},demonstrate(){f();for(let m=0;m<s;m++)p(r)},place:m=>{l=m,c=!0,i=[String(m)],d(),t()},destroy:()=>a.destroy()}}const wn={kind:"powers",generate:kn,mount:bn},Mn="http://www.w3.org/2000/svg",Zt=820,At=620,ht=70;function Y(e,t={}){const r=document.createElementNS(Mn,e);for(const[s,n]of Object.entries(t))r.setAttribute(s,n);return r}function vn(e){const{cols:t,rows:r,square:s=!1}=e,n=document.createElement("div");n.className="board-wrap";const o=Y("svg",{class:"board rect-board",viewBox:`0 0 ${Zt} ${At}`});n.append(o);const a=Y("g",{class:"hints"}),l=Y("g",{class:"main"}),i=Y("g",{class:"drag"});o.append(l,a,i);const c=Math.min((Zt-2*ht)/t,(At-2*ht)/r),d=ht,p=At-ht,f=x=>d+x*c,m=x=>p-x*c;for(let x=0;x<=t;x++)l.append(Y("line",{class:"cell-line",x1:f(x).toFixed(1),y1:m(0).toFixed(1),x2:f(x).toFixed(1),y2:m(r).toFixed(1)}));for(let x=0;x<=r;x++)l.append(Y("line",{class:"cell-line",x1:f(0).toFixed(1),y1:m(x).toFixed(1),x2:f(t).toFixed(1),y2:m(x).toFixed(1)}));const $=Y("text",{class:"goal",x:String(Zt-30),y:"58","text-anchor":"end"});l.append($);const h=[];return{el:n,corner(x,y){let u={...x};const w=Y("rect",{class:"area-rect"}),b=Y("circle",{class:"area-handle",r:"20"}),q=Y("text",{class:"area-text",x:"30",y:"58","text-anchor":"start"}),L=Y("text",{class:"side-label","text-anchor":"middle"}),S=Y("text",{class:"side-label","text-anchor":"middle"});i.append(w,L,S,q,b);const E=()=>{w.setAttribute("x",f(0).toFixed(1)),w.setAttribute("y",m(u.h).toFixed(1)),w.setAttribute("width",(u.w*c).toFixed(1)),w.setAttribute("height",(u.h*c).toFixed(1)),b.setAttribute("cx",f(u.w).toFixed(1)),b.setAttribute("cy",m(u.h).toFixed(1)),q.textContent=`${u.w} × ${u.h} = ${u.w*u.h}`,L.setAttribute("x",f(u.w/2).toFixed(1)),L.setAttribute("y",(m(0)+44).toFixed(1)),L.textContent=String(u.w),S.setAttribute("x",(f(0)-32).toFixed(1)),S.setAttribute("y",(m(u.h/2)+10).toFixed(1)),S.textContent=String(u.h)};E();const Z=j=>{const at=o.getScreenCTM();if(!at)return u;const M=new DOMPoint(j.clientX,j.clientY).matrixTransform(at.inverse());let N=Math.round((M.x-d)/c),H=Math.round((p-M.y)/c);if(s){const Xt=Math.max(N,H);N=Xt,H=Xt}return{w:Math.max(1,Math.min(t,N)),h:Math.max(1,Math.min(r,H))}};let K=!1;const O=j=>{K=!0,b.setPointerCapture(j.pointerId),j.preventDefault()},W=j=>{K&&(u=Z(j),E(),y(u))},U=()=>{K=!1};b.addEventListener("pointerdown",O),b.addEventListener("pointermove",W),b.addEventListener("pointerup",U),b.addEventListener("pointercancel",U);const C=j=>{j.target!==b&&(u=Z(j),E(),y(u))};return o.addEventListener("pointerdown",C),h.push(()=>{b.removeEventListener("pointerdown",O),b.removeEventListener("pointermove",W),b.removeEventListener("pointerup",U),b.removeEventListener("pointercancel",U),o.removeEventListener("pointerdown",C)}),{get:()=>u,set:j=>{u={...j},E(),y(u)}}},goal(x){$.textContent=x},strip(x,y){a.append(Y("rect",{class:"hint-strip",x:f(0).toFixed(1),y:m(y).toFixed(1),width:(x*c).toFixed(1),height:(y*c).toFixed(1)}))},clearHints(){a.replaceChildren()},destroy(){for(const x of h)x();n.remove()}}}function ne(e,t,r){const s=[];for(let n=1;n<=t;n++){if(e%n!==0)continue;const o=e/n;o>=1&&o<=r&&s.push({w:n,h:o})}return s}function Ln(e){const t=J(e),r=12,s=10;let n=24;for(let l=0;l<40;l++){const i=2+Math.floor(t()*9),c=2+Math.floor(t()*8),d=i*c;if(ne(d,r,s).filter(p=>p.w>1&&p.h>1).length>=2){n=d;break}}const o=ne(n,r,s),a=o.find(l=>l.w>1&&l.h>1)??o[0];return{config:{cols:r,rows:s,target:n,square:!1},solution:a,check:l=>l.w*l.h===n,hints:[{text:`צריך מלבן ששטחו ${v(n)}`},{text:`${v(a.w)} בשורה`},{text:`${v(a.w)} כפול ${v(a.h)}`},{text:"כך זה נראה"}],explain:[`${v(a.w)} × ${v(a.h)} = ${v(n)}.`,`יש גם דרכים אחרות: ${o.map(l=>v(`${l.w}×${l.h}`)).join(" , ")}.`]}}function Ee(e,t){const{cols:r,rows:s,target:n,square:o}=e.config,a=vn({cols:r,rows:s,square:o});a.goal(`= ${n}`);const l=e.solution;let i=!1;const c=a.corner({w:1,h:1},()=>{i=!0,t()});return{el:a.el,answer:()=>i?c.get():null,hint(d){d===1&&a.goal(`= ${n}`),d===2&&a.strip(l.w,1),d===3&&a.strip(l.w,l.h),d>=4&&c.set(l)},demonstrate(){c.set(l)},place:d=>c.set(d),destroy:()=>a.destroy()}}const qn={kind:"product",generate:Ln,mount:Ee};function $n(e){const t=J(e),r=12,s=12,n=3+Math.floor(t()*8),o=n*n;return{config:{cols:r,rows:s,target:o,square:!0},solution:{w:n,h:n},check:a=>a.w===n&&a.h===n,hints:[{text:`ריבוע ששטחו ${v(o)}`},{text:"אותו מספר בשורה ובעמודה"},{text:`${v(n)} בשורה`},{text:`${v(n)} כפול ${v(n)}`}],explain:[`${v(n)} × ${v(n)} = ${v(o)}.`,`הצלע היא השורש הריבועי של ${v(o)}.`]}}const En={kind:"perfect-square",generate:$n,mount:Ee};function Sn(e){const t=J(e),r=6,s=()=>{const o=1+Math.floor(t()*(r-1));return t()<.5?-o:o},n={x:s(),y:s()};return{config:{range:r,target:n},solution:n,check:o=>o.x===n.x&&o.y===n.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${v(`(${n.x}, ${n.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${v(n.x)}, והצופה על הציר האנכי ב־${v(n.y)}.`,`המפגש הוא ${v(`(${n.x}, ${n.y})`)}.`]}}function Zn(e,t){const{range:r,target:s}=e.config,n=$e({range:r});n.scout(s.x,"x"),n.scout(s.y,"y");let o=null;const a=n.pick(l=>{o=l,t()});return{el:n.el,answer:()=>o,hint(l){l===1&&n.guide(s.x,"x"),l===2&&n.guide(s.y,"y"),l===3&&n.dot(s,"lit"),l>=4&&a.set(s)},demonstrate(){n.dot(s,"lit"),a.set(s)},place:l=>a.set(l),destroy:()=>n.destroy()}}const An={kind:"quadrant",generate:Sn,mount:Zn},re=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function Fn(e){const t=J(e),r=re[Math.floor(t()*re.length)],s=Math.round((r.to-r.from)/r.tickStep),n=[];for(let l=1;l<s;l++)l%r.labelEvery!==0&&n.push(r.from+l*r.tickStep);const o=n[Math.floor(t()*n.length)],a=r.tickStep*r.labelEvery;return{config:{...r,target:o},solution:o,check:l=>l===o,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${v(r.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${v(a)}.`,`כל סימון קטן שווה ${v(r.tickStep)}.`,`היעד הוא ${v(o)}.`]}}function Cn(e,t){const{from:r,to:s,tickStep:n,labelEvery:o,target:a}=e.config,l=Vt({from:r,to:s,tickStep:n,labelEvery:o});l.flag(a);let i=null;const c=l.chest(r,f=>{i=f,t()});i=null;const d=r+Math.floor((a-r)/(n*o))*n*o,p=d+n*o;return{el:l.el,answer:()=>i,hint(f){f===1&&l.band(d,p),f===2&&l.bracket(r,r+n,String(n)),f===3&&l.count(d,a),f>=4&&c.set(a)},demonstrate(){l.count(d,a),c.set(a)},place:f=>c.set(f),destroy:()=>l.destroy()}}const Nn={kind:"treasure-line",generate:Fn,mount:Cn};const Se={"treasure-line":Nn,jumps:pn,voyage:cn,quadrant:An,mirror:yn,product:qn,powers:wn,"perfect-square":En,"alphametic-sum":nn,"alphametic-product":rn};function In(e){return Se[e]}function Ze(e){return Se[e]!==void 0}const ot=5;function Ft(e,t){return Math.max(1,ot-e-t)}function Gn(e,t){return Math.max(0,t-e)}const Tn=.8;function Ut(){return[...Pt].sort((e,t)=>e.order-t.order)}function Lt(e,t){return e.missions[t]??0}function Ae(e,t){return Lt(e,t)>0}function Bn(e,t){return Ze(e.kind)&&e.requires.every(r=>Ae(t,r))}function On(e,t){return we(e.id).filter(r=>Bn(r,t))}function qt(e){return we(e.id).filter(t=>Ze(t.kind))}function Hn(e,t){return qt(e).reduce((r,s)=>r+Lt(t,s.id),0)}function jn(e){return qt(e).length*ot}function Rn(e,t){const r=jn(e);return r===0?!1:Hn(e,t)>=Tn*r}function $t(e,t){const r=Ut(),s=r.findIndex(n=>n.id===e.id);return s<=0?!0:Rn(r[s-1],t)}function Pn(e,t){const r=qt(e);return r.length>0&&r.every(s=>Ae(t,s.id))}function Dn(e){const t=Ut(),r=t.filter(s=>$t(s,e));return r.find(s=>!Pn(s,e))??r[r.length-1]??t[0]}const yt={width:2e3,height:1e3};function Bt(e,t){return{x:(e+180)/360*yt.width,y:(90-t)/180*yt.height}}const _n={x:0,y:0,w:yt.width,h:yt.height};function Vn(e,t){const r=Bt(e.lon0,e.lat0),s=Bt(e.lon1,e.lat1);let n=Math.min(r.x,s.x),o=Math.min(r.y,s.y),a=Math.abs(s.x-r.x),l=Math.abs(s.y-r.y);if(a/l<t){const i=l*t;n-=(i-a)/2,a=i}else{const i=a/t;o-=(i-l)/2,l=i}return{x:n,y:o,w:a,h:l}}function Un(e,t,r){const s=Bt(e,t);return{left:(s.x-r.x)/r.w*100,top:(s.y-r.y)/r.h*100}}function Fe(e,t,r){const s=g("div",{class:"map-art","aria-hidden":"true"});s.innerHTML=e;const n=s.firstElementChild;n instanceof SVGSVGElement&&(n.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),n.setAttribute("preserveAspectRatio","xMidYMid slice"));const o=g("div",{class:"map-markers"});for(const a of r){const{left:l,top:i}=Un(a.lon,a.lat,t),c=a.onClick?"button":"div",d=g(c,{class:`marker ${a.state}`,style:`left:${l.toFixed(2)}%; top:${i.toFixed(2)}%`});c==="button"&&d.setAttribute("type","button");const p=g("span",{class:"marker-icon"});p.innerHTML=a.icon;const f=g("span",{class:"marker-caption"},g("span",{class:"marker-label"},a.label),...a.sub?[g("span",{class:"marker-sub"},a.sub)]:[]);d.append(p,f),a.onClick&&d.addEventListener("click",a.onClick),o.append(d)}return g("div",{class:"map"},s,o)}const Ce=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,Yn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,Kn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function Wn(){const e=R(),t=Ut().map(r=>{const s=zt(r).length,n=zt(r).filter(o=>e.conquered.includes(o.id)).length;return $t(r,e)?{lon:r.lon,lat:r.lat,label:r.name,sub:`${n}/${s}`,state:"continent",icon:Yn,onClick:()=>V(`/continent/${r.id}`)}:{lon:r.lon,lat:r.lat,label:r.name,state:"locked",icon:Kn}});return _({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Fe(Ce,_n,t),g("div",{class:"row"},Ct("שדרוג הגיבורים","/upgrades"),Ct("תפריט המשימות","/missions"),Ct("הגיבורים שלי","/setup")))}function Ct(e,t){const r=g("button",{class:"btn",type:"button"},e);return r.addEventListener("click",()=>V(t)),r}const Nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Xn=5/3;function zn(e){const t=Dt(e.id??"");if(!t)return _({title:"יבשת לא נמצאה"},g("p",{},"חזרה למפת העולם."));const r=R();if(!$t(t,r)){const n=g("button",{class:"btn primary",type:"button"},"למפת העולם");return n.addEventListener("click",()=>V("/")),_({title:t.name,subtitle:t.domain},g("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),g("div",{class:"row"},n))}const s=t.fortresses.map(n=>n.home?{lon:n.lon,lat:n.lat,label:n.name,sub:"הבית שלך",state:"player",icon:Nt}:r.conquered.includes(n.id)?{lon:n.lon,lat:n.lat,label:n.name,sub:"נכבש",state:"player",icon:Nt}:{lon:n.lon,lat:n.lat,label:n.name,sub:n.starsNeeded>0?`${n.level} · ★ ${n.starsNeeded}`:String(n.level),state:"enemy",icon:Nt,onClick:()=>V(`/battle/${n.id}`)});return _({title:t.name,subtitle:t.domain},Fe(Ce,Vn(t.view,Xn),s),g("div",{class:"row"},se("שדרוג הגיבורים","/upgrades"),se("תפריט המשימות",`/missions/${t.id}`)))}function se(e,t){const r=g("button",{class:"btn",type:"button"},e);return r.addEventListener("click",()=>V(t)),r}function et(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function mt(e,t){return e.units.filter(r=>r.alive&&r.side===t)}function Jn(e,t){return e.units.filter(r=>r.alive&&r.side!==t)}function nt(e,t){return t===null?void 0:e.units.find(r=>r.id===t)}function Ot(e,t){let r=null,s=1/0;for(const n of t){const o=et(e,n);(o<s-1e-9||Math.abs(o-s)<=1e-9&&r&&n.id<r.id)&&(r=n,s=o)}return r}const Qn=2.2;function tr(e,t){const r=Jn(e,t.side);if(r.length===0)return{kind:"idle"};const s=Ot(t,r.filter(a=>a.stats.range<=1.5));if(t.stats.range>2&&s&&et(t,s)<Qn){const a=t.x-s.x,l=t.y-s.y,i=Math.hypot(a,l)||1;return{kind:"move",x:t.x+a/i*3,y:t.y+l/i*3}}const o=Ot(t,r);return o?{kind:"attack",targetId:o.id}:{kind:"idle"}}const Ht=1/30,oe=50;function er(e,t){return e*oe/(oe+t)}const ae=.3,Ne=.45,Ie={arrow:14,fire:9,heal:12},nr=.85,rr=.15;function sr(e,t,r,s){const n=t==="player"?1:-1,o=t==="player"?3:r-3,a=s/2,l=[0,-1.6,1.6];return e.map((i,c)=>({x:o+(i.stats.range<=1.5?2*n:0),y:a+(l[c]??0)}))}function or(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},r=J(e.seed),s={time:0,arena:t,units:[],projectiles:[],events:[],rng:r,winner:null,nextId:1,manual:e.manual??null},n=(o,a)=>{const l=sr(o,a,t.width,t.height);o.forEach((i,c)=>{const d=l[c];s.units.push({id:`${a}-${i.cls}-${c}`,side:a,cls:i.cls,name:i.name,gender:i.gender,x:d.x+dt(r,-.6,.6),y:d.y+dt(r,-.6,.6),hp:i.stats.hp,maxHp:i.stats.hp,stats:i.stats,order:a===s.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:dt(r,0,1/i.stats.attackRate),healCooldown:dt(r,0,i.stats.healRate??3),facing:a==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return n(e.player,"player"),n(e.enemy,"enemy"),s}function It(e,t,r){const s=nt(e,t);s?.alive&&(s.order=r)}function le(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function ie(e,t){const r=nt(e,t);if(!r?.alive||!r.stats.healing)return null;let s=null;for(const n of mt(e,r.side))n.id===r.id||n.hp>=n.maxHp||et(r,n)>r.stats.range||(!s||n.hp/n.maxHp<s.hp/s.maxHp)&&(s=n);return s}function ar(e,t){const r=nt(e,t);return!!(r?.alive&&r.stats.healing&&r.healCooldown<=0)}function lr(e,t,r){const s=nt(e,t),n=nt(e,r),o=s?.stats.healing;return!s?.alive||!o||s.healCooldown>0||!n?.alive||n.side!==s.side||n.id===s.id||et(s,n)>s.stats.range?!1:(Ge(e,s,n,o),!0)}function Ge(e,t,r,s){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(r.y-t.y,r.x-t.x),targetId:r.id,amount:s,speed:Ie.heal}),t.healCooldown=t.stats.healRate??3}function ir(e,t=Ht){if(!e.winner){e.time+=t,cr(e,t);for(const r of e.units)r.alive&&(r.cooldown=Math.max(0,r.cooldown-t),r.healCooldown=Math.max(0,r.healCooldown-t),dr(e,r),fr(e,r,t));ur(e),gr(e),xr(e),e.events.length>0&&(e.events=e.events.filter(r=>e.time-r.time<2))}}function cr(e,t){const r=[];for(const s of e.projectiles){const n=nt(e,s.targetId);if(!n||!n.alive)continue;const o=n.x-s.x,a=n.y-s.y,l=Math.hypot(o,a),i=s.speed*t;if(l<=i){if(s.kind==="heal"){const c=Math.min(n.maxHp-n.hp,s.amount);n.hp+=c,e.events.push({kind:"heal",unitId:n.id,amount:c,time:e.time})}else Te(e,n,s.amount);continue}s.x+=o/l*i,s.y+=a/l*i,s.angle=Math.atan2(a,o),r.push(s)}e.projectiles=r}function dr(e,t){if(t.side===e.manual)return;const r=t.stats.healing;if(!r||t.healCooldown>0)return;const s=mt(e,t.side).filter(o=>o.id!==t.id&&o.hp<o.maxHp*nr&&et(t,o)<=t.stats.range);let n=null;for(const o of s)(!n||o.hp/o.maxHp<n.hp/n.maxHp)&&(n=o);n&&Ge(e,t,n,r)}function fr(e,t,r){const s=pr(e,t);if(s.kind==="idle"){t.targetId=null;return}if(s.kind==="move"){t.targetId=null,ce(t,s.x,s.y,r);return}const n=nt(e,s.targetId);if(!n||!n.alive){t.targetId=null;return}if(t.targetId=n.id,et(t,n)>t.stats.range){ce(t,n.x,n.y,r);return}t.facing=n.x>=t.x?1:-1,t.cooldown<=0&&hr(e,t,n)}function pr(e,t){const r=t.order;if(r.kind==="move")if(et(t,r)<=rr)t.order=le(e,t);else return{kind:"move",x:r.x,y:r.y};if(t.order.kind==="attack"){const s=nt(e,t.order.targetId);if(s?.alive)return{kind:"attack",targetId:s.id};t.order=le(e,t)}if(t.order.kind==="hold"){const s=e.units.filter(o=>o.alive&&o.side!==t.side&&et(t,o)<=t.stats.range),n=Ot(t,s);return n?{kind:"attack",targetId:n.id}:{kind:"idle"}}return tr(e,t)}function ce(e,t,r,s){const n=t-e.x,o=r-e.y,a=Math.hypot(n,o);if(a<1e-6)return;const l=Math.min(a,e.stats.speed*s);e.x+=n/a*l,e.y+=o/a*l,Math.abs(n)>1e-6&&(e.facing=n>0?1:-1)}function hr(e,t,r){const s=er(t.stats.attack,r.stats.defense)*(1+dt(e.rng,-ae,ae));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){Te(e,r,s);return}const n=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:n,side:t.side,x:t.x,y:t.y,angle:Math.atan2(r.y-t.y,r.x-t.x),targetId:r.id,amount:s,speed:Ie[n]})}function Te(e,t,r){t.hp-=r,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:r,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function ur(e){const t=e.units.filter(s=>s.alive),r=Ne*2;for(let s=0;s<t.length;s++)for(let n=s+1;n<t.length;n++){const o=t[s],a=t[n],l=a.x-o.x,i=a.y-o.y,c=Math.hypot(l,i);if(c>=r)continue;const d=(r-c)/2,p=c<1e-6?1:l/c,f=c<1e-6?0:i/c;o.x-=p*d,o.y-=f*d,a.x+=p*d,a.y+=f*d}}function gr(e){const t=Ne;for(const r of e.units)r.x=Math.min(e.arena.width-t,Math.max(t,r.x)),r.y=Math.min(e.arena.height-t,Math.max(t,r.y))}function xr(e){const t=mt(e,"player").length,r=mt(e,"enemy").length;t===0?e.winner="enemy":r===0&&(e.winner="player")}const ft={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function kt(e,t){return ft[e][t]}const bt={warrior:ft.warrior.m,archer:ft.archer.m,mage:ft.mage.m},Yt={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},yr={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},Kt={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Wt=[2,3,5,8,12,17,23,30],Be=Wt.length,mr=.08;function kr(e){return e>=Be?null:Wt[e]}function Oe(e){return 1+mr*e}const de=8;function br(e,t,r){return e*Oe(r)}function wr(e){let t=0;for(let r=0;r<Math.min(e,Be);r++)t+=Wt[r];return t}const He=["warrior","archer","mage"],Mr={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},vr=["hp","attack","defense"];function Lr(e,t){const s={...Yt[e]};for(const n of Kt[e]){const o=t[n]??0;if(o<=0)continue;const a=s[n];typeof a=="number"&&(s[n]=a*Oe(o))}return s}function qr(e){return He.map(t=>{const r=e.heroes[t];return{cls:t,name:r.name||bt[t],gender:r.gender,stats:Lr(t,r.levels)}})}function $r(e){return He.map(t=>{const r={...Yt[t]};for(const s of vr){const n=r[s];typeof n=="number"&&(r[s]=n*e)}return{cls:t,name:Mr[t],gender:"m",stats:r}})}function Er(e,t,r){const s=_t(e);return!s||s.fortress.home?null:{player:qr(t),enemy:$r(s.fortress.difficulty),seed:r,manual:"player"}}let gt=null;function Sr(e){gt=e}function Zr(e){return gt&&gt.fortressId===e?gt:null}const X={x:64,y:84},z={x:56,y:58},tt={x:77,y:56},wt={x:66,y:50},Mt={x:60,y:52},fe={x:100,y:70},vt={x:99,y:51};function Ar(e){const t=r=>e.querySelector(`.part-${r}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function I(e,t,r,s,n=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${r} ${s})${n}`)}function Fr(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function Cr(e,t){const{phase:r,stride:s,time:n}=t,o=Math.sin(r)*s,a=Math.sin(r*2)*s,l=Math.sin(n*2.1)*(1-s),i=Fr(t.sinceAttack);I(e.legBack,o*26,X.x,X.y),I(e.legFront,-o*26,X.x,X.y),I(e.cloak,o*9+l*1.6,Mt.x,Mt.y),I(e.robe,o*4+l*1.2,X.x,X.y+20),I(e.quiver,o*6,z.x,z.y);const c=-Math.abs(a)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${c.toFixed(2)}) rotate(${(o*2+l*.9).toFixed(2)} ${X.x} ${X.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(c*1.15).toFixed(2)}) rotate(${(-o*2.5+l*1.4).toFixed(2)} ${wt.x} ${wt.y})`),t.cls){case"warrior":{I(e.armBack,-o*14,z.x,z.y),I(e.armFront,o*10+i*60,tt.x,tt.y),I(e.sword,i*42,vt.x,vt.y),xt(e.swoosh,t.sinceAttack<.42?Math.max(0,i)*.9:0);break}case"archer":{const d=t.sinceAttack<.42?i:-.35;if(I(e.armFront,o*5,tt.x,tt.y),I(e.armBack,-o*8-d*16,z.x,z.y),e.arrow){const p=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=p?"0":"1",e.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}e.bow&&I(e.bow,d*4,104,68),xt(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{I(e.armBack,-o*10,z.x,z.y),I(e.armFront,o*6+i*26,tt.x,tt.y),I(e.staff,i*18,fe.x,fe.y);const d=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(n*4);e.orb&&pe(e.orb,d,100,20),e.orbHalo&&pe(e.orbHalo,d*1.1,100,20);const p=t.sinceAttack>=0&&t.sinceAttack<.45;xt(e.swoosh,p?1-t.sinceAttack/.45:0),e.swoosh&&p&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function xt(e,t){e&&(e.style.opacity=t.toFixed(2))}function pe(e,t,r,s){e.setAttribute("transform",`translate(${(r*(1-t)).toFixed(2)} ${(s*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function Nr(e,t){const r=Math.min(1,t),s=1-Math.pow(1-r,3);I(e.legBack,s*30,X.x,X.y),I(e.legFront,-s*20,X.x,X.y),I(e.armBack,s*40,z.x,z.y),I(e.armFront,-s*60,tt.x,tt.y),I(e.sword,s*50,vt.x,vt.y),xt(e.swoosh,0),I(e.head,s*18,wt.x,wt.y),I(e.cloak,s*12,Mt.x,Mt.y)}const Ir=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Gr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Tr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Br=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Or=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Hr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,jr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Rr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,D=100,st=128,he=2.05,ue=.7,Pr="http://www.w3.org/2000/svg",Dr={"warrior-f":Gr,"warrior-m":Tr,"archer-f":Br,"archer-m":Or,"mage-f":Hr,"mage-m":jr};function T(e,t={}){const r=document.createElementNS(Pr,e);for(const[s,n]of Object.entries(t))r.setAttribute(s,n);return r}function jt(e,t,r){const s=e.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("width",String(t)),s.setAttribute("height",String(r)),s.setAttribute("overflow","visible"))}function _r(){const e=T("defs");return e.innerHTML=`
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
    </filter>`,e}function Vr(e,t){const r=T("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*D} ${e.arena.height*D}`,preserveAspectRatio:"xMidYMid meet"}),s=T("g",{class:"arena-art"});s.innerHTML=Ir,jt(s,e.arena.width*D,e.arena.height*D);const n=T("g",{class:"layer-ground"}),o=T("g",{class:"layer-units"}),a=T("g",{class:"layer-shots"}),l=T("g",{class:"layer-bursts"}),i=T("g",{class:"layer-text"}),c=T("rect",{class:"vignette",width:String(e.arena.width*D),height:String(e.arena.height*D),fill:"url(#fx-vignette)"});r.append(_r(),s,n,o,a,l,i,c);const d=new Map;for(const f of e.units){const m=Ur(f);d.set(f.id,m),n.append(m.ring,m.shadow,m.dust),o.append(m.group)}const p=f=>{f.preventDefault();const m=r.getScreenCTM();if(!m)return;const $=new DOMPoint(f.clientX,f.clientY).matrixTransform(m.inverse()),h=$.x/D,k=$.y/D;let x=null,y=1;for(const u of e.units){if(!u.alive)continue;const w=Math.hypot(u.x-h,u.y-.5-k);w<y&&(y=w,x=u)}t({x:h,y:k,unit:x})};return r.addEventListener("pointerdown",p),{el:r,update(f,m){for(const h of f.units)d.get(h.id)?.update(h,f.time,m.has(h.id));const $=[...f.units].sort((h,k)=>Number(h.alive)-Number(k.alive)||h.y-k.y);for(const h of $){const k=d.get(h.id);k&&o.append(k.group)}Yr(a,f.projectiles,f.time),Wr(l,f,d),Xr(i,f,d)},destroy(){r.removeEventListener("pointerdown",p),r.remove()}}}function Ur(e){const t=T("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const r=T("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),s=T("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});s.style.opacity="0";const n=T("g",{class:`unit ${e.side} ${e.cls}`}),o=T("g",{class:"sprite"});o.innerHTML=Dr[`${e.cls}-${e.gender}`]??"",jt(o,st,st);const a=T("g",{class:"fallen"});a.innerHTML=Rr,jt(a,st,st),a.setAttribute("transform",`scale(${he}) translate(${-st/2} -122)`),a.style.display="none";const l=T("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),i=T("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});n.append(a,o,l,i);const c=Ar(o),d={group:n,ring:t,shadow:r,dust:s,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(p,f,m){const $=p.x*D,h=p.y*D,k=Math.hypot(p.x-d.px,p.y-d.py);d.px=p.x,d.py=p.y,k>8e-4&&(d.phase+=k*4.4,d.lastMoveAt=f);const x=f-d.lastMoveAt<.25,y=f-p.lastAttackAt;p.alive?Cr(c,{cls:p.cls,phase:d.phase,stride:x?1:0,sinceAttack:y,time:f}):Nr(c,(f-p.lastHitAt)/ue);const u=p.alive&&y>=0&&y<.3?Math.sin(y/.3*Math.PI)*16*p.facing:0;n.setAttribute("transform",`translate(${($+u).toFixed(1)} ${h.toFixed(1)})`),t.setAttribute("cx",$.toFixed(1)),t.setAttribute("cy",h.toFixed(1)),t.style.display=m&&p.alive?"":"none",r.setAttribute("cx",$.toFixed(1)),r.setAttribute("cy",(h+6).toFixed(1)),r.style.opacity=p.alive?"1":"0.4",s.setAttribute("cx",($-26*p.facing).toFixed(1)),s.setAttribute("cy",(h+10).toFixed(1)),s.style.opacity=x&&p.alive?(.18+.12*Math.abs(Math.sin(f*9))).toFixed(2):"0";const w=f-p.lastHitAt<.18,b=w&&p.alive?1.05:1,q=he*b;o.setAttribute("transform",`scale(${(p.facing*q).toFixed(3)} ${q.toFixed(3)}) translate(${-st/2} -122)`);const L=p.alive?0:(f-p.lastHitAt)/ue;o.style.display=p.alive||L<1?"":"none",o.style.opacity=p.alive?"1":String(Math.max(0,1-L)),a.style.display=!p.alive&&L>.55?"":"none",a.style.opacity=String(Math.min(1,Math.max(0,(L-.55)/.45)));const S=Math.max(0,p.hp/p.maxHp);i.setAttribute("width",(94*S).toFixed(1)),n.classList.toggle("hurt",w&&p.alive),n.classList.toggle("dead",!p.alive),l.style.display=p.alive?"":"none",i.style.display=p.alive?"":"none"}};return d}function Yr(e,t,r){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(T("g"));t.forEach((s,n)=>{const o=e.childNodes[n];o.getAttribute("data-kind")!==s.kind&&(o.setAttribute("data-kind",s.kind),o.setAttribute("class",`shot ${s.kind}`),o.innerHTML=Kr(s.kind));const l=s.kind==="fire"?` rotate(${(r*420%360).toFixed(0)})`:"";o.setAttribute("transform",`translate(${(s.x*D).toFixed(1)} ${(s.y*D).toFixed(1)}) rotate(${(s.angle*180/Math.PI).toFixed(1)})${l}`)})}function Kr(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function Wr(e,t,r){const s=t.events.filter(n=>t.time-n.time<.32);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(T("circle"));s.forEach((n,o)=>{const a=e.childNodes[o],l=r.get(n.unitId);if(!l)return;const i=(t.time-n.time)/.32;a.setAttribute("class",`burst ${n.kind}`),a.setAttribute("cx",(l.px*D).toFixed(1)),a.setAttribute("cy",(l.py*D-90).toFixed(1)),a.setAttribute("r",(14+i*40).toFixed(1)),a.setAttribute("opacity",(1-i).toFixed(2))})}function Xr(e,t,r){const s=t.events.filter(n=>t.time-n.time<1.1&&n.amount>=1);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(T("text",{"text-anchor":"middle"}));s.forEach((n,o)=>{const a=e.childNodes[o],l=r.get(n.unitId);if(!l)return;const i=(t.time-n.time)/1.1;a.setAttribute("class",`floater ${n.kind}`),a.setAttribute("x",(l.px*D).toFixed(1)),a.setAttribute("y",(l.py*D-210-i*70).toFixed(1)),a.setAttribute("opacity",(1-i*i).toFixed(2));const c=`${n.kind==="heal"?"+":"-"}${Math.round(n.amount)}`;a.textContent!==c&&(a.textContent=c)})}function zr(e){const t=_t(e.id??""),r=t?Er(t.fortress.id,R(),Date.now()&65535||1):null;if(!t||!r)return _({title:"מבצר לא נמצא"},g("p",{},"חזרה למפת העולם."));const{continent:s,fortress:n}=t;if(R().conquered.includes(n.id)){const M=g("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return M.addEventListener("click",()=>V(`/continent/${s.id}`)),_({title:n.name,subtitle:s.name,showStars:!1},g("p",{class:"notice"},"המבצר הזה כבר נכבש."),g("div",{class:"row"},M))}const o=or(r),a=new Set(o.units.filter(M=>M.side==="player").map(M=>M.id)),l=Qr(new URLSearchParams(location.search).get("speed"));let i=!1,c=!1,d=0,p=0,f=0;window.__battle=o;const m=Vr(o,M=>W(M)),$=g("div",{class:"stage"});$.append(m.el);const h=g("div",{class:"overlay"});$.append(h);const k=()=>{h.replaceChildren(g("div",{class:"panel"},g("h2",{},n.name),g("p",{},`רמת האויב: ${n.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),g("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),y())),h.classList.remove("hidden")},x=M=>{Sr({fortressId:n.id,won:M,seconds:o.time,heroes:Z.map(H=>({cls:H.cls,name:H.name||kt(H.cls,H.gender),alive:H.alive,health:Math.max(0,H.hp/H.maxHp)}))});const N=g("button",{class:"btn primary",type:"button"},"המשך");N.addEventListener("click",()=>V(`/result/${n.id}/${M?"win":"lose"}`)),h.replaceChildren(g("div",{class:"panel"},g("h2",{},M?"המבצר נכבש":"הקרב אבד"),g("p",{},M?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),N)),h.classList.remove("hidden")};function y(){const M=g("button",{class:"btn primary",type:"button"},"התחל קרב");return M.addEventListener("click",()=>{h.classList.add("hidden"),i=!0,p=performance.now()}),M}const u=g("div",{class:"portraits"}),w=g("button",{class:"btn small",type:"button"},"השהה"),b=g("button",{class:"btn small",type:"button"},"ריפוי"),q=g("button",{class:"btn small",type:"button"},"בחר הכול"),L=g("button",{class:"btn small",type:"button"},"עמוד במקום");w.addEventListener("click",()=>{c||(i=!i,p=performance.now(),w.textContent=i?"השהה":"המשך")}),q.addEventListener("click",()=>{a.clear();for(const M of o.units)M.side==="player"&&M.alive&&a.add(M.id);O()}),L.addEventListener("click",()=>{for(const M of a)It(o,M,{kind:"hold"})});const S=o.units.find(M=>M.side==="player"&&M.cls==="mage");b.addEventListener("click",()=>{if(!S)return;const M=ie(o,S.id);M&&(lr(o,S.id,M.id),E())});function E(){(S?ar(o,S.id)&&ie(o,S.id)!==null:!1)?b.removeAttribute("disabled"):b.setAttribute("disabled","true")}const Z=o.units.filter(M=>M.side==="player"),K=Z.map(M=>{const N=g("span",{class:"portrait-fill"}),H=g("button",{class:`portrait ${M.cls}`,type:"button"},g("span",{class:"portrait-name"},M.name||kt(M.cls,M.gender)),g("span",{class:"portrait-bar"},N));return H.addEventListener("click",()=>{M.alive&&(a.clear(),a.add(M.id),O())}),u.append(H),{unit:M,button:H,fill:N}});function O(){E();for(const M of K){const N=Math.max(0,M.unit.hp/M.unit.maxHp);M.fill.style.width=`${(N*100).toFixed(0)}%`,M.button.classList.toggle("selected",a.has(M.unit.id)),M.button.classList.toggle("dead",!M.unit.alive)}}O();function W(M){if(!i)return;const N=M.unit;if(N&&N.side==="player"&&N.alive){a.clear(),a.add(N.id),O();return}if(a.size!==0)for(const H of a)N&&N.side==="enemy"&&N.alive?It(o,H,{kind:"attack",targetId:N.id}):It(o,H,{kind:"move",x:M.x,y:M.y})}const U=M=>{M.code==="Space"&&(M.preventDefault(),w.click())};addEventListener("keydown",U);const C=()=>{if(d=requestAnimationFrame(C),i&&!c){const M=performance.now();f+=Math.min(.1,(M-p)/1e3)*l*Jr,p=M;let N=0;for(;f>=Ht&&N<8*l;)j(),f-=Ht,N++}m.update(o,a)},j=()=>{ir(o),o.winner&&!c&&(c=!0,i=!1,x(o.winner==="player")),O()};k(),d=requestAnimationFrame(C);const at=_({title:n.name,subtitle:`${s.name} · ${s.domain}`,showStars:!1},$,g("div",{class:"hud"},u,g("div",{class:"hud-actions"},b,q,L,w)));return{el:at.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",U),m.destroy(),at.destroy()}}}const Jr=.6;function Qr(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function ts(e){const t=_t(e.id??"");if(!t)return _({title:"מבצר לא נמצא"},g("p",{},"חזרה למפת העולם."));const{continent:r,fortress:s}=t,n=e.outcome==="win",o=Zr(s.id),a=!R().flags.sawUpgrades;rt(d=>{n&&!d.conquered.includes(s.id)&&d.conquered.push(s.id),a&&(d.flags.sawUpgrades=!0,d.stars+=de)});const l=[];o&&l.push(g("section",{class:"card"},g("h3",{},"הגיבורים שלך"),...o.heroes.map(d=>g("div",{class:"stat-row"},g("span",{class:"stat-name"},d.name),g("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),g("p",{class:"muted"},`אורך הקרב: ${Math.round(o.seconds)} שניות`))),a&&l.push(g("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${de} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const i=r.fortresses.filter(d=>!d.home&&!R().conquered.includes(d.id)).length;n&&i===0?l.push(g("p",{class:"notice"},`כל המבצרים ביבשת ${r.name} נכבשו.`)):n||l.push(g("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const c=g("div",{class:"row"},ut(n?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...n?[]:[ut("קרב נוסף באותו מבצר",`/battle/${s.id}`)],ut("חזרה ליבשת",`/continent/${r.id}`),ut("תפריט המשימות","/missions"));return _({title:n?"המבצר נכבש":"הקרב אבד",subtitle:`${s.name} · ${Dt(r.id)?.name??""}`,showBack:!1},...l,c)}function ut(e,t,r=!1){const s=g("button",{class:r?"btn primary":"btn",type:"button"},e);return s.addEventListener("click",()=>V(t)),s}function es(e){let t=0;for(const r of Object.keys(e.heroes)){const s=e.heroes[r];for(const n of Kt[r])t+=wr(s.levels[n]??0)}return t}function ns(e,t,r){const s=()=>{l.remove(),removeEventListener("keydown",n)},n=i=>{i.key==="Escape"&&s()},o=r.map(i=>{const c=g("button",{class:i.primary?"btn primary":"btn",type:"button"},i.label);return c.addEventListener("click",()=>{s(),i.onClick()}),c}),a=g("div",{class:"modal",role:"dialog","aria-modal":"true"},g("h2",{},e),g("p",{},t),g("div",{class:"modal-actions"},...o)),l=g("div",{class:"backdrop"},a);l.addEventListener("click",i=>{i.target===l&&s()}),addEventListener("keydown",n),document.body.append(l),o.find(i=>i.classList.contains("primary"))?.focus()}function rs(){if(!R().flags.sawUpgrades)return _({title:"שדרוג הגיבורים"},g("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=g("div",{class:"stack"}),t=()=>{const r=R();e.replaceChildren(...Object.keys(bt).map(s=>{const n=r.heroes[s],o=Kt[s].map(l=>ss(s,l,t)),a=kt(s,n.gender);return g("section",{class:"card hero"},g("h3",{},n.name?`${n.name} · ${a}`:a),g("div",{class:"stats"},...o))}))};return t(),_({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${es(R())}`},e)}function ss(e,t,r){const o=R().heroes[e].levels[t]??0,a=Yt[e][t]??0,l=br(a,t,o),i=kr(o),c=g("button",{class:"btn small",type:"button"},i===null?"מרבי":`★ ${i}`);return i===null&&c.setAttribute("disabled","true"),c.addEventListener("click",()=>{if(i!==null){if(R().stars<i){ns("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>V("/missions")}]);return}rt(d=>{d.stars-=i;const p=d.heroes[e];p.levels[t]=(p.levels[t]??0)+1}),r()}}),g("div",{class:"stat-row"},g("span",{class:"stat-name"},yr[t]),g("span",{class:"stat-value"},os(l)),g("span",{class:"stat-level"},`דרגה ${o}`),c)}function os(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function je(e){const t=R(),r=Dt(e.id??""),s=r&&$t(r,t)?r:Dn(t),n=On(s,t),o=qt(s).length-n.length,a=n.map(i=>{const c=Lt(t,i.id),d=g("button",{class:"card mission-card",type:"button"},g("h3",{},i.title),g("span",{class:"stars-row"},as(c)));return d.addEventListener("click",()=>V(`/mission/${i.id}`)),d}),l=a.length>0?[g("div",{class:"grid"},...a)]:[g("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return o>0&&l.push(g("p",{class:"muted"},`עוד ${o} משימות ייפתחו לפי ההתקדמות.`)),_({title:"משימות",subtitle:`${s.name} · ${s.domain}`},...l)}function as(e){return"★".repeat(e)+"☆".repeat(ot-e)}const Rt={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},ls=["m","f"];function is(){const e=g("div",{class:"stack"}),t=()=>{const s=R();e.replaceChildren(...Object.keys(bt).map(n=>cs(n,s.heroes[n].gender,s.heroes[n].name,t)))};t();const r=g("button",{class:"btn primary",type:"button"},"קדימה למפה");return r.addEventListener("click",()=>{rt(s=>{for(const n of Object.keys(bt)){const o=s.heroes[n];o.name.trim()||(o.name=Rt[n][o.gender][0])}s.flags.setupDone=!0}),V("/")}),_({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:R().flags.setupDone},e,g("div",{class:"row"},r))}function cs(e,t,r,s){const n=g("input",{class:"name-input",type:"text",maxlength:"14",placeholder:Rt[e][t][0],value:r,"aria-label":`שם ה${kt(e,t)}`});n.addEventListener("input",()=>{rt(l=>{l.heroes[e].name=n.value})});const o=l=>{const i=g("button",{class:`btn small${t===l?" primary":""}`,type:"button"},ft[e][l]);return i.addEventListener("click",()=>{rt(c=>{c.heroes[e].gender=l}),s()}),i},a=Rt[e][t].map(l=>{const i=g("button",{class:"chip",type:"button"},l);return i.addEventListener("click",()=>{rt(c=>{c.heroes[e].name=l}),s()}),i});return g("section",{class:"card hero-setup"},g("div",{class:"setup-row"},...ls.map(o)),g("div",{class:"setup-row"},n),g("div",{class:"setup-row chips"},...a))}function ds(e){const t=Xe(e.id??""),r=t?In(t.kind):void 0;if(!t||!r)return _({title:"משימה לא נמצאה"},g("p",{},"חזרה לתפריט המשימות."));const s=g("div",{class:"mission-stage"}),n=g("p",{class:"hint-line"}),o=g("div",{class:"stars-row big"}),a=g("div",{class:"overlay hidden"}),l=g("button",{class:"btn",type:"button"},"רמז"),i=g("button",{class:"btn primary",type:"button"},"בדיקה");i.setAttribute("disabled","true");let c,d,p=0,f=0,m=!1;const $=()=>{const b=m?h:Ft(p,f);o.replaceChildren(...Array.from({length:ot},(q,L)=>g("span",{class:`star${L<b?" lit":""}`},"★")))};let h=ot;const k=()=>{!d||m||(d.answer()===null?i.setAttribute("disabled","true"):i.removeAttribute("disabled"))},x=b=>{d?.destroy(),c=r.generate(b),d=r.mount(c,k),p=0,f=0,m=!1,h=ot,n.textContent="",s.replaceChildren(d.el,a),a.classList.add("hidden"),i.setAttribute("disabled","true"),l.removeAttribute("disabled"),$(),y()};function y(){window.__mission={solve:()=>{d.demonstrate(),k()},place:b=>{d.place?.(b),k()},solution:()=>c.solution,state:()=>({hintsUsed:p,mistakes:f,finished:m,score:Ft(p,f)})}}l.addEventListener("click",()=>{m||p>=c.hints.length||(p++,d.hint(p),n.textContent=c.hints[p-1]?.text??"",p>=c.hints.length&&l.setAttribute("disabled","true"),$(),k())}),i.addEventListener("click",()=>{if(m)return;const b=d.answer();if(b!==null){if(c.check(b)){u();return}f++,n.textContent="לא שם. נסה שוב.",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),400),$()}});function u(){m=!0,h=Ft(p,f);const b=Lt(R(),t.id),q=Gn(b,h);rt(E=>{E.stars+=q,E.missions[t.id]=Math.max(b,h),E.solvedTopics.includes(t.topicId)||E.solvedTopics.push(t.topicId)}),$();const L=g("button",{class:"btn",type:"button"},"עוד אחת");L.addEventListener("click",()=>x(Math.floor(Math.random()*65535)+1));const S=g("button",{class:"btn primary",type:"button"},"לתפריט המשימות");S.addEventListener("click",()=>V("/missions")),a.replaceChildren(g("div",{class:"panel"},g("h2",{},"נכון"),...c.explain.map(E=>g("p",{},E)),g("p",{class:"reward"},q>0?`+${q} ★`:"★"),g("div",{class:"modal-actions"},S,L))),a.classList.remove("hidden")}x(Date.now()&65535||1);const w=_({title:t.title,subtitle:""},s,n,g("div",{class:"hud"},o,g("div",{class:"hud-actions"},l,i)));return{el:w.el,destroy(){d.destroy(),w.destroy()}}}Q("/",Wn);Q("/continent/:id",zn);Q("/battle/:id",zr);Q("/result/:id/:outcome",ts);Q("/upgrades",rs);Q("/missions",je);Q("/missions/:id",je);Q("/mission/:id",ds);Q("/setup",is);Re(()=>{const e=g("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>V("/")),_({title:"הדף לא נמצא",showBack:!1},e)});!R().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const ge=document.getElementById("app");ge&&Ve(ge);
