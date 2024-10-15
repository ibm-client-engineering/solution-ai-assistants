"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9779],{702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(5893),i=n(1151);const a={title:"Hosted Static Site"},o=void 0,c={id:"Create/User Interface Integrations/Hosted Static Site",title:"Hosted Static Site",description:"Embed AI Assistant in code source",source:"@site/docs/03-Create/05-User Interface Integrations/02-Hosted Static Site.mdx",sourceDirName:"03-Create/05-User Interface Integrations",slug:"/Create/User Interface Integrations/Hosted Static Site",permalink:"/solution-ai-assistants/Create/User Interface Integrations/Hosted Static Site",draft:!1,unlisted:!1,editUrl:"https://github.com/ibm-client-engineering/solution-ai-assistants/tree/main/packages/create-docusaurus/templates/shared/docs/03-Create/05-User Interface Integrations/02-Hosted Static Site.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hosted Static Site"},sidebar:"tutorialSidebar",previous:{title:"Microsoft Teams",permalink:"/solution-ai-assistants/Create/User Interface Integrations/solution-prepare-optional-msteams"},next:{title:"Sample Page",permalink:"/solution-ai-assistants/Takeaways/sample"}},r={},l=[{value:"Embed AI Assistant in code source",id:"embed-ai-assistant-in-code-source",level:3},{value:"Host Static Site",id:"host-static-site",level:3},{value:"Create Cloud Object Storage (COS) Instance",id:"create-cloud-object-storage-cos-instance",level:4},{value:"Create a Custom COS Bucket",id:"create-a-custom-cos-bucket",level:4},{value:"<strong>Upload HTML file</strong>",id:"upload-html-file",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"embed-ai-assistant-in-code-source",children:"Embed AI Assistant in code source"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open your Assistant instance and find the embed script tag following ",(0,s.jsx)(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-deploy-web-chat",children:"these instructions"}),":","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Within the Assitant Builder\'s sidebar, navigate to the "Integrations" section'}),"\n",(0,s.jsx)(t.li,{children:'Under the "Essential channels" section select "Open" within the "Webchat" channel'}),"\n",(0,s.jsx)(t.li,{children:'Select the appropriate environment and navigate to the "Embed" tab'}),"\n",(0,s.jsx)(t.li,{children:"Copy the provided script"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Create a new HTML file using an editor of your choice and create the general structure of the file as shown below."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<html>\n<head></head>\n<body>\n    <title>My Test Page</title>\n    <p>The body of my page.</p>\n    <-- Insert Script Element --\x3e\n    </body>\n</html>\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Add your script element as shown below and open the HTML file using a browser to confirm the watsonx assistant chat is rendering correctly. You can also simply copy the code below and add your ",(0,s.jsx)(t.code,{children:"integrationID"}),", ",(0,s.jsx)(t.code,{children:"serviceInstanceID"}),", and update your ",(0,s.jsx)(t.code,{children:"region"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'<html>\n<head></head>\n<body>\n    <title>My Test Page</title>\n    <p>The body of my page.</p>\n    <script>\n        window.watsonAssistantChatOptions = {\n            integrationID: "[Insert integrationID]", // The ID of this integration.\n            region: "us-south", // The region your integration is hosted in.\n            serviceInstanceID: "[Insert serviceInstanceID]", // The ID of your service instance.\n            onLoad: async (instance) => { await instance.render(); }\n        };\n        setTimeout(function(){\n            const t=document.createElement(\'script\');\n            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || \'latest\') + "/WatsonAssistantChatEntry.js";\n            document.head.appendChild(t);\n        });\n    <\/script>\n    </body>\n</html>\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"If you wish to customize the web chat with options such as adding a restart button or adjusting the size, follow these links:"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-web-chat-develop-size-position",children:"Customizing size and position of web chat"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration",children:"Advanced configuration options"})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"host-static-site",children:"Host Static Site"}),"\n",(0,s.jsx)(t.h4,{id:"create-cloud-object-storage-cos-instance",children:"Create Cloud Object Storage (COS) Instance"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:['Go to the dedicated IBM Cloud Account "Resource" List ',(0,s.jsx)(t.a,{href:"https://cloud.ibm.com/resources",children:"here"}),' and click "Create Resource +"']}),"\n",(0,s.jsx)(t.li,{children:'Search and select "Object Storage"'}),"\n",(0,s.jsx)(t.li,{children:'Select "IBM Cloud" as the infrastructure and the appropriate pricing plan'}),"\n",(0,s.jsx)(t.li,{children:'Name the service and click "Create"'}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"create-a-custom-cos-bucket",children:"Create a Custom COS Bucket"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'From the "Resource" List select the newly created COS instance'}),"\n",(0,s.jsx)(t.li,{children:'Click "Create a Custom Bucket"'}),"\n",(0,s.jsx)(t.li,{children:'Enter a valid bucket name and select the appropriate values for "Resiliency", "Location", "Storage class", "Object Versioning" and "Immutablity"'}),"\n",(0,s.jsxs)(t.li,{children:['Within the section "Advanced configurations (optional)" click the "Add +" for "Static website hosting"',"\n",(0,s.jsx)("img",{src:"https://media.github.ibm.com/user/386696/files/4aad2214-1dac-445e-9d9d-9440ab2e18f8",alt:"COS Static website",width:"600"}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:'Ensure the "Public access" toggle is switched to "On"'}),"\n",(0,s.jsx)(t.li,{children:"Enter the name of the target html file which will be used to build the desired web app"}),"\n",(0,s.jsx)(t.li,{children:'Click "Save" and then click "Create bucket"'}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"upload-html-file",children:(0,s.jsx)(t.strong,{children:"Upload HTML file"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Upload the HTML file you created ",(0,s.jsx)(t.a,{href:"#embed-ai-assistant-in-code-source",children:"here"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);