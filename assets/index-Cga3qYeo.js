(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const We=[];let Ye=null,$t=null,Yt=null;function at(e,t){We.push({pattern:e.split("/").filter(Boolean),factory:t})}function Sn(e){Ye=e}function z(e){location.hash==="#"+e?se():location.hash=e}function En(){history.length>1?history.back():z("/")}function An(){return location.hash.replace(/^#/,"")||"/"}function Nn(e){const t=e.split("/").filter(Boolean);for(const n of We){if(n.pattern.length!==t.length)continue;const r={};let s=!0;for(let a=0;a<n.pattern.length;a++){const o=n.pattern[a],i=t[a];if(o.startsWith(":"))r[o.slice(1)]=decodeURIComponent(i);else if(o!==i){s=!1;break}}if(s)return{factory:n.factory,params:r}}return null}function se(){if(!$t)return;Yt?.destroy?.(),$t.replaceChildren();const e=An(),t=Nn(e),n=t?.factory??Ye;n&&(Yt=n(t?.params??{}),$t.append(Yt.el),$t.scrollTop=0)}function Zn(e){$t=e,addEventListener("hashchange",se),se()}const Kt="euclid.";class Fn{read(t){try{const n=localStorage.getItem(Kt+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(Kt+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(Kt+t)}catch{}}}const Ke=new Fn,ze="profile";function Cn(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],missions:{},flags:{sawUpgrades:!1,setupDone:!1}}}function In(e){return e.solvedTopics??=[],e.conquered??=[],e.missions??={},e}let vt=In(Ke.read(ze)??Cn());const ae=new Set;function U(){return vt}function Tn(e){return ae.add(e),()=>ae.delete(e)}function ht(e){e(vt),Ke.write(ze,vt);for(const t of ae)t(vt);return vt}function M(e,t={},...n){const r=document.createElement(e);for(const[s,a]of Object.entries(t))s==="class"?r.className=a:r.setAttribute(s,a);return r.append(...n),r}function K(e,...t){const n=M("button",{class:"stars",type:"button",title:"תפריט המשימות"}),r=()=>{n.replaceChildren(M("span",{class:"star-icon"},"★"),M("span",{},String(U().stars)))};r();const s=Tn(r);n.addEventListener("click",()=>z("/missions"));const a=M("header",{class:"top"});if(e.showBack!==!1){const i=M("button",{class:"back",type:"button","aria-label":"חזרה"},"→");i.addEventListener("click",()=>En()),a.append(i)}return a.append(M("div",{class:"titles"},M("h1",{},e.title),...e.subtitle?[M("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:M("div",{class:"page"},a,M("main",{class:"content"},...t)),destroy:()=>s()}}const pe=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.2,starsNeeded:16,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.22,starsNeeded:24,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.24,starsNeeded:30,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.26,starsNeeded:38,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.28,starsNeeded:46,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:54,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.31,starsNeeded:62,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.32,starsNeeded:70,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.33,starsNeeded:78,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.34,starsNeeded:86,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.35,starsNeeded:94,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.36,starsNeeded:100,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.37,starsNeeded:106,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.38,starsNeeded:112,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.39,starsNeeded:118,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.4,starsNeeded:124,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.41,starsNeeded:130,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.42,starsNeeded:136,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.44,starsNeeded:142,lon:165,lat:-81}]}];function ue(e){return pe.find(t=>t.id===e)}function he(e){for(const t of pe){const n=t.fortresses.find(r=>r.id===e);if(n)return{continent:t,fortress:n}}}function $e(e){return e.fortresses.filter(t=>!t.home)}const Je=[{id:"asia-treasure",continent:"asia",topicId:"grid-q1",title:"אוצר על הציר",kind:"treasure-line",requires:[]},{id:"asia-jumps",continent:"asia",topicId:"add-sub",title:"קפיצות",kind:"jumps",requires:["asia-treasure"]},{id:"asia-voyage",continent:"asia",topicId:"add-sub",title:"מסע הספינה",kind:"voyage",requires:["asia-treasure"]},{id:"asia-quadrant",continent:"asia",topicId:"grid-full",title:"האוצר ברביע",kind:"quadrant",requires:["asia-treasure"]},{id:"asia-mirror",continent:"asia",topicId:"grid-full",title:"מראה",kind:"mirror",requires:["asia-quadrant"]},{id:"australia-product",continent:"australia",topicId:"mul-div",title:"מלבן המכפלה",kind:"product",requires:["asia-quadrant"]},{id:"australia-powers",continent:"australia",topicId:"powers",title:"סולם החזקות",kind:"powers",requires:["australia-product"]},{id:"australia-square",continent:"australia",topicId:"powers",title:"הריבוע השלם",kind:"perfect-square",requires:["australia-powers"]},{id:"australia-sum-letters",continent:"australia",topicId:"mul-div",title:"חיבור בטור עם אותיות",kind:"alphametic-sum",requires:["australia-product"]},{id:"australia-product-letters",continent:"australia",topicId:"mul-div",title:"כפל בטור עם אותיות",kind:"alphametic-product",requires:["australia-sum-letters"]},{id:"africa-aim",continent:"africa",topicId:"angles",title:"כוון את הקרן",kind:"angle-aim",requires:["australia-product"]},{id:"africa-straight",continent:"africa",topicId:"angle-pairs",title:"זוויות צמודות",kind:"angle-straight",requires:["africa-aim"]},{id:"africa-triangle",continent:"africa",topicId:"triangle-angles",title:"סכום במשולש",kind:"angle-triangle",requires:["africa-straight"]},{id:"africa-isosceles",continent:"africa",topicId:"triangle-angles",title:"שתי שוקיים",kind:"angle-isosceles",requires:["africa-triangle"]},{id:"europe-machine",continent:"europe",topicId:"variable",title:"מכונת המספרים",kind:"machine",requires:["africa-straight"]},{id:"europe-terms",continent:"europe",topicId:"like-terms",title:"קופסאות שוות",kind:"like-terms",requires:["europe-machine"]},{id:"europe-balance",continent:"europe",topicId:"equation-id",title:"מאזניים",kind:"balance",requires:["europe-terms"]},{id:"samerica-balance",continent:"samerica",topicId:"linear-eq",title:"נעלם בשני הצדדים",kind:"balance-both",requires:["europe-balance"]},{id:"samerica-quest",continent:"samerica",topicId:"word-problems",title:"קווסט",kind:"quest",requires:["samerica-balance"]},{id:"samerica-chase",continent:"samerica",topicId:"word-problems",title:"מרדף",kind:"chase",requires:["samerica-quest"]},{id:"samerica-shift",continent:"samerica",topicId:"graph-points",title:"הזזת גרף",kind:"shift",requires:["samerica-chase"]},{id:"namerica-midpoint",continent:"namerica",topicId:"congruence",title:"חצי הדרך",kind:"build-midpoint",requires:["africa-isosceles"]},{id:"namerica-perpendicular",continent:"namerica",topicId:"congruence",title:"אנך",kind:"build-perpendicular",requires:["namerica-midpoint"]},{id:"namerica-equilateral",continent:"namerica",topicId:"congruence",title:"משולש שווה צלעות",kind:"build-equilateral",requires:["namerica-perpendicular"]},{id:"namerica-area",continent:"namerica",topicId:"areas",title:"שטח על רשת",kind:"area",requires:["namerica-midpoint"]},{id:"namerica-squares",continent:"namerica",topicId:"pythagoras",title:"שלושה ריבועים",kind:"pythagoras-squares",requires:["namerica-area"]},{id:"namerica-side",continent:"namerica",topicId:"pythagoras",title:"צלע חסרה",kind:"pythagoras-side",requires:["namerica-squares"]},{id:"namerica-net",continent:"namerica",topicId:"solids",title:"פריסה",kind:"net",requires:["namerica-area"]},{id:"antarctica-spin",continent:"antarctica",topicId:"frequency",title:"גלגל",kind:"spin",requires:["namerica-area"]},{id:"antarctica-percent",continent:"antarctica",topicId:"rel-frequency",title:"כמה מתוך כמה",kind:"frequency",requires:["antarctica-spin"]},{id:"antarctica-wheel",continent:"antarctica",topicId:"probability",title:"בנה גלגל",kind:"build-wheel",requires:["antarctica-percent"]}];function Bn(e){return Je.find(t=>t.id===e)}function Qe(e){return Je.filter(t=>t.continent===e)}function F(e){let t=e>>>0;const r=()=>{t=t+1831565813>>>0;let s=t;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return r.seed=e,r}function Lt(e,t,n){return t+e()*(n-t)}function Gn(e,t){const{rows:n,sign:r,letters:s}=e,a=document.createElement("div");a.className="board-wrap columns-board";const o=document.createElement("div");o.className="columns";const i=Math.max(...n.map(g=>g.length));n.forEach((g,$)=>{const m=document.createElement("div");m.className="col-row";const k=g.padStart(i," "),w=document.createElement("span");w.className="col-cell sign",w.textContent=$===n.length-2?r:"",m.append(w);for(const L of k){const v=document.createElement("span");v.className=L===" "?"col-cell blank":"col-cell letter",v.dataset.letter=L.trim(),v.textContent=L.trim(),m.append(v)}$===n.length-2&&m.classList.add("last-addend"),o.append(m)});const c=document.createElement("div");c.className="col-rule",o.insertBefore(c,o.lastElementChild);const l=document.createElement("p");l.className="columns-live";const d=document.createElement("p");d.className="chain-hint";const f=document.createElement("div");f.className="letters";const u=document.createElement("div");u.className="keypad",a.append(o,l,d,f,u);const x={};let b=s[0]??"";const h=()=>{f.replaceChildren();for(const g of s){const $=document.createElement("button");$.type="button",$.className=`chip letter-chip${g===b?" selected":""}`;const m=x[g];Object.entries(x).some(([w,L])=>w!==g&&L===m&&m!==void 0)&&$.classList.add("clash"),$.innerHTML=`<span class="chip-letter">${g}</span><span class="chip-digit">${m??"?"}</span>`,$.addEventListener("click",()=>{b=g,h()}),f.append($)}for(const g of Array.from(o.querySelectorAll(".col-cell.letter"))){const $=g.dataset.letter??"",m=x[$];g.textContent=m===void 0?$:String(m),g.classList.toggle("filled",m!==void 0)}};for(let g=0;g<=9;g++){const $=document.createElement("button");$.type="button",$.className="btn small tray-key digit-key",$.textContent=String(g),$.addEventListener("click",()=>{b&&(x[b]=g,h(),t())}),u.append($)}const y=document.createElement("button");return y.type="button",y.className="btn small tray-key",y.textContent="נקה",y.addEventListener("click",()=>{for(const g of s)delete x[g];h(),t()}),u.append(y),h(),{el:a,assignment:()=>({...x}),set(g,$){x[g]=$,h(),t()},clear(){for(const g of s)delete x[g];h(),t()},live:g=>{l.textContent=g},reveal(g,$){x[g]=$,h(),t()},mark:g=>{d.textContent=g},destroy:()=>a.remove()}}function p(e){return`⁦${e}⁩`}const ve=["א","ב","ג","ד","ה","ו"];function Le(e,t,n){const r=[...new Set([...String(e),...String(t),...String(n)])];if(r.length>ve.length)return null;const s=new Map;r.forEach((i,c)=>s.set(i,ve[c]));const a=i=>String(i).split("").map(c=>s.get(c)).join(""),o=[a(e),a(t),a(n)];return{rows:o,letters:r.map(i=>s.get(i)),leading:[...new Set(o.map(i=>i[0]))]}}function On(e,t){let n=0;for(const r of e){const s=t[r];if(s===void 0)return null;n=n*10+s}return n}function Pn(e,t){const n=e.letters.map(o=>t[o]);if(n.some(o=>o===void 0)||new Set(n).size!==n.length||e.leading.some(o=>t[o]===0))return!1;const[r,s,a]=e.rows.map(o=>On(o,t));return r===null||s===null||a===null?!1:e.sign==="+"?r+s===a:r*s===a}function tn(e,t){const n=F(e);let r=0,s=0,a=0,o=null;for(let u=0;u<400;u++)if(t==="+"?(r=11+Math.floor(n()*78),s=11+Math.floor(n()*78),a=r+s):(r=12+Math.floor(n()*38),s=3+Math.floor(n()*7),a=r*s),!(String(a).includes("0")||String(r).includes("0")||String(s).includes("0"))){if(o=Le(r,s,a),o&&o.letters.length>=3)break;o=null}o||(r=12,s=34,a=46,o=Le(r,s,a));const i={rows:o.rows,sign:t,letters:o.letters,values:{a:r,b:s,result:a},leading:o.leading},c={},l=(u,x)=>{u.split("").forEach((b,h)=>{c[b]=Number(String(x)[h])})};l(o.rows[0],r),l(o.rows[1],s),l(o.rows[2],a);const d=o.rows[2][o.rows[2].length-1],f=o.letters[0];return{config:i,solution:c,check:u=>Pn(i,u),hints:[{text:"מתחילים מטור היחידות"},{text:`${f} = ${p(c[f])}`},{text:`${d} = ${p(c[d])}`},{text:"כל האותיות"}],explain:[t==="+"?`${p(r)} + ${p(s)} = ${p(a)}.`:`${p(r)} × ${p(s)} = ${p(a)}.`,"כל אות היא ספרה אחת, ולשתי אותיות שונות ספרות שונות."]}}function jn(e){return tn(e,"+")}function Hn(e){return tn(e,"×")}function en(e,t){const{rows:n,sign:r,letters:s}=e.config,a=e.solution;let o=!1;const i=Gn({rows:n,sign:r,letters:s},()=>{o=!0,c(),t()});function c(){const l=i.assignment(),d=n.map(f=>f.split("").map(u=>l[u]??"?").join(""));i.live(`${d[0]} ${r} ${d[1]} = ${d[2]}`)}return c(),{el:i.el,answer:()=>o?i.assignment():null,hint(l){if(l===1&&i.mark(`${n[0].slice(-1)} ${r} ${n[1].slice(-1)} → ${n[2].slice(-1)}`),l===2&&i.reveal(s[0],a[s[0]]),l===3){const d=s.find(f=>i.assignment()[f]===void 0)??s[1];i.reveal(d,a[d])}if(l>=4)for(const d of s)i.reveal(d,a[d])},demonstrate(){for(const l of s)i.reveal(l,a[l])},place:l=>{i.clear();for(const[d,f]of Object.entries(l))i.set(d,f)},destroy:()=>i.destroy()}}const Rn={kind:"alphametic-sum",generate:jn,mount:en},Dn={kind:"alphametic-product",generate:Hn,mount:en},_n="http://www.w3.org/2000/svg",Vn=1e3,Un=560,Z={x:760,y:320,r:170};function X(e,t={}){const n=document.createElementNS(_n,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}const qe=e=>e*Math.PI/180;function it(e,t,n,r){return{x:e+Math.cos(qe(n))*r,y:t-Math.sin(qe(n))*r}}function Se(e,t,n,r,s){const a=it(e,t,r,n),o=it(e,t,s,n),i=Math.abs(s-r)>180?1:0,c=s>r?0:1;return`M${a.x.toFixed(1)} ${a.y.toFixed(1)} A${n} ${n} 0 ${i} ${c} ${o.x.toFixed(1)} ${o.y.toFixed(1)}`}function Xn(){const e=document.createElement("div");e.className="board-wrap";const t=X("svg",{class:"board angle-board",viewBox:`0 0 ${Vn} ${Un}`});e.append(t);const n=X("g",{class:"figure"}),r=X("g",{class:"hints"}),s=X("g",{class:"dial"});t.append(n,r,s);const a=X("text",{class:"board-mark",x:"40",y:"56"});t.append(a);const o=[],i={el:e,line(c,l,d,f,u=""){const x=X("line",{class:`fig-line ${u}`,x1:String(c),y1:String(l),x2:String(d),y2:String(f)});return n.append(x),x},ray(c,l,d,f,u=""){const x=it(c,l,d,f);return i.line(c,l,x.x,x.y,u)},arc(c,l,d,f,u,x=""){const b=X("path",{class:`fig-arc ${x}`,d:Se(c,l,d,f,u)});return n.append(b),b},label(c,l,d,f=""){const u=X("text",{class:`fig-label ${f}`,x:String(c),y:String(l),"text-anchor":"middle"});return u.textContent=d,n.append(u),u},dot(c,l,d=""){const f=X("circle",{class:`fig-dot ${d}`,cx:String(c),cy:String(l),r:"7"});return n.append(f),f},dial(c,l){let d=Math.round(c);const f=X("circle",{class:"dial-face",cx:String(Z.x),cy:String(Z.y),r:String(Z.r)}),u=X("line",{class:"dial-base",x1:String(Z.x),y1:String(Z.y),x2:String(Z.x+Z.r),y2:String(Z.y)}),x=X("line",{class:"dial-arm"}),b=X("path",{class:"dial-wedge"}),h=X("circle",{class:"dial-knob",r:"18"}),y=X("text",{class:"dial-readout",x:String(Z.x),y:String(Z.y+72),"text-anchor":"middle"});s.append(f,b,u,x,h,y);for(let v=0;v<=180;v+=10){const E=it(Z.x,Z.y,v,Z.r),S=it(Z.x,Z.y,v,Z.r-(v%30===0?22:12));s.append(X("line",{class:"dial-tick",x1:S.x.toFixed(1),y1:S.y.toFixed(1),x2:E.x.toFixed(1),y2:E.y.toFixed(1)}))}const g=()=>{const v=it(Z.x,Z.y,d,Z.r);x.setAttribute("x1",String(Z.x)),x.setAttribute("y1",String(Z.y)),x.setAttribute("x2",v.x.toFixed(1)),x.setAttribute("y2",v.y.toFixed(1)),h.setAttribute("cx",v.x.toFixed(1)),h.setAttribute("cy",v.y.toFixed(1)),b.setAttribute("d",`M${Z.x} ${Z.y} L${Z.x+Z.r} ${Z.y} ${Se(Z.x,Z.y,Z.r,0,d).slice(1)} Z`),y.textContent=`${d}°`};g();const $=v=>{const E=t.getScreenCTM();if(!E)return d;const S=new DOMPoint(v.clientX,v.clientY).matrixTransform(E.inverse()),A=Math.round(Math.atan2(Z.y-S.y,S.x-Z.x)*180/Math.PI);return Math.max(0,Math.min(180,A))};let m=!1;const k=v=>{m=!0,t.setPointerCapture(v.pointerId),d=$(v),g(),l(d),v.preventDefault()},w=v=>{m&&(d=$(v),g(),l(d))},L=()=>{m=!1};return t.addEventListener("pointerdown",k),t.addEventListener("pointermove",w),t.addEventListener("pointerup",L),t.addEventListener("pointercancel",L),o.push(()=>{t.removeEventListener("pointerdown",k),t.removeEventListener("pointermove",w),t.removeEventListener("pointerup",L),t.removeEventListener("pointercancel",L)}),{get:()=>d,set:v=>{d=Math.round(v),g(),l(d)}}},mark(c){a.textContent=c},clearHints(){r.replaceChildren()},destroy(){for(const c of o)c();e.remove()}};return i}const N={x:130,y:470},D={x:530,y:470};function Rt(e,t,n){const r={aim:["הקשת מראה את הזווית","הסימונים על המד הם של ‎10°‎","הזווית בין ‎"+Math.floor(t/10)*10+"°‎ ל־"+Math.ceil(t/10)*10+"°",`הזווית היא ${p(t+"°")}`],straight:["שתי הזוויות יחד על ישר",`יחד הן ${p("180°")}`,`${p("180°")} − ${p(n[0]+"°")}`,`הזווית היא ${p(t+"°")}`],triangle:["שלוש הזוויות של משולש",`יחד הן ${p("180°")}`,`${p("180°")} − ${p(n[0]+"°")} − ${p(n[1]+"°")}`,`הזווית היא ${p(t+"°")}`],isosceles:["שתי זוויות הבסיס שוות",`יחד עם ${p(n[0]+"°")} הן ${p("180°")}`,`(${p("180°")} − ${p(n[0]+"°")}) : ${p(2)}`,`הזווית היא ${p(t+"°")}`]},s={aim:[`הזווית היא ${p(t+"°")}.`],straight:[`שתי זוויות צמודות משלימות ל־${p("180°")}.`,`${p("180°")} − ${p(n[0]+"°")} = ${p(t+"°")}.`],triangle:[`סכום הזוויות במשולש הוא ${p("180°")}.`,`${p("180°")} − ${p(n[0]+"°")} − ${p(n[1]+"°")} = ${p(t+"°")}.`],isosceles:["במשולש שווה שוקיים שתי זוויות הבסיס שוות.",`(${p("180°")} − ${p(n[0]+"°")}) : ${p(2)} = ${p(t+"°")}.`]};return{config:{shape:e,target:t,given:n},solution:t,check:a=>a===t,hints:r[e].map(a=>({text:a})),explain:s[e]}}function Wn(e){const t=F(e),n=15+Math.floor(t()*31)*5;return Rt("aim",Math.min(165,n),[])}function Yn(e){const t=F(e),n=20+Math.floor(t()*28)*5;return Rt("straight",180-n,[n])}function Kn(e){const t=F(e);let n=0,r=0;do n=25+Math.floor(t()*14)*5,r=25+Math.floor(t()*14)*5;while(n+r>150);return Rt("triangle",180-n-r,[n,r])}function zn(e){const t=F(e),n=20+Math.floor(t()*14)*10;return Rt("isosceles",(180-n)/2,[n])}function Jn(e,t){const{shape:n,target:r,given:s}=t;if(n==="aim"){e.line(N.x-40,N.y,N.x+420,N.y,"base"),e.ray(N.x,N.y,r,380,"live"),e.arc(N.x,N.y,90,0,r,"given"),e.dot(N.x,N.y);return}if(n==="straight"){e.line(N.x-60,N.y,D.x+60,N.y,"base");const f={x:(N.x+D.x)/2,y:N.y};e.ray(f.x,f.y,s[0],300,"live"),e.arc(f.x,f.y,76,0,s[0],"given"),e.label(...wt(f,s[0]/2,112),`${s[0]}°`),e.arc(f.x,f.y,110,s[0],180,"wanted"),e.label(...wt(f,(s[0]+180)/2,150),"?"),e.dot(f.x,f.y);return}const[a,o]=n==="triangle"?[s[0],s[1]]:[(180-s[0])/2,(180-s[0])/2],i=180-a-o,l=(D.x-N.x)*Math.sin(o*Math.PI/180)/Math.sin(i*Math.PI/180),d=it(N.x,N.y,a,l);if(e.line(N.x,N.y,D.x,D.y,"base"),e.line(N.x,N.y,d.x,d.y,"base"),e.line(D.x,D.y,d.x,d.y,"base"),e.dot(N.x,N.y),e.dot(D.x,D.y),e.dot(d.x,d.y),n==="triangle"){e.arc(N.x,N.y,66,0,a,"given"),e.label(...wt(N,a/2,100),`${a}°`),e.arc(D.x,D.y,66,180-o,180,"given"),e.label(...wt(D,180-o/2,100),`${o}°`);const f=Math.atan2(N.y-d.y,N.x-d.x)*(180/Math.PI),u=Math.atan2(D.y-d.y,D.x-d.x)*(180/Math.PI);e.arc(d.x,d.y,60,-u,-f,"wanted"),e.label(d.x,d.y+54,"?")}else{const f=Math.atan2(N.y-d.y,N.x-d.x)*(180/Math.PI),u=Math.atan2(D.y-d.y,D.x-d.x)*(180/Math.PI);e.arc(d.x,d.y,60,-u,-f,"given"),e.label(d.x,d.y+56,`${s[0]}°`),e.arc(N.x,N.y,66,0,a,"wanted"),e.label(...wt(N,a/2,104),"?"),e.label((N.x+d.x)/2-18,(N.y+d.y)/2,"//"),e.label((D.x+d.x)/2+18,(D.y+d.y)/2,"//")}}function wt(e,t,n){const r=it(e.x,e.y,t,n);return[r.x,r.y+10]}function Dt(e,t){const n=Xn();Jn(n,e.config);let r=!1;const s=n.dial(0,()=>{r=!0,t()});return{el:n.el,answer:()=>r?s.get():null,hint(a){const{shape:o,given:i,target:c}=e.config;a===1&&n.mark(o==="triangle"?"180°":o==="isosceles"?"= =":"180°"),a===2&&n.mark(o==="aim"?"10°":"180°"),a===3&&(o==="straight"?n.mark(`180 − ${i[0]}`):o==="triangle"?n.mark(`180 − ${i[0]} − ${i[1]}`):o==="isosceles"?n.mark(`(180 − ${i[0]}) : 2`):n.mark(`${Math.floor(c/10)*10}…${Math.ceil(c/10)*10}`)),a>=4&&s.set(c)},demonstrate(){s.set(e.solution)},place:a=>s.set(a),destroy:()=>n.destroy()}}const Qn={kind:"angle-aim",generate:Wn,mount:Dt},tr={kind:"angle-straight",generate:Yn,mount:Dt},er={kind:"angle-triangle",generate:Kn,mount:Dt},nr={kind:"angle-isosceles",generate:zn,mount:Dt};function dt(e,t){const{signed:n=!1,max:r=999}=e,s=document.createElement("div");s.className="keypad-board";const a=document.createElement("p");a.className="keypad-readout";const o=document.createElement("div");o.className="keypad",s.append(a,o);let i="";const c=()=>{a.textContent=i===""?"?":i};c();const l=f=>{f==="-"?i=i.startsWith("-")?i.slice(1):`-${i}`:i.replace("-","").length<String(r).length&&(i+=f),c(),t()};for(let f=0;f<=9;f++){const u=document.createElement("button");u.type="button",u.className="btn small tray-key digit-key",u.textContent=String(f),u.addEventListener("click",()=>l(String(f))),o.append(u)}if(n){const f=document.createElement("button");f.type="button",f.className="btn small tray-key digit-key",f.textContent="−",f.addEventListener("click",()=>l("-")),o.append(f)}const d=document.createElement("button");return d.type="button",d.className="btn small tray-key",d.textContent="נקה",d.addEventListener("click",()=>{i="",c(),t()}),o.append(d),{el:s,value:()=>i===""||i==="-"?null:Number(i),set(f){i=String(f),c(),t()},clear(){i="",c(),t()}}}function nn(e,t){const n=F(e),r=2+Math.floor(n()*6),s=2+Math.floor(n()*2),a=t?1+Math.floor(n()*(s-1)):0,o=Math.floor(n()*6),i=o+(s-a)*r,c={leftX:s,leftN:o,rightX:a,rightN:i},l=`${s}x${o>0?` + ${o}`:""}`,d=`${a>0?`${a}x + `:""}${i}`;return{config:c,solution:r,check:f=>f===r,hints:[{text:"מורידים אותו דבר משני הצדדים"},t?{text:`מורידים ${p(`${a}x`)} משני הצדדים`}:{text:o>0?`מורידים ${p(o)} משני הצדדים`:"שתי הכפות שוות"},{text:`נשאר ${p(`${s-a}x`)} = ${p(i-o)}`},{text:`${p("x")} = ${p(r)}`}],explain:[`${p(l)} = ${p(d)}.`,`${p(`${s-a}x`)} = ${p(i-o)}.`,`${p("x")} = ${p(r)}.`]}}function rr(e){return nn(e,!1)}function sr(e){return nn(e,!0)}const pt="http://www.w3.org/2000/svg";function Ee(e,t,n){const r=document.createElementNS(pt,"g");r.setAttribute("transform",`translate(${e} 0)`),r.innerHTML=`
    <path class="rope" d="M-100 70 L-100 172 M100 70 L100 172"/>
    <path class="pan" d="M-120 172 h240 l-26 44 h-188 Z"/>`;const s=document.createElementNS(pt,"g"),a=t>3?1:t,o=n>4?1:n,i=a+o,c=52;let l=-((i-1)*c)/2;for(let d=0;d<a;d++){const f=document.createElementNS(pt,"g");f.setAttribute("transform",`translate(${l} 170)`),f.innerHTML=`<rect class="x-box" x="-21" y="-44" width="42" height="42" rx="7"/>
      <text class="x-text" x="0" y="-13" text-anchor="middle">x</text>`,s.append(f),l+=c}if(t>a){const d=document.createElementNS(pt,"text");d.setAttribute("class","pan-count"),d.setAttribute("x",String(l-c+36)),d.setAttribute("y","147"),d.textContent=`×${t}`,s.append(d),l+=34}for(let d=0;d<o;d++){const f=document.createElementNS(pt,"circle");f.setAttribute("class","weight"),f.setAttribute("cx",String(l)),f.setAttribute("cy","150"),f.setAttribute("r","18"),s.append(f),l+=c}if(n>o){const d=document.createElementNS(pt,"text");d.setAttribute("class","pan-count"),d.setAttribute("x",String(l-c+34)),d.setAttribute("y","160"),d.textContent=`×${n}`,s.append(d)}return r.append(s),r}function rn(e,t){const{leftX:n,leftN:r,rightX:s,rightN:a}=e.config,o=document.createElement("div");o.className="board-wrap balance-board";const i=document.createElementNS(pt,"svg");i.setAttribute("class","board balance-art"),i.setAttribute("viewBox","0 0 1000 400"),i.innerHTML=`
    <path class="stand" d="M500 70 v220 M420 330 h160 l-30 -40 h-100 Z"/>
    <path class="beam" d="M240 70 h520"/>`,i.append(Ee(250,n,r),Ee(750,s,a)),o.append(i);const c=dt({max:99},t);return o.append(c.el),{el:o,answer:()=>c.value(),hint(l){l>=4&&c.set(e.solution)},demonstrate(){c.set(e.solution)},place:l=>c.set(l),destroy:()=>o.remove()}}const ar={kind:"balance",generate:rr,mount:rn},or={kind:"balance-both",generate:sr,mount:rn},xe="http://www.w3.org/2000/svg",xt=["#b23b2e","#2f6fb3","#4f7a3f","#c98a16"];function ut(e,t,n){const r=document.createElementNS(xe,e);for(const[s,a]of Object.entries(t))r.setAttribute(s,a);return n!==void 0&&(r.textContent=n),r}function sn(e,t=300){const n=document.createElementNS(xe,"svg");n.setAttribute("class","wheel"),n.setAttribute("viewBox",`0 0 ${t} ${t}`);const r=t/2-14,s=t/2,a=t/2,o=360/e.length,i=ut("g",{class:"wheel-dial"});e.forEach((d,f)=>{const u=f*o*Math.PI/180,x=(f+1)*o*Math.PI/180,b=s+r*Math.cos(u),h=a+r*Math.sin(u),y=s+r*Math.cos(x),g=a+r*Math.sin(x);i.append(ut("path",{class:"wheel-sector",fill:d,d:`M${s} ${a} L${b} ${h} A${r} ${r} 0 ${o>180?1:0} 1 ${y} ${g} Z`}))}),n.append(i),n.append(ut("circle",{class:"wheel-hub",cx:String(s),cy:String(a),r:"14"})),n.append(ut("path",{class:"wheel-pointer",d:`M${s} 6 l-14 26 h28 Z`}));let c=0;return{root:n,turn:d=>{c++;const f=(d+.5)*o,u=360*3*c-90-f;i.setAttribute("transform",`rotate(${u} ${s} ${a})`)}}}function ir(e){const t=F(e),n=3+Math.floor(t()*2),r=Array.from({length:n},(c,l)=>l),s=10+Math.floor(t()*3),a=Array.from({length:s},()=>Math.floor(t()*n)),o=Math.floor(t()*n),i=a.filter(c=>c===o).length;return{config:{sectors:r,results:a,watched:o},solution:i,check:c=>c===i,hints:[{text:"סובב את הגלגל עד הסוף"},{text:"הספירה נרשמת מתחת"},{text:"סופרים רק את הצבע המסומן"},{text:`${p(i)} פעמים מתוך ${p(s)}`}],explain:[`הצבע יצא ${p(i)} פעמים מתוך ${p(s)} סיבובים.`,"זו השכיחות שלו בניסוי הזה."]}}function cr(e){const t=F(e),n=[20,25,50],r=n[Math.floor(t()*n.length)],s=3,a=[];let o=r;for(let l=0;l<s-1;l++){const d=Math.max(1,Math.round(o*(.2+t()*.4)/5)*5);a.push(Math.min(d,o-(s-1-l))),o-=a[l]}a.push(o);const i=Math.floor(t()*s),c=Math.round(a[i]/r*100);return{config:{counts:a,total:r,watched:i},solution:c,check:l=>l===c,hints:[{text:`${p(a[i])} מתוך ${p(r)}`},{text:`${p(a[i])} : ${p(r)}`},{text:`כופלים ב־${p(100)}`},{text:`${p(c)}%`}],explain:[`${p(a[i])} מתוך ${p(r)} הם ${p(`${a[i]}/${r}`)}.`,`באחוזים זה ${p(c)}%.`]}}function lr(e){const t=F(e),n=[{sectors:12,wanted:3,label:"1/4"},{sectors:12,wanted:4,label:"1/3"},{sectors:12,wanted:6,label:"1/2"},{sectors:10,wanted:2,label:"1/5"},{sectors:8,wanted:2,label:"1/4"},{sectors:9,wanted:3,label:"1/3"}],r=n[Math.floor(t()*n.length)];return{config:r,solution:r.wanted,check:s=>s===r.wanted,hints:[{text:`לגלגל ${p(r.sectors)} חלקים`},{text:`${p(r.label)} מתוך ${p(r.sectors)}`},{text:`${p(r.sectors)} : ${p(r.label.split("/")[1])}`},{text:`${p(r.wanted)} חלקים`}],explain:[`${p(r.label)} מתוך ${p(r.sectors)} חלקים הם ${p(r.wanted)} חלקים.`]}}function dr(e,t){const n=document.createElement("div");return n.className="tally-row",e.forEach((r,s)=>{const a=document.createElement("div");a.className=`tally${s===t?" watched":""}`;const o=document.createElement("span");o.className="tally-colour",o.style.background=xt[s%xt.length];const i=document.createElement("span");i.className="tally-count",i.textContent=String(r),a.append(o,i),n.append(a)}),n}function fr(e,t){const{sectors:n,results:r,watched:s}=e.config,a=document.createElement("div");a.className="board-wrap chance-board";const o=n.map((y,g)=>xt[g%xt.length]),i=sn(o);a.append(i.root);const c=n.map(()=>0);let l=0;const d=document.createElement("div"),f=()=>{d.replaceChildren(dr(c,s))};f();const u=document.createElement("button");u.type="button",u.className="btn small tray-key",u.textContent="סובב",u.addEventListener("click",()=>{if(l>=r.length)return;const y=r[l];c[y]=(c[y]??0)+1,l++,i.turn(y),f(),l>=r.length&&u.setAttribute("disabled","true")});const x=document.createElement("div");x.className="tray",x.append(u),a.append(x,d);const b=dt({max:99},t);a.append(b.el);const h=()=>{for(;l<r.length;)u.click()};return{el:a,answer:()=>b.value(),hint(y){y<=3&&h(),y>=4&&(h(),b.set(e.solution))},demonstrate(){h(),b.set(e.solution)},place:y=>b.set(y),destroy:()=>a.remove()}}function pr(e,t){const{counts:n,total:r,watched:s}=e.config,a=document.createElement("div");a.className="board-wrap chance-board";const o=document.createElementNS(xe,"svg");o.setAttribute("class","bar-chart"),o.setAttribute("viewBox","0 0 600 320");const i=Math.max(...n);n.forEach((d,f)=>{const u=d/i*220,x=80+f*160;o.append(ut("rect",{class:`bar${f===s?" watched":""}`,x:String(x),y:String(260-u),width:"96",height:String(u),fill:xt[f%xt.length]})),o.append(ut("text",{class:"bar-label",x:String(x+48),y:"294","text-anchor":"middle"},String(d)))}),o.append(ut("line",{class:"bar-axis",x1:"40",y1:"262",x2:"560",y2:"262"})),a.append(o);const c=document.createElement("p");c.className="chain-steps",c.textContent=`${r}`,a.append(c);const l=dt({max:100},t);return a.append(l.el),{el:a,answer:()=>l.value(),hint(d){if(d===1&&o.querySelector(".bar.watched")?.classList.add("lit"),d===2)for(const f of Array.from(o.querySelectorAll(".bar")))f.classList.add("lit");d===3&&c.classList.add("lit"),d>=4&&l.set(e.solution)},demonstrate(){l.set(e.solution)},place:d=>l.set(d),destroy:()=>a.remove()}}function ur(e,t){const{sectors:n,label:r}=e.config,s=document.createElement("div");s.className="board-wrap chance-board";const a=document.createElement("p");a.className="chain-goal",a.textContent=r,s.append(a);let o=0,i=!1;const c=document.createElement("div"),l=()=>{const u=Array.from({length:n},(x,b)=>b<o?xt[0]:"#d9d2c2");c.replaceChildren(sn(u).root)};l(),s.append(c);const d=document.createElement("input");d.type="range",d.min="0",d.max=String(n),d.value="0",d.className="step-slider";const f=document.createElement("p");return f.className="step-label",f.textContent=`0 / ${n}`,d.addEventListener("input",()=>{o=Number(d.value),i=!0,f.textContent=`${o} / ${n}`,l(),t()}),s.append(d,f),{el:s,answer:()=>i?o:null,hint(u){u>=4&&(o=e.solution,d.value=String(o),i=!0,f.textContent=`${o} / ${n}`,l(),t())},demonstrate(){o=e.solution,d.value=String(o),i=!0,f.textContent=`${o} / ${n}`,l(),t()},place:u=>{o=u,d.value=String(u),i=!0,f.textContent=`${o} / ${n}`,l(),t()},destroy:()=>s.remove()}}const hr={kind:"spin",generate:ir,mount:fr},xr={kind:"frequency",generate:cr,mount:pr},gr={kind:"build-wheel",generate:lr,mount:ur},mr="http://www.w3.org/2000/svg",an=1e3,yr=300,Mt=70,Et=an-70,O=130;function C(e,t={}){const n=document.createElementNS(mr,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function _t(e){const{from:t,to:n,tickStep:r,labelEvery:s}=e,a=document.createElement("div");a.className="board-wrap";const o=C("svg",{class:"board number-line",viewBox:`0 0 ${an} ${yr}`});a.append(o);const i=document.createElement("div");i.className="tray",a.append(i);const c=C("g",{class:"hints"}),l=C("g",{class:"main"}),d=C("g",{class:"drag"});o.append(c,l,d);const f=n-t,u=m=>Mt+(m-t)/f*(Et-Mt),x=m=>t+(m-Mt)/(Et-Mt)*f,b=m=>{const k=Math.round((m-t)/r),w=Math.min(Math.max(k,0),Math.round(f/r));return t+w*r};l.append(C("line",{class:"axis",x1:String(Mt-40),y1:String(O),x2:String(Et+40),y2:String(O)})),l.append(C("path",{class:"axis-head",d:`M${Et+40} ${O} l-22 -11 v22 Z`}));for(let m=0;m*r<=f+1e-9;m++){const k=t+m*r,w=u(k),L=m%s===0;if(l.append(C("line",{class:`tick${L?" labelled":""}`,x1:w.toFixed(1),y1:String(O-(L?20:11)),x2:w.toFixed(1),y2:String(O+(L?20:11))})),L){const v=C("text",{class:"tick-label",x:w.toFixed(1),y:String(O+50),"text-anchor":"middle"});v.textContent=String(k),l.append(v)}}const h=m=>{const k=o.getScreenCTM();if(!k)return t;const w=new DOMPoint(m.clientX,m.clientY).matrixTransform(k.inverse());return b(x(w.x))},y=[],g={chest:`
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
      <path class="ship-sail" d="M2 -44 q30 16 0 34 Z"/>`};return{el:a,xOf:u,flag(m){const k=u(m),w=C("g",{class:"flag",transform:`translate(${k.toFixed(1)} ${O})`});w.append(C("path",{d:"M0 0 v-96",class:"pole"})),w.append(C("path",{d:"M0 -96 l58 18 -58 18 Z",class:"cloth"})),l.append(w)},chest(m,k,w="chest"){let L=b(m);const v=C("g",{class:`chest ${w}`});v.innerHTML=g[w];const E=C("line",{class:"chest-thread",y1:String(O+6),y2:String(O+78)});d.append(E);const S=()=>{const T=u(L);v.setAttribute("transform",`translate(${T.toFixed(1)} ${O+112})`),E.setAttribute("x1",T.toFixed(1)),E.setAttribute("x2",T.toFixed(1))};S(),d.append(v);let A=!1;const _=T=>{A=!0,v.setPointerCapture(T.pointerId),L=h(T),S(),k(L),T.preventDefault()},H=T=>{A&&(L=h(T),S(),k(L))},tt=()=>{A=!1};v.addEventListener("pointerdown",_),v.addEventListener("pointermove",H),v.addEventListener("pointerup",tt),v.addEventListener("pointercancel",tt);const J=T=>{L=h(T),S(),k(L)};return o.addEventListener("pointerdown",J),y.push(()=>{v.removeEventListener("pointerdown",_),v.removeEventListener("pointermove",H),v.removeEventListener("pointerup",tt),v.removeEventListener("pointercancel",tt),o.removeEventListener("pointerdown",J)}),{get:()=>L,set:T=>{L=b(T),S(),k(L)}}},token(m,k="ship"){let w=b(m);const L=C("g",{class:`chest static ${k}`});L.innerHTML=g[k],d.append(L);const v=()=>{L.setAttribute("transform",`translate(${u(w).toFixed(1)} ${O-18}) scale(0.78)`)};return v(),{get:()=>w,set:E=>{w=b(E),v()}}},tray(m){i.replaceChildren();for(const k of m){const w=document.createElement("button");w.type="button",w.className="btn small tray-key",w.textContent=k.label,w.addEventListener("click",k.onClick),i.append(w)}},trayEnabled(m){for(const k of Array.from(i.children))m?k.removeAttribute("disabled"):k.setAttribute("disabled","true")},clearArrows(){for(const m of Array.from(l.querySelectorAll(".line-arrow")))m.remove()},band(m,k){const w=u(Math.min(m,k)),L=u(Math.max(m,k));c.append(C("rect",{class:"hint-band",x:w.toFixed(1),y:String(O-60),width:(L-w).toFixed(1),height:"120",rx:"10"}))},bracket(m,k,w){const L=u(m),v=u(k),E=O+74,S=C("g",{class:"hint-bracket"});S.append(C("path",{d:`M${L.toFixed(1)} ${E-12} v12 H${v.toFixed(1)} v-12`}));const A=C("text",{x:((L+v)/2).toFixed(1),y:String(E+30),"text-anchor":"middle"});A.textContent=w,S.append(A),c.append(S)},count(m,k){const w=m<=k?r:-r,L=Math.round(Math.abs(k-m)/r);for(let v=1;v<=L;v++){const E=m+w*v,S=C("text",{class:"hint-count",x:u(E).toFixed(1),y:String(O-34),"text-anchor":"middle"});S.textContent=String(v),c.append(S)}},arrow(m,k,w,L="plus",v=0,E){const S=u(m),A=u(k),_=O-56-v*34,H=C("g",{class:`line-arrow ${L}`});H.append(C("path",{d:`M${S.toFixed(1)} ${O-6} C${S.toFixed(1)} ${_} ${A.toFixed(1)} ${_} ${A.toFixed(1)} ${O-6}`,fill:"none"}));const tt=A>=S?1:-1;H.append(C("path",{class:"head",d:`M${A.toFixed(1)} ${O-6} l${(-12*tt).toFixed(1)} -14 l${(24*tt).toFixed(1)} 0 Z`}));const J=C("text",{x:((S+A)/2).toFixed(1),y:String(_-8),"text-anchor":"middle"});if(J.textContent=w,H.append(J),E!==void 0){const T=C("g",{class:"order"});T.append(C("circle",{cx:S.toFixed(1),cy:String(O-26),r:"15"}));const V=C("text",{x:S.toFixed(1),y:String(O-19),"text-anchor":"middle"});V.textContent=String(E),T.append(V),H.append(T)}return l.append(H),H},clearHints(){c.replaceChildren()},destroy(){for(const m of y)m();a.remove()}}}function br(e){const t=F(e),n=1+Math.floor(t()*3),r=n+1+Math.floor(t()*3),s=2+Math.floor(t()*5),a=0,o=a+(r-n)*s,i=a+r*s,c=Math.ceil((i+4)/5)*5;return{config:{start1:a,speed1:r,start2:o,speed2:n,meet:s,from:0,to:c},solution:s,check:l=>l===s,hints:[{text:`ההפרש ביניהם הוא ${p(o-a)}`},{text:`בכל צעד הוא נסגר ב־${p(r-n)}`},{text:`${p(o-a)} : ${p(r-n)}`},{text:`אחרי ${p(s)} צעדים`}],explain:[`ההפרש ההתחלתי הוא ${p(o-a)}.`,`בכל צעד הוא נסגר ב־${p(r-n)}.`,`${p(o-a)} : ${p(r-n)} = ${p(s)}.`]}}function kr(e,t){const{start1:n,speed1:r,start2:s,speed2:a,from:o,to:i,meet:c}=e.config,l=document.createElement("div");l.className="board-wrap chase-board";const d=_t({from:o,to:i,tickStep:1,labelEvery:5}),f=d.token(n,"frog"),u=d.token(s,"ship");l.append(d.el);const x=document.createElement("input");x.type="range",x.min="0",x.max=String(c+3),x.value="0",x.className="step-slider";const b=document.createElement("p");b.className="step-label";const h=g=>{f.set(Math.min(i,n+r*g)),u.set(Math.min(i,s+a*g)),b.textContent=`${g}`};h(0),x.addEventListener("input",()=>h(Number(x.value))),l.append(x,b);const y=dt({max:99},t);return l.append(y.el),{el:l,answer:()=>y.value(),hint(g){g===1&&d.band(n,s),g===2&&(x.value="1",h(1)),g===3&&(x.value="2",h(2)),g>=4&&(x.value=String(c),h(c),y.set(c))},demonstrate(){x.value=String(c),h(c),y.set(c)},place:g=>y.set(g),destroy(){d.destroy(),l.remove()}}}const wr={kind:"chase",generate:br,mount:kr},Mr="http://www.w3.org/2000/svg",W=720,j=40;function I(e,t={}){const n=document.createElementNS(Mr,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function Vt(e){const{range:t}=e,n=document.createElement("div");n.className="board-wrap";const r=I("svg",{class:"board grid-board",viewBox:`0 0 ${W} ${W}`});n.append(r);const s=I("g",{class:"hints"}),a=I("g",{class:"main"}),o=I("g",{class:"drag"});r.append(s,a,o);const i=(W-2*j)/(2*t),c=h=>W/2+h*i,l=h=>W/2-h*i,d=(h,y)=>({x:Math.max(-t,Math.min(t,Math.round((h-W/2)/i))),y:Math.max(-t,Math.min(t,Math.round((W/2-y)/i)))});for(let h=-t;h<=t;h++)a.append(I("line",{class:"grid-line",x1:String(j),y1:l(h).toFixed(1),x2:String(W-j),y2:l(h).toFixed(1)})),a.append(I("line",{class:"grid-line",x1:c(h).toFixed(1),y1:String(j),x2:c(h).toFixed(1),y2:String(W-j)}));a.append(I("line",{class:"grid-axis",x1:String(j-14),y1:l(0).toFixed(1),x2:String(W-j+14),y2:l(0).toFixed(1)})),a.append(I("line",{class:"grid-axis",x1:c(0).toFixed(1),y1:String(W-j+14),x2:c(0).toFixed(1),y2:String(j-14)})),a.append(I("path",{class:"grid-head",d:`M${W-j+14} ${l(0)} l-18 -9 v18 Z`})),a.append(I("path",{class:"grid-head",d:`M${c(0)} ${j-14} l-9 18 h18 Z`}));for(let h=-t;h<=t;h++){if(h===0)continue;const y=I("text",{class:"grid-label",x:c(h).toFixed(1),y:(l(0)+30).toFixed(1),"text-anchor":"middle"});y.textContent=String(h);const g=I("text",{class:"grid-label",x:(c(0)-16).toFixed(1),y:(l(h)+9).toFixed(1),"text-anchor":"end"});g.textContent=String(h),a.append(y,g)}const f=h=>{const y=r.getScreenCTM();if(!y)return{x:0,y:0};const g=new DOMPoint(h.clientX,h.clientY).matrixTransform(y.inverse());return d(g.x,g.y)},u=[],x=(h,y)=>h.map(g=>`${c(g.x+y.x).toFixed(1)},${l(g.y+y.y).toFixed(1)}`).join(" ");return{el:n,xOf:c,yOf:l,pick(h){let y={x:0,y:0};const g=I("g",{class:"pick hidden"});g.append(I("circle",{class:"pick-ring",r:"22"})),g.append(I("path",{class:"pick-cross",d:"M-12 -12 L12 12 M12 -12 L-12 12"})),o.append(g);const $=()=>{g.classList.remove("hidden"),g.setAttribute("transform",`translate(${c(y.x).toFixed(1)} ${l(y.y).toFixed(1)})`)},m=k=>{y=f(k),$(),h(y),k.preventDefault()};return r.addEventListener("pointerdown",m),u.push(()=>r.removeEventListener("pointerdown",m)),{get:()=>y,set:k=>{y=k,$(),h(y)}}},shape(h,y=""){const g=I("polygon",{class:`shape ${y}`,points:x(h,{x:0,y:0})});return a.append(g),g},dragShape(h,y,g){let $={...y};const m=I("polygon",{class:"shape ghost",points:x(h,$)});o.append(m);const k=()=>m.setAttribute("points",x(h,$));let w=!1;const L=A=>{w=!0,m.setPointerCapture(A.pointerId),A.preventDefault()},v=A=>{w&&($=f(A),k(),g($))},E=()=>{w=!1};m.addEventListener("pointerdown",L),m.addEventListener("pointermove",v),m.addEventListener("pointerup",E),m.addEventListener("pointercancel",E);const S=A=>{A.target!==m&&($=f(A),k(),g($))};return r.addEventListener("pointerdown",S),u.push(()=>{m.removeEventListener("pointerdown",L),m.removeEventListener("pointermove",v),m.removeEventListener("pointerup",E),m.removeEventListener("pointercancel",E),r.removeEventListener("pointerdown",S)}),{get:()=>$,set:A=>{$={...A},k(),g($)}}},scout(h,y){const g=c(y==="x"?h:0),$=l(y==="x"?0:h),m=I("g",{class:`scout ${y}`,transform:`translate(${g.toFixed(1)} ${$.toFixed(1)})`});m.innerHTML=`
        <circle class="scout-head" cx="0" cy="-34" r="13"/>
        <path class="scout-body" d="M0 -21 v22"/>
        <path class="scout-arm" d="M0 -14 l16 -8"/>
        <path class="scout-leg" d="M0 1 l-9 14 M0 1 l9 14"/>`,a.append(m)},guide(h,y){const g=y==="x"?{x1:c(h),y1:j,x2:c(h),y2:W-j}:{x1:j,y1:l(h),x2:W-j,y2:l(h)};s.append(I("line",{class:"guide",x1:g.x1.toFixed(1),y1:g.y1.toFixed(1),x2:g.x2.toFixed(1),y2:g.y2.toFixed(1)}))},mirrorAxis(h){const y=h==="y"?{x1:c(0),y1:j-14,x2:c(0),y2:W-j+14}:{x1:j-14,y1:l(0),x2:W-j+14,y2:l(0)};a.append(I("line",{class:"mirror-axis",x1:y.x1.toFixed(1),y1:y.y1.toFixed(1),x2:y.x2.toFixed(1),y2:y.y2.toFixed(1)}))},span(h,y,g){const $=I("g",{class:"hint-span"});$.append(I("line",{x1:c(h.x).toFixed(1),y1:l(h.y).toFixed(1),x2:c(y.x).toFixed(1),y2:l(y.y).toFixed(1)}));const m=I("text",{x:((c(h.x)+c(y.x))/2).toFixed(1),y:((l(h.y)+l(y.y))/2-10).toFixed(1),"text-anchor":"middle"});m.textContent=g,$.append(m),s.append($)},curve(h,y=""){const g=[];for(let m=-t;m<=t;m+=.25){const k=h(m);!Number.isFinite(k)||Math.abs(k)>t+1||g.push(`${c(m).toFixed(1)},${l(k).toFixed(1)}`)}const $=I("polyline",{class:`curve ${y}`,points:g.join(" ")});return a.append($),$},dot(h,y=""){s.append(I("circle",{class:`grid-dot ${y}`,cx:c(h.x).toFixed(1),cy:l(h.y).toFixed(1),r:"11"}))},clearHints(){s.replaceChildren()},destroy(){for(const h of u)h();n.remove()}}}function $r(e){const t=F(e),n=6,r=1+Math.floor(t()*3),s=1+Math.floor(t()*3),a={x:-Math.floor(t()*2)-1,y:-Math.floor(t()*2)-1},o=[a,{x:a.x+r,y:a.y+s},{x:a.x+r-s,y:a.y+s+r},{x:a.x-s,y:a.y+r}],i=r*r+s*s,c=r+s;return{config:{range:n,shape:o,p:r,q:s},solution:i,check:l=>l===i,hints:[{text:"ריבוע מסביב לצורה"},{text:`שטח הריבוע הגדול הוא ${p(c)} × ${p(c)} = ${p(c*c)}`},{text:`בפינות יש ארבעה משולשים, כל אחד ${p(r)} × ${p(s)} : ${p(2)}`},{text:`${p(c*c)} − ${p(2*r*s)} = ${p(i)}`}],explain:[`הריבוע הגדול מסביב הוא ${p(c)} × ${p(c)} = ${p(c*c)}.`,`ארבעת המשולשים בפינות הם יחד ${p(2*r*s)}.`,`${p(c*c)} − ${p(2*r*s)} = ${p(i)}.`]}}function vr(e,t){const{range:n,shape:r,p:s,q:a}=e.config,o=document.createElement("div");o.className="board-wrap area-board";const i=Vt({range:n});i.shape(r),o.append(i.el);const c=dt({max:99},t);o.append(c.el);const l=r.map(u=>u.x),d=r.map(u=>u.y),f=[{x:Math.min(...l),y:Math.min(...d)},{x:Math.max(...l),y:Math.min(...d)},{x:Math.max(...l),y:Math.max(...d)},{x:Math.min(...l),y:Math.max(...d)}];return{el:o,answer:()=>c.value(),hint(u){if(u===1&&i.shape(f,"outline"),u===2)for(const x of f)i.dot(x,"lit");u===3&&i.span(r[0],r[1],`${s},${a}`),u>=4&&c.set(e.solution)},demonstrate(){c.set(e.solution)},place:u=>c.set(u),destroy(){i.destroy(),o.remove()}}}const Lr={kind:"area",generate:$r,mount:vr},qr="http://www.w3.org/2000/svg",Ae=900,Ne=600,Sr=18,Er=2.5;function ft(e,t={}){const n=document.createElementNS(qr,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function st(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Zt(e,t,n=Er){return st(e,t)<=n}function on(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Ar(e,t){const n=e.a.x,r=e.a.y,s=e.b.x,a=e.b.y,o=t.a.x,i=t.a.y,c=t.b.x,l=t.b.y,d=(n-s)*(i-l)-(r-a)*(o-c);if(Math.abs(d)<1e-9)return null;const f=((n-o)*(i-l)-(r-i)*(o-c))/d;return{x:n+f*(s-n),y:r+f*(a-r)}}function Nr(e,t){const n=e.b.x-e.a.x,r=e.b.y-e.a.y,s=e.a.x-t.c.x,a=e.a.y-t.c.y,o=n*n+r*r,i=2*(s*n+a*r),c=s*s+a*a-t.r*t.r,l=i*i-4*o*c;if(l<0)return[];const d=Math.sqrt(l);return(l===0?[-i/(2*o)]:[(-i-d)/(2*o),(-i+d)/(2*o)]).map(u=>({x:e.a.x+u*n,y:e.a.y+u*r}))}function cn(e,t){const n=st(e.c,t.c);if(n<1e-9||n>e.r+t.r||n<Math.abs(e.r-t.r))return[];const r=(e.r*e.r-t.r*t.r+n*n)/(2*n),s=e.r*e.r-r*r;if(s<0)return[];const a=Math.sqrt(s),o=e.c.x+r*(t.c.x-e.c.x)/n,i=e.c.y+r*(t.c.y-e.c.y)/n,c=-(t.c.y-e.c.y)*a/n,l=(t.c.x-e.c.x)*a/n;return[{x:o+c,y:i+l},{x:o-c,y:i-l}]}function Zr(e){const t=document.createElement("div");t.className="board-wrap construct-board";const n=ft("svg",{class:"board construct",viewBox:`0 0 ${Ae} ${Ne}`}),r=ft("g",{class:"shapes"}),s=ft("g",{class:"points"});n.append(r,s),t.append(n);const a=document.createElement("div");a.className="tray",t.append(a);const o=[],i=[],c=[],l=[];let d="line",f=null,u=0;const x=()=>{s.replaceChildren();for(const k of i){const w=ft("text",{class:"cpoint-label",x:(k.p.x+14).toFixed(1),y:(k.p.y-12).toFixed(1)});w.textContent=k.text,s.append(w)}for(const k of o){const w=ft("circle",{class:`cpoint${f&&Zt(f,k)?" pending":""}`,cx:k.x.toFixed(1),cy:k.y.toFixed(1),r:"9"});s.append(w)}},b=(k,w)=>{k.x<-40||k.x>Ae+40||k.y<-40||k.y>Ne+40||o.some(L=>Zt(L,k))||(o.push(k),w&&i.push({p:k,text:w}),x())},h=()=>{const k=[];for(let w=0;w<c.length;w++){for(let L=w+1;L<c.length;L++){const v=Ar(c[w],c[L]);v&&k.push(v)}for(const L of l)k.push(...Nr(c[w],L))}for(let w=0;w<l.length;w++)for(let L=w+1;L<l.length;L++)k.push(...cn(l[w],l[L]));for(const w of k)b(w)},y=(k,w)=>{const L=w.x-k.x,v=w.y-k.y,S=2e3/(Math.hypot(L,v)||1);r.append(ft("line",{class:"cline",x1:(k.x-L*S).toFixed(1),y1:(k.y-v*S).toFixed(1),x2:(k.x+L*S).toFixed(1),y2:(k.y+v*S).toFixed(1)}))},g={el:t,addPoint:b,addLine(k,w){c.push({a:k,b:w}),y(k,w),b(k),b(w),h(),u++,e()},addCircle(k,w){const L=st(k,w);L<1||(l.push({c:k,r:L}),r.append(ft("circle",{class:"ccircle",cx:k.x.toFixed(1),cy:k.y.toFixed(1),r:L.toFixed(1)})),h(),u++,e())},points:()=>[...o],lines:()=>[...c],circles:()=>[...l],drawn:()=>u,destroy:()=>t.remove()},$=k=>{const w=n.getScreenCTM();if(!w)return;const L=new DOMPoint(k.clientX,k.clientY).matrixTransform(w.inverse());let v=null,E=Sr;for(const S of o){const A=st(S,{x:L.x,y:L.y});A<E&&(E=A,v=S)}if(v){if(!f){f=v,x();return}if(Zt(f,v)){f=null,x();return}d==="line"?g.addLine(f,v):g.addCircle(f,v),f=null,x()}};n.addEventListener("pointerdown",$);const m=()=>{a.replaceChildren();for(const[k,w]of[["line","ישר"],["circle","מעגל"]]){const L=document.createElement("button");L.type="button",L.className=`btn small tray-key${d===k?" primary":""}`,L.textContent=w,L.addEventListener("click",()=>{d=k,f=null,m(),x()}),a.append(L)}};return m(),g}function Fr(e,t){const{a:n,b:r}=e,s=on(n,r),a=r.x-n.x,o=r.y-n.y;return t.lines.some(i=>{const c=i.b.x-i.a.x,l=i.b.y-i.a.y,d=c*a+l*o,f=Math.hypot(c,l)*Math.hypot(a,o);return f===0||Math.abs(d/f)>.03?!1:Math.abs((i.b.x-i.a.x)*(i.a.y-s.y)-(i.a.x-s.x)*(i.b.y-i.a.y))/Math.hypot(c,l)<6})}function Cr(e,t){const{goal:n,a:r,b:s}=e;if(n==="midpoint")return t.points.some(o=>Zt(o,on(r,s),6));if(n==="perpendicular")return Fr(e,t);const a=st(r,s);return t.points.some(o=>Math.abs(st(o,r)-a)<8&&Math.abs(st(o,s)-a)<8)}function ge(e,t){const n=F(e),r=300+Math.floor(n()*80)-40,s=260+Math.floor(n()*140),a={x:450-s/2,y:r},o={x:450+s/2,y:r},i={goal:t,a,b:o},c={midpoint:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","ישר בין שתי נקודות המפגש","הוא חותך את הקטע באמצע"],perpendicular:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","ישר בין שתי נקודות המפגש","הוא מאונך לקטע"],equilateral:["מעגל סביב הנקודה הראשונה דרך השנייה","ומעגל סביב השנייה דרך הראשונה","נקודת המפגש רחוקה אותו דבר משתיהן","מחברים אותה לשתי הנקודות"]},l={midpoint:["שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.","הישר שמחבר אותן חוצה את הקטע ומאונך לו."],perpendicular:["שני מעגלים ברדיוס שווה נפגשים בשתי נקודות.","הישר שמחבר אותן מאונך לקטע."],equilateral:["כל נקודה על המעגל רחוקה מהמרכז כאורך הקטע.","נקודת המפגש של שני המעגלים רחוקה כך משתי הקצוות, ולכן המשולש שווה צלעות."]};return{config:i,solution:{points:[],lines:[]},check:d=>Cr(i,d),hints:c[t].map(d=>({text:d})),explain:l[t]}}function Ir(e){return ge(e,"midpoint")}function Tr(e){return ge(e,"perpendicular")}function Br(e){return ge(e,"equilateral")}function me(e,t){const{a:n,b:r,goal:s}=e.config,a=Zr(t);a.addPoint(n,"A"),a.addPoint(r,"B"),a.addLine(n,r);const o=()=>({points:a.points(),lines:a.lines()}),i=()=>{a.addCircle(n,r),a.addCircle(r,n);const c=cn({c:n,r:st(n,r)},{c:r,r:st(n,r)});if(s==="equilateral"){const l=c[0];l&&(a.addLine(n,l),a.addLine(r,l))}else c.length===2&&a.addLine(c[0],c[1])};return{el:a.el,answer:()=>a.drawn()>1?o():null,hint(c){c===1&&a.addCircle(n,r),c===2&&a.addCircle(r,n),c>=3&&i()},demonstrate:i,destroy:()=>a.destroy()}}const Gr={kind:"build-midpoint",generate:Ir,mount:me},Or={kind:"build-perpendicular",generate:Tr,mount:me},Pr={kind:"build-equilateral",generate:Br,mount:me};function jr(e){const{a:t,b:n,c:r}=e;return 2*(t*n+t*r+n*r)}function Hr(e){const t=F(e),n=2+Math.floor(t()*5),r=2+Math.floor(t()*5),s=2+Math.floor(t()*5),a={a:n,b:r,c:s},o=jr(a);return{config:a,solution:o,check:i=>i===o,hints:[{text:"לפריסה שש פאות"},{text:`${p(n)} × ${p(r)} = ${p(n*r)}`},{text:`${p(n*r)} + ${p(n*s)} + ${p(r*s)} = ${p(n*r+n*s+r*s)}`},{text:`כל פאה מופיעה פעמיים: ${p(o)}`}],explain:[`לתיבה שלושה זוגות של פאות: ${p(n*r)} , ${p(n*s)} , ${p(r*s)}.`,`${p(2)} × (${p(n*r)} + ${p(n*s)} + ${p(r*s)}) = ${p(o)}.`]}}const Ft="http://www.w3.org/2000/svg";function gt(e,t,n,r,s,a=""){const o=document.createElementNS(Ft,"g");o.setAttribute("class",`net-pair ${a}`);const i=document.createElementNS(Ft,"rect");i.setAttribute("class","net-face"),i.setAttribute("x",String(e)),i.setAttribute("y",String(t)),i.setAttribute("width",String(n)),i.setAttribute("height",String(r));const c=document.createElementNS(Ft,"text");return c.setAttribute("class","net-label"),c.setAttribute("x",String(e+n/2)),c.setAttribute("y",String(t+r/2+9)),c.setAttribute("text-anchor","middle"),c.textContent=s,o.append(i,c),o}function Rr(e,t){const{a:n,b:r,c:s}=e.config,a=document.createElement("div");a.className="board-wrap net-board";const o=Math.min(44,420/(2*n+2*r)),i=o*(2*n+2*r),c=o*(2*s+r),l=document.createElementNS(Ft,"svg");l.setAttribute("class","board net-art"),l.setAttribute("viewBox",`-20 -20 ${i+40} ${c+40}`);const d=o*s;l.append(gt(0,d,o*n,o*s,`${n}×${s}`,"ac")),l.append(gt(o*n,d,o*r,o*s,`${r}×${s}`,"bc")),l.append(gt(o*(n+r),d,o*n,o*s,`${n}×${s}`,"ac")),l.append(gt(o*(2*n+r),d,o*r,o*s,`${r}×${s}`,"bc")),l.append(gt(o*n,0,o*r,o*r,`${n}×${r}`,"ab")),l.append(gt(o*n,d+o*s,o*r,o*r,`${n}×${r}`,"ab")),a.append(l);const f=dt({max:999},t);return a.append(f.el),{el:a,answer:()=>f.value(),hint(u){const x=b=>{for(const h of Array.from(l.querySelectorAll(`.net-pair.${b}`)))h.classList.add("lit")};u===1&&x("ab"),u===2&&x("ac"),u===3&&x("bc"),u>=4&&f.set(e.solution)},demonstrate(){f.set(e.solution)},place:u=>f.set(u),destroy:()=>a.remove()}}const Dr={kind:"net",generate:Hr,mount:Rr},Ze=[[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[12,16,20]];function ln(e,t){const n=F(e),[r,s,a]=Ze[Math.floor(n()*Ze.length)],o=t==="squares"||n()<.6?"c":n()<.5?"a":"b",i=t==="squares"?a*a:o==="c"?a:o==="a"?r:s;return{config:{a:r,b:s,c:a,mode:t,missing:o},solution:i,check:c=>c===i,hints:t==="squares"?[{text:`שטח הריבוע על הניצב הוא ${p(r)} × ${p(r)} = ${p(r*r)}`},{text:`ועל הניצב השני ${p(s)} × ${p(s)} = ${p(s*s)}`},{text:"שני השטחים יחד"},{text:`${p(r*r)} + ${p(s*s)} = ${p(a*a)}`}]:[{text:`${p(`${r}² + ${s}² = ${a}²`)}`},{text:o==="c"?`${p(r*r)} + ${p(s*s)}`:`${p(a*a)} − ${p(o==="a"?s*s:r*r)}`},{text:`השורש של ${p(i*i)}`},{text:`הצלע היא ${p(i)}`}],explain:t==="squares"?[`${p(r)}² + ${p(s)}² = ${p(r*r)} + ${p(s*s)} = ${p(a*a)}.`,"שטח הריבוע על היתר שווה לסכום השטחים על הניצבים."]:[`${p(r)}² + ${p(s)}² = ${p(a)}².`,`הצלע החסרה היא ${p(i)}.`]}}function _r(e){return ln(e,"squares")}function Vr(e){return ln(e,"side")}const dn="http://www.w3.org/2000/svg";function nt(e,t,n){const r=document.createElementNS(dn,e);for(const[s,a]of Object.entries(t))r.setAttribute(s,a);return n!==void 0&&(r.textContent=n),r}function fn(e,t){const{a:n,b:r,c:s,mode:a,missing:o}=e.config,i=document.createElement("div");i.className="board-wrap pythagoras-board";const c=Math.min(160/Math.max(n,r),26),l=330,d=430,f={x:l,y:d},u={x:l+r*c,y:d},x={x:l,y:d-n*c},b=document.createElementNS(dn,"svg");b.setAttribute("class","board pythagoras-art"),b.setAttribute("viewBox","0 0 900 620");const h=[],y=[];if(a==="squares"){b.append(nt("rect",{class:"leg-square",x:String(f.x-n*c),y:String(x.y),width:String(n*c),height:String(n*c)})),h.push(b.lastElementChild),b.append(nt("text",{class:"square-label",x:String(f.x-n*c/2),y:String(x.y+n*c/2+10),"text-anchor":"middle"},String(n*n))),b.append(nt("rect",{class:"leg-square",x:String(f.x),y:String(f.y),width:String(r*c),height:String(r*c)})),h.push(b.lastElementChild),b.append(nt("text",{class:"square-label",x:String(f.x+r*c/2),y:String(f.y+r*c/2+10),"text-anchor":"middle"},String(r*r)));const $=u.x-x.x,m=u.y-x.y,k=Math.hypot($,m);let w=-m/k,L=$/k;const v={x:(u.x+x.x)/2,y:(u.y+x.y)/2},E=(v.x+w-f.x)**2+(v.y+L-f.y)**2;(v.x-w-f.x)**2+(v.y-L-f.y)**2>E&&(w=-w,L=-L);const A={x:u.x+w*k,y:u.y+L*k},_={x:x.x+w*k,y:x.y+L*k};b.append(nt("polygon",{class:"hyp-square",points:`${x.x},${x.y} ${u.x},${u.y} ${A.x},${A.y} ${_.x},${_.y}`})),b.append(nt("text",{class:"square-label wanted",x:String((x.x+u.x+A.x+_.x)/4),y:String((x.y+u.y+A.y+_.y)/4+14),"text-anchor":"middle"},"?"))}else b.append(nt("text",{class:"side-label",x:String(f.x-34),y:String((f.y+x.y)/2),"text-anchor":"middle"},o==="a"?"?":String(n))),b.append(nt("text",{class:"side-label",x:String((f.x+u.x)/2),y:String(f.y+44),"text-anchor":"middle"},o==="b"?"?":String(r))),b.append(nt("text",{class:"side-label",x:String((u.x+x.x)/2+30),y:String((u.y+x.y)/2-10),"text-anchor":"middle"},o==="c"?"?":String(s))),y.push(...Array.from(b.querySelectorAll(".side-label")));b.append(nt("polygon",{class:"triangle",points:`${f.x},${f.y} ${u.x},${u.y} ${x.x},${x.y}`})),b.append(nt("path",{class:"right-angle",d:`M${f.x+22} ${f.y} v-22 h-22`})),i.append(b);const g=dt({max:999},t);return i.append(g.el),{el:i,answer:()=>g.value(),hint($){if($===1&&h[0]?.classList.add("lit"),$===1&&y[0]?.classList.add("lit"),$===2&&h[1]?.classList.add("lit"),$===2&&y[1]?.classList.add("lit"),$===3)for(const m of[...h,...y])m.classList.add("lit");$>=4&&g.set(e.solution)},demonstrate(){g.set(e.solution)},place:$=>g.set($),destroy:()=>i.remove()}}const Ur={kind:"pythagoras-squares",generate:_r,mount:fn},Xr={kind:"pythagoras-side",generate:Vr,mount:fn};function zt(e,t,n){return e.a*t+e.b*n}function Wr(e){const t=F(e),n=2+Math.floor(t()*8),r=1+Math.floor(t()*9),s={a:2+Math.floor(t()*2),b:0,total:null};s.total=zt(s,n,r);const a={a:1,b:1+Math.floor(t()*2),total:null};a.total=zt(a,n,r);let o={a:1,b:1,total:null};for(let c=0;c<20&&(o={a:1+Math.floor(t()*3),b:1+Math.floor(t()*3),total:null},o.a===s.a&&o.b===s.b||o.a===a.a&&o.b===a.b);c++);(o.a===a.a&&o.b===a.b||o.a===s.a&&o.b===s.b)&&(o={a:a.a+1,b:a.b+1,total:null});const i=zt(o,n,r);return{config:{rows:[s,a,o],valueA:n,valueB:r},solution:i,check:c=>c===i,hints:[{text:"השורה הראשונה מגלה את הראשון"},{text:`הראשון שווה ${p(n)}`},{text:`השני שווה ${p(r)}`},{text:`${p(o.a)} × ${p(n)} + ${p(o.b)} × ${p(r)} = ${p(i)}`}],explain:[`הראשון שווה ${p(n)} והשני שווה ${p(r)}.`,`${p(o.a)} × ${p(n)} + ${p(o.b)} × ${p(r)} = ${p(i)}.`]}}function Yr(e){const t=document.createElement("div");t.className="quest-row";for(let s=0;s<e.a;s++){const a=document.createElement("span");a.className="quest-token a",t.append(a)}for(let s=0;s<e.b;s++){const a=document.createElement("span");a.className="quest-token b",t.append(a)}const n=document.createElement("span");n.className="quest-equals",n.textContent="=";const r=document.createElement("span");return r.className="quest-total",r.textContent=e.total===null?"?":String(e.total),t.append(n,r),t}function Kr(e,t){const{rows:n,valueA:r,valueB:s}=e.config,a=document.createElement("div");a.className="board-wrap quest-board";const o=document.createElement("div");o.className="quest-table";for(const l of n)o.append(Yr(l));const i=document.createElement("p");i.className="quest-found",a.append(o,i);const c=dt({max:999},t);return a.append(c.el),{el:a,answer:()=>c.value(),hint(l){l===1&&o.firstElementChild?.classList.add("lit"),l===2&&(i.textContent=`= ${r}`),l===3&&(i.textContent=`= ${r} , = ${s}`),l>=4&&c.set(e.solution)},demonstrate(){c.set(e.solution)},place:l=>c.set(l),destroy:()=>a.remove()}}const zr={kind:"quest",generate:Wr,mount:Kr};function qt(e){const t=e.slope===1?"x":e.slope===-1?"−x":`${e.slope<0?"−":""}${Math.abs(e.slope)}x`;return e.offset===0?t:e.offset>0?`${t} + ${e.offset}`:`${t} − ${Math.abs(e.offset)}`}function Jr(e){const t=F(e),n=6,r={slope:t()<.5?1:2,offset:0},s=Math.floor(t()*3),a=2+Math.floor(t()*3),o=s===0?{slope:r.slope,offset:a}:s===1?{slope:r.slope,offset:-a}:{slope:-r.slope,offset:0},i=[o],c=[{slope:r.slope,offset:a},{slope:r.slope,offset:-a},{slope:-r.slope,offset:0},{slope:r.slope,offset:a+1},{slope:-r.slope,offset:a}];for(const d of c){if(i.length>=4)break;i.some(f=>f.slope===d.slope&&f.offset===d.offset)||i.push(d)}for(let d=i.length-1;d>0;d--){const f=Math.floor(t()*(d+1)),u=i[d];i[d]=i[f],i[f]=u}const l=i.findIndex(d=>d.slope===o.slope&&d.offset===o.offset);return{config:{base:r,moved:o,options:i,correct:l,range:n},solution:l,check:d=>d===l,hints:[{text:"איפה הגרף חותך את הציר האנכי"},{text:`${p("x")} = ${p(0)} נותן ${p(o.offset)}`},{text:o.slope===r.slope?"אותה נטייה, רק גובה אחר":"הנטייה התהפכה"},{text:`הפונקציה היא ${p(qt(o))}`}],explain:[`הגרף המקורי הוא ${p(qt(r))}.`,o.slope===r.slope?`הוא הוזז ב־${p(o.offset)} למעלה או למטה, ולכן ${p(qt(o))}.`:`הוא שוקף סביב הציר האופקי, ולכן ${p(qt(o))}.`]}}function Qr(e,t){const{base:n,moved:r,options:s,range:a}=e.config,o=document.createElement("div");o.className="board-wrap shift-board";const i=Vt({range:a});i.curve(f=>n.slope*f+n.offset,"base"),i.curve(f=>r.slope*f+r.offset,"moved"),o.append(i.el);let c=null;const l=document.createElement("div");l.className="machine-choices";const d=()=>{l.replaceChildren(),s.forEach((f,u)=>{const x=document.createElement("button");x.type="button",x.className=`btn choice${c===u?" primary":""}`,x.textContent=qt(f),x.addEventListener("click",()=>{c=u,d(),t()}),l.append(x)})};return d(),o.append(l),{el:o,answer:()=>c,hint(f){f===1&&i.guide(0,"x"),f===2&&i.dot({x:0,y:r.offset},"lit"),f===3&&i.dot({x:1,y:r.slope+r.offset},"lit"),f>=4&&(c=e.solution,d(),t())},demonstrate(){c=e.solution,d(),t()},place:f=>{c=f,d(),t()},destroy(){i.destroy(),o.remove()}}}const ts={kind:"shift",generate:Jr,mount:Qr};function es(e){const t=F(e),n=[],r=2+Math.floor(t()*2),s=2+Math.floor(t()*2);for(let c=0;c<r;c++){const l=1+Math.floor(t()*6);n.push({id:`x${c}`,x:t()<.3?-l:l,n:0})}for(let c=0;c<s;c++){const l=1+Math.floor(t()*9);n.push({id:`n${c}`,x:0,n:t()<.3?-l:l})}for(let c=n.length-1;c>0;c--){const l=Math.floor(t()*(c+1)),d=n[c];n[c]=n[l],n[l]=d}const a=n.reduce((c,l)=>c+l.x,0),o=n.reduce((c,l)=>c+l.n,0),i={};for(const c of n)i[c.id]=c.x!==0?"x":"n";return{config:{tiles:n,sumX:a,sumN:o},solution:i,check:c=>n.every(l=>c[l.id]===(l.x!==0?"x":"n")),hints:[{text:"אותו סוג הולך יחד"},{text:`הקופסה עם ${p("x")} מקבלת את האיברים עם ${p("x")}`},{text:"הקופסה השנייה מקבלת את המספרים"},{text:`${p(`${a}x`)} ו־${p(o)}`}],explain:[`האיברים עם ${p("x")} מצטרפים ל־${p(`${a}x`)}.`,`המספרים מצטרפים ל־${p(o)}.`,`הביטוי כולו הוא ${p(`${a}x ${o>=0?"+":"−"} ${Math.abs(o)}`)}.`]}}function ns(e){return e.x!==0?e.x===1?"x":e.x===-1?"−x":`${e.x<0?"−":""}${Math.abs(e.x)}x`:e.n<0?`−${Math.abs(e.n)}`:String(e.n)}function rs(e,t){const{tiles:n}=e.config,r=document.createElement("div");r.className="board-wrap terms-board";const s=document.createElement("div");s.className="tile-pool";const a=document.createElement("div");a.className="bins";const o=document.createElement("div");o.className="bin";const i=document.createElement("div");i.className="bin",a.append(o,i),r.append(s,a);const c={};let l=!1;const d={x:document.createElement("p"),n:document.createElement("p")};d.x.className="bin-total",d.n.className="bin-total";const f=()=>{s.replaceChildren(),o.replaceChildren(u("x"),d.x),i.replaceChildren(u("1"),d.n);let x=0,b=0;for(const h of n){const y=document.createElement("button");y.type="button",y.className="term-tile",y.textContent=ns(h);const g=c[h.id];y.addEventListener("click",()=>{c[h.id]=g==="x"?"n":g==="n"?void 0:"x",c[h.id]===void 0&&delete c[h.id],l=!0,f(),t()}),g==="x"?(o.append(y),x+=h.x):g==="n"?(i.append(y),b+=h.n):s.append(y)}d.x.textContent=`${x}x`,d.n.textContent=String(b)};function u(x){const b=document.createElement("p");return b.className="bin-head",b.textContent=x,b}return f(),{el:r,answer:()=>l?{...c}:null,hint(x){const b=n.filter(h=>h.x!==0);if(x===1&&b[0]&&(c[b[0].id]="x",l=!0),x===2)for(const h of b)c[h.id]="x";if(x===3)for(const h of n.filter(y=>y.x===0).slice(0,1))c[h.id]="n";if(x>=4)for(const h of n)c[h.id]=h.x!==0?"x":"n";l=!0,f(),t()},demonstrate(){for(const x of n)c[x.id]=x.x!==0?"x":"n";l=!0,f(),t()},place:x=>{for(const b of Object.keys(c))delete c[b];Object.assign(c,x),l=!0,f(),t()},destroy:()=>r.remove()}}const ss={kind:"like-terms",generate:es,mount:rs};function yt(e,t){return e.a*t+e.b}function oe(e){const t=e.a===1?"x":`${e.a}x`;return e.b===0?t:e.b>0?`${t} + ${e.b}`:`${t} − ${Math.abs(e.b)}`}function as(e){const t=F(e),n={a:2+Math.floor(t()*4),b:Math.floor(t()*9)-4},r=[n];for(;r.length<4;){const a={a:Math.max(1,n.a+Math.floor(t()*3)-1),b:n.b+Math.floor(t()*5)-2};r.some(o=>o.a===a.a&&o.b===a.b)||r.push(a)}for(let a=r.length-1;a>0;a--){const o=Math.floor(t()*(a+1)),i=r[a];r[a]=r[o],r[o]=i}const s=r.findIndex(a=>a.a===n.a&&a.b===n.b);return{config:{rule:n,options:r,correct:s},solution:s,check:a=>a===s,hints:[{text:"הכנס מספר וראה מה יוצא"},{text:`${p(1)} נותן ${p(yt(n,1))}`},{text:`${p(2)} נותן ${p(yt(n,2))}, כל צעד מוסיף ${p(n.a)}`},{text:`הכלל הוא ${p(oe(n))}`}],explain:[`הכלל הוא ${p(oe(n))}.`,`${p(1)} → ${p(yt(n,1))} , ${p(2)} → ${p(yt(n,2))} , ${p(3)} → ${p(yt(n,3))}.`]}}function os(e,t){const{rule:n,options:r}=e.config,s=document.createElement("div");s.className="board-wrap machine-board";const a=document.createElement("div");a.className="machine",a.innerHTML=`
    <svg viewBox="0 0 320 180" class="machine-art" aria-hidden="true">
      <rect x="40" y="30" width="240" height="120" rx="18" class="machine-body"/>
      <circle cx="110" cy="90" r="26" class="machine-gear"/>
      <circle cx="210" cy="90" r="18" class="machine-gear"/>
      <path d="M0 90 h40 M280 90 h40" class="machine-pipe"/>
    </svg>`;const o=document.createElement("div");o.className="tray";const i=document.createElement("div");i.className="machine-table";const c=document.createElement("div");c.className="machine-choices",s.append(a,o,i,c);const l=[],d=()=>{i.replaceChildren();for(const b of l){const h=document.createElement("span");h.className="machine-row",h.textContent=`${b} → ${yt(n,b)}`,i.append(h)}},f=b=>{l.includes(b)||l.push(b),d()};for(const b of[1,2,3,4,5]){const h=document.createElement("button");h.type="button",h.className="btn small tray-key",h.textContent=String(b),h.addEventListener("click",()=>f(b)),o.append(h)}let u=null;const x=()=>{c.replaceChildren(),r.forEach((b,h)=>{const y=document.createElement("button");y.type="button",y.className=`btn choice${u===h?" primary":""}`,y.textContent=oe(b),y.addEventListener("click",()=>{u=h,x(),t()}),c.append(y)})};return x(),{el:s,answer:()=>u,hint(b){b===1&&f(1),b===2&&f(2),b===3&&(f(3),f(4)),b>=4&&(u=e.solution,x(),t())},demonstrate(){u=e.solution,x(),t()},place:b=>{u=b,x(),t()},destroy:()=>s.remove()}}const is={kind:"machine",generate:as,mount:os};function pn(e,t,n){const r=t*n,s=Math.min(...e)-r,a=Math.max(...e)+r;return{tickStep:t,labelEvery:n,from:Math.floor(s/r)*r,to:Math.ceil(a/r)*r}}function cs(e){const t=F(e),n=t()<.6?1:2,r=3+Math.floor(t()*2),s=n*(t()<.5?0:-2),a=[],o=[s];for(let d=0;d<r;d++){const f=n*(2+Math.floor(t()*5)),u=t()<.45?-1:1;a.push(u*f),o.push(o[o.length-1]+u*f)}if(o[o.length-1]===s){const d=n*3;a.push(d),o.push(o[o.length-1]+d)}const i=o[o.length-1],c=pn(o,n,5),l=a.map(d=>p(d)).join(" , ");return{config:{...c,start:s,moves:a},solution:i,check:d=>d===i,hints:[{text:"החץ הראשון"},{text:"אחרי החץ הראשון"},{text:"אחרי שני החצים הראשונים"},{text:"כך נגמר המסע"}],explain:[`${l}`,`הסכום שלהם הוא ${p(i-s)}.`,`מ־${p(s)} מגיעים ל־${p(i)}.`]}}function ls(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,start:o,moves:i}=e.config,c=_t({from:n,to:r,tickStep:s,labelEvery:a}),l=[o];let d=o;const f=i.map((h,y)=>{const g=d+h,$=c.arrow(d,g,(h>0?"+":"")+h,h>=0?"plus":"minus",y%2,y+1);return d=g,l.push(g),$}),u=c.token(o,"ship");let x=null;const b=c.chest(o,h=>{x=h,t()},"chest");return{el:c.el,answer:()=>x,hint(h){if(h===1&&f[0]?.classList.add("lit"),h===2&&u.set(l[1]??o),h===3&&u.set(l[2]??l[l.length-1]??o),h>=4){for(const y of f)y.classList.add("lit");u.set(l[l.length-1]),b.set(l[l.length-1])}},demonstrate(){u.set(l[l.length-1]),b.set(l[l.length-1])},place:h=>b.set(h),destroy:()=>c.destroy()}}const ds={kind:"voyage",generate:cs,mount:ls},Fe=[[5,-2],[4,-3],[6,-4],[3,-5],[7,-3]];function fs(e){const t=F(e),n=Fe[Math.floor(t()*Fe.length)],r=3+Math.floor(t()*2),s=t()<.5?0:-n[0],a=[],o=[s];for(let f=0;f<r;f++){const u=n[Math.floor(t()*n.length)];a.push(u),o.push(o[o.length-1]+u)}o[o.length-1]===s&&a.push(n[0]);const c=s+a.reduce((f,u)=>f+u,0),l=pn([...o,c],1,5),d=c-s;return{config:{...l,start:s,target:c,keys:n,route:a},solution:c,check:f=>f===c,hints:[{text:`מהצפרדע ליעד יש ${p(d)}`},{text:"הסכום של הקפיצות שנבחרו מוצג מתחת"},{text:`הקפיצה הראשונה היא ${p(a[0]??0)}`},{text:"כך מגיעים ליעד"}],explain:[`הדרך מהצפרדע ליעד היא ${p(d)}.`,`${a.map(f=>p(f)).join(" ועוד ")} ביחד נותנים ${p(d)}.`]}}function ps(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,start:o,target:i,keys:c,route:l}=e.config,d=_t({from:n,to:r,tickStep:s,labelEvery:a});d.flag(i);let f=o,u=!1;const x=d.chest(o,()=>{},"frog"),b=document.createElement("p");b.className="running-total";const h=()=>{b.textContent=u?`${p(f-o)}`:""},y=$=>{const m=f+$;m<n||m>r||(d.arrow(f,m,($>0?"+":"")+$,$>=0?"plus":"minus"),f=m,u=!0,x.set(f),h(),t())},g=()=>{d.clearArrows(),f=o,u=!1,x.set(o),h(),t()};return d.tray([...c.map($=>({label:($>0?"+":"")+$,onClick:()=>y($)})),{label:"התחלה",onClick:g}]),d.el.append(b),{el:d.el,answer:()=>u?f:null,hint($){if($===1&&d.band(Math.min(o,i),Math.max(o,i)),$===2&&b.classList.add("lit"),$===3&&(g(),y(l[0]??0)),$>=4){g();for(const m of l)y(m)}},demonstrate(){g();for(const $ of l)y($)},place:$=>{f=$,u=!0,x.set($),h(),t()},destroy:()=>d.destroy()}}const us={kind:"jumps",generate:fs,mount:ps};function hs(e,t){return t==="y"?{x:-e.x,y:e.y}:{x:e.x,y:-e.y}}const Ce=[[{x:0,y:0},{x:2,y:0},{x:2,y:1},{x:0,y:2}],[{x:0,y:0},{x:3,y:0},{x:1,y:2}],[{x:0,y:0},{x:2,y:1},{x:1,y:3},{x:-1,y:2}]];function xs(e){const t=F(e),n=6,r=Ce[Math.floor(t()*Ce.length)],s=t()<.5?"y":"x",a=s==="y"?{x:2+Math.floor(t()*2),y:-2+Math.floor(t()*4)}:{x:-2+Math.floor(t()*4),y:2+Math.floor(t()*2)},o=hs(a,s);return{config:{range:n,shape:r,anchor:a,axis:s},solution:o,check:c=>c.x===o.x&&c.y===o.y,hints:[{text:`הציר ${s==="y"?"האנכי":"האופקי"} הוא המראה`},{text:"המרחק של הפינה מהמראה"},{text:"אותו מרחק בצד השני"},{text:"כך נראה השיקוף"}],explain:[s==="y"?`בשיקוף סביב הציר האנכי כל ${p("x")} מחליף סימן ו־${p("y")} נשאר.`:`בשיקוף סביב הציר האופקי כל ${p("y")} מחליף סימן ו־${p("x")} נשאר.`,`${p(`(${a.x}, ${a.y})`)} הולך ל־${p(`(${o.x}, ${o.y})`)}.`]}}function gs(e,t){const{range:n,shape:r,anchor:s,axis:a}=e.config,o=e.solution,i=Vt({range:n});i.mirrorAxis(a),i.shape(r.map(u=>({x:u.x+s.x,y:u.y+s.y})));const c=r.map(u=>a==="y"?{x:-u.x,y:u.y}:{x:u.x,y:-u.y});let l=null;const d=a==="y"?{x:-n+1,y:-n+2}:{x:-n+2,y:-n+1},f=i.dragShape(c,d,u=>{l=u,t()});return{el:i.el,answer:()=>l,hint(u){if(u===1&&i.guide(0,a==="y"?"x":"y"),u===2){const x=a==="y"?{x:0,y:s.y}:{x:s.x,y:0};i.span(s,x,p(Math.abs(a==="y"?s.x:s.y)))}u===3&&i.dot(o,"lit"),u>=4&&f.set(o)},demonstrate(){i.dot(o,"lit"),f.set(o)},place:u=>f.set(u),destroy:()=>i.destroy()}}const ms={kind:"mirror",generate:xs,mount:gs};function ys(){const e=document.createElement("div");e.className="board-wrap chain-board";const t=document.createElement("p");t.className="chain-goal";const n=document.createElement("p");n.className="chain-value";const r=document.createElement("p");r.className="chain-steps";const s=document.createElement("p");s.className="chain-hint";const a=document.createElement("div");return a.className="tray",e.append(t,n,r,s,a),{el:e,setValue:o=>{n.textContent=String(o)},setChain:o=>{r.textContent=o.join(" → ")},goal:o=>{t.textContent=o},keys:o=>{a.replaceChildren();for(const i of o){const c=document.createElement("button");c.type="button",c.className="btn small tray-key",c.textContent=i.label,c.addEventListener("click",i.onClick),a.append(c)}},mark:o=>{s.textContent=o},matched:o=>n.classList.toggle("matched",o),clearHints:()=>{s.textContent=""},destroy:()=>e.remove()}}function bs(e){const t=F(e),n=[2,3,5],r=n[Math.floor(t()*n.length)],s=r===2?4+Math.floor(t()*4):r===3?3+Math.floor(t()*2):2+Math.floor(t()*2),a=r**s,o=[...new Set([r,...n])].sort((i,c)=>i-c);return{config:{base:r,exponent:s,target:a,keys:o},solution:a,check:i=>i===a,hints:[{text:`${p(a)} הוא חזקה של ${p(r)}`},{text:`${p(r)} × ${p(r)} = ${p(r*r)}`},{text:`צריך ${p(s)} פעמים ${p(r)}`},{text:"כך בונים את המספר"}],explain:[`${p(a)} = ${p(`${r}^${s}`)}.`,`${Array.from({length:s},()=>p(r)).join(" × ")} = ${p(a)}.`]}}function ks(e,t){const{base:n,exponent:r,target:s,keys:a}=e.config,o=ys();o.goal(`${s}`);let i=1,c=["1"],l=!1;const d=()=>{o.setValue(i),o.setChain(c),o.matched(i===s)},f=x=>{i*x>s*100||(i*=x,c.push(`×${x}`),l=!0,d(),t())},u=()=>{i=1,c=["1"],l=!1,d(),t()};return o.keys([...a.map(x=>({label:`× ${x}`,onClick:()=>f(x)})),{label:"התחלה",onClick:u}]),d(),{el:o.el,answer:()=>l?i:null,hint(x){if(x===1&&o.mark(`${s} = ?`),x===2&&o.mark(`${n} × ${n} = ${n*n}`),x===3&&(u(),f(n),f(n)),x>=4){u();for(let b=0;b<r;b++)f(n)}},demonstrate(){u();for(let x=0;x<r;x++)f(n)},place:x=>{i=x,l=!0,c=[String(x)],d(),t()},destroy:()=>o.destroy()}}const ws={kind:"powers",generate:bs,mount:ks},Ms="http://www.w3.org/2000/svg",Jt=820,Qt=620,At=70;function Q(e,t={}){const n=document.createElementNS(Ms,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function $s(e){const{cols:t,rows:n,square:r=!1}=e,s=document.createElement("div");s.className="board-wrap";const a=Q("svg",{class:"board rect-board",viewBox:`0 0 ${Jt} ${Qt}`});s.append(a);const o=Q("g",{class:"hints"}),i=Q("g",{class:"main"}),c=Q("g",{class:"drag"});a.append(i,o,c);const l=Math.min((Jt-2*At)/t,(Qt-2*At)/n),d=At,f=Qt-At,u=g=>d+g*l,x=g=>f-g*l;for(let g=0;g<=t;g++)i.append(Q("line",{class:"cell-line",x1:u(g).toFixed(1),y1:x(0).toFixed(1),x2:u(g).toFixed(1),y2:x(n).toFixed(1)}));for(let g=0;g<=n;g++)i.append(Q("line",{class:"cell-line",x1:u(0).toFixed(1),y1:x(g).toFixed(1),x2:u(t).toFixed(1),y2:x(g).toFixed(1)}));const b=Q("text",{class:"goal",x:String(Jt-30),y:"58","text-anchor":"end"});i.append(b);const h=[];return{el:s,corner(g,$){let m={...g};const k=Q("rect",{class:"area-rect"}),w=Q("circle",{class:"area-handle",r:"20"}),L=Q("text",{class:"area-text",x:"30",y:"58","text-anchor":"start"}),v=Q("text",{class:"side-label","text-anchor":"middle"}),E=Q("text",{class:"side-label","text-anchor":"middle"});c.append(k,v,E,L,w);const S=()=>{k.setAttribute("x",u(0).toFixed(1)),k.setAttribute("y",x(m.h).toFixed(1)),k.setAttribute("width",(m.w*l).toFixed(1)),k.setAttribute("height",(m.h*l).toFixed(1)),w.setAttribute("cx",u(m.w).toFixed(1)),w.setAttribute("cy",x(m.h).toFixed(1)),L.textContent=`${m.w} × ${m.h} = ${m.w*m.h}`,v.setAttribute("x",u(m.w/2).toFixed(1)),v.setAttribute("y",(x(0)+44).toFixed(1)),v.textContent=String(m.w),E.setAttribute("x",(u(0)-32).toFixed(1)),E.setAttribute("y",(x(m.h/2)+10).toFixed(1)),E.textContent=String(m.h)};S();const A=V=>{const kt=a.getScreenCTM();if(!kt)return m;const q=new DOMPoint(V.clientX,V.clientY).matrixTransform(kt.inverse());let B=Math.round((q.x-d)/l),R=Math.round((f-q.y)/l);if(r){const Me=Math.max(B,R);B=Me,R=Me}return{w:Math.max(1,Math.min(t,B)),h:Math.max(1,Math.min(n,R))}};let _=!1;const H=V=>{_=!0,w.setPointerCapture(V.pointerId),V.preventDefault()},tt=V=>{_&&(m=A(V),S(),$(m))},J=()=>{_=!1};w.addEventListener("pointerdown",H),w.addEventListener("pointermove",tt),w.addEventListener("pointerup",J),w.addEventListener("pointercancel",J);const T=V=>{V.target!==w&&(m=A(V),S(),$(m))};return a.addEventListener("pointerdown",T),h.push(()=>{w.removeEventListener("pointerdown",H),w.removeEventListener("pointermove",tt),w.removeEventListener("pointerup",J),w.removeEventListener("pointercancel",J),a.removeEventListener("pointerdown",T)}),{get:()=>m,set:V=>{m={...V},S(),$(m)}}},goal(g){b.textContent=g},strip(g,$){o.append(Q("rect",{class:"hint-strip",x:u(0).toFixed(1),y:x($).toFixed(1),width:(g*l).toFixed(1),height:($*l).toFixed(1)}))},clearHints(){o.replaceChildren()},destroy(){for(const g of h)g();s.remove()}}}function Ie(e,t,n){const r=[];for(let s=1;s<=t;s++){if(e%s!==0)continue;const a=e/s;a>=1&&a<=n&&r.push({w:s,h:a})}return r}function vs(e){const t=F(e),n=12,r=10;let s=24;for(let i=0;i<40;i++){const c=2+Math.floor(t()*9),l=2+Math.floor(t()*8),d=c*l;if(Ie(d,n,r).filter(f=>f.w>1&&f.h>1).length>=2){s=d;break}}const a=Ie(s,n,r),o=a.find(i=>i.w>1&&i.h>1)??a[0];return{config:{cols:n,rows:r,target:s,square:!1},solution:o,check:i=>i.w*i.h===s,hints:[{text:`צריך מלבן ששטחו ${p(s)}`},{text:`${p(o.w)} בשורה`},{text:`${p(o.w)} כפול ${p(o.h)}`},{text:"כך זה נראה"}],explain:[`${p(o.w)} × ${p(o.h)} = ${p(s)}.`,`יש גם דרכים אחרות: ${a.map(i=>p(`${i.w}×${i.h}`)).join(" , ")}.`]}}function un(e,t){const{cols:n,rows:r,target:s,square:a}=e.config,o=$s({cols:n,rows:r,square:a});o.goal(`= ${s}`);const i=e.solution;let c=!1;const l=o.corner({w:1,h:1},()=>{c=!0,t()});return{el:o.el,answer:()=>c?l.get():null,hint(d){d===1&&o.goal(`= ${s}`),d===2&&o.strip(i.w,1),d===3&&o.strip(i.w,i.h),d>=4&&l.set(i)},demonstrate(){l.set(i)},place:d=>l.set(d),destroy:()=>o.destroy()}}const Ls={kind:"product",generate:vs,mount:un};function qs(e){const t=F(e),n=12,r=12,s=3+Math.floor(t()*8),a=s*s;return{config:{cols:n,rows:r,target:a,square:!0},solution:{w:s,h:s},check:o=>o.w===s&&o.h===s,hints:[{text:`ריבוע ששטחו ${p(a)}`},{text:"אותו מספר בשורה ובעמודה"},{text:`${p(s)} בשורה`},{text:`${p(s)} כפול ${p(s)}`}],explain:[`${p(s)} × ${p(s)} = ${p(a)}.`,`הצלע היא השורש הריבועי של ${p(a)}.`]}}const Ss={kind:"perfect-square",generate:qs,mount:un};function Es(e){const t=F(e),n=6,r=()=>{const a=1+Math.floor(t()*(n-1));return t()<.5?-a:a},s={x:r(),y:r()};return{config:{range:n,target:s},solution:s,check:a=>a.x===s.x&&a.y===s.y,hints:[{text:"הקו של הצופה שעל הציר האופקי"},{text:"הקו של הצופה שעל הציר האנכי"},{text:"האוצר נמצא במפגש"},{text:`הנקודה היא ${p(`(${s.x}, ${s.y})`)}`}],explain:[`הצופה על הציר האופקי עומד ב־${p(s.x)}, והצופה על הציר האנכי ב־${p(s.y)}.`,`המפגש הוא ${p(`(${s.x}, ${s.y})`)}.`]}}function As(e,t){const{range:n,target:r}=e.config,s=Vt({range:n});s.scout(r.x,"x"),s.scout(r.y,"y");let a=null;const o=s.pick(i=>{a=i,t()});return{el:s.el,answer:()=>a,hint(i){i===1&&s.guide(r.x,"x"),i===2&&s.guide(r.y,"y"),i===3&&s.dot(r,"lit"),i>=4&&o.set(r)},demonstrate(){s.dot(r,"lit"),o.set(r)},place:i=>o.set(i),destroy:()=>s.destroy()}}const Ns={kind:"quadrant",generate:Es,mount:As},Te=[{from:0,to:20,tickStep:1,labelEvery:5},{from:-10,to:10,tickStep:1,labelEvery:5},{from:0,to:100,tickStep:5,labelEvery:4},{from:-50,to:50,tickStep:5,labelEvery:5}];function Zs(e){const t=F(e),n=Te[Math.floor(t()*Te.length)],r=Math.round((n.to-n.from)/n.tickStep),s=[];for(let i=1;i<r;i++)i%n.labelEvery!==0&&s.push(n.from+i*n.tickStep);const a=s[Math.floor(t()*s.length)],o=n.tickStep*n.labelEvery;return{config:{...n,target:a},solution:a,check:i=>i===a,hints:[{text:"היעד נמצא בין שני המספרים הכתובים האלה"},{text:`בין סימון לסימון יש ${p(n.tickStep)}`},{text:"ספור את הסימונים מהמספר הכתוב הקרוב"},{text:"כך מגיעים ליעד"}],explain:[`בין שני מספרים כתובים יש ${p(o)}.`,`כל סימון קטן שווה ${p(n.tickStep)}.`,`היעד הוא ${p(a)}.`]}}function Fs(e,t){const{from:n,to:r,tickStep:s,labelEvery:a,target:o}=e.config,i=_t({from:n,to:r,tickStep:s,labelEvery:a});i.flag(o);let c=null;const l=i.chest(n,u=>{c=u,t()});c=null;const d=n+Math.floor((o-n)/(s*a))*s*a,f=d+s*a;return{el:i.el,answer:()=>c,hint(u){u===1&&i.band(d,f),u===2&&i.bracket(n,n+s,String(s)),u===3&&i.count(d,o),u>=4&&l.set(o)},demonstrate(){i.count(d,o),l.set(o)},place:u=>l.set(u),destroy:()=>i.destroy()}}const Cs={kind:"treasure-line",generate:Zs,mount:Fs};const hn={"treasure-line":Cs,jumps:us,voyage:ds,quadrant:Ns,mirror:ms,product:Ls,powers:ws,"perfect-square":Ss,"alphametic-sum":Rn,"alphametic-product":Dn,"angle-aim":Qn,"angle-straight":tr,"angle-triangle":er,"angle-isosceles":nr,machine:is,"like-terms":ss,balance:ar,"balance-both":or,quest:zr,chase:wr,shift:ts,"build-midpoint":Gr,"build-perpendicular":Or,"build-equilateral":Pr,area:Lr,"pythagoras-squares":Ur,"pythagoras-side":Xr,net:Dr,spin:hr,frequency:xr,"build-wheel":gr};function Is(e){return hn[e]}function xn(e){return hn[e]!==void 0}const bt=5;function te(e,t){return Math.max(1,bt-e-t)}function Ts(e,t){return Math.max(0,t-e)}const Bs=.8;function ye(){return[...pe].sort((e,t)=>e.order-t.order)}function Ut(e,t){return e.missions[t]??0}function gn(e,t){return Ut(e,t)>0}function Gs(e,t){return xn(e.kind)&&e.requires.every(n=>gn(t,n))}function Os(e,t){return Qe(e.id).filter(n=>Gs(n,t))}function Xt(e){return Qe(e.id).filter(t=>xn(t.kind))}function Ps(e,t){return Xt(e).reduce((n,r)=>n+Ut(t,r.id),0)}function js(e){return Xt(e).length*bt}function Hs(e,t){const n=js(e);return n===0?!1:Ps(e,t)>=Bs*n}function Wt(e,t){const n=ye(),r=n.findIndex(s=>s.id===e.id);return r<=0?!0:Hs(n[r-1],t)}function Rs(e,t){const n=Xt(e);return n.length>0&&n.every(r=>gn(t,r.id))}function Ds(e){const t=ye(),n=t.filter(r=>Wt(r,e));return n.find(r=>!Rs(r,e))??n[n.length-1]??t[0]}const Tt={width:2e3,height:1e3};function ie(e,t){return{x:(e+180)/360*Tt.width,y:(90-t)/180*Tt.height}}const _s={x:0,y:0,w:Tt.width,h:Tt.height};function Vs(e,t){const n=ie(e.lon0,e.lat0),r=ie(e.lon1,e.lat1);let s=Math.min(n.x,r.x),a=Math.min(n.y,r.y),o=Math.abs(r.x-n.x),i=Math.abs(r.y-n.y);if(o/i<t){const c=i*t;s-=(c-o)/2,o=c}else{const c=o/t;a-=(c-i)/2,i=c}return{x:s,y:a,w:o,h:i}}function Us(e,t,n){const r=ie(e,t);return{left:(r.x-n.x)/n.w*100,top:(r.y-n.y)/n.h*100}}function mn(e,t,n){const r=M("div",{class:"map-art","aria-hidden":"true"});r.innerHTML=e;const s=r.firstElementChild;s instanceof SVGSVGElement&&(s.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),s.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=M("div",{class:"map-markers"});for(const o of n){const{left:i,top:c}=Us(o.lon,o.lat,t),l=o.onClick?"button":"div",d=M(l,{class:`marker ${o.state}`,style:`left:${i.toFixed(2)}%; top:${c.toFixed(2)}%`});l==="button"&&d.setAttribute("type","button");const f=M("span",{class:"marker-icon"});f.innerHTML=o.icon;const u=M("span",{class:"marker-caption"},M("span",{class:"marker-label"},o.label),...o.sub?[M("span",{class:"marker-sub"},o.sub)]:[]);d.append(f,u),o.onClick&&d.addEventListener("click",o.onClick),a.append(d)}return M("div",{class:"map"},r,a)}const yn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,Xs=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,Ws=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function Ys(){const e=U(),t=ye().map(n=>{const r=$e(n).length,s=$e(n).filter(a=>e.conquered.includes(a.id)).length;return Wt(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${s}/${r}`,state:"continent",icon:Xs,onClick:()=>z(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:Ws}});return K({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},mn(yn,_s,t),M("div",{class:"row"},ee("שדרוג הגיבורים","/upgrades"),ee("תפריט המשימות","/missions"),ee("הגיבורים שלי","/setup")))}function ee(e,t){const n=M("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>z(t)),n}const ne=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Ks=5/3;function zs(e){const t=ue(e.id??"");if(!t)return K({title:"יבשת לא נמצאה"},M("p",{},"חזרה למפת העולם."));const n=U();if(!Wt(t,n)){const s=M("button",{class:"btn primary",type:"button"},"למפת העולם");return s.addEventListener("click",()=>z("/")),K({title:t.name,subtitle:t.domain},M("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),M("div",{class:"row"},s))}const r=t.fortresses.map(s=>s.home?{lon:s.lon,lat:s.lat,label:s.name,sub:"הבית שלך",state:"player",icon:ne}:n.conquered.includes(s.id)?{lon:s.lon,lat:s.lat,label:s.name,sub:"נכבש",state:"player",icon:ne}:{lon:s.lon,lat:s.lat,label:s.name,sub:s.starsNeeded>0?`${s.level} · ★ ${s.starsNeeded}`:String(s.level),state:"enemy",icon:ne,onClick:()=>z(`/battle/${s.id}`)});return K({title:t.name,subtitle:t.domain},mn(yn,Vs(t.view,Ks),r),M("div",{class:"row"},Be("שדרוג הגיבורים","/upgrades"),Be("תפריט המשימות",`/missions/${t.id}`)))}function Be(e,t){const n=M("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>z(t)),n}function ct(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Bt(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function Js(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function lt(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function ce(e,t){let n=null,r=1/0;for(const s of t){const a=ct(e,s);(a<r-1e-9||Math.abs(a-r)<=1e-9&&n&&s.id<n.id)&&(n=s,r=a)}return n}const Qs=2.2;function ta(e,t){const n=Js(e,t.side);if(n.length===0)return{kind:"idle"};const r=ce(t,n.filter(o=>o.stats.range<=1.5));if(t.stats.range>2&&r&&ct(t,r)<Qs){const o=t.x-r.x,i=t.y-r.y,c=Math.hypot(o,i)||1;return{kind:"move",x:t.x+o/c*3,y:t.y+i/c*3}}const a=ce(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}const le=1/30,Ge=50;function ea(e,t){return e*Ge/(Ge+t)}const Oe=.3,bn=.45,kn={arrow:14,fire:9,heal:12},na=.85,ra=.15;function sa(e,t,n,r){const s=t==="player"?1:-1,a=t==="player"?3:n-3,o=r/2,i=[0,-1.6,1.6];return e.map((c,l)=>({x:a+(c.stats.range<=1.5?2*s:0),y:o+(i[l]??0)}))}function aa(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=F(e.seed),r={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},s=(a,o)=>{const i=sa(a,o,t.width,t.height);a.forEach((c,l)=>{const d=i[l];r.units.push({id:`${o}-${c.cls}-${l}`,side:o,cls:c.cls,name:c.name,gender:c.gender,x:d.x+Lt(n,-.6,.6),y:d.y+Lt(n,-.6,.6),hp:c.stats.hp,maxHp:c.stats.hp,stats:c.stats,order:o===r.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:Lt(n,0,1/c.stats.attackRate),healCooldown:Lt(n,0,c.stats.healRate??3),facing:o==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return s(e.player,"player"),s(e.enemy,"enemy"),r}function re(e,t,n){const r=lt(e,t);r?.alive&&(r.order=n)}function Pe(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function je(e,t){const n=lt(e,t);if(!n?.alive||!n.stats.healing)return null;let r=null;for(const s of Bt(e,n.side))s.id===n.id||s.hp>=s.maxHp||ct(n,s)>n.stats.range||(!r||s.hp/s.maxHp<r.hp/r.maxHp)&&(r=s);return r}function oa(e,t){const n=lt(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function ia(e,t,n){const r=lt(e,t),s=lt(e,n),a=r?.stats.healing;return!r?.alive||!a||r.healCooldown>0||!s?.alive||s.side!==r.side||s.id===r.id||ct(r,s)>r.stats.range?!1:(wn(e,r,s,a),!0)}function wn(e,t,n,r){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:r,speed:kn.heal}),t.healCooldown=t.stats.healRate??3}function ca(e,t=le){if(!e.winner){e.time+=t,la(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),da(e,n),fa(e,n,t));ha(e),xa(e),ga(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function la(e,t){const n=[];for(const r of e.projectiles){const s=lt(e,r.targetId);if(!s||!s.alive)continue;const a=s.x-r.x,o=s.y-r.y,i=Math.hypot(a,o),c=r.speed*t;if(i<=c){if(r.kind==="heal"){const l=Math.min(s.maxHp-s.hp,r.amount);s.hp+=l,e.events.push({kind:"heal",unitId:s.id,amount:l,time:e.time})}else Mn(e,s,r.amount);continue}r.x+=a/i*c,r.y+=o/i*c,r.angle=Math.atan2(o,a),n.push(r)}e.projectiles=n}function da(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const r=Bt(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*na&&ct(t,a)<=t.stats.range);let s=null;for(const a of r)(!s||a.hp/a.maxHp<s.hp/s.maxHp)&&(s=a);s&&wn(e,t,s,n)}function fa(e,t,n){const r=pa(e,t);if(r.kind==="idle"){t.targetId=null;return}if(r.kind==="move"){t.targetId=null,He(t,r.x,r.y,n);return}const s=lt(e,r.targetId);if(!s||!s.alive){t.targetId=null;return}if(t.targetId=s.id,ct(t,s)>t.stats.range){He(t,s.x,s.y,n);return}t.facing=s.x>=t.x?1:-1,t.cooldown<=0&&ua(e,t,s)}function pa(e,t){const n=t.order;if(n.kind==="move")if(ct(t,n)<=ra)t.order=Pe(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const r=lt(e,t.order.targetId);if(r?.alive)return{kind:"attack",targetId:r.id};t.order=Pe(e,t)}if(t.order.kind==="hold"){const r=e.units.filter(a=>a.alive&&a.side!==t.side&&ct(t,a)<=t.stats.range),s=ce(t,r);return s?{kind:"attack",targetId:s.id}:{kind:"idle"}}return ta(e,t)}function He(e,t,n,r){const s=t-e.x,a=n-e.y,o=Math.hypot(s,a);if(o<1e-6)return;const i=Math.min(o,e.stats.speed*r);e.x+=s/o*i,e.y+=a/o*i,Math.abs(s)>1e-6&&(e.facing=s>0?1:-1)}function ua(e,t,n){const r=ea(t.stats.attack,n.stats.defense)*(1+Lt(e.rng,-Oe,Oe));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){Mn(e,n,r);return}const s=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:s,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:r,speed:kn[s]})}function Mn(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function ha(e){const t=e.units.filter(r=>r.alive),n=bn*2;for(let r=0;r<t.length;r++)for(let s=r+1;s<t.length;s++){const a=t[r],o=t[s],i=o.x-a.x,c=o.y-a.y,l=Math.hypot(i,c);if(l>=n)continue;const d=(n-l)/2,f=l<1e-6?1:i/l,u=l<1e-6?0:c/l;a.x-=f*d,a.y-=u*d,o.x+=f*d,o.y+=u*d}}function xa(e){const t=bn;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function ga(e){const t=Bt(e,"player").length,n=Bt(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const St={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function Gt(e,t){return St[e][t]}const Ot={warrior:St.warrior.m,archer:St.archer.m,mage:St.mage.m},be={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},ma={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},ke={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},we=[1,2,3,4,6,8,10,12],$n=we.length,ya=.08;function ba(e){return e>=$n?null:we[e]}function vn(e){return 1+ya*e}const Re=8;function ka(e,t,n){return e*vn(n)}function wa(e){let t=0;for(let n=0;n<Math.min(e,$n);n++)t+=we[n];return t}const Ln=["warrior","archer","mage"],Ma={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},$a=["hp","attack","defense"];function va(e,t){const r={...be[e]};for(const s of ke[e]){const a=t[s]??0;if(a<=0)continue;const o=r[s];typeof o=="number"&&(r[s]=o*vn(a))}return r}function La(e){return Ln.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||Ot[t],gender:n.gender,stats:va(t,n.levels)}})}function qa(e){return Ln.map(t=>{const n={...be[t]};for(const r of $a){const s=n[r];typeof s=="number"&&(n[r]=s*e)}return{cls:t,name:Ma[t],gender:"m",stats:n}})}function Sa(e,t,n){const r=he(e);return!r||r.fortress.home?null:{player:La(t),enemy:qa(r.fortress.difficulty),seed:n,manual:"player"}}let Ct=null;function Ea(e){Ct=e}function Aa(e){return Ct&&Ct.fortressId===e?Ct:null}const et={x:64,y:84},rt={x:56,y:58},ot={x:77,y:56},Pt={x:66,y:50},jt={x:60,y:52},De={x:100,y:70},Ht={x:99,y:51};function Na(e){const t=n=>e.querySelector(`.part-${n}`);return{cloak:t("cloak"),legBack:t("leg-back"),legFront:t("leg-front"),armBack:t("arm-back"),armFront:t("arm-front"),body:t("body"),head:t("head"),robe:t("robe"),quiver:t("quiver"),arrow:t("arrow"),bow:t("bow"),staff:t("staff"),sword:t("sword"),swoosh:t("swoosh"),orb:t("orb"),orbHalo:t("orb-halo")}}function G(e,t,n,r,s=""){e&&e.setAttribute("transform",`rotate(${t.toFixed(2)} ${n} ${r})${s}`)}function Za(e){return e<0||e>.42?0:e<.13?-Math.sin(e/.13*(Math.PI/2)):Math.cos((e-.13)/.29*(Math.PI/2))}function Fa(e,t){const{phase:n,stride:r,time:s}=t,a=Math.sin(n)*r,o=Math.sin(n*2)*r,i=Math.sin(s*2.1)*(1-r),c=Za(t.sinceAttack);G(e.legBack,a*26,et.x,et.y),G(e.legFront,-a*26,et.x,et.y),G(e.cloak,a*9+i*1.6,jt.x,jt.y),G(e.robe,a*4+i*1.2,et.x,et.y+20),G(e.quiver,a*6,rt.x,rt.y);const l=-Math.abs(o)*3;switch(e.body&&e.body.setAttribute("transform",`translate(0 ${l.toFixed(2)}) rotate(${(a*2+i*.9).toFixed(2)} ${et.x} ${et.y})`),e.head&&e.head.setAttribute("transform",`translate(0 ${(l*1.15).toFixed(2)}) rotate(${(-a*2.5+i*1.4).toFixed(2)} ${Pt.x} ${Pt.y})`),t.cls){case"warrior":{G(e.armBack,-a*14,rt.x,rt.y),G(e.armFront,a*10+c*60,ot.x,ot.y),G(e.sword,c*42,Ht.x,Ht.y),It(e.swoosh,t.sinceAttack<.42?Math.max(0,c)*.9:0);break}case"archer":{const d=t.sinceAttack<.42?c:-.35;if(G(e.armFront,a*5,ot.x,ot.y),G(e.armBack,-a*8-d*16,rt.x,rt.y),e.arrow){const f=t.sinceAttack>=0&&t.sinceAttack<.5;e.arrow.style.opacity=f?"0":"1",e.arrow.setAttribute("transform",`translate(${(-d*9).toFixed(2)} 0)`)}e.bow&&G(e.bow,d*4,104,68),It(e.swoosh,t.sinceAttack>=0&&t.sinceAttack<.22?1-t.sinceAttack/.22:0);break}case"mage":{G(e.armBack,-a*10,rt.x,rt.y),G(e.armFront,a*6+c*26,ot.x,ot.y),G(e.staff,c*18,De.x,De.y);const d=t.sinceAttack>=0&&t.sinceAttack<.5?1+.9*Math.max(0,1-t.sinceAttack/.5):1+.08*Math.sin(s*4);e.orb&&_e(e.orb,d,100,20),e.orbHalo&&_e(e.orbHalo,d*1.1,100,20);const f=t.sinceAttack>=0&&t.sinceAttack<.45;It(e.swoosh,f?1-t.sinceAttack/.45:0),e.swoosh&&f&&e.swoosh.setAttribute("transform",`rotate(${(t.sinceAttack*900).toFixed(0)} 100 20)`);break}}}function It(e,t){e&&(e.style.opacity=t.toFixed(2))}function _e(e,t,n,r){e.setAttribute("transform",`translate(${(n*(1-t)).toFixed(2)} ${(r*(1-t)).toFixed(2)}) scale(${t.toFixed(3)})`)}function Ca(e,t){const n=Math.min(1,t),r=1-Math.pow(1-n,3);G(e.legBack,r*30,et.x,et.y),G(e.legFront,-r*20,et.x,et.y),G(e.armBack,r*40,rt.x,rt.y),G(e.armFront,-r*60,ot.x,ot.y),G(e.sword,r*50,Ht.x,Ht.y),It(e.swoosh,0),G(e.head,r*18,Pt.x,Pt.y),G(e.cloak,r*12,jt.x,jt.y)}const Ia=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Ta=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ba=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ga=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Oa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Pa=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,ja=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Ha=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,Y=100,mt=128,Ve=2.05,Ue=.7,Ra="http://www.w3.org/2000/svg",Da={"warrior-f":Ta,"warrior-m":Ba,"archer-f":Ga,"archer-m":Oa,"mage-f":Pa,"mage-m":ja};function P(e,t={}){const n=document.createElementNS(Ra,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,s);return n}function de(e,t,n){const r=e.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width",String(t)),r.setAttribute("height",String(n)),r.setAttribute("overflow","visible"))}function _a(){const e=P("defs");return e.innerHTML=`
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
    </filter>`,e}function Va(e,t){const n=P("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*Y} ${e.arena.height*Y}`,preserveAspectRatio:"xMidYMid meet"}),r=P("g",{class:"arena-art"});r.innerHTML=Ia,de(r,e.arena.width*Y,e.arena.height*Y);const s=P("g",{class:"layer-ground"}),a=P("g",{class:"layer-units"}),o=P("g",{class:"layer-shots"}),i=P("g",{class:"layer-bursts"}),c=P("g",{class:"layer-text"}),l=P("rect",{class:"vignette",width:String(e.arena.width*Y),height:String(e.arena.height*Y),fill:"url(#fx-vignette)"});n.append(_a(),r,s,a,o,i,c,l);const d=new Map;for(const u of e.units){const x=Ua(u);d.set(u.id,x),s.append(x.ring,x.shadow,x.dust),a.append(x.group)}const f=u=>{u.preventDefault();const x=n.getScreenCTM();if(!x)return;const b=new DOMPoint(u.clientX,u.clientY).matrixTransform(x.inverse()),h=b.x/Y,y=b.y/Y;let g=null,$=1;for(const m of e.units){if(!m.alive)continue;const k=Math.hypot(m.x-h,m.y-.5-y);k<$&&($=k,g=m)}t({x:h,y,unit:g})};return n.addEventListener("pointerdown",f),{el:n,update(u,x){for(const h of u.units)d.get(h.id)?.update(h,u.time,x.has(h.id));const b=[...u.units].sort((h,y)=>Number(h.alive)-Number(y.alive)||h.y-y.y);for(const h of b){const y=d.get(h.id);y&&a.append(y.group)}Xa(o,u.projectiles,u.time),Ya(i,u,d),Ka(c,u,d)},destroy(){n.removeEventListener("pointerdown",f),n.remove()}}}function Ua(e){const t=P("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=P("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),r=P("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});r.style.opacity="0";const s=P("g",{class:`unit ${e.side} ${e.cls}`}),a=P("g",{class:"sprite"});a.innerHTML=Da[`${e.cls}-${e.gender}`]??"",de(a,mt,mt);const o=P("g",{class:"fallen"});o.innerHTML=Ha,de(o,mt,mt),o.setAttribute("transform",`scale(${Ve}) translate(${-mt/2} -122)`),o.style.display="none";const i=P("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),c=P("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});s.append(o,a,i,c);const l=Na(a),d={group:s,ring:t,shadow:n,dust:r,px:e.x,py:e.y,phase:Math.random()*Math.PI*2,lastMoveAt:-99,update(f,u,x){const b=f.x*Y,h=f.y*Y,y=Math.hypot(f.x-d.px,f.y-d.py);d.px=f.x,d.py=f.y,y>8e-4&&(d.phase+=y*4.4,d.lastMoveAt=u);const g=u-d.lastMoveAt<.25,$=u-f.lastAttackAt;f.alive?Fa(l,{cls:f.cls,phase:d.phase,stride:g?1:0,sinceAttack:$,time:u}):Ca(l,(u-f.lastHitAt)/Ue);const m=f.alive&&$>=0&&$<.3?Math.sin($/.3*Math.PI)*16*f.facing:0;s.setAttribute("transform",`translate(${(b+m).toFixed(1)} ${h.toFixed(1)})`),t.setAttribute("cx",b.toFixed(1)),t.setAttribute("cy",h.toFixed(1)),t.style.display=x&&f.alive?"":"none",n.setAttribute("cx",b.toFixed(1)),n.setAttribute("cy",(h+6).toFixed(1)),n.style.opacity=f.alive?"1":"0.4",r.setAttribute("cx",(b-26*f.facing).toFixed(1)),r.setAttribute("cy",(h+10).toFixed(1)),r.style.opacity=g&&f.alive?(.18+.12*Math.abs(Math.sin(u*9))).toFixed(2):"0";const k=u-f.lastHitAt<.18,w=k&&f.alive?1.05:1,L=Ve*w;a.setAttribute("transform",`scale(${(f.facing*L).toFixed(3)} ${L.toFixed(3)}) translate(${-mt/2} -122)`);const v=f.alive?0:(u-f.lastHitAt)/Ue;a.style.display=f.alive||v<1?"":"none",a.style.opacity=f.alive?"1":String(Math.max(0,1-v)),o.style.display=!f.alive&&v>.55?"":"none",o.style.opacity=String(Math.min(1,Math.max(0,(v-.55)/.45)));const E=Math.max(0,f.hp/f.maxHp);c.setAttribute("width",(94*E).toFixed(1)),s.classList.toggle("hurt",k&&f.alive),s.classList.toggle("dead",!f.alive),i.style.display=f.alive?"":"none",c.style.display=f.alive?"":"none"}};return d}function Xa(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(P("g"));t.forEach((r,s)=>{const a=e.childNodes[s];a.getAttribute("data-kind")!==r.kind&&(a.setAttribute("data-kind",r.kind),a.setAttribute("class",`shot ${r.kind}`),a.innerHTML=Wa(r.kind));const i=r.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(r.x*Y).toFixed(1)} ${(r.y*Y).toFixed(1)}) rotate(${(r.angle*180/Math.PI).toFixed(1)})${i}`)})}function Wa(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function Ya(e,t,n){const r=t.events.filter(s=>t.time-s.time<.32);for(;e.childNodes.length>r.length;)e.lastChild?.remove();for(;e.childNodes.length<r.length;)e.append(P("circle"));r.forEach((s,a)=>{const o=e.childNodes[a],i=n.get(s.unitId);if(!i)return;const c=(t.time-s.time)/.32;o.setAttribute("class",`burst ${s.kind}`),o.setAttribute("cx",(i.px*Y).toFixed(1)),o.setAttribute("cy",(i.py*Y-90).toFixed(1)),o.setAttribute("r",(14+c*40).toFixed(1)),o.setAttribute("opacity",(1-c).toFixed(2))})}function Ka(e,t,n){const r=t.events.filter(s=>t.time-s.time<1.1&&s.amount>=1);for(;e.childNodes.length>r.length;)e.lastChild?.remove();for(;e.childNodes.length<r.length;)e.append(P("text",{"text-anchor":"middle"}));r.forEach((s,a)=>{const o=e.childNodes[a],i=n.get(s.unitId);if(!i)return;const c=(t.time-s.time)/1.1;o.setAttribute("class",`floater ${s.kind}`),o.setAttribute("x",(i.px*Y).toFixed(1)),o.setAttribute("y",(i.py*Y-210-c*70).toFixed(1)),o.setAttribute("opacity",(1-c*c).toFixed(2));const l=`${s.kind==="heal"?"+":"-"}${Math.round(s.amount)}`;o.textContent!==l&&(o.textContent=l)})}function za(e){const t=he(e.id??""),n=t?Sa(t.fortress.id,U(),Date.now()&65535||1):null;if(!t||!n)return K({title:"מבצר לא נמצא"},M("p",{},"חזרה למפת העולם."));const{continent:r,fortress:s}=t;if(U().conquered.includes(s.id)){const q=M("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return q.addEventListener("click",()=>z(`/continent/${r.id}`)),K({title:s.name,subtitle:r.name,showStars:!1},M("p",{class:"notice"},"המבצר הזה כבר נכבש."),M("div",{class:"row"},q))}const a=aa(n),o=new Set(a.units.filter(q=>q.side==="player").map(q=>q.id)),i=Qa(new URLSearchParams(location.search).get("speed"));let c=!1,l=!1,d=0,f=0,u=0;window.__battle=a;const x=Va(a,q=>tt(q)),b=M("div",{class:"stage"});b.append(x.el);const h=M("div",{class:"overlay"});b.append(h);const y=()=>{h.replaceChildren(M("div",{class:"panel"},M("h2",{},s.name),M("p",{},`רמת האויב: ${s.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),M("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),$())),h.classList.remove("hidden")},g=q=>{Ea({fortressId:s.id,won:q,seconds:a.time,heroes:A.map(R=>({cls:R.cls,name:R.name||Gt(R.cls,R.gender),alive:R.alive,health:Math.max(0,R.hp/R.maxHp)}))});const B=M("button",{class:"btn primary",type:"button"},"המשך");B.addEventListener("click",()=>z(`/result/${s.id}/${q?"win":"lose"}`)),h.replaceChildren(M("div",{class:"panel"},M("h2",{},q?"המבצר נכבש":"הקרב אבד"),M("p",{},q?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),B)),h.classList.remove("hidden")};function $(){const q=M("button",{class:"btn primary",type:"button"},"התחל קרב");return q.addEventListener("click",()=>{h.classList.add("hidden"),c=!0,f=performance.now()}),q}const m=M("div",{class:"portraits"}),k=M("button",{class:"btn small",type:"button"},"השהה"),w=M("button",{class:"btn small",type:"button"},"ריפוי"),L=M("button",{class:"btn small",type:"button"},"בחר הכול"),v=M("button",{class:"btn small",type:"button"},"עמוד במקום");k.addEventListener("click",()=>{l||(c=!c,f=performance.now(),k.textContent=c?"השהה":"המשך")}),L.addEventListener("click",()=>{o.clear();for(const q of a.units)q.side==="player"&&q.alive&&o.add(q.id);H()}),v.addEventListener("click",()=>{for(const q of o)re(a,q,{kind:"hold"})});const E=a.units.find(q=>q.side==="player"&&q.cls==="mage");w.addEventListener("click",()=>{if(!E)return;const q=je(a,E.id);q&&(ia(a,E.id,q.id),S())});function S(){(E?oa(a,E.id)&&je(a,E.id)!==null:!1)?w.removeAttribute("disabled"):w.setAttribute("disabled","true")}const A=a.units.filter(q=>q.side==="player"),_=A.map(q=>{const B=M("span",{class:"portrait-fill"}),R=M("button",{class:`portrait ${q.cls}`,type:"button"},M("span",{class:"portrait-name"},q.name||Gt(q.cls,q.gender)),M("span",{class:"portrait-bar"},B));return R.addEventListener("click",()=>{q.alive&&(o.clear(),o.add(q.id),H())}),m.append(R),{unit:q,button:R,fill:B}});function H(){S();for(const q of _){const B=Math.max(0,q.unit.hp/q.unit.maxHp);q.fill.style.width=`${(B*100).toFixed(0)}%`,q.button.classList.toggle("selected",o.has(q.unit.id)),q.button.classList.toggle("dead",!q.unit.alive)}}H();function tt(q){if(!c)return;const B=q.unit;if(B&&B.side==="player"&&B.alive){o.clear(),o.add(B.id),H();return}if(o.size!==0)for(const R of o)B&&B.side==="enemy"&&B.alive?re(a,R,{kind:"attack",targetId:B.id}):re(a,R,{kind:"move",x:q.x,y:q.y})}const J=q=>{q.code==="Space"&&(q.preventDefault(),k.click())};addEventListener("keydown",J);const T=()=>{if(d=requestAnimationFrame(T),c&&!l){const q=performance.now();u+=Math.min(.1,(q-f)/1e3)*i*Ja,f=q;let B=0;for(;u>=le&&B<8*i;)V(),u-=le,B++}x.update(a,o)},V=()=>{ca(a),a.winner&&!l&&(l=!0,c=!1,g(a.winner==="player")),H()};y(),d=requestAnimationFrame(T);const kt=K({title:s.name,subtitle:`${r.name} · ${r.domain}`,showStars:!1},b,M("div",{class:"hud"},m,M("div",{class:"hud-actions"},w,L,v,k)));return{el:kt.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",J),x.destroy(),kt.destroy()}}}const Ja=.6;function Qa(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function to(e){const t=he(e.id??"");if(!t)return K({title:"מבצר לא נמצא"},M("p",{},"חזרה למפת העולם."));const{continent:n,fortress:r}=t,s=e.outcome==="win",a=Aa(r.id),o=!U().flags.sawUpgrades;ht(d=>{s&&!d.conquered.includes(r.id)&&d.conquered.push(r.id),o&&(d.flags.sawUpgrades=!0,d.stars+=Re)});const i=[];a&&i.push(M("section",{class:"card"},M("h3",{},"הגיבורים שלך"),...a.heroes.map(d=>M("div",{class:"stat-row"},M("span",{class:"stat-name"},d.name),M("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),M("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),o&&i.push(M("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Re} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const c=n.fortresses.filter(d=>!d.home&&!U().conquered.includes(d.id)).length;s&&c===0?i.push(M("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):s||i.push(M("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const l=M("div",{class:"row"},Nt(s?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...s?[]:[Nt("קרב נוסף באותו מבצר",`/battle/${r.id}`)],Nt("חזרה ליבשת",`/continent/${n.id}`),Nt("תפריט המשימות","/missions"));return K({title:s?"המבצר נכבש":"הקרב אבד",subtitle:`${r.name} · ${ue(n.id)?.name??""}`,showBack:!1},...i,l)}function Nt(e,t,n=!1){const r=M("button",{class:n?"btn primary":"btn",type:"button"},e);return r.addEventListener("click",()=>z(t)),r}function eo(e){let t=0;for(const n of Object.keys(e.heroes)){const r=e.heroes[n];for(const s of ke[n])t+=wa(r.levels[s]??0)}return t}function no(e,t,n){const r=()=>{i.remove(),removeEventListener("keydown",s)},s=c=>{c.key==="Escape"&&r()},a=n.map(c=>{const l=M("button",{class:c.primary?"btn primary":"btn",type:"button"},c.label);return l.addEventListener("click",()=>{r(),c.onClick()}),l}),o=M("div",{class:"modal",role:"dialog","aria-modal":"true"},M("h2",{},e),M("p",{},t),M("div",{class:"modal-actions"},...a)),i=M("div",{class:"backdrop"},o);i.addEventListener("click",c=>{c.target===i&&r()}),addEventListener("keydown",s),document.body.append(i),a.find(c=>c.classList.contains("primary"))?.focus()}function ro(){if(!U().flags.sawUpgrades)return K({title:"שדרוג הגיבורים"},M("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=M("div",{class:"stack"}),t=()=>{const n=U();e.replaceChildren(...Object.keys(Ot).map(r=>{const s=n.heroes[r],a=ke[r].map(i=>so(r,i,t)),o=Gt(r,s.gender);return M("section",{class:"card hero"},M("h3",{},s.name?`${s.name} · ${o}`:o),M("div",{class:"stats"},...a))}))};return t(),K({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${eo(U())}`},e)}function so(e,t,n){const a=U().heroes[e].levels[t]??0,o=be[e][t]??0,i=ka(o,t,a),c=ba(a),l=M("button",{class:"btn small",type:"button"},c===null?"מרבי":`★ ${c}`);return c===null&&l.setAttribute("disabled","true"),l.addEventListener("click",()=>{if(c!==null){if(U().stars<c){no("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>z("/missions")}]);return}ht(d=>{d.stars-=c;const f=d.heroes[e];f.levels[t]=(f.levels[t]??0)+1}),n()}}),M("div",{class:"stat-row"},M("span",{class:"stat-name"},ma[t]),M("span",{class:"stat-value"},ao(i)),M("span",{class:"stat-level"},`דרגה ${a}`),l)}function ao(e){return e>=10?String(Math.round(e)):e.toFixed(1)}function qn(e){const t=U(),n=ue(e.id??""),r=n&&Wt(n,t)?n:Ds(t),s=Os(r,t),a=Xt(r).length-s.length,o=s.map(c=>{const l=Ut(t,c.id),d=M("button",{class:"card mission-card",type:"button"},M("h3",{},c.title),M("span",{class:"stars-row"},oo(l)));return d.addEventListener("click",()=>z(`/mission/${c.id}`)),d}),i=o.length>0?[M("div",{class:"grid"},...o)]:[M("p",{class:"notice"},"המשימות של היבשת הזו עדיין בדרך.")];return a>0&&i.push(M("p",{class:"muted"},`עוד ${a} משימות ייפתחו לפי ההתקדמות.`)),K({title:"משימות",subtitle:`${r.name} · ${r.domain}`},...i)}function oo(e){return"★".repeat(e)+"☆".repeat(bt-e)}const fe={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},io=["m","f"];function co(){const e=M("div",{class:"stack"}),t=()=>{const r=U();e.replaceChildren(...Object.keys(Ot).map(s=>lo(s,r.heroes[s].gender,r.heroes[s].name,t)))};t();const n=M("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{ht(r=>{for(const s of Object.keys(Ot)){const a=r.heroes[s];a.name.trim()||(a.name=fe[s][a.gender][0])}r.flags.setupDone=!0}),z("/")}),K({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:U().flags.setupDone},e,M("div",{class:"row"},n))}function lo(e,t,n,r){const s=M("input",{class:"name-input",type:"text",maxlength:"14",placeholder:fe[e][t][0],value:n,"aria-label":`שם ה${Gt(e,t)}`});s.addEventListener("input",()=>{ht(i=>{i.heroes[e].name=s.value})});const a=i=>{const c=M("button",{class:`btn small${t===i?" primary":""}`,type:"button"},St[e][i]);return c.addEventListener("click",()=>{ht(l=>{l.heroes[e].gender=i}),r()}),c},o=fe[e][t].map(i=>{const c=M("button",{class:"chip",type:"button"},i);return c.addEventListener("click",()=>{ht(l=>{l.heroes[e].name=i}),r()}),c});return M("section",{class:"card hero-setup"},M("div",{class:"setup-row"},...io.map(a)),M("div",{class:"setup-row"},s),M("div",{class:"setup-row chips"},...o))}function fo(e){const t=Bn(e.id??""),n=t?Is(t.kind):void 0;if(!t||!n)return K({title:"משימה לא נמצאה"},M("p",{},"חזרה לתפריט המשימות."));const r=M("div",{class:"mission-stage"}),s=M("p",{class:"hint-line"}),a=M("div",{class:"stars-row big"}),o=M("div",{class:"overlay hidden"}),i=M("button",{class:"btn",type:"button"},"רמז"),c=M("button",{class:"btn primary",type:"button"},"בדיקה");c.setAttribute("disabled","true");let l,d,f=0,u=0,x=!1;const b=()=>{const w=x?h:te(f,u);a.replaceChildren(...Array.from({length:bt},(L,v)=>M("span",{class:`star${v<w?" lit":""}`},"★")))};let h=bt;const y=()=>{!d||x||(d.answer()===null?c.setAttribute("disabled","true"):c.removeAttribute("disabled"))},g=w=>{d?.destroy(),l=n.generate(w),d=n.mount(l,y),f=0,u=0,x=!1,h=bt,s.textContent="",r.replaceChildren(d.el,o),o.classList.add("hidden"),c.setAttribute("disabled","true"),i.removeAttribute("disabled"),b(),$()};function $(){window.__mission={solve:()=>{d.demonstrate(),y()},place:w=>{d.place?.(w),y()},solution:()=>l.solution,state:()=>({hintsUsed:f,mistakes:u,finished:x,score:te(f,u)})}}i.addEventListener("click",()=>{x||f>=l.hints.length||(f++,d.hint(f),s.textContent=l.hints[f-1]?.text??"",f>=l.hints.length&&i.setAttribute("disabled","true"),b(),y())}),c.addEventListener("click",()=>{if(x)return;const w=d.answer();if(w!==null){if(l.check(w)){m();return}u++,s.textContent="לא שם. נסה שוב.",r.classList.add("shake"),setTimeout(()=>r.classList.remove("shake"),400),b()}});function m(){x=!0,h=te(f,u);const w=Ut(U(),t.id),L=Ts(w,h);ht(S=>{S.stars+=L,S.missions[t.id]=Math.max(w,h),S.solvedTopics.includes(t.topicId)||S.solvedTopics.push(t.topicId)}),b();const v=M("button",{class:"btn",type:"button"},"עוד אחת");v.addEventListener("click",()=>g(Math.floor(Math.random()*65535)+1));const E=M("button",{class:"btn primary",type:"button"},"לתפריט המשימות");E.addEventListener("click",()=>z("/missions")),o.replaceChildren(M("div",{class:"panel"},M("h2",{},"נכון"),...l.explain.map(S=>M("p",{},S)),M("p",{class:"reward"},L>0?`+${L} ★`:"★"),M("div",{class:"modal-actions"},E,v))),o.classList.remove("hidden")}g(Date.now()&65535||1);const k=K({title:t.title,subtitle:""},r,s,M("div",{class:"hud"},a,M("div",{class:"hud-actions"},i,c)));return{el:k.el,destroy(){d.destroy(),k.destroy()}}}at("/",Ys);at("/continent/:id",zs);at("/battle/:id",za);at("/result/:id/:outcome",to);at("/upgrades",ro);at("/missions",qn);at("/missions/:id",qn);at("/mission/:id",fo);at("/setup",co);Sn(()=>{const e=M("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>z("/")),K({title:"הדף לא נמצא",showBack:!1},e)});!U().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const Xe=document.getElementById("app");Xe&&Zn(Xe);
