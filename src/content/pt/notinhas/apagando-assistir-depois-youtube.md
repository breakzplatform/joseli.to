---
title: Apagando em massa vídeos da playlist "Assistir Depois" do YouTube
date: 2021-03-30
layout: layouts/post.njk
tags: snippets
---

A playlist "Assistir depois" do YouTube é diferente das outras playlists, geralmente de um jeito ruim: você só consegue apagar/mover um vídeo um por um, manualmente. Esse snippet automatiza o processo. Fiz a versão em português [baseada no código desse link](https://www.tldevtech.com/how-to-bulk-delete-all-youtubes-watch-later-videos/).


```javascript
setInterval(function() {
	document.querySelector('#primary button[aria-label*="Menu"]').click();
	var things = document.evaluate('//span[contains(text(),"Remover")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var i = 0; i < things.snapshotLength; i++) {
		    things.snapshotItem(i).click();
		}		
}, 1000);
```