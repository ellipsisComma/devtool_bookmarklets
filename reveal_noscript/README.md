# `reveal-noscript`

Copy the content of all `noscript` elements to custom `reveal` elements appended after the originals and displayed in a vivid, unmistakeable style.

This bookmarklet brought to you by the time I stumbled on a site almost entirely contained in a `noscript` element, which, when broken through, revealed a wealth of articles like "Remove Your Fingerprints" and "How to Disappear"

## Installation

Create a new bookmark on your toolbar and set the address/URL to this code:

```js
javascript:(()=>document.querySelectorAll(`noscript`).forEach(n=>{let r=document.createElement(`reveal`);r.style="color:black;background-color:yellow;border:3px dotted red;";r.innerHTML=n.innerHTML;n.after(r);}))()
```
