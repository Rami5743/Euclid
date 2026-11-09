(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const $t=[];let Ct=null,j=null,X=null;function $(e,t){$t.push({pattern:e.split("/").filter(Boolean),factory:t})}function Yt(e){Ct=e}function M(e){location.hash==="#"+e?et():location.hash=e}function Xt(){history.length>1?history.back():M("/")}function Jt(){return location.hash.replace(/^#/,"")||"/"}function zt(e){const t=e.split("/").filter(Boolean);for(const n of $t){if(n.pattern.length!==t.length)continue;const o={};let r=!0;for(let a=0;a<n.pattern.length;a++){const l=n.pattern[a],c=t[a];if(l.startsWith(":"))o[l.slice(1)]=decodeURIComponent(c);else if(l!==c){r=!1;break}}if(r)return{factory:n.factory,params:o}}return null}function et(){if(!j)return;X?.destroy?.(),j.replaceChildren();const e=Jt(),t=zt(e),n=t?.factory??Ct;n&&(X=n(t?.params??{}),j.append(X.el),j.scrollTop=0)}function Qt(e){j=e,addEventListener("hashchange",et),et()}const J="euclid.";class te{read(t){try{const n=localStorage.getItem(J+t);return n===null?null:JSON.parse(n)}catch{return null}}write(t,n){try{localStorage.setItem(J+t,JSON.stringify(n))}catch{}}remove(t){try{localStorage.removeItem(J+t)}catch{}}}const Nt=new te,It="profile";function ee(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],solvedTopics:[],flags:{sawUpgrades:!1,setupDone:!1}}}function ne(e){return e.solvedTopics??=[],e.conquered??=[],e}let O=ne(Nt.read(It)??ee());const nt=new Set;function x(){return O}function re(e){return nt.add(e),()=>nt.delete(e)}function F(e){e(O),Nt.write(It,O);for(const t of nt)t(O);return O}function s(e,t={},...n){const o=document.createElement(e);for(const[r,a]of Object.entries(t))r==="class"?o.className=a:o.setAttribute(r,a);return o.append(...n),o}function L(e,...t){const n=s("button",{class:"stars",type:"button",title:"תפריט המשימות"}),o=()=>{n.replaceChildren(s("span",{class:"star-icon"},"★"),s("span",{},String(x().stars)))};o();const r=re(o);n.addEventListener("click",()=>M("/missions"));const a=s("header",{class:"top"});if(e.showBack!==!1){const c=s("button",{class:"back",type:"button","aria-label":"חזרה"},"→");c.addEventListener("click",()=>Xt()),a.append(c)}return a.append(s("div",{class:"titles"},s("h1",{},e.title),...e.subtitle?[s("p",{class:"subtitle"},e.subtitle)]:[])),e.showStars!==!1&&a.append(n),{el:s("div",{class:"page"},a,s("main",{class:"content"},...t)),destroy:()=>r()}}const ct=[{id:"asia",name:"אסיה",domain:"מספרים מכוונים",order:1,lon:95,lat:35,view:{lon0:55,lat0:0,lon1:150,lat1:60},topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:70,lat:25,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.6,starsNeeded:0,lon:90,lat:40},{id:"asia-2",name:"חומות המשי",level:2,difficulty:1.1,starsNeeded:8,lon:115,lat:32},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.15,starsNeeded:24,lon:128,lat:45}]},{id:"australia",name:"אוסטרליה",domain:"כפל, חילוק וחזקות",order:2,lon:134,lat:-25,view:{lon0:110,lat0:-48,lon1:180,lat1:-8},topics:[{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"australia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:133,lat:-24,home:!0},{id:"australia-1",name:"מבצר האלמוגים",level:4,difficulty:1.18,starsNeeded:40,lon:147,lat:-32},{id:"australia-2",name:"חומת המדבר",level:5,difficulty:1.21,starsNeeded:56,lon:118,lat:-26},{id:"australia-3",name:"מגדל הערפל",level:6,difficulty:1.24,starsNeeded:75,lon:172,lat:-42}]},{id:"africa",name:"אפריקה",domain:"זוויות",order:3,lon:20,lat:5,view:{lon0:-20,lat0:-36,lon1:52,lat1:38},topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:18,lat:10,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.27,starsNeeded:95,lon:30,lat:-4},{id:"africa-2",name:"חומות החול",level:8,difficulty:1.3,starsNeeded:120,lon:24,lat:24},{id:"africa-3",name:"מצודת הכף",level:9,difficulty:1.33,starsNeeded:150,lon:25,lat:-28}]},{id:"europe",name:"אירופה",domain:"ביטויים אלגבריים",order:4,lon:15,lat:50,view:{lon0:-12,lat0:34,lon1:42,lat1:72},topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:9,lat:48,home:!0},{id:"europe-1",name:"טירת הנעלם",level:10,difficulty:1.36,starsNeeded:185,lon:2,lat:46},{id:"europe-2",name:"מבצר הגשר",level:11,difficulty:1.39,starsNeeded:225,lon:21,lat:52},{id:"europe-3",name:"ארמון הצפון",level:12,difficulty:1.42,starsNeeded:275,lon:28,lat:61}]},{id:"samerica",name:"דרום אמריקה",domain:"משוואות",order:5,lon:-60,lat:-15,view:{lon0:-85,lat0:-56,lon1:-32,lat1:14},topics:[{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"samerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-58,lat:-8,home:!0},{id:"samerica-1",name:"מבצר האנדים",level:13,difficulty:1.45,starsNeeded:330,lon:-70,lat:-16},{id:"samerica-2",name:"חומות היער",level:14,difficulty:1.48,starsNeeded:395,lon:-50,lat:-20},{id:"samerica-3",name:"מצודת הקרח",level:15,difficulty:1.51,starsNeeded:470,lon:-67,lat:-42}]},{id:"namerica",name:"צפון אמריקה",domain:"שטחים, גופים ופיתגורס",order:6,lon:-100,lat:45,view:{lon0:-170,lat0:8,lon1:-50,lat1:75},topics:[{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"namerica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:-98,lat:40,home:!0},{id:"namerica-1",name:"מבצר המפרץ",level:16,difficulty:1.54,starsNeeded:560,lon:-82,lat:33},{id:"namerica-2",name:"חומות הקניון",level:17,difficulty:1.57,starsNeeded:660,lon:-115,lat:42},{id:"namerica-3",name:"מצודת הצפון",level:18,difficulty:1.6,starsNeeded:780,lon:-105,lat:62}]},{id:"antarctica",name:"אנטארקטיקה",domain:"שכיחות והסתברות",order:7,lon:0,lat:-80,view:{lon0:-180,lat0:-90,lon1:180,lat1:-62},topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"antarctica-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,lon:0,lat:-78,home:!0},{id:"antarctica-1",name:"מבצר הקרחון",level:19,difficulty:1.63,starsNeeded:910,lon:-90,lat:-80},{id:"antarctica-2",name:"חומות הסערה",level:20,difficulty:1.65,starsNeeded:1050,lon:90,lat:-79},{id:"antarctica-3",name:"ארמון הגורל",level:21,difficulty:1.68,starsNeeded:1250,lon:165,lat:-81}]}];function dt(e){return ct.find(t=>t.id===e)}function ft(e){for(const t of ct){const n=t.fortresses.find(o=>o.id===e);if(n)return{continent:t,fortress:n}}}function rt(e){return e.fortresses.filter(t=>!t.home)}function ht(){return[...ct].sort((e,t)=>e.order-t.order)}function Ft(e,t){return rt(e).every(n=>t.conquered.includes(n.id))}function pt(e,t){const n=ht(),o=n.findIndex(r=>r.id===e.id);return o<=0?!0:Ft(n[o-1],t)}function oe(e){const t=ht();return t.find(n=>!Ft(n,e))??t[t.length-1]}function ae(e,t){const n=[];for(const o of e.topics)if(n.push(o),!t.solvedTopics.includes(o.id))break;return n}const U={width:2e3,height:1e3};function ot(e,t){return{x:(e+180)/360*U.width,y:(90-t)/180*U.height}}const le={x:0,y:0,w:U.width,h:U.height};function se(e,t){const n=ot(e.lon0,e.lat0),o=ot(e.lon1,e.lat1);let r=Math.min(n.x,o.x),a=Math.min(n.y,o.y),l=Math.abs(o.x-n.x),c=Math.abs(o.y-n.y);if(l/c<t){const i=c*t;r-=(i-l)/2,l=i}else{const i=l/t;a-=(i-c)/2,c=i}return{x:r,y:a,w:l,h:c}}function ie(e,t,n){const o=ot(e,t);return{left:(o.x-n.x)/n.w*100,top:(o.y-n.y)/n.h*100}}function Bt(e,t,n){const o=s("div",{class:"map-art","aria-hidden":"true"});o.innerHTML=e;const r=o.firstElementChild;r instanceof SVGSVGElement&&(r.setAttribute("viewBox",`${t.x.toFixed(1)} ${t.y.toFixed(1)} ${t.w.toFixed(1)} ${t.h.toFixed(1)}`),r.setAttribute("preserveAspectRatio","xMidYMid slice"));const a=s("div",{class:"map-markers"});for(const l of n){const{left:c,top:i}=ie(l.lon,l.lat,t),h=l.onClick?"button":"div",d=s(h,{class:`marker ${l.state}`,style:`left:${c.toFixed(2)}%; top:${i.toFixed(2)}%`});h==="button"&&d.setAttribute("type","button");const u=s("span",{class:"marker-icon"});u.innerHTML=l.icon;const p=s("span",{class:"marker-caption"},s("span",{class:"marker-label"},l.label),...l.sub?[s("span",{class:"marker-sub"},l.sub)]:[]);d.append(u,p),l.onClick&&d.addEventListener("click",l.onClick),a.append(d)}return s("div",{class:"map"},o,a)}const Tt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
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
`,ce=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`,de=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M20 30 v-7 a12 12 0 0 1 24 0 v7" fill="none" stroke="#5d4b3a" stroke-width="5" stroke-linecap="round"/>
  <rect x="14" y="29" width="36" height="28" rx="7" fill="currentColor" stroke="#5d3b1a" stroke-width="2.6"/>
  <circle cx="32" cy="41" r="4.5" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
  <path d="M32 44 v6" stroke="#5d3b1a" stroke-width="3" stroke-linecap="round"/>
</svg>
`;function fe(){const e=x(),t=ht().map(n=>{const o=rt(n).length,r=rt(n).filter(a=>e.conquered.includes(a.id)).length;return pt(n,e)?{lon:n.lon,lat:n.lat,label:n.name,sub:`${r}/${o}`,state:"continent",icon:ce,onClick:()=>M(`/continent/${n.id}`)}:{lon:n.lon,lat:n.lat,label:n.name,state:"locked",icon:de}});return L({title:"מפת העולם",subtitle:"יבשת נפתחת אחרי שקודמתה נכבשה",showBack:!1},Bt(Tt,le,t),s("div",{class:"row"},z("שדרוג הגיבורים","/upgrades"),z("תפריט המשימות","/missions"),z("הגיבורים שלי","/setup")))}function z(e,t){const n=s("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>M(t)),n}const Q=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,he=5/3;function pe(e){const t=dt(e.id??"");if(!t)return L({title:"יבשת לא נמצאה"},s("p",{},"חזרה למפת העולם."));const n=x();if(!pt(t,n)){const r=s("button",{class:"btn primary",type:"button"},"למפת העולם");return r.addEventListener("click",()=>M("/")),L({title:t.name,subtitle:t.domain},s("p",{class:"notice"},"היבשת הזו עדיין נעולה. יש לכבוש קודם את היבשת שלפניה."),s("div",{class:"row"},r))}const o=t.fortresses.map(r=>r.home?{lon:r.lon,lat:r.lat,label:r.name,sub:"הבית שלך",state:"player",icon:Q}:n.conquered.includes(r.id)?{lon:r.lon,lat:r.lat,label:r.name,sub:"נכבש",state:"player",icon:Q}:{lon:r.lon,lat:r.lat,label:r.name,sub:r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level),state:"enemy",icon:Q,onClick:()=>M(`/battle/${r.id}`)});return L({title:t.name,subtitle:t.domain},Bt(Tt,se(t.view,he),o),s("div",{class:"row"},Lt("שדרוג הגיבורים","/upgrades"),Lt("תפריט המשימות",`/missions/${t.id}`)))}function Lt(e,t){const n=s("button",{class:"btn",type:"button"},e);return n.addEventListener("click",()=>M(t)),n}function G(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function K(e,t){return e.units.filter(n=>n.alive&&n.side===t)}function ue(e,t){return e.units.filter(n=>n.alive&&n.side!==t)}function S(e,t){return t===null?void 0:e.units.find(n=>n.id===t)}function at(e,t){let n=null,o=1/0;for(const r of t){const a=G(e,r);(a<o-1e-9||Math.abs(a-o)<=1e-9&&n&&r.id<n.id)&&(n=r,o=a)}return n}const me=2.2;function ye(e,t){const n=ue(e,t.side);if(n.length===0)return{kind:"idle"};const o=at(t,n.filter(l=>l.stats.range<=1.5));if(t.stats.range>2&&o&&G(t,o)<me){const l=t.x-o.x,c=t.y-o.y,i=Math.hypot(l,c)||1;return{kind:"move",x:t.x+l/i*3,y:t.y+c/i*3}}const a=at(t,n);return a?{kind:"attack",targetId:a.id}:{kind:"idle"}}function ge(e){let t=e>>>0;const o=()=>{t=t+1831565813>>>0;let r=t;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return o.seed=e,o}function H(e,t,n){return t+e()*(n-t)}const lt=1/30,vt=50;function ke(e,t){return e*vt/(vt+t)}const Mt=.3,Rt=.45,jt={arrow:14,fire:9,heal:12},we=.85,xe=.15;function be(e,t,n,o){const r=t==="player"?1:-1,a=t==="player"?3:n-3,l=o/2,c=[0,-1.6,1.6];return e.map((i,h)=>({x:a+(i.stats.range<=1.5?2*r:0),y:l+(c[h]??0)}))}function Le(e){const t={width:e.arenaWidth??24,height:e.arenaHeight??14},n=ge(e.seed),o={time:0,arena:t,units:[],projectiles:[],events:[],rng:n,winner:null,nextId:1,manual:e.manual??null},r=(a,l)=>{const c=be(a,l,t.width,t.height);a.forEach((i,h)=>{const d=c[h];o.units.push({id:`${l}-${i.cls}-${h}`,side:l,cls:i.cls,name:i.name,gender:i.gender,x:d.x+H(n,-.6,.6),y:d.y+H(n,-.6,.6),hp:i.stats.hp,maxHp:i.stats.hp,stats:i.stats,order:l===o.manual?{kind:"hold"}:{kind:"auto"},targetId:null,cooldown:H(n,0,1/i.stats.attackRate),healCooldown:H(n,0,i.stats.healRate??3),facing:l==="player"?1:-1,lastHitAt:-99,lastAttackAt:-99,alive:!0})})};return r(e.player,"player"),r(e.enemy,"enemy"),o}function tt(e,t,n){const o=S(e,t);o?.alive&&(o.order=n)}function qt(e,t){return t.side===e.manual?{kind:"hold"}:{kind:"auto"}}function Zt(e,t){const n=S(e,t);if(!n?.alive||!n.stats.healing)return null;let o=null;for(const r of K(e,n.side))r.id===n.id||r.hp>=r.maxHp||G(n,r)>n.stats.range||(!o||r.hp/r.maxHp<o.hp/o.maxHp)&&(o=r);return o}function ve(e,t){const n=S(e,t);return!!(n?.alive&&n.stats.healing&&n.healCooldown<=0)}function Me(e,t,n){const o=S(e,t),r=S(e,n),a=o?.stats.healing;return!o?.alive||!a||o.healCooldown>0||!r?.alive||r.side!==o.side||r.id===o.id||G(o,r)>o.stats.range?!1:(Ot(e,o,r,a),!0)}function Ot(e,t,n,o){e.projectiles.push({id:`p${e.nextId++}`,kind:"heal",side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:o,speed:jt.heal}),t.healCooldown=t.stats.healRate??3}function qe(e,t=lt){if(!e.winner){e.time+=t,Ze(e,t);for(const n of e.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-t),n.healCooldown=Math.max(0,n.healCooldown-t),Ee(e,n),Ae(e,n,t));$e(e),Ce(e),Ne(e),e.events.length>0&&(e.events=e.events.filter(n=>e.time-n.time<2))}}function Ze(e,t){const n=[];for(const o of e.projectiles){const r=S(e,o.targetId);if(!r||!r.alive)continue;const a=r.x-o.x,l=r.y-o.y,c=Math.hypot(a,l),i=o.speed*t;if(c<=i){if(o.kind==="heal"){const h=Math.min(r.maxHp-r.hp,o.amount);r.hp+=h,e.events.push({kind:"heal",unitId:r.id,amount:h,time:e.time})}else Ht(e,r,o.amount);continue}o.x+=a/c*i,o.y+=l/c*i,o.angle=Math.atan2(l,a),n.push(o)}e.projectiles=n}function Ee(e,t){if(t.side===e.manual)return;const n=t.stats.healing;if(!n||t.healCooldown>0)return;const o=K(e,t.side).filter(a=>a.id!==t.id&&a.hp<a.maxHp*we&&G(t,a)<=t.stats.range);let r=null;for(const a of o)(!r||a.hp/a.maxHp<r.hp/r.maxHp)&&(r=a);r&&Ot(e,t,r,n)}function Ae(e,t,n){const o=Ge(e,t);if(o.kind==="idle"){t.targetId=null;return}if(o.kind==="move"){t.targetId=null,Et(t,o.x,o.y,n);return}const r=S(e,o.targetId);if(!r||!r.alive){t.targetId=null;return}if(t.targetId=r.id,G(t,r)>t.stats.range){Et(t,r.x,r.y,n);return}t.facing=r.x>=t.x?1:-1,t.cooldown<=0&&Se(e,t,r)}function Ge(e,t){const n=t.order;if(n.kind==="move")if(G(t,n)<=xe)t.order=qt(e,t);else return{kind:"move",x:n.x,y:n.y};if(t.order.kind==="attack"){const o=S(e,t.order.targetId);if(o?.alive)return{kind:"attack",targetId:o.id};t.order=qt(e,t)}if(t.order.kind==="hold"){const o=e.units.filter(a=>a.alive&&a.side!==t.side&&G(t,a)<=t.stats.range),r=at(t,o);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return ye(e,t)}function Et(e,t,n,o){const r=t-e.x,a=n-e.y,l=Math.hypot(r,a);if(l<1e-6)return;const c=Math.min(l,e.stats.speed*o);e.x+=r/l*c,e.y+=a/l*c,Math.abs(r)>1e-6&&(e.facing=r>0?1:-1)}function Se(e,t,n){const o=ke(t.stats.attack,n.stats.defense)*(1+H(e.rng,-Mt,Mt));if(t.cooldown=1/t.stats.attackRate,t.lastAttackAt=e.time,t.stats.range<=1.5){Ht(e,n,o);return}const r=t.cls==="mage"?"fire":"arrow";e.projectiles.push({id:`p${e.nextId++}`,kind:r,side:t.side,x:t.x,y:t.y,angle:Math.atan2(n.y-t.y,n.x-t.x),targetId:n.id,amount:o,speed:jt[r]})}function Ht(e,t,n){t.hp-=n,t.lastHitAt=e.time,e.events.push({kind:"damage",unitId:t.id,amount:n,time:e.time}),t.hp<=0&&(t.hp=0,t.alive=!1,t.targetId=null)}function $e(e){const t=e.units.filter(o=>o.alive),n=Rt*2;for(let o=0;o<t.length;o++)for(let r=o+1;r<t.length;r++){const a=t[o],l=t[r],c=l.x-a.x,i=l.y-a.y,h=Math.hypot(c,i);if(h>=n)continue;const d=(n-h)/2,u=h<1e-6?1:c/h,p=h<1e-6?0:i/h;a.x-=u*d,a.y-=p*d,l.x+=u*d,l.y+=p*d}}function Ce(e){const t=Rt;for(const n of e.units)n.x=Math.min(e.arena.width-t,Math.max(t,n.x)),n.y=Math.min(e.arena.height-t,Math.max(t,n.y))}function Ne(e){const t=K(e,"player").length,n=K(e,"enemy").length;t===0?e.winner="enemy":n===0&&(e.winner="player")}const P={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function W(e,t){return P[e][t]}const Y={warrior:P.warrior.m,archer:P.archer.m,mage:P.mage.m},ut={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},Ie={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},mt={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},yt=[2,3,5,8,12,17,23,30],Pt=yt.length,Fe=.08;function Be(e){return e>=Pt?null:yt[e]}function _t(e){return 1+Fe*e}const At=8;function Te(e,t,n){return e*_t(n)}function Re(e){let t=0;for(let n=0;n<Math.min(e,Pt);n++)t+=yt[n];return t}const Dt=["warrior","archer","mage"],je={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},Oe=["hp","attack","defense"];function He(e,t){const o={...ut[e]};for(const r of mt[e]){const a=t[r]??0;if(a<=0)continue;const l=o[r];typeof l=="number"&&(o[r]=l*_t(a))}return o}function Pe(e){return Dt.map(t=>{const n=e.heroes[t];return{cls:t,name:n.name||Y[t],gender:n.gender,stats:He(t,n.levels)}})}function _e(e){return Dt.map(t=>{const n={...ut[t]};for(const o of Oe){const r=n[o];typeof r=="number"&&(n[o]=r*e)}return{cls:t,name:je[t],gender:"m",stats:n}})}function De(e,t,n){const o=ft(e);return!o||o.fortress.home?null:{player:Pe(t),enemy:_e(o.fortress.difficulty),seed:n,manual:"player"}}let V=null;function Ve(e){V=e}function Ue(e){return V&&V.fortressId===e?V:null}const Ke=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
      <path d="M1100 1224 q40 -16 80 0"/><path d="M1240 1272 q40 -16 80 0"/><path d="M1310 1206 q34 -14 68 0"/>
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
      <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
      <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
      <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="6"/>
      <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
    </g>
    <g transform="translate(1180 230) scale(0.8)">
      <ellipse cx="6" cy="18" rx="96" ry="34" fill="url(#ar-shadow)"/>
      <path d="M-14 20 q10 -60 0 -104 h30 q-10 44 0 104 Z" fill="#6b4a26" stroke="#4a331a" stroke-width="6"/>
      <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
    </g>
    <g transform="translate(2140 1120) scale(0.9)">
      <ellipse cx="6" cy="18" rx="96" ry="34" fill="url(#ar-shadow)"/>
      <path d="M-14 20 q10 -60 0 -104 h30 q-10 44 0 104 Z" fill="#6b4a26" stroke="#4a331a" stroke-width="6"/>
      <circle cx="0" cy="-116" r="86" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="-58" cy="-72" r="54" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="58" cy="-74" r="56" fill="url(#ar-leaf)" stroke="#2e4f26" stroke-width="7"/>
      <circle cx="-26" cy="-150" r="36" fill="#6ea052" opacity="0.65"/>
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
    <!-- towers -->
    <g>
      <path d="M1990 1170 V560 h130 v610 Z" fill="url(#ar-stone)" stroke="#55504a" stroke-width="7" stroke-linejoin="round"/>
      <path d="M1980 560 h150 l-75 -120 Z" fill="#9c4b3a" stroke="#5f2d22" stroke-width="7" stroke-linejoin="round"/>
      <rect x="2026" y="700" width="58" height="84" rx="28" fill="#3f3930" stroke="#55504a" stroke-width="5"/>
      <path d="M2055 440 v-70" stroke="#5a4a32" stroke-width="8"/>
      <path d="M2055 372 l92 28 -92 28 Z" fill="#b23b2e" stroke="#6b3a2a" stroke-width="6"/>
    </g>
    <g>
      <path d="M2300 1170 V600 h120 v570 Z" fill="url(#ar-stone)" stroke="#55504a" stroke-width="7" stroke-linejoin="round"/>
      <path d="M2290 600 h140 l-70 -112 Z" fill="#9c4b3a" stroke="#5f2d22" stroke-width="7" stroke-linejoin="round"/>
      <rect x="2332" y="730" width="54" height="80" rx="26" fill="#3f3930" stroke="#55504a" stroke-width="5"/>
    </g>
    <!-- torches -->
    <g>
      <circle cx="2104" cy="900" r="34" fill="url(#ar-fire)"/>
      <path d="M2104 918 q-14 -24 0 -44 q14 20 0 44 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="3"/>
      <circle cx="2316" cy="900" r="34" fill="url(#ar-fire)"/>
      <path d="M2316 918 q-14 -24 0 -44 q14 20 0 44 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="3"/>
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
      <path d="M180 706 l96 30 -96 30 Z" fill="#2f6fb3" stroke="#23527f" stroke-width="6"/>
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
      <path d="M0 10 q-26 -40 0 -74 q26 34 0 74 Z" fill="#f3a63a" stroke="#c96a16" stroke-width="4"/>
      <path d="M0 2 q-12 -22 0 -40 q12 18 0 40 Z" fill="#fff0c2"/>
    </g>
    <!-- barrels -->
    <g transform="translate(660 1300)">
      <ellipse cx="0" cy="14" rx="44" ry="14" fill="url(#ar-shadow)"/>
      <rect x="-34" y="-60" width="68" height="74" rx="18" fill="#8a5f34" stroke="#4a331a" stroke-width="6"/>
      <path d="M-34 -32 h68 M-34 -6 h68" stroke="#d6c08a" stroke-width="6"/>
    </g>
  </g>

  <!-- ambient edges -->
  <rect width="2400" height="1400" fill="none" stroke="rgba(40,46,28,0.18)" stroke-width="60"/>
</svg>
`,We=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="wf-steel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef2f8"/><stop offset="45%" stop-color="#b9c2cf"/><stop offset="100%" stop-color="#7b8696"/>
    </linearGradient>
    <linearGradient id="wf-blade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f6f9ff"/><stop offset="50%" stop-color="#cdd6e2"/><stop offset="100%" stop-color="#8d98a8"/>
    </linearGradient>
    <linearGradient id="wf-cloak" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.45)"/>
    </linearGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <!-- cloak -->
    <path d="M38 52 q-18 30 -12 60 l30 -8 q-8 -30 -2 -52 Z" fill="url(#wf-cloak)"/>
    <!-- legs -->
    <path d="M48 92 h16 v22 h-16 Z" fill="#6b4a2a"/>
    <path d="M68 92 h16 v22 h-16 Z" fill="#7d5932"/>
    <path d="M44 112 h22 v10 h-26 q-2 -6 4 -10 Z" fill="#3f2d1b"/>
    <path d="M66 112 h22 q4 4 2 10 h-24 Z" fill="#4e381f"/>
    <!-- skirt of mail -->
    <path d="M44 78 q20 10 40 0 l2 18 q-22 10 -44 0 Z" fill="url(#wf-steel)"/>
    <!-- torso -->
    <path d="M44 54 q20 -12 40 0 l2 26 q-22 10 -44 0 Z" fill="url(#wf-steel)"/>
    <!-- tabard in the team colour -->
    <path d="M56 52 h16 l4 40 q-12 6 -24 0 Z" fill="currentColor"/>
    <path d="M64 56 v32" stroke="rgba(0,0,0,0.25)" stroke-width="3"/>
    <!-- belt -->
    <path d="M44 86 q20 10 40 0 l0 8 q-20 10 -40 0 Z" fill="#5d3b1a"/>
    <rect x="58" y="88" width="12" height="9" rx="2.5" fill="#e8c45a"/>
    <!-- pauldrons -->
    <path d="M36 58 q8 -16 22 -10 q-6 10 -4 18 Z" fill="url(#wf-steel)"/>
    <path d="M92 58 q-8 -16 -22 -10 q6 10 4 18 Z" fill="url(#wf-steel)"/>
    <!-- shield arm -->
    <path d="M34 62 q-10 14 -2 30 q14 8 22 -4 q-8 -14 -4 -26 Z" fill="#8a5a2b"/>
    <circle cx="42" cy="78" r="14" fill="currentColor"/>
    <circle cx="42" cy="78" r="5" fill="#e8c45a"/>
    <!-- sword arm and blade -->
    <path d="M86 60 l16 -8 6 10 -16 9 Z" fill="#f2cba4"/>
    <path d="M100 48 l10 6" stroke="#5d3b1a" stroke-width="7"/>
    <path d="M112 42 l8 5 -32 56 -9 -5 Z" fill="url(#wf-blade)"/>
    <path d="M113.5 45 l2.5 1.5 -27 47 -2.5 -1.5 Z" fill="rgba(255,255,255,0.45)" stroke="none"/>
    <!-- head -->
    <path d="M52 44 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#f2cba4"/>
    <circle cx="72" cy="48" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M50 46 q2 -22 14 -22 q12 0 14 22 q-14 -8 -28 0 Z" fill="url(#wf-steel)"/>
    <path d="M64 24 v-10" stroke="#8d98a8" stroke-width="4"/>
    <path d="M64 14 q10 -8 16 -2 q-8 4 -10 10 Z" fill="currentColor"/>
    <path d="M64 30 v20" stroke="#8d98a8" stroke-width="4"/>
    <path d="M48 48 q-8 20 -2 34 l10 -2 q-6 -16 -2 -30 Z" fill="#8a4b1c"/>
    <path d="M46 80 q6 6 12 2" fill="none" stroke="#8a4b1c" stroke-width="4"/>
  </g>
</svg>
`,Ye=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="wm-steel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef2f8"/><stop offset="45%" stop-color="#b9c2cf"/><stop offset="100%" stop-color="#7b8696"/>
    </linearGradient>
    <linearGradient id="wm-blade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f6f9ff"/><stop offset="50%" stop-color="#cdd6e2"/><stop offset="100%" stop-color="#8d98a8"/>
    </linearGradient>
    <linearGradient id="wm-cloak" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.45)"/>
    </linearGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <!-- cloak -->
    <path d="M38 52 q-18 30 -12 60 l30 -8 q-8 -30 -2 -52 Z" fill="url(#wm-cloak)"/>
    <!-- legs -->
    <path d="M48 92 h16 v22 h-16 Z" fill="#6b4a2a"/>
    <path d="M68 92 h16 v22 h-16 Z" fill="#7d5932"/>
    <path d="M44 112 h22 v10 h-26 q-2 -6 4 -10 Z" fill="#3f2d1b"/>
    <path d="M66 112 h22 q4 4 2 10 h-24 Z" fill="#4e381f"/>
    <!-- skirt of mail -->
    <path d="M44 78 q20 10 40 0 l2 18 q-22 10 -44 0 Z" fill="url(#wm-steel)"/>
    <!-- torso -->
    <path d="M44 54 q20 -12 40 0 l2 26 q-22 10 -44 0 Z" fill="url(#wm-steel)"/>
    <!-- tabard in the team colour -->
    <path d="M56 52 h16 l4 40 q-12 6 -24 0 Z" fill="currentColor"/>
    <path d="M64 56 v32" stroke="rgba(0,0,0,0.25)" stroke-width="3"/>
    <!-- belt -->
    <path d="M44 86 q20 10 40 0 l0 8 q-20 10 -40 0 Z" fill="#5d3b1a"/>
    <rect x="58" y="88" width="12" height="9" rx="2.5" fill="#e8c45a"/>
    <!-- pauldrons -->
    <path d="M36 58 q8 -16 22 -10 q-6 10 -4 18 Z" fill="url(#wm-steel)"/>
    <path d="M92 58 q-8 -16 -22 -10 q6 10 4 18 Z" fill="url(#wm-steel)"/>
    <!-- shield arm -->
    <path d="M34 62 q-10 14 -2 30 q14 8 22 -4 q-8 -14 -4 -26 Z" fill="#8a5a2b"/>
    <circle cx="42" cy="78" r="14" fill="currentColor"/>
    <circle cx="42" cy="78" r="5" fill="#e8c45a"/>
    <!-- sword arm and blade -->
    <path d="M86 60 l16 -8 6 10 -16 9 Z" fill="#e0bd93"/>
    <path d="M100 48 l10 6" stroke="#5d3b1a" stroke-width="7"/>
    <path d="M112 42 l8 5 -32 56 -9 -5 Z" fill="url(#wm-blade)"/>
    <path d="M113.5 45 l2.5 1.5 -27 47 -2.5 -1.5 Z" fill="rgba(255,255,255,0.45)" stroke="none"/>
    <!-- head -->
    <path d="M52 44 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#e0bd93"/>
    <circle cx="72" cy="48" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M50 46 q2 -22 14 -22 q12 0 14 22 q-14 -8 -28 0 Z" fill="url(#wm-steel)"/>
    <path d="M64 24 v-10" stroke="#8d98a8" stroke-width="4"/>
    <path d="M64 14 q10 -8 16 -2 q-8 4 -10 10 Z" fill="currentColor"/>
    <path d="M64 30 v20" stroke="#8d98a8" stroke-width="4"/>
    <path d="M52 56 q12 8 24 0 q-2 10 -12 10 q-10 0 -12 -10 Z" fill="#7a5a3a"/>
  </g>
</svg>
`,Xe=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="af-cloak" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.5)"/>
    </linearGradient>
    <linearGradient id="af-leather" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a97b45"/><stop offset="100%" stop-color="#6d4a24"/>
    </linearGradient>
    <linearGradient id="af-bow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#a9793f"/><stop offset="100%" stop-color="#6b4620"/>
    </linearGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M40 50 q-16 32 -10 62 l28 -8 q-8 -32 -2 -54 Z" fill="url(#af-cloak)"/>
    <path d="M50 92 h14 v22 h-14 Z" fill="#5e4a2e"/>
    <path d="M68 92 h14 v22 h-14 Z" fill="#6f5836"/>
    <path d="M46 112 h20 v10 h-24 q-2 -6 4 -10 Z" fill="#3f2d1b"/>
    <path d="M66 112 h20 q4 4 2 10 h-22 Z" fill="#4e381f"/>
    <!-- quiver -->
    <path d="M34 46 l14 -5 12 30 -14 6 Z" fill="url(#af-leather)"/>
    <g stroke="#e8dcc0" stroke-width="3.4">
      <path d="M38 42 l4 -14"/><path d="M44 40 l4 -14"/><path d="M50 38 l4 -14"/>
    </g>
    <!-- torso -->
    <path d="M46 54 q18 -12 36 0 l2 26 q-20 10 -40 0 Z" fill="url(#af-leather)"/>
    <path d="M54 52 q10 16 20 0 l2 24 q-12 6 -24 0 Z" fill="#c8a56b"/>
    <path d="M46 84 q18 10 36 0 l0 8 q-18 10 -36 0 Z" fill="#5d3b1a"/>
    <path d="M58 54 l12 24" stroke="#4a3418" stroke-width="3"/>
    <!-- bow arm -->
    <path d="M82 60 l16 -4 3 10 -16 6 Z" fill="#f2cba4"/>
    <path d="M100 20 q22 42 0 84" fill="none" stroke="url(#af-bow)" stroke-width="7"/>
    <path d="M100 20 L100 104" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
    <path d="M62 62 L112 62" fill="none" stroke="#c6a96f" stroke-width="3.6"/>
    <path d="M112 62 l-8 -5 M112 62 l-8 5" fill="none" stroke="#9aa6b5" stroke-width="3"/>
    <!-- head and hood -->
    <path d="M52 44 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#f2cba4"/>
    <circle cx="72" cy="48" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M48 48 q0 -26 16 -26 q16 0 16 26 q-8 -8 -16 -8 q-8 0 -16 8 Z" fill="currentColor"/>
    <path d="M48 48 q-4 14 2 24 l10 -4 q-6 -10 -4 -18 Z" fill="currentColor"/>
    <path d="M46 52 q-8 22 -2 36 l10 -2 q-6 -18 -2 -32 Z" fill="#8a4b1c"/>
  </g>
</svg>
`,Je=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="am-cloak" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.5)"/>
    </linearGradient>
    <linearGradient id="am-leather" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a97b45"/><stop offset="100%" stop-color="#6d4a24"/>
    </linearGradient>
    <linearGradient id="am-bow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#a9793f"/><stop offset="100%" stop-color="#6b4620"/>
    </linearGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M40 50 q-16 32 -10 62 l28 -8 q-8 -32 -2 -54 Z" fill="url(#am-cloak)"/>
    <path d="M50 92 h14 v22 h-14 Z" fill="#5e4a2e"/>
    <path d="M68 92 h14 v22 h-14 Z" fill="#6f5836"/>
    <path d="M46 112 h20 v10 h-24 q-2 -6 4 -10 Z" fill="#3f2d1b"/>
    <path d="M66 112 h20 q4 4 2 10 h-22 Z" fill="#4e381f"/>
    <!-- quiver -->
    <path d="M34 46 l14 -5 12 30 -14 6 Z" fill="url(#am-leather)"/>
    <g stroke="#e8dcc0" stroke-width="3.4">
      <path d="M38 42 l4 -14"/><path d="M44 40 l4 -14"/><path d="M50 38 l4 -14"/>
    </g>
    <!-- torso -->
    <path d="M46 54 q18 -12 36 0 l2 26 q-20 10 -40 0 Z" fill="url(#am-leather)"/>
    <path d="M54 52 q10 16 20 0 l2 24 q-12 6 -24 0 Z" fill="#c8a56b"/>
    <path d="M46 84 q18 10 36 0 l0 8 q-18 10 -36 0 Z" fill="#5d3b1a"/>
    <path d="M58 54 l12 24" stroke="#4a3418" stroke-width="3"/>
    <!-- bow arm -->
    <path d="M82 60 l16 -4 3 10 -16 6 Z" fill="#e0bd93"/>
    <path d="M100 20 q22 42 0 84" fill="none" stroke="url(#am-bow)" stroke-width="7"/>
    <path d="M100 20 L100 104" fill="none" stroke="#efe6cf" stroke-width="2.6"/>
    <path d="M62 62 L112 62" fill="none" stroke="#c6a96f" stroke-width="3.6"/>
    <path d="M112 62 l-8 -5 M112 62 l-8 5" fill="none" stroke="#9aa6b5" stroke-width="3"/>
    <!-- head and hood -->
    <path d="M52 44 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#e0bd93"/>
    <circle cx="72" cy="48" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M48 48 q0 -26 16 -26 q16 0 16 26 q-8 -8 -16 -8 q-8 0 -16 8 Z" fill="currentColor"/>
    <path d="M48 48 q-4 14 2 24 l10 -4 q-6 -10 -4 -18 Z" fill="currentColor"/>
    <path d="M52 56 q12 8 24 0 q-2 9 -12 9 q-10 0 -12 -9 Z" fill="#4a3824"/>
  </g>
</svg>
`,ze=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="mf-robe" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.42)"/>
    </linearGradient>
    <radialGradient id="mf-orb">
      <stop offset="0%" stop-color="#fff3cf"/><stop offset="45%" stop-color="#f3a63a"/><stop offset="100%" stop-color="#c0450c"/>
    </radialGradient>
    <radialGradient id="mf-halo">
      <stop offset="0%" stop-color="rgba(243,166,58,0.75)"/><stop offset="100%" stop-color="rgba(243,166,58,0)"/>
    </radialGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <!-- robe -->
    <path d="M40 122 q24 -10 48 0 l-10 -64 q-14 -8 -28 0 Z" fill="url(#mf-robe)"/>
    <path d="M56 58 q8 36 0 62 q10 3 18 0 q-8 -28 -6 -62 Z" fill="#efe6d2" opacity="0.7"/>
    <path d="M44 104 q20 8 40 0" fill="none" stroke="#e8c45a" stroke-width="4"/>
    <path d="M42 118 q22 -8 44 0" fill="none" stroke="#e8c45a" stroke-width="3.4"/>
    <!-- sash -->
    <path d="M50 80 q14 8 28 0 l0 8 q-14 8 -28 0 Z" fill="#6d3f7a"/>
    <!-- staff -->
    <path d="M92 36 L92 118" fill="none" stroke="#7a5326" stroke-width="6"/>
    <path d="M92 36 q-10 -6 -10 -14 q10 4 10 14 Z" fill="#7a5326"/>
    <circle cx="92" cy="26" r="18" fill="url(#mf-halo)" stroke="none"/>
    <circle cx="92" cy="26" r="9" fill="url(#mf-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
    <circle cx="89" cy="23" r="3" fill="#fff6e0" stroke="none"/>
    <!-- arm -->
    <path d="M78 62 l14 -6 4 9 -14 7 Z" fill="#f2cba4"/>
    <!-- head -->
    <path d="M52 46 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#f2cba4"/>
    <circle cx="72" cy="50" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M50 50 q-8 24 -2 40 l10 -2 q-6 -20 -2 -36 Z" fill="#c9a0d6"/>
    <!-- pointed hat -->
    <path d="M64 10 q14 14 22 28 q-22 -8 -44 0 q8 -16 22 -28 Z" fill="currentColor"/>
    <path d="M42 38 q22 -8 44 0 q-22 10 -44 0 Z" fill="rgba(0,0,0,0.3)"/>
    <circle cx="74" cy="28" r="3.4" fill="#e8c45a"/>
  </g>
</svg>
`,Qe=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
  <defs>
    <linearGradient id="mm-robe" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="currentColor"/><stop offset="100%" stop-color="rgba(0,0,0,0.42)"/>
    </linearGradient>
    <radialGradient id="mm-orb">
      <stop offset="0%" stop-color="#fff3cf"/><stop offset="45%" stop-color="#f3a63a"/><stop offset="100%" stop-color="#c0450c"/>
    </radialGradient>
    <radialGradient id="mm-halo">
      <stop offset="0%" stop-color="rgba(243,166,58,0.75)"/><stop offset="100%" stop-color="rgba(243,166,58,0)"/>
    </radialGradient>
  </defs>
  <g stroke="#2a1f14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <!-- robe -->
    <path d="M40 122 q24 -10 48 0 l-10 -64 q-14 -8 -28 0 Z" fill="url(#mm-robe)"/>
    <path d="M56 58 q8 36 0 62 q10 3 18 0 q-8 -28 -6 -62 Z" fill="#efe6d2" opacity="0.7"/>
    <path d="M44 104 q20 8 40 0" fill="none" stroke="#e8c45a" stroke-width="4"/>
    <path d="M42 118 q22 -8 44 0" fill="none" stroke="#e8c45a" stroke-width="3.4"/>
    <!-- sash -->
    <path d="M50 80 q14 8 28 0 l0 8 q-14 8 -28 0 Z" fill="#6d3f7a"/>
    <!-- staff -->
    <path d="M92 36 L92 118" fill="none" stroke="#7a5326" stroke-width="6"/>
    <path d="M92 36 q-10 -6 -10 -14 q10 4 10 14 Z" fill="#7a5326"/>
    <circle cx="92" cy="26" r="18" fill="url(#mm-halo)" stroke="none"/>
    <circle cx="92" cy="26" r="9" fill="url(#mm-orb)" stroke="#8e3b0a" stroke-width="2.6"/>
    <circle cx="89" cy="23" r="3" fill="#fff6e0" stroke="none"/>
    <!-- arm -->
    <path d="M78 62 l14 -6 4 9 -14 7 Z" fill="#e0bd93"/>
    <!-- head -->
    <path d="M52 46 q12 -8 24 0 l-2 10 q-10 6 -20 0 Z" fill="#e0bd93"/>
    <circle cx="72" cy="50" r="2.2" fill="#2a1f14" stroke="none"/>
    <path d="M52 58 q12 8 24 0 q0 20 -12 20 q-12 0 -12 -20 Z" fill="#efe9dd"/>
    <!-- pointed hat -->
    <path d="M64 10 q14 14 22 28 q-22 -8 -44 0 q8 -16 22 -28 Z" fill="currentColor"/>
    <path d="M42 38 q22 -8 44 0 q-22 10 -44 0 Z" fill="rgba(0,0,0,0.3)"/>
    <circle cx="74" cy="28" r="3.4" fill="#e8c45a"/>
  </g>
</svg>
`,tn=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true">
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
`,w=100,I=128,Gt=2.05,en="http://www.w3.org/2000/svg",nn={"warrior-f":We,"warrior-m":Ye,"archer-f":Xe,"archer-m":Je,"mage-f":ze,"mage-m":Qe};function y(e,t={}){const n=document.createElementNS(en,e);for(const[o,r]of Object.entries(t))n.setAttribute(o,r);return n}function st(e,t,n){const o=e.firstElementChild;o instanceof SVGSVGElement&&(o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width",String(t)),o.setAttribute("height",String(n)),o.setAttribute("overflow","visible"))}function rn(){const e=y("defs");return e.innerHTML=`
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
    </filter>`,e}function on(e,t){const n=y("svg",{class:"arena",viewBox:`0 0 ${e.arena.width*w} ${e.arena.height*w}`,preserveAspectRatio:"xMidYMid meet"}),o=y("g",{class:"arena-art"});o.innerHTML=Ke,st(o,e.arena.width*w,e.arena.height*w);const r=y("g",{class:"layer-ground"}),a=y("g",{class:"layer-units"}),l=y("g",{class:"layer-shots"}),c=y("g",{class:"layer-bursts"}),i=y("g",{class:"layer-text"}),h=y("rect",{class:"vignette",width:String(e.arena.width*w),height:String(e.arena.height*w),fill:"url(#fx-vignette)"});n.append(rn(),o,r,a,l,c,i,h);const d=new Map;for(const p of e.units){const g=an(p);d.set(p.id,g),r.append(g.ring,g.shadow,g.dust),a.append(g.group)}const u=p=>{p.preventDefault();const g=n.getScreenCTM();if(!g)return;const v=new DOMPoint(p.clientX,p.clientY).matrixTransform(g.inverse()),m=v.x/w,q=v.y/w;let C=null,A=1;for(const E of e.units){if(!E.alive)continue;const Z=Math.hypot(E.x-m,E.y-.5-q);Z<A&&(A=Z,C=E)}t({x:m,y:q,unit:C})};return n.addEventListener("pointerdown",u),{el:n,update(p,g){for(const m of p.units)d.get(m.id)?.update(m,p.time,g.has(m.id));const v=[...p.units].sort((m,q)=>Number(m.alive)-Number(q.alive)||m.y-q.y);for(const m of v){const q=d.get(m.id);q&&a.append(q.group)}ln(l,p.projectiles,p.time),cn(c,p,d),dn(i,p,d)},destroy(){n.removeEventListener("pointerdown",u),n.remove()}}}function an(e){const t=y("ellipse",{class:`ring ${e.side}`,rx:"46",ry:"19",cx:"0",cy:"0"});t.style.display="none";const n=y("ellipse",{class:"shadow",rx:"58",ry:"24",cx:"0",cy:"0",fill:"url(#fx-shadow)"}),o=y("ellipse",{class:"dust",rx:"34",ry:"12",cx:"0",cy:"0"});o.style.opacity="0";const r=y("g",{class:`unit ${e.side} ${e.cls}`}),a=y("g",{class:"sprite"});a.innerHTML=nn[`${e.cls}-${e.gender}`]??"",st(a,I,I);const l=y("g",{class:"fallen"});l.innerHTML=tn,st(l,I,I),l.setAttribute("transform",`scale(${Gt}) translate(${-I/2} -122)`),l.style.display="none";const c=y("rect",{class:"hp-bg",x:"-50",y:"-266",width:"100",height:"16",rx:"8"}),i=y("rect",{class:"hp",x:"-47",y:"-263",width:"94",height:"10",rx:"5"});r.append(l,a,c,i);const h={group:r,ring:t,shadow:n,dust:o,px:e.x,py:e.y,update(d,u,p){const g=d.x*w,v=d.y*w,m=Math.hypot(d.x-h.px,d.y-h.py)>.004;h.px=d.x,h.py=d.y;const q=d.alive&&m?Math.sin(u*14)*5:0,C=d.alive&&m?Math.sin(u*14)*2.5:0,A=u-d.lastAttackAt,E=d.alive&&A>=0&&A<.26?Math.sin(A/.26*Math.PI)*26*d.facing:0;r.setAttribute("transform",`translate(${(g+E).toFixed(1)} ${(v+q).toFixed(1)})`),t.setAttribute("cx",g.toFixed(1)),t.setAttribute("cy",v.toFixed(1)),t.style.display=p&&d.alive?"":"none",n.setAttribute("cx",g.toFixed(1)),n.setAttribute("cy",(v+6).toFixed(1)),n.style.opacity=d.alive?"1":"0.45",o.setAttribute("cx",(g-26*d.facing).toFixed(1)),o.setAttribute("cy",(v+10).toFixed(1)),o.style.opacity=m&&d.alive?(.18+.12*Math.abs(Math.sin(u*9))).toFixed(2):"0";const Z=u-d.lastHitAt<.18,T=Gt*(Z?1.06:1);a.setAttribute("transform",`rotate(${C.toFixed(2)}) scale(${(d.facing*T).toFixed(3)} ${T.toFixed(3)}) translate(${-I/2} -122)`),a.style.display=d.alive?"":"none",l.style.display=d.alive?"none":"";const _=Math.max(0,d.hp/d.maxHp);i.setAttribute("width",(94*_).toFixed(1)),r.classList.toggle("hurt",Z&&d.alive),r.classList.toggle("dead",!d.alive),c.style.display=d.alive?"":"none",i.style.display=d.alive?"":"none"}};return h}function ln(e,t,n){for(;e.childNodes.length>t.length;)e.lastChild?.remove();for(;e.childNodes.length<t.length;)e.append(y("g"));t.forEach((o,r)=>{const a=e.childNodes[r];a.getAttribute("data-kind")!==o.kind&&(a.setAttribute("data-kind",o.kind),a.setAttribute("class",`shot ${o.kind}`),a.innerHTML=sn(o.kind));const c=o.kind==="fire"?` rotate(${(n*420%360).toFixed(0)})`:"";a.setAttribute("transform",`translate(${(o.x*w).toFixed(1)} ${(o.y*w).toFixed(1)}) rotate(${(o.angle*180/Math.PI).toFixed(1)})${c}`)})}function sn(e){return e==="arrow"?`<path d="M-26 0 H16" stroke="#6b5847" stroke-width="5" stroke-linecap="round"/>
            <path d="M22 0 l-10 -6 v12 Z" fill="#9aa3ad" stroke="#5d4b3a" stroke-width="2"/>
            <path d="M-26 0 l-8 -7 M-26 0 l-8 7" stroke="#e5dcc6" stroke-width="4" stroke-linecap="round"/>`:e==="fire"?`<g filter="url(#fx-glow)">
              <path d="M-34 0 q16 -12 30 0 q-16 12 -30 0 Z" fill="#f08a2c" opacity="0.55"/>
              <circle r="15" fill="url(#fx-fire)"/>
              <circle r="6" cx="-3" cy="-3" fill="#fff3cf"/>
            </g>`:'<g filter="url(#fx-glow)"><circle r="13" fill="url(#fx-heal)"/></g>'}function cn(e,t,n){const o=t.events.filter(r=>t.time-r.time<.32);for(;e.childNodes.length>o.length;)e.lastChild?.remove();for(;e.childNodes.length<o.length;)e.append(y("circle"));o.forEach((r,a)=>{const l=e.childNodes[a],c=n.get(r.unitId);if(!c)return;const i=(t.time-r.time)/.32;l.setAttribute("class",`burst ${r.kind}`),l.setAttribute("cx",(c.px*w).toFixed(1)),l.setAttribute("cy",(c.py*w-90).toFixed(1)),l.setAttribute("r",(14+i*40).toFixed(1)),l.setAttribute("opacity",(1-i).toFixed(2))})}function dn(e,t,n){const o=t.events.filter(r=>t.time-r.time<1.1&&r.amount>=1);for(;e.childNodes.length>o.length;)e.lastChild?.remove();for(;e.childNodes.length<o.length;)e.append(y("text",{"text-anchor":"middle"}));o.forEach((r,a)=>{const l=e.childNodes[a],c=n.get(r.unitId);if(!c)return;const i=(t.time-r.time)/1.1;l.setAttribute("class",`floater ${r.kind}`),l.setAttribute("x",(c.px*w).toFixed(1)),l.setAttribute("y",(c.py*w-210-i*70).toFixed(1)),l.setAttribute("opacity",(1-i*i).toFixed(2));const h=`${r.kind==="heal"?"+":"-"}${Math.round(r.amount)}`;l.textContent!==h&&(l.textContent=h)})}function fn(e){const t=ft(e.id??""),n=t?De(t.fortress.id,x(),Date.now()&65535||1):null;if(!t||!n)return L({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:o,fortress:r}=t;if(x().conquered.includes(r.id)){const f=s("button",{class:"btn primary",type:"button"},"חזרה ליבשת");return f.addEventListener("click",()=>M(`/continent/${o.id}`)),L({title:r.name,subtitle:o.name,showStars:!1},s("p",{class:"notice"},"המבצר הזה כבר נכבש."),s("div",{class:"row"},f))}const a=Le(n),l=new Set(a.units.filter(f=>f.side==="player").map(f=>f.id)),c=pn(new URLSearchParams(location.search).get("speed"));let i=!1,h=!1,d=0,u=0,p=0;window.__battle=a;const g=on(a,f=>Kt(f)),v=s("div",{class:"stage"});v.append(g.el);const m=s("div",{class:"overlay"});v.append(m);const q=()=>{m.replaceChildren(s("div",{class:"panel"},s("h2",{},r.name),s("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),s("p",{class:"muted"},"הגיבורים שלך אינם זזים מעצמם. הם עומדים במקומם ותוקפים כל אויב שנכנס לטווח, וכל תנועה היא לפי פקודה שלך. הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. גם הריפוי אינו אוטומטי, ומופעל בכפתור הריפוי."),A())),m.classList.remove("hidden")},C=f=>{Ve({fortressId:r.id,won:f,seconds:a.time,heroes:kt.map(b=>({cls:b.cls,name:b.name||W(b.cls,b.gender),alive:b.alive,health:Math.max(0,b.hp/b.maxHp)}))});const k=s("button",{class:"btn primary",type:"button"},"המשך");k.addEventListener("click",()=>M(`/result/${r.id}/${f?"win":"lose"}`)),m.replaceChildren(s("div",{class:"panel"},s("h2",{},f?"המבצר נכבש":"הקרב אבד"),s("p",{},f?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),k)),m.classList.remove("hidden")};function A(){const f=s("button",{class:"btn primary",type:"button"},"התחל קרב");return f.addEventListener("click",()=>{m.classList.add("hidden"),i=!0,u=performance.now()}),f}const E=s("div",{class:"portraits"}),Z=s("button",{class:"btn small",type:"button"},"השהה"),B=s("button",{class:"btn small",type:"button"},"ריפוי"),T=s("button",{class:"btn small",type:"button"},"בחר הכול"),_=s("button",{class:"btn small",type:"button"},"עמוד במקום");Z.addEventListener("click",()=>{h||(i=!i,u=performance.now(),Z.textContent=i?"השהה":"המשך")}),T.addEventListener("click",()=>{l.clear();for(const f of a.units)f.side==="player"&&f.alive&&l.add(f.id);R()}),_.addEventListener("click",()=>{for(const f of l)tt(a,f,{kind:"hold"})});const N=a.units.find(f=>f.side==="player"&&f.cls==="mage");B.addEventListener("click",()=>{if(!N)return;const f=Zt(a,N.id);f&&(Me(a,N.id,f.id),gt())});function gt(){(N?ve(a,N.id)&&Zt(a,N.id)!==null:!1)?B.removeAttribute("disabled"):B.setAttribute("disabled","true")}const kt=a.units.filter(f=>f.side==="player"),Ut=kt.map(f=>{const k=s("span",{class:"portrait-fill"}),b=s("button",{class:`portrait ${f.cls}`,type:"button"},s("span",{class:"portrait-name"},f.name||W(f.cls,f.gender)),s("span",{class:"portrait-bar"},k));return b.addEventListener("click",()=>{f.alive&&(l.clear(),l.add(f.id),R())}),E.append(b),{unit:f,button:b,fill:k}});function R(){gt();for(const f of Ut){const k=Math.max(0,f.unit.hp/f.unit.maxHp);f.fill.style.width=`${(k*100).toFixed(0)}%`,f.button.classList.toggle("selected",l.has(f.unit.id)),f.button.classList.toggle("dead",!f.unit.alive)}}R();function Kt(f){if(!i)return;const k=f.unit;if(k&&k.side==="player"&&k.alive){l.clear(),l.add(k.id),R();return}if(l.size!==0)for(const b of l)k&&k.side==="enemy"&&k.alive?tt(a,b,{kind:"attack",targetId:k.id}):tt(a,b,{kind:"move",x:f.x,y:f.y})}const wt=f=>{f.code==="Space"&&(f.preventDefault(),Z.click())};addEventListener("keydown",wt);const xt=()=>{if(d=requestAnimationFrame(xt),i&&!h){const f=performance.now();p+=Math.min(.1,(f-u)/1e3)*c*hn,u=f;let k=0;for(;p>=lt&&k<8*c;)Wt(),p-=lt,k++}g.update(a,l)},Wt=()=>{qe(a),a.winner&&!h&&(h=!0,i=!1,C(a.winner==="player")),R()};q(),d=requestAnimationFrame(xt);const bt=L({title:r.name,subtitle:`${o.name} · ${o.domain}`,showStars:!1},v,s("div",{class:"hud"},E,s("div",{class:"hud-actions"},B,T,_,Z)));return{el:bt.el,destroy(){cancelAnimationFrame(d),removeEventListener("keydown",wt),g.destroy(),bt.destroy()}}}const hn=.6;function pn(e){const t=Number(e??1);return!Number.isFinite(t)||t<=0?1:Math.min(16,Math.max(1,t))}function un(e){const t=ft(e.id??"");if(!t)return L({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:n,fortress:o}=t,r=e.outcome==="win",a=Ue(o.id),l=!x().flags.sawUpgrades;F(d=>{r&&!d.conquered.includes(o.id)&&d.conquered.push(o.id),l&&(d.flags.sawUpgrades=!0,d.stars+=At)});const c=[];a&&c.push(s("section",{class:"card"},s("h3",{},"הגיבורים שלך"),...a.heroes.map(d=>s("div",{class:"stat-row"},s("span",{class:"stat-name"},d.name),s("span",{class:"stat-value"},d.alive?`${Math.round(d.health*100)}% חיים`:"נפל"))),s("p",{class:"muted"},`אורך הקרב: ${Math.round(a.seconds)} שניות`))),l&&c.push(s("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${At} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const i=n.fortresses.filter(d=>!d.home&&!x().conquered.includes(d.id)).length;r&&i===0?c.push(s("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||c.push(s("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const h=s("div",{class:"row"},D(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),...r?[]:[D("קרב נוסף באותו מבצר",`/battle/${o.id}`)],D("חזרה ליבשת",`/continent/${n.id}`),D("תפריט המשימות","/missions"));return L({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${o.name} · ${dt(n.id)?.name??""}`,showBack:!1},...c,h)}function D(e,t,n=!1){const o=s("button",{class:n?"btn primary":"btn",type:"button"},e);return o.addEventListener("click",()=>M(t)),o}function mn(e){let t=0;for(const n of Object.keys(e.heroes)){const o=e.heroes[n];for(const r of mt[n])t+=Re(o.levels[r]??0)}return t}function yn(e,t,n){const o=()=>{c.remove(),removeEventListener("keydown",r)},r=i=>{i.key==="Escape"&&o()},a=n.map(i=>{const h=s("button",{class:i.primary?"btn primary":"btn",type:"button"},i.label);return h.addEventListener("click",()=>{o(),i.onClick()}),h}),l=s("div",{class:"modal",role:"dialog","aria-modal":"true"},s("h2",{},e),s("p",{},t),s("div",{class:"modal-actions"},...a)),c=s("div",{class:"backdrop"},l);c.addEventListener("click",i=>{i.target===c&&o()}),addEventListener("keydown",r),document.body.append(c),a.find(i=>i.classList.contains("primary"))?.focus()}function gn(){if(!x().flags.sawUpgrades)return L({title:"שדרוג הגיבורים"},s("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const e=s("div",{class:"stack"}),t=()=>{const n=x();e.replaceChildren(...Object.keys(Y).map(o=>{const r=n.heroes[o],a=mt[o].map(c=>kn(o,c,t)),l=W(o,r.gender);return s("section",{class:"card hero"},s("h3",{},r.name?`${r.name} · ${l}`:l),s("div",{class:"stats"},...a))}))};return t(),L({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${mn(x())}`},e)}function kn(e,t,n){const a=x().heroes[e].levels[t]??0,l=ut[e][t]??0,c=Te(l,t,a),i=Be(a),h=s("button",{class:"btn small",type:"button"},i===null?"מרבי":`★ ${i}`);return i===null&&h.setAttribute("disabled","true"),h.addEventListener("click",()=>{if(i!==null){if(x().stars<i){yn("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>M("/missions")}]);return}F(d=>{d.stars-=i;const u=d.heroes[e];u.levels[t]=(u.levels[t]??0)+1}),n()}}),s("div",{class:"stat-row"},s("span",{class:"stat-name"},Ie[t]),s("span",{class:"stat-value"},wn(c)),s("span",{class:"stat-level"},`דרגה ${a}`),h)}function wn(e){return e>=10?String(Math.round(e)):e.toFixed(1)}const xn={topics(e){return[]},missions(e){return[]},onSolved(e,t){return 0}};let bn=xn;function Vt(e){const t=x(),n=dt(e.id??""),o=n&&pt(n,t)?n:oe(t),r=new Set(bn.topics(o.id).map(i=>i.id)),a=ae(o,t),l=o.topics.length-a.length,c=a.map(i=>{const h=r.has(i.id);return s("li",{class:`topic${h?"":" soon"}`},s("span",{class:"topic-name"},i.name),s("span",{class:"badge"},h?"זמין":"בקרוב"))});return L({title:"תפריט המשימות",subtitle:`${o.name} · ${o.domain}`},s("p",{class:"notice"},"פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים."),s("section",{class:"card topics"},s("ul",{},...c)),...l>0?[s("p",{class:"muted"},`עוד ${l} נושאים ייפתחו בהמשך, אחד אחרי השני.`)]:[])}const it={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Ln=["m","f"];function vn(){const e=s("div",{class:"stack"}),t=()=>{const o=x();e.replaceChildren(...Object.keys(Y).map(r=>Mn(r,o.heroes[r].gender,o.heroes[r].name,t)))};t();const n=s("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{F(o=>{for(const r of Object.keys(Y)){const a=o.heroes[r];a.name.trim()||(a.name=it[r][a.gender][0])}o.flags.setupDone=!0}),M("/")}),L({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:x().flags.setupDone},e,s("div",{class:"row"},n))}function Mn(e,t,n,o){const r=s("input",{class:"name-input",type:"text",maxlength:"14",placeholder:it[e][t][0],value:n,"aria-label":`שם ה${W(e,t)}`});r.addEventListener("input",()=>{F(c=>{c.heroes[e].name=r.value})});const a=c=>{const i=s("button",{class:`btn small${t===c?" primary":""}`,type:"button"},P[e][c]);return i.addEventListener("click",()=>{F(h=>{h.heroes[e].gender=c}),o()}),i},l=it[e][t].map(c=>{const i=s("button",{class:"chip",type:"button"},c);return i.addEventListener("click",()=>{F(h=>{h.heroes[e].name=c}),o()}),i});return s("section",{class:"card hero-setup"},s("div",{class:"setup-row"},...Ln.map(a)),s("div",{class:"setup-row"},r),s("div",{class:"setup-row chips"},...l))}$("/",fe);$("/continent/:id",pe);$("/battle/:id",fn);$("/result/:id/:outcome",un);$("/upgrades",gn);$("/missions",Vt);$("/missions/:id",Vt);$("/setup",vn);Yt(()=>{const e=s("button",{class:"btn primary",type:"button"},"למפת העולם");return e.addEventListener("click",()=>M("/")),L({title:"הדף לא נמצא",showBack:!1},e)});!x().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const St=document.getElementById("app");St&&Qt(St);
