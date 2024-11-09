import{_ as r,a as s,b as i,c as d,d as m,e as g,f as u,g as p}from"./chunks/O2GVTransformerBlock.CTwLCrHV.js";import{_ as f,o as b,c as v,j as t,a as l,G as a,n as h,a3 as y,B as x}from"./chunks/framework.C-GLQy3h.js";const w="_led_table_1j2u6_2",D={led_table:w},H=JSON.parse('{"title":"New Elements","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/new/elements.md","filePath":"en/base/new/elements.md"}'),T={name:"en/base/new/elements.md"},E={id:"wire-harness",tabindex:"-1"},L={id:"diode",tabindex:"-1"},k={id:"four-kinds-of-led",tabindex:"-1"},G={id:"transformers",tabindex:"-1"},N={id:"debug-panel",tabindex:"-1"};function P(n,e,I,O,V,q){const o=x("Badge");return b(),v("div",{"data-pagefind-body":!0},[e[16]||(e[16]=t("h1",{id:"new-elements",tabindex:"-1"},[l("New Elements "),t("a",{class:"header-anchor",href:"#new-elements","aria-label":'Permalink to "New Elements"'},"​")],-1)),t("h2",E,[e[0]||(e[0]=l("Wire Harness ")),a(o,{text:"v2.0"}),e[1]||(e[1]=l()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#wire-harness","aria-label":'Permalink to "Wire Harness <Badge text="v2.0"/>"'},"​",-1))]),e[17]||(e[17]=t("p",null,"A kind of new wire with orange color. They can only connect to colored wires or colored elements. The signals from different colored wires or elements can transmit independently in the wire harnesses, then wiring can be much more efficient.",-1)),e[18]||(e[18]=t("img",{src:r,alt:"The Image of How to Use Wire Harness",class:"center_image"},null,-1)),t("h2",L,[e[3]||(e[3]=l("Diode ")),a(o,{text:"v2.0"}),e[4]||(e[4]=l()),e[5]||(e[5]=t("a",{class:"header-anchor",href:"#diode","aria-label":'Permalink to "Diode <Badge text="v2.0"/>"'},"​",-1))]),e[19]||(e[19]=t("p",null,[l("Diode can only pass signals from bottom port to top port with 1 electric cycle delay (0.01 second. It's essentially a Delay Gate). Only colored type in "),t("code",null,"Gigavolt Multiple"),l(" category.")],-1)),e[20]||(e[20]=t("img",{src:s,alt:"The image of New Diode",class:"center_image"},null,-1)),t("h2",k,[e[6]||(e[6]=l("Four Kinds of LED ")),a(o,{text:"v1.0",type:"info"}),e[7]||(e[7]=l()),e[8]||(e[8]=t("a",{class:"header-anchor",href:"#four-kinds-of-led","aria-label":'Permalink to "Four Kinds of LED <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[21]||(e[21]=t("ul",null,[t("li",null,[t("strong",null,"8 x 4 LED"),l("：In vanilla version, the 4-LED displays the 4-bit voltage using 4 square light emitting diodes. This element can display 32-bit voltage using 32 small LEDs.")]),t("li",null,[t("strong",null,"4 x 4 LED"),l("：Takes the lowest 16 bits of input voltage and display it using 16 small LEDs.")]),t("li",null,[t("strong",null,"4 x 2 LED"),l("：Takes the lowest 8 bits of input voltage and display it using 8 small LEDs.")]),t("li",null,[t("strong",null,"8 Numerical LED"),l("：Equivalent to eight 7-Segment displays. It displays the 32-bit voltage intuitively.")])],-1)),t("table",{class:h(n.$style.led_table)},e[9]||(e[9]=[t("tbody",null,[t("tr",null,[t("td",null,"8 x 4 LED"),t("td",null,"4 x 4 LED"),t("td",null,"4 x 2 LED"),t("td",null,"8 Numerical LED")]),t("tr",null,[t("td",null,[t("img",{src:i,alt:"The Image of GV 8 x 4 LED"})]),t("td",null,[t("img",{src:d,alt:"The Image of GV 4 x 4 LED"})]),t("td",null,[t("img",{src:m,alt:"The Image of GV 4 x 2 LED"})]),t("td",null,[t("img",{src:g,alt:"The Image of GV 8 Numerical LED"})])])],-1)]),2),t("h2",G,[e[10]||(e[10]=l("Transformers ")),a(o,{text:"v1.0",type:"info"}),e[11]||(e[11]=l()),e[12]||(e[12]=t("a",{class:"header-anchor",href:"#transformers","aria-label":'Permalink to "Transformers <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[22]||(e[22]=y('<h3 id="gigavolt-to-original-transformer" tabindex="-1">Gigavolt to Original Transformer <a class="header-anchor" href="#gigavolt-to-original-transformer" aria-label="Permalink to &quot;Gigavolt to Original Transformer&quot;">​</a></h3><p>Connect the bottom port to a Gigavolt element or wire, then the transformer will take the lowest 4 bits of the input 32-bit voltage and output it to the top port. The top port can only connect to a vanilla element or wire.</p><img src="'+u+'" alt="The Image of Gigavolt to Original Transformer" class="center_image small"><h3 id="original-to-gigavolt-transformer" tabindex="-1">Original to Gigavolt Transformer <a class="header-anchor" href="#original-to-gigavolt-transformer" aria-label="Permalink to &quot;Original to Gigavolt Transformer&quot;">​</a></h3><p>Connect the bottom port to a vanilla element or wire, then the transformer will output 32-bit voltage equals to the input 4-bit voltage to the top port. The top port can only connect to a Gigavolt element or wire.</p><img src="'+p+'" alt="The Image of Original to Gigavolt Transformer" class="center_image small">',6)),t("h2",N,[e[13]||(e[13]=l("Debug Panel ")),a(o,{text:"v1.0",type:"info"}),e[14]||(e[14]=l()),e[15]||(e[15]=t("a",{class:"header-anchor",href:"#debug-panel","aria-label":'Permalink to "Debug Panel <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[23]||(e[23]=t("p",null,[l("See "),t("a",{href:"./debug.html"},"Debug Functions")],-1))])}const B={$style:D},S=f(T,[["render",P],["__cssModules",B]]);export{H as __pageData,S as default};