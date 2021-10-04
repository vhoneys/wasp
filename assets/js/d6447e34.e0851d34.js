(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return a}});var o=n(2263),i=n(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,a=r.forcePrependBaseUrl,s=void 0!==a&&a,l=r.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8648:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return u},toc:function(){return h},default:function(){return m}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=n(4996),s=["components"],l={title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",author:"Martin Sosic",author_title:"Co-founder & CTO @ Wasp",author_url:"https://github.com/martinsos",tags:["discord","nodejs"]},c=void 0,d={permalink:"/blog/2021/04/29/discord-bot-introduction",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2021-04-29-discord-bot-introduction.md",source:"@site/blog/2021-04-29-discord-bot-introduction.md",title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",description:'<img alt="Guest introducing themselves and getting full-access."',date:"2021-04-29T00:00:00.000Z",formattedDate:"April 29, 2021",tags:[{label:"discord",permalink:"/blog/tags/discord"},{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:8.685,truncated:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos"}],prevItem:{title:"Tutorial: `forall` in Haskell",permalink:"/blog/2021/09/01/haskell-forall-tutorial"},nextItem:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",permalink:"/blog/2021/03/02/wasp-alpha"}},u={authorsImageUrls:[void 0]},h=[{value:"High-level approach",id:"high-level-approach",children:[]},{value:"Implementing a Discord Bot (NodeJS)",id:"implementing-a-discord-bot-nodejs",children:[{value:"Defining bot on Discord and adding it to your server.",id:"defining-bot-on-discord-and-adding-it-to-your-server",children:[]},{value:"Creating a basic bot in NodeJS",id:"creating-a-basic-bot-in-nodejs",children:[]},{value:"Detecting a valid introduction from a member",id:"detecting-a-valid-introduction-from-a-member",children:[]},{value:"Removing the &quot;Guest&quot; role upon successful introduction",id:"removing-the-guest-role-upon-successful-introduction",children:[]},{value:"Deploying the bot",id:"deploying-the-bot",children:[]}]}],p={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Guest introducing themselves and getting full-access.",src:(0,a.Z)("img/discord-introduction-example.png")}),(0,r.kt)("figcaption",null,'A Guest user getting access by introducing themselves in the "introductions" channel.'))),(0,r.kt)("p",null,"At ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp"),", we have a Discord server for our community, where we talk with people interested in and using Wasp - Waspeteers!"),(0,r.kt)("p",null,"In the beginning, we knew everybody in the community by their name, but as it started growing, we had a lot of people joining that never wrote anything, and the community started feeling less homey, less intimate."),(0,r.kt)("p",null,"This was when we decided to make it required for the new members to introduce themselves to gain access to the community.\nWe knew that with this kind of barrier we would probably lose some potential new Waspeteers, but those that would go through it would be more engaged and better integrated."),(0,r.kt)("p",null,"We found no other way to accomplish this automatically but to implement our own Discord bot.\nIn this post I will describe in detail how we did it."),(0,r.kt)("h2",{id:"high-level-approach"},"High-level approach"),(0,r.kt)("p",null,'We want the following: when a new user comes to our Discord server, they should be able to access only "public" channels, like ',(0,r.kt)("inlineCode",{parentName:"p"},"rules"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contributing"),", and most importantly, ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions"),", where they could introduce themselves."),(0,r.kt)("p",null,"Once they introduced themselves in the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel, they would get access to the rest of the channels."),(0,r.kt)("p",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Channels user can see when Guest vs when full member.",src:(0,a.Z)("img/wasp-guest-vs-waspeteer.png"),height:"400px"}),(0,r.kt)("figcaption",null,"Left: what Guest sees; Right: what Waspeteer sees."))),(0,r.kt)("p",null,"In Discord, access control is performed via roles. There are two ways to accomplish what we need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Adding a role that grants access"),". When they join, they have no roles. Once they introduce themselves, they are granted a role (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Member")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Waspeteer"),") that is required to access the rest of the server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Removing a role that forbids access"),". When they join, they are automatically assigned a role ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest"),", for which we configured the non-public channels to deny access. Once they introduce themselves, the role ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest")," gets removed and they gain access to the rest of the server.")),(0,r.kt)("p",null,"We decided to go with the second approach since it means we don't have to assign all the existing members with a new role. From now on, we will be talking about how to get this second approach working."),(0,r.kt)("p",null,"To get this going, we need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create role ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest"),' role has permissions to access only "public" channels.\nOne convenient way to go about this is to disable "View Channels" permission for the role ',(0,r.kt)("inlineCode",{parentName:"li"},"Guest"),' at the level of Category, so it propagates to all the channels in it, instead of doing it for every single channel.\nOnce you are done, use the "See server as a role" feature of Discord to confirm that you set the permissions as you wanted.'),(0,r.kt)("li",{parentName:"ol"},"Automatically inform new members that they must introduce themselves in the ",(0,r.kt)("inlineCode",{parentName:"li"},"introductions")," channel with ",(0,r.kt)("inlineCode",{parentName:"li"},"!intro <text_about_me>"),' to gain access to the rest of the server.\nThis can be done via Discord\'s "Welcome Screen" feature or via one of the many existing Discord bots out there offering this functionality.'),(0,r.kt)("li",{parentName:"ol"},"Automatically assign the ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest")," role to a new member when they join the server."),(0,r.kt)("li",{parentName:"ol"},"Automatically remove the ",(0,r.kt)("inlineCode",{parentName:"li"},"Guest")," role when a member introduces themselves in the public ",(0,r.kt)("inlineCode",{parentName:"li"},"introductions")," channel.")),(0,r.kt)("p",null,"#1, #2 and #3 are relatively straight-forward."),(0,r.kt)("p",null,"For the #4 (automatic assignment of the role when a new member joins the server), since Discord doesn't support this directly, you will need a bot to do it.\nLuckily, many bots allow you to auto-assign roles when new members join, and I ended up using ",(0,r.kt)("a",{parentName:"p",href:"https://mee6.xyz/"},"MEE6")," for this.\nI set it up so that when a new member joins, they are immediately assigned a ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," role."),(0,r.kt)("p",null,"However, for the #5 (remove or assign the role on a message in a specific channel), the situation is more complicated - I couldn't find a single bot out there that supports this!\nThe closest I got was with ",(0,r.kt)("a",{parentName:"p",href:"https://carl.gg/"},"Carl Bot"),' and its "tags" feature, which allows you to write custom code, but in the end, it turned out to be too restrictive to accomplish this.\nTherefore, I ended up implementing our own bot (Wasp Bot) that does this.'),(0,r.kt)("h2",{id:"implementing-a-discord-bot-nodejs"},"Implementing a Discord Bot (NodeJS)"),(0,r.kt)("p",null,"I decided to implement a bot in NodeJS since it is easy to get started quickly and there is a good Discord library."),(0,r.kt)("p",null,"I will describe how to create it step by step below, but ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp-bot/tree/4b3858202622c7635aeb6f1d71d9ba9781eea6eb"},"here is the final code of the bot")," if you want to skip ahead."),(0,r.kt)("h3",{id:"defining-bot-on-discord-and-adding-it-to-your-server"},"Defining bot on Discord and adding it to your server."),(0,r.kt)("p",null,"Before we even start implementing the bot, we will tell Discord about it first, in order to obtain the neccessary credentials that we will use in our code, and we will add the bot to our server.\nThere are many tutorials already on how to do this, so I will keep it short."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Discord Developer Portal, create a new Application -> I named it ",(0,r.kt)("inlineCode",{parentName:"li"},"Wasp"),"."),(0,r.kt)("li",{parentName:"ol"},'Go to the "Bot" part of Application "Settings" and add a new bot. I named it ',(0,r.kt)("inlineCode",{parentName:"li"},"WaspBot"),"."),(0,r.kt)("li",{parentName:"ol"},'On the "Bot" page of your freshly created bot, there is a "TOKEN" part -> create a mental note about it, we will need this later when running our bot.'),(0,r.kt)("li",{parentName:"ol"},'Go to the "OAuth2" part of Application "Settings". Here we will define which permissions our bot will have.\nThis is done by checking the permissions we want to give it and then following the URL that will be generated based on our choices.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("inlineCode",{parentName:"li"},"bot"),' under the "SCOPES" section.'),(0,r.kt)("li",{parentName:"ul"},'Scroll down further to find the "BOT PERMISSIONS" section. There, check the ',(0,r.kt)("inlineCode",{parentName:"li"},"Manage Roles"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"View Channels"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Read Message History"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Send Messages"),"."),(0,r.kt)("li",{parentName:"ul"},'Under the "SCOPES" section above, you will see a URL. Copy it into the browser and follow the steps to add the bot to your server.')))),(0,r.kt)("h3",{id:"creating-a-basic-bot-in-nodejs"},"Creating a basic bot in NodeJS"),(0,r.kt)("p",null,"In a directory where your code will be, create a new npm project with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init")," -> set the entry point to ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.js")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),". This will result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file being generated."),(0,r.kt)("p",null,"We will need one important dependency, ",(0,r.kt)("inlineCode",{parentName:"p"},"discord.js"),", to make it easy to work with Discord's API.\nAdd it with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -S discord.js"),"."),(0,r.kt)("p",null,"Now, create ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.js")," file next to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bot.js"',title:'"bot.js"'},"const Discord = require('discord.js')\n\nconst BOT_TOKEN = process.env.BOT_TOKEN\n\nconst bot = new Discord.Client()\nbot.login(BOT_TOKEN)\n\nbot.on('ready', function (evt) {\n  console.log(`Logged in as: ${bot.user.tag}.`)\n})\n")),(0,r.kt)("p",null,"This is it! Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DISCORD_BOT=<TOKEN_OF_YOUR_DISCORD_BOT> node bot.js\n")),(0,r.kt)("p",null,"and you should see output about successful login, in my case it was ",(0,r.kt)("inlineCode",{parentName:"p"},"Logged in as: WaspBot#1234"),"."),(0,r.kt)("h3",{id:"detecting-a-valid-introduction-from-a-member"},"Detecting a valid introduction from a member"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": For the following part, I was using ",(0,r.kt)("a",{parentName:"p",href:"https://discord.js.org/#/"},"Discord.js")," docs to figure out how to do it, so if you need more details on a specific step, check them out."),(0,r.kt)("p",null,"Now is the moment to define exactly how we want the introduction process to go.\nSo, let's say that the correct way for new members to introduce themselves is by sending a message to the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"!intro ")," and follows with at least 20 characters of text (to ensure the introduction is not too short).\n",(0,r.kt)("inlineCode",{parentName:"p"},"!intro")," makes it easy for our bot to know when to act (in Discord, bot commands often start with ",(0,r.kt)("inlineCode",{parentName:"p"},"!<something>"),")."),(0,r.kt)("p",null,"Let's add the needed code to ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bot.js"',title:'"bot.js"'},"...\n\nconst INTRODUCTIONS_CHANNEL_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\n\nbot.on('message', async msg => {\n  if (msg.content.startsWith('!intro ')) {\n    if (msg.channel.id.toString() !== INTRODUCTIONS_CHANNEL_ID) {\n      const introductionsChannelName =\n        msg.guild.channels.resolve(INTRODUCTIONS_CHANNEL_ID).name\n      return msg.reply(\n        `Please use !intro command in the ${introductionsChannelName} channel!`\n      )\n    }\n\n    const introMsg = msg.content.substring('!intro '.length).trim()\n    const minMsgLength = 20\n    if (introMsg.length < minMsgLength) {\n      return msg.reply(\n        `Please write introduction at least ${minMsgLength} characters long!`\n      )\n    }\n\n    return msg.reply(`Yay successful introduction!`)\n  }\n})\n")),(0,r.kt)("p",null,"One thing to notice is that you will have to obtain the ID of the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel and paste it in your code where I put the placeholder above.\nYou can find out this ID by going to your Discord server in the Discord app, right-clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel, and clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy ID"),'. For this to work, you will first have to enable the "Developer Mode" (under "User Settings" > "Advanced").'),(0,r.kt)("h3",{id:"removing-the-guest-role-upon-successful-introduction"},'Removing the "Guest" role upon successful introduction'),(0,r.kt)("p",null,"What is missing is removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," role upon successful introduction, so let's do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'{4,24-35} title="bot.js"',"{4,24-35}":!0,title:'"bot.js"'},"...\n\nconst INTRODUCTIONS_CHANNEL_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\nconst GUEST_ROLE_ID = \"<YOU_WILL_HAVE_TO_FIND_THIS_ON_DISCORD_SERVER>\"\n\nbot.on('message', async msg => {\n  if (msg.content.startsWith('!intro ')) {\n    if (msg.channel.id.toString() !== INTRODUCTIONS_CHANNEL_ID) {\n      const introductionsChannelName =\n        msg.guild.channels.resolve(INTRODUCTIONS_CHANNEL_ID).name\n      return msg.reply(\n      `Please use !intro command in the ${introductionsChannelName} channel!`\n      )\n    }\n\n    const introMsg = msg.content.substring('!intro '.length).trim()\n    const minMsgLength = 20\n    if (introMsg.length < minMsgLength) {\n      return msg.reply(\n        `Please write introduction at least ${minMsgLength} characters long!`\n      )\n    }\n\n    const member = msg.guild.member(msg.author)\n    try {\n      if (member.roles.cache.get(GUEST_ROLE_ID)) {\n        await member.roles.remove(GUEST_ROLE_ID)\n        return msg.reply(\n          'Nice getting to know you! You are no longer a guest' +\n          ' and have full access, welcome!'\n        )\n      }\n    } catch (error) {\n      return msg.reply(`Error: ${error}`)\n    }\n  }\n})\n")),(0,r.kt)("p",null,"Same as with the ID of the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel, now you will also need to find out the ID of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest"),' role (which you should have created at some point).\nYou can do it by finding it in the server settings, under the list of roles, right-clicking on it, and then "Copy ID".'),(0,r.kt)("p",null,"This is it! You can now run the bot with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"DISCORD_BOT=<TOKEN_OF_YOUR_DISCORD_BOT> node bot.js\n")),(0,r.kt)("p",null,"and if you assign yourself a ",(0,r.kt)("inlineCode",{parentName:"p"},"Guest")," role on the Discord server and then type ",(0,r.kt)("inlineCode",{parentName:"p"},"!intro Hi this is my introduction, I am happy to be here.")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"introductions")," channel, you should see yourself getting full access together with an appropriate message from your bot."),(0,r.kt)("h3",{id:"deploying-the-bot"},"Deploying the bot"),(0,r.kt)("p",null,"While there are many ways to deploy the Discord bot, I will shortly describe how we did it via Heroku."),(0,r.kt)("p",null,"We created a Heroku app ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-discord-bot"),' and set up the "Automatic deploys" feature on Heroku to automatically deploy every push to the ',(0,r.kt)("inlineCode",{parentName:"p"},"production")," branch (our bot is on Github)."),(0,r.kt)("p",null,"On Heroku, we set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"DISCORD_BOT")," to the token of our bot."),(0,r.kt)("p",null,"Finally, we added ",(0,r.kt)("inlineCode",{parentName:"p"},"Procfile")," to our project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Procfile"',title:'"Procfile"'},"worker: node bot.js\n")),(0,r.kt)("p",null,"That is it! On every push to the ",(0,r.kt)("inlineCode",{parentName:"p"},"production")," branch, our bot gets deployed."))}m.isMDXComponent=!0}}]);