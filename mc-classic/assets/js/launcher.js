var Quotes = [
  "Customizable!",
  "Do you call this Minecraft?",
  "Edible Source Code!"
];

function displayQuote() {
  var num = Math.floor(Math.random() * Quotes.length);
  document.getElementById("quote").innerHTML = Quotes[num];
}

function setDefault() {
  if (localStorage.getItem("texpath") != null) {
		switch(localStorage.getItem("texpath")) {
			case "textures/ocd/":
				document.getElementById("tex2").checked = true;
				break;
			case "textures/default/":
			default:
				document.getElementById("tex1").checked = true;
				break;
		}
  }
  
  document.getElementById("size2").checked = true;
  
  if (localStorage.getItem("generator") != null)
		switch(localStorage.getItem("generator")) {
			case "MoonLevelWorker.js":
				document.getElementById("preset2").checked = true;
				setMoonGen();
				break;
			case "CrystalLevelWorker.js":
				document.getElementById("preset3").checked = true;
				setCrystalGen();
				break;
			case "RainbowLevelWorker.js":
				document.getElementById("preset4").checked = true;
				setRainbowGen();
				break;
			case "CustomLevelWorker.js":
				document.getElementById("custom").checked = true;
				setCustomGen();
				break;
			case "RandomLevelWorker.js":
			default:
				document.getElementById("preset1").checked = true;
				setDefaultGen();
				break;
		}
}

function setDefaultGen() {
	$.ajax({
	url: './assets/js/RandomLevelWorker.js',
	success: function(code){
			document.getElementById("gencodetext").innerHTML = "<pre><code class=\"javascript\">" + code + "</code></pre>";
			relight();
		}
	})
	localStorage.setItem('generator', 'RandomLevelWorker.js');
}

function setMoonGen() {
	$.ajax({
		url: './assets/js/MoonLevelWorker.js',
		success: function(code){
			document.getElementById("gencodetext").innerHTML = "<pre><code class=\"javascript\">" + code + "</code></pre>";
			relight();
		}
	})
	localStorage.setItem('generator', 'MoonLevelWorker.js');
}

function setCrystalGen() {
	$.ajax({
	url: './assets/js/CrystalLevelWorker.js',
	success: function(code){
			document.getElementById("gencodetext").innerHTML = "<pre><code class=\"javascript\">" + code + "</code></pre>";
			relight();
		}
	})
	localStorage.setItem('generator', 'CrystalLevelWorker.js');
}

function setRainbowGen() {
	$.ajax({
	url: './assets/js/RainbowLevelWorker.js',
	success: function(code){
			document.getElementById("gencodetext").innerHTML = "<pre><code class=\"javascript\">" + code + "</code></pre>";
			relight();
		}
	})
	localStorage.setItem('generator', 'RainbowLevelWorker.js');
}

function setCustomGen() {
	document.getElementById("gencodeinput").style.display = "inline";
	document.getElementById("gencodetext").style.display = "none";
	if (localStorage.getItem("gencode") != null && localStorage.getItem("gencode") != "") {
		document.getElementById("gencodeinput").value = localStorage.getItem("gencode");
	} else {
		$.ajax({
			url: './assets/js/CustomExample.js',
			success: function(code){
				document.getElementById("gencodeinput").value = code;
			}
		})
	}

	localStorage.setItem('generator', 'CustomLevelWorker.js');
}

function relight() {
	document.getElementById("gencodetext").style.display = "inline";
	document.getElementById("gencodeinput").style.display = "none";
	document.querySelectorAll('pre code').forEach((block) => {
	hljs.highlightBlock(block);
	});
}

function clearGame() {
	localStorage.removeItem("savedGame");
}

function launch() {
	localStorage.setItem('gencode', $('textarea[id="gencodeinput"]').val());

	var texval = $('input[name="tex"]:checked').val();
	if (texval === 'default') localStorage.setItem('texpath','textures/default/');
	else localStorage.setItem('texpath','textures/ocd/');

	if ($('input[id="seedandsize"]').val() === "yep"){
		var sizeval = $('input[name="size"]:checked').val();
		if (sizeval === 'small') {
			localStorage.savedGame = "{\"worldSeed\":" + $('textarea[id="seed"]').val() + ",\"changedBlocks\":{},\"worldSize\":128,\"version\":1}";
			window.open('./classic.html?size=small','_self');
		} else if (sizeval === 'medium') {
			localStorage.savedGame = "{\"worldSeed\":" + $('textarea[id="seed"]').val() + ",\"changedBlocks\":{},\"worldSize\":256,\"version\":1}";
			window.open('./classic.html?size=normal','_self');
		} else {
			localStorage.savedGame = "{\"worldSeed\":" + $('textarea[id="seed"]').val() + ",\"changedBlocks\":{},\"worldSize\":512,\"version\":1}";
			window.open('./classic.html?size=huge','_self');
		}
	} else window.open('./classic.html','_self');
}
