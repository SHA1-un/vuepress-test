<template><div><p>Markdown is a markup language that can be written using a plain text editor that allows plain text content to be formatted with simple markup syntax.</p>
<p>Markdown has a series of derivative versions that extend Markdown’s functionality (such as tables, footnotes, embedded HTML, etc.). These features were not available in the original Markdown. They can convert Markdown into more formats, such as LaTeX, Docbook. . Markdown Extra, MultiMarkdown, Maruku, etc. are more famous in Markdown’s enhanced version. These derivative versions are either based on tools such as Pandoc; or based on sites such as GitHub and Wikipedia, which are syntactically compatible, but have some changes in syntax and rendering effects.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>Markdown’s grammar is simple and straightforward, easy to learn, and features more powerful than plain text, so people use it to write blogs. WordPress, the world’s most popular blogging platform, and large CMSs such as Joomla and Drupal all support Markdown. The blog platforms that use the Markdown editor are Ghost and Typecho.</p>
<p>Used to write documentation and save it under the software’s directory under the filename <code v-pre>README.md</code>. Because we have a god-level editor like RStudio, we can turn Markdown into a presentation PPT, Word product documentation, LaTex papers, and even a minimally usable prototype with little code. In the field of data science, Markdown has been widely used, greatly promoting the historical process of dynamic repeatability research.</p>
<h2 id="shortcut-key" tabindex="-1"><a class="header-anchor" href="#shortcut-key" aria-hidden="true">#</a> ShortCut Key</h2>
<table>
<thead>
<tr>
<th>Display</th>
<th>Code</th>
<th>ShortCut Key</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Bold</strong></td>
<td><code v-pre>**text**</code></td>
<td>Ctrl/⌘ + B</td>
</tr>
<tr>
<td><em>Emphasize</em></td>
<td><code v-pre>*text*</code></td>
<td>Ctrl/⌘ + I</td>
</tr>
<tr>
<td><code v-pre>Inline Code</code></td>
<td>`code`</td>
<td>Select then <code v-pre>`</code></td>
</tr>
</tbody>
</table>
<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h2>
<p>The title shows the structure of the article. Insert 1-6 <code v-pre>#</code> at the beginning of the line, each adding a <code v-pre>#</code> indicates a more in-depth content, corresponding to the depth of the title by 1-6.</p>
<ul>
<li>H1: <code v-pre># Header 1</code></li>
<li>H2: <code v-pre>## Header 2</code></li>
<li>H3: <code v-pre>### Header 3</code></li>
<li>H4: <code v-pre>#### Header 4</code></li>
<li>H5: <code v-pre>##### Header 5</code></li>
<li>H6: <code v-pre>###### Header 6</code></li>
</ul>
<h2 id="text-style" tabindex="-1"><a class="header-anchor" href="#text-style" aria-hidden="true">#</a> Text Style</h2>
<ul>
<li>Link: <code v-pre>[Title](URL)</code></li>
<li>Bold: <code v-pre>**Bold**</code></li>
<li>Italic:<code v-pre>*Italics*</code></li>
<li>Delete:<code v-pre>~~Italics~~</code></li>
<li>Paragraph: Space one link</li>
<li>Line break: enter two space at the end of the line</li>
<li>List: add <code v-pre>-</code> to become a list item</li>
<li>Blockquote: <code v-pre>&gt; Blockquote Content</code></li>
<li>HR: Enter <code v-pre>---</code> in a single line</li>
</ul>
<h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h2>
<p><code v-pre>[Title](URL)</code></p>
<p>Example: <code v-pre>[Baidu](https://baidu.com)</code></p>
<h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> Image</h2>
<p><code v-pre>![Alt](ImageLink)</code> 。</p>
<p>E.g: <code v-pre>![This is a title](./assets/title.jpg)</code>.</p>
<h2 id="tables" tabindex="-1"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2>
<table>
<thead>
<tr>
<th style="text-align:center">center</th>
<th style="text-align:right">right</th>
<th style="text-align:left">left</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">For center align use <code v-pre>:-:</code></td>
<td style="text-align:right">For right align use <code v-pre>-:</code></td>
<td style="text-align:left">For left align use <code v-pre>:-</code></td>
</tr>
<tr>
<td style="text-align:center">b</td>
<td style="text-align:right">aaaaaaaaa</td>
<td style="text-align:left">aaaa</td>
</tr>
<tr>
<td style="text-align:center">c</td>
<td style="text-align:right">aaaa</td>
<td style="text-align:left">a</td>
</tr>
</tbody>
</table>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2>
<p><code v-pre>:emoji name:</code></p>
<p>Example: <code v-pre>:smile:</code></p>
<p>For full emoji list, see <RouterLink to="/guide/markdown_help/emoji/">Emoji List</RouterLink>.</p>
<h2 id="markdown-display" tabindex="-1"><a class="header-anchor" href="#markdown-display" aria-hidden="true">#</a> Markdown Display</h2>
<ul>
<li><RouterLink to="/guide/markdown_help/demo.html">View Detail</RouterLink></li>
</ul>
</div></template>


