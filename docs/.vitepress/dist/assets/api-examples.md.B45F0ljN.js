import{u as p,c as o,a1 as h,j as e,t as s,k as n,a as t,o as d}from"./chunks/framework.CI-QeKxT.js";const f=JSON.parse(`{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep","head":[["link",{"rel":"stylesheet","href":"https://ai.tianli0.top/static/public/postChatUser_summary.min.css"}],["script",{},"\\n      let tianliGPT_key = '70b649f150276f289d1025508f60c5f58a';\\n      let tianliGPT_postSelector = '#VPContent .container > .content';\\n      let tianliGPT_Title = '文章摘要';\\n      let tianliGPT_postURL = '*';\\n      let tianliGPT_blacklist = '';\\n      let tianliGPT_wordLimit = '1000';\\n      let tianliGPT_typingAnimate = true;\\n      let tianliGPT_theme = 'default';\\n      let tianliGPT_BeginningText = '这篇文章介绍了';\\n      let postChatConfig = {\\n  backgroundColor: \\"#3e86f6\\",\\n  fill: \\"#FFFFFF\\",\\n  bottom: \\"16px\\",\\n  left: \\"16px\\",\\n  width: \\"44px\\",\\n  frameWidth: \\"375px\\",\\n  frameHeight: \\"600px\\",\\n  defaultInput: true,\\n  upLoadWeb: true,\\n  showInviteLink: true,\\n  addButton: true,\\n  userTitle: \\"PostChat\\",\\n  userDesc: \\"如果你对网站的内容有任何疑问，可以来问我哦～\\",\\n  userIcon: \\"\\",\\n  defaultChatQuestions: [\\n    \\"你好\\",\\n    \\"你是谁\\",\\n    \\"你是做什么的\\",\\n    \\"你有什么功能\\",\\n    \\"你有什么用\\"\\n  ],\\n  defaultSearchQuestions: [\\n    \\"视频压缩\\",\\n    \\"制作黄焖鸡\\"\\n  ]\\n      };\\n    "],["script",{"src":"https://ai.tianli0.top/static/public/postChatUser_summary.min.js","defer":"true","data-postChat_key":"70b649f150276f289d1025508f60c5f58a"}]]},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}`),m={name:"api-examples.md"},b=Object.assign(m,{setup(u){const{site:c,theme:i,page:l,frontmatter:r}=p();return(k,a)=>(d(),o("div",null,[a[0]||(a[0]=h(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6)),e("pre",null,s(n(i)),1),a[1]||(a[1]=e("h3",{id:"page-data",tabindex:"-1"},[t("Page Data "),e("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1)),e("pre",null,s(n(l)),1),a[2]||(a[2]=e("h3",{id:"page-frontmatter",tabindex:"-1"},[t("Page Frontmatter "),e("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1)),e("pre",null,s(n(r)),1),a[3]||(a[3]=e("h2",{id:"more",tabindex:"-1"},[t("More "),e("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1)),a[4]||(a[4]=e("p",null,[t("Check out the documentation for the "),e("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),t(".")],-1))]))}});export{f as __pageData,b as default};