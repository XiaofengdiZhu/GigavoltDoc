import{E as a,a as o,b as n,c as i,I as r}from"./chunks/ElectricConnectionTable.BnFVfk2b.js";import{E as p}from"./chunks/ElectricElement.ByEg-ig9.js";import{d as u,o as f,c,j as t,a as s,G as l,k as m,a3 as g,B as b}from"./chunks/framework.C-GLQy3h.js";import"./chunks/locale.DUWwBpDx.js";const y={id:"sound-generator",tabindex:"-1"},V=JSON.parse('{"title":"Sound Generator","description":"","frontmatter":{},"headers":[],"relativePath":"en/base/shift/sound_generator.md","filePath":"en/base/shift/sound_generator.md"}'),v={name:"en/base/shift/sound_generator.md"},x=u({...v,setup(w){let d=[new a(o.Top,n.Input,i.Hide,[new r(1,32,"Playback Start Index",`Set the playback starting from the nth 16-bit data. This setting only takes effect when reading the audio data.  
For example, if the Left Input is 44100 V, and you set this port to 88200 V, the playback will starts from 88200/2/44100 = 1 second.`)]),new a(o.Right,n.Input,i.Hide,[new r(1,32,"Playback Length","Set how much 16-bit data to play, only takes effect when reading the audio data.")]),new a(o.Bottom,n.Input,i.Hide,[new r(1,32,"Start / Volume",`When the input voltage raises from 0 V, the playback starts. If the input voltage drop to 0 V, the playback stops. When playing, the higher the voltage , the louder the volume.  
When the voltage of this port is 0 V, if the voltages of other inputs change, this element will try to read audio data from specified memory bank again. But when the voltage of this port is not 0 V, nothing will happen.`)]),new a(o.Left,n.Input,i.Hide,[new r(1,32,"Sample Rate",`Set the sample rate of playback, in Hz. This setting only takes effect when reading the audio data.  
Range: 8000 ~ 48000 (In hexadecimal: 1F40 ~ BB80)`)]),new a(o.In,n.Input,i.Hide,[new r(1,32,"Memory Bank ID","Set the ID of a memory bank that the audio data read from. This setting only takes effect when reading the audio data.")])];return(k,e)=>{const h=b("Badge");return f(),c("div",{"data-pagefind-body":!0},[t("h1",y,[e[0]||(e[0]=s("Sound Generator ")),l(h,{text:"v1.0",type:"info"}),e[1]||(e[1]=s()),e[2]||(e[2]=t("a",{class:"header-anchor",href:"#sound-generator","aria-label":'Permalink to "Sound Generator <Badge text="v1.0" type="info"/>"'},"​",-1))]),e[3]||(e[3]=t("h2",{id:"overview",tabindex:"-1"},[s("Overview "),t("a",{class:"header-anchor",href:"#overview","aria-label":'Permalink to "Overview"'},"​")],-1)),e[4]||(e[4]=t("p",null,"Plays PCM-encoded audio data from a memory bank.",-1)),e[5]||(e[5]=t("h2",{id:"ports-definition",tabindex:"-1"},[s("Ports Definition "),t("a",{class:"header-anchor",href:"#ports-definition","aria-label":'Permalink to "Ports Definition"'},"​")],-1)),l(p,{imgAltPrefix:"GV Sound Generator",connections:m(d),imgSrc:"/images/base/shift/GVSoundGeneratorBlock.webp"},null,8,["connections"]),e[6]||(e[6]=g('<h2 id="audio-convert" tabindex="-1">Audio Convert <a class="header-anchor" href="#audio-convert" aria-label="Permalink to &quot;Audio Convert&quot;">​</a></h2><p>Before using the sound generator, you need to use <a href="https://ffmpeg.org/" target="_blank" rel="noreferrer">ffmpeg</a> or <a href="http://www.pcgeshi.com/index.html" target="_blank" rel="noreferrer">Format Factory</a> to convert the audio file to a file that meets the following requirements:</p><ul><li>File Format: WAV</li><li>Codec：PCM (If there is no such option, it is usually PCM)</li><li>Channels：2</li><li>Sample Rate：8000 ~ 48000 Hz</li><li>Bit Depth：16 bits</li></ul><p>After converting, import it to the Gigavolt Memory Bank.</p><div class="tip custom-block github-alert"><p class="custom-block-title">💡 If errors occupies when entering worlds.</p><p>This is because other elements on ports have not been initialized, and this cause the sound generator receives 0V input. Or because the memory bank has not been initialized, then the sound generator try to read it but failed.<br> The correct solution is to set the input voltage of the backend to 0V before exiting the world, and then set it again when you need to play.</p></div>',5))])}}});export{V as __pageData,x as default};