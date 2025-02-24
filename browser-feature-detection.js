// Simple browser feature detection
// https://github.com/tobyfisher/browser-feature-detection

window.addEventListener('DOMContentLoaded', () => {
	/** set POST URL  **/
	const url = "https://example.org/post"; // <!-- set POST URL

	// detection JS...
	const myLevel = { css: "0-unknown", api: new Set()};
	const setCSS = ( hasFeature, level ) => {
		if( hasFeature ) myLevel.css = level;
	}

	// baseline support for CSS.supports API  since 2020
	if ( !!((window.CSS && window.CSS.supports) || window.supportsCSS) ){
		setCSS( CSS.supports("display: flex"), "1-flex");
		setCSS( CSS.supports("display: grid"), "2-grid");
		setCSS( CSS.supports("selector(:not(a))"), "3-not");
		setCSS( CSS.supports("selector(:has(a))"), "4-has");
	}

	// Browser APIs
	if( HTMLElement.prototype.hasOwnProperty("popover"){
		myLevel.api.add("popover");
	}
	
	myLevel.api = Array.from(myLevel.api);

	// send the simple feature detection level
	fetch(url, {
		method: "POST",
		body: JSON.stringify( myLevel );
	});
});

