(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Ze=[];let Fe=null,xt=null,Bt=null;function rt(e,t){Ze.push({pattern:e.split("/").filter(Boolean),factory:t})}function rn(e){Fe=e}function K(e){location.hash==="#"+e?Vt():location.hash=e}function sn(){history.length>1?history.back():K("/")}function an(){return location.hash.replace(/^#/,"")||"/"}function on(e){const t=e.split("/").filter(Boolean);for(const n of Ze){if(n.pattern.length!==t.length)continue;const s={};let r=!0;for(let a=0;a<n.pattern.length;a++){const o=n.pattern[a],i=t[a];if(o.startsWith(":"))s[o.slice(1)]=decodeURIComponent(i);else if(o!==i){r=!1;break}}if(r)return{factory:n.factory,params:s}}return null}function Vt(){if(!xt)return;Bt?.destroy?.(),xt.replaceChildren();const e=an(),t=on(e),n=t?.factory??Fe;n&&(Bt=n(t?.params??{}),xt.append(Bt.el),xt.scrollTop=0)}function ln(e){xt=e,addEventListener("hashchange",Vt),Vt()}const Ot="euclid.";class cn{read(t){try{const n=localStorage.getItem(Ot+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(Ot+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(Ot+t)}catch{}}}const Ne=new cn,Ce="profile";function dn(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function fn(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let yt=fn(Ne.read(Ce)??dn());const Ut=new Set;function _(){return yt}function pn(e){return Ut.add(e),()=>Ut.delete(e)}function ct(e){e(yt),Ne.write(Ce,yt);for(const t of Ut)t(yt);return yt}function m(e,t={},...n){const s=document.createElement(e);for(const[r,a]of Object.entries(t))r==="class"?s.className=a:s.setAttribute(r,a);return s.append(...n),s}function W(e,...t){const n=m("button",{class:"stars",type:"button",title:"תפריט המשימות"}),s=()=>{n.replaceChildren(m("span",{class:"star-icon"},"★"),m("span",{},String(_().stars)))};s();const r=pn(s);n.addEventListener("click",()=>K("/missions"));const a=m("header",{class:"top"});if(e.showBack!==!1){const i=m("button",{class:"back",type:"button","aria-label":"חזרה"},"→");i.addEventListener("click",()=>sn()),a.append(i)}return a.append(m("div",{class:"titles"},m("h1",{},e.title),...e.subtitle?[m("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:m("div",{class:"page"},a,m("main",{class:"content"},...t)),destroy:()=>r()}}const Qt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function te(e){return Qt.find(t=>t.id===e)}function ee(e){for(const t of Qt){const n=t.fortresses.find(s=>s.id===e);if(n)return{continent:t,fortress:n}}}function ie(e){return e.fortresses.filter(t=>!t.home)}const Ie=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]},{id:"australia-product",continent:"australia",topicId:"mul-div",title:"מלבן המכפלה",kind:"product",requires:["asia-quadrant"]},{id:"australia-powers",continent:"australia",topicId:"powers",title:"סולם החזקות",kind:"powers",requires:["australia-product"]},{id:"australia-square",continent:"australia",topicId:"powers",title:"הריבוע השלם",kind:"perfect-square",requires:["australia-powers"]},{id:"australia-sum-letters",continent:"australia",topicId:"mul-div",title:"חיבור בטור עם אותיות",kind:"alphametic-sum",requires:["australia-product"]},{id:"australia-product-letters",continent:"australia",topicId:"mul-div",title:"כפל בטור עם אותיות",kind:"alphametic-product",requires:["australia-sum-letters"]},{id:"africa-aim",continent:"africa",topicId:"angles",title:"כוון את הקרן",kind:"angle-aim",requires:["australia-product"]},{id:"africa-straight",continent:"africa",topicId:"angle-pairs",title:"זוויות צמודות",kind:"angle-straight",requires:["africa-aim"]},{id:"africa-triangle",continent:"africa",topicId:"triangle-angles",title:"סכום במשולש",kind:"angle-triangle",requires:["africa-straight"]},{id:"africa-isosceles",continent:"africa",topicId:"triangle-angles",title:"שתי שוקיים",kind:"angle-isosceles",requires:["africa-triangle"]},{id:"europe-machine",continent:"europe",topicId:"variable",title:"מכונת המספרים",kind:"machine",requires:["africa-straight"]},{id:"europe-terms",continent:"europe",topicId:"like-terms",title:"קופסאות שוות",kind:"like-terms",requires:["europe-machine"]},{id:"europe-balance",continent:"europe",topicId:"equation-id",title:"מאזניים",kind:"balance",requires:["europe-terms"]},{id:"samerica-balance",continent:"samerica",topicId:"linear-eq",title:"נעלם בשני הצדדים",kind:"balance-both",requires:["europe-balance"]}];function hn(e){return Ie.find(t=>t.id===e)}function Te(e){return Ie.filter(t=>t.continent===e)}function V(e){let t=e>>>0;const s=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return s.seed=e,s}function mt(e,t,n){return t+e()*(n-t)}function un(e,t){const{rows:n,sign:s,letters:r}=e,a=document.createElement("div");a.className="board-wrap columns-board";const o=document.createElement("div");o.className="columns";const i=Math.max(...n.map(x=>x.length));n.forEach((x,b)=>{const g=document.createElement("div");g.className="col-row";const L=x.padStart(i," "),M=document.createElement("span");M.className="col-cell sign",M.textContent=b===n.length-2?s:"",g.append(M);for(const $ of L){const v=document.createElement("span");v.className=$===" "?"col-cell blank":"col-cell letter",v.dataset.letter=$.trim(),v.textContent=$.trim(),g.append(v)}b===n.length-2&&g.classList.add("last-addend"),o.append(g)});const l=document.createElement("div");l.className="col-rule",o.insertBefore(l,o.lastElementChild);const d=document.createElement("p");d.className="columns-live";const c=document.createElement("p");c.className="chain-hint";const f=document.createElement("div");f.className="letters";const p=document.createElement("div");p.className="keypad",a.append(o,d,c,f,p);const y={};let w=r[0]??"";const h=()=>{f.replaceChildren();for(const x of r){const b=document.createElement("button");b.type="button",b.className=`chip letter-chip${x===w?" selected":""}`;const g=y[x];Object.entries(y).some(([M,$])=>M!==x&&$===g&&g!==void 0)&&b.classList.add("clash"),b.innerHTML=`<span class="chip-letter">${x}</span><span class="chip-digit">${g??"?"}</span>`,b.addEventListener("click",()=>{w=x,h()}),f.append(b)}for(const x of Array.from(o.querySelectorAll(".col-cell.letter"))){const b=x.dataset.letter??"",g=y[b];x.textContent=g===void 0?b:String(g),x.classList.toggle("filled",g!==void 0)}};for(let x=0;x<=9;x++){const b=document.createElement("button");b.type="button",b.className="btn small tray-key digit-key",b.textContent=String(x),b.addEventListener("click",()=>{w&&(y[w]=x,h(),t())}),p.append(b)}const k=document.createElement("button");return k.type="button",k.className="btn small tray-key",k.textContent="נקה",k.addEventListener("click",()=>{for(const x of r)delete y[x];h(),t()}),p.append(k),h(),{el:a,assignment:()=>({...y}),set(x,b){y[x]=b,h(),t()},clear(){for(const x of r)delete y[x];h(),t()},live:x=>{d.textContent=x},reveal(x,b){y[x]=b,h(),t()},mark:x=>{c.textContent=x},destroy:()=>a.remove()}}function u(e){return`⁦${e}⁩`}const ce=["א","ב","ג","ד","ה","ו"];function de(e,t,n){const s=[...new Set([...String(e),...String(t),...String(n)])];if(s.length>ce.length)return null;const r=new Map;s.forEach((i,l)=>r.set(i,ce[l]));const a=i=>String(i).split("").map(l=>r.get(l)).join(""),o=[a(e),a(t),a(n)];return{rows:o,letters:s.map(i=>r.get(i)),leading:[...new Set(o.map(i=>i[0]))]}}function gn(e,t){let n=0;for(const s of e){const r=t[s];if(r===void 0)return null;n=n*10+r}return n}function xn(e,t){const n=e.letters.map(o=>t[o]);if(n.some(o=>o===void 0)||new Set(n).size!==n.length||e.leading.some(o=>t[o]===0))return!1;const[s,r,a]=e.rows.map(o=>gn(o,t));return s===null||r===null||a===null?!1:e.sign==="+"?s+r===a:s*r===a}function Ge(e,t){const n=V(e);let s=0,r=0,a=0,o=null;for(let p=0;p<400;p++)if(t==="+"?(s=11+Math.floor(n()*78),r=11+Math.floor(n()*78),a=s+r):(s=12+Math.floor(n()*38),r=3+Math.floor(n()*7),a=s*r),!(String(a).includes("0")||String(s).includes("0")||String(r).includes("0"))){if(o=de(s,r,a),o&&o.letters.length>=3)break;o=null}o||(s=12,r=34,a=46,o=de(s,r,a));const i={rows:o.rows,sign:t,letters:o.letters,values:{a:s,b:r,result:a},leading:o.leading},l={},d=(p,y)=>{p.split("").forEach((w,h)=>{l[w]=Number(String(y)[h])})};d(o.rows[0],s),d(o.rows[1],r),d(o.rows[2],a);const c=o.rows[2][o.rows[2].length-1],f=o.letters[0];return{config:i,solution:l,check:p=>xn(i,p),hints:[{text:"מתחילים מטור היחידות"},{text:`${f} = ${u(l[f])}`},{text:`${c} = ${u(l[c])}`},{text:"כל האותיות"}],explain:[t==="+"?`${u(s)} + ${u(r)} = ${u(a)}.`:`${u(s)} × ${u(r)} = ${u(a)}.`,"כל אות היא ספרה אחת, ולשתי אותיות שונות ספרות שונות."]}}function yn(e){return Ge(e,"+")}function mn(e){return Ge(e,"×")}function Be(e,t){const{rows:n,sign:s,letters:r}=e.config,a=e.solution;let o=!1;const i=un({rows:n,sign:s,letters:r},()=>{o=!0,l(),t()});function l(){const d=i.assignment(),c=n.map(f=>f.split("").map(p=>d[p]??"?").join(""));i.live(`${c[0]} ${s} ${c[1]} = ${c[2]}`)}return l(),{el:i.el,answer:()=>o?i.assignment():null,hint(d){if(d===1&&i.mark(`${n[0].slice(-1)} ${s} ${n[1].slice(-1)} → ${n[2].slice(-1)}`),d===2&&i.reveal(r[0],a[r[0]]),d===3){const c=r.find(f=>i.assignment()[f]===void 0)??r[1];i.reveal(c,a[c])}if(d>=4)for(const c of r)i.reveal(c,a[c])},demonstrate(){for(const d of r)i.reveal(d,a[d])},place:d=>{i.clear();for(const[c,f]of Object.entries(d))i.set(c,f)},destroy:()=>i.destroy()}}const kn={kind:"alphametic-sum",generate:yn,mount:Be},bn={kind:"alphametic-product",generate:mn,mount:Be},wn="http://www.w3.org/2000/svg",Mn=1e3,vn=560,Z={x:760,y:320,r:170};function U(e,t={}){const n=document.createElementNS(wn,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}const fe=e=>e*Math.PI/180;function at(e,t,n,s){return{x:e+Math.cos(fe(n))*s,y:t-Math.sin(fe(n))*s}}function pe(e,t,n,s,r){const a=at(e,t,s,n),o=at(e,t,r,n),i=Math.abs(r-s)>180?1:0,l=r>s?0:1;return`M${a.x.toFixed(1)} ${a.y.toFixed(1)} A${n} ${n} 0 ${i} ${l} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}function Ln(){const e=document.createElement("div");e.className="board-wrap";const t=U("svg",{class:"board angle-board",viewBox:`0 0 ${Mn} ${vn}`});e.append(t);const n=U("g",{class:"figure"}),s=U("g",{class:"hints"}),r=U("g",{class:"dial"});t.append(n,s,r);const a=U("text",{class:"board-mark",x:"40",y:"56"});t.append(a);const o=[],i={el:e,line(l,d,c,f,p=""){const y=U("line",{class:`fig-line ${p}`,x1:String(l),y1:String(d),x2:String(c),y2:String(f)});return n.append(y),y},ray(l,d,c,f,p=""){const y=at(l,d,c,f);return i.line(l,d,y.x,y.y,p)},arc(l,d,c,f,p,y=""){const w=U("path",{class:`fig-arc ${y}`,d:pe(l,d,c,f,p)});return n.append(w),w},label(l,d,c,f=""){const p=U("text",{class:`fig-label ${f}`,x:String(l),y:String(d),"text-anchor":"middle"});return p.textContent=c,n.append(p),p},dot(l,d,c=""){const f=U("circle",{class:`fig-dot ${c}`,cx:String(l),cy:String(d),r:"7"});return n.append(f),f},dial(l,d){let c=Math.round(l);const f=U("circle",{class:"dial-face",cx:String(Z.x),cy:String(Z.y),r:String(Z.r)}),p=U("line",{class:"dial-base",x1:String(Z.x),y1:String(Z.y),x2:String(Z.x+Z.r),y2:String(Z.y)}),y=U("line",{class:"dial-arm"}),w=U("path",{class:"dial-wedge"}),h=U("circle",{class:"dial-knob",r:"18"}),k=U("text",{class:"dial-readout",x:String(Z.x),y:String(Z.y+72),"text-anchor":"middle"});r.append(f,w,p,y,h,k);for(let v=0;v<=180;v+=10){const S=at(Z.x,Z.y,v,Z.r),E=at(Z.x,Z.y,v,Z.r-(v%30===0?22:12));r.append(U("line",{class:"dial-tick",x1:E.x.toFixed(1),y1:E.y.toFixed(1),x2:S.x.toFixed(1),y2:S.y.toFixed(1)}))}const x=()=>{const v=at(Z.x,Z.y,c,Z.r);y.setAttribute("x1",String(Z.x)),y.setAttribute("y1",String(Z.y)),y.setAttribute("x2",v.x.toFixed(1)),y.setAttribute("y2",v.y.toFixed(1)),h.setAttribute("cx",v.x.toFixed(1)),h.setAttribute("cy",v.y.toFixed(1)),w.setAttribute("d",`M${Z.x} ${Z.y} L${Z.x+Z.r} ${Z.y} ${pe(Z.x,Z.y,Z.r,0,c).slice(1)} Z`),k.textContent=`${c}°`};x();const b=v=>{const S=t.getScreenCTM();if(!S)return c;const E=new DOMPoint(v.clientX,v.clientY).matrixTransform(S.inverse()),F=Math.round(Math.atan2(Z.y-E.y,E.x-Z.x)*180/Math.PI);return Math.max(0,Math.min(180,F))};let g=!1;const L=v=>{g=!0,t.setPointerCapture(v.pointerId),c=b(v),x(),d(c),v.preventDefault()},M=v=>{g&&(c=b(v),x(),d(c))},$=()=>{g=!1};return t.addEventListener("pointerdown",L),t.addEventListener("pointermove",M),t.addEventListener("pointerup",$),t.addEventListener("pointercancel",$),o.push(()=>{t.removeEventListener("pointerdown",L),t.removeEventListener("pointermove",M),t.removeEventListener("pointerup",$),t.removeEventListener("pointercancel",$)}),{get:()=>c,set:v=>{c=Math.round(v),x(),d(c)}}},mark(l){a.textContent=l},clearHints(){s.replaceChildren()},destroy(){for(const l of o)l();e.remove()}};return i}const A={x:130,y:470},R={x:530,y:470};function Nt(e,t,n){const s={aim:["הקשת מראה את הזווית","הסימונים על המד הם של ‎10°‎","הזווית בין ‎"+Math.floor(t/10)*10+"°‎ ל־"+Math.ceil(t/10)*10+"°",`הזווית היא ${u(t+"°")}`],straight:["שתי הזוויות יחד על ישר",`יחד הן ${u("180°")}`,`${u("180°")} − ${u(n[0]+"°")}`,`הזווית היא ${u(t+"°")}`],triangle:["שלוש הזוויות של משולש",`יחד הן ${u("180°")}`,`${u("180°")} − ${u(n[0]+"°")} − ${u(n[1]+"°")}`,`הזווית היא ${u(t+"°")}`],isosceles:["שתי זוויות הבסיס שוות",`יחד עם ${u(n[0]+"°")} הן ${u("180°")}`,`(${u("180°")} − ${u(n[0]+"°")}) : ${u(2)}`,`הזווית היא ${u(t+"°")}`]},r={aim:[`הזווית היא ${u(t+"°")}.`],straight:[`שתי זוויות צמודות משלימות ל־${u("180°")}.`,`${u("180°")} − ${u(n[0]+"°")} = ${u(t+"°")}.`],triangle:[`סכום הזוויות במשולש הוא ${u("180°")}.`,`${u("180°")} − ${u(n[0]+"°")} − ${u(n[1]+"°")} = ${u(t+"°")}.`],isosceles:["במשולש שווה שוקיים שתי זוויות הבסיס שוות.",`(${u("180°")} − ${u(n[0]+"°")}) : ${u(2)} = ${u(t+"°")}.`]};return{config:{shape:e,target:t,given:n},solution:t,check:a=>a===t,hints:s[e].map(a=>({text:a})),explain:r[e]}}function qn(e){const t=V(e),n=15+Math.floor(t()*31)*5;return Nt("aim",Math.min(165,n),[])}function $n(e){const t=V(e),n=20+Math.floor(t()*28)*5;return Nt("straight",180-n,[n])}function En(e){const t=V(e);let n=0,s=0;do n=25+Math.floor(t()*14)*5,s=25+Math.floor(t()*14)*5;while(n+s>150);return Nt("triangle",180-n-s,[n,s])}function Sn(e){const t=V(e),n=20+Math.floor(t()*14)*10;return Nt("isosceles",(180-n)/2,[n])}function An(e,t){const{shape:n,target:s,given:r}=t;if(n==="aim"){e.line(A.x-40,A.y,A.x+420,A.y,"base"),e.ray(A.x,A.y,s,380,"live"),e.arc(A.x,A.y,90,0,s,"given"),e.dot(A.x,A.y);return}if(n==="straight"){e.line(A.x-60,A.y,R.x+60,A.y,"base");const f={x:(A.x+R.x)/2,y:A.y};e.ray(f.x,f.y,r[0],300,"live"),e.arc(f.x,f.y,76,0,r[0],"given"),e.label(...ut(f,r[0]/2,112),`${r[0]}°`),e.arc(f.x,f.y,110,r[0],180,"wanted"),e.label(...ut(f,(r[0]+180)/2,150),"?"),e.dot(f.x,f.y);return}const[a,o]=n==="triangle"?[r[0],r[1]]:[(180-r[0])/2,(180-r[0])/2],i=180-a-o,d=(R.x-A.x)*Math.sin(o*Math.PI/180)/Math.sin(i*Math.PI/180),c=at(A.x,A.y,a,d);if(e.line(A.x,A.y,R.x,R.y,"base"),e.line(A.x,A.y,c.x,c.y,"base"),e.line(R.x,R.y,c.x,c.y,"base"),e.dot(A.x,A.y),e.dot(R.x,R.y),e.dot(c.x,c.y),n==="triangle"){e.arc(A.x,A.y,66,0,a,"given"),e.label(...ut(A,a/2,100),`${a}°`),e.arc(R.x,R.y,66,180-o,180,"given"),e.label(...ut(R,180-o/2,100),`${o}°`);const f=Math.atan2(A.y-c.y,A.x-c.x)*(180/Math.PI),p=Math.atan2(R.y-c.y,R.x-c.x)*(180/Math.PI);e.arc(c.x,c.y,60,-p,-f,"wanted"),e.label(c.x,c.y+54,"?")}else{const f=Math.atan2(A.y-c.y,A.x-c.x)*(180/Math.PI),p=Math.atan2(R.y-c.y,R.x-c.x)*(180/Math.PI);e.arc(c.x,c.y,60,-p,-f,"given"),e.label(c.x,c.y+56,`${r[0]}°`),e.arc(A.x,A.y,66,0,a,"wanted"),e.label(...ut(A,a/2,104),"?"),e.label((A.x+c.x)/2-18,(A.y+c.y)/2,"//"),e.label((R.x+c.x)/2+18,(R.y+c.y)/2,"//")}}function ut(e,t,n){const s=at(e.x,e.y,t,n);return[s.x,s.y+10]}function Ct(e,t){const n=Ln();An(n,e.config);let s=!1;const r=n.dial(0,()=>{s=!0,t()});return{el:n.el,answer:()=>s?r.get():null,hint(a){const{shape:o,given:i,target:l}=e.config;a===1&&n.mark(o==="triangle"?"180°":o==="isosceles"?"= =":"180°"),a===2&&n.mark(o==="aim"?"10°":"180°"),a===3&&(o==="straight"?n.mark(`180 − ${i[0]}`):o==="triangle"?n.mark(`180 − ${i[0]} − ${i[1]}`):o==="isosceles"?n.mark(`(180 − ${i[0]}) : 2`):n.mark(`${Math.floor(l/10)*10}…${Math.ceil(l/10)*10}`)),a>=4&&r.set(l)},demonstrate(){r.set(e.solution)},place:a=>r.set(a),destroy:()=>n.destroy()}}const Zn={kind:"angle-aim",generate:qn,mount:Ct},Fn={kind:"angle-straight",generate:$n,mount:Ct},Nn={kind:"angle-triangle",generate:En,mount:Ct},Cn={kind:"angle-isosceles",generate:Sn,mount:Ct};function In(e,t){const{signed:n=!1,max:s=999}=e,r=document.createElement("div");r.className="keypad-board";const a=document.createElement("p");a.className="keypad-readout";const o=document.createElement("div");o.className="keypad",r.append(a,o);let i="";const l=()=>{a.textContent=i===""?"?":i};l();const d=f=>{f==="-"?i=i.startsWith("-")?i.slice(1):`-${i}`:i.replace("-","").length<String(s).length&&(i+=f),l(),t()};for(let f=0;f<=9;f++){const p=document.createElement("button");p.type="button",p.className="btn small tray-key digit-key",p.textContent=String(f),p.addEventListener("click",()=>d(String(f))),o.append(p)}if(n){const f=document.createElement("button");f.type="button",f.className="btn small tray-key digit-key",f.textContent="−",f.addEventListener("click",()=>d("-")),o.append(f)}const c=document.createElement("button");return c.type="button",c.className="btn small tray-key",c.textContent="נקה",c.addEventListener("click",()=>{i="",l(),t()}),o.append(c),{el:r,value:()=>i===""||i==="-"?null:Number(i),set(f){i=String(f),l(),t()},clear(){i="",l(),t()}}}function Oe(e,t){const n=V(e),s=2+Math.floor(n()*6),r=2+Math.floor(n()*2),a=t?1+Math.floor(n()*(r-1)):0,o=Math.floor(n()*6),i=o+(r-a)*s,l={leftX:r,leftN:o,rightX:a,rightN:i},d=`${r}x${o>0?` + ${o}`:""}`,c=`${a>0?`${a}x + `:""}${i}`;return{config:l,solution:s,check:f=>f===s,hints:[{text:"מורידים אותו דבר משני הצדדים"},t?{text:`מורידים ${u(`${a}x`)} משני הצדדים`}:{text:o>0?`מורידים ${u(o)} משני הצדדים`:"שתי הכפות שוות"},{text:`נשאר ${u(`${r-a}x`)} = ${u(i-o)}`},{text:`${u("x")} = ${u(s)}`}],explain:[`${u(d)} = ${u(c)}.`,`${u(`${r-a}x`)} = ${u(i-o)}.`,`${u("x")} = ${u(s)}.`]}}function Tn(e){return Oe(e,!1)}function Gn(e){return Oe(e,!0)}const it="http://www.w3.org/2000/svg";function he(e,t,n){const s=document.createElementNS(it,"g");s.setAttribute("transform",`translate(${e} 0)`),s.innerHTML=`
    <path class="rope" d="M-100 70 L-100 172 M100 70 L100 172"/>
    <path class="pan" d="M-120 172 h240 l-26 44 h-188 Z"/>`;const r=document.createElementNS(it,"g"),a=t>3?1:t,o=n>4?1:n,i=a+o,l=52;let d=-((i-1)*l)/2;for(let c=0;c<a;c++){const f=document.createElementNS(it,"g");f.setAttribute("transform",`translate(${d} 170)`),f.innerHTML=`<rect class="x-box" x="-21" y="-44" width="42" height="42" rx="7"/>
      <text class="x-text" x="0" y="-13" text-anchor="middle">x</text>`,r.append(f),d+=l}if(t>a){const c=document.createElementNS(it,"text");c.setAttribute("class","pan-count"),c.setAttribute("x",String(d-l+36)),c.setAttribute("y","147"),c.textContent=`×${t}`,r.append(c),d+=34}for(let c=0;c<o;c++){const f=document.createElementNS(it,"circle");f.setAttribute("class","weight"),f.setAttribute("cx",String(d)),f.setAttribute("cy","150"),f.setAttribute("r","18"),r.append(f),d+=l}if(n>o){const c=document.createElementNS(it,"text");c.setAttribute("class","pan-count"),c.setAttribute("x",String(d-l+34)),c.setAttribute("y","160"),c.textContent=`×${n}`,r.append(c)}return s.append(r),s}function He(e,t){const{leftX:n,leftN:s,rightX:r,rightN:a}=e.config,o=document.createElement("div");o.className="board-wrap balance-board";const i=document.createElementNS(it,"svg");i.setAttribute("class","board balance-art"),i.setAttribute("viewBox","0 0 1000 400"),i.innerHTML=`
    <path class="stand" d="M500 70 v220 M420 330 h160 l-30 -40 h-100 Z"/>
    <path class="beam" d="M240 70 h520"/>`,i.append(he(250,n,s),he(750,r,a)),o.append(i);const l=In({max:99},t);return o.append(l.el),{el:o,answer:()=>l.value(),hint(d){d>=4&&l.set(e.solution)},demonstrate(){l.set(e.solution)},place:d=>l.set(d),destroy:()=>o.remove()}}const Bn={kind:"balance",generate:Tn,mount:He},On={kind:"balance-both",generate:Gn,mount:He};function Hn(e){const t=V(e),n=[],s=2+Math.floor(t()*2),r=2+Math.floor(t()*2);for(let l=0;l<s;l++){const d=1+Math.floor(t()*6);n.push({id:`x${l}`,x:t()<.3?-d:d,n:0})}for(let l=0;l<r;l++){const d=1+Math.floor(t()*9);n.push({id:`n${l}`,x:0,n:t()<.3?-d:d})}for(let l=n.length-1;l>0;l--){const d=Math.floor(t()*(l+1)),c=n[l];n[l]=n[d],n[d]=c}const a=n.reduce((l,d)=>l+d.x,0),o=n.reduce((l,d)=>l+d.n,0),i={};for(const l of n)i[l.id]=l.x!==0?"x":"n";return{config:{tiles:n,sumX:a,sumN:o},solution:i,check:l=>n.every(d=>l[d.id]===(d.x!==0?"x":"n")),hints:[{text:"אותו סוג הולך יחד"},{text:`הקופסה עם ${u("x")} מקבלת את האיברים עם ${u("x")}`},{text:"הקופסה השנייה מקבלת את המספרים"},{text:`${u(`${a}x`)} ו־${u(o)}`}],explain:[`האיברים עם ${u("x")} מצטרפים ל־${u(`${a}x`)}.`,`המספרים מצטרפים ל־${u(o)}.`,`הביטוי כולו הוא ${u(`${a}x ${o>=0?"+":"−"} ${Math.abs(o)}`)}.`]}}function jn(e){return e.x!==0?e.x===1?"x":e.x===-1?"−x":`${e.x<0?"−":""}${Math.abs(e.x)}x`:e.n<0?`−${Math.abs(e.n)}`:String(e.n)}function Pn(e,t){const{tiles:n}=e.config,s=document.createElement("div");s.className="board-wrap terms-board";const r=document.createElement("div");r.className="tile-pool";const a=document.createElement("div");a.className="bins";const o=document.createElement("div");o.className="bin";const i=document.createElement("div");i.className="bin",a.append(o,i),s.append(r,a);const l={};let d=!1;const c={x:document.createElement("p"),n:document.createElement("p")};c.x.className="bin-total",c.n.className="bin-total";const f=()=>{r.replaceChildren(),o.replaceChildren(p("x"),c.x),i.replaceChildren(p("1"),c.n);let y=0,w=0;for(const h of n){const k=document.createElement("button");k.type="button",k.className="term-tile",k.textContent=jn(h);const x=l[h.id];k.addEventListener("click",()=>{l[h.id]=x==="x"?"n":x==="n"?void 0:"x",l[h.id]===void 0&&delete l[h.id],d=!0,f(),t()}),x==="x"?(o.append(k),y+=h.x):x==="n"?(i.append(k),w+=h.n):r.append(k)}c.x.textContent=`${y}x`,c.n.textContent=String(w)};function p(y){const w=document.createElement("p");return w.className="bin-head",w.textContent=y,w}return f(),{el:s,answer:()=>d?{...l}:null,hint(y){const w=n.filter(h=>h.x!==0);if(y===1&&w[0]&&(l[w[0].id]="x",d=!0),y===2)for(const h of w)l[h.id]="x";if(y===3)for(const h of n.filter(k=>k.x===0).slice(0,1))l[h.id]="n";if(y>=4)for(const h of n)l[h.id]=h.x!==0?"x":"n";d=!0,f(),t()},demonstrate(){for(const y of n)l[y.id]=y.x!==0?"x":"n";d=!0,f(),t()},place:y=>{for(const w of Object.keys(l))delete l[w];Object.assign(l,y),d=!0,f(),t()},destroy:()=>s.remove()}}const Rn={kind:"like-terms",generate:Hn,mount:Pn};function ft(e,t){return e.a*t+e.b}function Xt(e){const t=e.a===1?"x":`${e.a}x`;return e.b===0?t:e.b>0?`${t} + ${e.b}`:`${t} − ${Math.abs(e.b)}`}function Dn(e){const t=V(e),n={a:2+Math.floor(t()*4),b:Math.floor(t()*9)-4},s=[n];for(;s.length<4;){const a={a:Math.max(1,n.a+Math.floor(t()*3)-1),b:n.b+Math.floor(t()*5)-2};s.some(o=>o.a===a.a&&o.b===a.b)||s.push(a)}for(let a=s.length-1;a>0;a--){const o=Math.floor(t()*(a+1)),i=s[a];s[a]=s[o],s[o]=i}const r=s.findIndex(a=>a.a===n.a&&a.b===n.b);return{config:{rule:n,options:s,correct:r},solution:r,check:a=>a===r,hints:[{text:"הכנס מספר וראה מה יוצא"},{text:`${u(1)} נותן ${u(ft(n,1))}`},{text:`${u(2)} נותן ${u(ft(n,2))}, כל צעד מוסיף ${u(n.a)}`},{text:`הכלל הוא ${u(Xt(n))}`}],explain:[`הכלל הוא ${u(Xt(n))}.`,`${u(1)} → ${u(ft(n,1))} , ${u(2)} → ${u(ft(n,2))} , ${u(3)} → ${u(ft(n,3))}.`]}}function _n(e,t){const{rule:n,options:s}=e.config,r=document.createElement("div");r.className="board-wrap machine-board";const a=document.createElement("div");a.className="machine",a.innerHTML=`
    <svg viewBox="0 0 320 180" class="machine-art" aria-hidden="true">
      <rect x="40" y="30" width="240" height="120" rx="18" class="machine-body"/>
      <circle cx="110" cy="90" r="26" class="machine-gear"/>
      <circle cx="210" cy="90" r="18" class="machine-gear"/>
      <path d="M0 90 h40 M280 90 h40" class="machine-pipe"/>
    </svg>`;const o=document.createElement("div");o.className="tray";const i=document.createElement("div");i.className="machine-table";const l=document.createElement("div");l.className="machine-choices",r.append(a,o,i,l);const d=[],c=()=>{i.replaceChildren();for(const w of d){const h=document.createElement("span");h.className="machine-row",h.textContent=`${w} → ${ft(n,w)}`,i.append(h)}},f=w=>{d.includes(w)||d.push(w),c()};for(const w of[1,2,3,4,5]){const h=document.createElement("button");h.type="button",h.className="btn small tray-key",h.textContent=String(w),h.addEventListener("click",()=>f(w)),o.append(h)}let p=null;const y=()=>{l.replaceChildren(),s.forEach((w,h)=>{const k=document.createElement("button");k.type="button",k.className=`btn choice${p===h?" primary":""}`,k.textContent=Xt(w),k.addEventListener("click",()=>{p=h,y(),t()}),l.append(k)})};return y(),{el:r,answer:()=>p,hint(w){w===1&&f(1),w===2&&f(2),w===3&&(f(3),f(4)),w>=4&&(p=e.solution,y(),t())},demonstrate(){p=e.solution,y(),t()},place:w=>{p=w,y(),t()},destroy:()=>r.remove()}}const Vn={kind:"machine",generate:Dn,mount:_n},Un="http://www.w3.org/2000/svg",je=1e3,Xn=300,gt=70,bt=je-70,B=130;function N(e,t={}){const n=document.createElementNS(Un,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function ne(e){const{from:t,to:n,tickStep:s,labelEvery:r}=e,a=document.createElement("div");a.className="board-wrap";const o=N("svg",{class:"board number-line",viewBox:`0 0 ${je} ${Xn}`});a.append(o);const i=document.createElement("div");i.className="tray",a.append(i);const l=N("g",{class:"hints"}),d=N("g",{class:"main"}),c=N("g",{class:"drag"});o.append(l,d,c);const f=n-t,p=g=>gt+(g-t)/f*(bt-gt),y=g=>t+(g-gt)/(bt-gt)*f,w=g=>{const L=Math.round((g-t)/s),M=Math.min(Math.max(L,0),Math.round(f/s));return t+M*s};d.append(N("line",{class:"axis",x1:String(gt-40),y1:String(B),x2:String(bt+40),y2:String(B)})),d.append(N("path",{class:"axis-head",d:`M${bt+40} ${B} l-22 -11 v22 Z`}));for(let g=0;g*s<=f+1e-9;g++){const L=t+g*s,M=p(L),$=g%r===0;if(d.append(N("line",{class:`tick${$?" labelled":""}`,x1:M.toFixed(1),y1:String(B-($?20:11)),x2:M.toFixed(1),y2:String(B+($?20:11))})),$){const v=N("text",{class:"tick-label",x:M.toFixed(1),y:String(B+50),"text-anchor":"middle"});v.textContent=String(L),d.append(v)}}const h=g=>{const L=o.getScreenCTM();if(!L)return t;const M=new DOMPoint(g.clientX,g.clientY).matrixTransform(L.inverse());return w(y(M.x))},k=[],x={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:a,xOf:p,flag(g){const L=p(g),M=N("g",{class:"flag",transform:`translate(${L.toFixed(1)} ${B})`});M.append(N("path",{d:"M0 0 v-96",class:"pole"})),M.append(N("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),d.append(M)},chest(g,L,M="chest"){let $=w(g);const v=N("g",{class:`chest ${M}`});v.innerHTML=x[M];const S=N("line",{class:"chest-thread",y1:String(B+6),y2:String(B+78)});c.append(S);const E=()=>{const I=p($);v.setAttribute("transform",`translate(${I.toFixed(1)} ${B+112})`),S.setAttribute("x1",I.toFixed(1)),S.setAttribute("x2",I.toFixed(1))};E(),c.append(v);let F=!1;const Q=I=>{F=!0,v.setPointerCapture(I.pointerId),$=h(I),E(),L($),I.preventDefault()},j=I=>{F&&($=h(I),E(),L($))},tt=()=>{F=!1};v.addEventListener("pointerdown",Q),v.addEventListener("pointermove",j),v.addEventListener("pointerup",tt),v.addEventListener("pointercancel",tt);const z=I=>{$=h(I),E(),L($)};return o.addEventListener("pointerdown",z),k.push(()=>{v.removeEventListener("pointerdown",Q),v.removeEventListener("pointermove",j),v.removeEventListener("pointerup",tt),v.removeEventListener("pointercancel",tt),o.removeEventListener("pointerdown",z)}),{get:()=>$,set:I=>{$=w(I),E(),L($)}}},token(g,L="ship"){let M=w(g);const $=N("g",{class:`chest static ${L}`});$.innerHTML=x[L],c.append($);const v=()=>{$.setAttribute("transform",`translate(${p(M).toFixed(1)} ${B-18}) scale(0.78)`)};return v(),{get:()=>M,set:S=>{M=w(S),v()}}},tray(g){i.replaceChildren();for(const L of g){const M=document.createElement("button");M.type="button",M.className="btn small tray-key",M.textContent=L.label,M.addEventListener("click",L.onClick),i.append(M)}},trayEnabled(g){for(const L of Array.from(i.children))g?L.removeAttribute("disabled"):L.setAttribute("disabled","true")},clearArrows(){for(const g of Array.from(d.querySelectorAll(".line-arrow")))g.remove()},band(g,L){const M=p(Math.min(g,L)),$=p(Math.max(g,L));l.append(N("rect",{class:"hint-band",x:M.toFixed(1),y:String(B-60),width:($-M).toFixed(1),height:"120",rx:"10"}))},bracket(g,L,M){const $=p(g),v=p(L),S=B+74,E=N("g",{class:"hint-bracket"});E.append(N("path",{d:`M${$.toFixed(1)} ${S-12} v12 H${v.toFixed(1)} v-12`}));const F=N("text",{x:(($+v)/2).toFixed(1),y:String(S+30),"text-anchor":"middle"});F.textContent=M,E.append(F),l.append(E)},count(g,L){const M=g<=L?s:-s,$=Math.round(Math.abs(L-g)/s);for(let v=1;v<=$;v++){const S=g+M*v,E=N("text",{class:"hint-count",x:p(S).toFixed(1),y:String(B-34),"text-anchor":"middle"});E.textContent=String(v),l.append(E)}},arrow(g,L,M,$="plus",v=0,S){const E=p(g),F=p(L),Q=B-56-v*34,j=N("g",{class:`line-arrow ${$}`});j.append(N("path",{d:`M${E.toFixed(1)} ${B-6} C${E.toFixed(1)} ${Q} ${F.toFixed(1)} ${Q} ${F.toFixed(1)} ${B-6}`,fill:"none"}));const tt=F>=E?1:-1;j.append(N("path",{class:"head",d:`M${F.toFixed(1)} ${B-6} l${(-12*tt).toFixed(1)} -14 l${(24*tt).toFixed(1)} 0 Z`}));const z=N("text",{x:((E+F)/2).toFixed(1),y:String(Q-8),"text-anchor":"middle"});if(z.textContent=M,j.append(z),S!==void 0){const I=N("g",{class:"order"});I.append(N("circle",{cx:E.toFixed(1),cy:String(B-26),r:"15"}));const D=N("text",{x:E.toFixed(1),y:String(B-19),"text-anchor":"middle"});D.textContent=String(S),I.append(D),j.append(I)}return d.append(j),j},clearHints(){l.replaceChildren()},destroy(){for(const g of k)g();a.remove()}}}function Pe(e,t,n){const s=t*n,r=Math.min(...e)-s,a=Math.max(...e)+s;return{tickStep:t,labelEvery:n,from:Math.floor(r/s)*s,to:Math.ceil(a/s)*s}}function Yn(e){const t=V(e),n=t()<.6?1:2,s=3+Math.floor(t()*2),r=n*(t()<.5?0:-2),a=[],o=[r];for(let c=0;c<s;c++){const f=n*(2+Math.floor(t()*5)),p=t()<.45?-1:1;a.push(p*f),o.push(o[o.length-1]+p*f)}if(o[o.length-1]===r){const c=n*3;a.push(c),o.push(o[o.length-1]+c)}const i=o[o.length-1],l=Pe(o,n,5),d=a.map(c=>u(c)).join(" , ");return{config:{...l,start:r,moves:a},solution:i,check:c=>c===i,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${d}`,`הסכום שלהם הוא ${u(i-r)}.`,`מ־${u(r)} מגיעים ל־${u(i)}.`]}}function Wn(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,moves:i}=e.config,l=ne({from:n,to:s,tickStep:r,labelEvery:a}),d=[o];let c=o;const f=i.map((h,k)=>{const x=c+h,b=l.arrow(c,x,(h>0?"+":"")+h,h>=0?"plus":"minus",k%2,k+1);return c=x,d.push(x),b}),p=l.token(o,"ship");let y=null;const w=l.chest(o,h=>{y=h,t()},"chest");return{el:l.el,answer:()=>y,hint(h){if(h===1&&f[0]?.classList.add("lit"),h===2&&p.set(d[1]??o),h===3&&p.set(d[2]??d[d.length-1]??o),h>=4){for(const k of f)k.classList.add("lit");p.set(d[d.length-1]),w.set(d[d.length-1])}},demonstrate(){p.set(d[d.length-1]),w.set(d[d.length-1])},place:h=>w.set(h),destroy:()=>l.destroy()}}const Kn={kind:"voyage",generate:Yn,mount:Wn},ue=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function zn(e){const t=V(e),n=ue[Math.floor(t()*ue.length)],s=3+Math.floor(t()*2),r=t()<.5?0:-n[0],a=[],o=[r];for(let f=0;f<s;f++){const p=n[Math.floor(t()*n.length)];a.push(p),o.push(o[o.length-1]+p)}o[o.length-1]===r&&a.push(n[0]);const l=r+a.reduce((f,p)=>f+p,0),d=Pe([...o,l],1,5),c=l-r;return{config:{...d,start:r,target:l,keys:n,route:a},solution:l,check:f=>f===l,hints:[{text:`מהצפרדע ליעד יש ${u(c)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${u(a[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${u(c)}.`,`${a.map(f=>u(f)).join(" ועוד ")} ביחד נותנים ${u(c)}.`]}}function Jn(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,start:o,target:i,keys:l,route:d}=e.config,c=ne({from:n,to:s,tickStep:r,labelEvery:a});c.flag(i);let f=o,p=!1;const y=c.chest(o,()=>{},"frog"),w=document.createElement("p");w.className="running-total";const h=()=>{w.textContent=p?`${u(f-o)}`:""},k=b=>{const g=f+b;g<n||g>s||(c.arrow(f,g,(b>0?"+":"")+b,b>=0?"plus":"minus"),f=g,p=!0,y.set(f),h(),t())},x=()=>{c.clearArrows(),f=o,p=!1,y.set(o),h(),t()};return c.tray([...l.map(b=>({label:(b>0?"+":"")+b,onClick:()=>k(b)})),{label:"התחלה",onClick:x}]),c.el.append(w),{el:c.el,answer:()=>p?f:null,hint(b){if(b===1&&c.band(Math.min(o,i),Math.max(o,i)),b===2&&w.classList.add("lit"),b===3&&(x(),k(d[0]??0)),b>=4){x();for(const g of d)k(g)}},demonstrate(){x();for(const b of d)k(b)},place:b=>{f=b,p=!0,y.set(b),h(),t()},destroy:()=>c.destroy()}}const Qn={kind:"jumps",generate:zn,mount:Jn},tr="http://www.w3.org/2000/svg",X=720,H=40;function C(e,t={}){const n=document.createElementNS(tr,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function Re(e){const{range:t}=e,n=document.createElement("div");n.className="board-wrap";const s=C("svg",{class:"board grid-board",viewBox:`0 0 ${X} ${X}`});n.append(s);const r=C("g",{class:"hints"}),a=C("g",{class:"main"}),o=C("g",{class:"drag"});s.append(r,a,o);const i=(X-2*H)/(2*t),l=h=>X/2+h*i,d=h=>X/2-h*i,c=(h,k)=>({x:Math.max(-t,Math.min(t,Math.round((h-X/2)/i))),y:Math.max(-t,Math.min(t,Math.round((X/2-k)/i)))});for(let h=-t;h<=t;h++)a.append(C("line",{class:"grid-line",x1:String(H),y1:d(h).toFixed(1),x2:String(X-H),y2:d(h).toFixed(1)})),a.append(C("line",{class:"grid-line",x1:l(h).toFixed(1),y1:String(H),x2:l(h).toFixed(1),y2:String(X-H)}));a.append(C("line",{class:"grid-axis",x1:String(H-14),y1:d(0).toFixed(1),x2:String(X-H+14),y2:d(0).toFixed(1)})),a.append(C("line",{class:"grid-axis",x1:l(0).toFixed(1),y1:String(X-H+14),x2:l(0).toFixed(1),y2:String(H-14)})),a.append(C("path",{class:"grid-head",d:`M${X-H+14} ${d(0)} l-18 -9 v18 Z`})),a.append(C("path",{class:"grid-head",d:`M${l(0)} ${H-14} l-9 18 h18 Z`}));for(let h=-t;h<=t;h++){if(h===0)continue;const k=C("text",{class:"grid-label",x:l(h).toFixed(1),y:(d(0)+30).toFixed(1),"text-anchor":"middle"});k.textContent=String(h);const x=C("text",{class:"grid-label",x:(l(0)-16).toFixed(1),y:(d(h)+9).toFixed(1),"text-anchor":"end"});x.textContent=String(h),a.append(k,x)}const f=h=>{const k=s.getScreenCTM();if(!k)return{x:0,y:0};const x=new DOMPoint(h.clientX,h.clientY).matrixTransform(k.inverse());return c(x.x,x.y)},p=[],y=(h,k)=>h.map(x=>`${l(x.x+k.x).toFixed(1)},${d(x.y+k.y).toFixed(1)}`).join(" ");return{el:n,xOf:l,yOf:d,pick(h){let k={x:0,y:0};const x=C("g",{class:"pick hidden"});x.append(C("circle",{class:"pick-ring",r:"22"})),x.append(C("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),o.append(x);const b=()=>{x.classList.remove("hidden"),x.setAttribute("transform",`translate(${l(k.x).toFixed(1)} ${d(k.y).toFixed(1)})`)},g=L=>{k=f(L),b(),h(k),L.preventDefault()};return s.addEventListener("pointerdown",g),p.push(()=>s.removeEventListener("pointerdown",g)),{get:()=>k,set:L=>{k=L,b(),h(k)}}},shape(h,k=""){const x=C("polygon",{class:`shape ${k}`,points:y(h,{x:0,y:0})});return a.append(x),x},dragShape(h,k,x){let b={...k};const g=C("polygon",{class:"shape ghost",points:y(h,b)});o.append(g);const L=()=>g.setAttribute("points",y(h,b));let M=!1;const $=F=>{M=!0,g.setPointerCapture(F.pointerId),F.preventDefault()},v=F=>{M&&(b=f(F),L(),x(b))},S=()=>{M=!1};g.addEventListener("pointerdown",$),g.addEventListener("pointermove",v),g.addEventListener("pointerup",S),g.addEventListener("pointercancel",S);const E=F=>{F.target!==g&&(b=f(F),L(),x(b))};return s.addEventListener("pointerdown",E),p.push(()=>{g.removeEventListener("pointerdown",$),g.removeEventListener("pointermove",v),g.removeEventListener("pointerup",S),g.removeEventListener("pointercancel",S),s.removeEventListener("pointerdown",E)}),{get:()=>b,set:F=>{b={...F},L(),x(b)}}},scout(h,k){const x=l(k==="x"?h:0),b=d(k==="x"?0:h),g=C("g",{class:`scout ${k}`,transform:`translate(${x.toFixed(1)} ${b.toFixed(1)})`});g.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,a.append(g)},guide(h,k){const x=k==="x"?{x1:l(h),y1:H,x2:l(h),y2:X-H}:{x1:H,y1:d(h),x2:X-H,y2:d(h)};r.append(C("line",{class:"guide",x1:x.x1.toFixed(1),y1:x.y1.toFixed(1),x2:x.x2.toFixed(1),y2:x.y2.toFixed(1)}))},mirrorAxis(h){const k=h==="y"?{x1:l(0),y1:H-14,x2:l(0),y2:X-H+14}:{x1:H-14,y1:d(0),x2:X-H+14,y2:d(0)};a.append(C("line",{class:"mirror-axis",x1:k.x1.toFixed(1),y1:k.y1.toFixed(1),x2:k.x2.toFixed(1),y2:k.y2.toFixed(1)}))},span(h,k,x){const b=C("g",{class:"hint-span"});b.append(C("line",{x1:l(h.x).toFixed(1),y1:d(h.y).toFixed(1),x2:l(k.x).toFixed(1),y2:d(k.y).toFixed(1)}));const g=C("text",{x:((l(h.x)+l(k.x))/2).toFixed(1),y:((d(h.y)+d(k.y))/2-10).toFixed(1),"text-anchor":"middle"});g.textContent=x,b.append(g),r.append(b)},dot(h,k=""){r.append(C("circle",{class:`grid-dot ${k}`,cx:l(h.x).toFixed(1),cy:d(h.y).toFixed(1),r:"11"}))},clearHints(){r.replaceChildren()},destroy(){for(const h of p)h();n.remove()}}}function er(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const ge=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function nr(e){const t=V(e),n=6,s=ge[Math.floor(t()*ge.length)],r=t()<.5?"y":"x",a=r==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},o=er(a,r);return{config:{range:n,shape:s,anchor:a,axis:r},solution:o,check:l=>l.x===o.x&&l.y===o.y,hints:[{text:`הציר ${r==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[r==="y"?`בשיקוף סביב הציר האנכי כל ${u("x")} מחליף סימן ו־${u("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${u("y")} מחליף סימן ו־${u("x")} נשאר.`,`${u(`(${a.x}, ${a.y})`)} הולך ל־${u(`(${o.x}, ${o.y})`)}.`]}}function rr(e,t){const{range:n,shape:s,anchor:r,axis:a}=e.config,o=e.solution,i=Re({range:n});i.mirrorAxis(a),i.shape(s.map(p=>({x:p.x+r.x,y:p.y+r.y})));const l=s.map(p=>a==="y"?{x:-p.x,y:p.y}:{x:p.x,y:-p.y});let d=null;const c=a==="y"?{x:-n+1,y:-n+2}:{x:-n+2,y:-n+1},f=i.dragShape(l,c,p=>{d=p,t()});return{el:i.el,answer:()=>d,hint(p){if(p===1&&i.guide(0,a==="y"?"x":"y"),p===2){const y=a==="y"?{x:0,y:r.y}:{x:r.x,y:0};i.span(r,y,u(Math.abs(a==="y"?r.x:r.y)))}p===3&&i.dot(o,"lit"),p>=4&&f.set(o)},demonstrate(){i.dot(o,"lit"),f.set(o)},place:p=>f.set(p),destroy:()=>i.destroy()}}const sr={kind:"mirror",generate:nr,mount:rr};function ar(){const e=document.createElement("div");e.className="board-wrap chain-board";const t=document.createElement("p");t.className="chain-goal";const n=document.createElement("p");n.className="chain-value";const s=document.createElement("p");s.className="chain-steps";const r=document.createElement("p");r.className="chain-hint";const a=document.createElement("div");return a.className="tray",e.append(t,n,s,r,a),{el:e,setValue:o=>{n.textContent=String(o)},setChain:o=>{s.textContent=o.join(" → ")},goal:o=>{t.textContent=o},keys:o=>{a.replaceChildren();for(const i of o){const l=document.createElement("button");l.type="button",l.className="btn small tray-key",l.textContent=i.label,l.addEventListener("click",i.onClick),a.append(l)}},mark:o=>{r.textContent=o},matched:o=>n.classList.toggle("matched",o),clearHints:()=>{r.textContent=""},destroy:()=>e.remove()}}function or(e){const t=V(e),n=[2,3,5],s=n[Math.floor(t()*n.length)],r=s===2?4+Math.floor(t()*4):s===3?3+Math.floor(t()*2):2+Math.floor(t()*2),a=s**r,o=[...new Set([s,...n])].sort((i,l)=>i-l);return{config:{base:s,exponent:r,target:a,keys:o},solution:a,check:i=>i===a,hints:[{text:`${u(a)} הוא חזקה של ${u(s)}`},{text:`${u(s)} × ${u(s)} = ${u(s*s)}`},{text:`צריך ${u(r)} פעמים ${u(s)}`},{text:"כך בונים את המספר"}],explain:[`${u(a)} = ${u(`${s}^${r}`)}.`,`${Array.from({length:r},()=>u(s)).join(" × ")} = ${u(a)}.`]}}function lr(e,t){const{base:n,exponent:s,target:r,keys:a}=e.config,o=ar();o.goal(`${r}`);let i=1,l=["1"],d=!1;const c=()=>{o.setValue(i),o.setChain(l),o.matched(i===r)},f=y=>{i*y>r*100||(i*=y,l.push(`×${y}`),d=!0,c(),t())},p=()=>{i=1,l=["1"],d=!1,c(),t()};return o.keys([...a.map(y=>({label:`× ${y}`,onClick:()=>f(y)})),{label:"התחלה",onClick:p}]),c(),{el:o.el,answer:()=>d?i:null,hint(y){if(y===1&&o.mark(`${r} = ?`),y===2&&o.mark(`${n} × ${n} = ${n*n}`),y===3&&(p(),f(n),f(n)),y>=4){p();for(let w=0;w<s;w++)f(n)}},demonstrate(){p();for(let y=0;y<s;y++)f(n)},place:y=>{i=y,d=!0,l=[String(y)],c(),t()},destroy:()=>o.destroy()}}const ir={kind:"powers",generate:or,mount:lr},cr="http://www.w3.org/2000/svg",Ht=820,jt=620,wt=70;function J(e,t={}){const n=document.createElementNS(cr,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function dr(e){const{cols:t,rows:n,square:s=!1}=e,r=document.createElement("div");r.className="board-wrap";const a=J("svg",{class:"board rect-board",viewBox:`0 0 ${Ht} ${jt}`});r.append(a);const o=J("g",{class:"hints"}),i=J("g",{class:"main"}),l=J("g",{class:"drag"});a.append(i,o,l);const d=Math.min((Ht-2*wt)/t,(jt-2*wt)/n),c=wt,f=jt-wt,p=x=>c+x*d,y=x=>f-x*d;for(let x=0;x<=t;x++)i.append(J("line",{class:"cell-line",x1:p(x).toFixed(1),y1:y(0).toFixed(1),x2:p(x).toFixed(1),y2:y(n).toFixed(1)}));for(let x=0;x<=n;x++)i.append(J("line",{class:"cell-line",x1:p(0).toFixed(1),y1:y(x).toFixed(1),x2:p(t).toFixed(1),y2:y(x).toFixed(1)}));const w=J("text",{class:"goal",x:String(Ht-30),y:"58","text-anchor":"end"});i.append(w);const h=[];return{el:r,corner(x,b){let g={...x};const L=J("rect",{class:"area-rect"}),M=J("circle",{class:"area-handle",r:"20"}),$=J("text",{class:"area-text",x:"30",y:"58","text-anchor":"start"}),v=J("text",{class:"side-label","text-anchor":"middle"}),S=J("text",{class:"side-label","text-anchor":"middle"});l.append(L,v,S,$,M);const E=()=>{L.setAttribute("x",p(0).toFixed(1)),L.setAttribute("y",y(g.h).toFixed(1)),L.setAttribute("width",(g.w*d).toFixed(1)),L.setAttribute("height",(g.h*d).toFixed(1)),M.setAttribute("cx",p(g.w).toFixed(1)),M.setAttribute("cy",y(g.h).toFixed(1)),$.textContent=`${g.w} × ${g.h} = ${g.w*g.h}`,v.setAttribute("x",p(g.w/2).toFixed(1)),v.setAttribute("y",(y(0)+44).toFixed(1)),v.textContent=String(g.w),S.setAttribute("x",(p(0)-32).toFixed(1)),S.setAttribute("y",(y(g.h/2)+10).toFixed(1)),S.textContent=String(g.h)};E();const F=D=>{const ht=a.getScreenCTM();if(!ht)return g;const q=new DOMPoint(D.clientX,D.clientY).matrixTransform(ht.inverse());let T=Math.round((q.x-c)/d),P=Math.round((f-q.y)/d);if(s){const le=Math.max(T,P);T=le,P=le}return{w:Math.max(1,Math.min(t,T)),h:Math.max(1,Math.min(n,P))}};let Q=!1;const j=D=>{Q=!0,M.setPointerCapture(D.pointerId),D.preventDefault()},tt=D=>{Q&&(g=F(D),E(),b(g))},z=()=>{Q=!1};M.addEventListener("pointerdown",j),M.addEventListener("pointermove",tt),M.addEventListener("pointerup",z),M.addEventListener("pointercancel",z);const I=D=>{D.target!==M&&(g=F(D),E(),b(g))};return a.addEventListener("pointerdown",I),h.push(()=>{M.removeEventListener("pointerdown",j),M.removeEventListener("pointermove",tt),M.removeEventListener("pointerup",z),M.removeEventListener("pointercancel",z),a.removeEventListener("pointerdown",I)}),{get:()=>g,set:D=>{g={...D},E(),b(g)}}},goal(x){w.textContent=x},strip(x,b){o.append(J("rect",{class:"hint-strip",x:p(0).toFixed(1),y:y(b).toFixed(1),width:(x*d).toFixed(1),height:(b*d).toFixed(1)}))},clearHints(){o.replaceChildren()},destroy(){for(const x of h)x();r.remove()}}}function xe(e,t,n){const s=[];for(let r=1;r<=t;r++){if(e%r!==0)continue;const a=e/r;a>=1&&a<=n&&s.push({w:r,h:a})}return s}function fr(e){const t=V(e),n=12,s=10;let r=24;for(let i=0;i<40;i++){const l=2+Math.floor(t()*9),d=2+Math.floor(t()*8),c=l*d;if(xe(c,n,s).filter(f=>f.w>1&&f.h>1).length>=2){r=c;break}}const a=xe(r,n,s),o=a.find(i=>i.w>1&&i.h>1)??a[0];return{config:{cols:n,rows:s,target:r,square:!1},solution:o,check:i=>i.w*i.h===r,hints:[{text:`צריך מלבן ששטחו ${u(r)}`},{text:`${u(o.w)} בשורה`},{text:`${u(o.w)} כפול ${u(o.h)}`},{text:"כך זה נראה"}],explain:[`${u(o.w)} × ${u(o.h)} = ${u(r)}.`,`יש גם דרכים אחרות: ${a.map(i=>u(`${i.w}×${i.h}`)).join(" , ")}.`]}}function De(e,t){const{cols:n,rows:s,target:r,square:a}=e.config,o=dr({cols:n,rows:s,square:a});o.goal(`= ${r}`);const i=e.solution;let l=!1;const d=o.corner({w:1,h:1},()=>{l=!0,t()});return{el:o.el,answer:()=>l?d.get():null,hint(c){c===1&&o.goal(`= ${r}`),c===2&&o.strip(i.w,1),c===3&&o.strip(i.w,i.h),c>=4&&d.set(i)},demonstrate(){d.set(i)},place:c=>d.set(c),destroy:()=>o.destroy()}}const pr={kind:"product",generate:fr,mount:De};function hr(e){const t=V(e),n=12,s=12,r=3+Math.floor(t()*8),a=r*r;return{config:{cols:n,rows:s,target:a,square:!0},solution:{w:r,h:r},check:o=>o.w===r&&o.h===r,hints:[{text:`ריבוע ששטחו ${u(a)}`},{text:"אותו מספר בשורה ובעמודה"},{text:`${u(r)} בשורה`},{text:`${u(r)} כפול ${u(r)}`}],explain:[`${u(r)} × ${u(r)} = ${u(a)}.`,`הצלע היא השורש הריבועי של ${u(a)}.`]}}const ur={kind:"perfect-square",generate:hr,mount:De};function gr(e){const t=V(e),n=6,s=()=>{const a=1+Math.floor(t()*(n-1));return t()<.5?-a:a},r={x:s(),y:s()};return{config:{range:n,target:r},solution:r,check:a=>a.x===r.x&&a.y===r.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${u(`(${r.x}, ${r.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${u(r.x)}, והצופה על הציר האנכי ב־${u(r.y)}.`,`המפגש הוא ${u(`(${r.x}, ${r.y})`)}.`]}}function xr(e,t){const{range:n,target:s}=e.config,r=Re({range:n});r.scout(s.x,"x"),r.scout(s.y,"y");let a=null;const o=r.pick(i=>{a=i,t()});return{el:r.el,answer:()=>a,hint(i){i===1&&r.guide(s.x,"x"),i===2&&r.guide(s.y,"y"),i===3&&r.dot(s,"lit"),i>=4&&o.set(s)},demonstrate(){r.dot(s,"lit"),o.set(s)},place:i=>o.set(i),destroy:()=>r.destroy()}}const yr={kind:"quadrant",generate:gr,mount:xr},ye=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function mr(e){const t=V(e),n=ye[Math.floor(t()*ye.length)],s=Math.round((n.to-n.from)/n.tickStep),r=[];for(let i=1;i<s;i++)i%n.labelEvery!==0&&r.push(n.from+i*n.tickStep);const a=r[Math.floor(t()*r.length)],o=n.tickStep*n.labelEvery;return{config:{...n,target:a},solution:a,check:i=>i===a,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${u(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${u(o)}.`,`כל סימון קטן שווה ${u(n.tickStep)}.`,`היעד הוא ${u(a)}.`]}}function kr(e,t){const{from:n,to:s,tickStep:r,labelEvery:a,target:o}=e.config,i=ne({from:n,to:s,tickStep:r,labelEvery:a});i.flag(o);let l=null;const d=i.chest(n,p=>{l=p,t()});l=null;const c=n+Math.floor((o-n)/(r*a))*r*a,f=c+r*a;return{el:i.el,answer:()=>l,hint(p){p===1&&i.band(c,f),p===2&&i.bracket(n,n+r,String(r)),p===3&&i.count(c,o),p>=4&&d.set(o)},demonstrate(){i.count(c,o),d.set(o)},place:p=>d.set(p),destroy:()=>i.destroy()}}const br={kind:"treasure-line",generate:mr,mount:kr};const _e={"treasure-line":br,jumps:Qn,voyage:Kn,quadrant:yr,mirror:sr,product:pr,powers:ir,"perfect-square":ur,"alphametic-sum":kn,"alphametic-product":bn,"angle-aim":Zn,"angle-straight":Fn,"angle-triangle":Nn,"angle-isosceles":Cn,machine:Vn,"like-terms":Rn,balance:Bn,"balance-both":On};function wr(e){return _e[e]}function Ve(e){return _e[e]!==void 0}const pt=5;function Pt(e,t){return Math.max(1,pt-e-t)}function Mr(e,t){return Math.max(0,t-e)}const vr=.8;function re(){return[...Qt].sort((e,t)=>e.order-t.order)}function It(e,t){return e.missions[t]??0}function Ue(e,t){return It(e,t)>0}function Lr(e,t){return Ve(e.kind)&&e.requires.every(n=>Ue(t,n))}function qr(e,t){return Te(e.id).filter(n=>Lr(n,t))}function Tt(e){return Te(e.id).filter(t=>Ve(t.kind))}function $r(e,t){return Tt(e).reduce((n,s)=>n+It(t,s.id),0)}function Er(e){return Tt(e).length*pt}function Sr(e,t){const n=Er(e);return n===0?!1:$r(e,t)>=vr*n}function Gt(e,t){const n=re(),s=n.findIndex(r=>r.id===e.id);return s<=0?!0:Sr(n[s-1],t)}function Ar(e,t){const n=Tt(e);return n.length>0&&n.every(s=>Ue(t,s.id))}function Zr(e){const t=re(),n=t.filter(s=>Gt(s,e));return n.find(s=>!Ar(s,e))??n[n.length-1]??t[0]}const qt={width:2e3,height:1e3};function Yt(e,t){return{x:(e+180)/360*qt.width,y:(90-t)/180*qt.height}}const Fr={x:0,y:0,w:qt.width,h:qt.height};function Nr(e,t){const n=Yt(e.lon0,e.lat0),s=Yt(e.lon1,e.lat1);let r=Math.min(n.x,s.x),a=Math.min(n.y,s.y),o=Math.abs(s.x-n.x),i=Math.abs(s.y-n.y);if(o/i<t){const l=i*t;r-=(l-o)/2,o=l}else{const l=o/t;a-=(l-i)/2,i=l}return{x:r,y:a,w:o,h:i}}function Cr(e,t,n){const s=Yt(e,t);return{left:(s.x-n.x)/n.w*100,top:(s.y-n.y)/n.h*100}}function Xe(e,t,n){const s=m("div",{class:"map-art","aria-hidden":"true"});s.innerHTML=e;const r=s.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=m("div",{class:"map-markers"});for(const o of n){const{left:i,top:l}=Cr(o.lon,o.lat,t),d=o.onClick?"button":"div",c=m(d,{class:`marker ${o.state}`,style:`left:${i.toFixed(2)}%; top:${l.toFixed(2)}%`});d==="button"&&c.setAttribute("type","button");const f=m("span",{class:"marker-icon"});f.innerHTML=o.icon;const p=m("span",{class:"marker-caption"},m("span",{class:"marker-label"},o.label),...o.sub?[m("span",{class:"marker-sub"},o.sub)]:[]);c.append(f,p),o.onClick&&c.addEventListener("click",o.onClick),a.append(c)}return m("div",{class:"map"},s,a)}const Ye=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,Ir=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,Tr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function Gr(){const e=_(),t=re().map(n=>{const s=ie(n).length,r=ie(n).filter(a=>e.conquered.includes(a.id)).length;return Gt(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${s}`,state:"continent",icon:Ir,onClick:()=>K(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:Tr}});return W({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Xe(Ye,Fr,t),m("div",{class:"row"},Rt("שדרוג הגיבורים","/upgrades"),Rt("תפריט המשימות","/missions"),Rt("הגיבורים שלי","/setup")))}function Rt(e,t){const n=m("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>K(t)),n}const Dt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Br=5/3;function Or(e){const t=te(e.id??"");if(!t)return W({title:"יבשת לא נמצאה"},m("p",{},"חזרה למפת העולם."));const n=_();if(!Gt(t,n)){const r=m("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>K("/")),W({title:t.name,subtitle:t.domain},m("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),m("div",{class:"row"},r))}const s=t.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:Dt}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:Dt}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:Dt,onClick:()=>K(`/battle/${r.id}`)});return W({title:t.name,subtitle:t.domain},Xe(Ye,Nr(t.view,Br),s),m("div",{class:"row"},me("שדרוג הגיבורים","/upgrades"),me("תפריט המשימות",`/missions/${t.id}`)))}function me(e,t){const n=m("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>K(t)),n}function ot(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function $t(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function Hr(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function lt(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function Wt(e,t){let n=null,s=1/0;for(const r of t){const a=ot(e,r);(a<s-1e-9||Math.abs(a-s)<=1e-9&&n&&r.id<n.id)&&(n=r,s=a)}return n}const jr=2.2;function Pr(e,t){const n=Hr(e,t.side);if(n.length===0)return{kind:"idle"};const s=Wt(t,n.filter(o=>o.stats.range<=1.5));if(t.stats.range>2&&s&&ot(t,s)<jr){const o=t.x-s.x,i=t.y-s.y,l=Math.hypot(o,i)||1;return{kind:"move",x:t.x+o/l*3,y:t.y+i/l*3}}const a=Wt(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}const Kt=1/30,ke=50;function Rr(e,t){return e*ke/(ke+t)}const be=.3,We=.45,Ke={arrow:14,fire:9,heal:12},Dr=.85,_r=.15;function Vr(e,t,n,s){const r=t==="player"?1:-1,a=t==="player"?3:n-3,o=s/2,i=[0,-1.6,1.6];return e.map((l,d)=>({x:a+(l.stats.range<=1.5?2*r:0),y:o+(i[d]??0)}))}function Ur(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=V(e.seed),s={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},r=(a,o)=>{const i=Vr(a,o,t.width,t.height);a.forEach((l,d)=>{const c=i[d];s.units.push({id:`${o}-${l.cls}-${d}`,side:o,cls:l.cls,name:l.name,gender:l.gender,x:c.x+mt(n,-.6,.6),y:c.y+mt(n,-.6,.6),hp:l.stats.hp,maxHp:l.stats.hp,stats:l.stats,order:o===s.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:mt(n,0,1/l.stats.attackRate),healCooldown:mt(n,0,l.stats.healRate??3),facing:o==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(e.player,"player"),r(e.enemy,"enemy"),s}function _t(e,t,n){const s=lt(e,t);s?.alive&&(s.order=n)}function we(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function Me(e,t){const n=lt(e,t);if(!n?.alive||!n.stats.healing)return null;let s=null;for(const r of $t(e,n.side))r.id===n.id||r.hp>=r.maxHp||ot(n,r)>n.stats.range||(!s||r.hp/r.maxHp<s.hp/s.maxHp)&&(s=r);return s}function Xr(e,t){const n=lt(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function Yr(e,t,n){const s=lt(e,t),r=lt(e,n),a=s?.stats.healing;return!s?.alive||!a||s.healCooldown>0||!r?.alive||r.side!==s.side||r.id===s.id||ot(s,r)>s.stats.range?!1:(ze(e,s,r,a),!0)}function ze(e,t,n,s){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:Ke.heal}),t.healCooldown=t.stats.healRate??3}function Wr(e,t=Kt){if(!e.winner){e.time+=t,Kr(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),zr(e,n),Jr(e,n,t));es(e),ns(e),rs(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Kr(e,t){const n=[];for(const s of e.projectiles){const r=lt(e,s.targetId);if(!r||!r.alive)continue;const a=r.x-s.x,o=r.y-s.y,i=Math.hypot(a,o),l=s.speed*t;if(i<=l){if(s.kind==="heal"){const d=Math.min(r.maxHp-r.hp,s.amount);r.hp+=d,e.events.push({kind:"heal",unitId:r.id,amount:d,time:e.time})}else Je(e,r,s.amount);continue}s.x+=a/i*l,s.y+=o/i*l,s.angle=Math.atan2(o,a),n.push(s)}e.projectiles=n}function zr(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const s=$t(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*Dr&&ot(t,a)<=t.stats.range);let r=null;for(const a of s)(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);r&&ze(e,t,r,n)}function Jr(e,t,n){const s=Qr(e,t);if(s.kind==="idle"){t.targetId=null;return}if(s.kind==="move"){t.targetId=null,ve(t,s.x,s.y,n);return}const r=lt(e,s.targetId);if(!r||!r.alive){t.targetId=null;return}if(t.targetId=r.id,ot(t,r)>t.stats.range){ve(t,r.x,r.y,n);return}t.facing=r.x>=t.x?1:-1,t.cooldown<=0&&ts(e,t,r)}function Qr(e,t){const n=t.order;if(n.kind==="move")if(ot(t,n)<=_r)t.order=we(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const s=lt(e,t.order.targetId);if(s?.alive)return{kind:"attack",targetId:s.id};t.order=we(e,t)}if(t.order.kind==="hold"){const s=e.units.filter(a=>a.alive&&a.side!==t.side&&ot(t,a)<=t.stats.range),r=Wt(t,s);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return Pr(e,t)}function ve(e,t,n,s){const r=t-e.x,a=n-e.y,o=Math.hypot(r,a);if(o<1e-6)return;const i=Math.min(o,e.stats.speed*s);e.x+=r/o*i,e.y+=a/o*i,Math.abs(r)>1e-6&&(e.facing=r>0?1:-1)}function ts(e,t,n){const s=Rr(t.stats.attack,n.stats.defense)*(1+mt(e.rng,-be,be));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){Je(e,n,s);return}const r=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:r,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:s,speed:Ke[r]})}function Je(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function es(e){const t=e.units.filter(s=>s.alive),n=We*2;for(let s=0;s<t.length;s++)for(let r=s+1;r<t.length;r++){const a=t[s],o=t[r],i=o.x-a.x,l=o.y-a.y,d=Math.hypot(i,l);if(d>=n)continue;const c=(n-d)/2,f=d<1e-6?1:i/d,p=d<1e-6?0:l/d;a.x-=f*c,a.y-=p*c,o.x+=f*c,o.y+=p*c}}function ns(e){const t=We;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function rs(e){const t=$t(e,"player").length,n=$t(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const kt={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function Et(e,t){return kt[e][t]}const St={warrior:kt.warrior.m,archer:kt.archer.m,mage:kt.mage.m},se={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},ss={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},ae={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},oe=[2,3,5,8,12,17,23,30],Qe=oe.length,as=.08;function os(e){return e>=Qe?null:oe[e]}function tn(e){return 1+as*e}const Le=8;function ls(e,t,n){return e*tn(n)}function is(e){let t=0;for(let n=0;n<Math.min(e,Qe);n++)t+=oe[n];return t}const en=["warrior","archer","mage"],cs={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},ds=["hp","attack","defense"];function fs(e,t){const s={...se[e]};for(const r of ae[e]){const a=t[r]??0;if(a<=0)continue;const o=s[r];typeof o=="number"&&(s[r]=o*tn(a))}return s}function ps(e){return en.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||St[t],gender:n.gender,stats:fs(t,n.levels)}})}function hs(e){return en.map(t=>{const n={...se[t]};for(const s of ds){const r=n[s];typeof r=="number"&&(n[s]=r*e)}return{cls:t,name:cs[t],gender:"m",stats:n}})}function us(e,t,n){const s=ee(e);return!s||s.fortress.home?null:{player:ps(t),enemy:hs(s.fortress.difficulty),seed:n,manual:"player"}}let vt=null;function gs(e){vt=e}function xs(e){return vt&&vt.fortressId===e?vt:null}const et={x:64,y:84},nt={x:56,y:58},st={x:77,y:56},At={x:66,y:50},Zt={x:60,y:52},qe={x:100,y:70},Ft={x:99,y:51};function ys(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function G(e,t,n,s,r=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${s})${r}`)}function ms(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function ks(e,t){const{phase:n,stride:s,time:r}=t,a=Math.sin(n)*s,o=Math.sin(n*2)*s,i=Math.sin(r*2.1)*(1-s),l=ms(t.sinceAttack);G(e.legBack,a*26,et.x,et.y),G(e.legFront,-a*26,et.x,et.y),G(e.cloak,a*9+i*1.6,Zt.x,Zt.y),G(e.robe,a*4+i*1.2,et.x,et.y+20),G(e.quiver,a*6,nt.x,nt.y);const d=-Math.abs(o)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${d.toFixed(2)}) rotate(${(a*2+i*.9).toFixed(2)} ${et.x} ${et.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(d*1.15).toFixed(2)}) rotate(${(-a*2.5+i*1.4).toFixed(2)} ${At.x} ${At.y})`),t.cls){case"warrior":{G(e.armBack,-a*14,nt.x,nt.y),G(e.armFront,a*10+l*60,st.x,st.y),G(e.sword,l*42,Ft.x,Ft.y),Lt(e.swoosh,t.sinceAttack<.42?Math.max(0,l)*.9:0);break}case"archer":{const c=t.sinceAttack<.42?l:-.35;if(G(e.armFront,a*5,st.x,st.y),G(e.armBack,-a*8-c*16,nt.x,nt.y),e.arrow){const f=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=f?"0":"1",e.arrow.setAttribute("transform",`translate(${(-c*9).toFixed(2)} 0)`)}e.bow&&G(e.bow,c*4,104,68),Lt(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{G(e.armBack,-a*10,nt.x,nt.y),G(e.armFront,a*6+l*26,st.x,st.y),G(e.staff,l*18,qe.x,qe.y);const c=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(r*4);e.orb&&$e(e.orb,c,100,20),e.orbHalo&&$e(e.orbHalo,c*1.1,100,20);const f=t.sinceAttack>=0&&t.sinceAttack<.45;Lt(e.swoosh,f?1-t.sinceAttack/.45:0),e.swoosh&&f&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function Lt(e,t){e&&(e.style.opacity=t.toFixed(2))}function $e(e,t,n,s){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(s*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function bs(e,t){const n=Math.min(1,t),s=1-Math.pow(1-n,3);G(e.legBack,s*30,et.x,et.y),G(e.legFront,-s*20,et.x,et.y),G(e.armBack,s*40,nt.x,nt.y),G(e.armFront,-s*60,st.x,st.y),G(e.sword,s*50,Ft.x,Ft.y),Lt(e.swoosh,0),G(e.head,s*18,At.x,At.y),G(e.cloak,s*12,Zt.x,Zt.y)}const ws=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Ms=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,vs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ls=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,qs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,$s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Es=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ss=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Y=100,dt=128,Ee=2.05,Se=.7,As="http://www.w3.org/2000/svg",Zs={"warrior-f":Ms,"warrior-m":vs,"archer-f":Ls,"archer-m":qs,"mage-f":$s,"mage-m":Es};function O(e,t={}){const n=document.createElementNS(As,e);for(const[s,r]of Object.entries(t))n.setAttribute(s,r);return n}function zt(e,t,n){const s=e.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("width",String(t)),s.setAttribute("height",String(n)),s.setAttribute("overflow","visible"))}function Fs(){const e=O("defs");return e.innerHTML=`
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
    </filter>`,e}function Ns(e,t){const n=O("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*Y} ${e.arena.height*Y}`,preserveAspectRatio:"xMidYMid meet"}),s=O("g",{class:"arena-art"});s.innerHTML=ws,zt(s,e.arena.width*Y,e.arena.height*Y);const r=O("g",{class:"layer-ground"}),a=O("g",{class:"layer-units"}),o=O("g",{class:"layer-shots"}),i=O("g",{class:"layer-bursts"}),l=O("g",{class:"layer-text"}),d=O("rect",{class:"vignette",width:String(e.arena.width*Y),height:String(e.arena.height*Y),fill:"url(#fx-vignette)"});n.append(Fs(),s,r,a,o,i,l,d);const c=new Map;for(const p of e.units){const y=Cs(p);c.set(p.id,y),r.append(y.ring,y.shadow,y.dust),a.append(y.group)}const f=p=>{p.preventDefault();const y=n.getScreenCTM();if(!y)return;const w=new DOMPoint(p.clientX,p.clientY).matrixTransform(y.inverse()),h=w.x/Y,k=w.y/Y;let x=null,b=1;for(const g of e.units){if(!g.alive)continue;const L=Math.hypot(g.x-h,g.y-.5-k);L<b&&(b=L,x=g)}t({x:h,y:k,unit:x})};return n.addEventListener("pointerdown",f),{el:n,update(p,y){for(const h of p.units)c.get(h.id)?.update(h,p.time,y.has(h.id));const w=[...p.units].sort((h,k)=>Number(h.alive)-Number(k.alive)||h.y-k.y);for(const h of w){const k=c.get(h.id);k&&a.append(k.group)}Is(o,p.projectiles,p.time),Gs(i,p,c),Bs(l,p,c)},destroy(){n.removeEventListener("pointerdown",f),n.remove()}}}function Cs(e){const t=O("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=O("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),s=O("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});s.style.opacity="0";const r=O("g",{class:`unit ${e.side} ${e.cls}`}),a=O("g",{class:"sprite"});a.innerHTML=Zs[`${e.cls}-${e.gender}`]??"",zt(a,dt,dt);const o=O("g",{class:"fallen"});o.innerHTML=Ss,zt(o,dt,dt),o.setAttribute("transform",`scale(${Ee}) translate(${-dt/2} -122)`),o.style.display="none";const i=O("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),l=O("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});r.append(o,a,i,l);const d=ys(a),c={group:r,ring:t,shadow:n,dust:s,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(f,p,y){const w=f.x*Y,h=f.y*Y,k=Math.hypot(f.x-c.px,f.y-c.py);c.px=f.x,c.py=f.y,k>8e-4&&(c.phase+=k*4.4,c.lastMoveAt=p);const x=p-c.lastMoveAt<.25,b=p-f.lastAttackAt;f.alive?ks(d,{cls:f.cls,phase:c.phase,stride:x?1:0,sinceAttack:b,time:p}):bs(d,(p-f.lastHitAt)/Se);const g=f.alive&&b>=0&&b<.3?Math.sin(b/.3*Math.PI)*16*f.facing:0;r.setAttribute("transform",`translate(${(w+g).toFixed(1)} ${h.toFixed(1)})`),t.setAttribute("cx",w.toFixed(1)),t.setAttribute("cy",h.toFixed(1)),t.style.display=y&&f.alive?"":"none",n.setAttribute("cx",w.toFixed(1)),n.setAttribute("cy",(h+6).toFixed(1)),n.style.opacity=f.alive?"1":"0.4",s.setAttribute("cx",(w-26*f.facing).toFixed(1)),s.setAttribute("cy",(h+10).toFixed(1)),s.style.opacity=x&&f.alive?(.18+.12*Math.abs(Math.sin(p*9))).toFixed(2):"0";const L=p-f.lastHitAt<.18,M=L&&f.alive?1.05:1,$=Ee*M;a.setAttribute("transform",`scale(${(f.facing*$).toFixed(3)} ${$.toFixed(3)}) translate(${-dt/2} -122)`);const v=f.alive?0:(p-f.lastHitAt)/Se;a.style.display=f.alive||v<1?"":"none",a.style.opacity=f.alive?"1":String(Math.max(0,1-v)),o.style.display=!f.alive&&v>.55?"":"none",o.style.opacity=String(Math.min(1,Math.max(0,(v-.55)/.45)));const S=Math.max(0,f.hp/f.maxHp);l.setAttribute("width",(94*S).toFixed(1)),r.classList.toggle("hurt",L&&f.alive),r.classList.toggle("dead",!f.alive),i.style.display=f.alive?"":"none",l.style.display=f.alive?"":"none"}};return c}function Is(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(O("g"));t.forEach((s,r)=>{const a=e.childNodes[r];a.getAttribute("data-kind")!==s.kind&&(a.setAttribute("data-kind",s.kind),a.setAttribute("class",`shot ${s.kind}`),a.innerHTML=Ts(s.kind));const i=s.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(s.x*Y).toFixed(1)} ${(s.y*Y).toFixed(1)}) rotate(${(s.angle*180/Math.PI).toFixed(1)})${i}`)})}function Ts(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function Gs(e,t,n){const s=t.events.filter(r=>t.time-r.time<.32);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(O("circle"));s.forEach((r,a)=>{const o=e.childNodes[a],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/.32;o.setAttribute("class",`burst ${r.kind}`),o.setAttribute("cx",(i.px*Y).toFixed(1)),o.setAttribute("cy",(i.py*Y-90).toFixed(1)),o.setAttribute("r",(14+l*40).toFixed(1)),o.setAttribute("opacity",(1-l).toFixed(2))})}function Bs(e,t,n){const s=t.events.filter(r=>t.time-r.time<1.1&&r.amount>=1);for(;e.childNodes.length>s.length;)e.lastChild?.remove();for(;e.childNodes.length<s.length;)e.append(O("text",{"text-anchor":"middle"}));s.forEach((r,a)=>{const o=e.childNodes[a],i=n.get(r.unitId);if(!i)return;const l=(t.time-r.time)/1.1;o.setAttribute("class",`floater ${r.kind}`),o.setAttribute("x",(i.px*Y).toFixed(1)),o.setAttribute("y",(i.py*Y-210-l*70).toFixed(1)),o.setAttribute("opacity",(1-l*l).toFixed(2));const d=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;o.textContent!==d&&(o.textContent=d)})}function Os(e){const t=ee(e.id??""),n=t?us(t.fortress.id,_(),Date.now()&65535||1):null;if(!t||!n)return W({title:"מבצר לא נמצא"},m("p",{},"חזרה למפת העולם."));const{continent:s,fortress:r}=t;if(_().conquered.includes(r.id)){const q=m("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return q.addEventListener("click",()=>K(`/continent/${s.id}`)),W({title:r.name,subtitle:s.name,showStars:!1},m("p",{class:"notice"},"המבצר הזה כבר נכבש."),m("div",{class:"row"},q))}const a=Ur(n),o=new Set(a.units.filter(q=>q.side==="player").map(q=>q.id)),i=js(new URLSearchParams(location.search).get("speed"));let l=!1,d=!1,c=0,f=0,p=0;window.__battle=a;const y=Ns(a,q=>tt(q)),w=m("div",{class:"stage"});w.append(y.el);const h=m("div",{class:"overlay"});w.append(h);const k=()=>{h.replaceChildren(m("div",{class:"panel"},m("h2",{},r.name),m("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),m("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),b())),h.classList.remove("hidden")},x=q=>{gs({fortressId:r.id,won:q,seconds:a.time,heroes:F.map(P=>({cls:P.cls,name:P.name||Et(P.cls,P.gender),alive:P.alive,health:Math.max(0,P.hp/P.maxHp)}))});const T=m("button",{class:"btn primary",type:"button"},"המשך");T.addEventListener("click",()=>K(`/result/${r.id}/${q?"win":"lose"}`)),h.replaceChildren(m("div",{class:"panel"},m("h2",{},q?"המבצר נכבש":"הקרב אבד"),m("p",{},q?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),T)),h.classList.remove("hidden")};function b(){const q=m("button",{class:"btn primary",type:"button"},"התחל קרב");return q.addEventListener("click",()=>{h.classList.add("hidden"),l=!0,f=performance.now()}),q}const g=m("div",{class:"portraits"}),L=m("button",{class:"btn small",type:"button"},"השהה"),M=m("button",{class:"btn small",type:"button"},"ריפוי"),$=m("button",{class:"btn small",type:"button"},"בחר הכול"),v=m("button",{class:"btn small",type:"button"},"עמוד במקום");L.addEventListener("click",()=>{d||(l=!l,f=performance.now(),L.textContent=l?"השהה":"המשך")}),$.addEventListener("click",()=>{o.clear();for(const q of a.units)q.side==="player"&&q.alive&&o.add(q.id);j()}),v.addEventListener("click",()=>{for(const q of o)_t(a,q,{kind:"hold"})});const S=a.units.find(q=>q.side==="player"&&q.cls==="mage");M.addEventListener("click",()=>{if(!S)return;const q=Me(a,S.id);q&&(Yr(a,S.id,q.id),E())});function E(){(S?Xr(a,S.id)&&Me(a,S.id)!==null:!1)?M.removeAttribute("disabled"):M.setAttribute("disabled","true")}const F=a.units.filter(q=>q.side==="player"),Q=F.map(q=>{const T=m("span",{class:"portrait-fill"}),P=m("button",{class:`portrait ${q.cls}`,type:"button"},m("span",{class:"portrait-name"},q.name||Et(q.cls,q.gender)),m("span",{class:"portrait-bar"},T));return P.addEventListener("click",()=>{q.alive&&(o.clear(),o.add(q.id),j())}),g.append(P),{unit:q,button:P,fill:T}});function j(){E();for(const q of Q){const T=Math.max(0,q.unit.hp/q.unit.maxHp);q.fill.style.width=`${(T*100).toFixed(0)}%`,q.button.classList.toggle("selected",o.has(q.unit.id)),q.button.classList.toggle("dead",!q.unit.alive)}}j();function tt(q){if(!l)return;const T=q.unit;if(T&&T.side==="player"&&T.alive){o.clear(),o.add(T.id),j();return}if(o.size!==0)for(const P of o)T&&T.side==="enemy"&&T.alive?_t(a,P,{kind:"attack",targetId:T.id}):_t(a,P,{kind:"move",x:q.x,y:q.y})}const z=q=>{q.code==="Space"&&(q.preventDefault(),L.click())};addEventListener("keydown",z);const I=()=>{if(c=requestAnimationFrame(I),l&&!d){const q=performance.now();p+=Math.min(.1,(q-f)/1e3)*i*Hs,f=q;let T=0;for(;p>=Kt&&T<8*i;)D(),p-=Kt,T++}y.update(a,o)},D=()=>{Wr(a),a.winner&&!d&&(d=!0,l=!1,x(a.winner==="player")),j()};k(),c=requestAnimationFrame(I);const ht=W({title:r.name,subtitle:`${s.name} · ${s.domain}`,showStars:!1},w,m("div",{class:"hud"},g,m("div",{class:"hud-actions"},M,$,v,L)));return{el:ht.el,destroy(){cancelAnimationFrame(c),removeEventListener("keydown",z),y.destroy(),ht.destroy()}}}const Hs=.6;function js(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function Ps(e){const t=ee(e.id??"");if(!t)return W({title:"מבצר לא נמצא"},m("p",{},"חזרה למפת העולם."));const{continent:n,fortress:s}=t,r=e.outcome==="win",a=xs(s.id),o=!_().flags.sawUpgrades;ct(c=>{r&&!c.conquered.includes(s.id)&&c.conquered.push(s.id),o&&(c.flags.sawUpgrades=!0,c.stars+=Le)});const i=[];a&&i.push(m("section",{class:"card"},m("h3",{},"הגיבורים שלך"),...a.heroes.map(c=>m("div",{class:"stat-row"},m("span",{class:"stat-name"},c.name),m("span",{class:"stat-value"},c.alive?`${Math.round(c.health*100)}% חיים`:"נפל"))),m("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),o&&i.push(m("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Le} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const l=n.fortresses.filter(c=>!c.home&&!_().conquered.includes(c.id)).length;r&&l===0?i.push(m("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||i.push(m("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const d=m("div",{class:"row"},Mt(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[Mt("קרב נוסף באותו מבצר",`/battle/${s.id}`)],Mt("חזרה ליבשת",`/continent/${n.id}`),Mt("תפריט המשימות","/missions"));return W({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${s.name} · ${te(n.id)?.name??""}`,showBack:!1},...i,d)}function Mt(e,t,n=!1){const s=m("button",{class:n?"btn primary":"btn",type:"button"},e);return s.addEventListener("click",()=>K(t)),s}function Rs(e){let t=0;for(const n of Object.keys(e.heroes)){const s=e.heroes[n];for(const r of ae[n])t+=is(s.levels[r]??0)}return t}function Ds(e,t,n){const s=()=>{i.remove(),removeEventListener("keydown",r)},r=l=>{l.key==="Escape"&&s()},a=n.map(l=>{const d=m("button",{class:l.primary?"btn primary":"btn",type:"button"},l.label);return d.addEventListener("click",()=>{s(),l.onClick()}),d}),o=m("div",{class:"modal",role:"dialog","aria-modal":"true"},m("h2",{},e),m("p",{},t),m("div",{class:"modal-actions"},...a)),i=m("div",{class:"backdrop"},o);i.addEventListener("click",l=>{l.target===i&&s()}),addEventListener("keydown",r),document.body.append(i),a.find(l=>l.classList.contains("primary"))?.focus()}function _s(){if(!_().flags.sawUpgrades)return W({title:"שדרוג הגיבורים"},m("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=m("div",{class:"stack"}),t=()=>{const n=_();e.replaceChildren(...Object.keys(St).map(s=>{const r=n.heroes[s],a=ae[s].map(i=>Vs(s,i,t)),o=Et(s,r.gender);return m("section",{class:"card hero"},m("h3",{},r.name?`${r.name} · ${o}`:o),m("div",{class:"stats"},...a))}))};return t(),W({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${Rs(_())}`},e)}function Vs(e,t,n){const a=_().heroes[e].levels[t]??0,o=se[e][t]??0,i=ls(o,t,a),l=os(a),d=m("button",{class:"btn small",type:"button"},l===null?"מרבי":`★ ${l}`);return l===null&&d.setAttribute("disabled","true"),d.addEventListener("click",()=>{if(l!==null){if(_().stars<l){Ds("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>K("/missions")}]);return}ct(c=>{c.stars-=l;const f=c.heroes[e];f.levels[t]=(f.levels[t]??0)+1}),n()}}),m("div",{class:"stat-row"},m("span",{class:"stat-name"},ss[t]),m("span",{class:"stat-value"},Us(i)),m("span",{class:"stat-level"},`דרגה ${a}`),d)}function Us(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function nn(e){const t=_(),n=te(e.id??""),s=n&&Gt(n,t)?n:Zr(t),r=qr(s,t),a=Tt(s).length-r.length,o=r.map(l=>{const d=It(t,l.id),c=m("button",{class:"card mission-card",type:"button"},m("h3",{},l.title),m("span",{class:"stars-row"},Xs(d)));return c.addEventListener("click",()=>K(`/mission/${l.id}`)),c}),i=o.length>0?[m("div",{class:"grid"},...o)]:[m("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return a>0&&i.push(m("p",{class:"muted"},`עוד ${a} משימות ייפתחו לפי ההתקדמות.`)),W({title:"משימות",subtitle:`${s.name} · ${s.domain}`},...i)}function Xs(e){return"★".repeat(e)+"☆".repeat(pt-e)}const Jt={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Ys=["m","f"];function Ws(){const e=m("div",{class:"stack"}),t=()=>{const s=_();e.replaceChildren(...Object.keys(St).map(r=>Ks(r,s.heroes[r].gender,s.heroes[r].name,t)))};t();const n=m("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{ct(s=>{for(const r of Object.keys(St)){const a=s.heroes[r];a.name.trim()||(a.name=Jt[r][a.gender][0])}s.flags.setupDone=!0}),K("/")}),W({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:_().flags.setupDone},e,m("div",{class:"row"},n))}function Ks(e,t,n,s){const r=m("input",{class:"name-input",type:"text",maxlength:"14",placeholder:Jt[e][t][0],value:n,"aria-label":`שם ה${Et(e,t)}`});r.addEventListener("input",()=>{ct(i=>{i.heroes[e].name=r.value})});const a=i=>{const l=m("button",{class:`btn small${t===i?" primary":""}`,type:"button"},kt[e][i]);return l.addEventListener("click",()=>{ct(d=>{d.heroes[e].gender=i}),s()}),l},o=Jt[e][t].map(i=>{const l=m("button",{class:"chip",type:"button"},i);return l.addEventListener("click",()=>{ct(d=>{d.heroes[e].name=i}),s()}),l});return m("section",{class:"card hero-setup"},m("div",{class:"setup-row"},...Ys.map(a)),m("div",{class:"setup-row"},r),m("div",{class:"setup-row chips"},...o))}function zs(e){const t=hn(e.id??""),n=t?wr(t.kind):void 0;if(!t||!n)return W({title:"משימה לא נמצאה"},m("p",{},"חזרה לתפריט המשימות."));const s=m("div",{class:"mission-stage"}),r=m("p",{class:"hint-line"}),a=m("div",{class:"stars-row big"}),o=m("div",{class:"overlay hidden"}),i=m("button",{class:"btn",type:"button"},"רמז"),l=m("button",{class:"btn primary",type:"button"},"בדיקה");l.setAttribute("disabled","true");let d,c,f=0,p=0,y=!1;const w=()=>{const M=y?h:Pt(f,p);a.replaceChildren(...Array.from({length:pt},($,v)=>m("span",{class:`star${v<M?" lit":""}`},"★")))};let h=pt;const k=()=>{!c||y||(c.answer()===null?l.setAttribute("disabled","true"):l.removeAttribute("disabled"))},x=M=>{c?.destroy(),d=n.generate(M),c=n.mount(d,k),f=0,p=0,y=!1,h=pt,r.textContent="",s.replaceChildren(c.el,o),o.classList.add("hidden"),l.setAttribute("disabled","true"),i.removeAttribute("disabled"),w(),b()};function b(){window.__mission={solve:()=>{c.demonstrate(),k()},place:M=>{c.place?.(M),k()},solution:()=>d.solution,state:()=>({hintsUsed:f,mistakes:p,finished:y,score:Pt(f,p)})}}i.addEventListener("click",()=>{y||f>=d.hints.length||(f++,c.hint(f),r.textContent=d.hints[f-1]?.text??"",f>=d.hints.length&&i.setAttribute("disabled","true"),w(),k())}),l.addEventListener("click",()=>{if(y)return;const M=c.answer();if(M!==null){if(d.check(M)){g();return}p++,r.textContent="לא שם. נסה שוב.",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),400),w()}});function g(){y=!0,h=Pt(f,p);const M=It(_(),t.id),$=Mr(M,h);ct(E=>{E.stars+=$,E.missions[t.id]=Math.max(M,h),E.solvedTopics.includes(t.topicId)||E.solvedTopics.push(t.topicId)}),w();const v=m("button",{class:"btn",type:"button"},"עוד אחת");v.addEventListener("click",()=>x(Math.floor(Math.random()*65535)+1));const S=m("button",{class:"btn primary",type:"button"},"לתפריט המשימות");S.addEventListener("click",()=>K("/missions")),o.replaceChildren(m("div",{class:"panel"},m("h2",{},"נכון"),...d.explain.map(E=>m("p",{},E)),m("p",{class:"reward"},$>0?`+${$} ★`:"★"),m("div",{class:"modal-actions"},S,v))),o.classList.remove("hidden")}x(Date.now()&65535||1);const L=W({title:t.title,subtitle:""},s,r,m("div",{class:"hud"},a,m("div",{class:"hud-actions"},i,l)));return{el:L.el,destroy(){c.destroy(),L.destroy()}}}rt("/",Gr);rt("/continent/:id",Or);rt("/battle/:id",Os);rt("/result/:id/:outcome",Ps);rt("/upgrades",_s);rt("/missions",nn);rt("/missions/:id",nn);rt("/mission/:id",zs);rt("/setup",Ws);rn(()=>{const e=m("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>K("/")),W({title:"הדף לא נמצא",showBack:!1},e)});!_().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const Ae=document.getElementById("app");Ae&&ln(Ae);
