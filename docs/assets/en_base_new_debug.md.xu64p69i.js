import{_ as s,a,b as r}from"./chunks/debug_example.n7pXW2Rh.js";import{_ as g,o as d,c as u,j as t,a as n,G as o,a3 as l,B as p}from"./chunks/framework.C-GLQy3h.js";const b="/GigavoltDoc/images/base/new/EditGVDebugDialog_en.webp",h="/GigavoltDoc/images/base/new/GVStepFloatingButtons_en.webp",G=JSON.parse('{"title":"Debug Functions","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/new/debug.md","filePath":"en/base/new/debug.md"}'),m={name:"en/base/new/debug.md"},f={id:"running-speed",tabindex:"-1"},c={id:"hover-display-voltage",tabindex:"-1"},v={id:"keep-running-out-of-visibility",tabindex:"-1"},w={id:"floating-step-debugging-widget",tabindex:"-1"},y={id:"keyboard-debugging",tabindex:"-1"};function x(k,e,D,S,P,V){const i=p("Badge");return d(),u("div",{"data-pagefind-body":!0},[e[15]||(e[15]=t("h1",{id:"debug-functions",tabindex:"-1"},[n("Debug Functions "),t("a",{class:"header-anchor",href:"#debug-functions","aria-label":'Permalink to "Debug Functions"'},"​")],-1)),e[16]||(e[16]=t("img",{src:s,alt:"The Image of GV Debug Panel Block",class:"center_image small"},null,-1)),e[17]||(e[17]=t("p",null,[n("Hold"),t("code",null,"GV Debug Panel"),n(" block on hand and edit it，or place it in the terrain chunk and edit it or interact with it，then the debug panel dialog shown bellow will pop up.")],-1)),e[18]||(e[18]=t("img",{src:b,alt:"The Image of GV Debug Panel Dialog",class:"center_image"},null,-1)),t("h2",f,[e[0]||(e[0]=n("Running Speed ")),o(i,{text:"v1.0",type:"info"}),e[1]||(e[1]=n()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#running-speed","aria-label":'Permalink to "Running Speed <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[19]||(e[19]=t("p",null,"The electric frequency of the vanilla version is 100 circles/second. If you set this option to 2 (in times), the electric frequency of Gigavolt will be 200 circles/second. This option can be a fraction, for example, if you set to 0.5, the frequency will be 50 circles/second.For the current version, the lowest running speed is 0.1 times.",-1)),e[20]||(e[20]=t("p",null,"The GV Debug Panel block outputs the value of running speed option, and the radix point is located between the 16th and 17th bit.",-1)),e[21]||(e[21]=t("div",{class:"tip custom-block github-alert"},[t("p",{class:"custom-block-title"},"🧪 Speed Reference"),t("p",null,[n("Only one Logic Not Gate whose top and bottom ports by wires, using CPU "),t("code",null,"AMD R7 5800X"),n(" at 4.55GHz.")]),t("ul",null,[t("li",null,"Set running speed to 100 thousand times，then the real speed is about 92 thousand times，the game fps is 9 ~ 10."),t("li",null,"Set running speed to 90 thousand times，then the real speed is about 88 thousand times，the game fps is 16 ~ 17."),t("li",null,"Set running speed to 80 thousand times，then the real speed is about 79 thousand times，the game fps is 370 ~ 380.")])],-1)),t("h2",c,[e[3]||(e[3]=n("Hover Display Voltage ")),o(i,{text:"v2.0"}),e[4]||(e[4]=n()),e[5]||(e[5]=t("a",{class:"header-anchor",href:"#hover-display-voltage","aria-label":'Permalink to "Hover Display Voltage <Badge text="v2.0"/>"'},"​",-1))]),e[22]||(e[22]=t("p",null,"When this option is on, and you face to a Gigavolt element, there will be hovering numbers on the element. The green numbers are input voltages, and the red numbers are output voltages. The number in the bottom right corner is the voltage of the back port.",-1)),e[23]||(e[23]=t("img",{src:a,alt:"The Image of Hover Display Voltage",class:"center_image"},null,-1)),t("h2",v,[e[6]||(e[6]=n("Keep Running Out of Visibility ")),o(i,{text:"v2.0"}),e[7]||(e[7]=n()),e[8]||(e[8]=t("a",{class:"header-anchor",href:"#keep-running-out-of-visibility","aria-label":'Permalink to "Keep Running Out of Visibility <Badge text="v2.0"/>"'},"​",-1))]),e[24]||(e[24]=t("p",null,"When this option is on, the elements and wires that have been visited will still be running even if they are not in the visibility range. But this effect will be lost when you exit the world.",-1)),t("h2",w,[e[9]||(e[9]=n("Floating Step Debugging Widget ")),o(i,{text:"v1.0",type:"info"}),e[10]||(e[10]=n()),e[11]||(e[11]=t("a",{class:"header-anchor",href:"#floating-step-debugging-widget","aria-label":'Permalink to "Floating Step Debugging Widget <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[25]||(e[25]=l('<p>When this option is on, a floating widget with three buttons will be displayed at the top of the screen, and the <code>Recent 1000 Circles Cost x</code>.</p><img src="'+h+'" alt="The Image of the Floating Step Debugging Widget" class="center_image"><p>The three buttons are:</p><ol><li><strong>Pause/Continue</strong>: Click once, the electric system will stop running. Click again, the electric system will continue running.</li><li><strong>Step In</strong>: Run only one element.</li><li><strong>Step Over</strong>: Run one electric circle.</li></ol><p>The scene below is started with the switch off and pause on, then the switch was turned on, and the step over button is clicked twice.</p><img src="'+r+'" alt="The Image of Debugging Example" class="center_image"><p>Obviously, the left LED will light up one electric cycle slower than the right one because the left has an additional Logical OR gate under it.</p><p>The three cyan lines on the screen indicate which elements and wires were running in the last electric circle, and the number next to the line indicates the running order.</p>',8)),t("h2",y,[e[12]||(e[12]=n("Keyboard Debugging ")),o(i,{text:"v1.0",type:"info"}),e[13]||(e[13]=n()),e[14]||(e[14]=t("a",{class:"header-anchor",href:"#keyboard-debugging","aria-label":'Permalink to "Keyboard Debugging <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[26]||(e[26]=l('<p>When this option is on, you can use keyboard to control the three buttons in the floating step debugging widget.</p><ul><li><code>F5</code>Pause/Continue</li><li><code>F6</code>Step In</li><li><code>F7</code>Step Over</li></ul><blockquote><p>What&#39;s &quot;Enable Shortcut Wheel Panel&quot;? See <a href="./features.html#shortcut-wheel-panel">Features</a></p></blockquote>',3))])}const F=g(m,[["render",x]]);export{G as __pageData,F as default};
