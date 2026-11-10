(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const ie=[];let ce=null,at=null,Mt=null;function Y(e,t){ie.push({pattern:e.split("/").filter(Boolean),factory:t})}function Ae(e){ce=e}function D(e){location.hash==="#"+e?St():location.hash=e}function Fe(){history.length>1?history.back():D("/")}function Ce(){return location.hash.replace(/^#/,"")||"/"}function Ne(e){const t=e.split("/").filter(Boolean);for(const n of ie){if(n.pattern.length!==t.length)continue;const s={};let r=!0;for(let a=0;a<n.pattern.length;a++){const o=n.pattern[a],i=t[a];if(o.startsWith(":"))s[o.slice(1)]=decodeURIComponent(i);else if(o!==i){r=!1;break}}if(r)return{factory:n.factory,params:s}}return null}function St(){if(!at)return;Mt?.destroy?.(),at.replaceChildren();const e=Ce(),t=Ne(e),n=t?.factory??ce;n&&(Mt=n(t?.params??{}),at.append(Mt.el),at.scrollTop=0)}function Ie(e){at=e,addEventListener("hashchange",St),St()}const vt="euclid.";class Ge{read(t){try{const n=localStorage.getItem(vt+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(vt+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(vt+t)}catch{}}}const de=new Ge,fe="profile";function Te(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function Be(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let ot=Be(de.read(fe)??Te());const Et=new Set;function O(){return ot}function Oe(e){return Et.add(e),()=>Et.delete(e)}function tt(e){e(ot),de.write(fe,ot);for(const t of Et)t(ot);return ot}function d(e,t={},...n){const s=document.createElement(e);for(const[r,a]of Object.entries(t))r==="class"?s.className=a:s.setAttribute(r,a);return s.append(...n),s}function j(e,...t){const n=d("button",{class:"stars",type:"button",title:"תפריט המשימות"}),s=()=>{n.replaceChildren(d("span",{class:"star-icon"},"★"),d("span",{},String(O().stars)))};s();const r=Oe(s);n.addEventListener("click",()=>D("/missions"));const a=d("header",{class:"top"});if(e.showBack!==!1){const i=d("button",{class:"back",type:"button","aria-label":"חזרה"},"→");i.addEventListener("click",()=>Fe()),a.append(i)}return a.append(d("div",{class:"titles"},d("h1",{},e.title),...e.subtitle?[d("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:d("div",{class:"page"},a,d("main",{class:"content"},...t)),destroy:()=>r()}}const Tt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function Bt(e){return Tt.find(t=>t.id===e)}function Ot(e){for(const t of Tt){const n=t.fortresses.find(s=>s.id===e);if(n)return{continent:t,fortress:n}}}function At(e){return e.fortresses.filter(t=>!t.home)}const pe=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]}];function He(e){return pe.find(t=>t.id===e)}function he(e){return pe.filter(t=>t.continent===e)}function rt(e){let t=e>>>0;const s=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return s.seed=e,s}function lt(e,t,n){return t+e()*(n-t)}const Re="http://www.w3.org/2000/svg",ue=1e3,je=300,st=70,dt=ue-70,I=130;function S(e,t={}){const n=document.createElementNS(Re,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Ht(e){const{from:t,to:n,tickStep:s,labelEvery:r}=e,a=document.createElement("div");a.className="board-wrap";const o=S("svg",{class:"board number-line",viewBox:`0 0 ${ue} ${je}`});a.append(o);const i=document.createElement("div");i.className="tray",a.append(i);const l=S("g",{class:"hints"}),c=S("g",{class:"main"}),f=S("g",{class:"drag"});o.append(l,c,f);const h=n-t,u=g=>st+(g-t)/h*(dt-st),L=g=>t+(g-st)/(dt-st)*h,q=g=>{const k=Math.round((g-t)/s),m=Math.min(Math.max(k,0),Math.round(h/s));return t+m*s};c.append(S("line",{class:"axis",x1:String(st-40),y1:String(I),x2:String(dt+40),y2:String(I)})),c.append(S("path",{class:"axis-head",d:`M${dt+40} ${I} l-22 -11 v22 Z`}));for(let g=0;g*s<=h+1e-9;g++){const k=t+g*s,m=u(k),v=g%r===0;if(c.append(S("line",{class:`tick${v?" labelled":""}`,x1:m.toFixed(1),y1:String(I-(v?20:11)),x2:m.toFixed(1),y2:String(I+(v?20:11))})),v){const M=S("text",{class:"tick-label",x:m.toFixed(1),y:String(I+50),"text-anchor":"middle"});M.textContent=String(k),c.append(M)}}const p=g=>{const k=o.getScreenCTM();if(!k)return t;const m=new DOMPoint(g.clientX,g.clientY).matrixTransform(k.inverse());return q(L(m.x))},y=[],b={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:a,xOf:u,flag(g){const k=u(g),m=S("g",{class:"flag",transform:`translate(${k.toFixed(1)} ${I})`});m.append(S("path",{d:"M0 0 v-96",class:"pole"})),m.append(S("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),c.append(m)},chest(g,k,m="chest"){let v=q(g);const M=S("g",{class:`chest ${m}`});M.innerHTML=b[m];const Z=S("line",{class:"chest-thread",y1:String(I+6),y2:String(I+78)});f.append(Z);const $=()=>{const N=u(v);M.setAttribute("transform",`translate(${N.toFixed(1)} ${I+112})`),Z.setAttribute("x1",N.toFixed(1)),Z.setAttribute("x2",N.toFixed(1))};$(),f.append(M);let E=!1;const W=N=>{E=!0,M.setPointerCapture(N.pointerId),v=p(N),$(),k(v),N.preventDefault()},P=N=>{E&&(v=p(N),$(),k(v))},K=()=>{E=!1};M.addEventListener("pointerdown",W),M.addEventListener("pointermove",P),M.addEventListener("pointerup",K),M.addEventListener("pointercancel",K);const X=N=>{v=p(N),$(),k(v)};return o.addEventListener("pointerdown",X),y.push(()=>{M.removeEventListener("pointerdown",W),M.removeEventListener("pointermove",P),M.removeEventListener("pointerup",K),M.removeEventListener("pointercancel",K),o.removeEventListener("pointerdown",X)}),{get:()=>v,set:N=>{v=q(N),$(),k(v)}}},token(g,k="ship"){let m=q(g);const v=S("g",{class:`chest static ${k}`});v.innerHTML=b[k],f.append(v);const M=()=>{v.setAttribute("transform",`translate(${u(m).toFixed(1)} ${I-18}) scale(0.78)`)};return M(),{get:()=>m,set:Z=>{m=q(Z),M()}}},tray(g){i.replaceChildren();for(const k of g){const m=document.createElement("button");m.type="button",m.className="btn small tray-key",m.textContent=k.label,m.addEventListener("click",k.onClick),i.append(m)}},trayEnabled(g){for(const k of Array.from(i.children))g?k.removeAttribute("disabled"):k.setAttribute("disabled","true")},clearArrows(){for(const g of Array.from(c.querySelectorAll(".line-arrow")))g.remove()},band(g,k){const m=u(Math.min(g,k)),v=u(Math.max(g,k));l.append(S("rect",{class:"hint-band",x:m.toFixed(1),y:String(I-60),width:(v-m).toFixed(1),height:"120",rx:"10"}))},bracket(g,k,m){const v=u(g),M=u(k),Z=I+74,$=S("g",{class:"hint-bracket"});$.append(S("path",{d:`M${v.toFixed(1)} ${Z-12} v12 H${M.toFixed(1)} v-12`}));const E=S("text",{x:((v+M)/2).toFixed(1),y:String(Z+30),"text-anchor":"middle"});E.textContent=m,$.append(E),l.append($)},count(g,k){const m=g<=k?s:-s,v=Math.round(Math.abs(k-g)/s);for(let M=1;M<=v;M++){const Z=g+m*M,$=S("text",{class:"hint-count",x:u(Z).toFixed(1),y:String(I-34),"text-anchor":"middle"});$.textContent=String(M),l.append($)}},arrow(g,k,m,v="plus",M=0,Z){const $=u(g),E=u(k),W=I-56-M*34,P=S("g",{class:`line-arrow ${v}`});P.append(S("path",{d:`M${$.toFixed(1)} ${I-6} C${$.toFixed(1)} ${W} ${E.toFixed(1)} ${W} ${E.toFixed(1)} ${I-6}`,fill:"none"}));const K=E>=$?1:-1;P.append(S("path",{class:"head",d:`M${E.toFixed(1)} ${I-6} l${(-12*K).toFixed(1)} -14 l${(24*K).toFixed(1)} 0 Z`}));const X=S("text",{x:(($+E)/2).toFixed(1),y:String(W-8),"text-anchor":"middle"});if(X.textContent=m,P.append(X),Z!==void 0){const N=S("g",{class:"order"});N.append(S("circle",{cx:$.toFixed(1),cy:String(I-26),r:"15"}));const ct=S("text",{x:$.toFixed(1),y:String(I-19),"text-anchor":"middle"});ct.textContent=String(Z),N.append(ct),P.append(N)}return c.append(P),P},clearHints(){l.replaceChildren()},destroy(){for(const g of y)g();a.remove()}}}function A(e){return`⁦${e}⁩`}function ge(e,t,n){const s=t*n,r=Math.min(...e)-s,a=Math.max(...e)+s;return{tickStep:t,labelEvery:n,from:Math.floor(r/s)*s,to:Math.ceil(a/s)*s}}function Pe(e){const t=rt(e),n=t()<.6?1:2,s=3+Math.floor(t()*2),r=n*(t()<.5?0:-2),a=[],o=[r];for(let f=0;f<s;f++){const h=n*(2+Math.floor(t()*5)),u=t()<.45?-1:1;a.push(u*h),o.push(o[o.length-1]+u*h)}if(o[o.length-1]===r){const f=n*3;a.push(f),o.push(o[o.length-1]+f)}const i=o[o.length-1],l=ge(o,n,5),c=a.map(f=>A(f)).join(" , ");return{config:{...l,start:r,moves:a},solution:i,check:f=>f===i,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${c}`,`הסכום שלהם הוא ${A(i-r)}.`,`מ־${A(r)} מגיעים ל־${A(i)}.`]}}function De(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,moves:i}=e.config,l=Ht({from:n,to:s,tickStep:r,labelEvery:a}),c=[o];let f=o;const h=i.map((p,y)=>{const b=f+p,w=l.arrow(f,b,(p>0?"+":"")+p,p>=0?"plus":"minus",y%2,y+1);return f=b,c.push(b),w}),u=l.token(o,"ship");let L=null;const q=l.chest(o,p=>{L=p,t()},"chest");return{el:l.el,answer:()=>L,hint(p){if(p===1&&h[0]?.classList.add("lit"),p===2&&u.set(c[1]??o),p===3&&u.set(c[2]??c[c.length-1]??o),p>=4){for(const y of h)y.classList.add("lit");u.set(c[c.length-1]),q.set(c[c.length-1])}},demonstrate(){u.set(c[c.length-1]),q.set(c[c.length-1])},place:p=>q.set(p),destroy:()=>l.destroy()}}const _e={kind:"voyage",generate:Pe,mount:De},Kt=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function Ue(e){const t=rt(e),n=Kt[Math.floor(t()*Kt.length)],s=3+Math.floor(t()*2),r=t()<.5?0:-n[0],a=[],o=[r];for(let h=0;h<s;h++){const u=n[Math.floor(t()*n.length)];a.push(u),o.push(o[o.length-1]+u)}o[o.length-1]===r&&a.push(n[0]);const l=r+a.reduce((h,u)=>h+u,0),c=ge([...o,l],1,5),f=l-r;return{config:{...c,start:r,target:l,keys:n,route:a},solution:l,check:h=>h===l,hints:[{text:`מהצפרדע ליעד יש ${A(f)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${A(a[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${A(f)}.`,`${a.map(h=>A(h)).join(" ועוד ")} ביחד נותנים ${A(f)}.`]}}function Ve(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,target:i,keys:l,route:c}=e.config,f=Ht({from:n,to:s,tickStep:r,labelEvery:a});f.flag(i);let h=o,u=!1;const L=f.chest(o,()=>{},"frog"),q=document.createElement("p");q.className="running-total";const p=()=>{q.textContent=u?`${A(h-o)}`:""},y=w=>{const g=h+w;g<n||g>s||(f.arrow(h,g,(w>0?"+":"")+w,w>=0?"plus":"minus"),h=g,u=!0,L.set(h),p(),t())},b=()=>{f.clearArrows(),h=o,u=!1,L.set(o),p(),t()};return f.tray([...l.map(w=>({label:(w>0?"+":"")+w,onClick:()=>y(w)})),{label:"התחלה",onClick:b}]),f.el.append(q),{el:f.el,answer:()=>u?h:null,hint(w){if(w===1&&f.band(Math.min(o,i),Math.max(o,i)),w===2&&q.classList.add("lit"),w===3&&(b(),y(c[0]??0)),w>=4){b();for(const g of c)y(g)}},demonstrate(){b();for(const w of c)y(w)},place:w=>{h=w,u=!0,L.set(w),p(),t()},destroy:()=>f.destroy()}}const Ke={kind:"jumps",generate:Ue,mount:Ve},Ye="http://www.w3.org/2000/svg",H=720,B=40;function F(e,t={}){const n=document.createElementNS(Ye,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function ye(e){const{range:t}=e,n=document.createElement("div");n.className="board-wrap";const s=F("svg",{class:"board grid-board",viewBox:`0 0 ${H} ${H}`});n.append(s);const r=F("g",{class:"hints"}),a=F("g",{class:"main"}),o=F("g",{class:"drag"});s.append(r,a,o);const i=(H-2*B)/(2*t),l=p=>H/2+p*i,c=p=>H/2-p*i,f=(p,y)=>({x:Math.max(-t,Math.min(t,Math.round((p-H/2)/i))),y:Math.max(-t,Math.min(t,Math.round((H/2-y)/i)))});for(let p=-t;p<=t;p++)a.append(F("line",{class:"grid-line",x1:String(B),y1:c(p).toFixed(1),x2:String(H-B),y2:c(p).toFixed(1)})),a.append(F("line",{class:"grid-line",x1:l(p).toFixed(1),y1:String(B),x2:l(p).toFixed(1),y2:String(H-B)}));a.append(F("line",{class:"grid-axis",x1:String(B-14),y1:c(0).toFixed(1),x2:String(H-B+14),y2:c(0).toFixed(1)})),a.append(F("line",{class:"grid-axis",x1:l(0).toFixed(1),y1:String(H-B+14),x2:l(0).toFixed(1),y2:String(B-14)})),a.append(F("path",{class:"grid-head",d:`M${H-B+14} ${c(0)} l-18 -9 v18 Z`})),a.append(F("path",{class:"grid-head",d:`M${l(0)} ${B-14} l-9 18 h18 Z`}));for(let p=-t;p<=t;p++){if(p===0)continue;const y=F("text",{class:"grid-label",x:l(p).toFixed(1),y:(c(0)+30).toFixed(1),"text-anchor":"middle"});y.textContent=String(p);const b=F("text",{class:"grid-label",x:(l(0)-16).toFixed(1),y:(c(p)+9).toFixed(1),"text-anchor":"end"});b.textContent=String(p),a.append(y,b)}const h=p=>{const y=s.getScreenCTM();if(!y)return{x:0,y:0};const b=new DOMPoint(p.clientX,p.clientY).matrixTransform(y.inverse());return f(b.x,b.y)},u=[],L=(p,y)=>p.map(b=>`${l(b.x+y.x).toFixed(1)},${c(b.y+y.y).toFixed(1)}`).join(" ");return{el:n,xOf:l,yOf:c,pick(p){let y={x:0,y:0};const b=F("g",{class:"pick hidden"});b.append(F("circle",{class:"pick-ring",r:"22"})),b.append(F("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),o.append(b);const w=()=>{b.classList.remove("hidden"),b.setAttribute("transform",`translate(${l(y.x).toFixed(1)} ${c(y.y).toFixed(1)})`)},g=k=>{y=h(k),w(),p(y),k.preventDefault()};return s.addEventListener("pointerdown",g),u.push(()=>s.removeEventListener("pointerdown",g)),{get:()=>y,set:k=>{y=k,w(),p(y)}}},shape(p,y=""){const b=F("polygon",{class:`shape ${y}`,points:L(p,{x:0,y:0})});return a.append(b),b},dragShape(p,y,b){let w={...y};const g=F("polygon",{class:"shape ghost",points:L(p,w)});o.append(g);const k=()=>g.setAttribute("points",L(p,w));let m=!1;const v=E=>{m=!0,g.setPointerCapture(E.pointerId),E.preventDefault()},M=E=>{m&&(w=h(E),k(),b(w))},Z=()=>{m=!1};g.addEventListener("pointerdown",v),g.addEventListener("pointermove",M),g.addEventListener("pointerup",Z),g.addEventListener("pointercancel",Z);const $=E=>{E.target!==g&&(w=h(E),k(),b(w))};return s.addEventListener("pointerdown",$),u.push(()=>{g.removeEventListener("pointerdown",v),g.removeEventListener("pointermove",M),g.removeEventListener("pointerup",Z),g.removeEventListener("pointercancel",Z),s.removeEventListener("pointerdown",$)}),{get:()=>w,set:E=>{w={...E},k(),b(w)}}},scout(p,y){const b=l(y==="x"?p:0),w=c(y==="x"?0:p),g=F("g",{class:`scout ${y}`,transform:`translate(${b.toFixed(1)} ${w.toFixed(1)})`});g.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,a.append(g)},guide(p,y){const b=y==="x"?{x1:l(p),y1:B,x2:l(p),y2:H-B}:{x1:B,y1:c(p),x2:H-B,y2:c(p)};r.append(F("line",{class:"guide",x1:b.x1.toFixed(1),y1:b.y1.toFixed(1),x2:b.x2.toFixed(1),y2:b.y2.toFixed(1)}))},mirrorAxis(p){const y=p==="y"?{x1:l(0),y1:B-14,x2:l(0),y2:H-B+14}:{x1:B-14,y1:c(0),x2:H-B+14,y2:c(0)};a.append(F("line",{class:"mirror-axis",x1:y.x1.toFixed(1),y1:y.y1.toFixed(1),x2:y.x2.toFixed(1),y2:y.y2.toFixed(1)}))},span(p,y,b){const w=F("g",{class:"hint-span"});w.append(F("line",{x1:l(p.x).toFixed(1),y1:c(p.y).toFixed(1),x2:l(y.x).toFixed(1),y2:c(y.y).toFixed(1)}));const g=F("text",{x:((l(p.x)+l(y.x))/2).toFixed(1),y:((c(p.y)+c(y.y))/2-10).toFixed(1),"text-anchor":"middle"});g.textContent=b,w.append(g),r.append(w)},dot(p,y=""){r.append(F("circle",{class:`grid-dot ${y}`,cx:l(p.x).toFixed(1),cy:c(p.y).toFixed(1),r:"11"}))},clearHints(){r.replaceChildren()},destroy(){for(const p of u)p();n.remove()}}}function We(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const Yt=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function Xe(e){const t=rt(e),n=6,s=Yt[Math.floor(t()*Yt.length)],r=t()<.5?"y":"x",a=r==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},o=We(a,r);return{config:{range:n,shape:s,anchor:a,axis:r},solution:o,check:l=>l.x===o.x&&l.y===o.y,hints:[{text:`הציר ${r==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[r==="y"?`בשיקוף סביב הציר האנכי כל ${A("x")} מחליף סימן ו־${A("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${A("y")} מחליף סימן ו־${A("x")} נשאר.`,`${A(`(${a.x}, ${a.y})`)} הולך ל־${A(`(${o.x}, ${o.y})`)}.`]}}function ze(e,t){const{range:n,shape:s,anchor:r,axis:a}=e.config,o=e.solution,i=ye({range:n});i.mirrorAxis(a),i.shape(s.map(u=>({x:u.x+r.x,y:u.y+r.y})));const l=s.map(u=>a==="y"?{x:-u.x,y:u.y}:{x:u.x,y:-u.y});let c=null;const f=a==="y"?{x:-n+1,y:-n+2}:{x:-n+2,y:-n+1},h=i.dragShape(l,f,u=>{c=u,t()});return{el:i.el,answer:()=>c,hint(u){if(u===1&&i.guide(0,a==="y"?"x":"y"),u===2){const L=a==="y"?{x:0,y:r.y}:{x:r.x,y:0};i.span(r,L,A(Math.abs(a==="y"?r.x:r.y)))}u===3&&i.dot(o,"lit"),u>=4&&h.set(o)},demonstrate(){i.dot(o,"lit"),h.set(o)},place:u=>h.set(u),destroy:()=>i.destroy()}}const Je={kind:"mirror",generate:Xe,mount:ze};function Qe(e){const t=rt(e),n=6,s=()=>{const a=1+Math.floor(t()*(n-1));return t()<.5?-a:a},r={x:s(),y:s()};return{config:{range:n,target:r},solution:r,check:a=>a.x===r.x&&a.y===r.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${A(`(${r.x}, ${r.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${A(r.x)}, והצופה על הציר האנכי ב־${A(r.y)}.`,`המפגש הוא ${A(`(${r.x}, ${r.y})`)}.`]}}function tn(e,t){const{range:n,target:s}=e.config,r=ye({range:n});r.scout(s.x,"x"),r.scout(s.y,"y");let a=null;const o=r.pick(i=>{a=i,t()});return{el:r.el,answer:()=>a,hint(i){i===1&&r.guide(s.x,"x"),i===2&&r.guide(s.y,"y"),i===3&&r.dot(s,"lit"),i>=4&&o.set(s)},demonstrate(){r.dot(s,"lit"),o.set(s)},place:i=>o.set(i),destroy:()=>r.destroy()}}const en={kind:"quadrant",generate:Qe,mount:tn},Wt=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function nn(e){const t=rt(e),n=Wt[Math.floor(t()*Wt.length)],s=Math.round((n.to-n.from)/n.tickStep),r=[];for(let i=1;i<s;i++)i%n.labelEvery!==0&&r.push(n.from+i*n.tickStep);const a=r[Math.floor(t()*r.length)],o=n.tickStep*n.labelEvery;return{config:{...n,target:a},solution:a,check:i=>i===a,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${A(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${A(o)}.`,`כל סימון קטן שווה ${A(n.tickStep)}.`,`היעד הוא ${A(a)}.`]}}function rn(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,target:o}=e.config,i=Ht({from:n,to:s,tickStep:r,labelEvery:a});i.flag(o);let l=null;const c=i.chest(n,u=>{l=u,t()});l=null;const f=n+Math.floor((o-n)/(r*a))*r*a,h=f+r*a;return{el:i.el,answer:()=>l,hint(u){u===1&&i.band(f,h),u===2&&i.bracket(n,n+r,String(r)),u===3&&i.count(f,o),u>=4&&c.set(o)},demonstrate(){i.count(f,o),c.set(o)},place:u=>c.set(u),destroy:()=>i.destroy()}}const sn={kind:"treasure-line",generate:nn,mount:rn};const xe={"treasure-line":sn,jumps:Ke,voyage:_e,quadrant:en,mirror:Je};function an(e){return xe[e]}function ke(e){return xe[e]!==void 0}const nt=5;function Lt(e,t){return Math.max(1,nt-e-t)}function on(e,t){return Math.max(0,t-e)}const ln=.8;function Rt(){return[...Tt].sort((e,t)=>e.order-t.order)}function wt(e,t){return e.missions[t]??0}function cn(e,t){return wt(e,t)>0}function dn(e,t){return ke(e.kind)&&e.requires.every(n=>cn(t,n))}function fn(e,t){return he(e.id).filter(n=>dn(n,t))}function jt(e){return he(e.id).filter(t=>ke(t.kind))}function pn(e,t){return jt(e).reduce((n,s)=>n+wt(t,s.id),0)}function hn(e){return jt(e).length*nt}function me(e,t){const n=hn(e);return n===0?!1:pn(e,t)>=ln*n}function un(e,t){return At(e).every(n=>t.conquered.includes(n.id))}function Pt(e,t){const n=Rt(),s=n.findIndex(r=>r.id===e.id);return s<=0?!0:me(n[s-1],t)}function gn(e){const t=Rt();return t.find(n=>!me(n,e)||!un(n,e))??t[t.length-1]}const ut={width:2e3,height:1e3};function Ft(e,t){return{x:(e+180)/360*ut.width,y:(90-t)/180*ut.height}}const yn={x:0,y:0,w:ut.width,h:ut.height};function xn(e,t){const n=Ft(e.lon0,e.lat0),s=Ft(e.lon1,e.lat1);let r=Math.min(n.x,s.x),a=Math.min(n.y,s.y),o=Math.abs(s.x-n.x),i=Math.abs(s.y-n.y);if(o/i<t){const l=i*t;r-=(l-o)/2,o=l}else{const l=o/t;a-=(l-i)/2,i=l}return{x:r,y:a,w:o,h:i}}function kn(e,t,n){const s=Ft(e,t);return{left:(s.x-n.x)/n.w*100,top:(s.y-n.y)/n.h*100}}function be(e,t,n){const s=d("div",{class:"map-art","aria-hidden":"true"});s.innerHTML=e;const r=s.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=d("div",{class:"map-markers"});for(const o of n){const{left:i,top:l}=kn(o.lon,o.lat,t),c=o.onClick?"button":"div",f=d(c,{class:`marker ${o.state}`,style:`left:${i.toFixed(2)}%; top:${l.toFixed(2)}%`});c==="button"&&f.setAttribute("type","button");const h=d("span",{class:"marker-icon"});h.innerHTML=o.icon;const u=d("span",{class:"marker-caption"},d("span",{class:"marker-label"},o.label),...o.sub?[d("span",{class:"marker-sub"},o.sub)]:[]);f.append(h,u),o.onClick&&f.addEventListener("click",o.onClick),a.append(f)}return d("div",{class:"map"},s,a)}const we=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,mn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,bn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function wn(){const e=O(),t=Rt().map(n=>{const s=At(n).length,r=At(n).filter(a=>e.conquered.includes(a.id)).length;return Pt(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${s}`,state:"continent",icon:mn,onClick:()=>D(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:bn}});return j({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},be(we,yn,t),d("div",{class:"row"},qt("שדרוג הגיבורים","/upgrades"),qt("תפריט המשימות","/missions"),qt("הגיבורים שלי","/setup")))}function qt(e,t){const n=d("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>D(t)),n}const $t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Mn=5/3;function vn(e){const t=Bt(e.id??"");if(!t)return j({title:"יבשת לא נמצאה"},d("p",{},"חזרה למפת העולם."));const n=O();if(!Pt(t,n)){const r=d("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>D("/")),j({title:t.name,subtitle:t.domain},d("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),d("div",{class:"row"},r))}const s=t.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:$t}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:$t}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:$t,onClick:()=>D(`/battle/${r.id}`)});return j({title:t.name,subtitle:t.domain},be(we,xn(t.view,Mn),s),d("div",{class:"row"},Xt("שדרוג הגיבורים","/upgrades"),Xt("תפריט המשימות",`/missions/${t.id}`)))}function Xt(e,t){const n=d("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>D(t)),n}function J(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function gt(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function Ln(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function Q(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function Ct(e,t){let n=null,s=1/0;for(const r of t){const a=J(e,r);(a<s-1e-9||Math.abs(a-s)<=1e-9&&n&&r.id<n.id)&&(n=r,s=a)}return n}const qn=2.2;function $n(e,t){const n=Ln(e,t.side);if(n.length===0)return{kind:"idle"};const s=Ct(t,n.filter(o=>o.stats.range<=1.5));if(t.stats.range>2&&s&&J(t,s)<qn){const o=t.x-s.x,i=t.y-s.y,l=Math.hypot(o,i)||1;return{kind:"move",x:t.x+o/l*3,y:t.y+i/l*3}}const a=Ct(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}const Nt=1/30,zt=50;function Zn(e,t){return e*zt/(zt+t)}const Jt=.3,Me=.45,ve={arrow:14,fire:9,heal:12},Sn=.85,En=.15;function An(e,t,n,s){const r=t==="player"?1:-1,a=t==="player"?3:n-3,o=s/2,i=[0,-1.6,1.6];return e.map((l,c)=>({x:a+(l.stats.range<=1.5?2*r:0),y:o+(i[c]??0)}))}function Fn(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=rt(e.seed),s={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},r=(a,o)=>{const i=An(a,o,t.width,t.height);a.forEach((l,c)=>{const f=i[c];s.units.push({id:`${o}-${l.cls}-${c}`,side:o,cls:l.cls,name:l.name,gender:l.gender,x:f.x+lt(n,-.6,.6),y:f.y+lt(n,-.6,.6),hp:l.stats.hp,maxHp:l.stats.hp,stats:l.stats,order:o===s.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:lt(n,0,1/l.stats.attackRate),healCooldown:lt(n,0,l.stats.healRate??3),facing:o==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(e.player,"player"),r(e.enemy,"enemy"),s}function Zt(e,t,n){const s=Q(e,t);s?.alive&&(s.order=n)}function Qt(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function te(e,t){const n=Q(e,t);if(!n?.alive||!n.stats.healing)return null;let s=null;for(const r of gt(e,n.side))r.id===n.id||r.hp>=r.maxHp||J(n,r)>n.stats.range||(!s||r.hp/r.maxHp<s.hp/s.maxHp)&&(s=r);return s}function Cn(e,t){const n=Q(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function Nn(e,t,n){const s=Q(e,t),r=Q(e,n),a=s?.stats.healing;return!s?.alive||!a||s.healCooldown>0||!r?.alive||r.side!==s.side||r.id===s.id||J(s,r)>s.stats.range?!1:(Le(e,s,r,a),!0)}function Le(e,t,n,s){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:ve.heal}),t.healCooldown=t.stats.healRate??3}function In(e,t=Nt){if(!e.winner){e.time+=t,Gn(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),Tn(e,n),Bn(e,n,t));Rn(e),jn(e),Pn(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Gn(e,t){const n=[];for(const s of e.projectiles){const r=Q(e,s.targetId);if(!r||!r.alive)continue;const a=r.x-s.x,o=r.y-s.y,i=Math.hypot(a,o),l=s.speed*t;if(i<=l){if(s.kind==="heal"){const c=Math.min(r.maxHp-r.hp,s.amount);r.hp+=c,e.events.push({kind:"heal",unitId:r.id,amount:c,time:e.time})}else qe(e,r,s.amount);continue}s.x+=a/i*l,s.y+=o/i*l,s.angle=Math.atan2(o,a),n.push(s)}e.projectiles=n}function Tn(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const s=gt(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*Sn&&J(t,a)<=t.stats.range);let r=null;for(const a of s)(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);r&&Le(e,t,r,n)}function Bn(e,t,n){const s=On(e,t);if(s.kind==="idle"){t.targetId=null;return}if(s.kind==="move"){t.targetId=null,ee(t,s.x,s.y,n);return}const r=Q(e,s.targetId);if(!r||!r.alive){t.targetId=null;return}if(t.targetId=r.id,J(t,r)>t.stats.range){ee(t,r.x,r.y,n);return}t.facing=r.x>=t.x?1:-1,t.cooldown<=0&&Hn(e,t,r)}function On(e,t){const n=t.order;if(n.kind==="move")if(J(t,n)<=En)t.order=Qt(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const s=Q(e,t.order.targetId);if(s?.alive)return{kind:"attack",targetId:s.id};t.order=Qt(e,t)}if(t.order.kind==="hold"){const s=e.units.filter(a=>a.alive&&a.side!==t.side&&J(t,a)<=t.stats.range),r=Ct(t,s);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return $n(e,t)}function ee(e,t,n,s){const r=t-e.x,a=n-e.y,o=Math.hypot(r,a);if(o<1e-6)return;const i=Math.min(o,e.stats.speed*s);e.x+=r/o*i,e.y+=a/o*i,Math.abs(r)>1e-6&&(e.facing=r>0?1:-1)}function Hn(e,t,n){const s=Zn(t.stats.attack,n.stats.defense)*(1+lt(e.rng,-Jt,Jt));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){qe(e,n,s);return}const r=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:r,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:ve[r]})}function qe(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function Rn(e){const t=e.units.filter(s=>s.alive),n=Me*2;for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const a=t[s],o=t[r],i=o.x-a.x,l=o.y-a.y,c=Math.hypot(i,l);if(c>=n)continue;const f=(n-c)/2,h=c<1e-6?1:i/c,u=c<1e-6?0:l/c;a.x-=h*f,a.y-=u*f,o.x+=h*f,o.y+=u*f}}function jn(e){const t=Me;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function Pn(e){const t=gt(e,"player").length,n=gt(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const it={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function yt(e,t){return it[e][t]}const xt={warrior:it.warrior.m,archer:it.archer.m,mage:it.mage.m},Dt={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},Dn={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},_t={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Ut=[2,3,5,8,12,17,23,30],$e=Ut.length,_n=.08;function Un(e){return e>=$e?null:Ut[e]}function Ze(e){return 1+_n*e}const ne=8;function Vn(e,t,n){return e*Ze(n)}function Kn(e){let t=0;for(let n=0;n<Math.min(e,$e);n++)t+=Ut[n];return t}const Se=["warrior","archer","mage"],Yn={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Wn=["hp","attack","defense"];function Xn(e,t){const s={...Dt[e]};for(const r of _t[e]){const a=t[r]??0;if(a<=0)continue;const o=s[r];typeof o=="number"&&(s[r]=o*Ze(a))}return s}function zn(e){return Se.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||xt[t],gender:n.gender,stats:Xn(t,n.levels)}})}function Jn(e){return Se.map(t=>{const n={...Dt[t]};for(const s of Wn){const r=n[s];typeof r=="number"&&(n[s]=r*e)}return{cls:t,name:Yn[t],gender:"m",stats:n}})}function Qn(e,t,n){const s=Ot(e);return!s||s.fortress.home?null:{player:zn(t),enemy:Jn(s.fortress.difficulty),seed:n,manual:"player"}}let pt=null;function tr(e){pt=e}function er(e){return pt&&pt.fortressId===e?pt:null}const U={x:64,y:84},V={x:56,y:58},z={x:77,y:56},kt={x:66,y:50},mt={x:60,y:52},re={x:100,y:70},bt={x:99,y:51};function nr(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function C(e,t,n,s,r=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${s})${r}`)}function rr(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function sr(e,t){const{phase:n,stride:s,time:r}=t,a=Math.sin(n)*s,o=Math.sin(n*2)*s,i=Math.sin(r*2.1)*(1-s),l=rr(t.sinceAttack);C(e.legBack,a*26,U.x,U.y),C(e.legFront,-a*26,U.x,U.y),C(e.cloak,a*9+i*1.6,mt.x,mt.y),C(e.robe,a*4+i*1.2,U.x,U.y+20),C(e.quiver,a*6,V.x,V.y);const c=-Math.abs(o)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${c.toFixed(2)}) rotate(${(a*2+i*.9).toFixed(2)} ${U.x} ${U.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(c*1.15).toFixed(2)}) rotate(${(-a*2.5+i*1.4).toFixed(2)} ${kt.x} ${kt.y})`),t.cls){case"warrior":{C(e.armBack,-a*14,V.x,V.y),C(e.armFront,a*10+l*60,z.x,z.y),C(e.sword,l*42,bt.x,bt.y),ht(e.swoosh,t.sinceAttack<.42?Math.max(0,l)*.9:0);break}case"archer":{const f=t.sinceAttack<.42?l:-.35;if(C(e.armFront,a*5,z.x,z.y),C(e.armBack,-a*8-f*16,V.x,V.y),e.arrow){const h=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=h?"0":"1",e.arrow.setAttribute("transform",`translate(${(-f*9).toFixed(2)} 0)`)}e.bow&&C(e.bow,f*4,104,68),ht(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{C(e.armBack,-a*10,V.x,V.y),C(e.armFront,a*6+l*26,z.x,z.y),C(e.staff,l*18,re.x,re.y);const f=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(r*4);e.orb&&se(e.orb,f,100,20),e.orbHalo&&se(e.orbHalo,f*1.1,100,20);const h=t.sinceAttack>=0&&t.sinceAttack<.45;ht(e.swoosh,h?1-t.sinceAttack/.45:0),e.swoosh&&h&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function ht(e,t){e&&(e.style.opacity=t.toFixed(2))}function se(e,t,n,s){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(s*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function ar(e,t){const n=Math.min(1,t),s=1-Math.pow(1-n,3);C(e.legBack,s*30,U.x,U.y),C(e.legFront,-s*20,U.x,U.y),C(e.armBack,s*40,V.x,V.y),C(e.armFront,-s*60,z.x,z.y),C(e.sword,s*50,bt.x,bt.y),ht(e.swoosh,0),C(e.head,s*18,kt.x,kt.y),C(e.cloak,s*12,mt.x,mt.y)}const or=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,lr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,ir=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,cr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,dr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,fr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,pr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,hr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,R=100,et=128,ae=2.05,oe=.7,ur="http://www.w3.org/2000/svg",gr={"warrior-f":lr,"warrior-m":ir,"archer-f":cr,"archer-m":dr,"mage-f":fr,"mage-m":pr};function G(e,t={}){const n=document.createElementNS(ur,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function It(e,t,n){const s=e.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("width",String(t)),s.setAttribute("height",String(n)),s.setAttribute("overflow","visible"))}function yr(){const e=G("defs");return e.innerHTML=`
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
    </filter>`,e}function xr(e,t){const n=G("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*R} ${e.arena.height*R}`,preserveAspectRatio:"xMidYMid meet"}),s=G("g",{class:"arena-art"});s.innerHTML=or,It(s,e.arena.width*R,e.arena.height*R);const r=G("g",{class:"layer-ground"}),a=G("g",{class:"layer-units"}),o=G("g",{class:"layer-shots"}),i=G("g",{class:"layer-bursts"}),l=G("g",{class:"layer-text"}),c=G("rect",{class:"vignette",width:String(e.arena.width*R),height:String(e.arena.height*R),fill:"url(#fx-vignette)"});n.append(yr(),s,r,a,o,i,l,c);const f=new Map;for(const u of e.units){const L=kr(u);f.set(u.id,L),r.append(L.ring,L.shadow,L.dust),a.append(L.group)}const h=u=>{u.preventDefault();const L=n.getScreenCTM();if(!L)return;const q=new DOMPoint(u.clientX,u.clientY).matrixTransform(L.inverse()),p=q.x/R,y=q.y/R;let b=null,w=1;for(const g of e.units){if(!g.alive)continue;const k=Math.hypot(g.x-p,g.y-.5-y);k<w&&(w=k,b=g)}t({x:p,y,unit:b})};return n.addEventListener("pointerdown",h),{el:n,update(u,L){for(const p of u.units)f.get(p.id)?.update(p,u.time,L.has(p.id));const q=[...u.units].sort((p,y)=>Number(p.alive)-Number(y.alive)||p.y-y.y);for(const p of q){const y=f.get(p.id);y&&a.append(y.group)}mr(o,u.projectiles,u.time),wr(i,u,f),Mr(l,u,f)},destroy(){n.removeEventListener("pointerdown",h),n.remove()}}}function kr(e){const t=G("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=G("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),s=G("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});s.style.opacity="0";const r=G("g",{class:`unit ${e.side} ${e.cls}`}),a=G("g",{class:"sprite"});a.innerHTML=gr[`${e.cls}-${e.gender}`]??"",It(a,et,et);const o=G("g",{class:"fallen"});o.innerHTML=hr,It(o,et,et),o.setAttribute("transform",`scale(${ae}) translate(${-et/2} -122)`),o.style.display="none";const i=G("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),l=G("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});r.append(o,a,i,l);const c=nr(a),f={group:r,ring:t,shadow:n,dust:s,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(h,u,L){const q=h.x*R,p=h.y*R,y=Math.hypot(h.x-f.px,h.y-f.py);f.px=h.x,f.py=h.y,y>8e-4&&(f.phase+=y*4.4,f.lastMoveAt=u);const b=u-f.lastMoveAt<.25,w=u-h.lastAttackAt;h.alive?sr(c,{cls:h.cls,phase:f.phase,stride:b?1:0,sinceAttack:w,time:u}):ar(c,(u-h.lastHitAt)/oe);const g=h.alive&&w>=0&&w<.3?Math.sin(w/.3*Math.PI)*16*h.facing:0;r.setAttribute("transform",`translate(${(q+g).toFixed(1)} ${p.toFixed(1)})`),t.setAttribute("cx",q.toFixed(1)),t.setAttribute("cy",p.toFixed(1)),t.style.display=L&&h.alive?"":"none",n.setAttribute("cx",q.toFixed(1)),n.setAttribute("cy",(p+6).toFixed(1)),n.style.opacity=h.alive?"1":"0.4",s.setAttribute("cx",(q-26*h.facing).toFixed(1)),s.setAttribute("cy",(p+10).toFixed(1)),s.style.opacity=b&&h.alive?(.18+.12*Math.abs(Math.sin(u*9))).toFixed(2):"0";const k=u-h.lastHitAt<.18,m=k&&h.alive?1.05:1,v=ae*m;a.setAttribute("transform",`scale(${(h.facing*v).toFixed(3)} ${v.toFixed(3)}) translate(${-et/2} -122)`);const M=h.alive?0:(u-h.lastHitAt)/oe;a.style.display=h.alive||M<1?"":"none",a.style.opacity=h.alive?"1":String(Math.max(0,1-M)),o.style.display=!h.alive&&M>.55?"":"none",o.style.opacity=String(Math.min(1,Math.max(0,(M-.55)/.45)));const Z=Math.max(0,h.hp/h.maxHp);l.setAttribute("width",(94*Z).toFixed(1)),r.classList.toggle("hurt",k&&h.alive),r.classList.toggle("dead",!h.alive),i.style.display=h.alive?"":"none",l.style.display=h.alive?"":"none"}};return f}function mr(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(G("g"));t.forEach((s,r)=>{const a=e.childNodes[r];a.getAttribute("data-kind")!==s.kind&&(a.setAttribute("data-kind",s.kind),a.setAttribute("class",`shot ${s.kind}`),a.innerHTML=br(s.kind));const i=s.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(s.x*R).toFixed(1)} ${(s.y*R).toFixed(1)}) rotate(${(s.angle*180/Math.PI).toFixed(1)})${i}`)})}function br(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function wr(e,t,n){const s=t.events.filter(r=>t.time-r.time<.32);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(G("circle"));s.forEach((r,a)=>{const o=e.childNodes[a],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/.32;o.setAttribute("class",`burst ${r.kind}`),o.setAttribute("cx",(i.px*R).toFixed(1)),o.setAttribute("cy",(i.py*R-90).toFixed(1)),o.setAttribute("r",(14+l*40).toFixed(1)),o.setAttribute("opacity",(1-l).toFixed(2))})}function Mr(e,t,n){const s=t.events.filter(r=>t.time-r.time<1.1&&r.amount>=1);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(G("text",{"text-anchor":"middle"}));s.forEach((r,a)=>{const o=e.childNodes[a],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/1.1;o.setAttribute("class",`floater ${r.kind}`),o.setAttribute("x",(i.px*R).toFixed(1)),o.setAttribute("y",(i.py*R-210-l*70).toFixed(1)),o.setAttribute("opacity",(1-l*l).toFixed(2));const c=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;o.textContent!==c&&(o.textContent=c)})}function vr(e){const t=Ot(e.id??""),n=t?Qn(t.fortress.id,O(),Date.now()&65535||1):null;if(!t||!n)return j({title:"מבצר לא נמצא"},d("p",{},"חזרה למפת העולם."));const{continent:s,fortress:r}=t;if(O().conquered.includes(r.id)){const x=d("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return x.addEventListener("click",()=>D(`/continent/${s.id}`)),j({title:r.name,subtitle:s.name,showStars:!1},d("p",{class:"notice"},"המבצר הזה כבר נכבש."),d("div",{class:"row"},x))}const a=Fn(n),o=new Set(a.units.filter(x=>x.side==="player").map(x=>x.id)),i=qr(new URLSearchParams(location.search).get("speed"));let l=!1,c=!1,f=0,h=0,u=0;window.__battle=a;const L=xr(a,x=>K(x)),q=d("div",{class:"stage"});q.append(L.el);const p=d("div",{class:"overlay"});q.append(p);const y=()=>{p.replaceChildren(d("div",{class:"panel"},d("h2",{},r.name),d("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),d("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),w())),p.classList.remove("hidden")},b=x=>{tr({fortressId:r.id,won:x,seconds:a.time,heroes:E.map(_=>({cls:_.cls,name:_.name||yt(_.cls,_.gender),alive:_.alive,health:Math.max(0,_.hp/_.maxHp)}))});const T=d("button",{class:"btn primary",type:"button"},"המשך");T.addEventListener("click",()=>D(`/result/${r.id}/${x?"win":"lose"}`)),p.replaceChildren(d("div",{class:"panel"},d("h2",{},x?"המבצר נכבש":"הקרב אבד"),d("p",{},x?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),T)),p.classList.remove("hidden")};function w(){const x=d("button",{class:"btn primary",type:"button"},"התחל קרב");return x.addEventListener("click",()=>{p.classList.add("hidden"),l=!0,h=performance.now()}),x}const g=d("div",{class:"portraits"}),k=d("button",{class:"btn small",type:"button"},"השהה"),m=d("button",{class:"btn small",type:"button"},"ריפוי"),v=d("button",{class:"btn small",type:"button"},"בחר הכול"),M=d("button",{class:"btn small",type:"button"},"עמוד במקום");k.addEventListener("click",()=>{c||(l=!l,h=performance.now(),k.textContent=l?"השהה":"המשך")}),v.addEventListener("click",()=>{o.clear();for(const x of a.units)x.side==="player"&&x.alive&&o.add(x.id);P()}),M.addEventListener("click",()=>{for(const x of o)Zt(a,x,{kind:"hold"})});const Z=a.units.find(x=>x.side==="player"&&x.cls==="mage");m.addEventListener("click",()=>{if(!Z)return;const x=te(a,Z.id);x&&(Nn(a,Z.id,x.id),$())});function $(){(Z?Cn(a,Z.id)&&te(a,Z.id)!==null:!1)?m.removeAttribute("disabled"):m.setAttribute("disabled","true")}const E=a.units.filter(x=>x.side==="player"),W=E.map(x=>{const T=d("span",{class:"portrait-fill"}),_=d("button",{class:`portrait ${x.cls}`,type:"button"},d("span",{class:"portrait-name"},x.name||yt(x.cls,x.gender)),d("span",{class:"portrait-bar"},T));return _.addEventListener("click",()=>{x.alive&&(o.clear(),o.add(x.id),P())}),g.append(_),{unit:x,button:_,fill:T}});function P(){$();for(const x of W){const T=Math.max(0,x.unit.hp/x.unit.maxHp);x.fill.style.width=`${(T*100).toFixed(0)}%`,x.button.classList.toggle("selected",o.has(x.unit.id)),x.button.classList.toggle("dead",!x.unit.alive)}}P();function K(x){if(!l)return;const T=x.unit;if(T&&T.side==="player"&&T.alive){o.clear(),o.add(T.id),P();return}if(o.size!==0)for(const _ of o)T&&T.side==="enemy"&&T.alive?Zt(a,_,{kind:"attack",targetId:T.id}):Zt(a,_,{kind:"move",x:x.x,y:x.y})}const X=x=>{x.code==="Space"&&(x.preventDefault(),k.click())};addEventListener("keydown",X);const N=()=>{if(f=requestAnimationFrame(N),l&&!c){const x=performance.now();u+=Math.min(.1,(x-h)/1e3)*i*Lr,h=x;let T=0;for(;u>=Nt&&T<8*i;)ct(),u-=Nt,T++}L.update(a,o)},ct=()=>{In(a),a.winner&&!c&&(c=!0,l=!1,b(a.winner==="player")),P()};y(),f=requestAnimationFrame(N);const Vt=j({title:r.name,subtitle:`${s.name} · ${s.domain}`,showStars:!1},q,d("div",{class:"hud"},g,d("div",{class:"hud-actions"},m,v,M,k)));return{el:Vt.el,destroy(){cancelAnimationFrame(f),removeEventListener("keydown",X),L.destroy(),Vt.destroy()}}}const Lr=.6;function qr(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function $r(e){const t=Ot(e.id??"");if(!t)return j({title:"מבצר לא נמצא"},d("p",{},"חזרה למפת העולם."));const{continent:n,fortress:s}=t,r=e.outcome==="win",a=er(s.id),o=!O().flags.sawUpgrades;tt(f=>{r&&!f.conquered.includes(s.id)&&f.conquered.push(s.id),o&&(f.flags.sawUpgrades=!0,f.stars+=ne)});const i=[];a&&i.push(d("section",{class:"card"},d("h3",{},"הגיבורים שלך"),...a.heroes.map(f=>d("div",{class:"stat-row"},d("span",{class:"stat-name"},f.name),d("span",{class:"stat-value"},f.alive?`${Math.round(f.health*100)}% חיים`:"נפל"))),d("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),o&&i.push(d("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${ne} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const l=n.fortresses.filter(f=>!f.home&&!O().conquered.includes(f.id)).length;r&&l===0?i.push(d("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||i.push(d("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const c=d("div",{class:"row"},ft(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[ft("קרב נוסף באותו מבצר",`/battle/${s.id}`)],ft("חזרה ליבשת",`/continent/${n.id}`),ft("תפריט המשימות","/missions"));return j({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${s.name} · ${Bt(n.id)?.name??""}`,showBack:!1},...i,c)}function ft(e,t,n=!1){const s=d("button",{class:n?"btn primary":"btn",type:"button"},e);return s.addEventListener("click",()=>D(t)),s}function Zr(e){let t=0;for(const n of Object.keys(e.heroes)){const s=e.heroes[n];for(const r of _t[n])t+=Kn(s.levels[r]??0)}return t}function Sr(e,t,n){const s=()=>{i.remove(),removeEventListener("keydown",r)},r=l=>{l.key==="Escape"&&s()},a=n.map(l=>{const c=d("button",{class:l.primary?"btn primary":"btn",type:"button"},l.label);return c.addEventListener("click",()=>{s(),l.onClick()}),c}),o=d("div",{class:"modal",role:"dialog","aria-modal":"true"},d("h2",{},e),d("p",{},t),d("div",{class:"modal-actions"},...a)),i=d("div",{class:"backdrop"},o);i.addEventListener("click",l=>{l.target===i&&s()}),addEventListener("keydown",r),document.body.append(i),a.find(l=>l.classList.contains("primary"))?.focus()}function Er(){if(!O().flags.sawUpgrades)return j({title:"שדרוג הגיבורים"},d("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=d("div",{class:"stack"}),t=()=>{const n=O();e.replaceChildren(...Object.keys(xt).map(s=>{const r=n.heroes[s],a=_t[s].map(i=>Ar(s,i,t)),o=yt(s,r.gender);return d("section",{class:"card hero"},d("h3",{},r.name?`${r.name} · ${o}`:o),d("div",{class:"stats"},...a))}))};return t(),j({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${Zr(O())}`},e)}function Ar(e,t,n){const a=O().heroes[e].levels[t]??0,o=Dt[e][t]??0,i=Vn(o,t,a),l=Un(a),c=d("button",{class:"btn small",type:"button"},l===null?"מרבי":`★ ${l}`);return l===null&&c.setAttribute("disabled","true"),c.addEventListener("click",()=>{if(l!==null){if(O().stars<l){Sr("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>D("/missions")}]);return}tt(f=>{f.stars-=l;const h=f.heroes[e];h.levels[t]=(h.levels[t]??0)+1}),n()}}),d("div",{class:"stat-row"},d("span",{class:"stat-name"},Dn[t]),d("span",{class:"stat-value"},Fr(i)),d("span",{class:"stat-level"},`דרגה ${a}`),c)}function Fr(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function Ee(e){const t=O(),n=Bt(e.id??""),s=n&&Pt(n,t)?n:gn(t),r=fn(s,t),a=jt(s).length-r.length,o=r.map(l=>{const c=wt(t,l.id),f=d("button",{class:"card mission-card",type:"button"},d("h3",{},l.title),d("span",{class:"stars-row"},Cr(c)));return f.addEventListener("click",()=>D(`/mission/${l.id}`)),f}),i=o.length>0?[d("div",{class:"grid"},...o)]:[d("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return a>0&&i.push(d("p",{class:"muted"},`עוד ${a} משימות ייפתחו לפי ההתקדמות.`)),j({title:"משימות",subtitle:`${s.name} · ${s.domain}`},...i)}function Cr(e){return"★".repeat(e)+"☆".repeat(nt-e)}const Gt={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Nr=["m","f"];function Ir(){const e=d("div",{class:"stack"}),t=()=>{const s=O();e.replaceChildren(...Object.keys(xt).map(r=>Gr(r,s.heroes[r].gender,s.heroes[r].name,t)))};t();const n=d("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{tt(s=>{for(const r of Object.keys(xt)){const a=s.heroes[r];a.name.trim()||(a.name=Gt[r][a.gender][0])}s.flags.setupDone=!0}),D("/")}),j({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:O().flags.setupDone},e,d("div",{class:"row"},n))}function Gr(e,t,n,s){const r=d("input",{class:"name-input",type:"text",maxlength:"14",placeholder:Gt[e][t][0],value:n,"aria-label":`שם ה${yt(e,t)}`});r.addEventListener("input",()=>{tt(i=>{i.heroes[e].name=r.value})});const a=i=>{const l=d("button",{class:`btn small${t===i?" primary":""}`,type:"button"},it[e][i]);return l.addEventListener("click",()=>{tt(c=>{c.heroes[e].gender=i}),s()}),l},o=Gt[e][t].map(i=>{const l=d("button",{class:"chip",type:"button"},i);return l.addEventListener("click",()=>{tt(c=>{c.heroes[e].name=i}),s()}),l});return d("section",{class:"card hero-setup"},d("div",{class:"setup-row"},...Nr.map(a)),d("div",{class:"setup-row"},r),d("div",{class:"setup-row chips"},...o))}function Tr(e){const t=He(e.id??""),n=t?an(t.kind):void 0;if(!t||!n)return j({title:"משימה לא נמצאה"},d("p",{},"חזרה לתפריט המשימות."));const s=d("div",{class:"mission-stage"}),r=d("p",{class:"hint-line"}),a=d("div",{class:"stars-row big"}),o=d("div",{class:"overlay hidden"}),i=d("button",{class:"btn",type:"button"},"רמז"),l=d("button",{class:"btn primary",type:"button"},"בדיקה");l.setAttribute("disabled","true");let c,f,h=0,u=0,L=!1;const q=()=>{const m=L?p:Lt(h,u);a.replaceChildren(...Array.from({length:nt},(v,M)=>d("span",{class:`star${M<m?" lit":""}`},"★")))};let p=nt;const y=()=>{!f||L||(f.answer()===null?l.setAttribute("disabled","true"):l.removeAttribute("disabled"))},b=m=>{f?.destroy(),c=n.generate(m),f=n.mount(c,y),h=0,u=0,L=!1,p=nt,r.textContent="",s.replaceChildren(f.el,o),o.classList.add("hidden"),l.setAttribute("disabled","true"),i.removeAttribute("disabled"),q(),w()};function w(){window.__mission={solve:()=>{f.demonstrate(),y()},place:m=>{f.place?.(m),y()},solution:()=>c.solution,state:()=>({hintsUsed:h,mistakes:u,finished:L,score:Lt(h,u)})}}i.addEventListener("click",()=>{L||h>=c.hints.length||(h++,f.hint(h),r.textContent=c.hints[h-1]?.text??"",h>=c.hints.length&&i.setAttribute("disabled","true"),q(),y())}),l.addEventListener("click",()=>{if(L)return;const m=f.answer();if(m!==null){if(c.check(m)){g();return}u++,r.textContent="לא שם. נסה שוב.",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),400),q()}});function g(){L=!0,p=Lt(h,u);const m=wt(O(),t.id),v=on(m,p);tt($=>{$.stars+=v,$.missions[t.id]=Math.max(m,p),$.solvedTopics.includes(t.topicId)||$.solvedTopics.push(t.topicId)}),q();const M=d("button",{class:"btn",type:"button"},"עוד אחת");M.addEventListener("click",()=>b(Math.floor(Math.random()*65535)+1));const Z=d("button",{class:"btn primary",type:"button"},"לתפריט המשימות");Z.addEventListener("click",()=>D("/missions")),o.replaceChildren(d("div",{class:"panel"},d("h2",{},"נכון"),...c.explain.map($=>d("p",{},$)),d("p",{class:"reward"},v>0?`+${v} ★`:"★"),d("div",{class:"modal-actions"},Z,M))),o.classList.remove("hidden")}b(Date.now()&65535||1);const k=j({title:t.title,subtitle:""},s,r,d("div",{class:"hud"},a,d("div",{class:"hud-actions"},i,l)));return{el:k.el,destroy(){f.destroy(),k.destroy()}}}Y("/",wn);Y("/continent/:id",vn);Y("/battle/:id",vr);Y("/result/:id/:outcome",$r);Y("/upgrades",Er);Y("/missions",Ee);Y("/missions/:id",Ee);Y("/mission/:id",Tr);Y("/setup",Ir);Ae(()=>{const e=d("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>D("/")),j({title:"הדף לא נמצא",showBack:!1},e)});!O().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const le=document.getElementById("app");le&&Ie(le);
