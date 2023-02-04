import{_ as o,V as s,W as a,Y as e,Z as t,$ as n,F as i}from"./framework-eef79181.js";const d={},l=e("h2",{id:"what-is-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-vuepress","aria-hidden":"true"},"#"),t(" What is VuePress?")],-1),c={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.",-1),p=e("p",null,"During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.",-1),_=e("p",null,"During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by Nuxt's nuxt generate command and other projects like Gatsby.",-1);function f(m,v){const r=i("ExternalLinkIcon");return s(),a("div",null,[l,e("p",null,[t("A VuePress site is in fact a single-page application (SPA) powered by "),e("a",c,[t("Vue"),n(r)]),t(" and "),e("a",u,[t("Vue Router"),n(r)]),t(".")]),h,p,_])}const w=o(d,[["render",f],["__file","index.html.vue"]]);export{w as default};