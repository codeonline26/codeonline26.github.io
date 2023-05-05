//This is an example of custom world generation.
//Note that the names of variables differ from those in preset code.
function checkPos(x,y,z){
	return (x >= 0 && x < xSize && y > 0 && y < ySize && z >= 0 && z < zSize);
}
for (var l = 0; l < xSize; ++l) {
	for (var i1 = 0; i1 < zSize; ++i1) {
		tiles[parseInt((1 * zSize + i1) * xSize + l)] = 31; //You can find the ID list on Minecraft Wiki.
	}
}
//make some glass planes...
for (var i = 0;i <= 25;i++){
	var planex = Math.ceil(Math.random() * 200);
	var planez = Math.ceil(Math.random() * 200);
	var planey = Math.ceil(Math.random() * 10) + 50;
	var side = Math.ceil(Math.random() * 7) + 4;
	
	for (var x = planex - side;x <= planex + side;x++)
		for (var z = planez - side;z <= planez + side;z++)
			if (checkPos(x,planey,z))
				tiles[parseInt((planey * zSize + z) * xSize + x)] = 23;
				
}

var X = 30;
var O = 0;

var LEFT = new Array(X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X, X, O, O, O, O, O, O, X, X);
var RIGHT = new Array(O, O, O, O, O, O, X, X, O, O, O, O, O, X, X, X, O, O, O, O, X, X, X, O, O, O, O, X, X, X, O, O, O, O, X, X, X, O, O, O, O, X, X, X, O, O, O, O, X, X, X, O, O, O, O, O, X, X, O, O, O, O, O, O);

for (var cx = 0;cx < 20;cx++)
	for (var cz = 0;cz < 20;cz++) {
		var slash = Math.random() > .5;
		for (var x = 0;x <= 7;x++)
			for (var z = 0;z <= 7;z++) {
				for (var y = 2;y <= 7;y++) {
					if (checkPos(cx * 8 + x,y,cz * 8 + z))
						tiles[parseInt((y * zSize + cz * 8 + z) * xSize + cx * 8 + x)] = (slash ? LEFT[x * 8 + z] : RIGHT[x * 8 + z]);
				}
			}
	}

tiles; // This will serve as the return value of eval function.