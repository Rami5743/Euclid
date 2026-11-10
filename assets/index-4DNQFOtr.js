(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const ue=[];let ge=null,it=null,Zt=null;function J(e,t){ue.push({pattern:e.split("/").filter(Boolean),factory:t})}function Be(e){ge=e}function V(e){location.hash==="#"+e?Gt():location.hash=e}function Oe(){history.length>1?history.back():V("/")}function He(){return location.hash.replace(/^#/,"")||"/"}function Re(e){const t=e.split("/").filter(Boolean);for(const n of ue){if(n.pattern.length!==t.length)continue;const s={};let r=!0;for(let a=0;a<n.pattern.length;a++){const o=n.pattern[a],l=t[a];if(o.startsWith(":"))s[o.slice(1)]=decodeURIComponent(l);else if(o!==l){r=!1;break}}if(r)return{factory:n.factory,params:s}}return null}function Gt(){if(!it)return;Zt?.destroy?.(),it.replaceChildren();const e=He(),t=Re(e),n=t?.factory??ge;n&&(Zt=n(t?.params??{}),it.append(Zt.el),it.scrollTop=0)}function je(e){it=e,addEventListener("hashchange",Gt),Gt()}const Et="euclid.";class Pe{read(t){try{const n=localStorage.getItem(Et+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(Et+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(Et+t)}catch{}}}const xe=new Pe,ye="profile";function De(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function _e(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let ct=_e(xe.read(ye)??De());const Tt=new Set;function j(){return ct}function Ve(e){return Tt.add(e),()=>Tt.delete(e)}function rt(e){e(ct),xe.write(ye,ct);for(const t of Tt)t(ct);return ct}function h(e,t={},...n){const s=document.createElement(e);for(const[r,a]of Object.entries(t))r==="class"?s.className=a:s.setAttribute(r,a);return s.append(...n),s}function _(e,...t){const n=h("button",{class:"stars",type:"button",title:"תפריט המשימות"}),s=()=>{n.replaceChildren(h("span",{class:"star-icon"},"★"),h("span",{},String(j().stars)))};s();const r=Ve(s);n.addEventListener("click",()=>V("/missions"));const a=h("header",{class:"top"});if(e.showBack!==!1){const l=h("button",{class:"back",type:"button","aria-label":"חזרה"},"→");l.addEventListener("click",()=>Oe()),a.append(l)}return a.append(h("div",{class:"titles"},h("h1",{},e.title),...e.subtitle?[h("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:h("div",{class:"page"},a,h("main",{class:"content"},...t)),destroy:()=>r()}}const Pt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function Dt(e){return Pt.find(t=>t.id===e)}function _t(e){for(const t of Pt){const n=t.fortresses.find(s=>s.id===e);if(n)return{continent:t,fortress:n}}}function zt(e){return e.fortresses.filter(t=>!t.home)}const ke=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]},{id:"australia-product",continent:"australia",topicId:"mul-div",title:"מלבן המכפלה",kind:"product",requires:["asia-quadrant"]},{id:"australia-powers",continent:"australia",topicId:"powers",title:"סולם החזקות",kind:"powers",requires:["australia-product"]},{id:"australia-square",continent:"australia",topicId:"powers",title:"הריבוע השלם",kind:"perfect-square",requires:["australia-powers"]}];function Ue(e){return ke.find(t=>t.id===e)}function me(e){return ke.filter(t=>t.continent===e)}function Q(e){let t=e>>>0;const s=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return s.seed=e,s}function dt(e,t,n){return t+e()*(n-t)}const Ye="http://www.w3.org/2000/svg",be=1e3,Ke=300,lt=70,pt=be-70,G=130;function A(e,t={}){const n=document.createElementNS(Ye,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Vt(e){const{from:t,to:n,tickStep:s,labelEvery:r}=e,a=document.createElement("div");a.className="board-wrap";const o=A("svg",{class:"board number-line",viewBox:`0 0 ${be} ${Ke}`});a.append(o);const l=document.createElement("div");l.className="tray",a.append(l);const i=A("g",{class:"hints"}),c=A("g",{class:"main"}),d=A("g",{class:"drag"});o.append(i,c,d);const p=n-t,f=g=>lt+(g-t)/p*(pt-lt),m=g=>t+(g-lt)/(pt-lt)*p,$=g=>{const b=Math.round((g-t)/s),k=Math.min(Math.max(b,0),Math.round(p/s));return t+k*s};c.append(A("line",{class:"axis",x1:String(lt-40),y1:String(G),x2:String(pt+40),y2:String(G)})),c.append(A("path",{class:"axis-head",d:`M${pt+40} ${G} l-22 -11 v22 Z`}));for(let g=0;g*s<=p+1e-9;g++){const b=t+g*s,k=f(b),q=g%r===0;if(c.append(A("line",{class:`tick${q?" labelled":""}`,x1:k.toFixed(1),y1:String(G-(q?20:11)),x2:k.toFixed(1),y2:String(G+(q?20:11))})),q){const L=A("text",{class:"tick-label",x:k.toFixed(1),y:String(G+50),"text-anchor":"middle"});L.textContent=String(b),c.append(L)}}const u=g=>{const b=o.getScreenCTM();if(!b)return t;const k=new DOMPoint(g.clientX,g.clientY).matrixTransform(b.inverse());return $(m(k.x))},y=[],x={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:a,xOf:f,flag(g){const b=f(g),k=A("g",{class:"flag",transform:`translate(${b.toFixed(1)} ${G})`});k.append(A("path",{d:"M0 0 v-96",class:"pole"})),k.append(A("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),c.append(k)},chest(g,b,k="chest"){let q=$(g);const L=A("g",{class:`chest ${k}`});L.innerHTML=x[k];const E=A("line",{class:"chest-thread",y1:String(G+6),y2:String(G+78)});d.append(E);const Z=()=>{const C=f(q);L.setAttribute("transform",`translate(${C.toFixed(1)} ${G+112})`),E.setAttribute("x1",C.toFixed(1)),E.setAttribute("x2",C.toFixed(1))};Z(),d.append(L);let S=!1;const K=C=>{S=!0,L.setPointerCapture(C.pointerId),q=u(C),Z(),b(q),C.preventDefault()},O=C=>{S&&(q=u(C),Z(),b(q))},W=()=>{S=!1};L.addEventListener("pointerdown",K),L.addEventListener("pointermove",O),L.addEventListener("pointerup",W),L.addEventListener("pointercancel",W);const U=C=>{q=u(C),Z(),b(q)};return o.addEventListener("pointerdown",U),y.push(()=>{L.removeEventListener("pointerdown",K),L.removeEventListener("pointermove",O),L.removeEventListener("pointerup",W),L.removeEventListener("pointercancel",W),o.removeEventListener("pointerdown",U)}),{get:()=>q,set:C=>{q=$(C),Z(),b(q)}}},token(g,b="ship"){let k=$(g);const q=A("g",{class:`chest static ${b}`});q.innerHTML=x[b],d.append(q);const L=()=>{q.setAttribute("transform",`translate(${f(k).toFixed(1)} ${G-18}) scale(0.78)`)};return L(),{get:()=>k,set:E=>{k=$(E),L()}}},tray(g){l.replaceChildren();for(const b of g){const k=document.createElement("button");k.type="button",k.className="btn small tray-key",k.textContent=b.label,k.addEventListener("click",b.onClick),l.append(k)}},trayEnabled(g){for(const b of Array.from(l.children))g?b.removeAttribute("disabled"):b.setAttribute("disabled","true")},clearArrows(){for(const g of Array.from(c.querySelectorAll(".line-arrow")))g.remove()},band(g,b){const k=f(Math.min(g,b)),q=f(Math.max(g,b));i.append(A("rect",{class:"hint-band",x:k.toFixed(1),y:String(G-60),width:(q-k).toFixed(1),height:"120",rx:"10"}))},bracket(g,b,k){const q=f(g),L=f(b),E=G+74,Z=A("g",{class:"hint-bracket"});Z.append(A("path",{d:`M${q.toFixed(1)} ${E-12} v12 H${L.toFixed(1)} v-12`}));const S=A("text",{x:((q+L)/2).toFixed(1),y:String(E+30),"text-anchor":"middle"});S.textContent=k,Z.append(S),i.append(Z)},count(g,b){const k=g<=b?s:-s,q=Math.round(Math.abs(b-g)/s);for(let L=1;L<=q;L++){const E=g+k*L,Z=A("text",{class:"hint-count",x:f(E).toFixed(1),y:String(G-34),"text-anchor":"middle"});Z.textContent=String(L),i.append(Z)}},arrow(g,b,k,q="plus",L=0,E){const Z=f(g),S=f(b),K=G-56-L*34,O=A("g",{class:`line-arrow ${q}`});O.append(A("path",{d:`M${Z.toFixed(1)} ${G-6} C${Z.toFixed(1)} ${K} ${S.toFixed(1)} ${K} ${S.toFixed(1)} ${G-6}`,fill:"none"}));const W=S>=Z?1:-1;O.append(A("path",{class:"head",d:`M${S.toFixed(1)} ${G-6} l${(-12*W).toFixed(1)} -14 l${(24*W).toFixed(1)} 0 Z`}));const U=A("text",{x:((Z+S)/2).toFixed(1),y:String(K-8),"text-anchor":"middle"});if(U.textContent=k,O.append(U),E!==void 0){const C=A("g",{class:"order"});C.append(A("circle",{cx:Z.toFixed(1),cy:String(G-26),r:"15"}));const R=A("text",{x:Z.toFixed(1),y:String(G-19),"text-anchor":"middle"});R.textContent=String(E),C.append(R),O.append(C)}return c.append(O),O},clearHints(){i.replaceChildren()},destroy(){for(const g of y)g();a.remove()}}}function v(e){return`⁦${e}⁩`}function we(e,t,n){const s=t*n,r=Math.min(...e)-s,a=Math.max(...e)+s;return{tickStep:t,labelEvery:n,from:Math.floor(r/s)*s,to:Math.ceil(a/s)*s}}function We(e){const t=Q(e),n=t()<.6?1:2,s=3+Math.floor(t()*2),r=n*(t()<.5?0:-2),a=[],o=[r];for(let d=0;d<s;d++){const p=n*(2+Math.floor(t()*5)),f=t()<.45?-1:1;a.push(f*p),o.push(o[o.length-1]+f*p)}if(o[o.length-1]===r){const d=n*3;a.push(d),o.push(o[o.length-1]+d)}const l=o[o.length-1],i=we(o,n,5),c=a.map(d=>v(d)).join(" , ");return{config:{...i,start:r,moves:a},solution:l,check:d=>d===l,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${c}`,`הסכום שלהם הוא ${v(l-r)}.`,`מ־${v(r)} מגיעים ל־${v(l)}.`]}}function Xe(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,moves:l}=e.config,i=Vt({from:n,to:s,tickStep:r,labelEvery:a}),c=[o];let d=o;const p=l.map((u,y)=>{const x=d+u,M=i.arrow(d,x,(u>0?"+":"")+u,u>=0?"plus":"minus",y%2,y+1);return d=x,c.push(x),M}),f=i.token(o,"ship");let m=null;const $=i.chest(o,u=>{m=u,t()},"chest");return{el:i.el,answer:()=>m,hint(u){if(u===1&&p[0]?.classList.add("lit"),u===2&&f.set(c[1]??o),u===3&&f.set(c[2]??c[c.length-1]??o),u>=4){for(const y of p)y.classList.add("lit");f.set(c[c.length-1]),$.set(c[c.length-1])}},demonstrate(){f.set(c[c.length-1]),$.set(c[c.length-1])},place:u=>$.set(u),destroy:()=>i.destroy()}}const ze={kind:"voyage",generate:We,mount:Xe},Jt=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function Je(e){const t=Q(e),n=Jt[Math.floor(t()*Jt.length)],s=3+Math.floor(t()*2),r=t()<.5?0:-n[0],a=[],o=[r];for(let p=0;p<s;p++){const f=n[Math.floor(t()*n.length)];a.push(f),o.push(o[o.length-1]+f)}o[o.length-1]===r&&a.push(n[0]);const i=r+a.reduce((p,f)=>p+f,0),c=we([...o,i],1,5),d=i-r;return{config:{...c,start:r,target:i,keys:n,route:a},solution:i,check:p=>p===i,hints:[{text:`מהצפרדע ליעד יש ${v(d)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${v(a[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${v(d)}.`,`${a.map(p=>v(p)).join(" ועוד ")} ביחד נותנים ${v(d)}.`]}}function Qe(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,target:l,keys:i,route:c}=e.config,d=Vt({from:n,to:s,tickStep:r,labelEvery:a});d.flag(l);let p=o,f=!1;const m=d.chest(o,()=>{},"frog"),$=document.createElement("p");$.className="running-total";const u=()=>{$.textContent=f?`${v(p-o)}`:""},y=M=>{const g=p+M;g<n||g>s||(d.arrow(p,g,(M>0?"+":"")+M,M>=0?"plus":"minus"),p=g,f=!0,m.set(p),u(),t())},x=()=>{d.clearArrows(),p=o,f=!1,m.set(o),u(),t()};return d.tray([...i.map(M=>({label:(M>0?"+":"")+M,onClick:()=>y(M)})),{label:"התחלה",onClick:x}]),d.el.append($),{el:d.el,answer:()=>f?p:null,hint(M){if(M===1&&d.band(Math.min(o,l),Math.max(o,l)),M===2&&$.classList.add("lit"),M===3&&(x(),y(c[0]??0)),M>=4){x();for(const g of c)y(g)}},demonstrate(){x();for(const M of c)y(M)},place:M=>{p=M,f=!0,m.set(M),u(),t()},destroy:()=>d.destroy()}}const tn={kind:"jumps",generate:Je,mount:Qe},en="http://www.w3.org/2000/svg",P=720,B=40;function F(e,t={}){const n=document.createElementNS(en,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Me(e){const{range:t}=e,n=document.createElement("div");n.className="board-wrap";const s=F("svg",{class:"board grid-board",viewBox:`0 0 ${P} ${P}`});n.append(s);const r=F("g",{class:"hints"}),a=F("g",{class:"main"}),o=F("g",{class:"drag"});s.append(r,a,o);const l=(P-2*B)/(2*t),i=u=>P/2+u*l,c=u=>P/2-u*l,d=(u,y)=>({x:Math.max(-t,Math.min(t,Math.round((u-P/2)/l))),y:Math.max(-t,Math.min(t,Math.round((P/2-y)/l)))});for(let u=-t;u<=t;u++)a.append(F("line",{class:"grid-line",x1:String(B),y1:c(u).toFixed(1),x2:String(P-B),y2:c(u).toFixed(1)})),a.append(F("line",{class:"grid-line",x1:i(u).toFixed(1),y1:String(B),x2:i(u).toFixed(1),y2:String(P-B)}));a.append(F("line",{class:"grid-axis",x1:String(B-14),y1:c(0).toFixed(1),x2:String(P-B+14),y2:c(0).toFixed(1)})),a.append(F("line",{class:"grid-axis",x1:i(0).toFixed(1),y1:String(P-B+14),x2:i(0).toFixed(1),y2:String(B-14)})),a.append(F("path",{class:"grid-head",d:`M${P-B+14} ${c(0)} l-18 -9 v18 Z`})),a.append(F("path",{class:"grid-head",d:`M${i(0)} ${B-14} l-9 18 h18 Z`}));for(let u=-t;u<=t;u++){if(u===0)continue;const y=F("text",{class:"grid-label",x:i(u).toFixed(1),y:(c(0)+30).toFixed(1),"text-anchor":"middle"});y.textContent=String(u);const x=F("text",{class:"grid-label",x:(i(0)-16).toFixed(1),y:(c(u)+9).toFixed(1),"text-anchor":"end"});x.textContent=String(u),a.append(y,x)}const p=u=>{const y=s.getScreenCTM();if(!y)return{x:0,y:0};const x=new DOMPoint(u.clientX,u.clientY).matrixTransform(y.inverse());return d(x.x,x.y)},f=[],m=(u,y)=>u.map(x=>`${i(x.x+y.x).toFixed(1)},${c(x.y+y.y).toFixed(1)}`).join(" ");return{el:n,xOf:i,yOf:c,pick(u){let y={x:0,y:0};const x=F("g",{class:"pick hidden"});x.append(F("circle",{class:"pick-ring",r:"22"})),x.append(F("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),o.append(x);const M=()=>{x.classList.remove("hidden"),x.setAttribute("transform",`translate(${i(y.x).toFixed(1)} ${c(y.y).toFixed(1)})`)},g=b=>{y=p(b),M(),u(y),b.preventDefault()};return s.addEventListener("pointerdown",g),f.push(()=>s.removeEventListener("pointerdown",g)),{get:()=>y,set:b=>{y=b,M(),u(y)}}},shape(u,y=""){const x=F("polygon",{class:`shape ${y}`,points:m(u,{x:0,y:0})});return a.append(x),x},dragShape(u,y,x){let M={...y};const g=F("polygon",{class:"shape ghost",points:m(u,M)});o.append(g);const b=()=>g.setAttribute("points",m(u,M));let k=!1;const q=S=>{k=!0,g.setPointerCapture(S.pointerId),S.preventDefault()},L=S=>{k&&(M=p(S),b(),x(M))},E=()=>{k=!1};g.addEventListener("pointerdown",q),g.addEventListener("pointermove",L),g.addEventListener("pointerup",E),g.addEventListener("pointercancel",E);const Z=S=>{S.target!==g&&(M=p(S),b(),x(M))};return s.addEventListener("pointerdown",Z),f.push(()=>{g.removeEventListener("pointerdown",q),g.removeEventListener("pointermove",L),g.removeEventListener("pointerup",E),g.removeEventListener("pointercancel",E),s.removeEventListener("pointerdown",Z)}),{get:()=>M,set:S=>{M={...S},b(),x(M)}}},scout(u,y){const x=i(y==="x"?u:0),M=c(y==="x"?0:u),g=F("g",{class:`scout ${y}`,transform:`translate(${x.toFixed(1)} ${M.toFixed(1)})`});g.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,a.append(g)},guide(u,y){const x=y==="x"?{x1:i(u),y1:B,x2:i(u),y2:P-B}:{x1:B,y1:c(u),x2:P-B,y2:c(u)};r.append(F("line",{class:"guide",x1:x.x1.toFixed(1),y1:x.y1.toFixed(1),x2:x.x2.toFixed(1),y2:x.y2.toFixed(1)}))},mirrorAxis(u){const y=u==="y"?{x1:i(0),y1:B-14,x2:i(0),y2:P-B+14}:{x1:B-14,y1:c(0),x2:P-B+14,y2:c(0)};a.append(F("line",{class:"mirror-axis",x1:y.x1.toFixed(1),y1:y.y1.toFixed(1),x2:y.x2.toFixed(1),y2:y.y2.toFixed(1)}))},span(u,y,x){const M=F("g",{class:"hint-span"});M.append(F("line",{x1:i(u.x).toFixed(1),y1:c(u.y).toFixed(1),x2:i(y.x).toFixed(1),y2:c(y.y).toFixed(1)}));const g=F("text",{x:((i(u.x)+i(y.x))/2).toFixed(1),y:((c(u.y)+c(y.y))/2-10).toFixed(1),"text-anchor":"middle"});g.textContent=x,M.append(g),r.append(M)},dot(u,y=""){r.append(F("circle",{class:`grid-dot ${y}`,cx:i(u.x).toFixed(1),cy:c(u.y).toFixed(1),r:"11"}))},clearHints(){r.replaceChildren()},destroy(){for(const u of f)u();n.remove()}}}function nn(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const Qt=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function rn(e){const t=Q(e),n=6,s=Qt[Math.floor(t()*Qt.length)],r=t()<.5?"y":"x",a=r==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},o=nn(a,r);return{config:{range:n,shape:s,anchor:a,axis:r},solution:o,check:i=>i.x===o.x&&i.y===o.y,hints:[{text:`הציר ${r==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[r==="y"?`בשיקוף סביב הציר האנכי כל ${v("x")} מחליף סימן ו־${v("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${v("y")} מחליף סימן ו־${v("x")} נשאר.`,`${v(`(${a.x}, ${a.y})`)} הולך ל־${v(`(${o.x}, ${o.y})`)}.`]}}function sn(e,t){const{range:n,shape:s,anchor:r,axis:a}=e.config,o=e.solution,l=Me({range:n});l.mirrorAxis(a),l.shape(s.map(f=>({x:f.x+r.x,y:f.y+r.y})));const i=s.map(f=>a==="y"?{x:-f.x,y:f.y}:{x:f.x,y:-f.y});let c=null;const d=a==="y"?{x:-n+1,y:-n+2}:{x:-n+2,y:-n+1},p=l.dragShape(i,d,f=>{c=f,t()});return{el:l.el,answer:()=>c,hint(f){if(f===1&&l.guide(0,a==="y"?"x":"y"),f===2){const m=a==="y"?{x:0,y:r.y}:{x:r.x,y:0};l.span(r,m,v(Math.abs(a==="y"?r.x:r.y)))}f===3&&l.dot(o,"lit"),f>=4&&p.set(o)},demonstrate(){l.dot(o,"lit"),p.set(o)},place:f=>p.set(f),destroy:()=>l.destroy()}}const an={kind:"mirror",generate:rn,mount:sn};function on(){const e=document.createElement("div");e.className="board-wrap chain-board";const t=document.createElement("p");t.className="chain-goal";const n=document.createElement("p");n.className="chain-value";const s=document.createElement("p");s.className="chain-steps";const r=document.createElement("p");r.className="chain-hint";const a=document.createElement("div");return a.className="tray",e.append(t,n,s,r,a),{el:e,setValue:o=>{n.textContent=String(o)},setChain:o=>{s.textContent=o.join(" → ")},goal:o=>{t.textContent=o},keys:o=>{a.replaceChildren();for(const l of o){const i=document.createElement("button");i.type="button",i.className="btn small tray-key",i.textContent=l.label,i.addEventListener("click",l.onClick),a.append(i)}},mark:o=>{r.textContent=o},matched:o=>n.classList.toggle("matched",o),clearHints:()=>{r.textContent=""},destroy:()=>e.remove()}}function ln(e){const t=Q(e),n=[2,3,5],s=n[Math.floor(t()*n.length)],r=s===2?4+Math.floor(t()*4):s===3?3+Math.floor(t()*2):2+Math.floor(t()*2),a=s**r,o=[...new Set([s,...n])].sort((l,i)=>l-i);return{config:{base:s,exponent:r,target:a,keys:o},solution:a,check:l=>l===a,hints:[{text:`${v(a)} הוא חזקה של ${v(s)}`},{text:`${v(s)} × ${v(s)} = ${v(s*s)}`},{text:`צריך ${v(r)} פעמים ${v(s)}`},{text:"כך בונים את המספר"}],explain:[`${v(a)} = ${v(`${s}^${r}`)}.`,`${Array.from({length:r},()=>v(s)).join(" × ")} = ${v(a)}.`]}}function cn(e,t){const{base:n,exponent:s,target:r,keys:a}=e.config,o=on();o.goal(`${r}`);let l=1,i=["1"],c=!1;const d=()=>{o.setValue(l),o.setChain(i),o.matched(l===r)},p=m=>{l*m>r*100||(l*=m,i.push(`×${m}`),c=!0,d(),t())},f=()=>{l=1,i=["1"],c=!1,d(),t()};return o.keys([...a.map(m=>({label:`× ${m}`,onClick:()=>p(m)})),{label:"התחלה",onClick:f}]),d(),{el:o.el,answer:()=>c?l:null,hint(m){if(m===1&&o.mark(`${r} = ?`),m===2&&o.mark(`${n} × ${n} = ${n*n}`),m===3&&(f(),p(n),p(n)),m>=4){f();for(let $=0;$<s;$++)p(n)}},demonstrate(){f();for(let m=0;m<s;m++)p(n)},place:m=>{l=m,c=!0,i=[String(m)],d(),t()},destroy:()=>o.destroy()}}const dn={kind:"powers",generate:ln,mount:cn},fn="http://www.w3.org/2000/svg",St=820,At=620,ht=70;function Y(e,t={}){const n=document.createElementNS(fn,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function pn(e){const{cols:t,rows:n,square:s=!1}=e,r=document.createElement("div");r.className="board-wrap";const a=Y("svg",{class:"board rect-board",viewBox:`0 0 ${St} ${At}`});r.append(a);const o=Y("g",{class:"hints"}),l=Y("g",{class:"main"}),i=Y("g",{class:"drag"});a.append(l,o,i);const c=Math.min((St-2*ht)/t,(At-2*ht)/n),d=ht,p=At-ht,f=x=>d+x*c,m=x=>p-x*c;for(let x=0;x<=t;x++)l.append(Y("line",{class:"cell-line",x1:f(x).toFixed(1),y1:m(0).toFixed(1),x2:f(x).toFixed(1),y2:m(n).toFixed(1)}));for(let x=0;x<=n;x++)l.append(Y("line",{class:"cell-line",x1:f(0).toFixed(1),y1:m(x).toFixed(1),x2:f(t).toFixed(1),y2:m(x).toFixed(1)}));const $=Y("text",{class:"goal",x:String(St-30),y:"58","text-anchor":"end"});l.append($);const u=[];return{el:r,corner(x,M){let g={...x};const b=Y("rect",{class:"area-rect"}),k=Y("circle",{class:"area-handle",r:"20"}),q=Y("text",{class:"area-text",x:"30",y:"58","text-anchor":"start"}),L=Y("text",{class:"side-label","text-anchor":"middle"}),E=Y("text",{class:"side-label","text-anchor":"middle"});i.append(b,L,E,q,k);const Z=()=>{b.setAttribute("x",f(0).toFixed(1)),b.setAttribute("y",m(g.h).toFixed(1)),b.setAttribute("width",(g.w*c).toFixed(1)),b.setAttribute("height",(g.h*c).toFixed(1)),k.setAttribute("cx",f(g.w).toFixed(1)),k.setAttribute("cy",m(g.h).toFixed(1)),q.textContent=`${g.w} × ${g.h} = ${g.w*g.h}`,L.setAttribute("x",f(g.w/2).toFixed(1)),L.setAttribute("y",(m(0)+44).toFixed(1)),L.textContent=String(g.w),E.setAttribute("x",(f(0)-32).toFixed(1)),E.setAttribute("y",(m(g.h/2)+10).toFixed(1)),E.textContent=String(g.h)};Z();const S=R=>{const ot=a.getScreenCTM();if(!ot)return g;const w=new DOMPoint(R.clientX,R.clientY).matrixTransform(ot.inverse());let N=Math.round((w.x-d)/c),H=Math.round((p-w.y)/c);if(s){const Xt=Math.max(N,H);N=Xt,H=Xt}return{w:Math.max(1,Math.min(t,N)),h:Math.max(1,Math.min(n,H))}};let K=!1;const O=R=>{K=!0,k.setPointerCapture(R.pointerId),R.preventDefault()},W=R=>{K&&(g=S(R),Z(),M(g))},U=()=>{K=!1};k.addEventListener("pointerdown",O),k.addEventListener("pointermove",W),k.addEventListener("pointerup",U),k.addEventListener("pointercancel",U);const C=R=>{R.target!==k&&(g=S(R),Z(),M(g))};return a.addEventListener("pointerdown",C),u.push(()=>{k.removeEventListener("pointerdown",O),k.removeEventListener("pointermove",W),k.removeEventListener("pointerup",U),k.removeEventListener("pointercancel",U),a.removeEventListener("pointerdown",C)}),{get:()=>g,set:R=>{g={...R},Z(),M(g)}}},goal(x){$.textContent=x},strip(x,M){o.append(Y("rect",{class:"hint-strip",x:f(0).toFixed(1),y:m(M).toFixed(1),width:(x*c).toFixed(1),height:(M*c).toFixed(1)}))},clearHints(){o.replaceChildren()},destroy(){for(const x of u)x();r.remove()}}}function te(e,t,n){const s=[];for(let r=1;r<=t;r++){if(e%r!==0)continue;const a=e/r;a>=1&&a<=n&&s.push({w:r,h:a})}return s}function hn(e){const t=Q(e),n=12,s=10;let r=24;for(let l=0;l<40;l++){const i=2+Math.floor(t()*9),c=2+Math.floor(t()*8),d=i*c;if(te(d,n,s).filter(p=>p.w>1&&p.h>1).length>=2){r=d;break}}const a=te(r,n,s),o=a.find(l=>l.w>1&&l.h>1)??a[0];return{config:{cols:n,rows:s,target:r,square:!1},solution:o,check:l=>l.w*l.h===r,hints:[{text:`צריך מלבן ששטחו ${v(r)}`},{text:`${v(o.w)} בשורה`},{text:`${v(o.w)} כפול ${v(o.h)}`},{text:"כך זה נראה"}],explain:[`${v(o.w)} × ${v(o.h)} = ${v(r)}.`,`יש גם דרכים אחרות: ${a.map(l=>v(`${l.w}×${l.h}`)).join(" , ")}.`]}}function ve(e,t){const{cols:n,rows:s,target:r,square:a}=e.config,o=pn({cols:n,rows:s,square:a});o.goal(`= ${r}`);const l=e.solution;let i=!1;const c=o.corner({w:1,h:1},()=>{i=!0,t()});return{el:o.el,answer:()=>i?c.get():null,hint(d){d===1&&o.goal(`= ${r}`),d===2&&o.strip(l.w,1),d===3&&o.strip(l.w,l.h),d>=4&&c.set(l)},demonstrate(){c.set(l)},place:d=>c.set(d),destroy:()=>o.destroy()}}const un={kind:"product",generate:hn,mount:ve};function gn(e){const t=Q(e),n=12,s=12,r=3+Math.floor(t()*8),a=r*r;return{config:{cols:n,rows:s,target:a,square:!0},solution:{w:r,h:r},check:o=>o.w===r&&o.h===r,hints:[{text:`ריבוע ששטחו ${v(a)}`},{text:"אותו מספר בשורה ובעמודה"},{text:`${v(r)} בשורה`},{text:`${v(r)} כפול ${v(r)}`}],explain:[`${v(r)} × ${v(r)} = ${v(a)}.`,`הצלע היא השורש הריבועי של ${v(a)}.`]}}const xn={kind:"perfect-square",generate:gn,mount:ve};function yn(e){const t=Q(e),n=6,s=()=>{const a=1+Math.floor(t()*(n-1));return t()<.5?-a:a},r={x:s(),y:s()};return{config:{range:n,target:r},solution:r,check:a=>a.x===r.x&&a.y===r.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${v(`(${r.x}, ${r.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${v(r.x)}, והצופה על הציר האנכי ב־${v(r.y)}.`,`המפגש הוא ${v(`(${r.x}, ${r.y})`)}.`]}}function kn(e,t){const{range:n,target:s}=e.config,r=Me({range:n});r.scout(s.x,"x"),r.scout(s.y,"y");let a=null;const o=r.pick(l=>{a=l,t()});return{el:r.el,answer:()=>a,hint(l){l===1&&r.guide(s.x,"x"),l===2&&r.guide(s.y,"y"),l===3&&r.dot(s,"lit"),l>=4&&o.set(s)},demonstrate(){r.dot(s,"lit"),o.set(s)},place:l=>o.set(l),destroy:()=>r.destroy()}}const mn={kind:"quadrant",generate:yn,mount:kn},ee=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function bn(e){const t=Q(e),n=ee[Math.floor(t()*ee.length)],s=Math.round((n.to-n.from)/n.tickStep),r=[];for(let l=1;l<s;l++)l%n.labelEvery!==0&&r.push(n.from+l*n.tickStep);const a=r[Math.floor(t()*r.length)],o=n.tickStep*n.labelEvery;return{config:{...n,target:a},solution:a,check:l=>l===a,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${v(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${v(o)}.`,`כל סימון קטן שווה ${v(n.tickStep)}.`,`היעד הוא ${v(a)}.`]}}function wn(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,target:o}=e.config,l=Vt({from:n,to:s,tickStep:r,labelEvery:a});l.flag(o);let i=null;const c=l.chest(n,f=>{i=f,t()});i=null;const d=n+Math.floor((o-n)/(r*a))*r*a,p=d+r*a;return{el:l.el,answer:()=>i,hint(f){f===1&&l.band(d,p),f===2&&l.bracket(n,n+r,String(r)),f===3&&l.count(d,o),f>=4&&c.set(o)},demonstrate(){l.count(d,o),c.set(o)},place:f=>c.set(f),destroy:()=>l.destroy()}}const Mn={kind:"treasure-line",generate:bn,mount:wn};const Le={"treasure-line":Mn,jumps:tn,voyage:ze,quadrant:mn,mirror:an,product:un,powers:dn,"perfect-square":xn};function vn(e){return Le[e]}function qe(e){return Le[e]!==void 0}const at=5;function Ft(e,t){return Math.max(1,at-e-t)}function Ln(e,t){return Math.max(0,t-e)}const qn=.8;function Ut(){return[...Pt].sort((e,t)=>e.order-t.order)}function Lt(e,t){return e.missions[t]??0}function $e(e,t){return Lt(e,t)>0}function $n(e,t){return qe(e.kind)&&e.requires.every(n=>$e(t,n))}function Zn(e,t){return me(e.id).filter(n=>$n(n,t))}function qt(e){return me(e.id).filter(t=>qe(t.kind))}function En(e,t){return qt(e).reduce((n,s)=>n+Lt(t,s.id),0)}function Sn(e){return qt(e).length*at}function An(e,t){const n=Sn(e);return n===0?!1:En(e,t)>=qn*n}function $t(e,t){const n=Ut(),s=n.findIndex(r=>r.id===e.id);return s<=0?!0:An(n[s-1],t)}function Fn(e,t){const n=qt(e);return n.length>0&&n.every(s=>$e(t,s.id))}function Cn(e){const t=Ut(),n=t.filter(s=>$t(s,e));return n.find(s=>!Fn(s,e))??n[n.length-1]??t[0]}const yt={width:2e3,height:1e3};function Bt(e,t){return{x:(e+180)/360*yt.width,y:(90-t)/180*yt.height}}const Nn={x:0,y:0,w:yt.width,h:yt.height};function In(e,t){const n=Bt(e.lon0,e.lat0),s=Bt(e.lon1,e.lat1);let r=Math.min(n.x,s.x),a=Math.min(n.y,s.y),o=Math.abs(s.x-n.x),l=Math.abs(s.y-n.y);if(o/l<t){const i=l*t;r-=(i-o)/2,o=i}else{const i=o/t;a-=(i-l)/2,l=i}return{x:r,y:a,w:o,h:l}}function Gn(e,t,n){const s=Bt(e,t);return{left:(s.x-n.x)/n.w*100,top:(s.y-n.y)/n.h*100}}function Ze(e,t,n){const s=h("div",{class:"map-art","aria-hidden":"true"});s.innerHTML=e;const r=s.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=h("div",{class:"map-markers"});for(const o of n){const{left:l,top:i}=Gn(o.lon,o.lat,t),c=o.onClick?"button":"div",d=h(c,{class:`marker ${o.state}`,style:`left:${l.toFixed(2)}%; top:${i.toFixed(2)}%`});c==="button"&&d.setAttribute("type","button");const p=h("span",{class:"marker-icon"});p.innerHTML=o.icon;const f=h("span",{class:"marker-caption"},h("span",{class:"marker-label"},o.label),...o.sub?[h("span",{class:"marker-sub"},o.sub)]:[]);d.append(p,f),o.onClick&&d.addEventListener("click",o.onClick),a.append(d)}return h("div",{class:"map"},s,a)}const Ee=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,Tn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,Bn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function On(){const e=j(),t=Ut().map(n=>{const s=zt(n).length,r=zt(n).filter(a=>e.conquered.includes(a.id)).length;return $t(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${s}`,state:"continent",icon:Tn,onClick:()=>V(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:Bn}});return _({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Ze(Ee,Nn,t),h("div",{class:"row"},Ct("שדרוג הגיבורים","/upgrades"),Ct("תפריט המשימות","/missions"),Ct("הגיבורים שלי","/setup")))}function Ct(e,t){const n=h("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>V(t)),n}const Nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Hn=5/3;function Rn(e){const t=Dt(e.id??"");if(!t)return _({title:"יבשת לא נמצאה"},h("p",{},"חזרה למפת העולם."));const n=j();if(!$t(t,n)){const r=h("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>V("/")),_({title:t.name,subtitle:t.domain},h("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),h("div",{class:"row"},r))}const s=t.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:Nt}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:Nt}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:Nt,onClick:()=>V(`/battle/${r.id}`)});return _({title:t.name,subtitle:t.domain},Ze(Ee,In(t.view,Hn),s),h("div",{class:"row"},ne("שדרוג הגיבורים","/upgrades"),ne("תפריט המשימות",`/missions/${t.id}`)))}function ne(e,t){const n=h("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>V(t)),n}function et(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function kt(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function jn(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function nt(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function Ot(e,t){let n=null,s=1/0;for(const r of t){const a=et(e,r);(a<s-1e-9||Math.abs(a-s)<=1e-9&&n&&r.id<n.id)&&(n=r,s=a)}return n}const Pn=2.2;function Dn(e,t){const n=jn(e,t.side);if(n.length===0)return{kind:"idle"};const s=Ot(t,n.filter(o=>o.stats.range<=1.5));if(t.stats.range>2&&s&&et(t,s)<Pn){const o=t.x-s.x,l=t.y-s.y,i=Math.hypot(o,l)||1;return{kind:"move",x:t.x+o/i*3,y:t.y+l/i*3}}const a=Ot(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}const Ht=1/30,re=50;function _n(e,t){return e*re/(re+t)}const se=.3,Se=.45,Ae={arrow:14,fire:9,heal:12},Vn=.85,Un=.15;function Yn(e,t,n,s){const r=t==="player"?1:-1,a=t==="player"?3:n-3,o=s/2,l=[0,-1.6,1.6];return e.map((i,c)=>({x:a+(i.stats.range<=1.5?2*r:0),y:o+(l[c]??0)}))}function Kn(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=Q(e.seed),s={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},r=(a,o)=>{const l=Yn(a,o,t.width,t.height);a.forEach((i,c)=>{const d=l[c];s.units.push({id:`${o}-${i.cls}-${c}`,side:o,cls:i.cls,name:i.name,gender:i.gender,x:d.x+dt(n,-.6,.6),y:d.y+dt(n,-.6,.6),hp:i.stats.hp,maxHp:i.stats.hp,stats:i.stats,order:o===s.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:dt(n,0,1/i.stats.attackRate),healCooldown:dt(n,0,i.stats.healRate??3),facing:o==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(e.player,"player"),r(e.enemy,"enemy"),s}function It(e,t,n){const s=nt(e,t);s?.alive&&(s.order=n)}function ae(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function oe(e,t){const n=nt(e,t);if(!n?.alive||!n.stats.healing)return null;let s=null;for(const r of kt(e,n.side))r.id===n.id||r.hp>=r.maxHp||et(n,r)>n.stats.range||(!s||r.hp/r.maxHp<s.hp/s.maxHp)&&(s=r);return s}function Wn(e,t){const n=nt(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function Xn(e,t,n){const s=nt(e,t),r=nt(e,n),a=s?.stats.healing;return!s?.alive||!a||s.healCooldown>0||!r?.alive||r.side!==s.side||r.id===s.id||et(s,r)>s.stats.range?!1:(Fe(e,s,r,a),!0)}function Fe(e,t,n,s){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:Ae.heal}),t.healCooldown=t.stats.healRate??3}function zn(e,t=Ht){if(!e.winner){e.time+=t,Jn(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),Qn(e,n),tr(e,n,t));rr(e),sr(e),ar(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Jn(e,t){const n=[];for(const s of e.projectiles){const r=nt(e,s.targetId);if(!r||!r.alive)continue;const a=r.x-s.x,o=r.y-s.y,l=Math.hypot(a,o),i=s.speed*t;if(l<=i){if(s.kind==="heal"){const c=Math.min(r.maxHp-r.hp,s.amount);r.hp+=c,e.events.push({kind:"heal",unitId:r.id,amount:c,time:e.time})}else Ce(e,r,s.amount);continue}s.x+=a/l*i,s.y+=o/l*i,s.angle=Math.atan2(o,a),n.push(s)}e.projectiles=n}function Qn(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const s=kt(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*Vn&&et(t,a)<=t.stats.range);let r=null;for(const a of s)(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);r&&Fe(e,t,r,n)}function tr(e,t,n){const s=er(e,t);if(s.kind==="idle"){t.targetId=null;return}if(s.kind==="move"){t.targetId=null,le(t,s.x,s.y,n);return}const r=nt(e,s.targetId);if(!r||!r.alive){t.targetId=null;return}if(t.targetId=r.id,et(t,r)>t.stats.range){le(t,r.x,r.y,n);return}t.facing=r.x>=t.x?1:-1,t.cooldown<=0&&nr(e,t,r)}function er(e,t){const n=t.order;if(n.kind==="move")if(et(t,n)<=Un)t.order=ae(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const s=nt(e,t.order.targetId);if(s?.alive)return{kind:"attack",targetId:s.id};t.order=ae(e,t)}if(t.order.kind==="hold"){const s=e.units.filter(a=>a.alive&&a.side!==t.side&&et(t,a)<=t.stats.range),r=Ot(t,s);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return Dn(e,t)}function le(e,t,n,s){const r=t-e.x,a=n-e.y,o=Math.hypot(r,a);if(o<1e-6)return;const l=Math.min(o,e.stats.speed*s);e.x+=r/o*l,e.y+=a/o*l,Math.abs(r)>1e-6&&(e.facing=r>0?1:-1)}function nr(e,t,n){const s=_n(t.stats.attack,n.stats.defense)*(1+dt(e.rng,-se,se));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){Ce(e,n,s);return}const r=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:r,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:Ae[r]})}function Ce(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function rr(e){const t=e.units.filter(s=>s.alive),n=Se*2;for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const a=t[s],o=t[r],l=o.x-a.x,i=o.y-a.y,c=Math.hypot(l,i);if(c>=n)continue;const d=(n-c)/2,p=c<1e-6?1:l/c,f=c<1e-6?0:i/c;a.x-=p*d,a.y-=f*d,o.x+=p*d,o.y+=f*d}}function sr(e){const t=Se;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function ar(e){const t=kt(e,"player").length,n=kt(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const ft={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function mt(e,t){return ft[e][t]}const bt={warrior:ft.warrior.m,archer:ft.archer.m,mage:ft.mage.m},Yt={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},or={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},Kt={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Wt=[2,3,5,8,12,17,23,30],Ne=Wt.length,lr=.08;function ir(e){return e>=Ne?null:Wt[e]}function Ie(e){return 1+lr*e}const ie=8;function cr(e,t,n){return e*Ie(n)}function dr(e){let t=0;for(let n=0;n<Math.min(e,Ne);n++)t+=Wt[n];return t}const Ge=["warrior","archer","mage"],fr={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},pr=["hp","attack","defense"];function hr(e,t){const s={...Yt[e]};for(const r of Kt[e]){const a=t[r]??0;if(a<=0)continue;const o=s[r];typeof o=="number"&&(s[r]=o*Ie(a))}return s}function ur(e){return Ge.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||bt[t],gender:n.gender,stats:hr(t,n.levels)}})}function gr(e){return Ge.map(t=>{const n={...Yt[t]};for(const s of pr){const r=n[s];typeof r=="number"&&(n[s]=r*e)}return{cls:t,name:fr[t],gender:"m",stats:n}})}function xr(e,t,n){const s=_t(e);return!s||s.fortress.home?null:{player:ur(t),enemy:gr(s.fortress.difficulty),seed:n,manual:"player"}}let gt=null;function yr(e){gt=e}function kr(e){return gt&&gt.fortressId===e?gt:null}const X={x:64,y:84},z={x:56,y:58},tt={x:77,y:56},wt={x:66,y:50},Mt={x:60,y:52},ce={x:100,y:70},vt={x:99,y:51};function mr(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function I(e,t,n,s,r=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${s})${r}`)}function br(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function wr(e,t){const{phase:n,stride:s,time:r}=t,a=Math.sin(n)*s,o=Math.sin(n*2)*s,l=Math.sin(r*2.1)*(1-s),i=br(t.sinceAttack);I(e.legBack,a*26,X.x,X.y),I(e.legFront,-a*26,X.x,X.y),I(e.cloak,a*9+l*1.6,Mt.x,Mt.y),I(e.robe,a*4+l*1.2,X.x,X.y+20),I(e.quiver,a*6,z.x,z.y);const c=-Math.abs(o)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${c.toFixed(2)}) rotate(${(a*2+l*.9).toFixed(2)} ${X.x} ${X.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(c*1.15).toFixed(2)}) rotate(${(-a*2.5+l*1.4).toFixed(2)} ${wt.x} ${wt.y})`),t.cls){case"warrior":{I(e.armBack,-a*14,z.x,z.y),I(e.armFront,a*10+i*60,tt.x,tt.y),I(e.sword,i*42,vt.x,vt.y),xt(e.swoosh,t.sinceAttack<.42?Math.max(0,i)*.9:0);break}case"archer":{const d=t.sinceAttack<.42?i:-.35;if(I(e.armFront,a*5,tt.x,tt.y),I(e.armBack,-a*8-d*16,z.x,z.y),e.arrow){const p=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=p?"0":"1",e.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}e.bow&&I(e.bow,d*4,104,68),xt(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{I(e.armBack,-a*10,z.x,z.y),I(e.armFront,a*6+i*26,tt.x,tt.y),I(e.staff,i*18,ce.x,ce.y);const d=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(r*4);e.orb&&de(e.orb,d,100,20),e.orbHalo&&de(e.orbHalo,d*1.1,100,20);const p=t.sinceAttack>=0&&t.sinceAttack<.45;xt(e.swoosh,p?1-t.sinceAttack/.45:0),e.swoosh&&p&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function xt(e,t){e&&(e.style.opacity=t.toFixed(2))}function de(e,t,n,s){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(s*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function Mr(e,t){const n=Math.min(1,t),s=1-Math.pow(1-n,3);I(e.legBack,s*30,X.x,X.y),I(e.legFront,-s*20,X.x,X.y),I(e.armBack,s*40,z.x,z.y),I(e.armFront,-s*60,tt.x,tt.y),I(e.sword,s*50,vt.x,vt.y),xt(e.swoosh,0),I(e.head,s*18,wt.x,wt.y),I(e.cloak,s*12,Mt.x,Mt.y)}const vr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Lr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,qr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,$r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Zr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Er=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Sr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ar=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,D=100,st=128,fe=2.05,pe=.7,Fr="http://www.w3.org/2000/svg",Cr={"warrior-f":Lr,"warrior-m":qr,"archer-f":$r,"archer-m":Zr,"mage-f":Er,"mage-m":Sr};function T(e,t={}){const n=document.createElementNS(Fr,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Rt(e,t,n){const s=e.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("width",String(t)),s.setAttribute("height",String(n)),s.setAttribute("overflow","visible"))}function Nr(){const e=T("defs");return e.innerHTML=`
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
    </filter>`,e}function Ir(e,t){const n=T("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*D} ${e.arena.height*D}`,preserveAspectRatio:"xMidYMid meet"}),s=T("g",{class:"arena-art"});s.innerHTML=vr,Rt(s,e.arena.width*D,e.arena.height*D);const r=T("g",{class:"layer-ground"}),a=T("g",{class:"layer-units"}),o=T("g",{class:"layer-shots"}),l=T("g",{class:"layer-bursts"}),i=T("g",{class:"layer-text"}),c=T("rect",{class:"vignette",width:String(e.arena.width*D),height:String(e.arena.height*D),fill:"url(#fx-vignette)"});n.append(Nr(),s,r,a,o,l,i,c);const d=new Map;for(const f of e.units){const m=Gr(f);d.set(f.id,m),r.append(m.ring,m.shadow,m.dust),a.append(m.group)}const p=f=>{f.preventDefault();const m=n.getScreenCTM();if(!m)return;const $=new DOMPoint(f.clientX,f.clientY).matrixTransform(m.inverse()),u=$.x/D,y=$.y/D;let x=null,M=1;for(const g of e.units){if(!g.alive)continue;const b=Math.hypot(g.x-u,g.y-.5-y);b<M&&(M=b,x=g)}t({x:u,y,unit:x})};return n.addEventListener("pointerdown",p),{el:n,update(f,m){for(const u of f.units)d.get(u.id)?.update(u,f.time,m.has(u.id));const $=[...f.units].sort((u,y)=>Number(u.alive)-Number(y.alive)||u.y-y.y);for(const u of $){const y=d.get(u.id);y&&a.append(y.group)}Tr(o,f.projectiles,f.time),Or(l,f,d),Hr(i,f,d)},destroy(){n.removeEventListener("pointerdown",p),n.remove()}}}function Gr(e){const t=T("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=T("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),s=T("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});s.style.opacity="0";const r=T("g",{class:`unit ${e.side} ${e.cls}`}),a=T("g",{class:"sprite"});a.innerHTML=Cr[`${e.cls}-${e.gender}`]??"",Rt(a,st,st);const o=T("g",{class:"fallen"});o.innerHTML=Ar,Rt(o,st,st),o.setAttribute("transform",`scale(${fe}) translate(${-st/2} -122)`),o.style.display="none";const l=T("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),i=T("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});r.append(o,a,l,i);const c=mr(a),d={group:r,ring:t,shadow:n,dust:s,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(p,f,m){const $=p.x*D,u=p.y*D,y=Math.hypot(p.x-d.px,p.y-d.py);d.px=p.x,d.py=p.y,y>8e-4&&(d.phase+=y*4.4,d.lastMoveAt=f);const x=f-d.lastMoveAt<.25,M=f-p.lastAttackAt;p.alive?wr(c,{cls:p.cls,phase:d.phase,stride:x?1:0,sinceAttack:M,time:f}):Mr(c,(f-p.lastHitAt)/pe);const g=p.alive&&M>=0&&M<.3?Math.sin(M/.3*Math.PI)*16*p.facing:0;r.setAttribute("transform",`translate(${($+g).toFixed(1)} ${u.toFixed(1)})`),t.setAttribute("cx",$.toFixed(1)),t.setAttribute("cy",u.toFixed(1)),t.style.display=m&&p.alive?"":"none",n.setAttribute("cx",$.toFixed(1)),n.setAttribute("cy",(u+6).toFixed(1)),n.style.opacity=p.alive?"1":"0.4",s.setAttribute("cx",($-26*p.facing).toFixed(1)),s.setAttribute("cy",(u+10).toFixed(1)),s.style.opacity=x&&p.alive?(.18+.12*Math.abs(Math.sin(f*9))).toFixed(2):"0";const b=f-p.lastHitAt<.18,k=b&&p.alive?1.05:1,q=fe*k;a.setAttribute("transform",`scale(${(p.facing*q).toFixed(3)} ${q.toFixed(3)}) translate(${-st/2} -122)`);const L=p.alive?0:(f-p.lastHitAt)/pe;a.style.display=p.alive||L<1?"":"none",a.style.opacity=p.alive?"1":String(Math.max(0,1-L)),o.style.display=!p.alive&&L>.55?"":"none",o.style.opacity=String(Math.min(1,Math.max(0,(L-.55)/.45)));const E=Math.max(0,p.hp/p.maxHp);i.setAttribute("width",(94*E).toFixed(1)),r.classList.toggle("hurt",b&&p.alive),r.classList.toggle("dead",!p.alive),l.style.display=p.alive?"":"none",i.style.display=p.alive?"":"none"}};return d}function Tr(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(T("g"));t.forEach((s,r)=>{const a=e.childNodes[r];a.getAttribute("data-kind")!==s.kind&&(a.setAttribute("data-kind",s.kind),a.setAttribute("class",`shot ${s.kind}`),a.innerHTML=Br(s.kind));const l=s.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(s.x*D).toFixed(1)} ${(s.y*D).toFixed(1)}) rotate(${(s.angle*180/Math.PI).toFixed(1)})${l}`)})}function Br(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function Or(e,t,n){const s=t.events.filter(r=>t.time-r.time<.32);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(T("circle"));s.forEach((r,a)=>{const o=e.childNodes[a],l=n.get(r.unitId);if(!l)return;const i=(t.time-r.time)/.32;o.setAttribute("class",`burst ${r.kind}`),o.setAttribute("cx",(l.px*D).toFixed(1)),o.setAttribute("cy",(l.py*D-90).toFixed(1)),o.setAttribute("r",(14+i*40).toFixed(1)),o.setAttribute("opacity",(1-i).toFixed(2))})}function Hr(e,t,n){const s=t.events.filter(r=>t.time-r.time<1.1&&r.amount>=1);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(T("text",{"text-anchor":"middle"}));s.forEach((r,a)=>{const o=e.childNodes[a],l=n.get(r.unitId);if(!l)return;const i=(t.time-r.time)/1.1;o.setAttribute("class",`floater ${r.kind}`),o.setAttribute("x",(l.px*D).toFixed(1)),o.setAttribute("y",(l.py*D-210-i*70).toFixed(1)),o.setAttribute("opacity",(1-i*i).toFixed(2));const c=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;o.textContent!==c&&(o.textContent=c)})}function Rr(e){const t=_t(e.id??""),n=t?xr(t.fortress.id,j(),Date.now()&65535||1):null;if(!t||!n)return _({title:"מבצר לא נמצא"},h("p",{},"חזרה למפת העולם."));const{continent:s,fortress:r}=t;if(j().conquered.includes(r.id)){const w=h("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return w.addEventListener("click",()=>V(`/continent/${s.id}`)),_({title:r.name,subtitle:s.name,showStars:!1},h("p",{class:"notice"},"המבצר הזה כבר נכבש."),h("div",{class:"row"},w))}const a=Kn(n),o=new Set(a.units.filter(w=>w.side==="player").map(w=>w.id)),l=Pr(new URLSearchParams(location.search).get("speed"));let i=!1,c=!1,d=0,p=0,f=0;window.__battle=a;const m=Ir(a,w=>W(w)),$=h("div",{class:"stage"});$.append(m.el);const u=h("div",{class:"overlay"});$.append(u);const y=()=>{u.replaceChildren(h("div",{class:"panel"},h("h2",{},r.name),h("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),h("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),M())),u.classList.remove("hidden")},x=w=>{yr({fortressId:r.id,won:w,seconds:a.time,heroes:S.map(H=>({cls:H.cls,name:H.name||mt(H.cls,H.gender),alive:H.alive,health:Math.max(0,H.hp/H.maxHp)}))});const N=h("button",{class:"btn primary",type:"button"},"המשך");N.addEventListener("click",()=>V(`/result/${r.id}/${w?"win":"lose"}`)),u.replaceChildren(h("div",{class:"panel"},h("h2",{},w?"המבצר נכבש":"הקרב אבד"),h("p",{},w?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),N)),u.classList.remove("hidden")};function M(){const w=h("button",{class:"btn primary",type:"button"},"התחל קרב");return w.addEventListener("click",()=>{u.classList.add("hidden"),i=!0,p=performance.now()}),w}const g=h("div",{class:"portraits"}),b=h("button",{class:"btn small",type:"button"},"השהה"),k=h("button",{class:"btn small",type:"button"},"ריפוי"),q=h("button",{class:"btn small",type:"button"},"בחר הכול"),L=h("button",{class:"btn small",type:"button"},"עמוד במקום");b.addEventListener("click",()=>{c||(i=!i,p=performance.now(),b.textContent=i?"השהה":"המשך")}),q.addEventListener("click",()=>{o.clear();for(const w of a.units)w.side==="player"&&w.alive&&o.add(w.id);O()}),L.addEventListener("click",()=>{for(const w of o)It(a,w,{kind:"hold"})});const E=a.units.find(w=>w.side==="player"&&w.cls==="mage");k.addEventListener("click",()=>{if(!E)return;const w=oe(a,E.id);w&&(Xn(a,E.id,w.id),Z())});function Z(){(E?Wn(a,E.id)&&oe(a,E.id)!==null:!1)?k.removeAttribute("disabled"):k.setAttribute("disabled","true")}const S=a.units.filter(w=>w.side==="player"),K=S.map(w=>{const N=h("span",{class:"portrait-fill"}),H=h("button",{class:`portrait ${w.cls}`,type:"button"},h("span",{class:"portrait-name"},w.name||mt(w.cls,w.gender)),h("span",{class:"portrait-bar"},N));return H.addEventListener("click",()=>{w.alive&&(o.clear(),o.add(w.id),O())}),g.append(H),{unit:w,button:H,fill:N}});function O(){Z();for(const w of K){const N=Math.max(0,w.unit.hp/w.unit.maxHp);w.fill.style.width=`${(N*100).toFixed(0)}%`,w.button.classList.toggle("selected",o.has(w.unit.id)),w.button.classList.toggle("dead",!w.unit.alive)}}O();function W(w){if(!i)return;const N=w.unit;if(N&&N.side==="player"&&N.alive){o.clear(),o.add(N.id),O();return}if(o.size!==0)for(const H of o)N&&N.side==="enemy"&&N.alive?It(a,H,{kind:"attack",targetId:N.id}):It(a,H,{kind:"move",x:w.x,y:w.y})}const U=w=>{w.code==="Space"&&(w.preventDefault(),b.click())};addEventListener("keydown",U);const C=()=>{if(d=requestAnimationFrame(C),i&&!c){const w=performance.now();f+=Math.min(.1,(w-p)/1e3)*l*jr,p=w;let N=0;for(;f>=Ht&&N<8*l;)R(),f-=Ht,N++}m.update(a,o)},R=()=>{zn(a),a.winner&&!c&&(c=!0,i=!1,x(a.winner==="player")),O()};y(),d=requestAnimationFrame(C);const ot=_({title:r.name,subtitle:`${s.name} · ${s.domain}`,showStars:!1},$,h("div",{class:"hud"},g,h("div",{class:"hud-actions"},k,q,L,b)));return{el:ot.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",U),m.destroy(),ot.destroy()}}}const jr=.6;function Pr(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function Dr(e){const t=_t(e.id??"");if(!t)return _({title:"מבצר לא נמצא"},h("p",{},"חזרה למפת העולם."));const{continent:n,fortress:s}=t,r=e.outcome==="win",a=kr(s.id),o=!j().flags.sawUpgrades;rt(d=>{r&&!d.conquered.includes(s.id)&&d.conquered.push(s.id),o&&(d.flags.sawUpgrades=!0,d.stars+=ie)});const l=[];a&&l.push(h("section",{class:"card"},h("h3",{},"הגיבורים שלך"),...a.heroes.map(d=>h("div",{class:"stat-row"},h("span",{class:"stat-name"},d.name),h("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),h("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),o&&l.push(h("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${ie} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const i=n.fortresses.filter(d=>!d.home&&!j().conquered.includes(d.id)).length;r&&i===0?l.push(h("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||l.push(h("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const c=h("div",{class:"row"},ut(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[ut("קרב נוסף באותו מבצר",`/battle/${s.id}`)],ut("חזרה ליבשת",`/continent/${n.id}`),ut("תפריט המשימות","/missions"));return _({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${s.name} · ${Dt(n.id)?.name??""}`,showBack:!1},...l,c)}function ut(e,t,n=!1){const s=h("button",{class:n?"btn primary":"btn",type:"button"},e);return s.addEventListener("click",()=>V(t)),s}function _r(e){let t=0;for(const n of Object.keys(e.heroes)){const s=e.heroes[n];for(const r of Kt[n])t+=dr(s.levels[r]??0)}return t}function Vr(e,t,n){const s=()=>{l.remove(),removeEventListener("keydown",r)},r=i=>{i.key==="Escape"&&s()},a=n.map(i=>{const c=h("button",{class:i.primary?"btn primary":"btn",type:"button"},i.label);return c.addEventListener("click",()=>{s(),i.onClick()}),c}),o=h("div",{class:"modal",role:"dialog","aria-modal":"true"},h("h2",{},e),h("p",{},t),h("div",{class:"modal-actions"},...a)),l=h("div",{class:"backdrop"},o);l.addEventListener("click",i=>{i.target===l&&s()}),addEventListener("keydown",r),document.body.append(l),a.find(i=>i.classList.contains("primary"))?.focus()}function Ur(){if(!j().flags.sawUpgrades)return _({title:"שדרוג הגיבורים"},h("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=h("div",{class:"stack"}),t=()=>{const n=j();e.replaceChildren(...Object.keys(bt).map(s=>{const r=n.heroes[s],a=Kt[s].map(l=>Yr(s,l,t)),o=mt(s,r.gender);return h("section",{class:"card hero"},h("h3",{},r.name?`${r.name} · ${o}`:o),h("div",{class:"stats"},...a))}))};return t(),_({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${_r(j())}`},e)}function Yr(e,t,n){const a=j().heroes[e].levels[t]??0,o=Yt[e][t]??0,l=cr(o,t,a),i=ir(a),c=h("button",{class:"btn small",type:"button"},i===null?"מרבי":`★ ${i}`);return i===null&&c.setAttribute("disabled","true"),c.addEventListener("click",()=>{if(i!==null){if(j().stars<i){Vr("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>V("/missions")}]);return}rt(d=>{d.stars-=i;const p=d.heroes[e];p.levels[t]=(p.levels[t]??0)+1}),n()}}),h("div",{class:"stat-row"},h("span",{class:"stat-name"},or[t]),h("span",{class:"stat-value"},Kr(l)),h("span",{class:"stat-level"},`דרגה ${a}`),c)}function Kr(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function Te(e){const t=j(),n=Dt(e.id??""),s=n&&$t(n,t)?n:Cn(t),r=Zn(s,t),a=qt(s).length-r.length,o=r.map(i=>{const c=Lt(t,i.id),d=h("button",{class:"card mission-card",type:"button"},h("h3",{},i.title),h("span",{class:"stars-row"},Wr(c)));return d.addEventListener("click",()=>V(`/mission/${i.id}`)),d}),l=o.length>0?[h("div",{class:"grid"},...o)]:[h("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return a>0&&l.push(h("p",{class:"muted"},`עוד ${a} משימות ייפתחו לפי ההתקדמות.`)),_({title:"משימות",subtitle:`${s.name} · ${s.domain}`},...l)}function Wr(e){return"★".repeat(e)+"☆".repeat(at-e)}const jt={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Xr=["m","f"];function zr(){const e=h("div",{class:"stack"}),t=()=>{const s=j();e.replaceChildren(...Object.keys(bt).map(r=>Jr(r,s.heroes[r].gender,s.heroes[r].name,t)))};t();const n=h("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{rt(s=>{for(const r of Object.keys(bt)){const a=s.heroes[r];a.name.trim()||(a.name=jt[r][a.gender][0])}s.flags.setupDone=!0}),V("/")}),_({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:j().flags.setupDone},e,h("div",{class:"row"},n))}function Jr(e,t,n,s){const r=h("input",{class:"name-input",type:"text",maxlength:"14",placeholder:jt[e][t][0],value:n,"aria-label":`שם ה${mt(e,t)}`});r.addEventListener("input",()=>{rt(l=>{l.heroes[e].name=r.value})});const a=l=>{const i=h("button",{class:`btn small${t===l?" primary":""}`,type:"button"},ft[e][l]);return i.addEventListener("click",()=>{rt(c=>{c.heroes[e].gender=l}),s()}),i},o=jt[e][t].map(l=>{const i=h("button",{class:"chip",type:"button"},l);return i.addEventListener("click",()=>{rt(c=>{c.heroes[e].name=l}),s()}),i});return h("section",{class:"card hero-setup"},h("div",{class:"setup-row"},...Xr.map(a)),h("div",{class:"setup-row"},r),h("div",{class:"setup-row chips"},...o))}function Qr(e){const t=Ue(e.id??""),n=t?vn(t.kind):void 0;if(!t||!n)return _({title:"משימה לא נמצאה"},h("p",{},"חזרה לתפריט המשימות."));const s=h("div",{class:"mission-stage"}),r=h("p",{class:"hint-line"}),a=h("div",{class:"stars-row big"}),o=h("div",{class:"overlay hidden"}),l=h("button",{class:"btn",type:"button"},"רמז"),i=h("button",{class:"btn primary",type:"button"},"בדיקה");i.setAttribute("disabled","true");let c,d,p=0,f=0,m=!1;const $=()=>{const k=m?u:Ft(p,f);a.replaceChildren(...Array.from({length:at},(q,L)=>h("span",{class:`star${L<k?" lit":""}`},"★")))};let u=at;const y=()=>{!d||m||(d.answer()===null?i.setAttribute("disabled","true"):i.removeAttribute("disabled"))},x=k=>{d?.destroy(),c=n.generate(k),d=n.mount(c,y),p=0,f=0,m=!1,u=at,r.textContent="",s.replaceChildren(d.el,o),o.classList.add("hidden"),i.setAttribute("disabled","true"),l.removeAttribute("disabled"),$(),M()};function M(){window.__mission={solve:()=>{d.demonstrate(),y()},place:k=>{d.place?.(k),y()},solution:()=>c.solution,state:()=>({hintsUsed:p,mistakes:f,finished:m,score:Ft(p,f)})}}l.addEventListener("click",()=>{m||p>=c.hints.length||(p++,d.hint(p),r.textContent=c.hints[p-1]?.text??"",p>=c.hints.length&&l.setAttribute("disabled","true"),$(),y())}),i.addEventListener("click",()=>{if(m)return;const k=d.answer();if(k!==null){if(c.check(k)){g();return}f++,r.textContent="לא שם. נסה שוב.",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),400),$()}});function g(){m=!0,u=Ft(p,f);const k=Lt(j(),t.id),q=Ln(k,u);rt(Z=>{Z.stars+=q,Z.missions[t.id]=Math.max(k,u),Z.solvedTopics.includes(t.topicId)||Z.solvedTopics.push(t.topicId)}),$();const L=h("button",{class:"btn",type:"button"},"עוד אחת");L.addEventListener("click",()=>x(Math.floor(Math.random()*65535)+1));const E=h("button",{class:"btn primary",type:"button"},"לתפריט המשימות");E.addEventListener("click",()=>V("/missions")),o.replaceChildren(h("div",{class:"panel"},h("h2",{},"נכון"),...c.explain.map(Z=>h("p",{},Z)),h("p",{class:"reward"},q>0?`+${q} ★`:"★"),h("div",{class:"modal-actions"},E,L))),o.classList.remove("hidden")}x(Date.now()&65535||1);const b=_({title:t.title,subtitle:""},s,r,h("div",{class:"hud"},a,h("div",{class:"hud-actions"},l,i)));return{el:b.el,destroy(){d.destroy(),b.destroy()}}}J("/",On);J("/continent/:id",Rn);J("/battle/:id",Rr);J("/result/:id/:outcome",Dr);J("/upgrades",Ur);J("/missions",Te);J("/missions/:id",Te);J("/mission/:id",Qr);J("/setup",zr);Be(()=>{const e=h("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>V("/")),_({title:"הדף לא נמצא",showBack:!1},e)});!j().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const he=document.getElementById("app");he&&je(he);
