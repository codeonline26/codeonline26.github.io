//This is an example of custom world generation.
//Note that the names of variables differ from those in preset code.
for (var l = 0; l < xSize; ++l) {
	for (var i1 = 0; i1 < zSize; ++i1) {
		var ht = 50;
		var loc = parseInt((parseInt(ht) * zSize + i1) * xSize + l);
		tiles[loc] = 33; //You can find the ID list on Minecraft Wiki.
	}
}
tiles; // This will serve as the return value of eval function.