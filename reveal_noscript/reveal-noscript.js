(() => document.querySelectorAll(`noscript`).forEach(noscript => {
	const reveal = document.createElement(`reveal`);
	reveal.style = "color: black; background-color: yellow; border: 3px dotted red;";
	reveal.innerHTML = noscript.innerHTML;
	noscript.after(reveal);
}))()
