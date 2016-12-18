(function() {
	
	var omg = document.getElementById('omg');
	var seq = null;
	function reset_seq() {
		seq = [51, 16, 75, 73, 83, 83, 77, 89, 65, 82, 83];
	}
	reset_seq();

	document.addEventListener('keyup', function(e) {
		if (seq[0] == e.keyCode) {
			seq.shift();
		} else {
			reset_seq();
		}
		if (seq.length == 0) {
			reset_seq();
			var variant = Math.floor(Math.random() * 3) + 1;
			document.body.className = 'omg omg-var' + variant;
			omg.innerHTML = '<a href="https://en.wikipedia.org/wiki/Prix_Ars_Electronica#/media/File:GoldenNica_CreativeCommons.jpg">' +
			                '<span class="omg var0">🙍</span>' +
			                '<span class="omg var1">🙍🏻</span>' +
			                '<span class="omg var2">🙍🏽</span>' +
			                '<span class="omg var3">🙍🏾</span>' +
			                '</a>';
		}
	}, false);

	function is_touch_device() {
		return 'ontouchstart' in window        // works on most browsers 
		       || navigator.maxTouchPoints;    // works on IE10/11 and Surface
	}

	if (! is_touch_device()) {
		document.documentElement.className = 'canhover';
	}

})();
