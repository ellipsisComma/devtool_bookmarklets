(() => document.body.querySelectorAll(`*`).forEach(element => {
	if (element.tagName === `DIALOG`) element.close();
	else if ([`fixed`, `sticky`].includes(getComputedStyle(element).position)) element.remove();
}))()
