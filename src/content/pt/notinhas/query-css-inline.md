---
title: Fazendo uma query CSS pelo estilo inline
date: 2021-04-27
layout: layouts/post.njk
tags: css dev snippets
---

Pode parecer absurdo, mas este código funciona:

```css
div[style*="rgb(193,152,251)"] {
	color: #57b5f9 !important;
}
```

Isso se deve ao fato de `style` ser apenas mais um atributo de uma tag, apesar de intuitivamente acharmos que ele tem algo de diferente pela sua natureza.