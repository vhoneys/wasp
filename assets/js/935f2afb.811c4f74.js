"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Introduction","collapsed":false,"items":[{"type":"link","label":"Getting Started","href":"/docs/","docId":"getting-started"},{"type":"link","label":"What is Wasp?","href":"/docs/about","docId":"about"},{"type":"link","label":"How it works","href":"/docs/how-it-works","docId":"how-it-works"}],"collapsible":true},{"type":"category","label":"Tutorials","collapsed":false,"items":[{"type":"category","label":"Todo app","collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/tutorials/todo-app","docId":"tutorials/todo-app"},{"type":"category","label":"Basics","collapsed":true,"items":[{"type":"link","label":"Creating new project","href":"/docs/tutorials/todo-app/01-creating-new-project","docId":"tutorials/todo-app/01-creating-new-project"},{"type":"link","label":"Task entity","href":"/docs/tutorials/todo-app/02-task-entity","docId":"tutorials/todo-app/02-task-entity"},{"type":"link","label":"Listing tasks","href":"/docs/tutorials/todo-app/03-listing-tasks","docId":"tutorials/todo-app/03-listing-tasks"},{"type":"link","label":"Creating tasks","href":"/docs/tutorials/todo-app/04-creating-tasks","docId":"tutorials/todo-app/04-creating-tasks"},{"type":"link","label":"Updating tasks","href":"/docs/tutorials/todo-app/05-updating-tasks","docId":"tutorials/todo-app/05-updating-tasks"}],"collapsible":true},{"type":"link","label":"Authentication","href":"/docs/tutorials/todo-app/06-auth","docId":"tutorials/todo-app/06-auth"},{"type":"link","label":"Dependencies","href":"/docs/tutorials/todo-app/07-dependencies","docId":"tutorials/todo-app/07-dependencies"},{"type":"link","label":"The End","href":"/docs/tutorials/todo-app/08-the-end","docId":"tutorials/todo-app/08-the-end"}],"collapsible":true}],"collapsible":true},{"type":"category","label":"Language","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/docs/language/overview","docId":"language/overview"},{"type":"link","label":"Syntax","href":"/docs/language/syntax","docId":"language/syntax"},{"type":"link","label":"Features","href":"/docs/language/features","docId":"language/features"}],"collapsible":true},{"type":"link","label":"CLI Reference","href":"/docs/cli","docId":"cli"},{"type":"link","label":"Deploying","href":"/docs/deploying","docId":"deploying"},{"type":"link","label":"Examples","href":"/docs/examples","docId":"examples"},{"type":"category","label":"Integrations","collapsed":false,"items":[{"type":"link","label":"Google Integrations","href":"/docs/integrations/google","docId":"integrations/google"},{"type":"link","label":"CSS Frameworks","href":"/docs/integrations/css-frameworks","docId":"integrations/css-frameworks"}],"collapsible":true},{"type":"category","label":"Other","collapsed":false,"items":[{"type":"link","label":"Contributing","href":"/docs/contributing","docId":"contributing"},{"type":"link","label":"Vision","href":"/docs/vision","docId":"vision"},{"type":"link","label":"Telemetry","href":"/docs/telemetry","docId":"telemetry"},{"type":"link","label":"Contact","href":"/docs/contact","docId":"contact"}],"collapsible":true}]},"docs":{"about":{"id":"about","title":"Introduction","description":"Thanks a lot for giving Wasp a try! In the sections below we will give a short overview of what it is, how","sidebar":"docs"},"cli":{"id":"cli","title":"CLI Reference","description":"This document describes the Wasp CLI commands, arguments, and options.","sidebar":"docs"},"contact":{"id":"contact","title":"Contact","description":"You can find us on Discord or you can reach out to us via email at hi@wasp-lang.dev.","sidebar":"docs"},"contributing":{"id":"contributing","title":"Contributing","description":"Any way you want to contribute is a good way, and we\'d be happy to meet you! A single entry point for all contributors is the CONTRIBUTING.md file in our Github repo. All the requirements and instructions are there, so please check CONTRIBUTING.md for more details.","sidebar":"docs"},"deploying":{"id":"deploying","title":"Deploying","description":"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly a bit bigger changes in the future.","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"Todo App:","sidebar":"docs"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"Give Wasp a spin in the browser without any setup by running our Wasp Template for Gitpod","sidebar":"docs"},"how-it-works":{"id":"how-it-works","title":"How it works","description":"At its core, Wasp works like any other language: input files written in the source, higher-level language are","sidebar":"docs"},"integrations/css-frameworks":{"id":"integrations/css-frameworks","title":"CSS Frameworks","description":"Tailwind","sidebar":"docs"},"integrations/google":{"id":"integrations/google","title":"Google Integrations","description":"Google Auth","sidebar":"docs"},"language/features":{"id":"language/features","title":"Features","description":"App","sidebar":"docs"},"language/overview":{"id":"language/overview","title":"Overview","description":"Wasp is a declarative language that recognizes web application-specific terms (e.g. page or route) as","sidebar":"docs"},"language/syntax":{"id":"language/syntax","title":"Syntax","description":"Wasp is a declarative, statically typed, domain specific language (DSL).","sidebar":"docs"},"telemetry":{"id":"telemetry","title":"Telemetry","description":"Overview","sidebar":"docs"},"tutorials/dev-excuses-app":{"id":"tutorials/dev-excuses-app","title":"Introduction","description":"Make sure you\'ve set up Wasp! Check out Getting Started first for installation instructions, and then continue with the tutorial. In case of any issues - please, ping us on ."},"tutorials/dev-excuses-app/01-creating-the-project":{"id":"tutorials/dev-excuses-app/01-creating-the-project","title":"Creating the project","description":"By now you\'ve already learned how to install Wasp and create a new project. So let\u2019s create a new web app appropriately named ItWaspsOnMyMachine."},"tutorials/dev-excuses-app/02-modifying-main-wasp-file":{"id":"tutorials/dev-excuses-app/02-modifying-main-wasp-file","title":"Modifying main.wasp file","description":"First and foremost, we need to add some dependencies and introduce operations to our project. We\u2019ll add Tailwind to make our UI prettier and Axios for making API requests."},"tutorials/dev-excuses-app/03-adding-operations":{"id":"tutorials/dev-excuses-app/03-adding-operations","title":"Adding operations","description":"Now you\'ll need to create two files: actions.js and queries.js in the ext folder."},"tutorials/dev-excuses-app/04-updating-main-page-js-file":{"id":"tutorials/dev-excuses-app/04-updating-main-page-js-file","title":"Updating MainPage.js file","description":"This is the most complex part, but it really comes down to mostly writing React. To make our life easier - let\u2019s erase everything we had in the MainPage.js file and substitute it with our new UI markup."},"tutorials/dev-excuses-app/05-perform-migration-and-run":{"id":"tutorials/dev-excuses-app/05-perform-migration-and-run","title":"Perform migration and run the app","description":"Before we run our app, we need to execute a database migration. We changed the DB schema by adding new entities. By doing the migration, we sync the database schema with the entities we defined. If you\u2019ve had something running in the terminal \u2013 stop it and run:"},"tutorials/todo-app":{"id":"tutorials/todo-app","title":"Introduction","description":"It\'s possible because we\'ve set up an in-browser dev environment for you on Gitpod.","sidebar":"docs"},"tutorials/todo-app/01-creating-new-project":{"id":"tutorials/todo-app/01-creating-new-project","title":"Creating new project","description":"Run the following command in your terminal to create a new Wasp project:","sidebar":"docs"},"tutorials/todo-app/02-task-entity":{"id":"tutorials/todo-app/02-task-entity","title":"Task entity","description":"Entities are one of the very central concepts in Wasp, and they mainly play the role of data models.","sidebar":"docs"},"tutorials/todo-app/03-listing-tasks":{"id":"tutorials/todo-app/03-listing-tasks","title":"Listing tasks","description":"We want to admire our tasks, so let\'s list them!","sidebar":"docs"},"tutorials/todo-app/04-creating-tasks":{"id":"tutorials/todo-app/04-creating-tasks","title":"Creating tasks","description":"To enable the creation of new tasks, we will need two things:","sidebar":"docs"},"tutorials/todo-app/05-updating-tasks":{"id":"tutorials/todo-app/05-updating-tasks","title":"Updating tasks","description":"The Todo app isn\'t done if you can\'t mark a task as done!","sidebar":"docs"},"tutorials/todo-app/06-auth":{"id":"tutorials/todo-app/06-auth","title":"Authentication","description":"Most of the apps today are multi-user, and Wasp has first-class support for it, so let\'s see how to add it to our Todo app!","sidebar":"docs"},"tutorials/todo-app/07-dependencies":{"id":"tutorials/todo-app/07-dependencies","title":"Dependencies","description":"What is a Todo app without some clocks!? Well, still a Todo app, but certainly not as fun as one with clocks!","sidebar":"docs"},"tutorials/todo-app/08-the-end":{"id":"tutorials/todo-app/08-the-end","title":"The End","description":"We did it! For all those that followed the instructions closely and created \\"Build a Todo App in Wasp\\" task in our Todo App, let\'s celebrate by marking it as done :)!","sidebar":"docs"},"vision":{"id":"vision","title":"Vision","description":"With Wasp, we want to make developing web apps easy and enjoyable, for novices and experts in web development alike.","sidebar":"docs"}}}')}}]);