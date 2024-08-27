import{l as j}from"./locale.CB2Y0rC6.js";import{d as Q,s as I,y as Y,o as T,c as E,j as o,n as r,P as m,e as z,a as N,t as W,k as Z,_ as P}from"./framework.CZYz2WcB.js";const J={style:{width:"248px",padding:"16px",border:"var(--vp-c-border) solid 1px","border-radius":"8px",margin:"0 auto","background-color":"var(--vp-c-bg)"}},K={style:{display:"flex","justify-content":"space-between","align-items":"center"}},ee={style:{width:"calc(100% - 42px)"}},te={key:0,style:{width:"20px",height:"20px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960"},le=o("path",{fill:"currentColor",d:"M144-180v-112q0-14.22 5-27.11Q154-332 165-343l321-321-54-53 51-51 72 72 110.22-110.22q4.45-4.45 11.11-7.11Q683-816 691-816t15 2.5q7 2.5 12 7.5l87 88q4.55 5.83 7.27 12.64 2.73 6.8 2.73 14.58t-2.66 14.44q-2.67 6.66-7.11 11.1L696-556l72 73-51 51-54-54-320 321q-11 11-23.89 16T292-144H180q-15.3 0-25.65-10.35Q144-164.7 144-180Zm72-32h76l320-320-75-76-321 320v76Z"},null,-1),ne=[le],se={style:{display:"flex","justify-content":"space-between","margin-top":"16px"}},oe={style:{position:"relative",width:"44px"}},ae=o("span",{style:{opacity:"0.6"}},"A",-1),ue=[ae],re=["value"],ie={style:{position:"relative",width:"44px"}},de=["value"],pe={style:{position:"relative",width:"44px"}},ce=["value"],ve={style:{position:"relative",width:"44px"}},he=["value"],ge={style:{position:"relative",width:"100%","margin-top":"16px"}},fe=["value"],ye=Q({__name:"UintColorConverter",setup(Me){const n=I({Red:0,RedHex:"",Green:0,GreenHex:"",Blue:0,BlueHex:"",Alpha:0,AlphaHex:"",VoltageHex:"",Hue:0,Saturation:0,Value:0,RGBResult:"",RGBAResult:"",highContrastResult:""}),k=I(!1),G=(e=null,t=null,l=null)=>{e!==null?n.value.Hue=e:e=n.value.Hue,t!==null?n.value.Saturation=t:t=n.value.Saturation,l!==null?n.value.Value=l:l=n.value.Value;let s=O(e,t,l);n.value.Red=s[0],n.value.RedHex=s[0].toString(16).toUpperCase(),n.value.Green=s[1],n.value.GreenHex=s[1].toString(16).toUpperCase(),n.value.Blue=s[2],n.value.BlueHex=s[2].toString(16).toUpperCase(),n.value.VoltageHex=H(n.value.Red,n.value.Green,n.value.Blue,n.value.Alpha),n.value.RGBResult=`rgb(${s[0]}, ${s[1]},${s[2]})`,n.value.RGBAResult=`rgba(${s[0]}, ${s[1]}, ${s[2]}, ${n.value.Alpha})`,n.value.highContrastResult=B(s[0],s[1],s[2],n.value.Alpha)},U=e=>{n.value.Alpha=e,n.value.AlphaHex=Math.round(e*255).toString(16).toUpperCase(),n.value.VoltageHex=H(n.value.Red,n.value.Green,n.value.Blue,e),n.value.RGBAResult=`rgba(${n.value.Red}, ${n.value.Green}, ${n.value.Blue}, ${e})`,n.value.highContrastResult=B(n.value.Red,n.value.Green,n.value.Blue,e)},g=(e=null,t=null,l=null,s=null)=>{e!==null?(n.value.Red=e,n.value.RedHex=e.toString(16).toUpperCase()):e=n.value.Red,t!==null?(n.value.Green=t,n.value.GreenHex=t.toString(16).toUpperCase()):t=n.value.Green,l!==null?(n.value.Blue=l,n.value.BlueHex=l.toString(16).toUpperCase()):l=n.value.Blue,s!==null?(n.value.Alpha=s,n.value.AlphaHex=Math.round(s*255).toString(16).toUpperCase()):s=n.value.Alpha,n.value.VoltageHex=H(e,t,l,s),n.value.RGBResult=`rgb(${e}, ${t}, ${l})`,n.value.RGBAResult=`rgba(${e}, ${t}, ${l}, ${s})`,n.value.highContrastResult=B(e,t,l,s);let a=D(e,t,l);n.value.Hue=a[0],n.value.Saturation=a[1],n.value.Value=a[2]},L=()=>{globalThis.EyeDropper&&new globalThis.EyeDropper().open().then(e=>{let t=X(e.sRGBHex);g(t[0],t[1],t[2],1)})},b=(e,t)=>{var s;let l=e;if((s=l.validity)!=null&&s.valid)switch(t.toLowerCase()){case"red":g(parseInt(l.value,16),null,null,null);break;case"green":g(null,parseInt(l.value,16),null,null);break;case"blue":g(null,null,parseInt(l.value,16),null);break;case"alpha":g(null,null,null,parseInt(l.value,16)/255);break;case"voltage":let a=q(l.value);g(a[0],a[1],a[2],a[3]);break}};let d,y;function x(e,t,l){switch(e){case"panel":G(null,Math.round(t*100),Math.round((1-l)*100));break;case"hue":G(Math.round(t*360),null,null);break;case"alpha":U(t);break}}const R=(e,t)=>{d=e.currentTarget,y=t;let l=e.offsetX/d.clientWidth,s=e.offsetY/d.clientHeight;x(t,l,s),document.body.style.userSelect="none",document.addEventListener("mousemove",A),document.addEventListener("mouseup",S)},A=e=>{if(d!=null){let t=d.getBoundingClientRect(),l=Math.min(Math.max(0,e.clientX-t.left),t.width)/t.width,s=Math.min(Math.max(0,e.clientY-t.top),t.height)/t.height;x(y,l,s)}},S=e=>{d=null,y="",document.body.style.userSelect="",document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",S)};let _=-1;const $=(e,t)=>{e.preventDefault(),d=e.currentTarget,y=t;let l=e.changedTouches[0];_=l.identifier;let s=l.clientX/d.clientWidth,a=l.clientX/d.clientHeight;x(t,s,a),document.addEventListener("touchmove",V,{passive:!1}),document.addEventListener("touchend",w,{passive:!1})},V=e=>{if(d!=null&&_!=-1){let t=e.changedTouches[0];if(t.identifier!=_){w();return}e.preventDefault();let l=d.getBoundingClientRect(),s=Math.min(Math.max(0,t.clientX-l.left),l.width)/l.width,a=Math.min(Math.max(0,t.clientY-l.top),l.height)/l.height;x(y,s,a)}},w=e=>{_=-1,d=null,y="",document.body.style.userSelect="",document.removeEventListener("touchmove",V,!1),document.removeEventListener("touchend",w,!1)};function B(e,t,l,s){return s<.4||.2126*e+.7152*t+.0722*l>128?"black":"white"}function D(e,t,l){let s,a,u,i,c;const p=e/255,v=t/255,h=l/255,f=Math.max(p,v,h),M=f-Math.min(p,v,h),C=function(F){return(f-F)/6/M+1/2};return M===0?(i=0,c=0):(c=M/f,s=C(p),a=C(v),u=C(h),p===f?i=u-a:v===f?i=1/3+s-u:h===f&&(i=2/3+a-s),i<0?i+=1:i>1&&(i-=1)),[i*360,c*100,f*100]}function O(e,t,l){const s=e/60,a=t/100;let u=l/100;const i=Math.floor(s)%6,c=s-Math.floor(s),p=Math.round(255*u*(1-a)),v=Math.round(255*u*(1-a*c)),h=Math.round(255*u*(1-a*(1-c)));switch(u=Math.round(u*255),i){case 0:return[u,h,p];case 1:return[v,u,p];case 2:return[p,u,h];case 3:return[p,v,u];case 4:return[h,p,u];case 5:return[u,p,v]}}function H(e,t,l,s){const u=(((Math.round(s*255)&255)<<24>>>0)+((Math.round(l)&255)<<16)+((Math.round(t)&255)<<8)+(Math.round(e)&255)).toString(16).toUpperCase();return"00000000".substring(u.length)+u}function q(e){return[parseInt(e.substring(6,8),16)/255,parseInt(e.substring(4,6),16),parseInt(e.substring(2,4),16),parseInt(e.substring(0,2),16)]}function X(e){const t=e.match(/[a-f0-9]{6}|[a-f0-9]{3}/i);let l=t[0];t[0].length===3&&(l=l.split("").map(c=>c+c).join(""));const s=parseInt(l,16),a=s>>16&255,u=s>>8&255,i=s&255;return[a,u,i]}return g(30,213,243,1),Y(()=>{typeof globalThis.EyeDropper<"u"&&(k.value=!0)}),(e,t)=>(T(),E("div",J,[o("div",{style:{position:"relative",width:"216px",height:"180px",margin:"0 auto 16px","box-shadow":"0 0 2px 0 rgba(0, 0, 0, .24)",cursor:"crosshair"},onMousedown:t[0]||(t[0]=l=>R(l,"panel")),onTouchstart:t[1]||(t[1]=l=>$(l,"panel"))},[o("div",{class:r(e.$style.full),style:m({backgroundImage:`linear-gradient(90deg, white, hsl(${n.value.Hue}, 100%, 50%))`})},null,6),o("div",{class:r(e.$style.full),style:{position:"absolute",top:"0","background-image":"linear-gradient(transparent, black)"}},null,2),o("div",{class:r(e.$style.handler),style:m({backgroundColor:n.value.RGBResult,left:`${n.value.Saturation}%`,top:`${100-n.value.Value}%`})},null,6)],32),o("div",K,[o("div",ee,[o("div",{class:r(e.$style.slider_container),onMousedown:t[2]||(t[2]=l=>R(l,"hue")),onTouchstart:t[3]||(t[3]=l=>$(l,"hue"))},[o("div",{class:r(e.$style.slider_background),style:{"background-image":"linear-gradient(90deg, red, rgb(255, 255, 0) 16.66%, rgb(0, 255, 0) 33.33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 66.66%, rgb(255, 0, 255) 83.33%, red)"}},null,2),o("div",{class:r(e.$style.handler),style:m({left:`${n.value.Hue/3.6}%`,backgroundColor:`hsl(${n.value.Hue}, 100%, 50%)`})},null,6)],34),o("div",{class:r(e.$style.slider_container),style:{"margin-top":"8px"},onMousedown:t[4]||(t[4]=l=>R(l,"alpha")),onTouchstart:t[5]||(t[5]=l=>$(l,"alpha"))},[o("div",{class:r([e.$style.slider_background,e.$style.chessboard])},null,2),o("div",{class:r(e.$style.slider_background),style:m([{backgroundImage:`linear-gradient(to right, transparent, ${n.value.RGBResult})`},{position:"absolute",top:"0"}])},null,6),o("div",{class:r(e.$style.handler),style:m({left:`${n.value.Alpha*100}%`,backgroundColor:n.value.RGBAResult})},null,6)],34)]),o("div",{onClick:t[6]||(t[6]=l=>L()),class:r(e.$style.chessboard),style:{position:"relative",width:"30px",height:"30px","border-radius":"15px",cursor:"pointer","box-shadow":"0 0 2px 0 rgba(0, 0, 0, .24)"}},[o("div",{style:m([{width:"100%",height:"100%","border-radius":"50%",padding:"5px"},{color:n.value.highContrastResult,backgroundColor:n.value.RGBAResult}])},[k.value?(T(),E("svg",te,ne)):z("",!0)],4)],2)]),o("div",se,[o("div",oe,[o("span",{class:r(e.$style.input_span)},ue,2),o("input",{type:"text",class:r(e.$style.input_text),pattern:"[0-9a-fA-F]{1,2}",value:n.value.AlphaHex,onInput:t[7]||(t[7]=l=>{b(l.target,"alpha")})},null,42,re)]),o("div",ie,[o("span",{class:r(e.$style.input_span),style:{color:"blue"}},"B",2),o("input",{type:"text",class:r(e.$style.input_text),pattern:"[0-9a-fA-F]{1,2}",value:n.value.BlueHex,onInput:t[8]||(t[8]=l=>{b(l.target,"blue")})},null,42,de)]),o("div",pe,[o("span",{class:r(e.$style.input_span),style:{color:"green"}},"G",2),o("input",{type:"text",class:r(e.$style.input_text),pattern:"[0-9a-fA-F]{1,2}",value:n.value.GreenHex,onInput:t[9]||(t[9]=l=>{b(l.target,"green")})},null,42,ce)]),o("div",ve,[o("span",{class:r(e.$style.input_span),style:{color:"red"}},"R",2),o("input",{type:"text",class:r(e.$style.input_text),pattern:"[0-9a-fA-F]{1,2}",value:n.value.RedHex,onInput:t[10]||(t[10]=l=>{b(l.target,"red")})},null,42,he)])]),o("div",ge,[N(W(Z(j)("UintColorConverter","Voltage"))+" ",1),o("input",{type:"text",class:r(e.$style.input_text),pattern:"[0-9a-fA-F]{8}",value:n.value.VoltageHex,onInput:t[11]||(t[11]=l=>{b(l.target,"voltage")}),style:{width:"120px"}},null,42,fe)])]))}}),me="_full_1rm5m_3",be="_handler_1rm5m_13",xe="_slider_container_1rm5m_47",_e="_slider_background_1rm5m_65",Re="_chessboard_1rm5m_77",$e="_input_span_1rm5m_91",we="_input_text_1rm5m_111",Be={full:me,handler:be,slider_container:xe,slider_background:_e,chessboard:Re,input_span:$e,input_text:we},He={$style:Be},Ge=P(ye,[["__cssModules",He]]);export{Ge as U};