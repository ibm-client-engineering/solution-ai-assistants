"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2730],{5008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151);const o={id:"solution-prepare-optional-msteams",sidebar_position:1,title:"Microsoft Teams"},r=void 0,a={id:"Create/User Interface Integrations/solution-prepare-optional-msteams",title:"Microsoft Teams",description:"Integrate Watson Assistant with Microsoft Teams",source:"@site/docs/03-Create/05-User Interface Integrations/01-Microsoft Teams.mdx",sourceDirName:"03-Create/05-User Interface Integrations",slug:"/Create/User Interface Integrations/solution-prepare-optional-msteams",permalink:"/solution-ai-assistants/Create/User Interface Integrations/solution-prepare-optional-msteams",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-ai-assistants/tree/main/packages/create-docusaurus/templates/shared/docs/03-Create/05-User Interface Integrations/01-Microsoft Teams.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"solution-prepare-optional-msteams",sidebar_position:1,title:"Microsoft Teams"},sidebar:"tutorialSidebar",previous:{title:"Genesys Integration",permalink:"/solution-ai-assistants/Create/Live Agent Integrations/Genesys Integration"},next:{title:"Hosted Static Site",permalink:"/solution-ai-assistants/Create/User Interface Integrations/Hosted Static Site"}},l={},c=[{value:"Integrate Watson Assistant with Microsoft Teams",id:"integrate-watson-assistant-with-microsoft-teams",level:2},{value:"Pre-Requisites to integrate Microsoft Teams",id:"pre-requisites-to-integrate-microsoft-teams",level:4},{value:"High level Steps",id:"high-level-steps",level:4},{value:"Create Microsoft Teams custom extension <a></a>",id:"create-microsoft-teams-custom-extension-",level:3},{value:"Import Bot into Microsoft Teams <a></a>",id:"import-bot-into-microsoft-teams-",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"integrate-watson-assistant-with-microsoft-teams",children:"Integrate Watson Assistant with Microsoft Teams"}),"\n",(0,i.jsx)(t.h4,{id:"pre-requisites-to-integrate-microsoft-teams",children:"Pre-Requisites to integrate Microsoft Teams"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Microsoft admin account"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"high-level-steps",children:"High level Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#create-microsoft-teams-custom-extension",children:"Create Microsoft Teams custom extension"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"App registration"}),"\n",(0,i.jsx)(t.li,{children:"Create your bot"}),"\n",(0,i.jsx)(t.li,{children:"Create your Teams app"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#import-bot-into-microsoft-teams",children:"Export MS Teams App and import to MS Teams Platform"})}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"create-microsoft-teams-custom-extension-",children:["Create Microsoft Teams custom extension ",(0,i.jsx)("a",{name:"create-microsoft-teams-custom-extension"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Navigate to "Integrations" tab. Within Channels section, find "Microsoft Teams" and click "Add", and "Add".'}),"\n",(0,i.jsx)(t.li,{children:'Click "Next" and stay on the "App registration" step'}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"App registration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open a new tab, and go to ",(0,i.jsx)(t.a,{href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",children:"Microsoft Azure App Registration"})," and log in with your credentials."]}),"\n",(0,i.jsxs)(t.li,{children:['On the App registrations page, click "New registration". In the "Register an application" page, type a name, select the ',(0,i.jsx)(t.code,{children:"Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant)"}),' , then click "Register".']}),"\n",(0,i.jsx)(t.li,{children:'Copy the Application (client) ID and paste it back to Watson Assistant\'s "App registration" step 3'}),"\n",(0,i.jsx)(t.li,{children:'Navigate back to Azure App Registration tab, navigate to Overview. In the Essentials section, next to Client credentials, click "Add a certificate or secret".'}),"\n",(0,i.jsx)(t.li,{children:'Click "New client secret"'}),"\n",(0,i.jsx)(t.li,{children:'Complete the form with the recommended 180-day expiration date, or whichever selection best fits your use case, then click "Add".'}),"\n",(0,i.jsx)(t.li,{children:'Copy the string under the value section of the table and paste it back to Watson Assistant\'s "App registration" step 5.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create your bot"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'In Watson Assistant, Click "Next" to "Create your bot" step.'}),"\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://dev.botframework.com/bots/new",children:"Microsoft's Bot Framework developer portal"})," and log in with your credentials."]}),"\n",(0,i.jsx)(t.li,{children:'In the "Tell us about your bot" form, fill out your bot profile.'}),"\n",(0,i.jsxs)(t.li,{children:["Under the Configuration section, in the Messaging endpoint field, navigate to watson assistant page and copy the Generated endpoint and paste into ",(0,i.jsx)(t.strong,{children:"Messaging endpoint"}),' in the "Tell us about your bot" form.']}),"\n",(0,i.jsx)(t.li,{children:"Under the Configuration section, make sure your app type is Multi-Tenant."}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Microsoft App ID"}),' field, paste your Application (client) ID. Agree the terms and Click "Register" to finish.']}),"\n",(0,i.jsx)(t.li,{children:'Click "Ok" and it will show the "Connect to channels" page.'}),"\n",(0,i.jsxs)(t.li,{children:["Under Add a featured channel, click ",(0,i.jsx)(t.strong,{children:'"Configure Microsoft Teams Channel"'}),'. Make the necessary selections under Messaging and Publish sections that best fit your bot needs. Click "Save" to finish. Agree the terms and click "Agree".']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create your Teams app"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'In Watson Assistant, Click "Next" to "Create your Teams app" step.'}),"\n",(0,i.jsxs)(t.li,{children:["Open a new tab and go to the ",(0,i.jsx)(t.a,{href:"https://dev.teams.microsoft.com/home",children:"Developer Portal"})," and log in with your credentials."]}),"\n",(0,i.jsx)(t.li,{children:'Click on the "Apps" tab, and click "New App".'}),"\n",(0,i.jsx)(t.li,{children:"Enter your app name and click Add."}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Configure -> Basic information"}),", complete the required information","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"App names"}),"\n",(0,i.jsx)(t.li,{children:"Descriptions"}),"\n",(0,i.jsxs)(t.li,{children:["Developer or company name: ",(0,i.jsx)(t.code,{children:"IBM Client Engineering"})]}),"\n",(0,i.jsxs)(t.li,{children:["Website (must be a valid HTTPS URL): ",(0,i.jsx)(t.code,{children:"https://www.ibm.com/client-engineering"})]}),"\n",(0,i.jsxs)(t.li,{children:["Privacy policy: ",(0,i.jsx)(t.code,{children:"https://www.ibm.com/us-en/privacy"})]}),"\n",(0,i.jsxs)(t.li,{children:["Terms of use: ",(0,i.jsx)(t.code,{children:"https://www.ibm.com/legal"})]}),"\n",(0,i.jsx)(t.li,{children:"Application (client) ID"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:'Click "Save".'}),"\n",(0,i.jsxs)(t.li,{children:["Under ",(0,i.jsx)(t.strong,{children:"Configure -> App Features"}),', click "Bot"']}),"\n",(0,i.jsx)(t.li,{children:"In the Select an existing bot dropdown, select the new bot you created in the previous step."}),"\n",(0,i.jsxs)(t.li,{children:["Select the following scopes of use: ",(0,i.jsx)(t.strong,{children:"Personal, Team, and Group Chat"}),". Click Save."]}),"\n",(0,i.jsxs)(t.li,{children:["Click Publish in the upper-right corner to publish your bot. Select ",(0,i.jsx)(t.strong,{children:'"Download the app package"'})," or the option that best fits your use case. A zip file will be downloaded."]}),"\n",(0,i.jsx)(t.li,{children:'Navigate back to Watson Assistant page and click "Finish".'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h3,{id:"import-bot-into-microsoft-teams-",children:["Import Bot into Microsoft Teams ",(0,i.jsx)("a",{name:"import-bot-into-microsoft-teams"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open a new tab and go to  ",(0,i.jsx)(t.a,{href:"https://teams.microsoft.com/",children:"Microsoft Teams"}),"."]}),"\n",(0,i.jsx)(t.li,{children:'On the left hand side list, click "Apps".'}),"\n",(0,i.jsx)(t.li,{children:'Click "Manage your apps"'}),"\n",(0,i.jsx)(t.li,{children:'Click "upload an app"'}),"\n",(0,i.jsx)(t.li,{children:'Click "upload a custom app", and select the zip file downloaded from the previous step. Click "Add".'}),"\n",(0,i.jsx)(t.li,{children:"Start chatting with the Watson Assistant Bot in Microsoft Teams!"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);