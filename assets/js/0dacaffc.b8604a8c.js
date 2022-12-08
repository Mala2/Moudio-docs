"use strict";(self.webpackChunkmoudio_docs=self.webpackChunkmoudio_docs||[]).push([[4110],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8498:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"Schematics",id:"Schematics",title:"Schematics",description:"The TOP Main PCB",source:"@site/docs/Schematics.md",sourceDirName:".",slug:"/Schematics",permalink:"/Moudio-docs/docs/Schematics",draft:!1,editUrl:"https://github.com/Mala2/Moudio-docs/edit/main/docs/Schematics.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Battery Life",permalink:"/Moudio-docs/docs/battery-life"},next:{title:"3D Models",permalink:"/Moudio-docs/docs/3D"}},l={},u=[{value:"The TOP Main PCB",id:"the-top-main-pcb",level:2},{value:"The BACK Charger PCB",id:"the-back-charger-pcb",level:2},{value:"The BOTTOM Amplifier PCB",id:"the-bottom-amplifier-pcb",level:2},{value:"The FRONT Speaker PCB",id:"the-front-speaker-pcb",level:2}],s={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-top-main-pcb"},"The TOP Main PCB"),(0,a.kt)("p",null,"It contain the Atmega328|ESP32 uC, LED Driver, Haptic Driver, RTC, Touch Sensor (TPR54|48), EEPROM*, Supervisory, Addressable LEDs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TOP Main Schematic",src:r(2059).Z,width:"1335",height:"945"}),"\n",(0,a.kt)("img",{alt:"TOP Main Schematic",src:r(1002).Z,width:"1335",height:"945"})),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#fcf226"}},(0,a.kt)("a",{href:"https://github.com/Mala2/Moudio/blob/main/Hardware/TOP/TOP_Main.pdf"},"TOP Main v1.0"))),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#4ac416"}},(0,a.kt)("a",{href:"https://github.com/Mala2/MouDio/blob/main/Hardware/TOP/TOP_Main.xlsx"},"BoM"))),(0,a.kt)("h2",{id:"the-back-charger-pcb"},"The BACK Charger PCB"),(0,a.kt)("p",null,"It contain MAX77961 3S Charger, MAX17320 Fuel Gauge, MAX25231ATCA 5V Buck, MAX77503BEWC33 3V3 Buck, 3S Battery.\n",(0,a.kt)("img",{alt:"BACK Charger Schematic",src:r(5426).Z,width:"1335",height:"945"})),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#fcf226"}},(0,a.kt)("a",{href:"https://github.com/Mala2/Moudio/blob/main/Hardware/BACK/BACK_Charger.pdf"},"BACK Charger v1.0"))),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#4ac416"}},(0,a.kt)("a",{href:"https://github.com/Mala2/MouDio/blob/main/Hardware/BACK/BACK_Charger.xlsx"},"BoM"))),(0,a.kt)("h2",{id:"the-bottom-amplifier-pcb"},"The BOTTOM Amplifier PCB"),(0,a.kt)("p",null,"It contain the Amplifier - 2x Texas Instruments\xae TAS5825M and The FSC-BT806 Feasycom Bluetooth Module.\n",(0,a.kt)("img",{alt:"BOTTOM Amplifier Schematic",src:r(2197).Z,width:"1335",height:"945"})),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#fcf226"}},(0,a.kt)("a",{href:"https://github.com/Mala2/Moudio/blob/main/Hardware/BOTTOM/BOTTOM_Amplifier.pdf"},"BOTTOM Amplifier v1.0"))),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#4ac416"}},(0,a.kt)("a",{href:"https://github.com/Mala2/MouDio/blob/main/Hardware/BOTTOM/BOTTOM_Amplifier.xlsx"},"BoM"))),(0,a.kt)("h2",{id:"the-front-speaker-pcb"},"The FRONT Speaker PCB"),(0,a.kt)("p",null,"To hold the Speakers and front acrylic grill\n",(0,a.kt)("img",{alt:"FRONT Speaker Schematic",src:r(7751).Z,width:"1335",height:"945"})),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#fcf226"}},(0,a.kt)("a",{href:"https://github.com/Mala2/Moudio/blob/main/Hardware/FRONT/FRONT_Speaker.pdf"},"FRONT Speaker v1.0"))),(0,a.kt)("div",null,(0,a.kt)("button",{style:{backgroundColor:"#4ac416"}},(0,a.kt)("a",{href:"https://github.com/Mala2/MouDio/blob/main/Hardware/FRONT/FRONT_Speaker.xlsx"},"BoM"))))}d.isMDXComponent=!0},5426:function(e,t,r){t.Z=r.p+"assets/images/BACK_Charger-b8a1cd7b2d8dd87a9129326c75cd31af.svg"},2197:function(e,t,r){t.Z=r.p+"assets/images/BOTTOM_Amplifier-82395d93d8323dc25fbe123e42ce64e5.svg"},7751:function(e,t,r){t.Z=r.p+"assets/images/FRONT_Speaker-209871333331d9d6e8a526a97092949a.svg"},2059:function(e,t,r){t.Z=r.p+"assets/images/TOP_Main-1-ea14f57de1d9ff872b52f095bbafdda3.svg"},1002:function(e,t,r){t.Z=r.p+"assets/images/TOP_Main-2-b7342abf71bfde46c0efb516d2d453a7.svg"}}]);