"use strict";(self.webpackChunklivebundle_website=self.webpackChunklivebundle_website||[]).push([[305],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return h}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(i),h=a,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return i?n.createElement(m,r(r({ref:t},p),{},{components:i})):n.createElement(m,r({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4756:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return m}});var n=i(7462),a=i(3366),o=(i(7294),i(3905)),r=i(4996),l=["components"],u={id:"welcome",title:"Welcome",sidebar_label:"Welcome",slug:"/"},s=void 0,p={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Disclaimer",source:"@site/docs/welcome.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/electrode-io/livebundle-website/blob/master/docs/welcome.md",tags:[],version:"current",frontMatter:{id:"welcome",title:"Welcome",sidebar_label:"Welcome",slug:"/"},sidebar:"docsSidebar",next:{title:"Architecture",permalink:"/docs/architecture"}},d={},c=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Features",id:"features",level:2},{value:"Distribute updates as a QR Code / Deep Link",id:"distribute-updates-as-a-qr-code--deep-link",level:3},{value:"GitHub Integration",id:"github-integration",level:3},{value:"Live Session",id:"live-session",level:3},{value:"Plugin Based Architecture",id:"plugin-based-architecture",level:3},{value:"Setup overview",id:"setup-overview",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Comparison with other React Native tools",id:"comparison-with-other-react-native-tools",level:2},{value:"Expo",id:"expo",level:3},{value:"CodePush",id:"codepush",level:3}],h={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"In order to use LiveBundle you will need to provide your own storage for the bundles.\nAs of its initial release, LiveBundle only supports ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/storage/blobs/"},"Azure Blob Storage")," support."),(0,o.kt)("p",null,"We have no plan of implementing other cloud storage providers plugins ",(0,o.kt)("em",{parentName:"p"},"(unless driven by internal needs)"),", but will welcome external contributions of such new plugins."),(0,o.kt)("p",null,"Therefore, at this point, if you wish to use LiveBundle for your application, you will either need to provision and use an Azure Blob Storage account, or implement a new storage provider plugin to use another cloud storage provider."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"distribute-updates-as-a-qr-code--deep-link"},"Distribute updates as a QR Code / Deep Link"),(0,o.kt)("p",null,"LiveBundle allows to distribute application updates as a QR Code and/or Deep Link.",(0,o.kt)("br",null),"\nDuring development, from the comfort of a terminal, any application developer can swiftly publish any work in progress and share the resulting QR Code / Deep Link with any other user of the application.",(0,o.kt)("br",null),"\nInstalling the changes is as easy as scanning the QR Code from the application or navigating the Deep Link."),(0,o.kt)("img",{alt:"LiveBundle CLI",src:(0,r.Z)("img/lbupload.png"),width:"400"}),(0,o.kt)("h3",{id:"github-integration"},"GitHub Integration"),(0,o.kt)("p",null,"LiveBundle comes with a GitHub integration, to automatically package and publish changes associated to every opened PR. It will then post the resulting QR Code and Deep Link as a PR comment. Supercharge your reviews by trying the changes directly within the application."),(0,o.kt)("img",{alt:"LiveBundle GitHub PR",src:(0,r.Z)("img/githubpr.png"),width:"600"}),(0,o.kt)("h3",{id:"live-session"},"Live Session"),(0,o.kt)("p",null,"Additionally, LiveBundle expose a command to generate a QR Code / Deep Link for other users to directly connect to your local React Native bundler ",(0,o.kt)("em",{parentName:"p"},"(metro server)"),"."),(0,o.kt)("h3",{id:"plugin-based-architecture"},"Plugin Based Architecture"),(0,o.kt)("p",null,"LiveBundle can be easilly extended with new functionallity thanks to its plugin based architecture. Need a different storage provider ? A different bundler or new notifiers ? Just write a new plugin !"),(0,o.kt)("h2",{id:"setup-overview"},"Setup overview"),(0,o.kt)("p",null,"LiveBundle is composed of two top level packages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle"},(0,o.kt)("inlineCode",{parentName:"a"},"livebundle"))," ",(0,o.kt)("em",{parentName:"li"},"(the command line CLI)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/react-native-livebunde"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-livebundle"))," ",(0,o.kt)("em",{parentName:"li"},"(the native module)"),".")),(0,o.kt)("p",null,"Adding LiveBundle to a React Native application is detailed in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Getting Started section")," and consist of the following high level steps :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Installing the LiveBundle CLI, and creating its initial configuration ",(0,o.kt)("em",{parentName:"li"},"(",(0,o.kt)("a",{parentName:"em",href:"/docs/cli"},"CLI setup"),")")),(0,o.kt)("li",{parentName:"ol"},"Setting up and initializing the native module ",(0,o.kt)("em",{parentName:"li"},"(",(0,o.kt)("a",{parentName:"em",href:"/docs/native-module"},"Native Module setup"),")")),(0,o.kt)("li",{parentName:"ol"},"Finally, setting up the storage and testing LiveBundle end to end ",(0,o.kt)("em",{parentName:"li"},"(",(0,o.kt)("a",{parentName:"em",href:"./storage"},"Azure Storage setup"),")"))),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"If you'd first like to try out LiveBundle very quickly before integrating it with your application, you can try the LiveBundle demo application. Just follow instructions from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/react-native-livebundle/blob/master/example/README.md"},"its README"),"."),(0,o.kt)("p",null,"Otherwise, if you want to jump straight ahead, adding LiveBundle to your application, then without further due, ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"let's get started !")),(0,o.kt)("h2",{id:"comparison-with-other-react-native-tools"},"Comparison with other React Native tools"),(0,o.kt)("h3",{id:"expo"},(0,o.kt)("a",{parentName:"h3",href:"https://expo.io/"},"Expo")),(0,o.kt)("p",null,"While Expo is much more than just application delivery, it uses QRCode and DeepLink to deliver complete React Native applications or application updates to anyone. It is also possible to setup a GitHub integration with Expo to automatically attach a QRCode and DeepLink to every Pull Request.",(0,o.kt)("br",null),"\nThat being said, this Expo feature will only work with React Native applications built with Expo, and is not usable as is for non Expo based React Native applications."),(0,o.kt)("h3",{id:"codepush"},(0,o.kt)("a",{parentName:"h3",href:"https://microsoft.github.io/code-push/"},"CodePush")),(0,o.kt)("p",null,"CodePush allows pushing React Native application updates to users. Under the hood it is quite similar to LiveBundle in the sense that updated JS bundles are pushed to a remote storage and then retrieved from the storage and installed on a mobile device. Though CodePush automatically, silently and transparenlty downloads update if an update is available and does not come with QRCode / DeepLink on demand update support.",(0,o.kt)("br",null),'\nCodePush is geared to rolling updates to your end users in production, while LiveBundle is geared to distributing updates to your team, on demannd, during development. To vulgarize this, we could say that LiveBundle, from the user perspective is a "pull" model, while CodePush is a "push" model.'))}m.isMDXComponent=!0}}]);