import{_ as t,o,c as e,j as l,n as a,a5 as d,a as s}from"./chunks/framework.IyV-bm8r.js";const c="_td_center_2hfi7_2",r={td_center:c},k=JSON.parse('{"title":"数模、模数转换器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/base/shift/converter.md","filePath":"zh/base/shift/converter.md"}'),u={name:"zh/base/shift/converter.md"},m=d("",5),p=l("thead",null,[l("tr",null,[l("th",null,"端口"),l("th",null,"进制"),l("th",null,"左端"),l("th",null,"下端"),l("th",null,"右端"),l("th",null,"上端")])],-1),i=l("tbody",null,[l("tr",null,[l("td",null,"输入电压"),l("td",null,"十六进制"),l("td",{class:"mono"},"0x44444444"),l("td",{class:"mono"},"0x33333333"),l("td",{class:"mono"},"0x22222222"),l("td",{class:"mono"},"0x11111111")]),l("tr",null,[l("td",null,"最低 1 位"),l("td",null,"二进制"),l("td",{class:"mono red"},"0"),l("td",{class:"mono green"},"1"),l("td",{class:"mono orange"},"0"),l("td",{class:"mono blue"},"1")]),l("tr",null,[l("td",{rowspan:"2"},"1 位合并 4 位器结果"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"0"),l("span",{class:"green"},"1"),l("span",{class:"orange"},"0"),l("span",{class:"blue"},"1")])]),l("tr",null,[l("td",null,"十六进制"),l("td",{colspan:"4",class:"mono"},"0x5")]),l("tr",null,[l("td",null,"最低 2 位"),l("td",null,"二进制"),l("td",{class:"mono red"},"00"),l("td",{class:"mono green"},"11"),l("td",{class:"mono orange"},"10"),l("td",{class:"mono blue"},"01")]),l("tr",null,[l("td",{rowspan:"2"},"2 位合并 8 位器结果"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"00"),l("span",{class:"green"},"11"),s(),l("span",{class:"orange"},"10"),l("span",{class:"blue"},"01")])]),l("tr",null,[l("td",null,"十六进制"),l("td",{colspan:"4",class:"mono"},"0x39")]),l("tr",null,[l("td",null,"最低 4 位"),l("td",null,"二进制"),l("td",{class:"mono red"},"0100"),l("td",{class:"mono green"},"0011"),l("td",{class:"mono orange"},"0010"),l("td",{class:"mono blue"},"0001")]),l("tr",null,[l("td",{rowspan:"2"},"4 位合并 16 位器结果"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"0100"),s(),l("span",{class:"green"},"0011"),s(),l("span",{class:"orange"},"0010"),s(),l("span",{class:"blue"},"0001")])]),l("tr",null,[l("td",null,"十六进制"),l("td",{colspan:"4",class:"mono"},"0x4321")]),l("tr",null,[l("td",null,"最低 8 位"),l("td",null,"二进制"),l("td",{class:"mono red"},"0100 0100"),l("td",{class:"mono green"},"0011 0011"),l("td",{class:"mono orange"},"0010 0010"),l("td",{class:"mono blue"},"0001 0001")]),l("tr",null,[l("td",{rowspan:"2"},"8 位合并 32 位器结果"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"0100 0100"),s(),l("span",{class:"green"},"0011 0011"),s(),l("span",{class:"orange"},"0010 0010"),s(),l("span",{class:"blue"},"0001 0001")])]),l("tr",null,[l("td",null,"十六进制"),l("td",{colspan:"4",class:"mono"},"0x44332211")])],-1),_=[p,i],h=l("h2",{id:"模数转换器",tabindex:"-1"},[s("模数转换器 "),l("a",{class:"header-anchor",href:"#模数转换器","aria-label":'Permalink to "模数转换器"'},"​")],-1),g=l("p",null,"同样的，变更为 4 个拆分器，分别是：",-1),b=l("ul",null,[l("li",null,"4 位拆分 1 位器"),l("li",null,"8 位拆分 2 位器"),l("li",null,"16 位拆分 4 位器"),l("li",null,"32 位拆分 8 位器")],-1),f=l("p",null,"后端输入在拆分前会先取其最低的 n 位，再按顺序输出拆分结果，例如后端输入电压为 0x12345678 V：",-1),x=l("thead",null,[l("tr",null,[l("th",null,"端口"),l("th",null,"进制"),l("th",null,"左端"),l("th",null,"下端"),l("th",null,"右端"),l("th",null,"上端")])],-1),T=l("tbody",null,[l("tr",null,[l("td",null,"全部 32 位"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"0001 0010"),s(),l("span",{class:"green"},"0011 0100"),s(),l("span",{class:"orange"},"0101 0110"),s(),l("span",{class:"blue"},"0111 1000")])]),l("tr",null,[l("td",{rowspan:"2"},"32 位拆分 8 位器结果"),l("td",null,"二进制"),l("td",{class:"mono red"},"0001 0010"),l("td",{class:"mono green"},"0011 0100"),l("td",{class:"mono orange"},"0101 0110"),l("td",{class:"mono blue"},"0111 1000")]),l("tr",null,[l("td",null,"十六进制"),l("td",{class:"mono red"},"12"),l("td",{class:"mono green"},"34"),l("td",{class:"mono orange"},"56"),l("td",{class:"mono blue"},"78")]),l("tr",null,[l("td",null,"最低 16 位"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"0101"),s(),l("span",{class:"green"},"0110"),s(),l("span",{class:"orange"},"0111"),s(),l("span",{class:"blue"},"1000")])]),l("tr",null,[l("td",{rowspan:"2"},"16 位拆分 4 位器结果"),l("td",null,"二进制"),l("td",{class:"mono red"},"0101"),l("td",{class:"mono green"},"0110"),l("td",{class:"mono orange"},"0111"),l("td",{class:"mono blue"},"1000")]),l("tr",null,[l("td",null,"十六进制"),l("td",{class:"mono red"},"5"),l("td",{class:"mono green"},"6"),l("td",{class:"mono orange"},"7"),l("td",{class:"mono blue"},"8")]),l("tr",null,[l("td",null,"最低 8 位"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"01"),l("span",{class:"green"},"11"),s(),l("span",{class:"orange"},"10"),l("span",{class:"blue"},"00")])]),l("tr",null,[l("td",{rowspan:"2"},"4 位拆分 1 位器结果"),l("td",null,"二进制"),l("td",{class:"mono red"},"01"),l("td",{class:"mono green"},"11"),l("td",{class:"mono orange"},"10"),l("td",{class:"mono blue"},"00")]),l("tr",null,[l("td",null,"十六进制"),l("td",{class:"mono red"},"1"),l("td",{class:"mono green"},"3"),l("td",{class:"mono orange"},"2"),l("td",{class:"mono blue"},"0")]),l("tr",null,[l("td",null,"最低 4 位"),l("td",null,"二进制"),l("td",{colspan:"4",class:"mono"},[l("span",{class:"red"},"1"),l("span",{class:"green"},"0"),l("span",{class:"orange"},"0"),l("span",{class:"blue"},"0")])]),l("tr",null,[l("td",null,"4 位拆分 1 位器结果"),l("td",null,"二进制"),l("td",{class:"mono red"},"1"),l("td",{class:"mono green"},"0"),l("td",{class:"mono orange"},"0"),l("td",{class:"mono blue"},"0")])],-1),y=[x,T];function w(n,P,$,v,z,S){return o(),e("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIyZGF0ZSUyMiUzQTE3MjA4MDU2NzIwODglN0Q="},[m,l("table",{class:a(n.$style.td_center)},_,2),h,g,b,f,l("table",{class:a(n.$style.td_center)},y,2)])}const N={$style:r},M=t(u,[["render",w],["__cssModules",N]]);export{k as __pageData,M as default};
