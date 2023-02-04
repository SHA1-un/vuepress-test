---
title: How To Use
icon: creative
order: 1
---

## What is VuePress?
A VuePress site is in fact a single-page application (SPA) powered by [Vue](https://vuejs.org/) and [Vue Router](https://router.vuejs.org/).

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.

During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by Nuxt's nuxt generate command and other projects like Gatsby.