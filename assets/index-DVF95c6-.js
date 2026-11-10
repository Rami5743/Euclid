(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const He=[];let Re=null,yt=null,Rt=null;function st(e,t){He.push({pattern:e.split("/").filter(Boolean),factory:t})}function gn(e){Re=e}function K(e){location.hash==="#"+e?zt():location.hash=e}function mn(){history.length>1?history.back():K("/")}function yn(){return location.hash.replace(/^#/,"")||"/"}function kn(e){const t=e.split("/").filter(Boolean);for(const n of He){if(n.pattern.length!==t.length)continue;const s={};let r=!0;for(let o=0;o<n.pattern.length;o++){const a=n.pattern[o],i=t[o];if(a.startsWith(":"))s[a.slice(1)]=decodeURIComponent(i);else if(a!==i){r=!1;break}}if(r)return{factory:n.factory,params:s}}return null}function zt(){if(!yt)return;Rt?.destroy?.(),yt.replaceChildren();const e=yn(),t=kn(e),n=t?.factory??Re;n&&(Rt=n(t?.params??{}),yt.append(Rt.el),yt.scrollTop=0)}function bn(e){yt=e,addEventListener("hashchange",zt),zt()}const Dt="euclid.";class wn{read(t){try{const n=localStorage.getItem(Dt+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(Dt+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(Dt+t)}catch{}}}const De=new wn,_e="profile";function Mn(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function vn(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let kt=vn(De.read(_e)??Mn());const Jt=new Set;function V(){return kt}function Ln(e){return Jt.add(e),()=>Jt.delete(e)}function ft(e){e(kt),De.write(_e,kt);for(const t of Jt)t(kt);return kt}function b(e,t={},...n){const s=document.createElement(e);for(const[r,o]of Object.entries(t))r==="class"?s.className=o:s.setAttribute(r,o);return s.append(...n),s}function W(e,...t){const n=b("button",{class:"stars",type:"button",title:"תפריט המשימות"}),s=()=>{n.replaceChildren(b("span",{class:"star-icon"},"★"),b("span",{},String(V().stars)))};s();const r=Ln(s);n.addEventListener("click",()=>K("/missions"));const o=b("header",{class:"top"});if(e.showBack!==!1){const i=b("button",{class:"back",type:"button","aria-label":"חזרה"},"→");i.addEventListener("click",()=>mn()),o.append(i)}return o.append(b("div",{class:"titles"},b("h1",{},e.title),...e.subtitle?[b("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&o.append(n),{el:b("div",{class:"page"},o,b("main",{class:"content"},...t)),destroy:()=>r()}}const oe=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function ae(e){return oe.find(t=>t.id===e)}function ie(e){for(const t of oe){const n=t.fortresses.find(s=>s.id===e);if(n)return{continent:t,fortress:n}}}function me(e){return e.fortresses.filter(t=>!t.home)}const Ve=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]},{id:"australia-product",continent:"australia",topicId:"mul-div",title:"מלבן המכפלה",kind:"product",requires:["asia-quadrant"]},{id:"australia-powers",continent:"australia",topicId:"powers",title:"סולם החזקות",kind:"powers",requires:["australia-product"]},{id:"australia-square",continent:"australia",topicId:"powers",title:"הריבוע השלם",kind:"perfect-square",requires:["australia-powers"]},{id:"australia-sum-letters",continent:"australia",topicId:"mul-div",title:"חיבור בטור עם אותיות",kind:"alphametic-sum",requires:["australia-product"]},{id:"australia-product-letters",continent:"australia",topicId:"mul-div",title:"כפל בטור עם אותיות",kind:"alphametic-product",requires:["australia-sum-letters"]},{id:"africa-aim",continent:"africa",topicId:"angles",title:"כוון את הקרן",kind:"angle-aim",requires:["australia-product"]},{id:"africa-straight",continent:"africa",topicId:"angle-pairs",title:"זוויות צמודות",kind:"angle-straight",requires:["africa-aim"]},{id:"africa-triangle",continent:"africa",topicId:"triangle-angles",title:"סכום במשולש",kind:"angle-triangle",requires:["africa-straight"]},{id:"africa-isosceles",continent:"africa",topicId:"triangle-angles",title:"שתי שוקיים",kind:"angle-isosceles",requires:["africa-triangle"]},{id:"europe-machine",continent:"europe",topicId:"variable",title:"מכונת המספרים",kind:"machine",requires:["africa-straight"]},{id:"europe-terms",continent:"europe",topicId:"like-terms",title:"קופסאות שוות",kind:"like-terms",requires:["europe-machine"]},{id:"europe-balance",continent:"europe",topicId:"equation-id",title:"מאזניים",kind:"balance",requires:["europe-terms"]},{id:"samerica-balance",continent:"samerica",topicId:"linear-eq",title:"נעלם בשני הצדדים",kind:"balance-both",requires:["europe-balance"]},{id:"samerica-quest",continent:"samerica",topicId:"word-problems",title:"קווסט",kind:"quest",requires:["samerica-balance"]},{id:"samerica-chase",continent:"samerica",topicId:"word-problems",title:"מרדף",kind:"chase",requires:["samerica-quest"]},{id:"samerica-shift",continent:"samerica",topicId:"graph-points",title:"הזזת גרף",kind:"shift",requires:["samerica-chase"]},{id:"namerica-midpoint",continent:"namerica",topicId:"congruence",title:"חצי הדרך",kind:"build-midpoint",requires:["africa-isosceles"]},{id:"namerica-perpendicular",continent:"namerica",topicId:"congruence",title:"אנך",kind:"build-perpendicular",requires:["namerica-midpoint"]},{id:"namerica-equilateral",continent:"namerica",topicId:"congruence",title:"משולש שווה צלעות",kind:"build-equilateral",requires:["namerica-perpendicular"]}];function $n(e){return Ve.find(t=>t.id===e)}function Ue(e){return Ve.filter(t=>t.continent===e)}function G(e){let t=e>>>0;const s=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return s.seed=e,s}function bt(e,t,n){return t+e()*(n-t)}function qn(e,t){const{rows:n,sign:s,letters:r}=e,o=document.createElement("div");o.className="board-wrap columns-board";const a=document.createElement("div");a.className="columns";const i=Math.max(...n.map(g=>g.length));n.forEach((g,v)=>{const m=document.createElement("div");m.className="col-row";const y=g.padStart(i," "),k=document.createElement("span");k.className="col-cell sign",k.textContent=v===n.length-2?s:"",m.append(k);for(const $ of y){const L=document.createElement("span");L.className=$===" "?"col-cell blank":"col-cell letter",L.dataset.letter=$.trim(),L.textContent=$.trim(),m.append(L)}v===n.length-2&&m.classList.add("last-addend"),a.append(m)});const l=document.createElement("div");l.className="col-rule",a.insertBefore(l,a.lastElementChild);const c=document.createElement("p");c.className="columns-live";const d=document.createElement("p");d.className="chain-hint";const f=document.createElement("div");f.className="letters";const p=document.createElement("div");p.className="keypad",o.append(a,c,d,f,p);const x={};let M=r[0]??"";const h=()=>{f.replaceChildren();for(const g of r){const v=document.createElement("button");v.type="button",v.className=`chip letter-chip${g===M?" selected":""}`;const m=x[g];Object.entries(x).some(([k,$])=>k!==g&&$===m&&m!==void 0)&&v.classList.add("clash"),v.innerHTML=`<span class="chip-letter">${g}</span><span class="chip-digit">${m??"?"}</span>`,v.addEventListener("click",()=>{M=g,h()}),f.append(v)}for(const g of Array.from(a.querySelectorAll(".col-cell.letter"))){const v=g.dataset.letter??"",m=x[v];g.textContent=m===void 0?v:String(m),g.classList.toggle("filled",m!==void 0)}};for(let g=0;g<=9;g++){const v=document.createElement("button");v.type="button",v.className="btn small tray-key digit-key",v.textContent=String(g),v.addEventListener("click",()=>{M&&(x[M]=g,h(),t())}),p.append(v)}const w=document.createElement("button");return w.type="button",w.className="btn small tray-key",w.textContent="נקה",w.addEventListener("click",()=>{for(const g of r)delete x[g];h(),t()}),p.append(w),h(),{el:o,assignment:()=>({...x}),set(g,v){x[g]=v,h(),t()},clear(){for(const g of r)delete x[g];h(),t()},live:g=>{c.textContent=g},reveal(g,v){x[g]=v,h(),t()},mark:g=>{d.textContent=g},destroy:()=>o.remove()}}function u(e){return`⁦${e}⁩`}const ye=["א","ב","ג","ד","ה","ו"];function ke(e,t,n){const s=[...new Set([...String(e),...String(t),...String(n)])];if(s.length>ye.length)return null;const r=new Map;s.forEach((i,l)=>r.set(i,ye[l]));const o=i=>String(i).split("").map(l=>r.get(l)).join(""),a=[o(e),o(t),o(n)];return{rows:a,letters:s.map(i=>r.get(i)),leading:[...new Set(a.map(i=>i[0]))]}}function En(e,t){let n=0;for(const s of e){const r=t[s];if(r===void 0)return null;n=n*10+r}return n}function Sn(e,t){const n=e.letters.map(a=>t[a]);if(n.some(a=>a===void 0)||new Set(n).size!==n.length||e.leading.some(a=>t[a]===0))return!1;const[s,r,o]=e.rows.map(a=>En(a,t));return s===null||r===null||o===null?!1:e.sign==="+"?s+r===o:s*r===o}function Xe(e,t){const n=G(e);let s=0,r=0,o=0,a=null;for(let p=0;p<400;p++)if(t==="+"?(s=11+Math.floor(n()*78),r=11+Math.floor(n()*78),o=s+r):(s=12+Math.floor(n()*38),r=3+Math.floor(n()*7),o=s*r),!(String(o).includes("0")||String(s).includes("0")||String(r).includes("0"))){if(a=ke(s,r,o),a&&a.letters.length>=3)break;a=null}a||(s=12,r=34,o=46,a=ke(s,r,o));const i={rows:a.rows,sign:t,letters:a.letters,values:{a:s,b:r,result:o},leading:a.leading},l={},c=(p,x)=>{p.split("").forEach((M,h)=>{l[M]=Number(String(x)[h])})};c(a.rows[0],s),c(a.rows[1],r),c(a.rows[2],o);const d=a.rows[2][a.rows[2].length-1],f=a.letters[0];return{config:i,solution:l,check:p=>Sn(i,p),hints:[{text:"מתחילים מטור היחידות"},{text:`${f} = ${u(l[f])}`},{text:`${d} = ${u(l[d])}`},{text:"כל האותיות"}],explain:[t==="+"?`${u(s)} + ${u(r)} = ${u(o)}.`:`${u(s)} × ${u(r)} = ${u(o)}.`,"כל אות היא ספרה אחת, ולשתי אותיות שונות ספרות שונות."]}}function An(e){return Xe(e,"+")}function Zn(e){return Xe(e,"×")}function Ye(e,t){const{rows:n,sign:s,letters:r}=e.config,o=e.solution;let a=!1;const i=qn({rows:n,sign:s,letters:r},()=>{a=!0,l(),t()});function l(){const c=i.assignment(),d=n.map(f=>f.split("").map(p=>c[p]??"?").join(""));i.live(`${d[0]} ${s} ${d[1]} = ${d[2]}`)}return l(),{el:i.el,answer:()=>a?i.assignment():null,hint(c){if(c===1&&i.mark(`${n[0].slice(-1)} ${s} ${n[1].slice(-1)} → ${n[2].slice(-1)}`),c===2&&i.reveal(r[0],o[r[0]]),c===3){const d=r.find(f=>i.assignment()[f]===void 0)??r[1];i.reveal(d,o[d])}if(c>=4)for(const d of r)i.reveal(d,o[d])},demonstrate(){for(const c of r)i.reveal(c,o[c])},place:c=>{i.clear();for(const[d,f]of Object.entries(c))i.set(d,f)},destroy:()=>i.destroy()}}const Fn={kind:"alphametic-sum",generate:An,mount:Ye},Nn={kind:"alphametic-product",generate:Zn,mount:Ye},Cn="http://www.w3.org/2000/svg",In=1e3,Tn=560,F={x:760,y:320,r:170};function U(e,t={}){const n=document.createElementNS(Cn,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}const be=e=>e*Math.PI/180;function at(e,t,n,s){return{x:e+Math.cos(be(n))*s,y:t-Math.sin(be(n))*s}}function we(e,t,n,s,r){const o=at(e,t,s,n),a=at(e,t,r,n),i=Math.abs(r-s)>180?1:0,l=r>s?0:1;return`M${o.x.toFixed(1)} ${o.y.toFixed(1)} A${n} ${n} 0 ${i} ${l} ${a.x.toFixed(1)} ${a.y.toFixed(1)}`}function Bn(){const e=document.createElement("div");e.className="board-wrap";const t=U("svg",{class:"board angle-board",viewBox:`0 0 ${In} ${Tn}`});e.append(t);const n=U("g",{class:"figure"}),s=U("g",{class:"hints"}),r=U("g",{class:"dial"});t.append(n,s,r);const o=U("text",{class:"board-mark",x:"40",y:"56"});t.append(o);const a=[],i={el:e,line(l,c,d,f,p=""){const x=U("line",{class:`fig-line ${p}`,x1:String(l),y1:String(c),x2:String(d),y2:String(f)});return n.append(x),x},ray(l,c,d,f,p=""){const x=at(l,c,d,f);return i.line(l,c,x.x,x.y,p)},arc(l,c,d,f,p,x=""){const M=U("path",{class:`fig-arc ${x}`,d:we(l,c,d,f,p)});return n.append(M),M},label(l,c,d,f=""){const p=U("text",{class:`fig-label ${f}`,x:String(l),y:String(c),"text-anchor":"middle"});return p.textContent=d,n.append(p),p},dot(l,c,d=""){const f=U("circle",{class:`fig-dot ${d}`,cx:String(l),cy:String(c),r:"7"});return n.append(f),f},dial(l,c){let d=Math.round(l);const f=U("circle",{class:"dial-face",cx:String(F.x),cy:String(F.y),r:String(F.r)}),p=U("line",{class:"dial-base",x1:String(F.x),y1:String(F.y),x2:String(F.x+F.r),y2:String(F.y)}),x=U("line",{class:"dial-arm"}),M=U("path",{class:"dial-wedge"}),h=U("circle",{class:"dial-knob",r:"18"}),w=U("text",{class:"dial-readout",x:String(F.x),y:String(F.y+72),"text-anchor":"middle"});r.append(f,M,p,x,h,w);for(let L=0;L<=180;L+=10){const S=at(F.x,F.y,L,F.r),E=at(F.x,F.y,L,F.r-(L%30===0?22:12));r.append(U("line",{class:"dial-tick",x1:E.x.toFixed(1),y1:E.y.toFixed(1),x2:S.x.toFixed(1),y2:S.y.toFixed(1)}))}const g=()=>{const L=at(F.x,F.y,d,F.r);x.setAttribute("x1",String(F.x)),x.setAttribute("y1",String(F.y)),x.setAttribute("x2",L.x.toFixed(1)),x.setAttribute("y2",L.y.toFixed(1)),h.setAttribute("cx",L.x.toFixed(1)),h.setAttribute("cy",L.y.toFixed(1)),M.setAttribute("d",`M${F.x} ${F.y} L${F.x+F.r} ${F.y} ${we(F.x,F.y,F.r,0,d).slice(1)} Z`),w.textContent=`${d}°`};g();const v=L=>{const S=t.getScreenCTM();if(!S)return d;const E=new DOMPoint(L.clientX,L.clientY).matrixTransform(S.inverse()),Z=Math.round(Math.atan2(F.y-E.y,E.x-F.x)*180/Math.PI);return Math.max(0,Math.min(180,Z))};let m=!1;const y=L=>{m=!0,t.setPointerCapture(L.pointerId),d=v(L),g(),c(d),L.preventDefault()},k=L=>{m&&(d=v(L),g(),c(d))},$=()=>{m=!1};return t.addEventListener("pointerdown",y),t.addEventListener("pointermove",k),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$),a.push(()=>{t.removeEventListener("pointerdown",y),t.removeEventListener("pointermove",k),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$)}),{get:()=>d,set:L=>{d=Math.round(L),g(),c(d)}}},mark(l){o.textContent=l},clearHints(){s.replaceChildren()},destroy(){for(const l of a)l();e.remove()}};return i}const A={x:130,y:470},D={x:530,y:470};function Bt(e,t,n){const s={aim:["הקשת מראה את הזווית","הסימונים על המד הם של ‎10°‎","הזווית בין ‎"+Math.floor(t/10)*10+"°‎ ל־"+Math.ceil(t/10)*10+"°",`הזווית היא ${u(t+"°")}`],straight:["שתי הזוויות יחד על ישר",`יחד הן ${u("180°")}`,`${u("180°")} − ${u(n[0]+"°")}`,`הזווית היא ${u(t+"°")}`],triangle:["שלוש הזוויות של משולש",`יחד הן ${u("180°")}`,`${u("180°")} − ${u(n[0]+"°")} − ${u(n[1]+"°")}`,`הזווית היא ${u(t+"°")}`],isosceles:["שתי זוויות הבסיס שוות",`יחד עם ${u(n[0]+"°")} הן ${u("180°")}`,`(${u("180°")} − ${u(n[0]+"°")}) : ${u(2)}`,`הזווית היא ${u(t+"°")}`]},r={aim:[`הזווית היא ${u(t+"°")}.`],straight:[`שתי זוויות צמודות משלימות ל־${u("180°")}.`,`${u("180°")} − ${u(n[0]+"°")} = ${u(t+"°")}.`],triangle:[`סכום הזוויות במשולש הוא ${u("180°")}.`,`${u("180°")} − ${u(n[0]+"°")} − ${u(n[1]+"°")} = ${u(t+"°")}.`],isosceles:["במשולש שווה שוקיים שתי זוויות הבסיס שוות.",`(${u("180°")} − ${u(n[0]+"°")}) : ${u(2)} = ${u(t+"°")}.`]};return{config:{shape:e,target:t,given:n},solution:t,check:o=>o===t,hints:s[e].map(o=>({text:o})),explain:r[e]}}function Gn(e){const t=G(e),n=15+Math.floor(t()*31)*5;return Bt("aim",Math.min(165,n),[])}function On(e){const t=G(e),n=20+Math.floor(t()*28)*5;return Bt("straight",180-n,[n])}function Pn(e){const t=G(e);let n=0,s=0;do n=25+Math.floor(t()*14)*5,s=25+Math.floor(t()*14)*5;while(n+s>150);return Bt("triangle",180-n-s,[n,s])}function jn(e){const t=G(e),n=20+Math.floor(t()*14)*10;return Bt("isosceles",(180-n)/2,[n])}function Hn(e,t){const{shape:n,target:s,given:r}=t;if(n==="aim"){e.line(A.x-40,A.y,A.x+420,A.y,"base"),e.ray(A.x,A.y,s,380,"live"),e.arc(A.x,A.y,90,0,s,"given"),e.dot(A.x,A.y);return}if(n==="straight"){e.line(A.x-60,A.y,D.x+60,A.y,"base");const f={x:(A.x+D.x)/2,y:A.y};e.ray(f.x,f.y,r[0],300,"live"),e.arc(f.x,f.y,76,0,r[0],"given"),e.label(...gt(f,r[0]/2,112),`${r[0]}°`),e.arc(f.x,f.y,110,r[0],180,"wanted"),e.label(...gt(f,(r[0]+180)/2,150),"?"),e.dot(f.x,f.y);return}const[o,a]=n==="triangle"?[r[0],r[1]]:[(180-r[0])/2,(180-r[0])/2],i=180-o-a,c=(D.x-A.x)*Math.sin(a*Math.PI/180)/Math.sin(i*Math.PI/180),d=at(A.x,A.y,o,c);if(e.line(A.x,A.y,D.x,D.y,"base"),e.line(A.x,A.y,d.x,d.y,"base"),e.line(D.x,D.y,d.x,d.y,"base"),e.dot(A.x,A.y),e.dot(D.x,D.y),e.dot(d.x,d.y),n==="triangle"){e.arc(A.x,A.y,66,0,o,"given"),e.label(...gt(A,o/2,100),`${o}°`),e.arc(D.x,D.y,66,180-a,180,"given"),e.label(...gt(D,180-a/2,100),`${a}°`);const f=Math.atan2(A.y-d.y,A.x-d.x)*(180/Math.PI),p=Math.atan2(D.y-d.y,D.x-d.x)*(180/Math.PI);e.arc(d.x,d.y,60,-p,-f,"wanted"),e.label(d.x,d.y+54,"?")}else{const f=Math.atan2(A.y-d.y,A.x-d.x)*(180/Math.PI),p=Math.atan2(D.y-d.y,D.x-d.x)*(180/Math.PI);e.arc(d.x,d.y,60,-p,-f,"given"),e.label(d.x,d.y+56,`${r[0]}°`),e.arc(A.x,A.y,66,0,o,"wanted"),e.label(...gt(A,o/2,104),"?"),e.label((A.x+d.x)/2-18,(A.y+d.y)/2,"//"),e.label((D.x+d.x)/2+18,(D.y+d.y)/2,"//")}}function gt(e,t,n){const s=at(e.x,e.y,t,n);return[s.x,s.y+10]}function Gt(e,t){const n=Bn();Hn(n,e.config);let s=!1;const r=n.dial(0,()=>{s=!0,t()});return{el:n.el,answer:()=>s?r.get():null,hint(o){const{shape:a,given:i,target:l}=e.config;o===1&&n.mark(a==="triangle"?"180°":a==="isosceles"?"= =":"180°"),o===2&&n.mark(a==="aim"?"10°":"180°"),o===3&&(a==="straight"?n.mark(`180 − ${i[0]}`):a==="triangle"?n.mark(`180 − ${i[0]} − ${i[1]}`):a==="isosceles"?n.mark(`(180 − ${i[0]}) : 2`):n.mark(`${Math.floor(l/10)*10}…${Math.ceil(l/10)*10}`)),o>=4&&r.set(l)},demonstrate(){r.set(e.solution)},place:o=>r.set(o),destroy:()=>n.destroy()}}const Rn={kind:"angle-aim",generate:Gn,mount:Gt},Dn={kind:"angle-straight",generate:On,mount:Gt},_n={kind:"angle-triangle",generate:Pn,mount:Gt},Vn={kind:"angle-isosceles",generate:jn,mount:Gt};function le(e,t){const{signed:n=!1,max:s=999}=e,r=document.createElement("div");r.className="keypad-board";const o=document.createElement("p");o.className="keypad-readout";const a=document.createElement("div");a.className="keypad",r.append(o,a);let i="";const l=()=>{o.textContent=i===""?"?":i};l();const c=f=>{f==="-"?i=i.startsWith("-")?i.slice(1):`-${i}`:i.replace("-","").length<String(s).length&&(i+=f),l(),t()};for(let f=0;f<=9;f++){const p=document.createElement("button");p.type="button",p.className="btn small tray-key digit-key",p.textContent=String(f),p.addEventListener("click",()=>c(String(f))),a.append(p)}if(n){const f=document.createElement("button");f.type="button",f.className="btn small tray-key digit-key",f.textContent="−",f.addEventListener("click",()=>c("-")),a.append(f)}const d=document.createElement("button");return d.type="button",d.className="btn small tray-key",d.textContent="נקה",d.addEventListener("click",()=>{i="",l(),t()}),a.append(d),{el:r,value:()=>i===""||i==="-"?null:Number(i),set(f){i=String(f),l(),t()},clear(){i="",l(),t()}}}function We(e,t){const n=G(e),s=2+Math.floor(n()*6),r=2+Math.floor(n()*2),o=t?1+Math.floor(n()*(r-1)):0,a=Math.floor(n()*6),i=a+(r-o)*s,l={leftX:r,leftN:a,rightX:o,rightN:i},c=`${r}x${a>0?` + ${a}`:""}`,d=`${o>0?`${o}x + `:""}${i}`;return{config:l,solution:s,check:f=>f===s,hints:[{text:"מורידים אותו דבר משני הצדדים"},t?{text:`מורידים ${u(`${o}x`)} משני הצדדים`}:{text:a>0?`מורידים ${u(a)} משני הצדדים`:"שתי הכפות שוות"},{text:`נשאר ${u(`${r-o}x`)} = ${u(i-a)}`},{text:`${u("x")} = ${u(s)}`}],explain:[`${u(c)} = ${u(d)}.`,`${u(`${r-o}x`)} = ${u(i-a)}.`,`${u("x")} = ${u(s)}.`]}}function Un(e){return We(e,!1)}function Xn(e){return We(e,!0)}const dt="http://www.w3.org/2000/svg";function Me(e,t,n){const s=document.createElementNS(dt,"g");s.setAttribute("transform",`translate(${e} 0)`),s.innerHTML=`
    <path class="rope" d="M-100 70 L-100 172 M100 70 L100 172"/>
    <path class="pan" d="M-120 172 h240 l-26 44 h-188 Z"/>`;const r=document.createElementNS(dt,"g"),o=t>3?1:t,a=n>4?1:n,i=o+a,l=52;let c=-((i-1)*l)/2;for(let d=0;d<o;d++){const f=document.createElementNS(dt,"g");f.setAttribute("transform",`translate(${c} 170)`),f.innerHTML=`<rect class="x-box" x="-21" y="-44" width="42" height="42" rx="7"/>
      <text class="x-text" x="0" y="-13" text-anchor="middle">x</text>`,r.append(f),c+=l}if(t>o){const d=document.createElementNS(dt,"text");d.setAttribute("class","pan-count"),d.setAttribute("x",String(c-l+36)),d.setAttribute("y","147"),d.textContent=`×${t}`,r.append(d),c+=34}for(let d=0;d<a;d++){const f=document.createElementNS(dt,"circle");f.setAttribute("class","weight"),f.setAttribute("cx",String(c)),f.setAttribute("cy","150"),f.setAttribute("r","18"),r.append(f),c+=l}if(n>a){const d=document.createElementNS(dt,"text");d.setAttribute("class","pan-count"),d.setAttribute("x",String(c-l+34)),d.setAttribute("y","160"),d.textContent=`×${n}`,r.append(d)}return s.append(r),s}function Ke(e,t){const{leftX:n,leftN:s,rightX:r,rightN:o}=e.config,a=document.createElement("div");a.className="board-wrap balance-board";const i=document.createElementNS(dt,"svg");i.setAttribute("class","board balance-art"),i.setAttribute("viewBox","0 0 1000 400"),i.innerHTML=`
    <path class="stand" d="M500 70 v220 M420 330 h160 l-30 -40 h-100 Z"/>
    <path class="beam" d="M240 70 h520"/>`,i.append(Me(250,n,s),Me(750,r,o)),a.append(i);const l=le({max:99},t);return a.append(l.el),{el:a,answer:()=>l.value(),hint(c){c>=4&&l.set(e.solution)},demonstrate(){l.set(e.solution)},place:c=>l.set(c),destroy:()=>a.remove()}}const Yn={kind:"balance",generate:Un,mount:Ke},Wn={kind:"balance-both",generate:Xn,mount:Ke},Kn="http://www.w3.org/2000/svg",ze=1e3,zn=300,mt=70,vt=ze-70,O=130;function N(e,t={}){const n=document.createElementNS(Kn,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Ot(e){const{from:t,to:n,tickStep:s,labelEvery:r}=e,o=document.createElement("div");o.className="board-wrap";const a=N("svg",{class:"board number-line",viewBox:`0 0 ${ze} ${zn}`});o.append(a);const i=document.createElement("div");i.className="tray",o.append(i);const l=N("g",{class:"hints"}),c=N("g",{class:"main"}),d=N("g",{class:"drag"});a.append(l,c,d);const f=n-t,p=m=>mt+(m-t)/f*(vt-mt),x=m=>t+(m-mt)/(vt-mt)*f,M=m=>{const y=Math.round((m-t)/s),k=Math.min(Math.max(y,0),Math.round(f/s));return t+k*s};c.append(N("line",{class:"axis",x1:String(mt-40),y1:String(O),x2:String(vt+40),y2:String(O)})),c.append(N("path",{class:"axis-head",d:`M${vt+40} ${O} l-22 -11 v22 Z`}));for(let m=0;m*s<=f+1e-9;m++){const y=t+m*s,k=p(y),$=m%r===0;if(c.append(N("line",{class:`tick${$?" labelled":""}`,x1:k.toFixed(1),y1:String(O-($?20:11)),x2:k.toFixed(1),y2:String(O+($?20:11))})),$){const L=N("text",{class:"tick-label",x:k.toFixed(1),y:String(O+50),"text-anchor":"middle"});L.textContent=String(y),c.append(L)}}const h=m=>{const y=a.getScreenCTM();if(!y)return t;const k=new DOMPoint(m.clientX,m.clientY).matrixTransform(y.inverse());return M(x(k.x))},w=[],g={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:o,xOf:p,flag(m){const y=p(m),k=N("g",{class:"flag",transform:`translate(${y.toFixed(1)} ${O})`});k.append(N("path",{d:"M0 0 v-96",class:"pole"})),k.append(N("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),c.append(k)},chest(m,y,k="chest"){let $=M(m);const L=N("g",{class:`chest ${k}`});L.innerHTML=g[k];const S=N("line",{class:"chest-thread",y1:String(O+6),y2:String(O+78)});d.append(S);const E=()=>{const I=p($);L.setAttribute("transform",`translate(${I.toFixed(1)} ${O+112})`),S.setAttribute("x1",I.toFixed(1)),S.setAttribute("x2",I.toFixed(1))};E(),d.append(L);let Z=!1;const Q=I=>{Z=!0,L.setPointerCapture(I.pointerId),$=h(I),E(),y($),I.preventDefault()},H=I=>{Z&&($=h(I),E(),y($))},tt=()=>{Z=!1};L.addEventListener("pointerdown",Q),L.addEventListener("pointermove",H),L.addEventListener("pointerup",tt),L.addEventListener("pointercancel",tt);const z=I=>{$=h(I),E(),y($)};return a.addEventListener("pointerdown",z),w.push(()=>{L.removeEventListener("pointerdown",Q),L.removeEventListener("pointermove",H),L.removeEventListener("pointerup",tt),L.removeEventListener("pointercancel",tt),a.removeEventListener("pointerdown",z)}),{get:()=>$,set:I=>{$=M(I),E(),y($)}}},token(m,y="ship"){let k=M(m);const $=N("g",{class:`chest static ${y}`});$.innerHTML=g[y],d.append($);const L=()=>{$.setAttribute("transform",`translate(${p(k).toFixed(1)} ${O-18}) scale(0.78)`)};return L(),{get:()=>k,set:S=>{k=M(S),L()}}},tray(m){i.replaceChildren();for(const y of m){const k=document.createElement("button");k.type="button",k.className="btn small tray-key",k.textContent=y.label,k.addEventListener("click",y.onClick),i.append(k)}},trayEnabled(m){for(const y of Array.from(i.children))m?y.removeAttribute("disabled"):y.setAttribute("disabled","true")},clearArrows(){for(const m of Array.from(c.querySelectorAll(".line-arrow")))m.remove()},band(m,y){const k=p(Math.min(m,y)),$=p(Math.max(m,y));l.append(N("rect",{class:"hint-band",x:k.toFixed(1),y:String(O-60),width:($-k).toFixed(1),height:"120",rx:"10"}))},bracket(m,y,k){const $=p(m),L=p(y),S=O+74,E=N("g",{class:"hint-bracket"});E.append(N("path",{d:`M${$.toFixed(1)} ${S-12} v12 H${L.toFixed(1)} v-12`}));const Z=N("text",{x:(($+L)/2).toFixed(1),y:String(S+30),"text-anchor":"middle"});Z.textContent=k,E.append(Z),l.append(E)},count(m,y){const k=m<=y?s:-s,$=Math.round(Math.abs(y-m)/s);for(let L=1;L<=$;L++){const S=m+k*L,E=N("text",{class:"hint-count",x:p(S).toFixed(1),y:String(O-34),"text-anchor":"middle"});E.textContent=String(L),l.append(E)}},arrow(m,y,k,$="plus",L=0,S){const E=p(m),Z=p(y),Q=O-56-L*34,H=N("g",{class:`line-arrow ${$}`});H.append(N("path",{d:`M${E.toFixed(1)} ${O-6} C${E.toFixed(1)} ${Q} ${Z.toFixed(1)} ${Q} ${Z.toFixed(1)} ${O-6}`,fill:"none"}));const tt=Z>=E?1:-1;H.append(N("path",{class:"head",d:`M${Z.toFixed(1)} ${O-6} l${(-12*tt).toFixed(1)} -14 l${(24*tt).toFixed(1)} 0 Z`}));const z=N("text",{x:((E+Z)/2).toFixed(1),y:String(Q-8),"text-anchor":"middle"});if(z.textContent=k,H.append(z),S!==void 0){const I=N("g",{class:"order"});I.append(N("circle",{cx:E.toFixed(1),cy:String(O-26),r:"15"}));const _=N("text",{x:E.toFixed(1),y:String(O-19),"text-anchor":"middle"});_.textContent=String(S),I.append(_),H.append(I)}return c.append(H),H},clearHints(){l.replaceChildren()},destroy(){for(const m of w)m();o.remove()}}}function Jn(e){const t=G(e),n=1+Math.floor(t()*3),s=n+1+Math.floor(t()*3),r=2+Math.floor(t()*5),o=0,a=o+(s-n)*r,i=o+s*r,l=Math.ceil((i+4)/5)*5;return{config:{start1:o,speed1:s,start2:a,speed2:n,meet:r,from:0,to:l},solution:r,check:c=>c===r,hints:[{text:`ההפרש ביניהם הוא ${u(a-o)}`},{text:`בכל צעד הוא נסגר ב־${u(s-n)}`},{text:`${u(a-o)} : ${u(s-n)}`},{text:`אחרי ${u(r)} צעדים`}],explain:[`ההפרש ההתחלתי הוא ${u(a-o)}.`,`בכל צעד הוא נסגר ב־${u(s-n)}.`,`${u(a-o)} : ${u(s-n)} = ${u(r)}.`]}}function Qn(e,t){const{start1:n,speed1:s,start2:r,speed2:o,from:a,to:i,meet:l}=e.config,c=document.createElement("div");c.className="board-wrap chase-board";const d=Ot({from:a,to:i,tickStep:1,labelEvery:5}),f=d.token(n,"frog"),p=d.token(r,"ship");c.append(d.el);const x=document.createElement("input");x.type="range",x.min="0",x.max=String(l+3),x.value="0",x.className="step-slider";const M=document.createElement("p");M.className="step-label";const h=g=>{f.set(Math.min(i,n+s*g)),p.set(Math.min(i,r+o*g)),M.textContent=`${g}`};h(0),x.addEventListener("input",()=>h(Number(x.value))),c.append(x,M);const w=le({max:99},t);return c.append(w.el),{el:c,answer:()=>w.value(),hint(g){g===1&&d.band(n,r),g===2&&(x.value="1",h(1)),g===3&&(x.value="2",h(2)),g>=4&&(x.value=String(l),h(l),w.set(l))},demonstrate(){x.value=String(l),h(l),w.set(l)},place:g=>w.set(g),destroy(){d.destroy(),c.remove()}}}const tr={kind:"chase",generate:Jn,mount:Qn},er="http://www.w3.org/2000/svg",ve=900,Le=600,nr=18,rr=2.5;function ct(e,t={}){const n=document.createElementNS(er,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function rt(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function qt(e,t,n=rr){return rt(e,t)<=n}function Je(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function sr(e,t){const n=e.a.x,s=e.a.y,r=e.b.x,o=e.b.y,a=t.a.x,i=t.a.y,l=t.b.x,c=t.b.y,d=(n-r)*(i-c)-(s-o)*(a-l);if(Math.abs(d)<1e-9)return null;const f=((n-a)*(i-c)-(s-i)*(a-l))/d;return{x:n+f*(r-n),y:s+f*(o-s)}}function or(e,t){const n=e.b.x-e.a.x,s=e.b.y-e.a.y,r=e.a.x-t.c.x,o=e.a.y-t.c.y,a=n*n+s*s,i=2*(r*n+o*s),l=r*r+o*o-t.r*t.r,c=i*i-4*a*l;if(c<0)return[];const d=Math.sqrt(c);return(c===0?[-i/(2*a)]:[(-i-d)/(2*a),(-i+d)/(2*a)]).map(p=>({x:e.a.x+p*n,y:e.a.y+p*s}))}function Qe(e,t){const n=rt(e.c,t.c);if(n<1e-9||n>e.r+t.r||n<Math.abs(e.r-t.r))return[];const s=(e.r*e.r-t.r*t.r+n*n)/(2*n),r=e.r*e.r-s*s;if(r<0)return[];const o=Math.sqrt(r),a=e.c.x+s*(t.c.x-e.c.x)/n,i=e.c.y+s*(t.c.y-e.c.y)/n,l=-(t.c.y-e.c.y)*o/n,c=(t.c.x-e.c.x)*o/n;return[{x:a+l,y:i+c},{x:a-l,y:i-c}]}function ar(e){const t=document.createElement("div");t.className="board-wrap construct-board";const n=ct("svg",{class:"board construct",viewBox:`0 0 ${ve} ${Le}`}),s=ct("g",{class:"shapes"}),r=ct("g",{class:"points"});n.append(s,r),t.append(n);const o=document.createElement("div");o.className="tray",t.append(o);const a=[],i=[],l=[],c=[];let d="line",f=null,p=0;const x=()=>{r.replaceChildren();for(const y of i){const k=ct("text",{class:"cpoint-label",x:(y.p.x+14).toFixed(1),y:(y.p.y-12).toFixed(1)});k.textContent=y.text,r.append(k)}for(const y of a){const k=ct("circle",{class:`cpoint${f&&qt(f,y)?" pending":""}`,cx:y.x.toFixed(1),cy:y.y.toFixed(1),r:"9"});r.append(k)}},M=(y,k)=>{y.x<-40||y.x>ve+40||y.y<-40||y.y>Le+40||a.some($=>qt($,y))||(a.push(y),k&&i.push({p:y,text:k}),x())},h=()=>{const y=[];for(let k=0;k<l.length;k++){for(let $=k+1;$<l.length;$++){const L=sr(l[k],l[$]);L&&y.push(L)}for(const $ of c)y.push(...or(l[k],$))}for(let k=0;k<c.length;k++)for(let $=k+1;$<c.length;$++)y.push(...Qe(c[k],c[$]));for(const k of y)M(k)},w=(y,k)=>{const $=k.x-y.x,L=k.y-y.y,E=2e3/(Math.hypot($,L)||1);s.append(ct("line",{class:"cline",x1:(y.x-$*E).toFixed(1),y1:(y.y-L*E).toFixed(1),x2:(y.x+$*E).toFixed(1),y2:(y.y+L*E).toFixed(1)}))},g={el:t,addPoint:M,addLine(y,k){l.push({a:y,b:k}),w(y,k),M(y),M(k),h(),p++,e()},addCircle(y,k){const $=rt(y,k);$<1||(c.push({c:y,r:$}),s.append(ct("circle",{class:"ccircle",cx:y.x.toFixed(1),cy:y.y.toFixed(1),r:$.toFixed(1)})),h(),p++,e())},points:()=>[...a],lines:()=>[...l],circles:()=>[...c],drawn:()=>p,destroy:()=>t.remove()},v=y=>{const k=n.getScreenCTM();if(!k)return;const $=new DOMPoint(y.clientX,y.clientY).matrixTransform(k.inverse());let L=null,S=nr;for(const E of a){const Z=rt(E,{x:$.x,y:$.y});Z<S&&(S=Z,L=E)}if(L){if(!f){f=L,x();return}if(qt(f,L)){f=null,x();return}d==="line"?g.addLine(f,L):g.addCircle(f,L),f=null,x()}};n.addEventListener("pointerdown",v);const m=()=>{o.replaceChildren();for(const[y,k]of[["line","ישר"],["circle","מעגל"]]){const $=document.createElement("button");$.type="button",$.className=`btn small tray-key${d===y?" primary":""}`,$.textContent=k,$.addEventListener("click",()=>{d=y,f=null,m(),x()}),o.append($)}};return m(),g}function ir(e,t){const{a:n,b:s}=e,r=Je(n,s),o=s.x-n.x,a=s.y-n.y;return t.lines.some(i=>{const l=i.b.x-i.a.x,c=i.b.y-i.a.y,d=l*o+c*a,f=Math.hypot(l,c)*Math.hypot(o,a);return f===0||Math.abs(d/f)>.03?!1:Math.abs((i.b.x-i.a.x)*(i.a.y-r.y)-(i.a.x-r.x)*(i.b.y-i.a.y))/Math.hypot(l,c)<6})}function lr(e,t){const{goal:n,a:s,b:r}=e;if(n==="midpoint")return t.points.some(a=>qt(a,Je(s,r),6));if(n==="perpendicular")return ir(e,t);const o=rt(s,r);return t.points.some(a=>Math.abs(rt(a,s)-o)<8&&Math.abs(rt(a,r)-o)<8)}function ce(e,t){const n=G(e),s=300+Math.floor(n()*80)-40,r=260+Math.floor(n()*140),o={x:450-r/2,y:s},a={x:450+r/2,y:s},i={goal:t,a:o,b:a},l={midpoint:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","ישר בין שתי נקודות המפגש","הוא חותך את הקטע באמצע"],perpendicular:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","ישר בין שתי נקודות המפגש","הוא מאונך לקטע"],equilateral:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","נקודת המפגש רחוקה אותו דבר משתיהן","מחברים אותה לשתי הנקודות"]},c={midpoint:["שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.","הישר שמחבר אותן חוצה את הקטע ומאונך לו."],perpendicular:["שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.","הישר שמחבר אותן מאונך לקטע."],equilateral:["כל נקודה על המעגל רחוקה מהמרכז כאורך הקטע.","נקודת המפגש של שני המעגלים רחוקה כך משתי הקצוות, ולכן המשולש שווה צלעות."]};return{config:i,solution:{points:[],lines:[]},check:d=>lr(i,d),hints:l[t].map(d=>({text:d})),explain:c[t]}}function cr(e){return ce(e,"midpoint")}function dr(e){return ce(e,"perpendicular")}function fr(e){return ce(e,"equilateral")}function de(e,t){const{a:n,b:s,goal:r}=e.config,o=ar(t);o.addPoint(n,"A"),o.addPoint(s,"B"),o.addLine(n,s);const a=()=>({points:o.points(),lines:o.lines()}),i=()=>{o.addCircle(n,s),o.addCircle(s,n);const l=Qe({c:n,r:rt(n,s)},{c:s,r:rt(n,s)});if(r==="equilateral"){const c=l[0];c&&(o.addLine(n,c),o.addLine(s,c))}else l.length===2&&o.addLine(l[0],l[1])};return{el:o.el,answer:()=>o.drawn()>1?a():null,hint(l){l===1&&o.addCircle(n,s),l===2&&o.addCircle(s,n),l>=3&&i()},demonstrate:i,destroy:()=>o.destroy()}}const pr={kind:"build-midpoint",generate:cr,mount:de},hr={kind:"build-perpendicular",generate:dr,mount:de},ur={kind:"build-equilateral",generate:fr,mount:de};function _t(e,t,n){return e.a*t+e.b*n}function xr(e){const t=G(e),n=2+Math.floor(t()*8),s=1+Math.floor(t()*9),r={a:2+Math.floor(t()*2),b:0,total:null};r.total=_t(r,n,s);const o={a:1,b:1+Math.floor(t()*2),total:null};o.total=_t(o,n,s);let a={a:1,b:1,total:null};for(let l=0;l<20&&(a={a:1+Math.floor(t()*3),b:1+Math.floor(t()*3),total:null},a.a===r.a&&a.b===r.b||a.a===o.a&&a.b===o.b);l++);(a.a===o.a&&a.b===o.b||a.a===r.a&&a.b===r.b)&&(a={a:o.a+1,b:o.b+1,total:null});const i=_t(a,n,s);return{config:{rows:[r,o,a],valueA:n,valueB:s},solution:i,check:l=>l===i,hints:[{text:"השורה הראשונה מגלה את הראשון"},{text:`הראשון שווה ${u(n)}`},{text:`השני שווה ${u(s)}`},{text:`${u(a.a)} × ${u(n)} + ${u(a.b)} × ${u(s)} = ${u(i)}`}],explain:[`הראשון שווה ${u(n)} והשני שווה ${u(s)}.`,`${u(a.a)} × ${u(n)} + ${u(a.b)} × ${u(s)} = ${u(i)}.`]}}function gr(e){const t=document.createElement("div");t.className="quest-row";for(let r=0;r<e.a;r++){const o=document.createElement("span");o.className="quest-token a",t.append(o)}for(let r=0;r<e.b;r++){const o=document.createElement("span");o.className="quest-token b",t.append(o)}const n=document.createElement("span");n.className="quest-equals",n.textContent="=";const s=document.createElement("span");return s.className="quest-total",s.textContent=e.total===null?"?":String(e.total),t.append(n,s),t}function mr(e,t){const{rows:n,valueA:s,valueB:r}=e.config,o=document.createElement("div");o.className="board-wrap quest-board";const a=document.createElement("div");a.className="quest-table";for(const c of n)a.append(gr(c));const i=document.createElement("p");i.className="quest-found",o.append(a,i);const l=le({max:999},t);return o.append(l.el),{el:o,answer:()=>l.value(),hint(c){c===1&&a.firstElementChild?.classList.add("lit"),c===2&&(i.textContent=`= ${s}`),c===3&&(i.textContent=`= ${s} , = ${r}`),c>=4&&l.set(e.solution)},demonstrate(){l.set(e.solution)},place:c=>l.set(c),destroy:()=>o.remove()}}const yr={kind:"quest",generate:xr,mount:mr},kr="http://www.w3.org/2000/svg",X=720,j=40;function C(e,t={}){const n=document.createElementNS(kr,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function fe(e){const{range:t}=e,n=document.createElement("div");n.className="board-wrap";const s=C("svg",{class:"board grid-board",viewBox:`0 0 ${X} ${X}`});n.append(s);const r=C("g",{class:"hints"}),o=C("g",{class:"main"}),a=C("g",{class:"drag"});s.append(r,o,a);const i=(X-2*j)/(2*t),l=h=>X/2+h*i,c=h=>X/2-h*i,d=(h,w)=>({x:Math.max(-t,Math.min(t,Math.round((h-X/2)/i))),y:Math.max(-t,Math.min(t,Math.round((X/2-w)/i)))});for(let h=-t;h<=t;h++)o.append(C("line",{class:"grid-line",x1:String(j),y1:c(h).toFixed(1),x2:String(X-j),y2:c(h).toFixed(1)})),o.append(C("line",{class:"grid-line",x1:l(h).toFixed(1),y1:String(j),x2:l(h).toFixed(1),y2:String(X-j)}));o.append(C("line",{class:"grid-axis",x1:String(j-14),y1:c(0).toFixed(1),x2:String(X-j+14),y2:c(0).toFixed(1)})),o.append(C("line",{class:"grid-axis",x1:l(0).toFixed(1),y1:String(X-j+14),x2:l(0).toFixed(1),y2:String(j-14)})),o.append(C("path",{class:"grid-head",d:`M${X-j+14} ${c(0)} l-18 -9 v18 Z`})),o.append(C("path",{class:"grid-head",d:`M${l(0)} ${j-14} l-9 18 h18 Z`}));for(let h=-t;h<=t;h++){if(h===0)continue;const w=C("text",{class:"grid-label",x:l(h).toFixed(1),y:(c(0)+30).toFixed(1),"text-anchor":"middle"});w.textContent=String(h);const g=C("text",{class:"grid-label",x:(l(0)-16).toFixed(1),y:(c(h)+9).toFixed(1),"text-anchor":"end"});g.textContent=String(h),o.append(w,g)}const f=h=>{const w=s.getScreenCTM();if(!w)return{x:0,y:0};const g=new DOMPoint(h.clientX,h.clientY).matrixTransform(w.inverse());return d(g.x,g.y)},p=[],x=(h,w)=>h.map(g=>`${l(g.x+w.x).toFixed(1)},${c(g.y+w.y).toFixed(1)}`).join(" ");return{el:n,xOf:l,yOf:c,pick(h){let w={x:0,y:0};const g=C("g",{class:"pick hidden"});g.append(C("circle",{class:"pick-ring",r:"22"})),g.append(C("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),a.append(g);const v=()=>{g.classList.remove("hidden"),g.setAttribute("transform",`translate(${l(w.x).toFixed(1)} ${c(w.y).toFixed(1)})`)},m=y=>{w=f(y),v(),h(w),y.preventDefault()};return s.addEventListener("pointerdown",m),p.push(()=>s.removeEventListener("pointerdown",m)),{get:()=>w,set:y=>{w=y,v(),h(w)}}},shape(h,w=""){const g=C("polygon",{class:`shape ${w}`,points:x(h,{x:0,y:0})});return o.append(g),g},dragShape(h,w,g){let v={...w};const m=C("polygon",{class:"shape ghost",points:x(h,v)});a.append(m);const y=()=>m.setAttribute("points",x(h,v));let k=!1;const $=Z=>{k=!0,m.setPointerCapture(Z.pointerId),Z.preventDefault()},L=Z=>{k&&(v=f(Z),y(),g(v))},S=()=>{k=!1};m.addEventListener("pointerdown",$),m.addEventListener("pointermove",L),m.addEventListener("pointerup",S),m.addEventListener("pointercancel",S);const E=Z=>{Z.target!==m&&(v=f(Z),y(),g(v))};return s.addEventListener("pointerdown",E),p.push(()=>{m.removeEventListener("pointerdown",$),m.removeEventListener("pointermove",L),m.removeEventListener("pointerup",S),m.removeEventListener("pointercancel",S),s.removeEventListener("pointerdown",E)}),{get:()=>v,set:Z=>{v={...Z},y(),g(v)}}},scout(h,w){const g=l(w==="x"?h:0),v=c(w==="x"?0:h),m=C("g",{class:`scout ${w}`,transform:`translate(${g.toFixed(1)} ${v.toFixed(1)})`});m.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,o.append(m)},guide(h,w){const g=w==="x"?{x1:l(h),y1:j,x2:l(h),y2:X-j}:{x1:j,y1:c(h),x2:X-j,y2:c(h)};r.append(C("line",{class:"guide",x1:g.x1.toFixed(1),y1:g.y1.toFixed(1),x2:g.x2.toFixed(1),y2:g.y2.toFixed(1)}))},mirrorAxis(h){const w=h==="y"?{x1:l(0),y1:j-14,x2:l(0),y2:X-j+14}:{x1:j-14,y1:c(0),x2:X-j+14,y2:c(0)};o.append(C("line",{class:"mirror-axis",x1:w.x1.toFixed(1),y1:w.y1.toFixed(1),x2:w.x2.toFixed(1),y2:w.y2.toFixed(1)}))},span(h,w,g){const v=C("g",{class:"hint-span"});v.append(C("line",{x1:l(h.x).toFixed(1),y1:c(h.y).toFixed(1),x2:l(w.x).toFixed(1),y2:c(w.y).toFixed(1)}));const m=C("text",{x:((l(h.x)+l(w.x))/2).toFixed(1),y:((c(h.y)+c(w.y))/2-10).toFixed(1),"text-anchor":"middle"});m.textContent=g,v.append(m),r.append(v)},curve(h,w=""){const g=[];for(let m=-t;m<=t;m+=.25){const y=h(m);!Number.isFinite(y)||Math.abs(y)>t+1||g.push(`${l(m).toFixed(1)},${c(y).toFixed(1)}`)}const v=C("polyline",{class:`curve ${w}`,points:g.join(" ")});return o.append(v),v},dot(h,w=""){r.append(C("circle",{class:`grid-dot ${w}`,cx:l(h.x).toFixed(1),cy:c(h.y).toFixed(1),r:"11"}))},clearHints(){r.replaceChildren()},destroy(){for(const h of p)h();n.remove()}}}function wt(e){const t=e.slope===1?"x":e.slope===-1?"−x":`${e.slope<0?"−":""}${Math.abs(e.slope)}x`;return e.offset===0?t:e.offset>0?`${t} + ${e.offset}`:`${t} − ${Math.abs(e.offset)}`}function br(e){const t=G(e),n=6,s={slope:t()<.5?1:2,offset:0},r=Math.floor(t()*3),o=2+Math.floor(t()*3),a=r===0?{slope:s.slope,offset:o}:r===1?{slope:s.slope,offset:-o}:{slope:-s.slope,offset:0},i=[a],l=[{slope:s.slope,offset:o},{slope:s.slope,offset:-o},{slope:-s.slope,offset:0},{slope:s.slope,offset:o+1},{slope:-s.slope,offset:o}];for(const d of l){if(i.length>=4)break;i.some(f=>f.slope===d.slope&&f.offset===d.offset)||i.push(d)}for(let d=i.length-1;d>0;d--){const f=Math.floor(t()*(d+1)),p=i[d];i[d]=i[f],i[f]=p}const c=i.findIndex(d=>d.slope===a.slope&&d.offset===a.offset);return{config:{base:s,moved:a,options:i,correct:c,range:n},solution:c,check:d=>d===c,hints:[{text:"איפה הגרף חותך את הציר האנכי"},{text:`${u("x")} = ${u(0)} נותן ${u(a.offset)}`},{text:a.slope===s.slope?"אותה נטייה, רק גובה אחר":"הנטייה התהפכה"},{text:`הפונקציה היא ${u(wt(a))}`}],explain:[`הגרף המקורי הוא ${u(wt(s))}.`,a.slope===s.slope?`הוא הוזז ב־${u(a.offset)} למעלה או למטה, ולכן ${u(wt(a))}.`:`הוא שוקף סביב הציר האופקי, ולכן ${u(wt(a))}.`]}}function wr(e,t){const{base:n,moved:s,options:r,range:o}=e.config,a=document.createElement("div");a.className="board-wrap shift-board";const i=fe({range:o});i.curve(f=>n.slope*f+n.offset,"base"),i.curve(f=>s.slope*f+s.offset,"moved"),a.append(i.el);let l=null;const c=document.createElement("div");c.className="machine-choices";const d=()=>{c.replaceChildren(),r.forEach((f,p)=>{const x=document.createElement("button");x.type="button",x.className=`btn choice${l===p?" primary":""}`,x.textContent=wt(f),x.addEventListener("click",()=>{l=p,d(),t()}),c.append(x)})};return d(),a.append(c),{el:a,answer:()=>l,hint(f){f===1&&i.guide(0,"x"),f===2&&i.dot({x:0,y:s.offset},"lit"),f===3&&i.dot({x:1,y:s.slope+s.offset},"lit"),f>=4&&(l=e.solution,d(),t())},demonstrate(){l=e.solution,d(),t()},place:f=>{l=f,d(),t()},destroy(){i.destroy(),a.remove()}}}const Mr={kind:"shift",generate:br,mount:wr};function vr(e){const t=G(e),n=[],s=2+Math.floor(t()*2),r=2+Math.floor(t()*2);for(let l=0;l<s;l++){const c=1+Math.floor(t()*6);n.push({id:`x${l}`,x:t()<.3?-c:c,n:0})}for(let l=0;l<r;l++){const c=1+Math.floor(t()*9);n.push({id:`n${l}`,x:0,n:t()<.3?-c:c})}for(let l=n.length-1;l>0;l--){const c=Math.floor(t()*(l+1)),d=n[l];n[l]=n[c],n[c]=d}const o=n.reduce((l,c)=>l+c.x,0),a=n.reduce((l,c)=>l+c.n,0),i={};for(const l of n)i[l.id]=l.x!==0?"x":"n";return{config:{tiles:n,sumX:o,sumN:a},solution:i,check:l=>n.every(c=>l[c.id]===(c.x!==0?"x":"n")),hints:[{text:"אותו סוג הולך יחד"},{text:`הקופסה עם ${u("x")} מקבלת את האיברים עם ${u("x")}`},{text:"הקופסה השנייה מקבלת את המספרים"},{text:`${u(`${o}x`)} ו־${u(a)}`}],explain:[`האיברים עם ${u("x")} מצטרפים ל־${u(`${o}x`)}.`,`המספרים מצטרפים ל־${u(a)}.`,`הביטוי כולו הוא ${u(`${o}x ${a>=0?"+":"−"} ${Math.abs(a)}`)}.`]}}function Lr(e){return e.x!==0?e.x===1?"x":e.x===-1?"−x":`${e.x<0?"−":""}${Math.abs(e.x)}x`:e.n<0?`−${Math.abs(e.n)}`:String(e.n)}function $r(e,t){const{tiles:n}=e.config,s=document.createElement("div");s.className="board-wrap terms-board";const r=document.createElement("div");r.className="tile-pool";const o=document.createElement("div");o.className="bins";const a=document.createElement("div");a.className="bin";const i=document.createElement("div");i.className="bin",o.append(a,i),s.append(r,o);const l={};let c=!1;const d={x:document.createElement("p"),n:document.createElement("p")};d.x.className="bin-total",d.n.className="bin-total";const f=()=>{r.replaceChildren(),a.replaceChildren(p("x"),d.x),i.replaceChildren(p("1"),d.n);let x=0,M=0;for(const h of n){const w=document.createElement("button");w.type="button",w.className="term-tile",w.textContent=Lr(h);const g=l[h.id];w.addEventListener("click",()=>{l[h.id]=g==="x"?"n":g==="n"?void 0:"x",l[h.id]===void 0&&delete l[h.id],c=!0,f(),t()}),g==="x"?(a.append(w),x+=h.x):g==="n"?(i.append(w),M+=h.n):r.append(w)}d.x.textContent=`${x}x`,d.n.textContent=String(M)};function p(x){const M=document.createElement("p");return M.className="bin-head",M.textContent=x,M}return f(),{el:s,answer:()=>c?{...l}:null,hint(x){const M=n.filter(h=>h.x!==0);if(x===1&&M[0]&&(l[M[0].id]="x",c=!0),x===2)for(const h of M)l[h.id]="x";if(x===3)for(const h of n.filter(w=>w.x===0).slice(0,1))l[h.id]="n";if(x>=4)for(const h of n)l[h.id]=h.x!==0?"x":"n";c=!0,f(),t()},demonstrate(){for(const x of n)l[x.id]=x.x!==0?"x":"n";c=!0,f(),t()},place:x=>{for(const M of Object.keys(l))delete l[M];Object.assign(l,x),c=!0,f(),t()},destroy:()=>s.remove()}}const qr={kind:"like-terms",generate:vr,mount:$r};function ht(e,t){return e.a*t+e.b}function Qt(e){const t=e.a===1?"x":`${e.a}x`;return e.b===0?t:e.b>0?`${t} + ${e.b}`:`${t} − ${Math.abs(e.b)}`}function Er(e){const t=G(e),n={a:2+Math.floor(t()*4),b:Math.floor(t()*9)-4},s=[n];for(;s.length<4;){const o={a:Math.max(1,n.a+Math.floor(t()*3)-1),b:n.b+Math.floor(t()*5)-2};s.some(a=>a.a===o.a&&a.b===o.b)||s.push(o)}for(let o=s.length-1;o>0;o--){const a=Math.floor(t()*(o+1)),i=s[o];s[o]=s[a],s[a]=i}const r=s.findIndex(o=>o.a===n.a&&o.b===n.b);return{config:{rule:n,options:s,correct:r},solution:r,check:o=>o===r,hints:[{text:"הכנס מספר וראה מה יוצא"},{text:`${u(1)} נותן ${u(ht(n,1))}`},{text:`${u(2)} נותן ${u(ht(n,2))}, כל צעד מוסיף ${u(n.a)}`},{text:`הכלל הוא ${u(Qt(n))}`}],explain:[`הכלל הוא ${u(Qt(n))}.`,`${u(1)} → ${u(ht(n,1))} , ${u(2)} → ${u(ht(n,2))} , ${u(3)} → ${u(ht(n,3))}.`]}}function Sr(e,t){const{rule:n,options:s}=e.config,r=document.createElement("div");r.className="board-wrap machine-board";const o=document.createElement("div");o.className="machine",o.innerHTML=`
    <svg viewBox="0 0 320 180" class="machine-art" aria-hidden="true">
      <rect x="40" y="30" width="240" height="120" rx="18" class="machine-body"/>
      <circle cx="110" cy="90" r="26" class="machine-gear"/>
      <circle cx="210" cy="90" r="18" class="machine-gear"/>
      <path d="M0 90 h40 M280 90 h40" class="machine-pipe"/>
    </svg>`;const a=document.createElement("div");a.className="tray";const i=document.createElement("div");i.className="machine-table";const l=document.createElement("div");l.className="machine-choices",r.append(o,a,i,l);const c=[],d=()=>{i.replaceChildren();for(const M of c){const h=document.createElement("span");h.className="machine-row",h.textContent=`${M} → ${ht(n,M)}`,i.append(h)}},f=M=>{c.includes(M)||c.push(M),d()};for(const M of[1,2,3,4,5]){const h=document.createElement("button");h.type="button",h.className="btn small tray-key",h.textContent=String(M),h.addEventListener("click",()=>f(M)),a.append(h)}let p=null;const x=()=>{l.replaceChildren(),s.forEach((M,h)=>{const w=document.createElement("button");w.type="button",w.className=`btn choice${p===h?" primary":""}`,w.textContent=Qt(M),w.addEventListener("click",()=>{p=h,x(),t()}),l.append(w)})};return x(),{el:r,answer:()=>p,hint(M){M===1&&f(1),M===2&&f(2),M===3&&(f(3),f(4)),M>=4&&(p=e.solution,x(),t())},demonstrate(){p=e.solution,x(),t()},place:M=>{p=M,x(),t()},destroy:()=>r.remove()}}const Ar={kind:"machine",generate:Er,mount:Sr};function tn(e,t,n){const s=t*n,r=Math.min(...e)-s,o=Math.max(...e)+s;return{tickStep:t,labelEvery:n,from:Math.floor(r/s)*s,to:Math.ceil(o/s)*s}}function Zr(e){const t=G(e),n=t()<.6?1:2,s=3+Math.floor(t()*2),r=n*(t()<.5?0:-2),o=[],a=[r];for(let d=0;d<s;d++){const f=n*(2+Math.floor(t()*5)),p=t()<.45?-1:1;o.push(p*f),a.push(a[a.length-1]+p*f)}if(a[a.length-1]===r){const d=n*3;o.push(d),a.push(a[a.length-1]+d)}const i=a[a.length-1],l=tn(a,n,5),c=o.map(d=>u(d)).join(" , ");return{config:{...l,start:r,moves:o},solution:i,check:d=>d===i,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${c}`,`הסכום שלהם הוא ${u(i-r)}.`,`מ־${u(r)} מגיעים ל־${u(i)}.`]}}function Fr(e,t){const{from:n,to:s,tickStep:r,labelEvery:o,start:a,moves:i}=e.config,l=Ot({from:n,to:s,tickStep:r,labelEvery:o}),c=[a];let d=a;const f=i.map((h,w)=>{const g=d+h,v=l.arrow(d,g,(h>0?"+":"")+h,h>=0?"plus":"minus",w%2,w+1);return d=g,c.push(g),v}),p=l.token(a,"ship");let x=null;const M=l.chest(a,h=>{x=h,t()},"chest");return{el:l.el,answer:()=>x,hint(h){if(h===1&&f[0]?.classList.add("lit"),h===2&&p.set(c[1]??a),h===3&&p.set(c[2]??c[c.length-1]??a),h>=4){for(const w of f)w.classList.add("lit");p.set(c[c.length-1]),M.set(c[c.length-1])}},demonstrate(){p.set(c[c.length-1]),M.set(c[c.length-1])},place:h=>M.set(h),destroy:()=>l.destroy()}}const Nr={kind:"voyage",generate:Zr,mount:Fr},$e=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function Cr(e){const t=G(e),n=$e[Math.floor(t()*$e.length)],s=3+Math.floor(t()*2),r=t()<.5?0:-n[0],o=[],a=[r];for(let f=0;f<s;f++){const p=n[Math.floor(t()*n.length)];o.push(p),a.push(a[a.length-1]+p)}a[a.length-1]===r&&o.push(n[0]);const l=r+o.reduce((f,p)=>f+p,0),c=tn([...a,l],1,5),d=l-r;return{config:{...c,start:r,target:l,keys:n,route:o},solution:l,check:f=>f===l,hints:[{text:`מהצפרדע ליעד יש ${u(d)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${u(o[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${u(d)}.`,`${o.map(f=>u(f)).join(" ועוד ")} ביחד נותנים ${u(d)}.`]}}function Ir(e,t){const{from:n,to:s,tickStep:r,labelEvery:o,start:a,target:i,keys:l,route:c}=e.config,d=Ot({from:n,to:s,tickStep:r,labelEvery:o});d.flag(i);let f=a,p=!1;const x=d.chest(a,()=>{},"frog"),M=document.createElement("p");M.className="running-total";const h=()=>{M.textContent=p?`${u(f-a)}`:""},w=v=>{const m=f+v;m<n||m>s||(d.arrow(f,m,(v>0?"+":"")+v,v>=0?"plus":"minus"),f=m,p=!0,x.set(f),h(),t())},g=()=>{d.clearArrows(),f=a,p=!1,x.set(a),h(),t()};return d.tray([...l.map(v=>({label:(v>0?"+":"")+v,onClick:()=>w(v)})),{label:"התחלה",onClick:g}]),d.el.append(M),{el:d.el,answer:()=>p?f:null,hint(v){if(v===1&&d.band(Math.min(a,i),Math.max(a,i)),v===2&&M.classList.add("lit"),v===3&&(g(),w(c[0]??0)),v>=4){g();for(const m of c)w(m)}},demonstrate(){g();for(const v of c)w(v)},place:v=>{f=v,p=!0,x.set(v),h(),t()},destroy:()=>d.destroy()}}const Tr={kind:"jumps",generate:Cr,mount:Ir};function Br(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const qe=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function Gr(e){const t=G(e),n=6,s=qe[Math.floor(t()*qe.length)],r=t()<.5?"y":"x",o=r==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},a=Br(o,r);return{config:{range:n,shape:s,anchor:o,axis:r},solution:a,check:l=>l.x===a.x&&l.y===a.y,hints:[{text:`הציר ${r==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[r==="y"?`בשיקוף סביב הציר האנכי כל ${u("x")} מחליף סימן ו־${u("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${u("y")} מחליף סימן ו־${u("x")} נשאר.`,`${u(`(${o.x}, ${o.y})`)} הולך ל־${u(`(${a.x}, ${a.y})`)}.`]}}function Or(e,t){const{range:n,shape:s,anchor:r,axis:o}=e.config,a=e.solution,i=fe({range:n});i.mirrorAxis(o),i.shape(s.map(p=>({x:p.x+r.x,y:p.y+r.y})));const l=s.map(p=>o==="y"?{x:-p.x,y:p.y}:{x:p.x,y:-p.y});let c=null;const d=o==="y"?{x:-n+1,y:-n+2}:{x:-n+2,y:-n+1},f=i.dragShape(l,d,p=>{c=p,t()});return{el:i.el,answer:()=>c,hint(p){if(p===1&&i.guide(0,o==="y"?"x":"y"),p===2){const x=o==="y"?{x:0,y:r.y}:{x:r.x,y:0};i.span(r,x,u(Math.abs(o==="y"?r.x:r.y)))}p===3&&i.dot(a,"lit"),p>=4&&f.set(a)},demonstrate(){i.dot(a,"lit"),f.set(a)},place:p=>f.set(p),destroy:()=>i.destroy()}}const Pr={kind:"mirror",generate:Gr,mount:Or};function jr(){const e=document.createElement("div");e.className="board-wrap chain-board";const t=document.createElement("p");t.className="chain-goal";const n=document.createElement("p");n.className="chain-value";const s=document.createElement("p");s.className="chain-steps";const r=document.createElement("p");r.className="chain-hint";const o=document.createElement("div");return o.className="tray",e.append(t,n,s,r,o),{el:e,setValue:a=>{n.textContent=String(a)},setChain:a=>{s.textContent=a.join(" → ")},goal:a=>{t.textContent=a},keys:a=>{o.replaceChildren();for(const i of a){const l=document.createElement("button");l.type="button",l.className="btn small tray-key",l.textContent=i.label,l.addEventListener("click",i.onClick),o.append(l)}},mark:a=>{r.textContent=a},matched:a=>n.classList.toggle("matched",a),clearHints:()=>{r.textContent=""},destroy:()=>e.remove()}}function Hr(e){const t=G(e),n=[2,3,5],s=n[Math.floor(t()*n.length)],r=s===2?4+Math.floor(t()*4):s===3?3+Math.floor(t()*2):2+Math.floor(t()*2),o=s**r,a=[...new Set([s,...n])].sort((i,l)=>i-l);return{config:{base:s,exponent:r,target:o,keys:a},solution:o,check:i=>i===o,hints:[{text:`${u(o)} הוא חזקה של ${u(s)}`},{text:`${u(s)} × ${u(s)} = ${u(s*s)}`},{text:`צריך ${u(r)} פעמים ${u(s)}`},{text:"כך בונים את המספר"}],explain:[`${u(o)} = ${u(`${s}^${r}`)}.`,`${Array.from({length:r},()=>u(s)).join(" × ")} = ${u(o)}.`]}}function Rr(e,t){const{base:n,exponent:s,target:r,keys:o}=e.config,a=jr();a.goal(`${r}`);let i=1,l=["1"],c=!1;const d=()=>{a.setValue(i),a.setChain(l),a.matched(i===r)},f=x=>{i*x>r*100||(i*=x,l.push(`×${x}`),c=!0,d(),t())},p=()=>{i=1,l=["1"],c=!1,d(),t()};return a.keys([...o.map(x=>({label:`× ${x}`,onClick:()=>f(x)})),{label:"התחלה",onClick:p}]),d(),{el:a.el,answer:()=>c?i:null,hint(x){if(x===1&&a.mark(`${r} = ?`),x===2&&a.mark(`${n} × ${n} = ${n*n}`),x===3&&(p(),f(n),f(n)),x>=4){p();for(let M=0;M<s;M++)f(n)}},demonstrate(){p();for(let x=0;x<s;x++)f(n)},place:x=>{i=x,c=!0,l=[String(x)],d(),t()},destroy:()=>a.destroy()}}const Dr={kind:"powers",generate:Hr,mount:Rr},_r="http://www.w3.org/2000/svg",Vt=820,Ut=620,Lt=70;function J(e,t={}){const n=document.createElementNS(_r,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Vr(e){const{cols:t,rows:n,square:s=!1}=e,r=document.createElement("div");r.className="board-wrap";const o=J("svg",{class:"board rect-board",viewBox:`0 0 ${Vt} ${Ut}`});r.append(o);const a=J("g",{class:"hints"}),i=J("g",{class:"main"}),l=J("g",{class:"drag"});o.append(i,a,l);const c=Math.min((Vt-2*Lt)/t,(Ut-2*Lt)/n),d=Lt,f=Ut-Lt,p=g=>d+g*c,x=g=>f-g*c;for(let g=0;g<=t;g++)i.append(J("line",{class:"cell-line",x1:p(g).toFixed(1),y1:x(0).toFixed(1),x2:p(g).toFixed(1),y2:x(n).toFixed(1)}));for(let g=0;g<=n;g++)i.append(J("line",{class:"cell-line",x1:p(0).toFixed(1),y1:x(g).toFixed(1),x2:p(t).toFixed(1),y2:x(g).toFixed(1)}));const M=J("text",{class:"goal",x:String(Vt-30),y:"58","text-anchor":"end"});i.append(M);const h=[];return{el:r,corner(g,v){let m={...g};const y=J("rect",{class:"area-rect"}),k=J("circle",{class:"area-handle",r:"20"}),$=J("text",{class:"area-text",x:"30",y:"58","text-anchor":"start"}),L=J("text",{class:"side-label","text-anchor":"middle"}),S=J("text",{class:"side-label","text-anchor":"middle"});l.append(y,L,S,$,k);const E=()=>{y.setAttribute("x",p(0).toFixed(1)),y.setAttribute("y",x(m.h).toFixed(1)),y.setAttribute("width",(m.w*c).toFixed(1)),y.setAttribute("height",(m.h*c).toFixed(1)),k.setAttribute("cx",p(m.w).toFixed(1)),k.setAttribute("cy",x(m.h).toFixed(1)),$.textContent=`${m.w} × ${m.h} = ${m.w*m.h}`,L.setAttribute("x",p(m.w/2).toFixed(1)),L.setAttribute("y",(x(0)+44).toFixed(1)),L.textContent=String(m.w),S.setAttribute("x",(p(0)-32).toFixed(1)),S.setAttribute("y",(x(m.h/2)+10).toFixed(1)),S.textContent=String(m.h)};E();const Z=_=>{const xt=o.getScreenCTM();if(!xt)return m;const q=new DOMPoint(_.clientX,_.clientY).matrixTransform(xt.inverse());let T=Math.round((q.x-d)/c),R=Math.round((f-q.y)/c);if(s){const ge=Math.max(T,R);T=ge,R=ge}return{w:Math.max(1,Math.min(t,T)),h:Math.max(1,Math.min(n,R))}};let Q=!1;const H=_=>{Q=!0,k.setPointerCapture(_.pointerId),_.preventDefault()},tt=_=>{Q&&(m=Z(_),E(),v(m))},z=()=>{Q=!1};k.addEventListener("pointerdown",H),k.addEventListener("pointermove",tt),k.addEventListener("pointerup",z),k.addEventListener("pointercancel",z);const I=_=>{_.target!==k&&(m=Z(_),E(),v(m))};return o.addEventListener("pointerdown",I),h.push(()=>{k.removeEventListener("pointerdown",H),k.removeEventListener("pointermove",tt),k.removeEventListener("pointerup",z),k.removeEventListener("pointercancel",z),o.removeEventListener("pointerdown",I)}),{get:()=>m,set:_=>{m={..._},E(),v(m)}}},goal(g){M.textContent=g},strip(g,v){a.append(J("rect",{class:"hint-strip",x:p(0).toFixed(1),y:x(v).toFixed(1),width:(g*c).toFixed(1),height:(v*c).toFixed(1)}))},clearHints(){a.replaceChildren()},destroy(){for(const g of h)g();r.remove()}}}function Ee(e,t,n){const s=[];for(let r=1;r<=t;r++){if(e%r!==0)continue;const o=e/r;o>=1&&o<=n&&s.push({w:r,h:o})}return s}function Ur(e){const t=G(e),n=12,s=10;let r=24;for(let i=0;i<40;i++){const l=2+Math.floor(t()*9),c=2+Math.floor(t()*8),d=l*c;if(Ee(d,n,s).filter(f=>f.w>1&&f.h>1).length>=2){r=d;break}}const o=Ee(r,n,s),a=o.find(i=>i.w>1&&i.h>1)??o[0];return{config:{cols:n,rows:s,target:r,square:!1},solution:a,check:i=>i.w*i.h===r,hints:[{text:`צריך מלבן ששטחו ${u(r)}`},{text:`${u(a.w)} בשורה`},{text:`${u(a.w)} כפול ${u(a.h)}`},{text:"כך זה נראה"}],explain:[`${u(a.w)} × ${u(a.h)} = ${u(r)}.`,`יש גם דרכים אחרות: ${o.map(i=>u(`${i.w}×${i.h}`)).join(" , ")}.`]}}function en(e,t){const{cols:n,rows:s,target:r,square:o}=e.config,a=Vr({cols:n,rows:s,square:o});a.goal(`= ${r}`);const i=e.solution;let l=!1;const c=a.corner({w:1,h:1},()=>{l=!0,t()});return{el:a.el,answer:()=>l?c.get():null,hint(d){d===1&&a.goal(`= ${r}`),d===2&&a.strip(i.w,1),d===3&&a.strip(i.w,i.h),d>=4&&c.set(i)},demonstrate(){c.set(i)},place:d=>c.set(d),destroy:()=>a.destroy()}}const Xr={kind:"product",generate:Ur,mount:en};function Yr(e){const t=G(e),n=12,s=12,r=3+Math.floor(t()*8),o=r*r;return{config:{cols:n,rows:s,target:o,square:!0},solution:{w:r,h:r},check:a=>a.w===r&&a.h===r,hints:[{text:`ריבוע ששטחו ${u(o)}`},{text:"אותו מספר בשורה ובעמודה"},{text:`${u(r)} בשורה`},{text:`${u(r)} כפול ${u(r)}`}],explain:[`${u(r)} × ${u(r)} = ${u(o)}.`,`הצלע היא השורש הריבועי של ${u(o)}.`]}}const Wr={kind:"perfect-square",generate:Yr,mount:en};function Kr(e){const t=G(e),n=6,s=()=>{const o=1+Math.floor(t()*(n-1));return t()<.5?-o:o},r={x:s(),y:s()};return{config:{range:n,target:r},solution:r,check:o=>o.x===r.x&&o.y===r.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${u(`(${r.x}, ${r.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${u(r.x)}, והצופה על הציר האנכי ב־${u(r.y)}.`,`המפגש הוא ${u(`(${r.x}, ${r.y})`)}.`]}}function zr(e,t){const{range:n,target:s}=e.config,r=fe({range:n});r.scout(s.x,"x"),r.scout(s.y,"y");let o=null;const a=r.pick(i=>{o=i,t()});return{el:r.el,answer:()=>o,hint(i){i===1&&r.guide(s.x,"x"),i===2&&r.guide(s.y,"y"),i===3&&r.dot(s,"lit"),i>=4&&a.set(s)},demonstrate(){r.dot(s,"lit"),a.set(s)},place:i=>a.set(i),destroy:()=>r.destroy()}}const Jr={kind:"quadrant",generate:Kr,mount:zr},Se=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function Qr(e){const t=G(e),n=Se[Math.floor(t()*Se.length)],s=Math.round((n.to-n.from)/n.tickStep),r=[];for(let i=1;i<s;i++)i%n.labelEvery!==0&&r.push(n.from+i*n.tickStep);const o=r[Math.floor(t()*r.length)],a=n.tickStep*n.labelEvery;return{config:{...n,target:o},solution:o,check:i=>i===o,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${u(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${u(a)}.`,`כל סימון קטן שווה ${u(n.tickStep)}.`,`היעד הוא ${u(o)}.`]}}function ts(e,t){const{from:n,to:s,tickStep:r,labelEvery:o,target:a}=e.config,i=Ot({from:n,to:s,tickStep:r,labelEvery:o});i.flag(a);let l=null;const c=i.chest(n,p=>{l=p,t()});l=null;const d=n+Math.floor((a-n)/(r*o))*r*o,f=d+r*o;return{el:i.el,answer:()=>l,hint(p){p===1&&i.band(d,f),p===2&&i.bracket(n,n+r,String(r)),p===3&&i.count(d,a),p>=4&&c.set(a)},demonstrate(){i.count(d,a),c.set(a)},place:p=>c.set(p),destroy:()=>i.destroy()}}const es={kind:"treasure-line",generate:Qr,mount:ts};const nn={"treasure-line":es,jumps:Tr,voyage:Nr,quadrant:Jr,mirror:Pr,product:Xr,powers:Dr,"perfect-square":Wr,"alphametic-sum":Fn,"alphametic-product":Nn,"angle-aim":Rn,"angle-straight":Dn,"angle-triangle":_n,"angle-isosceles":Vn,machine:Ar,"like-terms":qr,balance:Yn,"balance-both":Wn,quest:yr,chase:tr,shift:Mr,"build-midpoint":pr,"build-perpendicular":hr,"build-equilateral":ur};function ns(e){return nn[e]}function rn(e){return nn[e]!==void 0}const ut=5;function Xt(e,t){return Math.max(1,ut-e-t)}function rs(e,t){return Math.max(0,t-e)}const ss=.8;function pe(){return[...oe].sort((e,t)=>e.order-t.order)}function Pt(e,t){return e.missions[t]??0}function sn(e,t){return Pt(e,t)>0}function os(e,t){return rn(e.kind)&&e.requires.every(n=>sn(t,n))}function as(e,t){return Ue(e.id).filter(n=>os(n,t))}function jt(e){return Ue(e.id).filter(t=>rn(t.kind))}function is(e,t){return jt(e).reduce((n,s)=>n+Pt(t,s.id),0)}function ls(e){return jt(e).length*ut}function cs(e,t){const n=ls(e);return n===0?!1:is(e,t)>=ss*n}function Ht(e,t){const n=pe(),s=n.findIndex(r=>r.id===e.id);return s<=0?!0:cs(n[s-1],t)}function ds(e,t){const n=jt(e);return n.length>0&&n.every(s=>sn(t,s.id))}function fs(e){const t=pe(),n=t.filter(s=>Ht(s,e));return n.find(s=>!ds(s,e))??n[n.length-1]??t[0]}const At={width:2e3,height:1e3};function te(e,t){return{x:(e+180)/360*At.width,y:(90-t)/180*At.height}}const ps={x:0,y:0,w:At.width,h:At.height};function hs(e,t){const n=te(e.lon0,e.lat0),s=te(e.lon1,e.lat1);let r=Math.min(n.x,s.x),o=Math.min(n.y,s.y),a=Math.abs(s.x-n.x),i=Math.abs(s.y-n.y);if(a/i<t){const l=i*t;r-=(l-a)/2,a=l}else{const l=a/t;o-=(l-i)/2,i=l}return{x:r,y:o,w:a,h:i}}function us(e,t,n){const s=te(e,t);return{left:(s.x-n.x)/n.w*100,top:(s.y-n.y)/n.h*100}}function on(e,t,n){const s=b("div",{class:"map-art","aria-hidden":"true"});s.innerHTML=e;const r=s.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const o=b("div",{class:"map-markers"});for(const a of n){const{left:i,top:l}=us(a.lon,a.lat,t),c=a.onClick?"button":"div",d=b(c,{class:`marker ${a.state}`,style:`left:${i.toFixed(2)}%; top:${l.toFixed(2)}%`});c==="button"&&d.setAttribute("type","button");const f=b("span",{class:"marker-icon"});f.innerHTML=a.icon;const p=b("span",{class:"marker-caption"},b("span",{class:"marker-label"},a.label),...a.sub?[b("span",{class:"marker-sub"},a.sub)]:[]);d.append(f,p),a.onClick&&d.addEventListener("click",a.onClick),o.append(d)}return b("div",{class:"map"},s,o)}const an=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,xs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,gs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function ms(){const e=V(),t=pe().map(n=>{const s=me(n).length,r=me(n).filter(o=>e.conquered.includes(o.id)).length;return Ht(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${s}`,state:"continent",icon:xs,onClick:()=>K(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:gs}});return W({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},on(an,ps,t),b("div",{class:"row"},Yt("שדרוג הגיבורים","/upgrades"),Yt("תפריט המשימות","/missions"),Yt("הגיבורים שלי","/setup")))}function Yt(e,t){const n=b("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>K(t)),n}const Wt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,ys=5/3;function ks(e){const t=ae(e.id??"");if(!t)return W({title:"יבשת לא נמצאה"},b("p",{},"חזרה למפת העולם."));const n=V();if(!Ht(t,n)){const r=b("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>K("/")),W({title:t.name,subtitle:t.domain},b("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),b("div",{class:"row"},r))}const s=t.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:Wt}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:Wt}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:Wt,onClick:()=>K(`/battle/${r.id}`)});return W({title:t.name,subtitle:t.domain},on(an,hs(t.view,ys),s),b("div",{class:"row"},Ae("שדרוג הגיבורים","/upgrades"),Ae("תפריט המשימות",`/missions/${t.id}`)))}function Ae(e,t){const n=b("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>K(t)),n}function it(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Zt(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function bs(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function lt(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function ee(e,t){let n=null,s=1/0;for(const r of t){const o=it(e,r);(o<s-1e-9||Math.abs(o-s)<=1e-9&&n&&r.id<n.id)&&(n=r,s=o)}return n}const ws=2.2;function Ms(e,t){const n=bs(e,t.side);if(n.length===0)return{kind:"idle"};const s=ee(t,n.filter(a=>a.stats.range<=1.5));if(t.stats.range>2&&s&&it(t,s)<ws){const a=t.x-s.x,i=t.y-s.y,l=Math.hypot(a,i)||1;return{kind:"move",x:t.x+a/l*3,y:t.y+i/l*3}}const o=ee(t,n);return o?{kind:"attack",targetId:o.id}:{kind:"idle"}}const ne=1/30,Ze=50;function vs(e,t){return e*Ze/(Ze+t)}const Fe=.3,ln=.45,cn={arrow:14,fire:9,heal:12},Ls=.85,$s=.15;function qs(e,t,n,s){const r=t==="player"?1:-1,o=t==="player"?3:n-3,a=s/2,i=[0,-1.6,1.6];return e.map((l,c)=>({x:o+(l.stats.range<=1.5?2*r:0),y:a+(i[c]??0)}))}function Es(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=G(e.seed),s={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},r=(o,a)=>{const i=qs(o,a,t.width,t.height);o.forEach((l,c)=>{const d=i[c];s.units.push({id:`${a}-${l.cls}-${c}`,side:a,cls:l.cls,name:l.name,gender:l.gender,x:d.x+bt(n,-.6,.6),y:d.y+bt(n,-.6,.6),hp:l.stats.hp,maxHp:l.stats.hp,stats:l.stats,order:a===s.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:bt(n,0,1/l.stats.attackRate),healCooldown:bt(n,0,l.stats.healRate??3),facing:a==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(e.player,"player"),r(e.enemy,"enemy"),s}function Kt(e,t,n){const s=lt(e,t);s?.alive&&(s.order=n)}function Ne(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function Ce(e,t){const n=lt(e,t);if(!n?.alive||!n.stats.healing)return null;let s=null;for(const r of Zt(e,n.side))r.id===n.id||r.hp>=r.maxHp||it(n,r)>n.stats.range||(!s||r.hp/r.maxHp<s.hp/s.maxHp)&&(s=r);return s}function Ss(e,t){const n=lt(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function As(e,t,n){const s=lt(e,t),r=lt(e,n),o=s?.stats.healing;return!s?.alive||!o||s.healCooldown>0||!r?.alive||r.side!==s.side||r.id===s.id||it(s,r)>s.stats.range?!1:(dn(e,s,r,o),!0)}function dn(e,t,n,s){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:cn.heal}),t.healCooldown=t.stats.healRate??3}function Zs(e,t=ne){if(!e.winner){e.time+=t,Fs(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),Ns(e,n),Cs(e,n,t));Bs(e),Gs(e),Os(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Fs(e,t){const n=[];for(const s of e.projectiles){const r=lt(e,s.targetId);if(!r||!r.alive)continue;const o=r.x-s.x,a=r.y-s.y,i=Math.hypot(o,a),l=s.speed*t;if(i<=l){if(s.kind==="heal"){const c=Math.min(r.maxHp-r.hp,s.amount);r.hp+=c,e.events.push({kind:"heal",unitId:r.id,amount:c,time:e.time})}else fn(e,r,s.amount);continue}s.x+=o/i*l,s.y+=a/i*l,s.angle=Math.atan2(a,o),n.push(s)}e.projectiles=n}function Ns(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const s=Zt(e,t.side).filter(o=>o.id!==t.id&&o.hp<o.maxHp*Ls&&it(t,o)<=t.stats.range);let r=null;for(const o of s)(!r||o.hp/o.maxHp<r.hp/r.maxHp)&&(r=o);r&&dn(e,t,r,n)}function Cs(e,t,n){const s=Is(e,t);if(s.kind==="idle"){t.targetId=null;return}if(s.kind==="move"){t.targetId=null,Ie(t,s.x,s.y,n);return}const r=lt(e,s.targetId);if(!r||!r.alive){t.targetId=null;return}if(t.targetId=r.id,it(t,r)>t.stats.range){Ie(t,r.x,r.y,n);return}t.facing=r.x>=t.x?1:-1,t.cooldown<=0&&Ts(e,t,r)}function Is(e,t){const n=t.order;if(n.kind==="move")if(it(t,n)<=$s)t.order=Ne(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const s=lt(e,t.order.targetId);if(s?.alive)return{kind:"attack",targetId:s.id};t.order=Ne(e,t)}if(t.order.kind==="hold"){const s=e.units.filter(o=>o.alive&&o.side!==t.side&&it(t,o)<=t.stats.range),r=ee(t,s);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return Ms(e,t)}function Ie(e,t,n,s){const r=t-e.x,o=n-e.y,a=Math.hypot(r,o);if(a<1e-6)return;const i=Math.min(a,e.stats.speed*s);e.x+=r/a*i,e.y+=o/a*i,Math.abs(r)>1e-6&&(e.facing=r>0?1:-1)}function Ts(e,t,n){const s=vs(t.stats.attack,n.stats.defense)*(1+bt(e.rng,-Fe,Fe));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){fn(e,n,s);return}const r=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:r,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:cn[r]})}function fn(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function Bs(e){const t=e.units.filter(s=>s.alive),n=ln*2;for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const o=t[s],a=t[r],i=a.x-o.x,l=a.y-o.y,c=Math.hypot(i,l);if(c>=n)continue;const d=(n-c)/2,f=c<1e-6?1:i/c,p=c<1e-6?0:l/c;o.x-=f*d,o.y-=p*d,a.x+=f*d,a.y+=p*d}}function Gs(e){const t=ln;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function Os(e){const t=Zt(e,"player").length,n=Zt(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const Mt={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function Ft(e,t){return Mt[e][t]}const Nt={warrior:Mt.warrior.m,archer:Mt.archer.m,mage:Mt.mage.m},he={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},Ps={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},ue={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},xe=[2,3,5,8,12,17,23,30],pn=xe.length,js=.08;function Hs(e){return e>=pn?null:xe[e]}function hn(e){return 1+js*e}const Te=8;function Rs(e,t,n){return e*hn(n)}function Ds(e){let t=0;for(let n=0;n<Math.min(e,pn);n++)t+=xe[n];return t}const un=["warrior","archer","mage"],_s={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Vs=["hp","attack","defense"];function Us(e,t){const s={...he[e]};for(const r of ue[e]){const o=t[r]??0;if(o<=0)continue;const a=s[r];typeof a=="number"&&(s[r]=a*hn(o))}return s}function Xs(e){return un.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||Nt[t],gender:n.gender,stats:Us(t,n.levels)}})}function Ys(e){return un.map(t=>{const n={...he[t]};for(const s of Vs){const r=n[s];typeof r=="number"&&(n[s]=r*e)}return{cls:t,name:_s[t],gender:"m",stats:n}})}function Ws(e,t,n){const s=ie(e);return!s||s.fortress.home?null:{player:Xs(t),enemy:Ys(s.fortress.difficulty),seed:n,manual:"player"}}let Et=null;function Ks(e){Et=e}function zs(e){return Et&&Et.fortressId===e?Et:null}const et={x:64,y:84},nt={x:56,y:58},ot={x:77,y:56},Ct={x:66,y:50},It={x:60,y:52},Be={x:100,y:70},Tt={x:99,y:51};function Js(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function B(e,t,n,s,r=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${s})${r}`)}function Qs(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function to(e,t){const{phase:n,stride:s,time:r}=t,o=Math.sin(n)*s,a=Math.sin(n*2)*s,i=Math.sin(r*2.1)*(1-s),l=Qs(t.sinceAttack);B(e.legBack,o*26,et.x,et.y),B(e.legFront,-o*26,et.x,et.y),B(e.cloak,o*9+i*1.6,It.x,It.y),B(e.robe,o*4+i*1.2,et.x,et.y+20),B(e.quiver,o*6,nt.x,nt.y);const c=-Math.abs(a)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${c.toFixed(2)}) rotate(${(o*2+i*.9).toFixed(2)} ${et.x} ${et.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(c*1.15).toFixed(2)}) rotate(${(-o*2.5+i*1.4).toFixed(2)} ${Ct.x} ${Ct.y})`),t.cls){case"warrior":{B(e.armBack,-o*14,nt.x,nt.y),B(e.armFront,o*10+l*60,ot.x,ot.y),B(e.sword,l*42,Tt.x,Tt.y),St(e.swoosh,t.sinceAttack<.42?Math.max(0,l)*.9:0);break}case"archer":{const d=t.sinceAttack<.42?l:-.35;if(B(e.armFront,o*5,ot.x,ot.y),B(e.armBack,-o*8-d*16,nt.x,nt.y),e.arrow){const f=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=f?"0":"1",e.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}e.bow&&B(e.bow,d*4,104,68),St(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{B(e.armBack,-o*10,nt.x,nt.y),B(e.armFront,o*6+l*26,ot.x,ot.y),B(e.staff,l*18,Be.x,Be.y);const d=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(r*4);e.orb&&Ge(e.orb,d,100,20),e.orbHalo&&Ge(e.orbHalo,d*1.1,100,20);const f=t.sinceAttack>=0&&t.sinceAttack<.45;St(e.swoosh,f?1-t.sinceAttack/.45:0),e.swoosh&&f&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function St(e,t){e&&(e.style.opacity=t.toFixed(2))}function Ge(e,t,n,s){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(s*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function eo(e,t){const n=Math.min(1,t),s=1-Math.pow(1-n,3);B(e.legBack,s*30,et.x,et.y),B(e.legFront,-s*20,et.x,et.y),B(e.armBack,s*40,nt.x,nt.y),B(e.armFront,-s*60,ot.x,ot.y),B(e.sword,s*50,Tt.x,Tt.y),St(e.swoosh,0),B(e.head,s*18,Ct.x,Ct.y),B(e.cloak,s*12,It.x,It.y)}const no=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,ro=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,so=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,oo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,ao=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,io=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,lo=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,co=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Y=100,pt=128,Oe=2.05,Pe=.7,fo="http://www.w3.org/2000/svg",po={"warrior-f":ro,"warrior-m":so,"archer-f":oo,"archer-m":ao,"mage-f":io,"mage-m":lo};function P(e,t={}){const n=document.createElementNS(fo,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function re(e,t,n){const s=e.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("width",String(t)),s.setAttribute("height",String(n)),s.setAttribute("overflow","visible"))}function ho(){const e=P("defs");return e.innerHTML=`
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
    </filter>`,e}function uo(e,t){const n=P("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*Y} ${e.arena.height*Y}`,preserveAspectRatio:"xMidYMid meet"}),s=P("g",{class:"arena-art"});s.innerHTML=no,re(s,e.arena.width*Y,e.arena.height*Y);const r=P("g",{class:"layer-ground"}),o=P("g",{class:"layer-units"}),a=P("g",{class:"layer-shots"}),i=P("g",{class:"layer-bursts"}),l=P("g",{class:"layer-text"}),c=P("rect",{class:"vignette",width:String(e.arena.width*Y),height:String(e.arena.height*Y),fill:"url(#fx-vignette)"});n.append(ho(),s,r,o,a,i,l,c);const d=new Map;for(const p of e.units){const x=xo(p);d.set(p.id,x),r.append(x.ring,x.shadow,x.dust),o.append(x.group)}const f=p=>{p.preventDefault();const x=n.getScreenCTM();if(!x)return;const M=new DOMPoint(p.clientX,p.clientY).matrixTransform(x.inverse()),h=M.x/Y,w=M.y/Y;let g=null,v=1;for(const m of e.units){if(!m.alive)continue;const y=Math.hypot(m.x-h,m.y-.5-w);y<v&&(v=y,g=m)}t({x:h,y:w,unit:g})};return n.addEventListener("pointerdown",f),{el:n,update(p,x){for(const h of p.units)d.get(h.id)?.update(h,p.time,x.has(h.id));const M=[...p.units].sort((h,w)=>Number(h.alive)-Number(w.alive)||h.y-w.y);for(const h of M){const w=d.get(h.id);w&&o.append(w.group)}go(a,p.projectiles,p.time),yo(i,p,d),ko(l,p,d)},destroy(){n.removeEventListener("pointerdown",f),n.remove()}}}function xo(e){const t=P("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=P("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),s=P("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});s.style.opacity="0";const r=P("g",{class:`unit ${e.side} ${e.cls}`}),o=P("g",{class:"sprite"});o.innerHTML=po[`${e.cls}-${e.gender}`]??"",re(o,pt,pt);const a=P("g",{class:"fallen"});a.innerHTML=co,re(a,pt,pt),a.setAttribute("transform",`scale(${Oe}) translate(${-pt/2} -122)`),a.style.display="none";const i=P("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),l=P("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});r.append(a,o,i,l);const c=Js(o),d={group:r,ring:t,shadow:n,dust:s,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(f,p,x){const M=f.x*Y,h=f.y*Y,w=Math.hypot(f.x-d.px,f.y-d.py);d.px=f.x,d.py=f.y,w>8e-4&&(d.phase+=w*4.4,d.lastMoveAt=p);const g=p-d.lastMoveAt<.25,v=p-f.lastAttackAt;f.alive?to(c,{cls:f.cls,phase:d.phase,stride:g?1:0,sinceAttack:v,time:p}):eo(c,(p-f.lastHitAt)/Pe);const m=f.alive&&v>=0&&v<.3?Math.sin(v/.3*Math.PI)*16*f.facing:0;r.setAttribute("transform",`translate(${(M+m).toFixed(1)} ${h.toFixed(1)})`),t.setAttribute("cx",M.toFixed(1)),t.setAttribute("cy",h.toFixed(1)),t.style.display=x&&f.alive?"":"none",n.setAttribute("cx",M.toFixed(1)),n.setAttribute("cy",(h+6).toFixed(1)),n.style.opacity=f.alive?"1":"0.4",s.setAttribute("cx",(M-26*f.facing).toFixed(1)),s.setAttribute("cy",(h+10).toFixed(1)),s.style.opacity=g&&f.alive?(.18+.12*Math.abs(Math.sin(p*9))).toFixed(2):"0";const y=p-f.lastHitAt<.18,k=y&&f.alive?1.05:1,$=Oe*k;o.setAttribute("transform",`scale(${(f.facing*$).toFixed(3)} ${$.toFixed(3)}) translate(${-pt/2} -122)`);const L=f.alive?0:(p-f.lastHitAt)/Pe;o.style.display=f.alive||L<1?"":"none",o.style.opacity=f.alive?"1":String(Math.max(0,1-L)),a.style.display=!f.alive&&L>.55?"":"none",a.style.opacity=String(Math.min(1,Math.max(0,(L-.55)/.45)));const S=Math.max(0,f.hp/f.maxHp);l.setAttribute("width",(94*S).toFixed(1)),r.classList.toggle("hurt",y&&f.alive),r.classList.toggle("dead",!f.alive),i.style.display=f.alive?"":"none",l.style.display=f.alive?"":"none"}};return d}function go(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(P("g"));t.forEach((s,r)=>{const o=e.childNodes[r];o.getAttribute("data-kind")!==s.kind&&(o.setAttribute("data-kind",s.kind),o.setAttribute("class",`shot ${s.kind}`),o.innerHTML=mo(s.kind));const i=s.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";o.setAttribute("transform",`translate(${(s.x*Y).toFixed(1)} ${(s.y*Y).toFixed(1)}) rotate(${(s.angle*180/Math.PI).toFixed(1)})${i}`)})}function mo(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function yo(e,t,n){const s=t.events.filter(r=>t.time-r.time<.32);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(P("circle"));s.forEach((r,o)=>{const a=e.childNodes[o],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/.32;a.setAttribute("class",`burst ${r.kind}`),a.setAttribute("cx",(i.px*Y).toFixed(1)),a.setAttribute("cy",(i.py*Y-90).toFixed(1)),a.setAttribute("r",(14+l*40).toFixed(1)),a.setAttribute("opacity",(1-l).toFixed(2))})}function ko(e,t,n){const s=t.events.filter(r=>t.time-r.time<1.1&&r.amount>=1);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(P("text",{"text-anchor":"middle"}));s.forEach((r,o)=>{const a=e.childNodes[o],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/1.1;a.setAttribute("class",`floater ${r.kind}`),a.setAttribute("x",(i.px*Y).toFixed(1)),a.setAttribute("y",(i.py*Y-210-l*70).toFixed(1)),a.setAttribute("opacity",(1-l*l).toFixed(2));const c=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;a.textContent!==c&&(a.textContent=c)})}function bo(e){const t=ie(e.id??""),n=t?Ws(t.fortress.id,V(),Date.now()&65535||1):null;if(!t||!n)return W({title:"מבצר לא נמצא"},b("p",{},"חזרה למפת העולם."));const{continent:s,fortress:r}=t;if(V().conquered.includes(r.id)){const q=b("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return q.addEventListener("click",()=>K(`/continent/${s.id}`)),W({title:r.name,subtitle:s.name,showStars:!1},b("p",{class:"notice"},"המבצר הזה כבר נכבש."),b("div",{class:"row"},q))}const o=Es(n),a=new Set(o.units.filter(q=>q.side==="player").map(q=>q.id)),i=Mo(new URLSearchParams(location.search).get("speed"));let l=!1,c=!1,d=0,f=0,p=0;window.__battle=o;const x=uo(o,q=>tt(q)),M=b("div",{class:"stage"});M.append(x.el);const h=b("div",{class:"overlay"});M.append(h);const w=()=>{h.replaceChildren(b("div",{class:"panel"},b("h2",{},r.name),b("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),b("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),v())),h.classList.remove("hidden")},g=q=>{Ks({fortressId:r.id,won:q,seconds:o.time,heroes:Z.map(R=>({cls:R.cls,name:R.name||Ft(R.cls,R.gender),alive:R.alive,health:Math.max(0,R.hp/R.maxHp)}))});const T=b("button",{class:"btn primary",type:"button"},"המשך");T.addEventListener("click",()=>K(`/result/${r.id}/${q?"win":"lose"}`)),h.replaceChildren(b("div",{class:"panel"},b("h2",{},q?"המבצר נכבש":"הקרב אבד"),b("p",{},q?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),T)),h.classList.remove("hidden")};function v(){const q=b("button",{class:"btn primary",type:"button"},"התחל קרב");return q.addEventListener("click",()=>{h.classList.add("hidden"),l=!0,f=performance.now()}),q}const m=b("div",{class:"portraits"}),y=b("button",{class:"btn small",type:"button"},"השהה"),k=b("button",{class:"btn small",type:"button"},"ריפוי"),$=b("button",{class:"btn small",type:"button"},"בחר הכול"),L=b("button",{class:"btn small",type:"button"},"עמוד במקום");y.addEventListener("click",()=>{c||(l=!l,f=performance.now(),y.textContent=l?"השהה":"המשך")}),$.addEventListener("click",()=>{a.clear();for(const q of o.units)q.side==="player"&&q.alive&&a.add(q.id);H()}),L.addEventListener("click",()=>{for(const q of a)Kt(o,q,{kind:"hold"})});const S=o.units.find(q=>q.side==="player"&&q.cls==="mage");k.addEventListener("click",()=>{if(!S)return;const q=Ce(o,S.id);q&&(As(o,S.id,q.id),E())});function E(){(S?Ss(o,S.id)&&Ce(o,S.id)!==null:!1)?k.removeAttribute("disabled"):k.setAttribute("disabled","true")}const Z=o.units.filter(q=>q.side==="player"),Q=Z.map(q=>{const T=b("span",{class:"portrait-fill"}),R=b("button",{class:`portrait ${q.cls}`,type:"button"},b("span",{class:"portrait-name"},q.name||Ft(q.cls,q.gender)),b("span",{class:"portrait-bar"},T));return R.addEventListener("click",()=>{q.alive&&(a.clear(),a.add(q.id),H())}),m.append(R),{unit:q,button:R,fill:T}});function H(){E();for(const q of Q){const T=Math.max(0,q.unit.hp/q.unit.maxHp);q.fill.style.width=`${(T*100).toFixed(0)}%`,q.button.classList.toggle("selected",a.has(q.unit.id)),q.button.classList.toggle("dead",!q.unit.alive)}}H();function tt(q){if(!l)return;const T=q.unit;if(T&&T.side==="player"&&T.alive){a.clear(),a.add(T.id),H();return}if(a.size!==0)for(const R of a)T&&T.side==="enemy"&&T.alive?Kt(o,R,{kind:"attack",targetId:T.id}):Kt(o,R,{kind:"move",x:q.x,y:q.y})}const z=q=>{q.code==="Space"&&(q.preventDefault(),y.click())};addEventListener("keydown",z);const I=()=>{if(d=requestAnimationFrame(I),l&&!c){const q=performance.now();p+=Math.min(.1,(q-f)/1e3)*i*wo,f=q;let T=0;for(;p>=ne&&T<8*i;)_(),p-=ne,T++}x.update(o,a)},_=()=>{Zs(o),o.winner&&!c&&(c=!0,l=!1,g(o.winner==="player")),H()};w(),d=requestAnimationFrame(I);const xt=W({title:r.name,subtitle:`${s.name} · ${s.domain}`,showStars:!1},M,b("div",{class:"hud"},m,b("div",{class:"hud-actions"},k,$,L,y)));return{el:xt.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",z),x.destroy(),xt.destroy()}}}const wo=.6;function Mo(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function vo(e){const t=ie(e.id??"");if(!t)return W({title:"מבצר לא נמצא"},b("p",{},"חזרה למפת העולם."));const{continent:n,fortress:s}=t,r=e.outcome==="win",o=zs(s.id),a=!V().flags.sawUpgrades;ft(d=>{r&&!d.conquered.includes(s.id)&&d.conquered.push(s.id),a&&(d.flags.sawUpgrades=!0,d.stars+=Te)});const i=[];o&&i.push(b("section",{class:"card"},b("h3",{},"הגיבורים שלך"),...o.heroes.map(d=>b("div",{class:"stat-row"},b("span",{class:"stat-name"},d.name),b("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),b("p",{class:"muted"},`אורך הקרב: ${Math.round(o.seconds)} שניות`))),a&&i.push(b("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Te} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const l=n.fortresses.filter(d=>!d.home&&!V().conquered.includes(d.id)).length;r&&l===0?i.push(b("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||i.push(b("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const c=b("div",{class:"row"},$t(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[$t("קרב נוסף באותו מבצר",`/battle/${s.id}`)],$t("חזרה ליבשת",`/continent/${n.id}`),$t("תפריט המשימות","/missions"));return W({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${s.name} · ${ae(n.id)?.name??""}`,showBack:!1},...i,c)}function $t(e,t,n=!1){const s=b("button",{class:n?"btn primary":"btn",type:"button"},e);return s.addEventListener("click",()=>K(t)),s}function Lo(e){let t=0;for(const n of Object.keys(e.heroes)){const s=e.heroes[n];for(const r of ue[n])t+=Ds(s.levels[r]??0)}return t}function $o(e,t,n){const s=()=>{i.remove(),removeEventListener("keydown",r)},r=l=>{l.key==="Escape"&&s()},o=n.map(l=>{const c=b("button",{class:l.primary?"btn primary":"btn",type:"button"},l.label);return c.addEventListener("click",()=>{s(),l.onClick()}),c}),a=b("div",{class:"modal",role:"dialog","aria-modal":"true"},b("h2",{},e),b("p",{},t),b("div",{class:"modal-actions"},...o)),i=b("div",{class:"backdrop"},a);i.addEventListener("click",l=>{l.target===i&&s()}),addEventListener("keydown",r),document.body.append(i),o.find(l=>l.classList.contains("primary"))?.focus()}function qo(){if(!V().flags.sawUpgrades)return W({title:"שדרוג הגיבורים"},b("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=b("div",{class:"stack"}),t=()=>{const n=V();e.replaceChildren(...Object.keys(Nt).map(s=>{const r=n.heroes[s],o=ue[s].map(i=>Eo(s,i,t)),a=Ft(s,r.gender);return b("section",{class:"card hero"},b("h3",{},r.name?`${r.name} · ${a}`:a),b("div",{class:"stats"},...o))}))};return t(),W({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${Lo(V())}`},e)}function Eo(e,t,n){const o=V().heroes[e].levels[t]??0,a=he[e][t]??0,i=Rs(a,t,o),l=Hs(o),c=b("button",{class:"btn small",type:"button"},l===null?"מרבי":`★ ${l}`);return l===null&&c.setAttribute("disabled","true"),c.addEventListener("click",()=>{if(l!==null){if(V().stars<l){$o("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>K("/missions")}]);return}ft(d=>{d.stars-=l;const f=d.heroes[e];f.levels[t]=(f.levels[t]??0)+1}),n()}}),b("div",{class:"stat-row"},b("span",{class:"stat-name"},Ps[t]),b("span",{class:"stat-value"},So(i)),b("span",{class:"stat-level"},`דרגה ${o}`),c)}function So(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function xn(e){const t=V(),n=ae(e.id??""),s=n&&Ht(n,t)?n:fs(t),r=as(s,t),o=jt(s).length-r.length,a=r.map(l=>{const c=Pt(t,l.id),d=b("button",{class:"card mission-card",type:"button"},b("h3",{},l.title),b("span",{class:"stars-row"},Ao(c)));return d.addEventListener("click",()=>K(`/mission/${l.id}`)),d}),i=a.length>0?[b("div",{class:"grid"},...a)]:[b("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return o>0&&i.push(b("p",{class:"muted"},`עוד ${o} משימות ייפתחו לפי ההתקדמות.`)),W({title:"משימות",subtitle:`${s.name} · ${s.domain}`},...i)}function Ao(e){return"★".repeat(e)+"☆".repeat(ut-e)}const se={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Zo=["m","f"];function Fo(){const e=b("div",{class:"stack"}),t=()=>{const s=V();e.replaceChildren(...Object.keys(Nt).map(r=>No(r,s.heroes[r].gender,s.heroes[r].name,t)))};t();const n=b("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{ft(s=>{for(const r of Object.keys(Nt)){const o=s.heroes[r];o.name.trim()||(o.name=se[r][o.gender][0])}s.flags.setupDone=!0}),K("/")}),W({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:V().flags.setupDone},e,b("div",{class:"row"},n))}function No(e,t,n,s){const r=b("input",{class:"name-input",type:"text",maxlength:"14",placeholder:se[e][t][0],value:n,"aria-label":`שם ה${Ft(e,t)}`});r.addEventListener("input",()=>{ft(i=>{i.heroes[e].name=r.value})});const o=i=>{const l=b("button",{class:`btn small${t===i?" primary":""}`,type:"button"},Mt[e][i]);return l.addEventListener("click",()=>{ft(c=>{c.heroes[e].gender=i}),s()}),l},a=se[e][t].map(i=>{const l=b("button",{class:"chip",type:"button"},i);return l.addEventListener("click",()=>{ft(c=>{c.heroes[e].name=i}),s()}),l});return b("section",{class:"card hero-setup"},b("div",{class:"setup-row"},...Zo.map(o)),b("div",{class:"setup-row"},r),b("div",{class:"setup-row chips"},...a))}function Co(e){const t=$n(e.id??""),n=t?ns(t.kind):void 0;if(!t||!n)return W({title:"משימה לא נמצאה"},b("p",{},"חזרה לתפריט המשימות."));const s=b("div",{class:"mission-stage"}),r=b("p",{class:"hint-line"}),o=b("div",{class:"stars-row big"}),a=b("div",{class:"overlay hidden"}),i=b("button",{class:"btn",type:"button"},"רמז"),l=b("button",{class:"btn primary",type:"button"},"בדיקה");l.setAttribute("disabled","true");let c,d,f=0,p=0,x=!1;const M=()=>{const k=x?h:Xt(f,p);o.replaceChildren(...Array.from({length:ut},($,L)=>b("span",{class:`star${L<k?" lit":""}`},"★")))};let h=ut;const w=()=>{!d||x||(d.answer()===null?l.setAttribute("disabled","true"):l.removeAttribute("disabled"))},g=k=>{d?.destroy(),c=n.generate(k),d=n.mount(c,w),f=0,p=0,x=!1,h=ut,r.textContent="",s.replaceChildren(d.el,a),a.classList.add("hidden"),l.setAttribute("disabled","true"),i.removeAttribute("disabled"),M(),v()};function v(){window.__mission={solve:()=>{d.demonstrate(),w()},place:k=>{d.place?.(k),w()},solution:()=>c.solution,state:()=>({hintsUsed:f,mistakes:p,finished:x,score:Xt(f,p)})}}i.addEventListener("click",()=>{x||f>=c.hints.length||(f++,d.hint(f),r.textContent=c.hints[f-1]?.text??"",f>=c.hints.length&&i.setAttribute("disabled","true"),M(),w())}),l.addEventListener("click",()=>{if(x)return;const k=d.answer();if(k!==null){if(c.check(k)){m();return}p++,r.textContent="לא שם. נסה שוב.",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),400),M()}});function m(){x=!0,h=Xt(f,p);const k=Pt(V(),t.id),$=rs(k,h);ft(E=>{E.stars+=$,E.missions[t.id]=Math.max(k,h),E.solvedTopics.includes(t.topicId)||E.solvedTopics.push(t.topicId)}),M();const L=b("button",{class:"btn",type:"button"},"עוד אחת");L.addEventListener("click",()=>g(Math.floor(Math.random()*65535)+1));const S=b("button",{class:"btn primary",type:"button"},"לתפריט המשימות");S.addEventListener("click",()=>K("/missions")),a.replaceChildren(b("div",{class:"panel"},b("h2",{},"נכון"),...c.explain.map(E=>b("p",{},E)),b("p",{class:"reward"},$>0?`+${$} ★`:"★"),b("div",{class:"modal-actions"},S,L))),a.classList.remove("hidden")}g(Date.now()&65535||1);const y=W({title:t.title,subtitle:""},s,r,b("div",{class:"hud"},o,b("div",{class:"hud-actions"},i,l)));return{el:y.el,destroy(){d.destroy(),y.destroy()}}}st("/",ms);st("/continent/:id",ks);st("/battle/:id",bo);st("/result/:id/:outcome",vo);st("/upgrades",qo);st("/missions",xn);st("/missions/:id",xn);st("/mission/:id",Co);st("/setup",Fo);gn(()=>{const e=b("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>K("/")),W({title:"הדף לא נמצא",showBack:!1},e)});!V().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const je=document.getElementById("app");je&&bn(je);
