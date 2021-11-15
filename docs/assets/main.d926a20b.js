import{p as S,s as E}from"./vendor.dd6320a3.js";const k=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};k();const b="modulepreload",y={},C="/",g=function(s,o){return!o||o.length===0?s():Promise.all(o.map(e=>{if(e=`${C}${e}`,e in y)return;y[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":b,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t)return new Promise((c,d)=>{a.addEventListener("load",c),a.addEventListener("error",d)})})).then(()=>s())},x="https://chromestatus.com/data/timeline/featurepopularity?bucket_id=",A="https://chromestatus.com/metrics/feature/timeline/popularity/",v="No data",_=document.querySelector("tbody"),i=document.querySelector("meter"),p=document.querySelector(".meter"),w=document.querySelector("label"),O=document.querySelector("code"),N=document.querySelector("template");let l=0,m=0;const P=(n,s)=>{const e=n.target.closest("svg").nextElementSibling,t=new Date(s.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});e.hidden=!1,e.textContent=`On ${t} on ${s.value.toFixed(6)}% of pages`,e.style.top=`${n.offsetY}px`,e.style.left=`${n.offsetX+20}px`},q=n=>{const o=n.target.closest("svg").nextElementSibling;o.hidden=!0},$=async(n,s)=>{let o=await fetch(x+s).then(e=>e.json());if(o=o.map(e=>({date:e.date,value:e.day_percentage*100})),o.filter(e=>e.value!==0).length===0){const e=n.parentNode.parentNode;n.parentNode.remove(),e.textContent=v;return}E.sparkline(n,o,{onmousemove:P,onmouseout:q}),n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.style.display="block"};window.addEventListener("load",async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let n=await Promise.all(Object.entries(S).map(o=>new Promise(async e=>{o[1].supported=await o[1].supported,o[1].supported&&m++,o[1].supported!==void 0&&l++,e(o)})));n=n.sort((o,e)=>!o[1].supported&&e[1].supported?1:o[1].supported&&!e[1].supported?-1:0),n=[!0,!1,void 0].map(o=>n.filter(e=>e[1].supported===o).sort((e,t)=>(e=e[0].toLowerCase(),t=t[0].toLowerCase(),e>t?1:e<t?-1:0))).flat();for(const[o,e]of n){const t=document.createElement("tr");_.append(t);const r=document.createElement("td"),a=document.createElement("td"),c=document.createElement("td");t.append(r),t.append(a),t.append(c);const d=document.createElement("a");if(d.textContent=o,d.href=e.documentation,r.append(d),a.classList.add("icon"),a.textContent=e.supported?"\u2705 Yes":e.supported===void 0?"\u{1F937} Unknown":"\u{1F6AB} No",e.blinkFeatureID){const h=N.content.cloneNode(!0),f=h.querySelector("svg");f.style.display="none";const L=h.querySelector("span"),u=document.createElement("a");u.href=`${A}${e.blinkFeatureID}`,c.append(u),u.append(f),u.append(L),$(f,e.blinkFeatureID)}else c.textContent=v}_.parentNode.hidden=!1;const s=`${Math.floor(m/l*100)}%`;i.max=l,i.low=Math.floor(.2*l),i.high=Math.floor(.8*l),i.optimum=Math.floor(.9*l),i.value=m,p.querySelector("span").style.width=s,i.value<i.low?p.classList.add("red"):i.value<=i.low&&i.value<=i.high?p.classList.add("orange"):p.classList.add("green"),w.textContent=s,w.parentNode.hidden=!1,O.textContent=navigator.userAgent,"share"in navigator&&g(()=>import("./share.39775611.js"),[]),/Apple/.test(navigator.vendor)&&g(()=>import("./pwacompat.e2d4ab51.js"),[])});