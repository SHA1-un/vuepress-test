<template><div><h2 id="what-is-vuepress" tabindex="-1"><a class="header-anchor" href="#what-is-vuepress" aria-hidden="true">#</a> What is VuePress?</h2>
<p>A VuePress site is in fact a single-page application (SPA) powered by <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue<ExternalLinkIcon/></a> and <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router<ExternalLinkIcon/></a>.</p>
<p>Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.</p>
<p>During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.</p>
<p>During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by Nuxt's nuxt generate command and other projects like Gatsby.</p>
</div></template>


