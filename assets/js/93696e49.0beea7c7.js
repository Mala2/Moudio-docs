"use strict";(self.webpackChunkmoudio_docs=self.webpackChunkmoudio_docs||[]).push([[672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"create-watchface",title:"Create Your Own Watch Face",sidebar_label:"Create Your Own Watch Face",slug:"/create-watchface"},i=void 0,c={unversionedId:"create-watchface",id:"create-watchface",title:"Create Your Own Watch Face",description:"The Watchy library makes it easy to create your own custom watch face, we've provided a few examples that all use the same template.",source:"@site/docs/create-watchface.md",sourceDirName:".",slug:"/create-watchface",permalink:"/Moudio-docs/docs/create-watchface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/create-watchface.md",tags:[],version:"current",frontMatter:{id:"create-watchface",title:"Create Your Own Watch Face",sidebar_label:"Create Your Own Watch Face",slug:"/create-watchface"},sidebar:"docs",previous:{title:"Examples",permalink:"/Moudio-docs/docs/examples"},next:{title:"Battery Life",permalink:"/Moudio-docs/docs/battery-life"}},l={},s=[{value:"Basics",id:"basics",level:2},{value:"Displaying Images/Icons",id:"displaying-imagesicons",level:3},{value:"Convert image to byte array (image2cpp)",id:"convert-image-to-byte-array-image2cpp",level:4},{value:"Using Fonts",id:"using-fonts",level:3},{value:"Share Your Watch Face!",id:"share-your-watch-face",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Watchy library makes it easy to create your own custom watch face, we've provided a few examples that all use the same template."),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"To create a basic watch face, you need to simply override the ",(0,r.kt)("inlineCode",{parentName:"p"},"drawWatchFace()")," method with your custom code, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="myFirstWatchFace.ino"',title:'"myFirstWatchFace.ino"'},'#include <Watchy.h> //include the Watchy library\n#include <Fonts/FreeMonoOblique24pt7b.h> //include any fonts you want to use\n#include "settings.h" //same file as the one from 7_SEG example\n\nclass MyFirstWatchFace : public Watchy{ //inherit and extend Watchy class\n    public:\n        MyFirstWatchFace(const watchySettings& s) : Watchy(s) {}\n        void drawWatchFace(){ //override this method to customize how the watch face looks\n          display.setFont(&FreeMonoOblique24pt7b);\n          display.setCursor(25, 110);\n          if(currentTime.Hour < 10){ //use the currentTime struct to print latest time\n            display.print("0");\n          }\n          display.print(currentTime.Hour);\n          display.print(":");\n          if(currentTime.Minute < 10){\n            display.print("0");\n          }  \n          display.println(currentTime.Minute);   \n        }\n};\n\nMyFirstWatchFace m(settings); //instantiate your watchface\n\nvoid setup() {\n  m.init(); //call init in setup\n}\n\nvoid loop() {\n  // this should never run, Watchy deep sleeps after init();\n}\n')),(0,r.kt)("h3",{id:"displaying-imagesicons"},"Displaying Images/Icons"),(0,r.kt)("p",null,"Since the E-Paper display is black and white only, you will need to convert any images/icons you wish to display into black and white first.\nThe image then needs to be converted into a byte array, and stored in Watchy's flash."),(0,r.kt)("h4",{id:"convert-image-to-byte-array-image2cpp"},"Convert image to byte array (image2cpp)"),(0,r.kt)("p",null,"You can convert your images to byte arrays using the web tool ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"p",href:"http://javl.github.io/image2cpp/"},(0,r.kt)("strong",{parentName:"a"},"image2cpp")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload your image and play around with the settings. If your image is already in black and white then you can just leave the brightness threshold  to default, otherwise if it's in color, you can play with that setting to get the image to look right under preview.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Code Output format")," option, select ",(0,r.kt)("em",{parentName:"p"},"Arduino code"),", give it a name under ",(0,r.kt)("em",{parentName:"p"},"identifier")," and click ",(0,r.kt)("strong",{parentName:"p"},"Generate code"),". Copy the contents in the textarea and paste it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.h")," file in the same directory as your Arduino sketch.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your watch face file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myFirstWatchFace.ino"),", include that header file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'#include "myImage.h"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"display.drawBitmap(x_origin, y_origin, imageByteArrayName, width, height, color)")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"drawWatchFace()")," method to display your image. The order of these draw/print statements matter, so if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"display.drawBitmap()")," first, followed by ",(0,r.kt)("inlineCode",{parentName:"p"},'display.println("Hello World!")'),", the text will be on top of the image."))),(0,r.kt)("h3",{id:"using-fonts"},"Using Fonts"),(0,r.kt)("p",null,"You can use custom fonts by converting them first with the tool ",(0,r.kt)("ins",null,(0,r.kt)("a",{parentName:"p",href:"https://rop.nl/truetype2gfx/"},(0,r.kt)("strong",{parentName:"a"},"truetype2gfx")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload your font of choice and set the font size. Click ",(0,r.kt)("strong",{parentName:"p"},"Get GFX font file")," to download the font file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Seven_Segment10pt7b.h"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your watch face file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myFirstWatchFace.ino"),", include that header file e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'#include "Seven_Segment10pt7b.h"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"display.setFont(&Seven_Segment10pt7b)")," to set the current font face (don't forget the ampersand before the font name). You will have to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"display.setFont()")," method each time you wish to use another font. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"display.setCursor(x, y)")," to set where to start printing text, the coordinates refer to the ",(0,r.kt)("em",{parentName:"p"},"lower left corner")," of the text to be printed."))),(0,r.kt)("h3",{id:"share-your-watch-face"},"Share Your Watch Face!"),(0,r.kt)("p",null,"We'd love to see what you've created! Share your watch face with us and we'll post it on our gallery:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have a GitHub repo with the source code, and a 200x200 screenshot of the watch face (must be a black and white ","*",".bmp or ","*",".gif)"),(0,r.kt)("li",{parentName:"ol"},"Add your watch face to the bottom of this ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sqfmi/watchy-docs/blob/main/src/pages/watchfaces/watchfaces.json"},(0,r.kt)("inlineCode",{parentName:"a"},"json file"))," like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "id" : "ID_NUMBER",\n        "name" : "WATCH_FACE_NAME",\n        "author" : "AUTHOR",\n        "screenshot" : "SCREENSHOT_URL",\n        "source" : "GITHUB_URL",\n        "ota_bin" : false,\n        "version" : "VERSION_NUMBER"\n    }  \n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You may want to check for other PRs so your ID number is the latest"),(0,r.kt)("li",{parentName:"ol"},"Submit the PR for review and merge")))}u.isMDXComponent=!0}}]);