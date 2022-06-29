"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,{Z:()=>o,b:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>i});var a=n(2263),o=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:r=!1,absolute:i=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const p=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+p:p}(t,e,n,a)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=r();return n(e,t)}},836:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905)),r=n(4996);const i={title:"Creating new project"},p=void 0,s={unversionedId:"tutorials/todo-app/creating-new-project",id:"tutorials/todo-app/creating-new-project",isDocsHomePage:!1,title:"Creating new project",description:"Run the following command in your terminal to create a new Wasp project:",source:"@site/docs/tutorials/todo-app/creating-new-project.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/creating-new-project",permalink:"/docs/tutorials/todo-app/creating-new-project",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/todo-app/creating-new-project.md",tags:[],version:"current",frontMatter:{title:"Creating new project"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/tutorials/todo-app"},next:{title:"Task entity",permalink:"/docs/tutorials/todo-app/task-entity"}},l=[{value:"Taking a closer look at the code",id:"taking-a-closer-look-at-the-code",children:[]},{value:"Cleaning up",id:"cleaning-up",children:[]}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Run the following command in your terminal to create a new Wasp project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"wasp new TodoApp\n")),(0,o.kt)("p",null,"Enter the created directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell-session"},"cd TodoApp\nwasp start\n")),(0,o.kt)("p",null,"You have just ran your app in the development mode!"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"wasp start")," might take a little bit longer, due to the first time setup."))),(0,o.kt)("p",null,"You will be seeing a lot of different output from client, server and database setting themselves up.\nOnce ready, a new tab should open in your browser at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),", with simple placeholder page:"),(0,o.kt)("img",{alt:"Screenshot of new Wasp app",src:(0,r.Z)("img/wasp-new-screenshot.png"),style:{border:"1px solid black"},height:"400px"}),(0,o.kt)("p",null,"We just set the foundations of our app! We don't have yet the features to show it, but Wasp already generated for us full front-end and back-end code of the app. Take a peek at ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoApp/.wasp/out")," if you are curious and see how it looks like!"),(0,o.kt)("h2",{id:"taking-a-closer-look-at-the-code"},"Taking a closer look at the code"),(0,o.kt)("p",null,"Let's inspect Wasp project that we just created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TodoApp/\n\u251c\u2500\u2500 main.wasp # Here goes our Wasp code.\n\u251c\u2500\u2500 ext/      # Here goes our (external) JS/CSS/HTML/... code.\n\u2502   \u2514\u2500\u2500 MainPage.js\n\u2502   \u2514\u2500\u2500 Main.css\n\u2502   \u2514\u2500\u2500 waspLogo.png\n\u251c\u2500\u2500 .gitignore\n\u2514\u2500\u2500 .wasproot\n")),(0,o.kt)("p",null,"Let's start with ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," file which introduces 3 new concepts:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#app"},"app"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#page"},"page")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#route"},"route"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp { // Main declaration, defines a new web app.\n  title: "Todo app" // Used as a browser tab title.\n}\n\nroute RootRoute { path: "/", to: MainPage } // Render page MainPage on url `/` (default url).\n\npage MainPage {\n  // We specify that ReactJS implementation of our page can be\n  // found in `ext/MainPage.js` as a default export (uses standard\n  // js import syntax).\n  component: import Main from "@ext/MainPage.js"\n}\n')),(0,o.kt)("p",null,"And now to that React component we referenced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"page MainPage { ... }")," declaration in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'},"import React from 'react'\nimport waspLogo from './waspLogo.png'\nimport './Main.css'\n\nconst MainPage = () => {\n  ...\n}\nexport default MainPage\n")),(0,o.kt)("p",null,"As we can see, this is just a simple functional React component using css and wasp logo that are next to it."),(0,o.kt)("p",null,"This is all the code!\nWasp in the background takes care of everything else needed to define, build and run a web app."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"wasp start")," automatically picks up the changes you make and restarts the app, so keep it running."))),(0,o.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,o.kt)("p",null,"Let's make our first changes!\nTo prepare the clean slate for building the TodoApp, delete all the files from ",(0,o.kt)("inlineCode",{parentName:"p"},"ext/")," dir except for ",(0,o.kt)("inlineCode",{parentName:"p"},"MainPage.js"),", and let's also make ",(0,o.kt)("inlineCode",{parentName:"p"},"MainPage")," component much simpler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ext/MainPage.js"',title:'"ext/MainPage.js"'},"import React from 'react'\n\nconst MainPage = () => {\n  return <div> Hello world! </div>\n}\nexport default MainPage\n")),(0,o.kt)("p",null,"At this point, you should be seeing smth like"),(0,o.kt)("img",{alt:"Todo App - Hello World",src:(0,r.Z)("img/todo-app-hello-world.png"),style:{border:"1px solid black"}}),(0,o.kt)("p",null,"Ok, next step, some real Todo app features!"))}d.isMDXComponent=!0}}]);