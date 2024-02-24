import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},m={},r=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${O}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/components/inbox/InboxScreen.stories.jsx":async()=>r(()=>import("./InboxScreen.stories-f00c3d6f.js"),["./InboxScreen.stories-f00c3d6f.js","./jsx-runtime-03b4ddbf.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./TaskList.stories-b9a5b40e.js","./Task.stories-4dab8898.js","./index-8d47fad6.js","./index-03d05a58.js"],import.meta.url),"./src/components/task-list/TaskList.stories.jsx":async()=>r(()=>import("./TaskList.stories-b9a5b40e.js").then(_=>_.b),["./TaskList.stories-b9a5b40e.js","./jsx-runtime-03b4ddbf.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./Task.stories-4dab8898.js","./index-8d47fad6.js"],import.meta.url),"./src/components/task/Task.stories.jsx":async()=>r(()=>import("./Task.stories-4dab8898.js").then(_=>_.a),["./Task.stories-4dab8898.js","./jsx-runtime-03b4ddbf.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url),"./src/stories/Introduction.mdx":async()=>r(()=>import("./Introduction-cfa93503.js"),["./Introduction-cfa93503.js","./jsx-runtime-03b4ddbf.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-780adb9a.js","./_commonjs-dynamic-modules-302442b1.js","./index-d3ea75b5.js","./index-11d98b33.js","./index-8fd8397b.js","./index-356e4a49.js","./index-a1cf9e47.js"],import.meta.url)};async function T(_){return f[_]()}const{composeConfigs:P,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([r(()=>import("./entry-preview-1f5c28fc.js"),["./entry-preview-1f5c28fc.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-988a5df2.js","./index-d3ea75b5.js"],import.meta.url),r(()=>import("./entry-preview-docs-b427957a.js"),["./entry-preview-docs-b427957a.js","./index-8fd8397b.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./index-356e4a49.js","./index-76fb7be0.js"],import.meta.url),r(()=>import("./preview-73104b77.js"),["./preview-73104b77.js","./index-11d98b33.js"],import.meta.url),r(()=>import("./preview-4a5beeb0.js"),[],import.meta.url),r(()=>import("./preview-d01b88e8.js"),["./preview-d01b88e8.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-30b54f76.js"),["./preview-30b54f76.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-c56bf6ac.js"),[],import.meta.url),r(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-0ef86afd.js"),[],import.meta.url),r(()=>import("./preview-21802b0a.js"),["./preview-21802b0a.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-dd2c3c1c.js"),[],import.meta.url),r(()=>import("./preview-1b05ff50.js"),["./preview-1b05ff50.js","./_commonjsHelpers-de833af9.js","./_commonjs-dynamic-modules-302442b1.js","./index-03d05a58.js","./index-03bbf7d1.js","./preview-4f244d89.css"],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:I});export{r as _};
