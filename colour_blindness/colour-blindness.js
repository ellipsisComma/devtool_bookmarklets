(() => {
	// don't add multiple copies (avoid id clashes)
	const id = `ellipsiscomma-bookmarklet-colour-blindness-test-filter`;
	if (document.getElementById(`${id}-widget`)) return;

	// stylesheets
	const css = new CSSStyleSheet();
	css.insertRule(`#${id}-widget {
	z-index: 999999;
	position: fixed;
	inset-block-end: 0.5rem;
	inset-inline-start: 0.5rem;
	display: grid;
	grid-template-columns: auto auto;
	justify-items: end;
	align-items: baseline;
	gap: 0.5rem;
	padding: 0.3rem;
	font-family: sans-serif !important;
	color: black !important;
	background-color: white !important;
	accent-color: auto !important;
	border: 2px solid black !important;
}`);
	css.insertRule(`#${id}-widget > :nth-child(odd) {
	justify-self: end;
}`);
	css.insertRule(`#${id}-widget > :nth-child(even) {
	justify-self: start;
}`);
	css.insertRule(`#${id}-lens {
	z-index: 99999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}`);
	document.adoptedStyleSheets.push(css);

	// widget controller
	const widget = document.body.appendChild(document.createElement(`div`));
	widget.id = `${id}-widget`;
	widget.innerHTML = `<input id="${id}-switch" type="checkbox">
<label for="${id}-switch">Apply filter</label>
<label for="${id}-colour">Deficiency: </label>
<select id="${id}-colour">
	<option value="R" checked>red</option>
	<option value="G">green</option>
	<option value="B">blue</option>
</select>
<label for="${id}-severity">Severity: </label>
<select id="${id}-severity">
	<option value="1" checked>100%</option>
	<option value="0.5">50%</option>
</select>`;

	// widget lens
	const lens = document.body.appendChild(document.createElement(`div`));
	lens.id = `${id}-lens`;

	// precomputed matrices from https://www.inf.ufrgs.br/%7Eoliveira/pubs_files/CVD_Simulation/CVD_Simulation.html
	const matrices = {
		"R": {
			"0.5": `0.458064 0.679578 -0.137642 0 0 0.092785 0.846313 0.060902 0 0 -0.007494 -0.016807 1.024301 0 0`,
			"1": `0.152286 1.052583 -0.204868 0 0 0.114503 0.786281 0.099216 0 0 -0.003882 -0.048116 1.051998 0 0`,
		},
		"G": {
			"0.5": `0.547494 0.607765 -0.155259 0 0 0.181692 0.781742 0.036566 0 0 -0.010410 0.027275 0.983136 0 0`,
			"1": `0.367322 0.860646 -0.227968 0 0 0.280085 0.672501 0.047413 0 0 -0.011820 0.042940 0.968881 0 0`,
		},
		"B": {
			"0.5": `1.017277 0.027029 -0.044306 0 0 -0.006113 0.958479 0.047634 0 0 0.006379 0.248708 0.744913 0 0`,
			"1": `1.255528 -0.076749 -0.178779 0 0 -0.078411 0.930809 0.147602 0 0 0.004733 0.691367 0.303900 0 0`,
		},	
	};

	// on changing any input, add filter with selected matrix or remove filter
	widget.querySelectorAll(`input, select`).forEach(input => input.addEventListener(`change`, () => {
		lens.style.backdropFilter = widget.querySelector(`#${id}-switch`).checked ? `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="${id}" x="0" y="0" width="100%" height="100%"><feColorMatrix in="SourceGraphic" type="matrix" values="${matrices[widget.querySelector(`#${id}-colour`).value][widget.querySelector(`#${id}-severity`).value]} 0 0 0 1 0" /></filter></svg>#${id}')` : `unset`;
	}));
})();
