"use strict";(self.webpackChunkartela_docs=self.webpackChunkartela_docs||[]).push([[4416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="Chain-Native Pattern",s={unversionedId:"Core-Concepts/Chain-Native-Pattern",id:"Core-Concepts/Chain-Native-Pattern",title:"Chain-Native Pattern",description:"1. What is Chain-Native Pattern?",source:"@site/docs/Core-Concepts/01-Chain-Native-Pattern.md",sourceDirName:"Core-Concepts",slug:"/Core-Concepts/Chain-Native-Pattern",permalink:"/Core-Concepts/Chain-Native-Pattern",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/main"},next:{title:"Aspect Programming",permalink:"/Core-Concepts/Aspect-Programming"}},l={},c=[{value:"1. What is Chain-Native Pattern?",id:"1-what-is-chain-native-pattern",level:2},{value:"2. Blockchain in Chain-Native Pattern",id:"2-blockchain-in-chain-native-pattern",level:2},{value:"3. dApps in Chain-Native Pattern",id:"3-dapps-in-chain-native-pattern",level:2},{value:"4. How does Chain-Native benefit dApp?",id:"4-how-does-chain-native-benefit-dapp",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-native-pattern"},"Chain-Native Pattern"),(0,i.kt)("h2",{id:"1-what-is-chain-native-pattern"},"1. What is Chain-Native Pattern?"),(0,i.kt)("p",null,"Chain-Native Pattern is an dApp design pattern based on \u201cNative Extension\u201d. In \u201cNative Extension\u201d, extension program can be added dynamically to the running environment. By doing so, it is possible to introduce a middle state in the state-transition process. "),(0,i.kt)("p",null,"Chain-Native Pattern can be used to introduce custom logic into the transaction process. For example, it can be used to perform additional validation checks on transactions, or to implement custom business rules that are specific to a particular use case."),(0,i.kt)("p",null,"Chain-Native Pattern involves defining a set of extension joint points in the core layer of the blockchain. These extension points can be used to load and execute custom modules at runtime. These custom modules are natively extended from the base layer of the running environment, and can be combined with lightweight smart contracts to allow dApps to be built in a fully customized and plug-and-play manner."),(0,i.kt)("h2",{id:"2-blockchain-in-chain-native-pattern"},"2. Blockchain in Chain-Native Pattern"),(0,i.kt)("p",null,"In Chain-Native pattern, the blockchain architecture is typically divided into three layers: the base layer, the extension layer and the application layer, with an emphasis on extension layer."),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(4142).Z,alt:"1",width:"70%"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Application Layer:")," Developers deploy Smart Contracts on the application layer to implement the core business logic of dApps. The application layer provides an execution environment that is consistent with the traditional EVM blockchain function, and is compatible with existing infrastructure (ChainLink, TheGraph, etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Extension Layer:")," Provide the environment for Native Extensions. Developers can extend the base layer modules natively and build customizable module as a public/private service. Native Extensions can be combined with each other and with Smart Contracts. Native Extensions are securely isolated from the base layer, ensuring that they have no impact on the security or availability of the core network.\n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Base Layer:")," Core running environment with basic modules, including network, storage, general VMs as well as consensus engine."))),(0,i.kt)("p",null,"Based on the Chain-Native Pattern, developers can build feature-rich dApps more efficiently. In comparison to building AppChains and interconnecting them, Chain-Native offers a lightweight, customizable, modular, and composable technical solution."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-dapps-in-chain-native-pattern"},"3. dApps in Chain-Native Pattern"),(0,i.kt)("p",null,"Chain-Native Pattern provides developers with the ability to build and run Native Extensions. Within Chain-Native Pattern, dApps consist of two parts: Smart Contracts and Native Extensions."),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(8645).Z,alt:"2",width:"70%"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Smart Contract:")),(0,i.kt)("p",null,"A computer protocol that runs on the blockchain network and performs trusted transactions without the need for third-party intervention. Developers can use Smart Contracts to implement the main business logic of dApps."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Native Extension:")),(0,i.kt)("p",null,"Modular components run on the extension layer. Developers are capable of tailoring the processing logic and achieving highly customized functions through the Base Layer API. With the use of the Native Extension, developers can incorporate additional features into their dApp, such as automated transaction and risk control during transaction processing. Smart contracts can be combined with multiple Native Extensions, and each individual Smart contract can be paired with different sets of Native Extensions."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Base Layer API:The blockchain base layer can expose a set of API interfaces to the extension layer. The base layer is a collection of processing modules, such as the blockchain network, consensus, and storage. Through the interfaces, it provides customized capabilities for some basic features to the extension layer. Under the Chain-Native pattern, the capabilities of the Base Layer API are strictly controlled, and abnormal callers will not cause any availability issues to the blockchain network.")),(0,i.kt)("p",null,"dApps under the Chain-Native Pattern are a combination of Smart Contract and Native Extensions, which developers can freely combine and use according to specific needs."),(0,i.kt)("p",null,"Developers can build not only the lightweight dApps that only contain Smart Contracts but also develop Native Extensions to share with others. The continuous accumulation of excellent Native Extensions will not only lower the threshold for building dApps but also benefit developers and the community."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"4-how-does-chain-native-benefit-dapp"},"4. How does Chain-Native benefit dApp?"),(0,i.kt)("p",null,"Chain-Native is an innovative technical paradigm proposed by the Artela team for application-specific requirements. It will bring many positive changes to dApp construction. Customization, modularity, and composability are the goals that Chain-Native continues to pursue."),(0,i.kt)("p",null,"Chain-Native Pattern offers developers a new approach to building dApps. With this pattern, developers are no longer required to develop and maintain AppChain separately. Instead, they can develop customized features on the Base Layer using Native Extension. In this way, dApps can reuse and benefit from the capabilities provided by public Native Extension. The combination of Smart Contract and Native Extension makes it easier to build more powerful and independent dApps. The benefits that Chain-Native provides to dApps include the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"More flexible function extension"),"\nNative Extension is a feature extension based on the main-net. Unlike cross-chain solutions such as AppChain, which share security, Native Extension provides built-in extensibility. This allows for more accurate and efficient operations on the same network environment. The combination of Smart Contract and Native Extension gives dApps more flexible extension capabilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"More independent dApps"),"\nAdding global functionality to the underlying blockchain usually requires a long development and verification cycle, balancing stability and the universality of functionalities. With Chain-Native, dApps can extend blockchain capabilities that only apply to themselves, without requiring global upgrades of network nodes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Reusable public services"),"\nNative Extension can be released as independent base services. Developers can choose to integrate these base services when building dApps. This modular construction method reduces code redundancy, enhances software modularity, and improves software security."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"More efficient operation and management"),"\nNative Extension is deployed and run as a functional component in the extension layer, without requiring any changes to Smart Contract code. Native Extension provides a very efficient control aspect that allows developers to achieve operational management such as transaction risk control and anti-money laundering by combining it before and after the Smart Contract transaction execution.")),(0,i.kt)("p",null,"Chain-Native is an innovative technical paradigm proposed by the Artela team for application-specific requirements. It will bring many positive changes to dApp construction. Customization, modularity, and composability are the goals that Chain-Native continues to pursue."))}h.isMDXComponent=!0},4142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-62b86239a61ccf48d2d3da5df2268231.png"},8645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-f4ab3e529074349ed62eb707e618efe8.png"}}]);