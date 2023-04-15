module.exports = {
	moduleScope(scope) {
		const link1 = scope.window.document.createElement("link");
		link1.rel = "stylesheet";
		link1.href = "asyncChunk_js.css";
		scope.window.document.head.appendChild(link1);
		const link2 = scope.window.document.createElement("link");
		link2.rel = "stylesheet";
		link2.href = "asyncChunk_js2.css";
		scope.window.document.head.appendChild(link2);
	},
	findBundle: function (i, options) {
		return [
			"./common-share_js-img_png.js",
			"./common-asyncChunk_js.js",
			"./common-asyncChunk2_js.js",
			"./main.js",
			"./secondMain.js"
		];
	}
};
