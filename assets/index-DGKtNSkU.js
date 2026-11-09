(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Ae=[];let Se=null,R=null,W=null;function $(t,e){Ae.push({pattern:t.split("/").filter(Boolean),factory:e})}function Ke(t){Se=t}function M(t){location.hash==="#"+t?Q():location.hash=t}function We(){history.length>1?history.back():M("/")}function Ye(){return location.hash.replace(/^#/,"")||"/"}function Je(t){const e=t.split("/").filter(Boolean);for(const n of Ae){if(n.pattern.length!==e.length)continue;const o={};let r=!0;for(let a=0;a<n.pattern.length;a++){const i=n.pattern[a],c=e[a];if(i.startsWith(":"))o[i.slice(1)]=decodeURIComponent(c);else if(i!==c){r=!1;break}}if(r)return{factory:n.factory,params:o}}return null}function Q(){if(!R)return;W?.destroy?.(),R.replaceChildren();const t=Ye(),e=Je(t),n=e?.factory??Se;n&&(W=n(e?.params??{}),R.append(W.el),R.scrollTop=0)}function Xe(t){R=t,addEventListener("hashchange",Q),Q()}const Y="euclid.";class ze{read(e){try{const n=localStorage.getItem(Y+e);return n===null?null:JSON.parse(n)}catch{return null}}write(e,n){try{localStorage.setItem(Y+e,JSON.stringify(n))}catch{}}remove(e){try{localStorage.removeItem(Y+e)}catch{}}}const $e=new ze,Ce="profile";function Qe(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],flags:{sawUpgrades:!1,setupDone:!1}}}function et(t){return t.solvedTopics??=[],t.conquered??=[],t}let H=et($e.read(Ce)??Qe());const ee=new Set;function b(){return H}function tt(t){return ee.add(t),()=>ee.delete(t)}function B(t){t(H),$e.write(Ce,H);for(const e of ee)e(H);return H}function l(t,e={},...n){const o=document.createElement(t);for(const[r,a]of Object.entries(e))r==="class"?o.className=a:o.setAttribute(r,a);return o.append(...n),o}function x(t,...e){const n=l("button",{class:"stars",type:"button",title:"תפריט המשימות"}),o=()=>{n.replaceChildren(l("span",{class:"star-icon"},"★"),l("span",{},String(b().stars)))};o();const r=tt(o);n.addEventListener("click",()=>M("/missions"));const a=l("header",{class:"top"});if(t.showBack!==!1){const c=l("button",{class:"back",type:"button","aria-label":"חזרה"},"→");c.addEventListener("click",()=>We()),a.append(c)}return a.append(l("div",{class:"titles"},l("h1",{},t.title),...t.subtitle?[l("p",{class:"subtitle"},t.subtitle)]:[])),t.showStars!==!1&&a.append(n),{el:l("div",{class:"page"},a,l("main",{class:"content"},...e)),destroy:()=>r()}}const ie=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function se(t){return ie.find(e=>e.id===t)}function le(t){for(const e of ie){const n=e.fortresses.find(o=>o.id===t);if(n)return{continent:e,fortress:n}}}function te(t){return t.fortresses.filter(e=>!e.home)}function ce(){return[...ie].sort((t,e)=>t.order-e.order)}function Ne(t,e){return te(t).every(n=>e.conquered.includes(n.id))}function de(t,e){const n=ce(),o=n.findIndex(r=>r.id===t.id);return o<=0?!0:Ne(n[o-1],e)}function nt(t){const e=ce();return e.find(n=>!Ne(n,t))??e[e.length-1]}function rt(t,e){const n=[];for(const o of t.topics)if(n.push(o),!e.solvedTopics.includes(o.id))break;return n}const _={width:2e3,height:1e3};function ne(t,e){return{x:(t+180)/360*_.width,y:(90-e)/180*_.height}}const ot={x:0,y:0,w:_.width,h:_.height};function at(t,e){const n=ne(t.lon0,t.lat0),o=ne(t.lon1,t.lat1);let r=Math.min(n.x,o.x),a=Math.min(n.y,o.y),i=Math.abs(o.x-n.x),c=Math.abs(o.y-n.y);if(i/c<e){const s=c*e;r-=(s-i)/2,i=s}else{const s=i/e;a-=(s-c)/2,c=s}return{x:r,y:a,w:i,h:c}}function it(t,e,n){const o=ne(t,e);return{left:(o.x-n.x)/n.w*100,top:(o.y-n.y)/n.h*100}}function Ie(t,e,n){const o=l("div",{class:"map-art","aria-hidden":"true"});o.innerHTML=t;const r=o.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${e.x.toFixed(1)} ${e.y.toFixed(1)} ${e.w.toFixed(1)} ${e.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=l("div",{class:"map-markers"});for(const i of n){const{left:c,top:s}=it(i.lon,i.lat,e),f=i.onClick?"button":"div",h=l(f,{class:`marker ${i.state}`,style:`left:${c.toFixed(2)}%; top:${s.toFixed(2)}%`});f==="button"&&h.setAttribute("type","button");const u=l("span",{class:"marker-icon"});u.innerHTML=i.icon;const p=l("span",{class:"marker-caption"},l("span",{class:"marker-label"},i.label),...i.sub?[l("span",{class:"marker-sub"},i.sub)]:[]);h.append(u,p),i.onClick&&h.addEventListener("click",i.onClick),a.append(h)}return l("div",{class:"map"},o,a)}const Fe=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,st=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,lt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function ct(){const t=b(),e=ce().map(n=>{const o=te(n).length,r=te(n).filter(a=>t.conquered.includes(a.id)).length;return de(n,t)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${o}`,state:"continent",icon:st,onClick:()=>M(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:lt}});return x({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Ie(Fe,ot,e),l("div",{class:"row"},J("שדרוג הגיבורים","/upgrades"),J("תפריט המשימות","/missions"),J("הגיבורים שלי","/setup")))}function J(t,e){const n=l("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>M(e)),n}const X=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,dt=5/3;function ft(t){const e=se(t.id??"");if(!e)return x({title:"יבשת לא נמצאה"},l("p",{},"חזרה למפת העולם."));const n=b();if(!de(e,n)){const r=l("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>M("/")),x({title:e.name,subtitle:e.domain},l("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),l("div",{class:"row"},r))}const o=e.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:X}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:X}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:X,onClick:()=>M(`/battle/${r.id}`)});return x({title:e.name,subtitle:e.domain},Ie(Fe,at(e.view,dt),o),l("div",{class:"row"},be("שדרוג הגיבורים","/upgrades"),be("תפריט המשימות",`/missions/${e.id}`)))}function be(t,e){const n=l("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>M(e)),n}function A(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}function U(t,e){return t.units.filter(n=>n.alive&&n.side===e)}function ht(t,e){return t.units.filter(n=>n.alive&&n.side!==e)}function S(t,e){return e===null?void 0:t.units.find(n=>n.id===e)}function re(t,e){let n=null,o=1/0;for(const r of e){const a=A(t,r);(a<o-1e-9||Math.abs(a-o)<=1e-9&&n&&r.id<n.id)&&(n=r,o=a)}return n}const pt=2.2;function ut(t,e){const n=ht(t,e.side);if(n.length===0)return{kind:"idle"};const o=re(e,n.filter(i=>i.stats.range<=1.5));if(e.stats.range>2&&o&&A(e,o)<pt){const i=e.x-o.x,c=e.y-o.y,s=Math.hypot(i,c)||1;return{kind:"move",x:e.x+i/s*3,y:e.y+c/s*3}}const a=re(e,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}function mt(t){let e=t>>>0;const o=()=>{e=e+1831565813>>>0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return o.seed=t,o}function O(t,e,n){return e+t()*(n-e)}const oe=1/30,ke=50;function yt(t,e){return t*ke/(ke+e)}const we=.3,Be=.45,Te={arrow:14,fire:9,heal:12},gt=.85,Lt=.15;function vt(t,e,n,o){const r=e==="player"?1:-1,a=e==="player"?3:n-3,i=o/2,c=[0,-1.6,1.6];return t.map((s,f)=>({x:a+(s.stats.range<=1.5?2*r:0),y:i+(c[f]??0)}))}function bt(t){const e={width:t.arenaWidth??24,height:t.arenaHeight??14},n=mt(t.seed),o={time:0,arena:e,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:t.manual??null},r=(a,i)=>{const c=vt(a,i,e.width,e.height);a.forEach((s,f)=>{const h=c[f];o.units.push({id:`${i}-${s.cls}-${f}`,side:i,cls:s.cls,name:s.name,gender:s.gender,x:h.x+O(n,-.6,.6),y:h.y+O(n,-.6,.6),hp:s.stats.hp,maxHp:s.stats.hp,stats:s.stats,order:i===o.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:O(n,0,1/s.stats.attackRate),healCooldown:O(n,0,s.stats.healRate??3),facing:i==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(t.player,"player"),r(t.enemy,"enemy"),o}function z(t,e,n){const o=S(t,e);o?.alive&&(o.order=n)}function xe(t,e){return e.side===t.manual?{kind:"hold"}:{kind:"auto"}}function Me(t,e){const n=S(t,e);if(!n?.alive||!n.stats.healing)return null;let o=null;for(const r of U(t,n.side))r.id===n.id||r.hp>=r.maxHp||A(n,r)>n.stats.range||(!o||r.hp/r.maxHp<o.hp/o.maxHp)&&(o=r);return o}function kt(t,e){const n=S(t,e);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function wt(t,e,n){const o=S(t,e),r=S(t,n),a=o?.stats.healing;return!o?.alive||!a||o.healCooldown>0||!r?.alive||r.side!==o.side||r.id===o.id||A(o,r)>o.stats.range?!1:(Re(t,o,r,a),!0)}function Re(t,e,n,o){t.projectiles.push({id:`p${t.nextId++}`,kind:"heal",side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:o,speed:Te.heal}),e.healCooldown=e.stats.healRate??3}function xt(t,e=oe){if(!t.winner){t.time+=e,Mt(t,e);for(const n of t.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-e),n.healCooldown=Math.max(0,n.healCooldown-e),qt(t,n),Zt(t,n,e));St(t),$t(t),Ct(t),t.events.length>0&&(t.events=t.events.filter(n=>t.time-n.time<2))}}function Mt(t,e){const n=[];for(const o of t.projectiles){const r=S(t,o.targetId);if(!r||!r.alive)continue;const a=r.x-o.x,i=r.y-o.y,c=Math.hypot(a,i),s=o.speed*e;if(c<=s){if(o.kind==="heal"){const f=Math.min(r.maxHp-r.hp,o.amount);r.hp+=f,t.events.push({kind:"heal",unitId:r.id,amount:f,time:t.time})}else He(t,r,o.amount);continue}o.x+=a/c*s,o.y+=i/c*s,o.angle=Math.atan2(i,a),n.push(o)}t.projectiles=n}function qt(t,e){if(e.side===t.manual)return;const n=e.stats.healing;if(!n||e.healCooldown>0)return;const o=U(t,e.side).filter(a=>a.id!==e.id&&a.hp<a.maxHp*gt&&A(e,a)<=e.stats.range);let r=null;for(const a of o)(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);r&&Re(t,e,r,n)}function Zt(t,e,n){const o=Et(t,e);if(o.kind==="idle"){e.targetId=null;return}if(o.kind==="move"){e.targetId=null,qe(e,o.x,o.y,n);return}const r=S(t,o.targetId);if(!r||!r.alive){e.targetId=null;return}if(e.targetId=r.id,A(e,r)>e.stats.range){qe(e,r.x,r.y,n);return}e.facing=r.x>=e.x?1:-1,e.cooldown<=0&&At(t,e,r)}function Et(t,e){const n=e.order;if(n.kind==="move")if(A(e,n)<=Lt)e.order=xe(t,e);else return{kind:"move",x:n.x,y:n.y};if(e.order.kind==="attack"){const o=S(t,e.order.targetId);if(o?.alive)return{kind:"attack",targetId:o.id};e.order=xe(t,e)}if(e.order.kind==="hold"){const o=t.units.filter(a=>a.alive&&a.side!==e.side&&A(e,a)<=e.stats.range),r=re(e,o);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return ut(t,e)}function qe(t,e,n,o){const r=e-t.x,a=n-t.y,i=Math.hypot(r,a);if(i<1e-6)return;const c=Math.min(i,t.stats.speed*o);t.x+=r/i*c,t.y+=a/i*c,Math.abs(r)>1e-6&&(t.facing=r>0?1:-1)}function At(t,e,n){const o=yt(e.stats.attack,n.stats.defense)*(1+O(t.rng,-we,we));if(e.cooldown=1/e.stats.attackRate,e.lastAttackAt=t.time,e.stats.range<=1.5){He(t,n,o);return}const r=e.cls==="mage"?"fire":"arrow";t.projectiles.push({id:`p${t.nextId++}`,kind:r,side:e.side,x:e.x,y:e.y,angle:Math.atan2(n.y-e.y,n.x-e.x),targetId:n.id,amount:o,speed:Te[r]})}function He(t,e,n){e.hp-=n,e.lastHitAt=t.time,t.events.push({kind:"damage",unitId:e.id,amount:n,time:t.time}),e.hp<=0&&(e.hp=0,e.alive=!1,e.targetId=null)}function St(t){const e=t.units.filter(o=>o.alive),n=Be*2;for(let o=0;o<e.length;o++)for(let r=o+1;r<e.length;r++){const a=e[o],i=e[r],c=i.x-a.x,s=i.y-a.y,f=Math.hypot(c,s);if(f>=n)continue;const h=(n-f)/2,u=f<1e-6?1:c/f,p=f<1e-6?0:s/f;a.x-=u*h,a.y-=p*h,i.x+=u*h,i.y+=p*h}}function $t(t){const e=Be;for(const n of t.units)n.x=Math.min(t.arena.width-e,Math.max(e,n.x)),n.y=Math.min(t.arena.height-e,Math.max(e,n.y))}function Ct(t){const e=U(t,"player").length,n=U(t,"enemy").length;e===0?t.winner="enemy":n===0&&(t.winner="player")}const G={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function V(t,e){return G[t][e]}const K={warrior:G.warrior.m,archer:G.archer.m,mage:G.mage.m},fe={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},Nt={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},he={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},pe=[2,3,5,8,12,17,23,30],Oe=pe.length,It=.08;function Ft(t){return t>=Oe?null:pe[t]}function Ge(t){return 1+It*t}const Ze=8;function Bt(t,e,n){return t*Ge(n)}function Tt(t){let e=0;for(let n=0;n<Math.min(t,Oe);n++)e+=pe[n];return e}const Pe=["warrior","archer","mage"],Rt={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Ht=["hp","attack","defense"];function Ot(t,e){const o={...fe[t]};for(const r of he[t]){const a=e[r]??0;if(a<=0)continue;const i=o[r];typeof i=="number"&&(o[r]=i*Ge(a))}return o}function Gt(t){return Pe.map(e=>{const n=t.heroes[e];return{cls:e,name:n.name||K[e],gender:n.gender,stats:Ot(e,n.levels)}})}function Pt(t){return Pe.map(e=>{const n={...fe[e]};for(const o of Ht){const r=n[o];typeof r=="number"&&(n[o]=r*t)}return{cls:e,name:Rt[e],gender:"m",stats:n}})}function jt(t,e,n){const o=le(t);return!o||o.fortress.home?null:{player:Gt(e),enemy:Pt(o.fortress.difficulty),seed:n,manual:"player"}}let D=null;function Dt(t){D=t}function _t(t){return D&&D.fortressId===t?D:null}const Ut=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="ar-field" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d3dca7"/><stop offset="55%" stop-color="#b6c98c"/><stop offset="100%" stop-color="#9fb679"/>
    </linearGradient>
    <linearGradient id="ar-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ded5c3"/><stop offset="100%" stop-color="#9d9080"/>
    </linearGradient>
    <linearGradient id="ar-tent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0e6d2"/><stop offset="100%" stop-color="#cdbb9b"/>
    </linearGradient>
    <pattern id="ar-grass" width="210" height="190" patternUnits="userSpaceOnUse">
      <path d="M30 150 q7 -20 14 -30 M38 152 q3 -16 12 -26 M150 170 q7 -18 14 -28 M158 172 q3 -14 12 -24"
            fill="none" stroke="#86a063" stroke-width="4" stroke-linecap="round" opacity="0.28"/>
    </pattern>
  </defs>

  <rect width="2400" height="1400" fill="url(#ar-field)"/>
  <rect width="2400" height="1400" fill="url(#ar-grass)"/>

  <g fill="#c2d294" opacity="0.65">
    <ellipse cx="430" cy="300" rx="320" ry="96"/>
    <ellipse cx="1520" cy="1130" rx="430" ry="116"/>
    <ellipse cx="1960" cy="430" rx="270" ry="84"/>
    <ellipse cx="900" cy="880" rx="360" ry="100"/>
  </g>

  <path d="M120 700 C600 636 900 782 1400 718 C1700 680 1900 742 2290 700"
        fill="none" stroke="#c9b68d" stroke-width="96" stroke-linecap="round" opacity="0.5"/>
  <path d="M120 700 C600 636 900 782 1400 718 C1700 680 1900 742 2290 700"
        fill="none" stroke="#b8a179" stroke-width="4" stroke-dasharray="26 34" opacity="0.5"/>

  <g fill="#9aa08e" opacity="0.8" stroke="#7d8271" stroke-width="4">
    <ellipse cx="690" cy="1010" rx="38" ry="24"/>
    <ellipse cx="748" cy="1032" rx="22" ry="14"/>
    <ellipse cx="1660" cy="260" rx="34" ry="21"/>
  </g>

  <g>
    <g stroke="#6f5836" stroke-width="16" stroke-linecap="round" fill="none">
      <path d="M250 268 v-78"/><path d="M2110 1104 v-78"/><path d="M1180 232 v-66"/>
    </g>
    <g fill="#4f7a3f">
      <circle cx="250" cy="176" r="58"/><circle cx="214" cy="206" r="40"/><circle cx="288" cy="208" r="40"/>
      <circle cx="2110" cy="1014" r="56"/><circle cx="2076" cy="1044" r="38"/><circle cx="2146" cy="1044" r="38"/>
      <circle cx="1180" cy="156" r="46"/><circle cx="1150" cy="184" r="32"/><circle cx="1212" cy="184" r="32"/>
    </g>
    <g fill="#5f8f4c" opacity="0.65">
      <circle cx="232" cy="160" r="26"/><circle cx="2094" cy="998" r="24"/><circle cx="1166" cy="142" r="20"/>
    </g>
  </g>

  <g fill="#e7d47a" opacity="0.85">
    <circle cx="540" cy="1060" r="7"/><circle cx="566" cy="1082" r="6"/><circle cx="512" cy="1086" r="6"/>
    <circle cx="1820" cy="980" r="7"/><circle cx="1846" cy="1002" r="6"/>
    <circle cx="980" cy="320" r="7"/><circle cx="1006" cy="340" r="6"/>
  </g>

  <!-- enemy fortress -->
  <g stroke="#6b5847" stroke-width="7" stroke-linejoin="round">
    <path d="M2140 1140 V560 h44 v-64 h54 v64 h66 v-64 h54 v64 h34 v580 Z" fill="url(#ar-wall)"/>
    <path d="M2140 660 h252" fill="none" stroke="#b3a692" stroke-width="5"/>
    <path d="M2140 790 h252" fill="none" stroke="#b3a692" stroke-width="5"/>
    <path d="M2140 920 h252" fill="none" stroke="#b3a692" stroke-width="5"/>
    <path d="M2232 1140 v-170 a46 46 0 0 1 92 0 v170 Z" fill="#7d5932"/>
    <path d="M2278 1000 v140" fill="none" stroke="#5d4228" stroke-width="5"/>
    <rect x="2168" y="700" width="48" height="66" rx="6" fill="#5d4b3a"/>
    <rect x="2320" y="700" width="48" height="66" rx="6" fill="#5d4b3a"/>
  </g>
  <g stroke="#6f5836" stroke-width="8">
    <path d="M2186 496 v-86"/><path d="M2338 496 v-86"/>
  </g>
  <g fill="#b23b2e" stroke="#6b3a2a" stroke-width="5">
    <path d="M2186 412 l74 24 -74 24 Z"/><path d="M2338 412 l74 24 -74 24 Z"/>
  </g>

  <!-- player camp -->
  <g stroke="#6b5847" stroke-width="6" stroke-linejoin="round">
    <path d="M40 1140 L170 836 L300 1140 Z" fill="url(#ar-tent)"/>
    <path d="M140 1140 v-150 a30 30 0 0 1 60 0 v150 Z" fill="#8a6a44"/>
    <path d="M170 836 l0 -70" stroke="#6f5836" stroke-width="9"/>
  </g>
  <path d="M170 772 l80 26 -80 26 Z" fill="#2f6fb3" stroke="#28527a" stroke-width="5"/>
  <g stroke="#6b5847" stroke-width="5" stroke-linejoin="round">
    <path d="M300 1140 L392 920 L484 1140 Z" fill="url(#ar-tent)" opacity="0.95"/>
  </g>
  <g fill="#6b4a24" opacity="0.85">
    <rect x="520" y="1052" width="96" height="26" rx="10"/>
    <rect x="536" y="1016" width="64" height="26" rx="10"/>
  </g>
</svg>
`,Vt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
    <!-- cape -->
    <path d="M22 28 q-7 14 -5 28 l9 -3 q-3 -14 1 -24 Z" fill="currentColor" opacity="0.75"/>
    <!-- legs and boots -->
    <path d="M25 46 h6 v9 h-6 Z" fill="#7a6246"/>
    <path d="M34 46 h6 v9 h-6 Z" fill="#8b7150"/>
    <path d="M23 55 h9 v5 h-10 q-1 -3 1 -5 Z" fill="#4d3a26"/>
    <path d="M33 55 h9 q2 2 1 5 h-10 Z" fill="#5c4630"/>
    <!-- tunic -->
    <path d="M23 30 q9 -6 18 0 l2 17 q-11 4 -22 0 Z" fill="currentColor"/>
    <!-- breastplate -->
    <path d="M25 31 q7 -4 14 0 v9 q-7 4 -14 0 Z" fill="#c3c8d0"/>
    <path d="M25 33 q7 -4 14 0" fill="none" stroke="#9aa3ad"/>
    <path d="M32 31 v9" fill="none" stroke="#9aa3ad"/>
    <!-- belt -->
    <path d="M24 41 q8 4 16 0 l0 4 q-8 4 -16 0 Z" fill="#6b4a24"/>
    <circle cx="32" cy="43.5" r="1.8" fill="#e0b84f"/>
    <!-- pauldrons -->
    <ellipse cx="23.5" cy="31" rx="4.6" ry="4" fill="#aeb6bf"/>
    <ellipse cx="40.5" cy="31" rx="4.6" ry="4" fill="#aeb6bf"/>
    <!-- sword arm -->
    <path d="M41 33 l9 -5 3 4 -9 6 Z" fill="#e6c9a3"/>
    <path d="M49 28 l3 4" stroke="#8a5a2b" stroke-width="2.4"/>
    <path d="M53 27 l3 1 -13 21 -3 -2 Z" fill="#dde3ea"/>
    <path d="M53.5 28.5 l1 0.4 -11.5 18.6 -1 -0.6 Z" fill="#aab4c0" stroke="none"/>
    <!-- shield -->
    <path d="M17 32 q6 -3 12 0 v8 q-6 7 -12 0 Z" fill="#9aa3ad"/>
    <path d="M23 32 v14" fill="none" stroke="#6f7883"/>
    <!-- head -->
    <circle cx="32" cy="20" r="7.6" fill="#f2cba4"/>
    <circle cx="35.4" cy="20" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M24.6 20 q0 -10 7.4 -10 q7.4 0 7.4 10 q-3.6 -5 -7.4 -5 q-3.8 0 -7.4 5 Z" fill="#7a461d"/>
    <path d="M25 19 q-4 10 -1 17 l4 -1 q-3 -8 0 -15 Z" fill="#7a461d"/>
    <path d="M39 19 q4 9 2 15" fill="none" stroke="#7a461d" stroke-width="2.4"/>
  </g>
</svg>
`,Kt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M21 28 q-8 14 -6 29 l10 -3 q-3 -15 1 -25 Z" fill="currentColor" opacity="0.75"/>
    <path d="M24 46 h7 v9 h-7 Z" fill="#7a6246"/>
    <path d="M34 46 h7 v9 h-7 Z" fill="#8b7150"/>
    <path d="M22 55 h10 v5 h-11 q-1 -3 1 -5 Z" fill="#4d3a26"/>
    <path d="M33 55 h10 q2 2 1 5 h-11 Z" fill="#5c4630"/>
    <path d="M22 30 q10 -7 20 0 l2 17 q-12 4 -24 0 Z" fill="currentColor"/>
    <path d="M24 31 q8 -4 16 0 v10 q-8 4 -16 0 Z" fill="#c3c8d0"/>
    <path d="M24 34 q8 -4 16 0" fill="none" stroke="#9aa3ad"/>
    <path d="M32 31 v10" fill="none" stroke="#9aa3ad"/>
    <path d="M23 41 q9 4 18 0 l0 4 q-9 4 -18 0 Z" fill="#6b4a24"/>
    <circle cx="32" cy="43.5" r="1.9" fill="#e0b84f"/>
    <ellipse cx="22.5" cy="31" rx="5" ry="4.3" fill="#aeb6bf"/>
    <ellipse cx="41.5" cy="31" rx="5" ry="4.3" fill="#aeb6bf"/>
    <path d="M42 33 l9 -6 3 4 -9 7 Z" fill="#e0bd93"/>
    <path d="M50 27 l3 4" stroke="#8a5a2b" stroke-width="2.4"/>
    <path d="M54 25 l3 1 -14 22 -3 -2 Z" fill="#dde3ea"/>
    <path d="M54.5 26.5 l1 0.4 -12.5 19.6 -1 -0.6 Z" fill="#aab4c0" stroke="none"/>
    <path d="M16 31 q6 -3 13 0 v9 q-7 8 -13 0 Z" fill="#9aa3ad"/>
    <path d="M22.5 31 v15" fill="none" stroke="#6f7883"/>
    <circle cx="32" cy="20" r="7.8" fill="#eec097"/>
    <circle cx="35.6" cy="19.6" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M24 18 q2 -9 8 -9 q6 0 8 9 q-8 -5 -16 0 Z" fill="#4b3320"/>
    <path d="M25.5 23 q6.5 8 13 0 q-1.5 9 -6.5 9 q-5 0 -6.5 -9 Z" fill="#5a4028"/>
  </g>
</svg>
`,Wt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M23 27 q-6 15 -4 30 l8 -3 q-3 -15 1 -25 Z" fill="currentColor" opacity="0.7"/>
    <path d="M26 46 h5.5 v9 H26 Z" fill="#6f5a3c"/>
    <path d="M34 46 h5.5 v9 H34 Z" fill="#7e6744"/>
    <path d="M24 55 h8 v5 h-9 q-1 -3 1 -5 Z" fill="#46351f"/>
    <path d="M33.5 55 h8 q2 2 1 5 h-9 Z" fill="#55402a"/>
    <!-- quiver -->
    <path d="M20 26 l6 -2 5 13 -6 2 Z" fill="#7a5326"/>
    <g stroke="#e5dcc6" stroke-width="1.4">
      <path d="M22 25 l2 -6"/><path d="M25 24 l2 -6"/><path d="M28 23 l2 -6"/>
    </g>
    <!-- tunic -->
    <path d="M24 30 q8 -6 16 0 l2 16 q-10 4 -20 0 Z" fill="currentColor"/>
    <path d="M26 31 q6 9 12 0 l1 9 q-7 4 -14 0 Z" fill="#9b7f55"/>
    <path d="M25 40 q7 4 14 0 l0 3.5 q-7 4 -14 0 Z" fill="#6b4a24"/>
    <!-- bow arm -->
    <path d="M40 33 l8 -2 1 4 -8 3 Z" fill="#f2cba4"/>
    <path d="M48 15 q10 17 0 34" fill="none" stroke="#7a5326" stroke-width="2.8"/>
    <path d="M48 15 L48 49" fill="none" stroke="#e5dcc6" stroke-width="1.1"/>
    <path d="M32 32 L52 32" fill="none" stroke="#caa96f" stroke-width="1.5"/>
    <path d="M52 32 l-3 -2 M52 32 l-3 2" fill="none" stroke="#9aa3ad" stroke-width="1.2"/>
    <!-- head and hood -->
    <circle cx="32" cy="20" r="7.4" fill="#f2cba4"/>
    <circle cx="35.3" cy="20" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M24.8 20.5 q0 -10.5 7.2 -10.5 q7.2 0 7.2 10.5 q-3.4 -4.4 -7.2 -4.4 q-3.8 0 -7.2 4.4 Z" fill="currentColor"/>
    <path d="M25 19 q-3 11 1 18 l4 -1 q-4 -9 -1 -16 Z" fill="#8a4b1c"/>
    <path d="M38.5 19 q4 8 2 14" fill="none" stroke="#8a4b1c" stroke-width="2.2"/>
  </g>
</svg>
`,Yt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M22 27 q-7 15 -5 30 l9 -3 q-3 -15 1 -25 Z" fill="currentColor" opacity="0.7"/>
    <path d="M25.5 46 h6 v9 h-6 Z" fill="#6f5a3c"/>
    <path d="M34 46 h6 v9 h-6 Z" fill="#7e6744"/>
    <path d="M23.5 55 h8.5 v5 h-9.5 q-1 -3 1 -5 Z" fill="#46351f"/>
    <path d="M33.5 55 h8.5 q2 2 1 5 h-9.5 Z" fill="#55402a"/>
    <path d="M20 26 l6 -2 5 13 -6 2 Z" fill="#7a5326"/>
    <g stroke="#e5dcc6" stroke-width="1.4">
      <path d="M22 25 l2 -6"/><path d="M25 24 l2 -6"/><path d="M28 23 l2 -6"/>
    </g>
    <path d="M23 30 q9 -6 18 0 l2 16 q-11 4 -22 0 Z" fill="currentColor"/>
    <path d="M25 31 q7 9 14 0 l1 9 q-8 4 -16 0 Z" fill="#9b7f55"/>
    <path d="M24 40 q8 4 16 0 l0 3.5 q-8 4 -16 0 Z" fill="#6b4a24"/>
    <path d="M40 33 l8 -2 1 4 -8 3 Z" fill="#e0bd93"/>
    <path d="M48 15 q10 17 0 34" fill="none" stroke="#7a5326" stroke-width="2.8"/>
    <path d="M48 15 L48 49" fill="none" stroke="#e5dcc6" stroke-width="1.1"/>
    <path d="M32 32 L52 32" fill="none" stroke="#caa96f" stroke-width="1.5"/>
    <path d="M52 32 l-3 -2 M52 32 l-3 2" fill="none" stroke="#9aa3ad" stroke-width="1.2"/>
    <circle cx="32" cy="20" r="7.6" fill="#eec097"/>
    <circle cx="35.4" cy="19.6" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M24.5 20 q0 -10 7.5 -10 q7.5 0 7.5 10 q-4 -4 -7.5 -4 q-3.5 0 -7.5 4 Z" fill="currentColor"/>
    <path d="M26 23.5 q6 6 12 0 q-1.5 7 -6 7 q-4.5 0 -6 -7 Z" fill="#3f2d1b"/>
  </g>
</svg>
`,Jt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <!-- robe -->
    <path d="M21 60 q11 -5 22 0 l-4 -31 q-7 -4 -14 0 Z" fill="currentColor"/>
    <path d="M27 29 q5 22 0 29 q6 2 10 0 q-5 -7 -4 -29 Z" fill="#e7e2d6" opacity="0.65"/>
    <path d="M24 46 q8 4 16 0" fill="none" stroke="#e0b84f" stroke-width="1.8"/>
    <path d="M22 57 q10 -4 20 0" fill="none" stroke="#e0b84f" stroke-width="1.6"/>
    <!-- sash -->
    <path d="M25 37 q7 4 14 0 l0 3.5 q-7 4 -14 0 Z" fill="#7a4a86"/>
    <!-- staff arm -->
    <path d="M39 33 l8 -3 1.5 4 -8 4 Z" fill="#f2cba4"/>
    <path d="M47 16 L47 52" fill="none" stroke="#7a5326" stroke-width="2.8"/>
    <path d="M47 16 q-4 -2 -4 -5 q4 1 4 5 Z" fill="#7a5326"/>
    <circle cx="47" cy="12" r="4.8" fill="#f08a2c" stroke="#b4460d" stroke-width="1.5"/>
    <circle cx="45.6" cy="10.6" r="1.6" fill="#fff3cf" stroke="none"/>
    <!-- head -->
    <circle cx="32" cy="21" r="7.4" fill="#f2cba4"/>
    <circle cx="35.3" cy="21" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M25 21 q-3 10 0 16 l4 -1 q-3 -8 -1 -14 Z" fill="#c9b0d6"/>
    <path d="M39 21 q3 9 1 14" fill="none" stroke="#c9b0d6" stroke-width="2.2"/>
    <!-- pointed hat -->
    <path d="M32 7 q7 6 10 12 q-10 -4 -20 0 q3 -6 10 -12 Z" fill="currentColor"/>
    <path d="M22 19 q10 -4 20 0 q-10 4 -20 0 Z" fill="#5c3a66"/>
    <circle cx="35" cy="14" r="1.6" fill="#e0b84f" stroke="none"/>
  </g>
</svg>
`,Xt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M21 60 q11 -5 22 0 l-4 -31 q-7 -4 -14 0 Z" fill="currentColor"/>
    <path d="M27 29 q5 22 0 29 q6 2 10 0 q-5 -7 -4 -29 Z" fill="#e7e2d6" opacity="0.65"/>
    <path d="M24 46 q8 4 16 0" fill="none" stroke="#e0b84f" stroke-width="1.8"/>
    <path d="M22 57 q10 -4 20 0" fill="none" stroke="#e0b84f" stroke-width="1.6"/>
    <path d="M25 37 q7 4 14 0 l0 3.5 q-7 4 -14 0 Z" fill="#7a4a86"/>
    <path d="M39 33 l8 -3 1.5 4 -8 4 Z" fill="#e0bd93"/>
    <path d="M47 16 L47 52" fill="none" stroke="#7a5326" stroke-width="2.8"/>
    <path d="M47 16 q-4 -2 -4 -5 q4 1 4 5 Z" fill="#7a5326"/>
    <circle cx="47" cy="12" r="4.8" fill="#f08a2c" stroke="#b4460d" stroke-width="1.5"/>
    <circle cx="45.6" cy="10.6" r="1.6" fill="#fff3cf" stroke="none"/>
    <circle cx="32" cy="21" r="7.6" fill="#eec097"/>
    <circle cx="35.4" cy="20.6" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M26 24 q6 7 12 0 q-1 13 -6 13 q-5 0 -6 -13 Z" fill="#e4e0d8"/>
    <path d="M32 7 q7 6 10 12 q-10 -4 -20 0 q3 -6 10 -12 Z" fill="currentColor"/>
    <path d="M22 19 q10 -4 20 0 q-10 4 -20 0 Z" fill="#5c3a66"/>
    <circle cx="35" cy="14" r="1.6" fill="#e0b84f" stroke="none"/>
  </g>
</svg>
`,v=100,zt=3.1,Qt="http://www.w3.org/2000/svg",en={"warrior-f":Vt,"warrior-m":Kt,"archer-f":Wt,"archer-m":Yt,"mage-f":Jt,"mage-m":Xt};function g(t,e={}){const n=document.createElementNS(Qt,t);for(const[o,r]of Object.entries(e))n.setAttribute(o,r);return n}function je(t,e,n){const o=t.firstElementChild;o instanceof SVGSVGElement&&(o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width",String(e)),o.setAttribute("height",String(n)),o.setAttribute("overflow","visible"))}function tn(){const t=g("defs");return t.innerHTML=`
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
    </filter>`,t}function nn(t,e){const n=g("svg",{class:"arena",viewBox:`0 0 ${t.arena.width*v} ${t.arena.height*v}`,preserveAspectRatio:"xMidYMid meet"}),o=g("g",{class:"arena-art"});o.innerHTML=Ut,je(o,t.arena.width*v,t.arena.height*v);const r=g("g",{class:"layer-ground"}),a=g("g",{class:"layer-units"}),i=g("g",{class:"layer-shots"}),c=g("g",{class:"layer-bursts"}),s=g("g",{class:"layer-text"}),f=g("rect",{class:"vignette",width:String(t.arena.width*v),height:String(t.arena.height*v),fill:"url(#fx-vignette)"});n.append(tn(),o,r,a,i,c,s,f);const h=new Map;for(const p of t.units){const L=rn(p);h.set(p.id,L),r.append(L.ring,L.shadow),a.append(L.group)}const u=p=>{p.preventDefault();const L=n.getScreenCTM();if(!L)return;const q=new DOMPoint(p.clientX,p.clientY).matrixTransform(L.inverse()),m=q.x/v,k=q.y/v;let N=null,C=1;for(const E of t.units){if(!E.alive)continue;const Z=Math.hypot(E.x-m,E.y-.5-k);Z<C&&(C=Z,N=E)}e({x:m,y:k,unit:N})};return n.addEventListener("pointerdown",u),{el:n,update(p,L){for(const m of p.units)h.get(m.id)?.update(m,p.time,L.has(m.id));const q=[...p.units].sort((m,k)=>Number(m.alive)-Number(k.alive)||m.y-k.y);for(const m of q){const k=h.get(m.id);k&&a.append(k.group)}on(i,p.projectiles,p.time),sn(c,p,h),ln(s,p,h)},destroy(){n.removeEventListener("pointerdown",u),n.remove()}}}function rn(t){const e=g("ellipse",{class:`ring ${t.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});e.style.display="none";const n=g("ellipse",{class:"shadow",rx:"52",ry:"22",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),o=g("g",{class:`unit ${t.side} ${t.cls}`}),r=g("g",{class:"sprite"});r.innerHTML=en[`${t.cls}-${t.gender}`]??"",je(r,64,64);const a=g("rect",{class:"hp-bg",x:"-42",y:"-208",width:"84",height:"13",rx:"6.5"}),i=g("rect",{class:"hp",x:"-39.5",y:"-205.5",width:"79",height:"8",rx:"4"});o.append(r,a,i);const c={group:o,ring:e,shadow:n,px:t.x,py:t.y,update(s,f,h){const u=s.x*v,p=s.y*v,L=Math.hypot(s.x-c.px,s.y-c.py)>.004;c.px=s.x,c.py=s.y;const q=s.alive&&L?Math.sin(f*14)*5:0,m=s.alive&&L?Math.sin(f*14)*2.5:0,k=f-s.lastAttackAt,N=s.alive&&k>=0&&k<.26?Math.sin(k/.26*Math.PI)*26*s.facing:0;o.setAttribute("transform",`translate(${(u+N).toFixed(1)} ${(p+q).toFixed(1)})`),e.setAttribute("cx",u.toFixed(1)),e.setAttribute("cy",p.toFixed(1)),e.style.display=h&&s.alive?"":"none",n.setAttribute("cx",u.toFixed(1)),n.setAttribute("cy",(p+6).toFixed(1)),n.style.opacity=s.alive?"1":"0.45";const C=f-s.lastHitAt<.18,E=C?1.06:1,Z=zt*(s.alive?E:.92),I=s.alive?"":`rotate(${(s.facing*-78).toFixed(0)}) `;r.setAttribute("transform",`${I}rotate(${m.toFixed(2)}) scale(${(s.facing*Z).toFixed(3)} ${Z.toFixed(3)}) translate(-32 -60)`);const P=Math.max(0,s.hp/s.maxHp);i.setAttribute("width",(79*P).toFixed(1)),o.classList.toggle("hurt",C&&s.alive),o.classList.toggle("dead",!s.alive),a.style.display=s.alive?"":"none",i.style.display=s.alive?"":"none"}};return c}function on(t,e,n){for(;t.childNodes.length>e.length;)t.lastChild?.remove();for(;t.childNodes.length<e.length;)t.append(g("g"));e.forEach((o,r)=>{const a=t.childNodes[r];a.getAttribute("data-kind")!==o.kind&&(a.setAttribute("data-kind",o.kind),a.setAttribute("class",`shot ${o.kind}`),a.innerHTML=an(o.kind));const c=o.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(o.x*v).toFixed(1)} ${(o.y*v).toFixed(1)}) rotate(${(o.angle*180/Math.PI).toFixed(1)})${c}`)})}function an(t){return t==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:t==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function sn(t,e,n){const o=e.events.filter(r=>e.time-r.time<.32);for(;t.childNodes.length>o.length;)t.lastChild?.remove();for(;t.childNodes.length<o.length;)t.append(g("circle"));o.forEach((r,a)=>{const i=t.childNodes[a],c=n.get(r.unitId);if(!c)return;const s=(e.time-r.time)/.32;i.setAttribute("class",`burst ${r.kind}`),i.setAttribute("cx",(c.px*v).toFixed(1)),i.setAttribute("cy",(c.py*v-90).toFixed(1)),i.setAttribute("r",(14+s*40).toFixed(1)),i.setAttribute("opacity",(1-s).toFixed(2))})}function ln(t,e,n){const o=e.events.filter(r=>e.time-r.time<1.1&&r.amount>=1);for(;t.childNodes.length>o.length;)t.lastChild?.remove();for(;t.childNodes.length<o.length;)t.append(g("text",{"text-anchor":"middle"}));o.forEach((r,a)=>{const i=t.childNodes[a],c=n.get(r.unitId);if(!c)return;const s=(e.time-r.time)/1.1;i.setAttribute("class",`floater ${r.kind}`),i.setAttribute("x",(c.px*v).toFixed(1)),i.setAttribute("y",(c.py*v-210-s*70).toFixed(1)),i.setAttribute("opacity",(1-s*s).toFixed(2));const f=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;i.textContent!==f&&(i.textContent=f)})}function cn(t){const e=le(t.id??""),n=e?jt(e.fortress.id,b(),Date.now()&65535||1):null;if(!e||!n)return x({title:"מבצר לא נמצא"},l("p",{},"חזרה למפת העולם."));const{continent:o,fortress:r}=e;if(b().conquered.includes(r.id)){const d=l("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return d.addEventListener("click",()=>M(`/continent/${o.id}`)),x({title:r.name,subtitle:o.name,showStars:!1},l("p",{class:"notice"},"המבצר הזה כבר נכבש."),l("div",{class:"row"},d))}const a=bt(n),i=new Set(a.units.filter(d=>d.side==="player").map(d=>d.id)),c=fn(new URLSearchParams(location.search).get("speed"));let s=!1,f=!1,h=0,u=0,p=0;window.__battle=a;const L=nn(a,d=>Ue(d)),q=l("div",{class:"stage"});q.append(L.el);const m=l("div",{class:"overlay"});q.append(m);const k=()=>{m.replaceChildren(l("div",{class:"panel"},l("h2",{},r.name),l("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),l("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),C())),m.classList.remove("hidden")},N=d=>{Dt({fortressId:r.id,won:d,seconds:a.time,heroes:ye.map(w=>({cls:w.cls,name:w.name||V(w.cls,w.gender),alive:w.alive,health:Math.max(0,w.hp/w.maxHp)}))});const y=l("button",{class:"btn primary",type:"button"},"המשך");y.addEventListener("click",()=>M(`/result/${r.id}/${d?"win":"lose"}`)),m.replaceChildren(l("div",{class:"panel"},l("h2",{},d?"המבצר נכבש":"הקרב אבד"),l("p",{},d?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),y)),m.classList.remove("hidden")};function C(){const d=l("button",{class:"btn primary",type:"button"},"התחל קרב");return d.addEventListener("click",()=>{m.classList.add("hidden"),s=!0,u=performance.now()}),d}const E=l("div",{class:"portraits"}),Z=l("button",{class:"btn small",type:"button"},"השהה"),I=l("button",{class:"btn small",type:"button"},"ריפוי"),P=l("button",{class:"btn small",type:"button"},"בחר הכול"),ue=l("button",{class:"btn small",type:"button"},"עמוד במקום");Z.addEventListener("click",()=>{f||(s=!s,u=performance.now(),Z.textContent=s?"השהה":"המשך")}),P.addEventListener("click",()=>{i.clear();for(const d of a.units)d.side==="player"&&d.alive&&i.add(d.id);T()}),ue.addEventListener("click",()=>{for(const d of i)z(a,d,{kind:"hold"})});const F=a.units.find(d=>d.side==="player"&&d.cls==="mage");I.addEventListener("click",()=>{if(!F)return;const d=Me(a,F.id);d&&(wt(a,F.id,d.id),me())});function me(){(F?kt(a,F.id)&&Me(a,F.id)!==null:!1)?I.removeAttribute("disabled"):I.setAttribute("disabled","true")}const ye=a.units.filter(d=>d.side==="player"),_e=ye.map(d=>{const y=l("span",{class:"portrait-fill"}),w=l("button",{class:`portrait ${d.cls}`,type:"button"},l("span",{class:"portrait-name"},d.name||V(d.cls,d.gender)),l("span",{class:"portrait-bar"},y));return w.addEventListener("click",()=>{d.alive&&(i.clear(),i.add(d.id),T())}),E.append(w),{unit:d,button:w,fill:y}});function T(){me();for(const d of _e){const y=Math.max(0,d.unit.hp/d.unit.maxHp);d.fill.style.width=`${(y*100).toFixed(0)}%`,d.button.classList.toggle("selected",i.has(d.unit.id)),d.button.classList.toggle("dead",!d.unit.alive)}}T();function Ue(d){if(!s)return;const y=d.unit;if(y&&y.side==="player"&&y.alive){i.clear(),i.add(y.id),T();return}if(i.size!==0)for(const w of i)y&&y.side==="enemy"&&y.alive?z(a,w,{kind:"attack",targetId:y.id}):z(a,w,{kind:"move",x:d.x,y:d.y})}const ge=d=>{d.code==="Space"&&(d.preventDefault(),Z.click())};addEventListener("keydown",ge);const Le=()=>{if(h=requestAnimationFrame(Le),s&&!f){const d=performance.now();p+=Math.min(.1,(d-u)/1e3)*c*dn,u=d;let y=0;for(;p>=oe&&y<8*c;)Ve(),p-=oe,y++}L.update(a,i)},Ve=()=>{xt(a),a.winner&&!f&&(f=!0,s=!1,N(a.winner==="player")),T()};k(),h=requestAnimationFrame(Le);const ve=x({title:r.name,subtitle:`${o.name} · ${o.domain}`,showStars:!1},q,l("div",{class:"hud"},E,l("div",{class:"hud-actions"},I,P,ue,Z)));return{el:ve.el,destroy(){cancelAnimationFrame(h),removeEventListener("keydown",ge),L.destroy(),ve.destroy()}}}const dn=.6;function fn(t){const e=Number(t??1);return!Number.isFinite(e)||e<=0?1:Math.min(16,Math.max(1,e))}function hn(t){const e=le(t.id??"");if(!e)return x({title:"מבצר לא נמצא"},l("p",{},"חזרה למפת העולם."));const{continent:n,fortress:o}=e,r=t.outcome==="win",a=_t(o.id),i=!b().flags.sawUpgrades;B(h=>{r&&!h.conquered.includes(o.id)&&h.conquered.push(o.id),i&&(h.flags.sawUpgrades=!0,h.stars+=Ze)});const c=[];a&&c.push(l("section",{class:"card"},l("h3",{},"הגיבורים שלך"),...a.heroes.map(h=>l("div",{class:"stat-row"},l("span",{class:"stat-name"},h.name),l("span",{class:"stat-value"},h.alive?`${Math.round(h.health*100)}% חיים`:"נפל"))),l("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),i&&c.push(l("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${Ze} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const s=n.fortresses.filter(h=>!h.home&&!b().conquered.includes(h.id)).length;r&&s===0?c.push(l("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||c.push(l("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const f=l("div",{class:"row"},j(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[j("קרב נוסף באותו מבצר",`/battle/${o.id}`)],j("חזרה ליבשת",`/continent/${n.id}`),j("תפריט המשימות","/missions"));return x({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${o.name} · ${se(n.id)?.name??""}`,showBack:!1},...c,f)}function j(t,e,n=!1){const o=l("button",{class:n?"btn primary":"btn",type:"button"},t);return o.addEventListener("click",()=>M(e)),o}function pn(t){let e=0;for(const n of Object.keys(t.heroes)){const o=t.heroes[n];for(const r of he[n])e+=Tt(o.levels[r]??0)}return e}function un(t,e,n){const o=()=>{c.remove(),removeEventListener("keydown",r)},r=s=>{s.key==="Escape"&&o()},a=n.map(s=>{const f=l("button",{class:s.primary?"btn primary":"btn",type:"button"},s.label);return f.addEventListener("click",()=>{o(),s.onClick()}),f}),i=l("div",{class:"modal",role:"dialog","aria-modal":"true"},l("h2",{},t),l("p",{},e),l("div",{class:"modal-actions"},...a)),c=l("div",{class:"backdrop"},i);c.addEventListener("click",s=>{s.target===c&&o()}),addEventListener("keydown",r),document.body.append(c),a.find(s=>s.classList.contains("primary"))?.focus()}function mn(){if(!b().flags.sawUpgrades)return x({title:"שדרוג הגיבורים"},l("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const t=l("div",{class:"stack"}),e=()=>{const n=b();t.replaceChildren(...Object.keys(K).map(o=>{const r=n.heroes[o],a=he[o].map(c=>yn(o,c,e)),i=V(o,r.gender);return l("section",{class:"card hero"},l("h3",{},r.name?`${r.name} · ${i}`:i),l("div",{class:"stats"},...a))}))};return e(),x({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${pn(b())}`},t)}function yn(t,e,n){const a=b().heroes[t].levels[e]??0,i=fe[t][e]??0,c=Bt(i,e,a),s=Ft(a),f=l("button",{class:"btn small",type:"button"},s===null?"מרבי":`★ ${s}`);return s===null&&f.setAttribute("disabled","true"),f.addEventListener("click",()=>{if(s!==null){if(b().stars<s){un("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>M("/missions")}]);return}B(h=>{h.stars-=s;const u=h.heroes[t];u.levels[e]=(u.levels[e]??0)+1}),n()}}),l("div",{class:"stat-row"},l("span",{class:"stat-name"},Nt[e]),l("span",{class:"stat-value"},gn(c)),l("span",{class:"stat-level"},`דרגה ${a}`),f)}function gn(t){return t>=10?String(Math.round(t)):t.toFixed(1)}const Ln={topics(t){return[]},missions(t){return[]},onSolved(t,e){return 0}};let vn=Ln;function De(t){const e=b(),n=se(t.id??""),o=n&&de(n,e)?n:nt(e),r=new Set(vn.topics(o.id).map(s=>s.id)),a=rt(o,e),i=o.topics.length-a.length,c=a.map(s=>{const f=r.has(s.id);return l("li",{class:`topic${f?"":" soon"}`},l("span",{class:"topic-name"},s.name),l("span",{class:"badge"},f?"זמין":"בקרוב"))});return x({title:"תפריט המשימות",subtitle:`${o.name} · ${o.domain}`},l("p",{class:"notice"},"פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים."),l("section",{class:"card topics"},l("ul",{},...c)),...i>0?[l("p",{class:"muted"},`עוד ${i} נושאים ייפתחו בהמשך, אחד אחרי השני.`)]:[])}const ae={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},bn=["m","f"];function kn(){const t=l("div",{class:"stack"}),e=()=>{const o=b();t.replaceChildren(...Object.keys(K).map(r=>wn(r,o.heroes[r].gender,o.heroes[r].name,e)))};e();const n=l("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{B(o=>{for(const r of Object.keys(K)){const a=o.heroes[r];a.name.trim()||(a.name=ae[r][a.gender][0])}o.flags.setupDone=!0}),M("/")}),x({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:b().flags.setupDone},t,l("div",{class:"row"},n))}function wn(t,e,n,o){const r=l("input",{class:"name-input",type:"text",maxlength:"14",placeholder:ae[t][e][0],value:n,"aria-label":`שם ה${V(t,e)}`});r.addEventListener("input",()=>{B(c=>{c.heroes[t].name=r.value})});const a=c=>{const s=l("button",{class:`btn small${e===c?" primary":""}`,type:"button"},G[t][c]);return s.addEventListener("click",()=>{B(f=>{f.heroes[t].gender=c}),o()}),s},i=ae[t][e].map(c=>{const s=l("button",{class:"chip",type:"button"},c);return s.addEventListener("click",()=>{B(f=>{f.heroes[t].name=c}),o()}),s});return l("section",{class:"card hero-setup"},l("div",{class:"setup-row"},...bn.map(a)),l("div",{class:"setup-row"},r),l("div",{class:"setup-row chips"},...i))}$("/",ct);$("/continent/:id",ft);$("/battle/:id",cn);$("/result/:id/:outcome",hn);$("/upgrades",mn);$("/missions",De);$("/missions/:id",De);$("/setup",kn);Ke(()=>{const t=l("button",{class:"btn primary",type:"button"},"למפת העולם");return t.addEventListener("click",()=>M("/")),x({title:"הדף לא נמצא",showBack:!1},t)});!b().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const Ee=document.getElementById("app");Ee&&Xe(Ee);
