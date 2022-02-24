(function(){if(!("onload"in XMLHttpRequest.prototype)||navigator.standalone)return;const j=!1,K=["standalone","fullscreen","minimal-ui"],Q="#f8f9fa",R=24,Y="HelveticaNeue-CondensedBold",v=128,_=48,B=20,Z=120,M=navigator.userAgent||"",S=navigator.vendor&&navigator.vendor.indexOf("Apple")!==-1&&(M.indexOf("Mobile/")!==-1||"standalone"in navigator)||j,tt=Boolean(M.match(/(MSIE |Edge\/|Trident\/)/)),et=typeof Windows<"u";let m,w;try{w=sessionStorage}catch{}w=w||{};function I(t){try{return document.head.querySelector(t)}catch{return null}}function y(t,e){const o="__pwacompat_"+t;return e!==void 0&&(w[o]=e),w[o]}function L(){m=I('link[rel="manifest"]');const t=m?m.href:"";if(!t)throw`can't find <link rel="manifest" href=".." />'`;const e=nt([t,location]),o=y("manifest");if(o){try{const i=JSON.parse(o);D(i,e)}catch(i){console.warn("PWACompat error",i)}return}const r=new XMLHttpRequest;r.open("GET",t),r.withCredentials=m.getAttribute("crossorigin")==="use-credentials",r.onload=()=>{try{const i=JSON.parse(r.responseText);y("manifest",r.responseText),D(i,e)}catch(i){console.warn("PWACompat error",i)}},r.send(null)}function nt(t){for(let e=0;e<t.length;++e){const o=t[e];try{return new URL("",o),r=>new URL(r||"",o).toString()}catch{}}return e=>e||""}function k(t,e,o){if(I(t+o))return;const r=document.createElement(t);for(const i in e)r.setAttribute(i,e[i]);return document.head.appendChild(r),r}function c(t,e){e&&(e===!0&&(e="yes"),k("meta",{name:t,content:e},`[name="${t}"]`))}function ot(t){const e=t.sizes.split(/\s+/g).map(o=>o==="any"?1/0:parseInt(o,10)||0);return{src:t.src,type:t.type,sizes:t.sizes,largestSize:Math.max.apply(null,e),purpose:t.purpose?t.purpose.split(/\s+/g):["any"]}}function D(t,e){const o=(t.icons||[]).map(ot).sort((n,a)=>a.largestSize-n.largestSize),r=o.filter(n=>n.purpose.indexOf("any")>-1),i=o.filter(n=>n.purpose.indexOf("maskable")>-1),h=(i.length>0?i:r).map(n=>{const a={rel:"icon",href:e(n.src),sizes:n.sizes},s=`[sizes="${n.sizes}"]`;if(k("link",a,'[rel="icon"]'+s),!!S&&!(n.largestSize<Z))return a.rel="apple-touch-icon",k("link",a,'[rel="apple-touch-icon"]'+s)}).filter(Boolean),g=I('meta[name="viewport"]'),lt=g&&g.content||"",pt=Boolean(lt.match(/\bviewport-fit\s*=\s*cover\b/)),U=t.display,T=K.indexOf(U)!==-1;if(c("mobile-web-app-capable",T),st(t.theme_color||"black",pt),tt){c("application-name",t.short_name),c("msapplication-tooltip",t.description),c("msapplication-starturl",e(t.start_url||".")),c("msapplication-navbutton-color",t.theme_color);const n=r[0];n&&c("msapplication-TileImage",e(n.src)),c("msapplication-TileColor",t.background_color)}if(c("theme-color",t.theme_color),!S){const n=at(t.orientation);c("x5-orientation",n),c("screen-orientation",n),U==="fullscreen"?(c("x5-fullscreen","true"),c("full-screen","yes")):T&&(c("x5-page-mode","app"),c("browsermode","application"));return}const x=t.background_color||Q,ut=W(x),P=rt(t.related_applications);P&&c("apple-itunes-app",`app-id=${P}`),c("apple-mobile-web-app-capable",T),c("apple-mobile-web-app-title",t.short_name||t.name);function $(n,a,s,f){const l=window.devicePixelRatio,p=C({width:n*l,height:a*l});if(p.scale(l,l),p.fillStyle=x,p.fillRect(0,0,n,a),p.translate(n/2,(a-B)/2),f){let d=f.width/l,u=f.height/l;u>v&&(d/=u/v,u=v),d>=_&&u>=_&&(p.drawImage(f,d/-2,u/-2,d,u),p.translate(0,u/2+B))}p.fillStyle=ut?"white":"black",p.font=`${R}px ${Y}`;const ft=getComputedStyle(m);p.font=ft.getPropertyValue("--pwacompat-splash-font");const E=t.name||t.short_name||document.title,O=p.measureText(E),J=O.actualBoundingBoxAscent||R;if(p.translate(0,J),O.width<n*.8)p.fillText(E,O.width/-2,0);else{const d=E.split(/\s+/g);for(let u=1;u<=d.length;++u){const G=d.slice(0,u).join(" "),X=p.measureText(G).width;(u===d.length||X>n*.6)&&(p.fillText(G,X/-2,0),p.translate(0,J*1.2),d.splice(0,u),u=0)}}return()=>{const d=p.canvas.toDataURL();return z(s,d),d}}function z(n,a){const s=document.createElement("link");s.setAttribute("rel","apple-touch-startup-image"),s.setAttribute("media",`(orientation: ${n})`),s.setAttribute("href",a),document.head.appendChild(s)}const N=y("iOS");if(N)try{const n=JSON.parse(N);z("portrait",n.p),z("landscape",n.l),h.forEach(a=>{const s=n.i[a.href];s&&(a.href=s)});return}catch{}const b={i:{}};function V(n,a){const s=window.screen,f=$(s.width,s.height,"portrait",n),l=$(s.height,s.width,"landscape",n);setTimeout(()=>{b.p=f(),setTimeout(()=>{b.l=l(),a()},10)},10)}function dt(n){let a=h.length+1;const s=()=>{--a||n()};s(),h.forEach(f=>{const l=new Image;l.crossOrigin="anonymous",l.onerror=s,l.onload=()=>{l.onload=null,f.href=F(l,x,!0),b.i[l.src]=f.href,s()},l.src=f.href})}function A(){y("iOS",JSON.stringify(b))}function q(){const n=h.shift();if(!n){V(null,A);return}const a=new Image;a.crossOrigin="anonymous",a.onerror=()=>void q(),a.onload=()=>{a.onload=null,V(a,()=>{const s=t.background_color&&F(a,x);s?(n.href=s,b.i[a.src]=s,dt(A)):A()})},a.src=n.href}q()}function rt(t){let e;return(t||[]).filter(o=>o.platform==="itunes").forEach(o=>{if(o.id)e=o.id;else{const r=o.url.match(/id(\d+)/);r&&(e=r[1])}}),e}function at(t){const e=String(t||"").substr(0,3);return{por:"portrait",lan:"landscape"}[e]||""}function st(t,e){if(!(S||et))return;const o=W(t);if(S)c("apple-mobile-web-app-status-bar-style",e?"black-translucent":o?"black":"default");else{const r=it();if(!r)return;const i=o?255:0;r.foregroundColor={r:i,g:i,b:i,a:255},r.backgroundColor=ct(t)}}function it(){try{return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar}catch{}}function ct(t){const e=H(t);return{r:e[0],g:e[1],b:e[2],a:e[3]}}function H(t){const e=C();return e.fillStyle=t,e.fillRect(0,0,1,1),e.getImageData(0,0,1,1).data||[]}function W(t){const o=H(t).map(h=>{const g=h/255;return g<.03928?g/12.92:Math.pow((g+.055)/1.055,2.4)}),r=.2126*o[0]+.7152*o[1]+.0722*o[2];return Math.abs(1.05/(r+.05))>3}function F(t,e,o=!1){const r=C(t);if(r.drawImage(t,0,0),!(!o&&r.getImageData(0,0,1,1).data[3]===255))return r.globalCompositeOperation="destination-over",r.fillStyle=e,r.fillRect(0,0,t.width,t.height),r.canvas.toDataURL()}function C({width:t,height:e}={width:1,height:1}){const o=document.createElement("canvas");return o.width=t,o.height=e,o.getContext("2d")}document.readyState==="complete"?L():window.addEventListener("load",L)})();
