# `hide-sticky`

Close all dialogs and visually hide all elements with the `position` CSS property set to `sticky` or `fixed`. The bookmarklet uses `pointer-events: none` and `visibility: hidden` instead of just removing the elements from the DOM to avoid breaking the page structure.

## Installation

Create a new bookmark on your toolbar and set the address/URL to this code:

```js
javascript:(()=>document.body.querySelectorAll(`*`).forEach(e=>{if(e.tagName===`DIALOG`)e.close();else if([`fixed`,`sticky`].includes(getComputedStyle(e).position)){e.style.pointerEvents=`none`;e.style.visibility=`hidden`;}}))()
```

For stubborn elements, use this `no-sticky` alternative that outright removes elements instead:

```js
javascript:(()=>document.body.querySelectorAll(`*`).forEach(e=>{if(e.tagName===`DIALOG`)e.close();else if([`fixed`,`sticky`].includes(getComputedStyle(e).position))e.remove();}))()
```
