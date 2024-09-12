(() => {
	function roundKb(element) {
		return Math.round(element.outerHTML.length / 100) / 10;
	}
	alert(`${
		document.querySelectorAll(`*`).length
	} elements (${
		document.head.querySelectorAll(`*`).length
	} in head, ${
		document.body.querySelectorAll(`*`).length
	} in body)\n${
		roundKb(document.documentElement)
	}K characters (${
		roundKb(document.head)
	}K in head, ${
		roundKb(document.body)
	}K in body)`);
})();
