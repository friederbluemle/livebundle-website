"use strict";(self.webpackChunklivebundle_website=self.webpackChunklivebundle_website||[]).push([[440],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,v=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return t?a.createElement(v,o(o({ref:n},p),{},{components:t})):a.createElement(v,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(7462),i=t(7294),l=t(2389),o=t(5450),r=t(6010),u="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,p=e.block,s=e.defaultValue,c=e.values,m=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.lx)(f,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(n=null!=s?s:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,i.useState)(g),T=w[0],C=w[1],L=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=b[m];null!=A&&A!==T&&f.some((function(e){return e.value===A}))&&C(A)}var S=function(e){var n=e.currentTarget,t=L.indexOf(n),a=f[t].value;a!==T&&(O(n),C(a),null!=m&&N(m,a))},B=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=L.indexOf(e.currentTarget)+1;t=L[a]||L[0];break;case"ArrowLeft":var i=L.indexOf(e.currentTarget)-1;t=L[i]||L[L.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return L.push(e)},onKeyDown:B,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),d?(0,i.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},6869:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return h}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),o=t(9877),r=t(8215),u=["components"],d={id:"native-module",title:"Native Module Setup",sidebar_label:"Native Module"},p=void 0,s={unversionedId:"native-module",id:"native-module",title:"Native Module Setup",description:"Installing LiveBundle native module",source:"@site/docs/native-module.md",sourceDirName:".",slug:"/native-module",permalink:"/docs/native-module",editUrl:"https://github.com/electrode-io/livebundle-website/blob/master/docs/native-module.md",tags:[],version:"current",frontMatter:{id:"native-module",title:"Native Module Setup",sidebar_label:"Native Module"},sidebar:"docsSidebar",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"Storage",permalink:"/docs/storage"}},c={},m=[{value:"Installing LiveBundle native module",id:"installing-livebundle-native-module",level:2},{value:"Configuring DeepLink support",id:"configuring-deeplink-support",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Initializing LiveBundle native module",id:"initializing-livebundle-native-module",level:2},{value:"Android",id:"android-1",level:3},{value:"iOS",id:"ios-1",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Trying the Native Module",id:"trying-the-native-module",level:2}],v={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installing-livebundle-native-module"},"Installing LiveBundle native module"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-native-livebundle\n"))),(0,l.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-livebundle\n")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"LiveBundle also have a peer dependency on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-camera"},"react-native-camera"),".\nIt relies on this native module for its QR Code scanning functionality. If your React Native application is already using this native module, then you don't have anything to do. Otherwise, please make sure to add it to your application and configure the necessary permissions on Android and iOS ",(0,l.kt)("em",{parentName:"p"},"(LiveBundle only need permission to access the camera)"),"."))),(0,l.kt)("h2",{id:"configuring-deeplink-support"},"Configuring DeepLink support"),(0,l.kt)("h3",{id:"android"},"Android"),(0,l.kt)("p",null,"You should add the following intent filter in your application ",(0,l.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file, inside the activity that should be launched when a LiveBundle Deep Link url is navigated to ",(0,l.kt)("em",{parentName:"p"},"(typicially your main activity)"),".",(0,l.kt)("br",null),"\nYou should replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"android:host")," value with your application reverse domain ",(0,l.kt)("em",{parentName:"p"},"(you can find it on top of ",(0,l.kt)("inlineCode",{parentName:"em"},"AndroidManifest.xml")," file as the ",(0,l.kt)("inlineCode",{parentName:"em"},"package")," attribute of ",(0,l.kt)("inlineCode",{parentName:"em"},"manifest")," tag)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-XML"},'<intent-filter>\n    <action android:name="android.intent.action.VIEW"/>\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data android:scheme="livebundle" android:host="io.livebundle.example" />\n</intent-filter>\n')),(0,l.kt)("h3",{id:"ios"},"iOS"),(0,l.kt)("p",null,"You should add the following lines in info.plist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<key>CFBundleURLTypes</key>\n    <array>\n        <dict>\n            <key>CFBundleURLName</key>\n            <string>io.livebundle</string>\n            <key>CFBundleURLSchemes</key>\n            <array>\n                <string>livebundle</string>\n            </array>\n        </dict>\n    </array>\n")),(0,l.kt)("p",null,"And add the following method in your appdelegate, This method is called whenever your app is launched using the deep-linking string you set in info.plist"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),(0,l.kt)("h2",{id:"initializing-livebundle-native-module"},"Initializing LiveBundle native module"),(0,l.kt)("p",null,"LiveBundle native module should be initialized from both the native side, and the JS side."),(0,l.kt)("h3",{id:"android-1"},"Android"),(0,l.kt)("p",null,"To initialize LiveBundle on Android, you should update the ",(0,l.kt)("inlineCode",{parentName:"p"},"MainApplication.java")," file of your React Native application."),(0,l.kt)("p",null,"First, add the following import statement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import io.livebundle.LiveBundle;\n")),(0,l.kt)("p",null,"Then, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"onCreate")," method, you should make a call to the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialize")," method of ",(0,l.kt)("inlineCode",{parentName:"p"},"LiveBundle")," as follow:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HTTP Server Storage")),(0,l.kt)("p",null,"To quickly locally try out LiveBundle end to end with your application, we recommend using a local HTTP server storage at first ",(0,l.kt)("em",{parentName:"p"},"(we will cover spinning up an HTTP server with one command in the next section)"),". The bundles will be served from your ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," so you can initialize LiveBundle as follow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LiveBundle.initialize(\n  getReactNativeHost(),\n  "http://127.0.0.1:8080");\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Azure Blob Storage")),(0,l.kt)("p",null,"Here is how to initialize LiveBundle with an Azure Blob Storage account if you have such an account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'LiveBundle.initialize(\n  getReactNativeHost(),\n  "https://[AZURE_ACCOUNT].blob.core.windows.net/[AZURE_CONTAINER]");\n')),(0,l.kt)("p",null,"Your should replace ",(0,l.kt)("inlineCode",{parentName:"p"},"[AZURE_ACCOUNT]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"[AZURE_CONTAINER]")," with values specific to your Azure account."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"initialize")," method also accepts a third optional parameter, respectively an Azure SAS token to use to download the bundles ",(0,l.kt)("em",{parentName:"p"},"(In case your Azure Blob Storage container does not allow public blob reads, you can use such a token for blob reads)")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'This initialization setup assumes an "out of the box" React Native application structure. If your application is more complex and diverges from this default structure ',(0,l.kt)("em",{parentName:"p"},"(for example if your application intialization code is not located in MainApplication.java)")," you should invoke ",(0,l.kt)("inlineCode",{parentName:"p"},"initialize")," where you see fit ",(0,l.kt)("em",{parentName:"p"},"(Ideally just after initializing React Native)")))),(0,l.kt)("h3",{id:"ios-1"},"iOS"),(0,l.kt)("p",null,"In appdelegate, import live bundle on native side"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#import <react-native-livebundle/LiveBundle.h>\n")),(0,l.kt)("p",null,"add the following line to the beginning of the ",(0,l.kt)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions:(NSDictionary *)launchOptions")," method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'NSString* storageUrlSuffix = @"";\n  NSString *storageUrl = @"http://192.168.1.7:8080";\n  [[LiveBundle alloc] initWithstorageUrl:storageUrl storageUrSulffix:storageUrlSuffix];\n')),(0,l.kt)("p",null,"The bundles will be loaded from localhost when the project starts"),(0,l.kt)("h3",{id:"javascript"},"JavaScript"),(0,l.kt)("p",null,"On the JavaScript side, you should import LiveBundle native module and simply make a call to the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialize")," method as follow."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import livebundle from 'react-native-livebundle'\nlivebundle.initialize()\n")),(0,l.kt)("p",null,"This call should be made as early as possible, preferably in the application entry point ",(0,l.kt)("em",{parentName:"p"},"(typically ",(0,l.kt)("inlineCode",{parentName:"em"},"index.js"),")")),(0,l.kt)("h2",{id:"trying-the-native-module"},"Trying the Native Module"),(0,l.kt)("p",null,"To try out LiveBundle in your React Native application, just launch your application and bring up the React Native developer menu. If LiveBundle was succesfully installed and initialized, you should see a new ",(0,l.kt)("inlineCode",{parentName:"p"},"LiveBundle")," menu item at the bottom of the React Native developer menu.\nTapping on it should bring the LiveBundle menu on screen with its ",(0,l.kt)("inlineCode",{parentName:"p"},"Scan")," button."),(0,l.kt)("p",null,"You can also try to launch LiveBundle menu by navigating a Deep Link, which can be of use in case your application build does not give access to the React Native developer menu."),(0,l.kt)("p",null,"One way to achieve this on Android is to run an ",(0,l.kt)("inlineCode",{parentName:"p"},"adb")," command ",(0,l.kt)("em",{parentName:"p"},"(with an emulator or a connected device)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'adb shell am start -W -a android.intent.action.VIEW -d "livebundle://menu" [APP_PACKAGE_NAME]\n')),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"[APP_PACKAGE_NAME]")," is your application package name ",(0,l.kt)("em",{parentName:"p"},"(which can be found in your AndroidManifest.xml)")),(0,l.kt)("p",null,"If you have Slack installed on the device running your application, you can also send yourself a message with the ",(0,l.kt)("inlineCode",{parentName:"p"},"livebundle://menu")," Deep Link and tap on it. Not all applications properly convert custom schemes links to browsable links ",(0,l.kt)("em",{parentName:"p"},"(clickable)")," but Slack does ",(0,l.kt)("em",{parentName:"p"},"(and surely a few other messaging apps as well)")))}h.isMDXComponent=!0}}]);