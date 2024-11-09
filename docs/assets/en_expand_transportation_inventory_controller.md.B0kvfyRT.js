import{E as n,a as l,b as r,c as i,I as e}from"./chunks/ElectricConnectionTable.BnFVfk2b.js";import{E as h}from"./chunks/ElectricElement.ByEg-ig9.js";import{d as u,o as f,c as y,j as o,a as s,G as a,k as p,a3 as m,B as x}from"./chunks/framework.C-GLQy3h.js";import"./chunks/locale.DUWwBpDx.js";const g={id:"inventory-controller",tabindex:"-1"},C=JSON.parse('{"title":"Inventory Controller","description":"","frontmatter":{},"headers":[],"relativePath":"en/expand/transportation/inventory_controller.md","filePath":"en/expand/transportation/inventory_controller.md"}'),b={name:"en/expand/transportation/inventory_controller.md"},S=u({...b,setup(w){let d=[new n(l.Top,r.Output,i.BitWidth,[new e(1,32,"Result","Because the result is often 0, the default result is 0xFFFFFFFF V. If there is an error occupied during controlling, the result will be 0xFFFFFFFF V too.")]),new n(l.Right,r.Input,i.StartAndEnd,[new e(1,8,"Slot","Specify the n+1th slot to control."),new e(9,16,"Count","Specify how many items to control."),new e(17,17,"Whether Check Block Data","See`Block Data`"),new e(18,18,"Whether Control All","If this is 1, the element will ignore`Count` in operation, and will control as much as possible."),new e(19,19,"Whether Control Player's Inventory","If this is 0, this element controls the inventory of the behind block. Otherwise, the element controls the specified player's inventory."),new e(20,24,"Player Index","Specify which number player's inventory you want to control when`Whether Control Player's Inventory`is 1."),new e(25,32,"New Slot","Specify the n+1th slot as the new slot when`Synchronous Operations`is 16(0x10).")]),new n(l.Bottom,r.Input,i.BitWidth,[new e(1,32,"Synchronous Operations","Details are in the table below.")]),new n(l.Left,r.Input,i.StartAndEnd,[new e(1,10,"Block Content","If this is greater than 0, the element will only control the item with the same block content."),new e(11,14,"Empty","No effect."),new e(15,32,"Block Data","If`Block Content`is greater than 0 and`Whether Check Block Data`is 1, the element will also check whether the block data of items equals to this.")])];return(v,t)=>{const c=x("Badge");return f(),y("div",{"data-pagefind-body":!0},[o("h1",g,[t[0]||(t[0]=s("Inventory Controller ")),a(c,{text:"v2.0"}),t[1]||(t[1]=s()),t[2]||(t[2]=o("a",{class:"header-anchor",href:"#inventory-controller","aria-label":'Permalink to "Inventory Controller <Badge text="v2.0"/>"'},"​",-1))]),t[3]||(t[3]=o("h2",{id:"overview",tabindex:"-1"},[s("Overview "),o("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1)),t[4]||(t[4]=o("p",null,"You can use it to control items stored in the inventory of a block like a chest, furnace, and dispenser, or a player's inventory.",-1)),t[5]||(t[5]=o("h2",{id:"ports-definition",tabindex:"-1"},[s("Ports Definition "),o("a",{class:"header-anchor",href:"#ports-definition","aria-label":'Permalink to "Ports Definition"'},"​")],-1)),a(h,{imgAltPrefix:"Inventory Controller",connections:p(d),imgSrc:"/images/expand/transportation/GVInventoryControllerBlock.webp"},null,8,["connections"]),t[6]||(t[6]=m('<h3 id="synchronous-operations" tabindex="-1">Synchronous Operations <a class="header-anchor" href="#synchronous-operations" aria-label="Permalink to &quot;Synchronous Operations&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">Voltage</th><th style="text-align:left;">Opertaion &amp; Description</th></tr></thead><tbody><tr><td style="text-align:center;">0 or<br>Others</td><td style="text-align:left;">Only if the voltage of the bottom port changes, the operation will be executed. The default output is 0xFFFFFFFF V. If there is an error occupied during controlling, the result will be 0xFFFFFFFF V too.</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:left;">Output the block value of the items in the specified slot.</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;">Output the count of the items in the specified slot.</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;">Output the capacity of the items in the specified slot.</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;">Output the remaining capacity of the items in the specified slot.</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;">Output the total count of the items with the specified block.</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;">Output the slot number of the first slot that contains the item with the specified block.</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;">Output the count of the slots that contains the items with the specified block.</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:left;">Output the count of the items with the same block content and data that can be added. (The block data is considered and will not be ignored.)</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:left;">Output the total count of slots.</td></tr><tr><td style="text-align:center;">10<br>(0xA)</td><td style="text-align:left;">Output the count of used slots.</td></tr><tr><td style="text-align:center;">11<br>(0xB)</td><td style="text-align:left;">Output the count of unused slots.</td></tr><tr><td style="text-align:center;">12<br>(0xC)</td><td style="text-align:left;">Output the first slot number that contains at least one item.</td></tr><tr><td style="text-align:center;">13<br>(0xD)</td><td style="text-align:left;">Output the last slot number that contains at least one item.</td></tr><tr><td style="text-align:center;">14<br>(0xE)</td><td style="text-align:left;">Output the first slot number that does not contain item.</td></tr><tr><td style="text-align:center;">15<br>(0xF)</td><td style="text-align:left;">Output the last slot number that does not contain item.</td></tr><tr><td style="text-align:center;">16<br>(0x10)</td><td style="text-align:left;">Move the items from a lot to a new slot. You should specify the count of items to move. The output will be the count of items actually moved.<br>If the new slot already has items, it will try to move items to other available slots.</td></tr><tr><td style="text-align:center;">17<br>(0x11)</td><td style="text-align:left;">Organize the items with the specified block content to the specified slot. You should specify the count of items to organize. The output will be the count of items actually moved.<br> If the new slot already has items, or cannot hold so many items, it will try to move items to the next slot, then the next again.<br>The block data is considered and will not be ignored.</td></tr><tr><td style="text-align:center;">18<br>(0x12)</td><td style="text-align:left;">Remove the items in the specified slot. You should specify the count of items to remove. The output will be the count of items actually removed.</td></tr><tr><td style="text-align:center;">19<br>(0x13)</td><td style="text-align:left;">Remove the items with the specified block content. You should specify the count of items to remove. The output will be the count of items actually removed.</td></tr><tr><td style="text-align:center;">20<br>(0x14)</td><td style="text-align:left;">Set the block data of the items in the specified slot. You should specify the count of items to set. The output will be the count of items actually set.<br>If the specified count is less than the count of items in the slot, it will try to move items not set to other available slots.</td></tr><tr><td style="text-align:center;">32<br>(0x20)</td><td style="text-align:left;">Sort items by count, output the count of used slots.</td></tr><tr><td style="text-align:center;">33<br>(0x21)</td><td style="text-align:left;">Sort items by count in descending order, output the count of used slots.</td></tr><tr><td style="text-align:center;">34<br>(0x22)</td><td style="text-align:left;">Sort items by block value, output the count of used slots.</td></tr><tr><td style="text-align:center;">35<br>(0x23)</td><td style="text-align:left;">Sort items by block value in descending order, output the count of used slots.</td></tr><tr><td style="text-align:center;">48<br>(0x30)</td><td style="text-align:left;">Try to refresh the crafting result of crafting table or furnace, output the count of the new crafting result.</td></tr></tbody></table>',2))])}}});export{C as __pageData,S as default};