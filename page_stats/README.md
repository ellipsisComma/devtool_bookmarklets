# `page-stats`

Count the number of elements and text characters in the page's raw HTML (total, head, and body) and display them in an alert.

## Installation

Create a new bookmark on your toolbar and set the address/URL to this code:

```js
javascript:(()=>{let r=(e)=>Math.round(e.outerHTML.length/100)/10;alert(`${document.querySelectorAll(`*`).length} elements (${document.head.querySelectorAll(`*`).length} in head, ${document.body.querySelectorAll(`*`).length} in body)\n${r(document.documentElement)}K characters (${r(document.head)}K in head, ${r(document.body)}K in body)`);})();
```
