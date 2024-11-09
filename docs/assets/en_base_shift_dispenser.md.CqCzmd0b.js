import{E as a,a as l,b as d,c as h,I as i}from"./chunks/ElectricConnectionTable.BnFVfk2b.js";import{E as p}from"./chunks/ElectricElement.ByEg-ig9.js";import{d as c,o as f,c as g,j as t,a as n,G as s,k as w,B as m}from"./chunks/framework.C-GLQy3h.js";import"./chunks/locale.DUWwBpDx.js";const u={id:"dispenser",tabindex:"-1"},x=JSON.parse('{"title":"Dispenser","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/shift/dispenser.md","filePath":"en/base/shift/dispenser.md"}'),b={name:"en/base/shift/dispenser.md"},A=c({...b,setup(v){let o=[new a(l.All,d.Input,h.StartAndEnd,[new i(1,8,"Speed","In blocks/second. The max speed is 255 blocks/second."),new i(9,16,"Angle 1",`* If the dispenser faces upwards or downwards, Angle 1 is the deviation angle toward the north.
* Otherwise, Angle 1 is the deviation angle toward right.
* If the value is greater than 90, the value will be reduced to 90.
* If the highest bit is 1, the value will be negative.`),new i(17,24,"Angle 2",`* If the dispenser faces upwards or downwards, Angle 2 is the deviation angle toward the west.
* Otherwise, Angle 1 is the deviation angle toward up.
* Others are defined the same as Angle 1.`),new i(25,25,"Ignore Gravity","If this is 1, the projectile will ignore gravity."),new i(26,26,"Ignore Resistance","If this is 1, the projectile will ignore resistance like air resistance and etc."),new i(27,27,"Safe Mode",`If this is 1, the projectile will be in safe mode.  
In safe mode, the projectile will not trigger OnFiredAsProjectile and OnHitAsProjectile in SubsystemBlockBehavior, but still will trigger OnHitByProjectile.`),new i(28,28,"Placing Mode",`If this is 1, the projectile will be in placing mode.  
In placing mode, when projectile hits a block that is not air or fluid, the projectile will place itself in the terrain chunk (If it is allowed).`),new i(29,29,"Whether Specify Slot","If this is 1, the dispenser only shoots the blocks at the specified slot."),new i(30,32,"Specify Slot","If the 29th bit is 1, the dispenser only shoots the blocks at this+1th slot.")])];return(I,e)=>{const r=m("Badge");return f(),g("div",{"data-pagefind-body":!0},[t("h1",u,[e[0]||(e[0]=n("Dispenser ")),s(r,{text:"v1.0",type:"info"}),e[1]||(e[1]=n()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#dispenser","aria-label":'Permalink to "Dispenser <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[3]||(e[3]=t("h2",{id:"overview",tabindex:"-1"},[n("Overview "),t("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1)),e[4]||(e[4]=t("p",null,"Stores items in a similar way to a chest,but allows shooting or dispensing them through the hole when the input voltage changes. You can control the speed, angle, etc. of the projectile through the input voltage. By default, it is in shooting mode.",-1)),e[5]||(e[5]=t("h2",{id:"ports-definition",tabindex:"-1"},[n("Ports Definition "),t("a",{class:"header-anchor",href:"#ports-definition","aria-label":'Permalink to "Ports Definition"'},"​")],-1)),e[6]||(e[6]=t("blockquote",null,[t("p",null,"The final input is generated by performing a bitwise OR operation between the inputs from all sides.")],-1)),s(p,{imgAltPrefix:"GV Dispenser",connections:w(o),imgSrc:"/images/base/shift/GVDispenser.webp"},null,8,["connections"]),e[7]||(e[7]=t("div",{class:"tip custom-block github-alert"},[t("p",{class:"custom-block-title"},"💡 Tip"),t("p",null,[n("In addition,"),t("code",null,"Gigavolt.Expand mod"),n("has "),t("a",{href:"./../../expand/transportation/guided_dispenser.html"},"Guided Dispenser"),n(".")])],-1))])}}});export{x as __pageData,A as default};
