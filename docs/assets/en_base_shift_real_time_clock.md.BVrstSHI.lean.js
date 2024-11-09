import{_ as s}from"./chunks/GVRealTimeClockBlock.PlW2rt4A.js";import{_ as i,o as r,c as o,j as e,a as l,G as d,a3 as c,n as u,B as p}from"./chunks/framework.C-GLQy3h.js";const m="_real_time_clock_table_1u7sx_2",g={real_time_clock_table:m},B=JSON.parse('{"title":"Real Time Clock","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/shift/real_time_clock.md","filePath":"en/base/shift/real_time_clock.md"}'),h={name:"en/base/shift/real_time_clock.md"},y={id:"real-time-clock",tabindex:"-1"};function x(n,t,b,_,k,T){const a=p("Badge");return r(),o("div",{"data-pagefind-body":!0},[e("h1",y,[t[0]||(t[0]=l("Real Time Clock ")),d(a,{text:"v1.0",type:"info"}),t[1]||(t[1]=l()),t[2]||(t[2]=e("a",{class:"header-anchor",href:"#real-time-clock","aria-label":'Permalink to "Real Time Clock <Badge text="v1.0" type="info"/>"'},"​",-1))]),t[4]||(t[4]=e("img",{src:s,alt:"The Image of GV Real Time Clock",class:"center_image small"},null,-1)),t[5]||(t[5]=e("p",null,"It's similar to the vanilla version, but outputs the true real time (from the running device), and the four ports on the front are all output ports, but the back port is input port.",-1)),t[6]||(t[6]=e("p",null,"According to the back input, the four outputs on the front will output different values, as shown in the table below:",-1)),e("div",{class:u(n.$style.real_time_clock_table)},t[3]||(t[3]=[c('<table tabindex="0"><thead><tr><th style="text-align:center;">Back Input</th><th style="text-align:center;">Top Output</th><th style="text-align:center;">Right Output</th><th style="text-align:center;">Bottom Output</th><th style="text-align:center;">Left Output</th></tr></thead><tbody><tr><td style="text-align:center;">0 V or others</td><td style="text-align:center;">Milliseconds</td><td style="text-align:center;">Seconds</td><td style="text-align:center;">Minutes</td><td style="text-align:center;">Hours</td></tr><tr><td style="text-align:center;">1 V</td><td style="text-align:center;">Weekday</td><td style="text-align:center;">Date</td><td style="text-align:center;">Month</td><td style="text-align:center;">Year</td></tr><tr><td style="text-align:center;">2 V</td><td style="text-align:center;">The lowest 32 bits of Ticks</td><td style="text-align:center;">The highest 32 bits of Ticks</td><td style="text-align:center;">0 V</td><td style="text-align:center;">0 V</td></tr><tr><td style="text-align:center;">3 V</td><td style="text-align:center;">The time until or since the precipitation starts, in milliseconds</td><td style="text-align:center;">If precipitating, 0xFFFFFFFF V，otherwise 0 V</td><td style="text-align:center;">The time until the precipitation ends, in milliseconds</td><td style="text-align:center;">0 V</td></tr></tbody></table>',1)]),2),t[7]||(t[7]=e("blockquote",null,[e("p",null,[e("strong",null,"Ticks"),l("：Represents the number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 0001 in the Gregorian calendar. It doesn't include the number of ticks that are attributable to leap seconds.")])],-1))])}const f={$style:g},F=i(h,[["render",x],["__cssModules",f]]);export{B as __pageData,F as default};
