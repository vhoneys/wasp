(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1838],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4780:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){return r.createElement("span",null,r.createElement("a",{href:"https://discord.gg/rzdnErX"}," Discord "))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8177:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=n(4996),s=n(4780),u=["components"],c={title:"Introduction"},l=void 0,p={unversionedId:"tutorials/dev-excuses-app",id:"tutorials/dev-excuses-app",isDocsHomePage:!1,title:"Introduction",description:"Make sure you've set up Wasp! Check out Getting Started first for installation instructions, and then continue with the tutorial. In case of any issues - please, ping us on .",source:"@site/docs/tutorials/dev-excuses-app.md",sourceDirName:"tutorials",slug:"/tutorials/dev-excuses-app",permalink:"/docs/tutorials/dev-excuses-app",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/tutorials/dev-excuses-app.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"The End",permalink:"/docs/tutorials/todo-app/08-the-end"},next:{title:"Creating the project",permalink:"/docs/tutorials/dev-excuses-app/01-creating-the-project"}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you've set up Wasp! Check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"Getting Started")," first for installation instructions, and then continue with the tutorial. In case of any issues - please, ping us on ",(0,i.kt)(s.Z,{mdxType:"DiscordLink"}),". "))),(0,i.kt)("p",null,"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! We will start with a single config file that outlines the full-stack architecture of our app plus several dozen lines of code for our specific business logic. There's no faster way to do it, so we can\u2019t excuse ourselves from building it!"),(0,i.kt)("p",null,"We\u2019ll use Michele Gerarduzzi\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/michelegera/devexcuses-api"},"open-source project"),". It provides a simple API and a solid number of predefined excuses. A perfect fit for our needs. Let\u2019s define the requirements for the project: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The app must be able to pull excuses data from a public API. "),(0,i.kt)("li",{parentName:"ul"},"Users can save the excuses they like (and your boss doesn't) to the database for future reference."),(0,i.kt)("li",{parentName:"ul"},"Building an app shouldn\u2019t take more than 15 minutes."),(0,i.kt)("li",{parentName:"ul"},"Use modern web dev technologies (NodeJS + React)")),(0,i.kt)("p",null,"As a result \u2013 we\u2019ll get a simple and fun pet project. You can find the complete codebase ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/examples/tutorials/ItWaspsOnMyMachine"},"here"),". "),(0,i.kt)("img",{alt:"Final result",src:(0,a.Z)("img/dev-excuses-live-preview.gif")}))}m.isMDXComponent=!0}}]);