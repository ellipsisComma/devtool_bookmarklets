# `copy-live-html`

Copy the page's live HTML (including doctype declaration) to clipboard.

**Note**: you could just serialize document.body.ownerDocument instead of using root outerHTML, but the serializer performs unwanted modifications (e.g. HTML-escapes and self-closing tags).

## Installation

Create a new bookmark on your toolbar and set the address/URL to this code:

```js
javascript:(()=>navigator.clipboard.writeText(`${new XMLSerializer().serializeToString(document.doctype)}${document.documentElement.outerHTML}`))();
```
