---
title: "Index"
layout: layouts/base.njk
permalink: "/pt/index/index.html"
tags: meta
eleventyNavigation:
  key: Index
  order: 99
---

Todo[^1] o conteúdo deste site, organizado alfabeticamente.

Se preferir, você também pode navegar via tags ou por ano.

<ul>
{%- for post in collections.all | filterCollectionByLocale(locale) -%}
  <li><a href="{{ post.url }}">{{ post.url }}</a></li>
{%- endfor -%}
</ul>


[^1]: Quase todo. Há páginas acessíveis apenas por links internos de outras páginas.