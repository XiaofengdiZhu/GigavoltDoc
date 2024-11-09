import{l as i}from"./locale.DUWwBpDx.js";import{d as T,p as M,o as D,c as w,j as t,k as s,g as V,n as m,t as a,e as b,_ as F,G as p}from"./framework.C-GLQy3h.js";const $=["alt","src"],L={style:{"margin-top":"6px"}},R=["value"],_=["value"],N=["value"],B=["value"],k={key:0},x={key:0},C=T({__name:"MoreTwoInTwoOutTr",props:{type:{},defaultLeftInputDecimal:{},defaultRightInputDecimal:{},outputFunc:{type:Function}},setup(d){const u=M({Name:i("MoreTwoInTwoOut",d.type,"DisplayName"),leftInputDecimal:d.defaultLeftInputDecimal,leftInputVoltage:I(d.defaultLeftInputDecimal),rightInputDecimal:d.defaultRightInputDecimal,rightInputVoltage:I(d.defaultRightInputDecimal),basicOutputDecimal:0,basicOutputVoltage:"",overflowOutputDecimal:0,overflowOutputVoltage:"",basicOutputDescription:"",overflowOutputDescription:""});let h=i("MoreTwoInTwoOut",d.type,"BasicOutputDescription");h.length>0&&(u.value.basicOutputDescription=h);let l=i("MoreTwoInTwoOut",d.type,"OverflowOutputDescription");l.length>0&&(u.value.overflowOutputDescription=l);let e=d.outputFunc(u.value.leftInputDecimal,u.value.rightInputDecimal);u.value.basicOutputDecimal=e[0],u.value.basicOutputVoltage=I(e[0]),u.value.overflowOutputDecimal=e[1],u.value.overflowOutputVoltage=I(e[1]);const r=(n,f)=>{var v;let o=n;if((v=o==null?void 0:o.validity)!=null&&v.valid){switch(f){case"left":u.value.leftInputDecimal=Number(o.value),u.value.leftInputVoltage=I(u.value.leftInputDecimal);break;case"right":u.value.rightInputDecimal=Number(o.value),u.value.rightInputVoltage=I(u.value.rightInputDecimal);break}let g=d.outputFunc(u.value.leftInputDecimal,u.value.rightInputDecimal);u.value.basicOutputDecimal=g[0],u.value.basicOutputVoltage=I(g[0]),u.value.overflowOutputDecimal=g[1],u.value.overflowOutputVoltage=I(g[1])}},O=(n,f)=>{var v;let o=n;if((v=o==null?void 0:o.validity)!=null&&v.valid){switch(f){case"left":u.value.leftInputVoltage=o.value,u.value.leftInputDecimal=y(u.value.leftInputVoltage);break;case"right":u.value.rightInputVoltage=o.value,u.value.rightInputDecimal=y(u.value.rightInputVoltage);break}let g=d.outputFunc(u.value.leftInputDecimal,u.value.rightInputDecimal);u.value.basicOutputDecimal=g[0],u.value.basicOutputVoltage=I(g[0]),u.value.overflowOutputDecimal=g[1],u.value.overflowOutputVoltage=I(g[1])}};function I(n){return n.toString(16).toUpperCase()}function y(n){return parseInt(n,16)>>>0}return(n,f)=>(D(),w("tr",null,[t("td",null,[t("div",null,[t("img",{alt:`${u.value.Name} ${s(i)("imgAltSuffix")}`,src:s(V)(`/images/expand/gates/GVMoreTwoInTwoOutBlock/${n.type}.webp`),class:m(["gate_mask",n.$style.icon])},null,10,$)]),t("div",L,a(u.value.Name),1)]),t("td",null,[t("table",{class:m(n.$style.table)},[t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Decimal")),1),t("td",null,[t("input",{type:"number",inputmode:"numeric",min:"0",max:"4294967295",step:"1",value:u.value.leftInputDecimal,class:m(n.$style.input),onInput:f[0]||(f[0]=o=>r(o.target,"left"))},null,42,R)])]),t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Voltage")),1),t("td",null,[t("input",{type:"text",pattern:"[0-9a-fA-F]{1,8}",value:u.value.leftInputVoltage,class:m(n.$style.input),onInput:f[1]||(f[1]=o=>O(o.target,"left"))},null,42,_)])])],2)]),t("td",null,[t("table",{class:m(n.$style.table)},[t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Decimal")),1),t("td",null,[t("input",{type:"number",inputmode:"numeric",min:"0",max:"4294967295",step:"1",value:u.value.rightInputDecimal,class:m(n.$style.input),onInput:f[2]||(f[2]=o=>r(o.target,"right"))},null,42,N)])]),t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Voltage")),1),t("td",null,[t("input",{type:"text",pattern:"[0-9a-fA-F]{1,8}",value:u.value.rightInputVoltage,class:m(n.$style.input),onInput:f[3]||(f[3]=o=>O(o.target,"right"))},null,42,B)])])],2)]),t("td",null,[t("table",{class:m(n.$style.table)},[t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Decimal")),1),t("td",null,[t("label",{class:m(n.$style.output)},a(u.value.basicOutputDecimal),3)])]),t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Voltage")),1),t("td",null,[t("label",{class:m(n.$style.output)},a(u.value.basicOutputVoltage),3)])])],2),u.value.basicOutputDescription.length>0?(D(),w("div",k,a(u.value.basicOutputDescription),1)):b("",!0)]),t("td",null,[t("table",{class:m(n.$style.table)},[t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Decimal")),1),t("td",null,[t("label",{class:m(n.$style.output)},a(u.value.overflowOutputDecimal),3)])]),t("tr",null,[t("td",null,a(s(i)("MoreTwoInTwoOut","Voltage")),1),t("td",null,[t("label",{class:m(n.$style.output)},a(u.value.overflowOutputVoltage),3)])])],2),u.value.overflowOutputDescription.length>0?(D(),w("div",x,a(u.value.overflowOutputDescription),1)):b("",!0)])]))}}),S="_icon_1k2an_3",A="_table_1k2an_15",G="_input_1k2an_43",j="_output_1k2an_71",E={icon:S,table:A,input:G,output:j},q={$style:E},c=F(C,[["__cssModules",q]]),z={style:{"text-align":"center","min-width":"72px"}},P={style:{"min-width":"168px"}},U={style:{"min-width":"168px"}},H={style:{"min-width":"184px",width:"184px"}},J={style:{"min-width":"184px",width:"184px"}},K=T({__name:"MoreTwoInTwoOutTable",setup(d){return(u,h)=>(D(),w("table",{class:m(u.$style.table)},[t("thead",null,[t("tr",null,[t("th",z,[t("div",null,a(s(i)("MoreTwoInTwoOut","Icon")),1),t("div",null,a(s(i)("MoreTwoInTwoOut","Name")),1)]),t("th",P,a(s(i)("MoreTwoInTwoOut","LeftInput")),1),t("th",U,a(s(i)("MoreTwoInTwoOut","RightInput")),1),t("th",H,a(s(i)("MoreTwoInTwoOut","BasicOutput")),1),t("th",J,a(s(i)("MoreTwoInTwoOut","OverflowOutput")),1)])]),t("tbody",null,[p(c,{type:"Adder",defaultLeftInputDecimal:4294967295,defaultRightInputDecimal:16,outputFunc:(l,e)=>{let r=l+e;return[(r&4294967295)>>>0,r>4294967295?1:0]}},null,8,["outputFunc"]),p(c,{type:"Subtracter",defaultLeftInputDecimal:1,defaultRightInputDecimal:16,outputFunc:(l,e)=>[(l-e&4294967295)>>>0,l<e?1:0]},null,8,["outputFunc"]),p(c,{type:"Multiplier",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:2271560481,outputFunc:(l,e)=>{let r=BigInt(l)*BigInt(e);return[Number(r&BigInt(4294967295)),Number(r>>32n)]}},null,8,["outputFunc"]),p(c,{type:"Divider",defaultLeftInputDecimal:11,defaultRightInputDecimal:4,outputFunc:(l,e)=>[e===0?0:Math.floor(l/e),0]},null,8,["outputFunc"]),p(c,{type:"Remainder",defaultLeftInputDecimal:11,defaultRightInputDecimal:4,outputFunc:(l,e)=>[e===0?0:Math.floor(l%e),0]},null,8,["outputFunc"]),p(c,{type:"Equaler",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[l==e?4294967295:0,0]},null,8,["outputFunc"]),p(c,{type:"Greater",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[l>e?4294967295:0,0]},null,8,["outputFunc"]),p(c,{type:"NoLesser",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[l>=e?4294967295:0,0]},null,8,["outputFunc"]),p(c,{type:"Lesser",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[l<e?4294967295:0,0]},null,8,["outputFunc"]),p(c,{type:"NoGreater",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[l<=e?4294967295:0,0]},null,8,["outputFunc"]),p(c,{type:"Maximumer",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[Math.max(l,e),0]},null,8,["outputFunc"]),p(c,{type:"Minimumer",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,e)=>[Math.min(l,e),0]},null,8,["outputFunc"]),p(c,{type:"LeftShifter",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:16,outputFunc:(l,e)=>{let r=BigInt(l)<<BigInt(e);return[Number(r&BigInt(4294967295)),Number(r>>32n)]}},null,8,["outputFunc"]),p(c,{type:"RightShifter",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:16,outputFunc:(l,e)=>[l>>e,Number(BigInt(l)<<32n>>BigInt(e)&0xFFFFFFFFn)]},null,8,["outputFunc"]),p(c,{type:"Power",defaultLeftInputDecimal:2,defaultRightInputDecimal:48,outputFunc:(l,e)=>{let r=BigInt(l)**BigInt(e);return[Number(r&BigInt(4294967295)),Number(r>>32n)]}},null,8,["outputFunc"]),p(c,{type:"Logarithmer",defaultLeftInputDecimal:1024,defaultRightInputDecimal:2,outputFunc:(l,e)=>[Math.log(l)/Math.log(e),0]},null,8,["outputFunc"])])],2))}}),Q="_table_19kij_3",W={table:Q},X={$style:W},tt=F(K,[["__cssModules",X]]);export{tt as M};