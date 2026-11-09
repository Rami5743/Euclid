(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ge=[];let me=null,A=null,_=null;function C(t,e){ge.push({pattern:t.split("/").filter(Boolean),factory:e})}function Ne(t){me=t}function w(t){location.hash==="#"+t?V():location.hash=t}function Be(){history.length>1?history.back():w("/")}function Re(){return location.hash.replace(/^#/,"")||"/"}function Te(t){const e=t.split("/").filter(Boolean);for(const n of ge){if(n.pattern.length!==e.length)continue;const a={};let r=!0;for(let o=0;o<n.pattern.length;o++){const i=n.pattern[o],l=e[o];if(i.startsWith(":"))a[i.slice(1)]=decodeURIComponent(l);else if(i!==l){r=!1;break}}if(r)return{factory:n.factory,params:a}}return null}function V(){if(!A)return;_?.destroy?.(),A.replaceChildren();const t=Re(),e=Te(t),n=e?.factory??me;n&&(_=n(e?.params??{}),A.append(_.el),A.scrollTop=0)}function Ge(t){A=t,addEventListener("hashchange",V),V()}const D="euclid.";class Fe{read(e){try{const n=localStorage.getItem(D+e);return n===null?null:JSON.parse(n)}catch{return null}}write(e,n){try{localStorage.setItem(D+e,JSON.stringify(n))}catch{}}remove(e){try{localStorage.removeItem(D+e)}catch{}}}const ke=new Fe,ve="profile";function Oe(){return{version:1,heroes:{warrior:{cls:"warrior",gender:"m",name:"",levels:{}},archer:{cls:"archer",gender:"m",name:"",levels:{}},mage:{cls:"mage",gender:"m",name:"",levels:{}}},stars:0,conquered:[],flags:{sawUpgrades:!1,setupDone:!1}}}let $=ke.read(ve)??Oe();const Y=new Set;function m(){return $}function He(t){return Y.add(t),()=>Y.delete(t)}function L(t){t($),ke.write(ve,$);for(const e of Y)e($);return $}function s(t,e={},...n){const a=document.createElement(t);for(const[r,o]of Object.entries(e))r==="class"?a.className=o:a.setAttribute(r,o);return a.append(...n),a}function v(t,...e){const n=s("button",{class:"stars",type:"button",title:"תפריט המשימות"}),a=()=>{n.replaceChildren(s("span",{class:"star-icon"},"★"),s("span",{},String(m().stars)))};a();const r=He(a);n.addEventListener("click",()=>w("/missions"));const o=s("header",{class:"top"});if(t.showBack!==!1){const l=s("button",{class:"back",type:"button","aria-label":"חזרה"},"→");l.addEventListener("click",()=>Be()),o.append(l)}return o.append(s("div",{class:"titles"},s("h1",{},t.title),...t.subtitle?[s("p",{class:"subtitle"},t.subtitle)]:[])),t.showStars!==!1&&o.append(n),{el:s("div",{class:"page"},o,s("main",{class:"content"},...e)),destroy:()=>r()}}const H=[{id:"asia",name:"אסיה",domain:"התחום המספרי",x:68,y:38,topics:[{id:"grid-q1",name:"מערכת צירים ברביע הראשון"},{id:"negatives",name:"מספרים שליליים ומספרים נגדיים"},{id:"add-sub",name:"חיבור וחיסור מספרים מכוונים"},{id:"grid-full",name:"הרחבת מערכת הצירים"},{id:"mul-div",name:"כפל וחילוק מספרים מכוונים"},{id:"powers",name:"חזקות עם מעריך טבעי ושורש ריבועי"}],fortresses:[{id:"asia-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,x:22,y:62,home:!0},{id:"asia-1",name:"מגדל הציר",level:1,difficulty:.85,starsNeeded:0,x:45,y:30},{id:"asia-2",name:"חומות הכפור",level:2,difficulty:1.1,starsNeeded:8,x:68,y:58},{id:"asia-3",name:"מבצר הדרקון",level:3,difficulty:1.2,starsNeeded:32,x:84,y:26}]},{id:"europe",name:"אירופה",domain:"התחום האלגברי",x:50,y:28,topics:[{id:"variable",name:"המשתנה"},{id:"expressions",name:"ביטויים אלגבריים"},{id:"identity",name:"שוויון בין ביטויים אלגבריים"},{id:"like-terms",name:"כינוס איברים דומים וחוק הפילוג"},{id:"equation-id",name:"משוואה וזיהוי פתרון"},{id:"linear-eq",name:"פתרון משוואה ממעלה ראשונה"},{id:"word-problems",name:"שאלות בהקשרים ובעיות תנועה"},{id:"graph-points",name:"נקודות על גרף"}],fortresses:[{id:"europe-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,x:20,y:55,home:!0},{id:"europe-1",name:"טירת הנעלם",level:4,difficulty:1.25,starsNeeded:64,x:44,y:32},{id:"europe-2",name:"מבצר שני האגפים",level:5,difficulty:1.3,starsNeeded:100,x:66,y:62},{id:"europe-3",name:"ארמון הסוגריים",level:6,difficulty:1.35,starsNeeded:180,x:85,y:34}]},{id:"africa",name:"אפריקה",domain:"התחום הגאומטרי",x:50,y:60,topics:[{id:"angles",name:"זוויות: מדידה, אומדן וחוצה זווית"},{id:"angle-pairs",name:"זוויות צמודות וקודקודיות"},{id:"triangle-angles",name:"זוויות במשולש ובמרובע"},{id:"congruence",name:"צורות חופפות וטרנספורמציות"},{id:"areas",name:"שטחים"},{id:"perimeters",name:"היקפים"},{id:"solids",name:"גופים במרחב: קובייה, תיבה ומנסרה"},{id:"pythagoras",name:"משפט פיתגורס ושימושיו"}],fortresses:[{id:"africa-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,x:24,y:30,home:!0},{id:"africa-1",name:"מבצר הזווית",level:7,difficulty:1.4,starsNeeded:280,x:48,y:58},{id:"africa-2",name:"חומת המשולש",level:8,difficulty:1.45,starsNeeded:400,x:70,y:28},{id:"africa-3",name:"מצודת פיתגורס",level:9,difficulty:1.5,starsNeeded:560,x:86,y:62}]},{id:"america",name:"אמריקה",domain:"תחום אי־הוודאות",x:22,y:45,topics:[{id:"data",name:"איסוף, ייצוג וקריאת מידע"},{id:"frequency",name:"שכיחות"},{id:"rel-frequency",name:"שכיחות יחסית ואחוזים"},{id:"probability",name:"הסתברות בהקשר של שכיחות יחסית"}],fortresses:[{id:"america-home",name:"מצודת הבית",level:0,difficulty:0,starsNeeded:0,x:26,y:64,home:!0},{id:"america-1",name:"מבצר המזל",level:10,difficulty:1.55,starsNeeded:680,x:50,y:32},{id:"america-2",name:"מגדל הסיכויים",level:11,difficulty:1.6,starsNeeded:800,x:72,y:60},{id:"america-3",name:"ארמון הגורל",level:12,difficulty:1.65,starsNeeded:1e3,x:86,y:30}]}];function xe(t){return H.find(e=>e.id===t)}function X(t){for(const e of H){const n=e.fortresses.find(a=>a.id===t);if(n)return{continent:e,fortress:n}}}function we(t,e){const n=s("div",{class:"map-art","aria-hidden":"true"});n.innerHTML=t;const a=s("div",{class:"map-markers"});for(const r of e){const o=r.onClick?"button":"div",i=s(o,{class:`marker ${r.state}`,style:`left:${r.x}%; top:${r.y}%`});o==="button"&&i.setAttribute("type","button");const l=s("span",{class:"marker-icon"});l.innerHTML=r.icon;const c=s("span",{class:"marker-caption"},s("span",{class:"marker-label"},r.label),...r.sub?[s("span",{class:"marker-sub"},r.sub)]:[]);i.append(l,c),r.onClick&&i.addEventListener("click",r.onClick),a.append(i)}return s("div",{class:"map"},n,a)}const je=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="מפת העולם">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cfe3df"/>
      <stop offset="100%" stop-color="#aec9c6"/>
    </linearGradient>
    <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e8d2a2"/>
      <stop offset="100%" stop-color="#d3b47c"/>
    </linearGradient>
    <filter id="grain" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
      <feComponentTransfer result="g"><feFuncA type="linear" slope="0.10"/></feComponentTransfer>
      <feComposite in="SourceGraphic" in2="g" operator="over"/>
    </filter>
    <pattern id="waves" width="54" height="28" patternUnits="userSpaceOnUse">
      <path d="M0 18 q 13 -10 27 0 q 13 10 27 0" fill="none" stroke="#8fb3ae" stroke-width="1.6" opacity="0.55"/>
    </pattern>
  </defs>

  <rect width="1000" height="600" fill="url(#sea)"/>
  <rect width="1000" height="600" fill="url(#waves)"/>

  <g filter="url(#grain)">
    <g fill="url(#land)" stroke="#9c6f3c" stroke-width="3" stroke-linejoin="round">
      <path d="M180 90 C230 70 300 90 310 140 C320 190 270 210 265 250 C260 290 300 300 300 340 C300 420 250 520 210 540 C180 555 160 520 170 470 C180 420 210 380 205 330 C200 290 150 280 135 240 C115 190 130 110 180 90 Z"/>
      <path d="M430 110 C470 85 540 90 570 115 C600 140 590 180 560 195 C530 210 500 200 470 210 C440 220 410 200 408 170 C406 140 410 125 430 110 Z"/>
      <path d="M440 265 C500 245 575 255 600 295 C625 335 600 380 570 410 C545 435 520 470 495 470 C470 470 455 440 450 405 C445 370 425 340 425 310 C425 288 428 270 440 265 Z"/>
      <path d="M610 120 C680 95 790 105 870 135 C910 150 915 190 880 205 C845 220 820 210 800 230 C780 250 790 285 760 300 C720 320 690 300 660 280 C630 260 600 250 595 215 C590 180 585 130 610 120 Z"/>
      <path d="M842 352 C872 340 906 352 912 374 C918 396 892 410 866 404 C840 398 826 364 842 352 Z"/>
      <path d="M352 468 C372 458 396 470 392 486 C388 502 362 506 350 494 C340 484 340 474 352 468 Z"/>
    </g>

    <g fill="none" stroke="#a8803f" stroke-width="2" opacity="0.5" stroke-linecap="round">
      <path d="M215 150 l16 -14 16 14 M243 190 l16 -14 16 14"/>
      <path d="M470 140 l14 -12 14 12 M505 150 l14 -12 14 12"/>
      <path d="M470 320 l16 -13 16 13 M505 350 l16 -13 16 13 M488 385 l16 -13 16 13"/>
      <path d="M660 160 l18 -15 18 15 M700 175 l18 -15 18 15 M742 160 l18 -15 18 15"/>
    </g>

    <g fill="#7d9b74" opacity="0.65">
      <circle cx="205" cy="430" r="7"/><circle cx="222" cy="448" r="6"/><circle cx="188" cy="452" r="6"/>
      <circle cx="540" cy="160" r="6"/><circle cx="556" cy="176" r="5"/>
      <circle cx="560" cy="300" r="6"/><circle cx="575" cy="320" r="5"/>
      <circle cx="700" cy="262" r="6"/><circle cx="718" cy="276" r="5"/>
    </g>
  </g>

  <g transform="translate(86 516)" opacity="0.8">
    <circle r="34" fill="#f6eddc" stroke="#8a5a2b" stroke-width="2.5"/>
    <path d="M0 -28 L7 -6 L28 0 L7 6 L0 28 L-7 6 L-28 0 L-7 -6 Z" fill="#c98a16" stroke="#5d3b1a" stroke-width="1.5"/>
    <text x="0" y="-36" text-anchor="middle" font-size="15" font-weight="700" fill="#5d3b1a">צ</text>
  </g>

  <rect x="8" y="8" width="984" height="584" fill="none" stroke="#8a5a2b" stroke-width="5" rx="14" opacity="0.85"/>
</svg>
`,_e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <path d="M12 8 h40 v34 l-20 14 -20 -14 Z" fill="currentColor" stroke="#5d3b1a" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M12 20 h40" stroke="#5d3b1a" stroke-width="2" opacity="0.6"/>
  <circle cx="32" cy="34" r="8" fill="#f6eddc" stroke="#5d3b1a" stroke-width="2"/>
</svg>
`;function De(){const t=m(),e=H.map(n=>{const a=n.fortresses.filter(o=>!o.home).length,r=n.fortresses.filter(o=>!o.home&&t.conquered.includes(o.id)).length;return{x:n.x,y:n.y,label:n.name,sub:`${r}/${a}`,state:"continent",icon:_e,onClick:()=>w(`/continent/${n.id}`)}});return v({title:"מפת העולם",subtitle:"ארבע יבשות, ארבעה תחומים במתמטיקה",showBack:!1},we(je,e),s("div",{class:"row"},P("שדרוג הגיבורים","/upgrades"),P("תפריט המשימות","/missions"),P("הגיבורים שלי","/setup")))}function P(t,e){const n=s("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>w(e)),n}const ce=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,Pe=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="יבשת אסיה">
  <defs>
    <linearGradient id="a-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e3dfae"/><stop offset="100%" stop-color="#bfc98a"/>
    </linearGradient>
    <linearGradient id="a-rock" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#cdc3ae"/><stop offset="100%" stop-color="#9c907a"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#a-g)"/>
  <path d="M0 470 C160 430 300 500 460 470 C620 440 760 510 1000 468 L1000 600 L0 600 Z" fill="#a7bb86"/>
  <path d="M-10 236 C120 206 190 276 300 256 C410 236 470 176 560 196 C650 216 700 176 800 186 C880 194 950 170 1010 182"
        fill="none" stroke="#7fa9c4" stroke-width="13" stroke-linecap="round" opacity="0.8"/>
  <g fill="url(#a-rock)" stroke="#6f6354" stroke-width="2.5" stroke-linejoin="round">
    <path d="M520 300 l70 -108 70 108 Z"/><path d="M610 320 l86 -128 86 128 Z"/>
    <path d="M120 206 l58 -86 58 86 Z"/><path d="M760 266 l64 -96 64 96 Z"/>
  </g>
  <g fill="#f3f1ea" opacity="0.92">
    <path d="M568 220 l22 -30 22 30 -22 -10 Z"/><path d="M672 236 l24 -36 24 36 -24 -11 Z"/>
    <path d="M160 160 l18 -26 18 26 -18 -9 Z"/><path d="M798 216 l26 -38 26 38 -26 -12 Z"/>
  </g>
  <g stroke="#4f6b3f" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.85">
    <path d="M300 420 v-34 M312 400 q16 -12 20 -30 M288 400 q-16 -12 -20 -30"/>
    <path d="M360 452 v-34 M372 432 q16 -12 20 -30 M348 432 q-16 -12 -20 -30"/>
    <path d="M900 420 v-34 M912 400 q16 -12 20 -30 M888 400 q-16 -12 -20 -30"/>
  </g>
  <path d="M220 372 L450 180 L680 348 L840 156" fill="none" stroke="#8a5a2b" stroke-width="5"
        stroke-dasharray="14 12" stroke-linecap="round" opacity="0.55"/>
  <rect x="8" y="8" width="984" height="584" fill="none" stroke="#8a5a2b" stroke-width="5" rx="14" opacity="0.85"/>
</svg>
`,Ue=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="יבשת אירופה">
  <defs>
    <linearGradient id="e-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d7e2b4"/><stop offset="100%" stop-color="#a9c187"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#e-g)"/>
  <g fill="#c3d19a" opacity="0.8">
    <path d="M0 96 h1000 v62 H0 Z"/><path d="M0 250 h1000 v46 H0 Z"/><path d="M0 430 h1000 v70 H0 Z"/>
  </g>
  <path d="M-10 540 C140 500 200 430 340 420 C480 410 540 470 680 452 C800 436 880 486 1010 462"
        fill="none" stroke="#7fa9c4" stroke-width="16" stroke-linecap="round" opacity="0.85"/>
  <g>
    <g fill="#3f6b3c" opacity="0.9">
      <circle cx="140" cy="150" r="22"/><circle cx="174" cy="166" r="18"/><circle cx="110" cy="172" r="17"/>
      <circle cx="560" cy="120" r="20"/><circle cx="592" cy="136" r="16"/><circle cx="532" cy="140" r="15"/>
      <circle cx="300" cy="520" r="20"/><circle cx="332" cy="534" r="16"/><circle cx="270" cy="536" r="15"/>
      <circle cx="880" cy="430" r="20"/><circle cx="910" cy="446" r="16"/><circle cx="852" cy="448" r="15"/>
    </g>
    <g stroke="#6b4a24" stroke-width="5" stroke-linecap="round">
      <path d="M140 172 v24"/><path d="M560 142 v22"/><path d="M300 540 v22"/><path d="M880 452 v22"/>
    </g>
  </g>
  <g fill="none" stroke="#9c8c5a" stroke-width="3" opacity="0.5">
    <path d="M60 300 h880"/><path d="M60 340 h880"/>
  </g>
  <path d="M200 330 L440 192 L660 372 L850 204" fill="none" stroke="#8a5a2b" stroke-width="5"
        stroke-dasharray="14 12" stroke-linecap="round" opacity="0.55"/>
  <rect x="8" y="8" width="984" height="584" fill="none" stroke="#8a5a2b" stroke-width="5" rx="14" opacity="0.85"/>
</svg>
`,Ve=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="יבשת אפריקה">
  <defs>
    <linearGradient id="f-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0dcae"/><stop offset="100%" stop-color="#d9b97e"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#f-g)"/>
  <g fill="#e7c893" opacity="0.9">
    <path d="M-20 300 C120 256 240 316 380 292 C520 268 620 318 760 296 C860 280 950 306 1020 292 L1020 360 L-20 360 Z"/>
    <path d="M-20 450 C140 410 260 470 420 446 C580 422 700 470 860 448 C940 436 990 452 1020 446 L1020 520 L-20 520 Z"/>
  </g>
  <path d="M-10 120 C150 100 230 160 360 140 C490 120 560 70 700 92 C820 110 900 80 1010 96"
        fill="none" stroke="#7fa9c4" stroke-width="12" stroke-linecap="round" opacity="0.75"/>
  <g stroke="#6b4a24" stroke-width="6" stroke-linecap="round" fill="none">
    <path d="M160 440 v-56 M160 396 q-30 -8 -46 -24 M160 396 q30 -8 46 -24"/>
    <path d="M620 520 v-56 M620 476 q-30 -8 -46 -24 M620 476 q30 -8 46 -24"/>
    <path d="M900 250 v-50 M900 212 q-26 -8 -40 -22 M900 212 q26 -8 40 -22"/>
  </g>
  <g fill="#4f6b3f" opacity="0.85">
    <ellipse cx="160" cy="372" rx="58" ry="16"/><ellipse cx="620" cy="452" rx="58" ry="16"/><ellipse cx="900" cy="190" rx="50" ry="14"/>
  </g>
  <g fill="#c7a469" stroke="#a8803f" stroke-width="2">
    <path d="M300 220 l40 -46 40 46 Z"/><path d="M740 380 l46 -52 46 52 Z"/>
  </g>
  <path d="M240 180 L480 348 L700 168 L860 372" fill="none" stroke="#8a5a2b" stroke-width="5"
        stroke-dasharray="14 12" stroke-linecap="round" opacity="0.55"/>
  <rect x="8" y="8" width="984" height="584" fill="none" stroke="#8a5a2b" stroke-width="5" rx="14" opacity="0.85"/>
</svg>
`,Ye=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="יבשת אמריקה">
  <defs>
    <linearGradient id="m-g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eccfa4"/><stop offset="100%" stop-color="#cfa272"/>
    </linearGradient>
    <linearGradient id="m-mesa" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c98a62"/><stop offset="100%" stop-color="#9e6443"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="600" fill="url(#m-g)"/>
  <g fill="url(#m-mesa)" stroke="#7d4c31" stroke-width="2.5">
    <path d="M60 260 h150 l16 26 v70 h-182 v-70 Z"/>
    <path d="M560 160 h190 l18 28 v64 h-226 v-64 Z"/>
    <path d="M300 470 h120 l14 22 v58 h-148 v-58 Z"/>
  </g>
  <path d="M-10 356 C130 330 220 392 340 372 C460 352 540 300 660 320 C780 340 880 300 1010 320"
        fill="none" stroke="#7fa9c4" stroke-width="14" stroke-linecap="round" opacity="0.8"/>
  <g stroke="#3f6b3c" stroke-width="9" stroke-linecap="round" fill="none">
    <path d="M150 520 v-56 M150 492 h-22 v-22 M150 504 h24 v-26"/>
    <path d="M820 500 v-50 M820 476 h-20 v-20 M820 486 h22 v-24"/>
    <path d="M470 120 v-44 M470 100 h-18 v-18"/>
  </g>
  <g fill="#8a6a4a" opacity="0.5">
    <ellipse cx="240" cy="180" rx="9" ry="5"/><ellipse cx="620" cy="470" rx="11" ry="6"/><ellipse cx="900" cy="250" rx="8" ry="5"/>
  </g>
  <path d="M260 384 L500 192 L720 360 L860 180" fill="none" stroke="#8a5a2b" stroke-width="5"
        stroke-dasharray="14 12" stroke-linecap="round" opacity="0.55"/>
  <rect x="8" y="8" width="984" height="584" fill="none" stroke="#8a5a2b" stroke-width="5" rx="14" opacity="0.85"/>
</svg>
`,Ke={asia:Pe,europe:Ue,africa:Ve,america:Ye};function We(t){const e=xe(t.id??"");if(!e)return v({title:"יבשת לא נמצאה"},s("p",{},"חזרה למפת העולם."));const n=m(),a=e.fortresses.map(r=>{if(r.home)return{x:r.x,y:r.y,label:r.name,sub:"הבית שלך",state:"home",icon:ce};const o=n.conquered.includes(r.id),i=o?"נכבש":r.starsNeeded>0?`${r.level} · ★ ${r.starsNeeded}`:String(r.level);return{x:r.x,y:r.y,label:r.name,sub:i,state:o?"done":"open",icon:ce,onClick:()=>w(`/battle/${r.id}`)}});return v({title:e.name,subtitle:e.domain},we(Ke[e.id],a),s("div",{class:"row"},de("שדרוג הגיבורים","/upgrades"),de("תפריט המשימות","/missions")))}function de(t,e){const n=s("button",{class:"btn",type:"button"},t);return n.addEventListener("click",()=>w(e)),n}function E(t,e){return Math.hypot(t.x-e.x,t.y-e.y)}function K(t,e){return t.units.filter(n=>n.alive&&n.side===e)}function ze(t,e){return t.units.filter(n=>n.alive&&n.side!==e)}function j(t,e){return e===null?void 0:t.units.find(n=>n.id===e)}function W(t,e){let n=null,a=1/0;for(const r of e){const o=E(t,r);(o<a-1e-9||Math.abs(o-a)<=1e-9&&n&&r.id<n.id)&&(n=r,a=o)}return n}const Je=2.2;function Xe(t,e){const n=ze(t,e.side);if(n.length===0)return{kind:"idle"};const a=W(e,n.filter(i=>i.stats.range<=1.5));if(e.stats.range>2&&a&&E(e,a)<Je){const i=e.x-a.x,l=e.y-a.y,c=Math.hypot(i,l)||1;return{kind:"move",x:e.x+i/c*3,y:e.y+l/c*3}}const o=W(e,n);return o?{kind:"attack",targetId:o.id}:{kind:"idle"}}function Qe(t){let e=t>>>0;const a=()=>{e=e+1831565813>>>0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296};return a.seed=t,a}function I(t,e,n){return e+t()*(n-e)}const z=1/30,fe=50;function et(t,e){return t*fe/(fe+e)}const he=.3,be=.45,Me={arrow:14,bolt:10,heal:12},tt=.85,nt=.15;function rt(t,e,n,a){const r=e==="player"?1:-1,o=e==="player"?3:n-3,i=a/2,l=[0,-1.6,1.6];return t.map((c,f)=>({x:o+(c.stats.range<=1.5?2*r:0),y:i+(l[f]??0)}))}function at(t){const e={width:t.arenaWidth??24,height:t.arenaHeight??14},n=Qe(t.seed),a={time:0,arena:e,units:[],projectiles:[],rng:n,winner:null,nextId:1},r=(o,i)=>{const l=rt(o,i,e.width,e.height);o.forEach((c,f)=>{const h=l[f];a.units.push({id:`${i}-${c.cls}-${f}`,side:i,cls:c.cls,name:c.name,gender:c.gender,x:h.x+I(n,-.6,.6),y:h.y+I(n,-.6,.6),hp:c.stats.hp,maxHp:c.stats.hp,stats:c.stats,order:{kind:"auto"},targetId:null,cooldown:I(n,0,1/c.stats.attackRate),healCooldown:I(n,0,c.stats.healRate??3),facing:i==="player"?1:-1,lastHitAt:-99,alive:!0})})};return r(t.player,"player"),r(t.enemy,"enemy"),a}function U(t,e,n){const a=j(t,e);a?.alive&&(a.order=n)}function ot(t,e=z){if(!t.winner){t.time+=e,st(t,e);for(const n of t.units)n.alive&&(n.cooldown=Math.max(0,n.cooldown-e),n.healCooldown=Math.max(0,n.healCooldown-e),it(t,n),lt(t,n,e));ft(t),ht(t),pt(t)}}function st(t,e){const n=[];for(const a of t.projectiles){const r=j(t,a.targetId);if(!r||!r.alive)continue;const o=r.x-a.x,i=r.y-a.y,l=Math.hypot(o,i),c=a.speed*e;if(l<=c){a.kind==="heal"?r.hp=Math.min(r.maxHp,r.hp+a.amount):qe(t,r,a.amount);continue}a.x+=o/l*c,a.y+=i/l*c,n.push(a)}t.projectiles=n}function it(t,e){const n=e.stats.healing;if(!n||e.healCooldown>0)return;const a=K(t,e.side).filter(o=>o.id!==e.id&&o.hp<o.maxHp*tt&&E(e,o)<=e.stats.range);let r=null;for(const o of a)(!r||o.hp/o.maxHp<r.hp/r.maxHp)&&(r=o);r&&(t.projectiles.push({id:`p${t.nextId++}`,kind:"heal",side:e.side,x:e.x,y:e.y,targetId:r.id,amount:n,speed:Me.heal}),e.healCooldown=e.stats.healRate??3)}function lt(t,e,n){const a=ct(t,e);if(a.kind==="idle"){e.targetId=null;return}if(a.kind==="move"){e.targetId=null,pe(e,a.x,a.y,n);return}const r=j(t,a.targetId);if(!r||!r.alive){e.targetId=null;return}if(e.targetId=r.id,E(e,r)>e.stats.range){pe(e,r.x,r.y,n);return}e.facing=r.x>=e.x?1:-1,e.cooldown<=0&&dt(t,e,r)}function ct(t,e){const n=e.order;if(n.kind==="move")if(E(e,n)<=nt)e.order={kind:"auto"};else return{kind:"move",x:n.x,y:n.y};if(e.order.kind==="attack"){const a=j(t,e.order.targetId);if(a?.alive)return{kind:"attack",targetId:a.id};e.order={kind:"auto"}}if(e.order.kind==="hold"){const a=t.units.filter(o=>o.alive&&o.side!==e.side&&E(e,o)<=e.stats.range),r=W(e,a);return r?{kind:"attack",targetId:r.id}:{kind:"idle"}}return Xe(t,e)}function pe(t,e,n,a){const r=e-t.x,o=n-t.y,i=Math.hypot(r,o);if(i<1e-6)return;const l=Math.min(i,t.stats.speed*a);t.x+=r/i*l,t.y+=o/i*l,Math.abs(r)>1e-6&&(t.facing=r>0?1:-1)}function dt(t,e,n){const a=et(e.stats.attack,n.stats.defense)*(1+I(t.rng,-he,he));if(e.cooldown=1/e.stats.attackRate,e.stats.range<=1.5){qe(t,n,a);return}t.projectiles.push({id:`p${t.nextId++}`,kind:e.cls==="mage"?"bolt":"arrow",side:e.side,x:e.x,y:e.y,targetId:n.id,amount:a,speed:Me[e.cls==="mage"?"bolt":"arrow"]})}function qe(t,e,n){e.hp-=n,e.lastHitAt=t.time,e.hp<=0&&(e.hp=0,e.alive=!1,e.targetId=null)}function ft(t){const e=t.units.filter(a=>a.alive),n=be*2;for(let a=0;a<e.length;a++)for(let r=a+1;r<e.length;r++){const o=e[a],i=e[r],l=i.x-o.x,c=i.y-o.y,f=Math.hypot(l,c);if(f>=n)continue;const h=(n-f)/2,p=f<1e-6?1:l/f,k=f<1e-6?0:c/f;o.x-=p*h,o.y-=k*h,i.x+=p*h,i.y+=k*h}}function ht(t){const e=be;for(const n of t.units)n.x=Math.min(t.arena.width-e,Math.max(e,n.x)),n.y=Math.min(t.arena.height-e,Math.max(e,n.y))}function pt(t){const e=K(t,"player").length,n=K(t,"enemy").length;e===0?t.winner="enemy":n===0&&(t.winner="player")}const N={warrior:{m:"לוחם",f:"לוחמת"},archer:{m:"קשת",f:"קשתית"},mage:{m:"מכשף",f:"מכשפה"}};function F(t,e){return N[t][e]}const O={warrior:N.warrior.m,archer:N.archer.m,mage:N.mage.m},Q={warrior:{hp:300,attack:25,defense:20,speed:2.2,range:1.2,attackRate:1},archer:{hp:180,attack:18,defense:8,speed:2.4,range:7,attackRate:.9},mage:{hp:150,attack:14,defense:5,speed:2,range:4.5,attackRate:.8,healing:20,healRate:3}},ut={hp:"חיים",attack:"התקפה",defense:"הגנה",speed:"מהירות",range:"טווח",healing:"ריפוי"},ee={warrior:["hp","attack","defense","speed"],archer:["hp","attack","defense","speed","range"],mage:["hp","attack","defense","speed","range","healing"]},te=[2,3,5,8,12,17,23,30],Ce=te.length,yt=.08;function gt(t){return t>=Ce?null:te[t]}function Ze(t){return 1+yt*t}const ue=8;function mt(t,e,n){return t*Ze(n)}function kt(t){let e=0;for(let n=0;n<Math.min(t,Ce);n++)e+=te[n];return e}const Le=["warrior","archer","mage"],vt={warrior:"שומר המבצר",archer:"קשת המגדל",mage:"מכשף החומה"},xt=["hp","attack","defense"];function wt(t,e){const a={...Q[t]};for(const r of ee[t]){const o=e[r]??0;if(o<=0)continue;const i=a[r];typeof i=="number"&&(a[r]=i*Ze(o))}return a}function bt(t){return Le.map(e=>{const n=t.heroes[e];return{cls:e,name:n.name||O[e],gender:n.gender,stats:wt(e,n.levels)}})}function Mt(t){return Le.map(e=>{const n={...Q[e]};for(const a of xt){const r=n[a];typeof r=="number"&&(n[a]=r*t)}return{cls:e,name:vt[e],gender:"m",stats:n}})}function qt(t,e,n){const a=X(t);return!a||a.fortress.home?null:{player:bt(e),enemy:Mt(a.fortress.difficulty),seed:n}}let G=null;function Ct(t){G=t}function Zt(t){return G&&G.fortressId===t?G:null}const Lt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 1400" preserveAspectRatio="none" aria-hidden="true">
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
`,Et=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,St=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,At=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,$t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
`,It=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
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
    <circle cx="47" cy="12" r="4.6" fill="#8fd4e8" stroke="#2f6fb3" stroke-width="1.5"/>
    <circle cx="45.8" cy="10.8" r="1.4" fill="#f2fbff" stroke="none"/>
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
`,Nt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#3b2a1a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M21 60 q11 -5 22 0 l-4 -31 q-7 -4 -14 0 Z" fill="currentColor"/>
    <path d="M27 29 q5 22 0 29 q6 2 10 0 q-5 -7 -4 -29 Z" fill="#e7e2d6" opacity="0.65"/>
    <path d="M24 46 q8 4 16 0" fill="none" stroke="#e0b84f" stroke-width="1.8"/>
    <path d="M22 57 q10 -4 20 0" fill="none" stroke="#e0b84f" stroke-width="1.6"/>
    <path d="M25 37 q7 4 14 0 l0 3.5 q-7 4 -14 0 Z" fill="#7a4a86"/>
    <path d="M39 33 l8 -3 1.5 4 -8 4 Z" fill="#e0bd93"/>
    <path d="M47 16 L47 52" fill="none" stroke="#7a5326" stroke-width="2.8"/>
    <path d="M47 16 q-4 -2 -4 -5 q4 1 4 5 Z" fill="#7a5326"/>
    <circle cx="47" cy="12" r="4.6" fill="#8fd4e8" stroke="#2f6fb3" stroke-width="1.5"/>
    <circle cx="45.8" cy="10.8" r="1.4" fill="#f2fbff" stroke="none"/>
    <circle cx="32" cy="21" r="7.6" fill="#eec097"/>
    <circle cx="35.4" cy="20.6" r="1" fill="#3b2a1a" stroke="none"/>
    <path d="M26 24 q6 7 12 0 q-1 13 -6 13 q-5 0 -6 -13 Z" fill="#e4e0d8"/>
    <path d="M32 7 q7 6 10 12 q-10 -4 -20 0 q3 -6 10 -12 Z" fill="currentColor"/>
    <path d="M22 19 q10 -4 20 0 q-10 4 -20 0 Z" fill="#5c3a66"/>
    <circle cx="35" cy="14" r="1.6" fill="#e0b84f" stroke="none"/>
  </g>
</svg>
`,b=100,Bt=2.6,Rt="http://www.w3.org/2000/svg",Tt={"warrior-f":Et,"warrior-m":St,"archer-f":At,"archer-m":$t,"mage-f":It,"mage-m":Nt};function Ee(t,e,n){const a=t.firstElementChild;a instanceof SVGSVGElement&&(a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("width",String(e)),a.setAttribute("height",String(n)),a.setAttribute("overflow","visible"))}function g(t,e={}){const n=document.createElementNS(Rt,t);for(const[a,r]of Object.entries(e))n.setAttribute(a,r);return n}function Gt(t,e){const n=g("svg",{class:"arena",viewBox:`0 0 ${t.arena.width*b} ${t.arena.height*b}`,preserveAspectRatio:"xMidYMid meet"}),a=g("g",{class:"arena-art"});a.innerHTML=Lt,Ee(a,t.arena.width*b,t.arena.height*b);const r=g("g",{class:"layer-ground"}),o=g("g",{class:"layer-units"}),i=g("g",{class:"layer-shots"});n.append(a,r,o,i);const l=new Map;for(const f of t.units){const h=Ft(f);l.set(f.id,h),r.append(h.ring),o.append(h.group)}const c=f=>{f.preventDefault();const h=n.getScreenCTM();if(!h)return;const p=new DOMPoint(f.clientX,f.clientY).matrixTransform(h.inverse()),k=p.x/b,M=p.y/b;let q=null,x=.9;for(const Z of t.units){if(!Z.alive)continue;const B=Math.hypot(Z.x-k,Z.y-M);B<x&&(x=B,q=Z)}e({x:k,y:M,unit:q})};return n.addEventListener("pointerdown",c),{el:n,update(f,h){for(const p of f.units)l.get(p.id)?.update(p,f.time,h.has(p.id));Ot(i,f.projectiles)},destroy(){n.removeEventListener("pointerdown",c),n.remove()}}}function Ft(t){const e=g("ellipse",{class:`ring ${t.side}`,rx:"42",ry:"18",cx:"0",cy:"0"});e.style.display="none";const n=g("g",{class:`unit ${t.side} ${t.cls}`}),a=g("ellipse",{class:"shadow",rx:"34",ry:"13",cx:"0",cy:"0"}),r=g("g",{class:"sprite"});r.innerHTML=Tt[`${t.cls}-${t.gender}`]??"",Ee(r,64,64);const o=g("rect",{class:"hp-bg",x:"-42",y:"-186",width:"84",height:"13",rx:"6.5"}),i=g("rect",{class:"hp",x:"-39.5",y:"-183.5",width:"79",height:"8",rx:"4"});return n.append(a,r,o,i),{group:n,ring:e,update(l,c,f){const h=l.x*b,p=l.y*b;n.setAttribute("transform",`translate(${h.toFixed(1)} ${p.toFixed(1)})`),e.setAttribute("cx",h.toFixed(1)),e.setAttribute("cy",p.toFixed(1)),e.style.display=f&&l.alive?"":"none";const k=Bt*(l.alive?1:.92),M=l.alive?"":`rotate(${(l.facing*-78).toFixed(0)}) `;r.setAttribute("transform",`${M}scale(${(l.facing*k).toFixed(3)} ${k.toFixed(3)}) translate(-32 -60)`);const q=Math.max(0,l.hp/l.maxHp);i.setAttribute("width",(79*q).toFixed(1));const x=c-l.lastHitAt<.18;n.classList.toggle("hurt",x&&l.alive),n.classList.toggle("dead",!l.alive),o.style.display=l.alive?"":"none",i.style.display=l.alive?"":"none"}}}function Ot(t,e){for(;t.childNodes.length>e.length;)t.lastChild?.remove();for(;t.childNodes.length<e.length;)t.append(g("g",{class:"shot"}));e.forEach((n,a)=>{const r=t.childNodes[a];r.setAttribute("class",`shot ${n.kind}`),r.setAttribute("transform",`translate(${(n.x*b).toFixed(1)} ${(n.y*b).toFixed(1)})`),r.childNodes.length===0&&(n.kind==="arrow"?r.append(g("rect",{x:"-18",y:"-2.5",width:"36",height:"5",rx:"2.5"})):r.append(g("circle",{r:"13"})))})}function Ht(t){const e=X(t.id??""),n=e?qt(e.fortress.id,m(),Date.now()&65535||1):null;if(!e||!n)return v({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:a,fortress:r}=e,o=at(n),i=new Set(o.units.filter(d=>d.side==="player").map(d=>d.id)),l=jt(new URLSearchParams(location.search).get("speed"));let c=!1,f=!1,h=0,p=0,k=0;window.__battle=o;const M=Gt(o,d=>$e(d)),q=s("div",{class:"stage"});q.append(M.el);const x=s("div",{class:"overlay"});q.append(x);const Z=()=>{x.replaceChildren(s("div",{class:"panel"},s("h2",{},r.name),s("p",{},`רמת האויב: ${r.level}. שלושת הגיבורים שלך מול שלושת מגיני המבצר.`),s("p",{class:"muted"},"הקשה על גיבור בוחרת אותו, הקשה על אויב שולחת אותו לתקוף, והקשה על הקרקע שולחת אותו לנוע. אפשר לבחור את כולם בכפתור שלמטה."),Se())),x.classList.remove("hidden")},B=d=>{Ct({fortressId:r.id,won:d,seconds:o.time,heroes:oe.map(y=>({cls:y.cls,name:y.name||F(y.cls,y.gender),alive:y.alive,health:Math.max(0,y.hp/y.maxHp)}))});const u=s("button",{class:"btn primary",type:"button"},"המשך");u.addEventListener("click",()=>w(`/result/${r.id}/${d?"win":"lose"}`)),x.replaceChildren(s("div",{class:"panel"},s("h2",{},d?"המבצר נכבש":"הקרב אבד"),s("p",{},d?"כל מגיני המבצר הובסו.":"כל הגיבורים שלך נפלו. אפשר לשדרג ולנסות שוב."),u)),x.classList.remove("hidden")};function Se(){const d=s("button",{class:"btn primary",type:"button"},"התחל קרב");return d.addEventListener("click",()=>{x.classList.add("hidden"),c=!0,p=performance.now()}),d}const ne=s("div",{class:"portraits"}),R=s("button",{class:"btn small",type:"button"},"השהה"),re=s("button",{class:"btn small",type:"button"},"בחר הכול"),ae=s("button",{class:"btn small",type:"button"},"עמוד במקום");R.addEventListener("click",()=>{f||(c=!c,p=performance.now(),R.textContent=c?"השהה":"המשך")}),re.addEventListener("click",()=>{i.clear();for(const d of o.units)d.side==="player"&&d.alive&&i.add(d.id);S()}),ae.addEventListener("click",()=>{for(const d of i)U(o,d,{kind:"hold"})});const oe=o.units.filter(d=>d.side==="player"),Ae=oe.map(d=>{const u=s("span",{class:"portrait-fill"}),y=s("button",{class:`portrait ${d.cls}`,type:"button"},s("span",{class:"portrait-name"},d.name||F(d.cls,d.gender)),s("span",{class:"portrait-bar"},u));return y.addEventListener("click",()=>{d.alive&&(i.clear(),i.add(d.id),S())}),ne.append(y),{unit:d,button:y,fill:u}});function S(){for(const d of Ae){const u=Math.max(0,d.unit.hp/d.unit.maxHp);d.fill.style.width=`${(u*100).toFixed(0)}%`,d.button.classList.toggle("selected",i.has(d.unit.id)),d.button.classList.toggle("dead",!d.unit.alive)}}S();function $e(d){if(!c)return;const u=d.unit;if(u&&u.side==="player"&&u.alive){i.clear(),i.add(u.id),S();return}if(i.size!==0)for(const y of i)u&&u.side==="enemy"&&u.alive?U(o,y,{kind:"attack",targetId:u.id}):U(o,y,{kind:"move",x:d.x,y:d.y})}const se=d=>{d.code==="Space"&&(d.preventDefault(),R.click())};addEventListener("keydown",se);const ie=()=>{if(h=requestAnimationFrame(ie),c&&!f){const d=performance.now();k+=Math.min(.1,(d-p)/1e3)*l,p=d;let u=0;for(;k>=z&&u<8*l;)Ie(),k-=z,u++}M.update(o,i)},Ie=()=>{ot(o),o.winner&&!f&&(f=!0,c=!1,B(o.winner==="player")),S()};Z(),h=requestAnimationFrame(ie);const le=v({title:r.name,subtitle:`${a.name} · ${a.domain}`,showStars:!1},q,s("div",{class:"hud"},ne,s("div",{class:"hud-actions"},re,ae,R)));return{el:le.el,destroy(){cancelAnimationFrame(h),removeEventListener("keydown",se),M.destroy(),le.destroy()}}}function jt(t){const e=Number(t??1);return!Number.isFinite(e)||e<=0?1:Math.min(16,Math.max(1,e))}function _t(t){const e=X(t.id??"");if(!e)return v({title:"מבצר לא נמצא"},s("p",{},"חזרה למפת העולם."));const{continent:n,fortress:a}=e,r=t.outcome==="win",o=Zt(a.id),i=!m().flags.sawUpgrades;L(h=>{r&&!h.conquered.includes(a.id)&&h.conquered.push(a.id),i&&(h.flags.sawUpgrades=!0,h.stars+=ue)});const l=[];o&&l.push(s("section",{class:"card"},s("h3",{},"הגיבורים שלך"),...o.heroes.map(h=>s("div",{class:"stat-row"},s("span",{class:"stat-name"},h.name),s("span",{class:"stat-value"},h.alive?`${Math.round(h.health*100)}% חיים`:"נפל"))),s("p",{class:"muted"},`אורך הקרב: ${Math.round(o.seconds)} שניות`))),i&&l.push(s("p",{class:"notice"},`נפתחה אפשרות שדרוג הגיבורים, וקיבלת ${ue} כוכבים להתחלה. מכאן ואילך כוכבים מתקבלים רק מפתרון משימות.`));const c=n.fortresses.filter(h=>!h.home&&!m().conquered.includes(h.id)).length;r&&c===0?l.push(s("p",{class:"notice"},`כל המבצרים ביבשת ${n.name} נכבשו.`)):r||l.push(s("p",{class:"notice"},"האויב כאן חזק מדי בשלב הזה. אפשר לפתור משימות, לשדרג את הגיבורים ולחזור לקרב."));const f=s("div",{class:"row"},T(r?"שדרוג הגיבורים":"לשדרוג הגיבורים","/upgrades",!0),T("קרב נוסף באותו מבצר",`/battle/${a.id}`),T("חזרה ליבשת",`/continent/${n.id}`),T("תפריט המשימות","/missions"));return v({title:r?"המבצר נכבש":"הקרב אבד",subtitle:`${a.name} · ${xe(n.id)?.name??""}`,showBack:!1},...l,f)}function T(t,e,n=!1){const a=s("button",{class:n?"btn primary":"btn",type:"button"},t);return a.addEventListener("click",()=>w(e)),a}function Dt(t){let e=0;for(const n of Object.keys(t.heroes)){const a=t.heroes[n];for(const r of ee[n])e+=kt(a.levels[r]??0)}return e}function Pt(t,e,n){const a=()=>{l.remove(),removeEventListener("keydown",r)},r=c=>{c.key==="Escape"&&a()},o=n.map(c=>{const f=s("button",{class:c.primary?"btn primary":"btn",type:"button"},c.label);return f.addEventListener("click",()=>{a(),c.onClick()}),f}),i=s("div",{class:"modal",role:"dialog","aria-modal":"true"},s("h2",{},t),s("p",{},e),s("div",{class:"modal-actions"},...o)),l=s("div",{class:"backdrop"},i);l.addEventListener("click",c=>{c.target===l&&a()}),addEventListener("keydown",r),document.body.append(l),o.find(c=>c.classList.contains("primary"))?.focus()}function Ut(){if(!m().flags.sawUpgrades)return v({title:"שדרוג הגיבורים"},s("p",{class:"notice"},"אפשרות השדרוג נפתחת אחרי הקרב הראשון."));const t=s("div",{class:"stack"}),e=()=>{const n=m();t.replaceChildren(...Object.keys(O).map(a=>{const r=n.heroes[a],o=ee[a].map(l=>Vt(a,l,e)),i=F(a,r.gender);return s("section",{class:"card hero"},s("h3",{},r.name?`${r.name} · ${i}`:i),s("div",{class:"stats"},...o))}))};return e(),v({title:"שדרוג הגיבורים",subtitle:`כל דרגה מוסיפה שמונה אחוזים לתכונה · הושקעו עד כה ★ ${Dt(m())}`},t)}function Vt(t,e,n){const o=m().heroes[t].levels[e]??0,i=Q[t][e]??0,l=mt(i,e,o),c=gt(o),f=s("button",{class:"btn small",type:"button"},c===null?"מרבי":`★ ${c}`);return c===null&&f.setAttribute("disabled","true"),f.addEventListener("click",()=>{if(c!==null){if(m().stars<c){Pt("רוצה עוד כוכבים?","כוכבים מתקבלים על פתרון משימות במתמטיקה. אפשר לגשת לתפריט המשימות ולאסוף עוד.",[{label:"לא עכשיו",onClick:()=>{}},{label:"לתפריט המשימות",primary:!0,onClick:()=>w("/missions")}]);return}L(h=>{h.stars-=c;const p=h.heroes[t];p.levels[e]=(p.levels[e]??0)+1}),n()}}),s("div",{class:"stat-row"},s("span",{class:"stat-name"},ut[e]),s("span",{class:"stat-value"},Yt(l)),s("span",{class:"stat-level"},`דרגה ${o}`),f)}function Yt(t){return t>=10?String(Math.round(t)):t.toFixed(1)}const Kt={topics(t){return[]},missions(t){return[]},onSolved(t,e){return 0}};let Wt=Kt;function zt(){const t=H.map(e=>{const n=new Set(Wt.topics(e.id).map(r=>r.id)),a=e.topics.map(r=>{const o=n.has(r.id);return s("li",{class:`topic${o?"":" soon"}`},s("span",{class:"topic-name"},r.name),s("span",{class:"badge"},o?"זמין":"בקרוב"))});return s("section",{class:"card topics"},s("h3",{},`${e.name} · ${e.domain}`),s("ul",{},...a))});return v({title:"תפריט המשימות",subtitle:"פתרון משימות מזכה בכוכבים, וכוכבים משדרגים את הגיבורים"},s("p",{class:"notice"},"המשימות עצמן טרם נכתבו. התפריט מציג את נושאי הלימוד של כיתה ז לפי סדר ההוראה, וכל נושא ייפתח כאן ברגע שיוכנסו לו משימות."),s("div",{class:"stack"},...t))}const J={warrior:{m:["גדעון","בועז","אריאל"],f:["לביאה","יעל","תמר"]},archer:{m:["עידו","ירון","איתי"],f:["אילה","שחר","נועה"]},mage:{m:["אבנר","נדב","רועי"],f:["הדס","מאיה","ליאור"]}},Jt=["m","f"];function Xt(){const t=s("div",{class:"stack"}),e=()=>{const a=m();t.replaceChildren(...Object.keys(O).map(r=>Qt(r,a.heroes[r].gender,a.heroes[r].name,e)))};e();const n=s("button",{class:"btn primary",type:"button"},"קדימה למפה");return n.addEventListener("click",()=>{L(a=>{for(const r of Object.keys(O)){const o=a.heroes[r];o.name.trim()||(o.name=J[r][o.gender][0])}a.flags.setupDone=!0}),w("/")}),v({title:"הגיבורים שלי",subtitle:"בחר מין ושם לכל אחד משלושת הגיבורים",showBack:m().flags.setupDone},t,s("div",{class:"row"},n))}function Qt(t,e,n,a){const r=s("input",{class:"name-input",type:"text",maxlength:"14",placeholder:J[t][e][0],value:n,"aria-label":`שם ה${F(t,e)}`});r.addEventListener("input",()=>{L(l=>{l.heroes[t].name=r.value})});const o=l=>{const c=s("button",{class:`btn small${e===l?" primary":""}`,type:"button"},N[t][l]);return c.addEventListener("click",()=>{L(f=>{f.heroes[t].gender=l}),a()}),c},i=J[t][e].map(l=>{const c=s("button",{class:"chip",type:"button"},l);return c.addEventListener("click",()=>{L(f=>{f.heroes[t].name=l}),a()}),c});return s("section",{class:"card hero-setup"},s("div",{class:"setup-row"},...Jt.map(o)),s("div",{class:"setup-row"},r),s("div",{class:"setup-row chips"},...i))}C("/",De);C("/continent/:id",We);C("/battle/:id",Ht);C("/result/:id/:outcome",_t);C("/upgrades",Ut);C("/missions",zt);C("/setup",Xt);Ne(()=>{const t=s("button",{class:"btn primary",type:"button"},"למפת העולם");return t.addEventListener("click",()=>w("/")),v({title:"הדף לא נמצא",showBack:!1},t)});!m().flags.setupDone&&(location.hash===""||location.hash==="#/")&&(location.hash="/setup");const ye=document.getElementById("app");ye&&Ge(ye);
