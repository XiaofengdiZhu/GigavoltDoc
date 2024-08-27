import{l as p}from"./chunks/locale.CB2Y0rC6.js";import{d as y,s as L,o as h,c as D,j as e,k as c,g as N,n as d,t as a,a as I,e as x,_ as $,I as i,a5 as B,D as R}from"./chunks/framework.CZYz2WcB.js";const k=["alt","src"],S={style:{"margin-top":"6px"}},C=["value"],q={style:{"margin-top":"6px"}},P=["value"],j=["value"],z={style:{"margin-top":"6px"}},A=["value"],G={style:{"margin-top":"6px"}},E={key:0,style:{"margin-top":"6px"}},J={style:{"margin-top":"6px"}},U={key:0,style:{"margin-top":"6px"}},H=y({__name:"MoreTwoInTwoOutTr",props:{type:{},defaultLeftInputDecimal:{},defaultRightInputDecimal:{},outputFunc:{type:Function}},setup(b){const{type:g,defaultLeftInputDecimal:_,defaultRightInputDecimal:l,outputFunc:u}=b,t=L({Name:p("MoreTwoInTwoOut",g,"DisplayName"),leftInputDecimal:_,leftInputVoltage:m(_),rightInputDecimal:l,rightInputVoltage:m(l),basicOutputDecimal:0,basicOutputVoltage:"",overflowOutputDecimal:0,overflowOutputVoltage:"",basicOutputDescription:null,overflowOutputDescription:null});let O=p("MoreTwoInTwoOut",g,"BasicOutputDescription");O.length>0&&(t.value.basicOutputDescription=O);let T=p("MoreTwoInTwoOut",g,"OverflowOutputDescription");T.length>0&&(t.value.overflowOutputDescription=T);let w=u(t.value.leftInputDecimal,t.value.rightInputDecimal);t.value.basicOutputDecimal=w[0],t.value.basicOutputVoltage=m(w[0]),t.value.overflowOutputDecimal=w[1],t.value.overflowOutputVoltage=m(w[1]);const F=(o,r)=>{var v;let n=o;if((v=n==null?void 0:n.validity)!=null&&v.valid){switch(r){case"left":t.value.leftInputDecimal=Number(n.value),t.value.leftInputVoltage=m(t.value.leftInputDecimal);break;case"right":t.value.rightInputDecimal=Number(n.value),t.value.rightInputVoltage=m(t.value.rightInputDecimal);break}let f=u(t.value.leftInputDecimal,t.value.rightInputDecimal);t.value.basicOutputDecimal=f[0],t.value.basicOutputVoltage=m(f[0]),t.value.overflowOutputDecimal=f[1],t.value.overflowOutputVoltage=m(f[1])}},M=(o,r)=>{var v;let n=o;if((v=n==null?void 0:n.validity)!=null&&v.valid){switch(r){case"left":t.value.leftInputVoltage=n.value,t.value.leftInputDecimal=V(t.value.leftInputVoltage);break;case"right":t.value.rightInputVoltage=n.value,t.value.rightInputDecimal=V(t.value.rightInputVoltage);break}let f=u(t.value.leftInputDecimal,t.value.rightInputDecimal);t.value.basicOutputDecimal=f[0],t.value.basicOutputVoltage=m(f[0]),t.value.overflowOutputDecimal=f[1],t.value.overflowOutputVoltage=m(f[1])}};function m(o){return o.toString(16).toUpperCase()}function V(o){return parseInt(o,16)>>>0}return(o,r)=>(h(),D("tr",null,[e("td",null,[e("div",null,[e("img",{alt:`${t.value.Name} ${c(p)("imgAltSuffix")}`,src:c(N)(`/images/expand/gates/GVMoreTwoInTwoOutBlock/${o.type}.webp`),class:d(["gate_mask",o.$style.icon])},null,10,k)]),e("div",S,a(t.value.Name),1)]),e("td",null,[e("div",null,[e("label",null,[I(a(c(p)("MoreTwoInTwoOut","Decimal")),1),e("input",{type:"number",inputmode:"numeric",min:"0",max:"4294967295",step:"1",value:t.value.leftInputDecimal,class:d(o.$style.input),onInput:r[0]||(r[0]=n=>F(n.target,"left"))},null,42,C)])]),e("div",q,[e("label",null,[I(a(c(p)("MoreTwoInTwoOut","Voltage")),1),e("input",{type:"text",pattern:"[0-9a-fA-F]{1,8}",value:t.value.leftInputVoltage,class:d(o.$style.input),onInput:r[1]||(r[1]=n=>M(n.target,"left"))},null,42,P)])])]),e("td",null,[e("div",null,[e("label",null,[I(a(c(p)("MoreTwoInTwoOut","Decimal")),1),e("input",{type:"number",inputmode:"numeric",min:"0",max:"4294967295",step:"1",value:t.value.rightInputDecimal,class:d(o.$style.input),onInput:r[2]||(r[2]=n=>F(n.target,"right"))},null,42,j)])]),e("div",z,[e("label",null,[I(a(c(p)("MoreTwoInTwoOut","Voltage")),1),e("input",{type:"text",pattern:"[0-9a-fA-F]{1,8}",value:t.value.rightInputVoltage,class:d(o.$style.input),onInput:r[3]||(r[3]=n=>M(n.target,"right"))},null,42,A)])])]),e("td",null,[e("div",null,[e("label",null,a(c(p)("MoreTwoInTwoOut","Decimal")),1),e("label",{class:d(o.$style.output)},a(t.value.basicOutputDecimal),3)]),e("div",G,[e("label",null,a(c(p)("MoreTwoInTwoOut","Voltage")),1),e("label",{class:d(o.$style.output)},a(t.value.basicOutputVoltage),3)]),t.value.basicOutputDescription?(h(),D("div",E,a(t.value.basicOutputDescription),1)):x("",!0)]),e("td",null,[e("div",null,[e("label",null,a(c(p)("MoreTwoInTwoOut","Decimal")),1),e("label",{class:d(o.$style.output)},a(t.value.overflowOutputDecimal),3)]),e("div",J,[e("label",null,a(c(p)("MoreTwoInTwoOut","Voltage")),1),e("label",{class:d(o.$style.output)},a(t.value.overflowOutputVoltage),3)]),t.value.overflowOutputDescription?(h(),D("div",U,a(t.value.overflowOutputDescription),1)):x("",!0)])]))}}),K="_icon_1okjs_3",Q="_input_1okjs_15",W="_output_1okjs_43",X={icon:K,input:Q,output:W},Y={$style:X},s=$(H,[["__cssModules",Y]]),Z={style:{"text-align":"center","min-width":"72px"}},tt={style:{"min-width":"168px"}},et={style:{"min-width":"168px"}},ut={style:{"min-width":"180px",width:"180px"}},lt={style:{"min-width":"180px",width:"180px"}},at=y({__name:"MoreTwoInTwoOutTable",setup(b){return(g,_)=>(h(),D("table",{class:d(g.$style.table)},[e("thead",null,[e("tr",null,[e("th",Z,[e("div",null,a(c(p)("MoreTwoInTwoOut","Icon")),1),e("div",null,a(c(p)("MoreTwoInTwoOut","Name")),1)]),e("th",tt,a(c(p)("MoreTwoInTwoOut","LeftInput")),1),e("th",et,a(c(p)("MoreTwoInTwoOut","RightInput")),1),e("th",ut,a(c(p)("MoreTwoInTwoOut","BasicOutput")),1),e("th",lt,a(c(p)("MoreTwoInTwoOut","OverflowOutput")),1)])]),e("tbody",null,[i(s,{type:"Adder",defaultLeftInputDecimal:4294967295,defaultRightInputDecimal:16,outputFunc:(l,u)=>{let t=l+u;return[(t&4294967295)>>>0,t>4294967295?1:0]}},null,8,["outputFunc"]),i(s,{type:"Subtracter",defaultLeftInputDecimal:1,defaultRightInputDecimal:16,outputFunc:(l,u)=>[(l-u&4294967295)>>>0,l<u?1:0]},null,8,["outputFunc"]),i(s,{type:"Multiplier",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:2271560481,outputFunc:(l,u)=>{let t=BigInt(l)*BigInt(u);return[Number(t&BigInt(4294967295)),Number(t>>32n)]}},null,8,["outputFunc"]),i(s,{type:"Divider",defaultLeftInputDecimal:11,defaultRightInputDecimal:4,outputFunc:(l,u)=>[u===0?0:Math.floor(l/u),0]},null,8,["outputFunc"]),i(s,{type:"Remainder",defaultLeftInputDecimal:11,defaultRightInputDecimal:4,outputFunc:(l,u)=>[u===0?0:Math.floor(l%u),0]},null,8,["outputFunc"]),i(s,{type:"Equaler",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[l==u?4294967295:0,0]},null,8,["outputFunc"]),i(s,{type:"Greater",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[l>u?4294967295:0,0]},null,8,["outputFunc"]),i(s,{type:"NoLesser",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[l>=u?4294967295:0,0]},null,8,["outputFunc"]),i(s,{type:"Lesser",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[l<u?4294967295:0,0]},null,8,["outputFunc"]),i(s,{type:"NoGreater",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[l<=u?4294967295:0,0]},null,8,["outputFunc"]),i(s,{type:"Maximumer",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[Math.max(l,u),0]},null,8,["outputFunc"]),i(s,{type:"Minimumer",defaultLeftInputDecimal:10,defaultRightInputDecimal:7,outputFunc:(l,u)=>[Math.min(l,u),0]},null,8,["outputFunc"]),i(s,{type:"LeftShifter",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:16,outputFunc:(l,u)=>{let t=BigInt(l)<<BigInt(u);return[Number(t&BigInt(4294967295)),Number(t>>32n)]}},null,8,["outputFunc"]),i(s,{type:"RightShifter",defaultLeftInputDecimal:305419896,defaultRightInputDecimal:16,outputFunc:(l,u)=>[l>>u,Number(BigInt(l)<<32n>>BigInt(u)&0xFFFFFFFFn)]},null,8,["outputFunc"]),i(s,{type:"Power",defaultLeftInputDecimal:2,defaultRightInputDecimal:48,outputFunc:(l,u)=>{let t=BigInt(l)**BigInt(u);return[Number(t&BigInt(4294967295)),Number(t>>32n)]}},null,8,["outputFunc"]),i(s,{type:"Logarithmer",defaultLeftInputDecimal:1024,defaultRightInputDecimal:2,outputFunc:(l,u)=>[Math.log(l)/Math.log(u),0]},null,8,["outputFunc"])])],2))}}),nt="_table_qbwm3_3",ot={table:nt},it={$style:ot},pt=$(at,[["__cssModules",it]]),st={id:"更多两入两出电路板",tabindex:"-1"},ct=e("a",{class:"header-anchor",href:"#更多两入两出电路板","aria-label":'Permalink to "更多两入两出电路板 <Badge text="v1.0" type="info"/>"'},"​",-1),rt=B('<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>该类电路板均在<code>十亿伏特 复数</code>分类中，共同点有：</p><ul><li>左端和右端是输入端</li><li>上端和后端是电压相同的本位输出端</li><li>下端是溢出 / 借位等的输出端</li><li>均只做正整数计算</li></ul><h2 id="具体" tabindex="-1">具体 <a class="header-anchor" href="#具体" aria-label="Permalink to &quot;具体&quot;">​</a></h2>',4),gt=JSON.parse('{"title":"更多两入两出电路板","description":"","frontmatter":{},"headers":[],"relativePath":"zh/expand/gates/more_two_in_two_out.md","filePath":"zh/expand/gates/more_two_in_two_out.md"}'),mt={name:"zh/expand/gates/more_two_in_two_out.md"},It=y({...mt,setup(b){return(g,_)=>{const l=R("Badge");return h(),D("div",{"data-pagefind-body":!0},[e("h1",st,[I("更多两入两出电路板 "),i(l,{text:"v1.0",type:"info"}),I(),ct]),rt,i(pt)])}}});export{gt as __pageData,It as default};