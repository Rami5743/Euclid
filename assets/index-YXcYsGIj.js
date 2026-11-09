(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Ot=[];let jt=null,_=null,nt=null;function R(t,e){Ot.push({pattern:t.split("/").filter(Boolean),factory:e})}function ae(t){jt=t}function Z(t){location.hash==="#"+t?st():location.hash=t}function oe(){history.length>1?history.back():Z("/")}function le(){return location.hash.replace(/^#/,"")||"/"}function se(t){const e=t.split("/").filter(Boolean);for(const n of Ot){if(n.pattern.length!==e.length)continue;const r={};let a=!0;for(let o=0;o<n.pattern.length;o++){const l=n.pattern[o],c=e[o];if(l.startsWith(":"))r[l.slice(1)]=decodeURIComponent(c);else if(l!==c){a=!1;break}}if(a)return{factory:n.factory,params:r}}return null}function st(){if(!_)return;nt?.destroy?.(),_.replaceChildren();const t=le(),e=se(t),n=e?.factory??jt;n&&(nt=n(e?.params??{}),_.append(nt.el),_.scrollTop=0)}function ie(t){_=t,addEventListener("hashchange",st),st()}const rt="euclid.";class ce{read(e){try{const n=localStorage.getItem(rt+e);return n===null?null:JSON.parse(n)}catch{return null}}write(e,n){try{localStorage.setItem(rt+e,JSON.stringify(n))}catch{}}remove(e){try{localStorage.removeItem(rt+e)}catch{}}}const Pt=new ce,Dt="profile";function de(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],flags:{sawUpgrades:!1,setupDone:!1}}}function fe(t){return t.solvedTopics??=[],t.conquered??=[],t}let U=fe(Pt.read(Dt)??de());const it=new Set;function b(){return U}function he(t){return it.add(t),()=>it.delete(t)}function j(t){t(U),Pt.write(Dt,U);for(const e of it)e(U);return U}function s(t,e={},...n){const r=document.createElement(t);for(const[a,o]of Object.entries(e))a==="class"?r.className=o:r.setAttribute(a,o);return r.append(...n),r}function L(t,...e){const n=s("button",{class:"stars",type:"button",title:"תפריט המשימות"}),r=()=>{n.replaceChildren(s("span",{class:"star-icon"},"★"),s("span",{},String(b().stars)))};r();const a=he(r);n.addEventListener("click",()=>Z("/missions"));const o=s("header",{class:"top"});if(t.showBack!==!1){const c=s("button",{class:"back",type:"button","aria-label":"חזרה"},"→");c.addEventListener("click",()=>oe()),o.append(c)}return o.append(s("div",{class:"titles"},s("h1",{},t.title),...t.subtitle?[s("p",{class:"subtitle"},t.subtitle)]:[])),t.showStars!==!1&&o.append(n),{el:s("div",{class:"page"},o,s("main",{class:"content"},...e)),destroy:()=>a()}}const gt=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function kt(t){return gt.find(e=>e.id===t)}function yt(t){for(const e of gt){const n=e.fortresses.find(r=>r.id===t);if(n)return{continent:e,fortress:n}}}function ct(t){return t.fortresses.filter(e=>!e.home)}function mt(){return[...gt].sort((t,e)=>t.order-e.order)}function _t(t,e){return ct(t).every(n=>e.conquered.includes(n.id))}function wt(t,e){const n=mt(),r=n.findIndex(a=>a.id===t.id);return r<=0?!0:_t(n[r-1],e)}function pe(t){const e=mt();return e.find(n=>!_t(n,t))??e[e.length-1]}function ue(t,e){const n=[];for(const r of t.topics)if(n.push(r),!e.solvedTopics.includes(r.id))break;return n}const X={width:2e3,height:1e3};function dt(t,e){return{x:(t+180)/360*X.width,y:(90-e)/180*X.height}}const ge={x:0,y:0,w:X.width,h:X.height};function ke(t,e){const n=dt(t.lon0,t.lat0),r=dt(t.lon1,t.lat1);let a=Math.min(n.x,r.x),o=Math.min(n.y,r.y),l=Math.abs(r.x-n.x),c=Math.abs(r.y-n.y);if(l/c<e){const i=c*e;a-=(i-l)/2,l=i}else{const i=l/e;o-=(i-c)/2,c=i}return{x:a,y:o,w:l,h:c}}function ye(t,e,n){const r=dt(t,e);return{left:(r.x-n.x)/n.w*100,top:(r.y-n.y)/n.h*100}}function Ut(t,e,n){const r=s("div",{class:"map-art","aria-hidden":"true"});r.innerHTML=t;const a=r.firstElementChild;a instanceof SVGSVGElement&&(a.setAttribute("viewBox",`${e.x.toFixed(1)} ${e.y.toFixed(1)} ${e.w.toFixed(1)} ${e.h.toFixed(1)}`),a.setAttribute("preserveAspectRatio","xMidYMid slice"));const o=s("div",{class:"map-markers"});for(const l of n){const{left:c,top:i}=ye(l.lon,l.lat,e),h=l.onClick?"button":"div",f=s(h,{class:`marker ${l.state}`,style:`left:${c.toFixed(2)}%; top:${i.toFixed(2)}%`});h==="button"&&f.setAttribute("type","button");const p=s("span",{class:"marker-icon"});p.innerHTML=l.icon;const u=s("span",{class:"marker-caption"},s("span",{class:"marker-label"},l.label),...l.sub?[s("span",{class:"marker-sub"},l.sub)]:[]);f.append(p,u),l.onClick&&f.addEventListener("click",l.onClick),o.append(f)}return s("div",{class:"map"},r,o)}const Vt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,me=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,we=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function xe(){const t=b(),e=mt().map(n=>{const r=ct(n).length,a=ct(n).filter(o=>t.conquered.includes(o.id)).length;return wt(n,t)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${a}/${r}`,state:"continent",icon:me,onClick:()=>Z(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:we}});return L({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Ut(Vt,ge,e),s("div",{class:"row"},at("שדרוג הגיבורים","/upgrades"),at("תפריט המשימות","/missions"),at("הגיבורים שלי","/setup")))}function at(t,e){const n=s("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>Z(e)),n}const ot=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,be=5/3;function Me(t){const e=kt(t.id??"");if(!e)return L({title:"יבשת לא נמצאה"},s("p",{},"חזרה למפת העולם."));const n=b();if(!wt(e,n)){const a=s("button",{class:"btn primary",type:"button"},"למפת העולם");return a.addEventListener("click",()=>Z("/")),L({title:e.name,subtitle:e.domain},s("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),s("div",{class:"row"},a))}const r=e.fortresses.map(a=>a.home?{lon:a.lon,lat:a.lat,label:a.name,sub:"הבית שלך",state:"player",icon:ot}:n.conquered.includes(a.id)?{lon:a.lon,lat:a.lat,label:a.name,sub:"נכבש",state:"player",icon:ot}:{lon:a.lon,lat:a.lat,label:a.name,sub:a.starsNeeded>0?`${a.level} · ★ ${a.starsNeeded}`:String(a.level),state:"enemy",icon:ot,onClick:()=>Z(`/battle/${a.id}`)});return L({title:e.name,subtitle:e.domain},Ut(Vt,ke(e.view,be),r),s("div",{class:"row"},Et("שדרוג הגיבורים","/upgrades"),Et("תפריט המשימות",`/missions/${e.id}`)))}function Et(t,e){const n=s("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>Z(e)),n}function I(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}function J(t,e){return t.units.filter(n=>n.alive&&n.side===e)}function Le(t,e){return t.units.filter(n=>n.alive&&n.side!==e)}function B(t,e){return e===null?void 0:t.units.find(n=>n.id===e)}function ft(t,e){let n=null,r=1/0;for(const a of e){const o=I(t,a);(o<r-1e-9||Math.abs(o-r)<=1e-9&&n&&a.id<n.id)&&(n=a,r=o)}return n}const ve=2.2;function qe(t,e){const n=Le(t,e.side);if(n.length===0)return{kind:"idle"};const r=ft(e,n.filter(l=>l.stats.range<=1.5));if(e.stats.range>2&&r&&I(e,r)<ve){const l=e.x-r.x,c=e.y-r.y,i=Math.hypot(l,c)||1;return{kind:"move",x:e.x+l/i*3,y:e.y+c/i*3}}const o=ft(e,n);return o?{kind:"attack",targetId:o.id}:{kind:"idle"}}function Ze(t){let e=t>>>0;const r=()=>{e=e+1831565813>>>0;let a=e;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296};return r.seed=t,r}function V(t,e,n){return e+t()*(n-e)}const ht=1/30,$t=50;function Ae(t,e){return t*$t/($t+e)}const St=.3,Kt=.45,Wt={arrow:14,fire:9,heal:12},Ee=.85,$e=.15;function Se(t,e,n,r){const a=e==="player"?1:-1,o=e==="player"?3:n-3,l=r/2,c=[0,-1.6,1.6];return t.map((i,h)=>({x:o+(i.stats.range<=1.5?2*a:0),y:l+(c[h]??0)}))}function Ce(t){const e={width:t.arenaWidth??24,height:t.arenaHeight??14},n=Ze(t.seed),r={time:0,arena:e,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:t.manual??null},a=(o,l)=>{const c=Se(o,l,e.width,e.height);o.forEach((i,h)=>{const f=c[h];r.units.push({id:`${l}-${i.cls}-${h}`,side:l,cls:i.cls,name:i.name,gender:i.gender,x:f.x+V(n,-.6,.6),y:f.y+V(n,-.6,.6),hp:i.stats.hp,maxHp:i.stats.hp,stats:i.stats,order:l===r.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:V(n,0,1/i.stats.attackRate),healCooldown:V(n,0,i.stats.healRate??3),facing:l==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return a(t.player,"player"),a(t.enemy,"enemy"),r}function lt(t,e,n){const r=B(t,e);r?.alive&&(r.order=n)}function Ct(t,e){return e.side===t.manual?{kind:"hold"}:{kind:"auto"}}function Gt(t,e){const n=B(t,e);if(!n?.alive||!n.stats.healing)return null;let r=null;for(const a of J(t,n.side))a.id===n.id||a.hp>=a.maxHp||I(n,a)>n.stats.range||(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);return r}function Ge(t,e){const n=B(t,e);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function Ne(t,e,n){const r=B(t,e),a=B(t,n),o=r?.stats.healing;return!r?.alive||!o||r.healCooldown>0||!a?.alive||a.side!==r.side||a.id===r.id||I(r,a)>r.stats.range?!1:(Yt(t,r,a,o),!0)}function Yt(t,e,n,r){t.projectiles.push({id:`p${t.nextId++}`,kind:"heal",side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:r,speed:Wt.heal}),e.healCooldown=e.stats.healRate??3}function Fe(t,e=ht){if(!t.winner){t.time+=e,Ie(t,e);for(const n of t.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-e),n.healCooldown=Math.max(0,n.healCooldown-e),Be(t,n),Re(t,n,e));Oe(t),je(t),Pe(t),t.events.length>0&&(t.events=t.events.filter(n=>t.time-n.time<2))}}function Ie(t,e){const n=[];for(const r of t.projectiles){const a=B(t,r.targetId);if(!a||!a.alive)continue;const o=a.x-r.x,l=a.y-r.y,c=Math.hypot(o,l),i=r.speed*e;if(c<=i){if(r.kind==="heal"){const h=Math.min(a.maxHp-a.hp,r.amount);a.hp+=h,t.events.push({kind:"heal",unitId:a.id,amount:h,time:t.time})}else Xt(t,a,r.amount);continue}r.x+=o/c*i,r.y+=l/c*i,r.angle=Math.atan2(l,o),n.push(r)}t.projectiles=n}function Be(t,e){if(e.side===t.manual)return;const n=e.stats.healing;if(!n||e.healCooldown>0)return;const r=J(t,e.side).filter(o=>o.id!==e.id&&o.hp<o.maxHp*Ee&&I(e,o)<=e.stats.range);let a=null;for(const o of r)(!a||o.hp/o.maxHp<a.hp/a.maxHp)&&(a=o);a&&Yt(t,e,a,n)}function Re(t,e,n){const r=Te(t,e);if(r.kind==="idle"){e.targetId=null;return}if(r.kind==="move"){e.targetId=null,Nt(e,r.x,r.y,n);return}const a=B(t,r.targetId);if(!a||!a.alive){e.targetId=null;return}if(e.targetId=a.id,I(e,a)>e.stats.range){Nt(e,a.x,a.y,n);return}e.facing=a.x>=e.x?1:-1,e.cooldown<=0&&He(t,e,a)}function Te(t,e){const n=e.order;if(n.kind==="move")if(I(e,n)<=$e)e.order=Ct(t,e);else return{kind:"move",x:n.x,y:n.y};if(e.order.kind==="attack"){const r=B(t,e.order.targetId);if(r?.alive)return{kind:"attack",targetId:r.id};e.order=Ct(t,e)}if(e.order.kind==="hold"){const r=t.units.filter(o=>o.alive&&o.side!==e.side&&I(e,o)<=e.stats.range),a=ft(e,r);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}return qe(t,e)}function Nt(t,e,n,r){const a=e-t.x,o=n-t.y,l=Math.hypot(a,o);if(l<1e-6)return;const c=Math.min(l,t.stats.speed*r);t.x+=a/l*c,t.y+=o/l*c,Math.abs(a)>1e-6&&(t.facing=a>0?1:-1)}function He(t,e,n){const r=Ae(e.stats.attack,n.stats.defense)*(1+V(t.rng,-St,St));if(e.cooldown=1/e.stats.attackRate,e.lastAttackAt=t.time,e.stats.range<=1.5){Xt(t,n,r);return}const a=e.cls==="mage"?"fire":"arrow";t.projectiles.push({id:`p${t.nextId++}`,kind:a,side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:r,speed:Wt[a]})}function Xt(t,e,n){e.hp-=n,e.lastHitAt=t.time,t.events.push({kind:"damage",unitId:e.id,amount:n,time:t.time}),e.hp<=0&&(e.hp=0,e.alive=!1,e.targetId=null)}function Oe(t){const e=t.units.filter(r=>r.alive),n=Kt*2;for(let r=0;r<e.length;r++)for(let a=r+1;a<e.length;a++){const o=e[r],l=e[a],c=l.x-o.x,i=l.y-o.y,h=Math.hypot(c,i);if(h>=n)continue;const f=(n-h)/2,p=h<1e-6?1:c/h,u=h<1e-6?0:i/h;o.x-=p*f,o.y-=u*f,l.x+=p*f,l.y+=u*f}}function je(t){const e=Kt;for(const n of t.units)n.x=Math.min(t.arena.width-e,Math.max(e,n.x)),n.y=Math.min(t.arena.height-e,Math.max(e,n.y))}function Pe(t){const e=J(t,"player").length,n=J(t,"enemy").length;e===0?t.winner="enemy":n===0&&(t.winner="player")}const K={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function z(t,e){return K[t][e]}const Q={warrior:K.warrior.m,archer:K.archer.m,mage:K.mage.m},xt={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},De={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},bt={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},Mt=[2,3,5,8,12,17,23,30],Jt=Mt.length,_e=.08;function Ue(t){return t>=Jt?null:Mt[t]}function zt(t){return 1+_e*t}const Ft=8;function Ve(t,e,n){return t*zt(n)}function Ke(t){let e=0;for(let n=0;n<Math.min(t,Jt);n++)e+=Mt[n];return e}const Qt=["warrior","archer","mage"],We={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Ye=["hp","attack","defense"];function Xe(t,e){const r={...xt[t]};for(const a of bt[t]){const o=e[a]??0;if(o<=0)continue;const l=r[a];typeof l=="number"&&(r[a]=l*zt(o))}return r}function Je(t){return Qt.map(e=>{const n=t.heroes[e];return{cls:e,name:n.name||Q[e],gender:n.gender,stats:Xe(e,n.levels)}})}function ze(t){return Qt.map(e=>{const n={...xt[e]};for(const r of Ye){const a=n[r];typeof a=="number"&&(n[r]=a*t)}return{cls:e,name:We[e],gender:"m",stats:n}})}function Qe(t,e,n){const r=yt(t);return!r||r.fortress.home?null:{player:Je(e),enemy:ze(r.fortress.difficulty),seed:n,manual:"player"}}let Y=null;function tn(t){Y=t}function en(t){return Y&&Y.fortressId===t?Y:null}const A={x:64,y:84},$={x:56,y:58},F={x:77,y:56},tt={x:66,y:50},et={x:60,y:52},It={x:100,y:70};function nn(t){const e=n=>t.querySelector(`.part-${n}`);return{cloak:e("cloak"),legBack:e("leg-back"),legFront:e("leg-front"),armBack:e("arm-back"),armFront:e("arm-front"),body:e("body"),head:e("head"),robe:e("robe"),quiver:e("quiver"),arrow:e("arrow"),bow:e("bow"),staff:e("staff"),orb:e("orb"),orbHalo:e("orb-halo")}}function m(t,e,n,r,a=""){t&&t.setAttribute("transform",`rotate(${e.toFixed(2)} ${n} ${r})${a}`)}function rn(t){return t<0||t>.42?0:t<.13?-Math.sin(t/.13*(Math.PI/2)):Math.cos((t-.13)/.29*(Math.PI/2))}function an(t,e){const{phase:n,stride:r,time:a}=e,o=Math.sin(n)*r,l=Math.sin(n*2)*r,c=Math.sin(a*2.1)*(1-r),i=rn(e.sinceAttack);m(t.legBack,o*26,A.x,A.y),m(t.legFront,-o*26,A.x,A.y),m(t.cloak,o*9+c*1.6,et.x,et.y),m(t.robe,o*4+c*1.2,A.x,A.y+20),m(t.quiver,o*6,$.x,$.y);const h=-Math.abs(l)*3;switch(t.body&&t.body.setAttribute("transform",`translate(0 ${h.toFixed(2)}) rotate(${(o*2+c*.9).toFixed(2)} ${A.x} ${A.y})`),t.head&&t.head.setAttribute("transform",`translate(0 ${(h*1.15).toFixed(2)}) rotate(${(-o*2.5+c*1.4).toFixed(2)} ${tt.x} ${tt.y})`),e.cls){case"warrior":{m(t.armBack,-o*14,$.x,$.y),m(t.armFront,o*10+i*52,F.x,F.y);break}case"archer":{const f=e.sinceAttack<.42?i:-.35;if(m(t.armFront,o*5,F.x,F.y),m(t.armBack,-o*8-f*16,$.x,$.y),t.arrow){const p=e.sinceAttack>=0&&e.sinceAttack<.5;t.arrow.style.opacity=p?"0":"1",t.arrow.setAttribute("transform",`translate(${(-f*9).toFixed(2)} 0)`)}t.bow&&m(t.bow,f*4,104,62);break}case"mage":{m(t.armBack,-o*10,$.x,$.y),m(t.armFront,o*6+i*26,F.x,F.y),m(t.staff,i*18,It.x,It.y);const f=e.sinceAttack>=0&&e.sinceAttack<.5?1+.9*Math.max(0,1-e.sinceAttack/.5):1+.08*Math.sin(a*4);t.orb&&Bt(t.orb,f,100,20),t.orbHalo&&Bt(t.orbHalo,f*1.1,100,20);break}}}function Bt(t,e,n,r){t.setAttribute("transform",`translate(${(n*(1-e)).toFixed(2)} ${(r*(1-e)).toFixed(2)}) scale(${e.toFixed(3)})`)}function on(t,e){const n=Math.min(1,e),r=1-Math.pow(1-n,3);m(t.legBack,r*30,A.x,A.y),m(t.legFront,-r*20,A.x,A.y),m(t.armBack,r*40,$.x,$.y),m(t.armFront,-r*60,F.x,F.y),m(t.head,r*18,tt.x,tt.y),m(t.cloak,r*12,et.x,et.y)}const ln=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,sn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 34 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#f4cea8"/>
      
      <circle cx="74" cy="38" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M50 38 q2 -24 16 -24 q14 0 16 24 q-16 -9 -32 0 Z" fill="url(#w-steel)"/>
      <path d="M66 14 v-9" stroke="#8b94a2" stroke-width="4"/>
      <path d="M66 5 q12 -7 18 0 q-10 3 -12 10 Z" fill="currentColor"/>
      <path d="M66 20 v22" stroke="#8b94a2" stroke-width="4"/>
      <path d="M52 36 q4 -18 14 -19" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
      <path d="M50 40 q-8 22 -2 38 l12 -3 q-7 -18 -2 -33 Z" fill="#8a4b1c"/>
      <path d="M48 76 q7 7 14 3" fill="none" stroke="#6d3a13" stroke-width="4"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q16 -4 22 -12 l8 8 q-10 12 -26 16 Z" fill="#f4cea8"/>
      <path d="M100 42 l10 7" stroke="#5d3b1a" stroke-width="8"/>
      <path d="M112 34 l9 6 -30 50 -9 -6 Z" fill="url(#w-blade)"/>
      <path d="M113.5 37 l3 2 -26 43 -3 -2 Z" fill="rgba(255,255,255,0.55)" stroke="none"/>
      <path d="M103 46 l14 10" stroke="#e8c45a" stroke-width="5"/>
    </g>
  </g>
</svg>
`,cn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 34 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#e8c096"/>
      <path d="M54 44 q12 7 22 0 q-1 10 -11 10 q-10 0 -11 -10 Z" fill="#6b5236"/>
      <circle cx="74" cy="38" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M50 38 q2 -24 16 -24 q14 0 16 24 q-16 -9 -32 0 Z" fill="url(#w-steel)"/>
      <path d="M66 14 v-9" stroke="#8b94a2" stroke-width="4"/>
      <path d="M66 5 q12 -7 18 0 q-10 3 -12 10 Z" fill="currentColor"/>
      <path d="M66 20 v22" stroke="#8b94a2" stroke-width="4"/>
      <path d="M52 36 q4 -18 14 -19" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q16 -4 22 -12 l8 8 q-10 12 -26 16 Z" fill="#e8c096"/>
      <path d="M100 42 l10 7" stroke="#5d3b1a" stroke-width="8"/>
      <path d="M112 34 l9 6 -30 50 -9 -6 Z" fill="url(#w-blade)"/>
      <path d="M113.5 37 l3 2 -26 43 -3 -2 Z" fill="rgba(255,255,255,0.55)" stroke="none"/>
      <path d="M103 46 l14 10" stroke="#e8c45a" stroke-width="5"/>
    </g>
  </g>
</svg>
`,dn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 34 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#f4cea8"/>
      <circle cx="74" cy="38" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M50 38 q0 -26 16 -26 q16 0 16 26 q-8 -9 -16 -9 q-8 0 -16 9 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l11 -5 q-7 -11 -5 -21 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l5 -2 q-6 -12 -3 -24 Z" fill="rgba(0,0,0,0.28)" stroke="none"/>
      <path d="M52 44 q-8 22 -2 38 l12 -3 q-7 -18 -2 -33 Z" fill="#8a4b1c"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q14 -2 20 -6 l5 9 q-10 7 -24 9 Z" fill="#f4cea8"/>
      <g class="part-bow">
        <path d="M104 18 q24 44 0 88" fill="none" stroke="url(#a-bow)" stroke-width="7"/>
        <path d="M104 18 q4 44 0 88" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
        <path d="M100 14 l8 4 M100 110 l8 -4" stroke="#5d3b1a" stroke-width="4"/>
      </g>
      <g class="part-arrow">
        <path d="M66 62 L116 62" stroke="#c6a96f" stroke-width="3.6"/>
        <path d="M116 62 l-9 -5 M116 62 l-9 5" stroke="#9aa6b5" stroke-width="3"/>
        <path d="M66 62 l-7 -5 M66 62 l-7 5" stroke="#efe6cf" stroke-width="3"/>
      </g>
    </g>
  </g>
</svg>
`,fn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 34 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#e8c096"/>
      <circle cx="74" cy="38" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M50 38 q0 -26 16 -26 q16 0 16 26 q-8 -9 -16 -9 q-8 0 -16 9 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l11 -5 q-7 -11 -5 -21 Z" fill="currentColor"/>
      <path d="M50 38 q-5 16 2 26 l5 -2 q-6 -12 -3 -24 Z" fill="rgba(0,0,0,0.28)" stroke="none"/>
      <path d="M54 46 q12 7 22 0 q-1 10 -11 10 q-10 0 -11 -10 Z" fill="#4a3824"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 56 q14 -2 20 -6 l5 9 q-10 7 -24 9 Z" fill="#e8c096"/>
      <g class="part-bow">
        <path d="M104 18 q24 44 0 88" fill="none" stroke="url(#a-bow)" stroke-width="7"/>
        <path d="M104 18 q4 44 0 88" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
        <path d="M100 14 l8 4 M100 110 l8 -4" stroke="#5d3b1a" stroke-width="4"/>
      </g>
      <g class="part-arrow">
        <path d="M66 62 L116 62" stroke="#c6a96f" stroke-width="3.6"/>
        <path d="M116 62 l-9 -5 M116 62 l-9 5" stroke="#9aa6b5" stroke-width="3"/>
        <path d="M66 62 l-7 -5 M66 62 l-7 5" stroke="#efe6cf" stroke-width="3"/>
      </g>
    </g>
  </g>
</svg>
`,hn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 36 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#f4cea8"/>
      <circle cx="74" cy="40" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M52 46 q-9 24 -3 42 l12 -3 q-7 -20 -2 -37 Z" fill="#c9a0d6"/>
      <path d="M66 4 q14 14 22 30 q-24 -9 -46 0 q8 -17 24 -30 Z" fill="currentColor"/>
      <path d="M66 4 q-9 12 -14 20 l-8 10 q10 -4 20 -5 Z" fill="rgba(255,255,255,0.18)" stroke="none"/>
      <path d="M42 34 q24 -9 46 0 q-24 11 -46 0 Z" fill="rgba(0,0,0,0.3)"/>
      <circle cx="78" cy="24" r="3.6" fill="#e8c45a"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 58 q14 -4 20 -10 l7 8 q-10 10 -25 13 Z" fill="#f4cea8"/>
      <g class="part-staff">
        <path d="M100 32 L100 118" fill="none" stroke="#7a5326" stroke-width="7"/>
        <path d="M100 32 q-11 -7 -11 -16 q11 5 11 16 Z" fill="#7a5326"/>
        <circle class="part-orb-halo" cx="100" cy="20" r="19" fill="url(#m-halo)" stroke="none"/>
        <circle class="part-orb" cx="100" cy="20" r="10" fill="url(#m-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
        <circle cx="96" cy="17" r="3.4" fill="#fff6e0" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,pn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
      <path d="M54 36 q12 -8 24 0 l-2 14 q-11 7 -22 0 Z" fill="#e8c096"/>
      <circle cx="74" cy="40" r="2.4" fill="#241a10" stroke="none"/>
      <path d="M54 48 q12 8 22 0 q0 22 -11 22 q-11 0 -11 -22 Z" fill="#f2ead7"/>
      <path d="M66 4 q14 14 22 30 q-24 -9 -46 0 q8 -17 24 -30 Z" fill="currentColor"/>
      <path d="M66 4 q-9 12 -14 20 l-8 10 q10 -4 20 -5 Z" fill="rgba(255,255,255,0.18)" stroke="none"/>
      <path d="M42 34 q24 -9 46 0 q-24 11 -46 0 Z" fill="rgba(0,0,0,0.3)"/>
      <circle cx="78" cy="24" r="3.6" fill="#e8c45a"/>
    </g>

    <g class="part-arm-front">
      <path d="M78 58 q14 -4 20 -10 l7 8 q-10 10 -25 13 Z" fill="#e8c096"/>
      <g class="part-staff">
        <path d="M100 32 L100 118" fill="none" stroke="#7a5326" stroke-width="7"/>
        <path d="M100 32 q-11 -7 -11 -16 q11 5 11 16 Z" fill="#7a5326"/>
        <circle class="part-orb-halo" cx="100" cy="20" r="19" fill="url(#m-halo)" stroke="none"/>
        <circle class="part-orb" cx="100" cy="20" r="10" fill="url(#m-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
        <circle cx="96" cy="17" r="3.4" fill="#fff6e0" stroke="none"/>
      </g>
    </g>
  </g>
</svg>
`,un=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,x=100,O=128,Rt=2.05,Tt=.7,gn="http://www.w3.org/2000/svg",kn={"warrior-f":sn,"warrior-m":cn,"archer-f":dn,"archer-m":fn,"mage-f":hn,"mage-m":pn};function k(t,e={}){const n=document.createElementNS(gn,t);for(const[r,a]of Object.entries(e))n.setAttribute(r,a);return n}function pt(t,e,n){const r=t.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("x","0"),r.setAttribute("y","0"),r.setAttribute("width",String(e)),r.setAttribute("height",String(n)),r.setAttribute("overflow","visible"))}function yn(){const t=k("defs");return t.innerHTML=`
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
    </filter>`,t}function mn(t,e){const n=k("svg",{class:"arena",viewBox:`0 0 ${t.arena.width*x} ${t.arena.height*x}`,preserveAspectRatio:"xMidYMid meet"}),r=k("g",{class:"arena-art"});r.innerHTML=ln,pt(r,t.arena.width*x,t.arena.height*x);const a=k("g",{class:"layer-ground"}),o=k("g",{class:"layer-units"}),l=k("g",{class:"layer-shots"}),c=k("g",{class:"layer-bursts"}),i=k("g",{class:"layer-text"}),h=k("rect",{class:"vignette",width:String(t.arena.width*x),height:String(t.arena.height*x),fill:"url(#fx-vignette)"});n.append(yn(),r,a,o,l,c,i,h);const f=new Map;for(const u of t.units){const w=wn(u);f.set(u.id,w),a.append(w.ring,w.shadow,w.dust),o.append(w.group)}const p=u=>{u.preventDefault();const w=n.getScreenCTM();if(!w)return;const v=new DOMPoint(u.clientX,u.clientY).matrixTransform(w.inverse()),g=v.x/x,q=v.y/x;let G=null,S=1;for(const C of t.units){if(!C.alive)continue;const E=Math.hypot(C.x-g,C.y-.5-q);E<S&&(S=E,G=C)}e({x:g,y:q,unit:G})};return n.addEventListener("pointerdown",p),{el:n,update(u,w){for(const g of u.units)f.get(g.id)?.update(g,u.time,w.has(g.id));const v=[...u.units].sort((g,q)=>Number(g.alive)-Number(q.alive)||g.y-q.y);for(const g of v){const q=f.get(g.id);q&&o.append(q.group)}xn(l,u.projectiles,u.time),Mn(c,u,f),Ln(i,u,f)},destroy(){n.removeEventListener("pointerdown",p),n.remove()}}}function wn(t){const e=k("ellipse",{class:`ring ${t.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});e.style.display="none";const n=k("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),r=k("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});r.style.opacity="0";const a=k("g",{class:`unit ${t.side} ${t.cls}`}),o=k("g",{class:"sprite"});o.innerHTML=kn[`${t.cls}-${t.gender}`]??"",pt(o,O,O);const l=k("g",{class:"fallen"});l.innerHTML=un,pt(l,O,O),l.setAttribute("transform",`scale(${Rt}) translate(${-O/2} -122)`),l.style.display="none";const c=k("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),i=k("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});a.append(l,o,c,i);const h=nn(o),f={group:a,ring:e,shadow:n,dust:r,px:t.x,py:t.y,phase:Math.random()*Math.PI*2,update(p,u,w){const v=p.x*x,g=p.y*x,q=Math.hypot(p.x-f.px,p.y-f.py),G=q>.004;f.px=p.x,f.py=p.y,G&&(f.phase+=q*4.4);const S=u-p.lastAttackAt;p.alive?an(h,{cls:p.cls,phase:f.phase,stride:G?1:0,sinceAttack:S,time:u}):on(h,(u-p.lastHitAt)/Tt);const C=p.alive&&S>=0&&S<.3?Math.sin(S/.3*Math.PI)*16*p.facing:0;a.setAttribute("transform",`translate(${(v+C).toFixed(1)} ${g.toFixed(1)})`),e.setAttribute("cx",v.toFixed(1)),e.setAttribute("cy",g.toFixed(1)),e.style.display=w&&p.alive?"":"none",n.setAttribute("cx",v.toFixed(1)),n.setAttribute("cy",(g+6).toFixed(1)),n.style.opacity=p.alive?"1":"0.4",r.setAttribute("cx",(v-26*p.facing).toFixed(1)),r.setAttribute("cy",(g+10).toFixed(1)),r.style.opacity=G&&p.alive?(.18+.12*Math.abs(Math.sin(u*9))).toFixed(2):"0";const E=u-p.lastHitAt<.18,H=E&&p.alive?1.05:1,P=Rt*H;o.setAttribute("transform",`scale(${(p.facing*P).toFixed(3)} ${P.toFixed(3)}) translate(${-O/2} -122)`);const T=p.alive?0:(u-p.lastHitAt)/Tt;o.style.display=p.alive||T<1?"":"none",o.style.opacity=p.alive?"1":String(Math.max(0,1-T)),l.style.display=!p.alive&&T>.55?"":"none",l.style.opacity=String(Math.min(1,Math.max(0,(T-.55)/.45)));const N=Math.max(0,p.hp/p.maxHp);i.setAttribute("width",(94*N).toFixed(1)),a.classList.toggle("hurt",E&&p.alive),a.classList.toggle("dead",!p.alive),c.style.display=p.alive?"":"none",i.style.display=p.alive?"":"none"}};return f}function xn(t,e,n){for(;t.childNodes.length>e.length;)t.lastChild?.remove();for(;t.childNodes.length<e.length;)t.append(k("g"));e.forEach((r,a)=>{const o=t.childNodes[a];o.getAttribute("data-kind")!==r.kind&&(o.setAttribute("data-kind",r.kind),o.setAttribute("class",`shot ${r.kind}`),o.innerHTML=bn(r.kind));const c=r.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";o.setAttribute("transform",`translate(${(r.x*x).toFixed(1)} ${(r.y*x).toFixed(1)}) rotate(${(r.angle*180/Math.PI).toFixed(1)})${c}`)})}function bn(t){return t==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:t==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function Mn(t,e,n){const r=e.events.filter(a=>e.time-a.time<.32);for(;t.childNodes.length>r.length;)t.lastChild?.remove();for(;t.childNodes.length<r.length;)t.append(k("circle"));r.forEach((a,o)=>{const l=t.childNodes[o],c=n.get(a.unitId);if(!c)return;const i=(e.time-a.time)/.32;l.setAttribute("class",`burst ${a.kind}`),l.setAttribute("cx",(c.px*x).toFixed(1)),l.setAttribute("cy",(c.py*x-90).toFixed(1)),l.setAttribute("r",(14+i*40).toFixed(1)),l.setAttribute("opacity",(1-i).toFixed(2))})}function Ln(t,e,n){const r=e.events.filter(a=>e.time-a.time<1.1&&a.amount>=1);for(;t.childNodes.length>r.length;)t.lastChild?.remove();for(;t.childNodes.length<r.length;)t.append(k("text",{"text-anchor":"middle"}));r.forEach((a,o)=>{const l=t.childNodes[o],c=n.get(a.unitId);if(!c)return;const i=(e.time-a.time)/1.1;l.setAttribute("class",`floater ${a.kind}`),l.setAttribute("x",(c.px*x).toFixed(1)),l.setAttribute("y",(c.py*x-210-i*70).toFixed(1)),l.setAttribute("opacity",(1-i*i).toFixed(2));const h=`${a.kind==="heal"?"+":"-"}${Math.round(a.amount)}`;l.textContent!==h&&(l.textContent=h)})}function vn(t){const e=yt(t.id??""),n=e?Qe(e.fortress.id,b(),Date.now()&65535||1):null;if(!e||!n)return L({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:r,fortress:a}=e;if(b().conquered.includes(a.id)){const d=s("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return d.addEventListener("click",()=>Z(`/continent/${r.id}`)),L({title:a.name,subtitle:r.name,showStars:!1},s("p",{class:"notice"},"המבצר הזה כבר נכבש."),s("div",{class:"row"},d))}const o=Ce(n),l=new Set(o.units.filter(d=>d.side==="player").map(d=>d.id)),c=Zn(new URLSearchParams(location.search).get("speed"));let i=!1,h=!1,f=0,p=0,u=0;window.__battle=o;const w=mn(o,d=>ne(d)),v=s("div",{class:"stage"});v.append(w.el);const g=s("div",{class:"overlay"});v.append(g);const q=()=>{g.replaceChildren(s("div",{class:"panel"},s("h2",{},a.name),s("p",{},`רמת האויב: ${a.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),s("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),S())),g.classList.remove("hidden")},G=d=>{tn({fortressId:a.id,won:d,seconds:o.time,heroes:vt.map(M=>({cls:M.cls,name:M.name||z(M.cls,M.gender),alive:M.alive,health:Math.max(0,M.hp/M.maxHp)}))});const y=s("button",{class:"btn primary",type:"button"},"המשך");y.addEventListener("click",()=>Z(`/result/${a.id}/${d?"win":"lose"}`)),g.replaceChildren(s("div",{class:"panel"},s("h2",{},d?"המבצר נכבש":"הקרב אבד"),s("p",{},d?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),y)),g.classList.remove("hidden")};function S(){const d=s("button",{class:"btn primary",type:"button"},"התחל קרב");return d.addEventListener("click",()=>{g.classList.add("hidden"),i=!0,p=performance.now()}),d}const C=s("div",{class:"portraits"}),E=s("button",{class:"btn small",type:"button"},"השהה"),H=s("button",{class:"btn small",type:"button"},"ריפוי"),P=s("button",{class:"btn small",type:"button"},"בחר הכול"),T=s("button",{class:"btn small",type:"button"},"עמוד במקום");E.addEventListener("click",()=>{h||(i=!i,p=performance.now(),E.textContent=i?"השהה":"המשך")}),P.addEventListener("click",()=>{l.clear();for(const d of o.units)d.side==="player"&&d.alive&&l.add(d.id);D()}),T.addEventListener("click",()=>{for(const d of l)lt(o,d,{kind:"hold"})});const N=o.units.find(d=>d.side==="player"&&d.cls==="mage");H.addEventListener("click",()=>{if(!N)return;const d=Gt(o,N.id);d&&(Ne(o,N.id,d.id),Lt())});function Lt(){(N?Ge(o,N.id)&&Gt(o,N.id)!==null:!1)?H.removeAttribute("disabled"):H.setAttribute("disabled","true")}const vt=o.units.filter(d=>d.side==="player"),ee=vt.map(d=>{const y=s("span",{class:"portrait-fill"}),M=s("button",{class:`portrait ${d.cls}`,type:"button"},s("span",{class:"portrait-name"},d.name||z(d.cls,d.gender)),s("span",{class:"portrait-bar"},y));return M.addEventListener("click",()=>{d.alive&&(l.clear(),l.add(d.id),D())}),C.append(M),{unit:d,button:M,fill:y}});function D(){Lt();for(const d of ee){const y=Math.max(0,d.unit.hp/d.unit.maxHp);d.fill.style.width=`${(y*100).toFixed(0)}%`,d.button.classList.toggle("selected",l.has(d.unit.id)),d.button.classList.toggle("dead",!d.unit.alive)}}D();function ne(d){if(!i)return;const y=d.unit;if(y&&y.side==="player"&&y.alive){l.clear(),l.add(y.id),D();return}if(l.size!==0)for(const M of l)y&&y.side==="enemy"&&y.alive?lt(o,M,{kind:"attack",targetId:y.id}):lt(o,M,{kind:"move",x:d.x,y:d.y})}const qt=d=>{d.code==="Space"&&(d.preventDefault(),E.click())};addEventListener("keydown",qt);const Zt=()=>{if(f=requestAnimationFrame(Zt),i&&!h){const d=performance.now();u+=Math.min(.1,(d-p)/1e3)*c*qn,p=d;let y=0;for(;u>=ht&&y<8*c;)re(),u-=ht,y++}w.update(o,l)},re=()=>{Fe(o),o.winner&&!h&&(h=!0,i=!1,G(o.winner==="player")),D()};q(),f=requestAnimationFrame(Zt);const At=L({title:a.name,subtitle:`${r.name} · ${r.domain}`,showStars:!1},v,s("div",{class:"hud"},C,s("div",{class:"hud-actions"},H,P,T,E)));return{el:At.el,destroy(){cancelAnimationFrame(f),removeEventListener("keydown",qt),w.destroy(),At.destroy()}}}const qn=.6;function Zn(t){const e=Number(t??1);return!Number.isFinite(e)||e<=0?1:Math.min(16,Math.max(1,e))}function An(t){const e=yt(t.id??"");if(!e)return L({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:n,fortress:r}=e,a=t.outcome==="win",o=en(r.id),l=!b().flags.sawUpgrades;j(f=>{a&&!f.conquered.includes(r.id)&&f.conquered.push(r.id),l&&(f.flags.sawUpgrades=!0,f.stars+=Ft)});const c=[];o&&c.push(s("section",{class:"card"},s("h3",{},"הגיבורים שלך"),...o.heroes.map(f=>s("div",{class:"stat-row"},s("span",{class:"stat-name"},f.name),s("span",{class:"stat-value"},f.alive?`${Math.round(f.health*100)}% חיים`:"נפל"))),s("p",{class:"muted"},`אורך הקרב: ${Math.round(o.seconds)} שניות`))),l&&c.push(s("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Ft} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const i=n.fortresses.filter(f=>!f.home&&!b().conquered.includes(f.id)).length;a&&i===0?c.push(s("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):a||c.push(s("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const h=s("div",{class:"row"},W(a?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...a?[]:[W("קרב נוסף באותו מבצר",`/battle/${r.id}`)],W("חזרה ליבשת",`/continent/${n.id}`),W("תפריט המשימות","/missions"));return L({title:a?"המבצר נכבש":"הקרב אבד",subtitle:`${r.name} · ${kt(n.id)?.name??""}`,showBack:!1},...c,h)}function W(t,e,n=!1){const r=s("button",{class:n?"btn primary":"btn",type:"button"},t);return r.addEventListener("click",()=>Z(e)),r}function En(t){let e=0;for(const n of Object.keys(t.heroes)){const r=t.heroes[n];for(const a of bt[n])e+=Ke(r.levels[a]??0)}return e}function $n(t,e,n){const r=()=>{c.remove(),removeEventListener("keydown",a)},a=i=>{i.key==="Escape"&&r()},o=n.map(i=>{const h=s("button",{class:i.primary?"btn primary":"btn",type:"button"},i.label);return h.addEventListener("click",()=>{r(),i.onClick()}),h}),l=s("div",{class:"modal",role:"dialog","aria-modal":"true"},s("h2",{},t),s("p",{},e),s("div",{class:"modal-actions"},...o)),c=s("div",{class:"backdrop"},l);c.addEventListener("click",i=>{i.target===c&&r()}),addEventListener("keydown",a),document.body.append(c),o.find(i=>i.classList.contains("primary"))?.focus()}function Sn(){if(!b().flags.sawUpgrades)return L({title:"שדרוג הגיבורים"},s("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const t=s("div",{class:"stack"}),e=()=>{const n=b();t.replaceChildren(...Object.keys(Q).map(r=>{const a=n.heroes[r],o=bt[r].map(c=>Cn(r,c,e)),l=z(r,a.gender);return s("section",{class:"card hero"},s("h3",{},a.name?`${a.name} · ${l}`:l),s("div",{class:"stats"},...o))}))};return e(),L({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${En(b())}`},t)}function Cn(t,e,n){const o=b().heroes[t].levels[e]??0,l=xt[t][e]??0,c=Ve(l,e,o),i=Ue(o),h=s("button",{class:"btn small",type:"button"},i===null?"מרבי":`★ ${i}`);return i===null&&h.setAttribute("disabled","true"),h.addEventListener("click",()=>{if(i!==null){if(b().stars<i){$n("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>Z("/missions")}]);return}j(f=>{f.stars-=i;const p=f.heroes[t];p.levels[e]=(p.levels[e]??0)+1}),n()}}),s("div",{class:"stat-row"},s("span",{class:"stat-name"},De[e]),s("span",{class:"stat-value"},Gn(c)),s("span",{class:"stat-level"},`דרגה ${o}`),h)}function Gn(t){return t>=10?String(Math.round(t)):t.toFixed(1)}const Nn={topics(t){return[]},missions(t){return[]},onSolved(t,e){return 0}};let Fn=Nn;function te(t){const e=b(),n=kt(t.id??""),r=n&&wt(n,e)?n:pe(e),a=new Set(Fn.topics(r.id).map(i=>i.id)),o=ue(r,e),l=r.topics.length-o.length,c=o.map(i=>{const h=a.has(i.id);return s("li",{class:`topic${h?"":" soon"}`},s("span",{class:"topic-name"},i.name),s("span",{class:"badge"},h?"זמין":"בקרוב"))});return L({title:"תפריט המשימות",subtitle:`${r.name} · ${r.domain}`},s("p",{class:"notice"},"פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים."),s("section",{class:"card topics"},s("ul",{},...c)),...l>0?[s("p",{class:"muted"},`עוד ${l} נושאים ייפתחו בהמשך, אחד אחרי השני.`)]:[])}const ut={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},In=["m","f"];function Bn(){const t=s("div",{class:"stack"}),e=()=>{const r=b();t.replaceChildren(...Object.keys(Q).map(a=>Rn(a,r.heroes[a].gender,r.heroes[a].name,e)))};e();const n=s("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{j(r=>{for(const a of Object.keys(Q)){const o=r.heroes[a];o.name.trim()||(o.name=ut[a][o.gender][0])}r.flags.setupDone=!0}),Z("/")}),L({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:b().flags.setupDone},t,s("div",{class:"row"},n))}function Rn(t,e,n,r){const a=s("input",{class:"name-input",type:"text",maxlength:"14",placeholder:ut[t][e][0],value:n,"aria-label":`שם ה${z(t,e)}`});a.addEventListener("input",()=>{j(c=>{c.heroes[t].name=a.value})});const o=c=>{const i=s("button",{class:`btn small${e===c?" primary":""}`,type:"button"},K[t][c]);return i.addEventListener("click",()=>{j(h=>{h.heroes[t].gender=c}),r()}),i},l=ut[t][e].map(c=>{const i=s("button",{class:"chip",type:"button"},c);return i.addEventListener("click",()=>{j(h=>{h.heroes[t].name=c}),r()}),i});return s("section",{class:"card hero-setup"},s("div",{class:"setup-row"},...In.map(o)),s("div",{class:"setup-row"},a),s("div",{class:"setup-row chips"},...l))}R("/",xe);R("/continent/:id",Me);R("/battle/:id",vn);R("/result/:id/:outcome",An);R("/upgrades",Sn);R("/missions",te);R("/missions/:id",te);R("/setup",Bn);ae(()=>{const t=s("button",{class:"btn primary",type:"button"},"למפת העולם");return t.addEventListener("click",()=>Z("/")),L({title:"הדף לא נמצא",showBack:!1},t)});!b().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const Ht=document.getElementById("app");Ht&&ie(Ht);
