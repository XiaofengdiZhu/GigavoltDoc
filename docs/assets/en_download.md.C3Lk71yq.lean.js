import{d as f,u as w,v as x,o as i,c,k as m,G as y,e as _}from"./chunks/framework.C-GLQy3h.js";import{d as v,Q as D}from"./chunks/downloadQuotes.BLsJAS_o.js";import{l as u}from"./chunks/locale.DUWwBpDx.js";const C={key:0,style:{display:"flex","justify-content":"center","max-width":"480px"}},N=JSON.parse('{"title":"MOD Download","description":"","frontmatter":{"title":"MOD Download","layout":"home","hero":{"name":"MOD Download ","text":" ","tagline":" ","actions":[{"theme":"brand","text":"Gigavolt"},{"theme":"brand","text":"Gigavolt.Expand"},{"theme":"alt","text":"Gigavolt.Helper"},{"theme":"alt","text":"History Versions","link":"https://github.com/XiaofengdiZhu/Gigavolt/releases"},{"theme":"alt","text":"Read Doc","link":"/en/before_start"}]}},"headers":[],"relativePath":"en/download.md","filePath":"en/download.md"}'),b={name:"en/download.md"},G=f({...b,setup(B){var d;const h=w(),s=((d=globalThis.document)==null?void 0:d.location.href)??"",g=256;return x(()=>{document.getElementsByClassName("clip")[0].classList.add("download");let o=document.getElementsByClassName("tagline")[0];o.textContent=u("DownloadPage","FetchingDownloadUrl");let e=document.getElementsByClassName("action");e[0].style.cursor="wait",e[1].style.cursor="wait";const p=u("DownloadPage","FetchDownloadUrlFailed");fetch("https://api.github.com/repos/XiaofengdiZhu/Gigavolt/releases/latest").then(t=>t.json()).then(t=>{let r=v[h.lang.value];o.textContent=r[Math.floor(Math.random()*r.length)];let a=document.createElement("span");a.classList.add("VPBadge"),a.classList.add("tip"),a.style.verticalAlign="super",a.textContent=t.tag_name,document.getElementsByClassName("name")[0].appendChild(a);for(let l of t.assets){let n=0;l.name.includes("Expand")?n=1:l.name.includes("Helper")&&(n=2),e[n].style.cursor="pointer",e[n].firstChild.href=l.browser_download_url}}).catch(t=>{o.textContent=p,e[0].style.cursor="not-allowed",e[1].style.cursor="not-allowed",t&&console.error(t)})}),(o,e)=>(i(),c("div",{"data-pagefind-body":!0},[m(s).length>0?(i(),c("div",C,[y(D,{value:m(s),level:"M","render-as":"svg",size:g,style:{padding:"16px","background-color":"white"}},null,8,["value"])])):_("",!0)]))}});export{N as __pageData,G as default};
