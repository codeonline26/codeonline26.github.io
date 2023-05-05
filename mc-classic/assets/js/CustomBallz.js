function checkPos(x,y,z){
	return (x >= 0 && x < xSize && y > 0 && y < ySize && z >= 0 && z < zSize);
}

for (var i = 1;i <= 20;i++){
	var ballx = Math.ceil(Math.random() * 200);
	var ballz = Math.ceil(Math.random() * 200);
	var bally = Math.ceil(Math.random() * 15) + 32;
	var radius = 3 + Math.ceil(Math.random() * 12);
	for (var x1 = ballx - radius - 1;x1 <= ballx + radius + 1;x1++)
		for (var z1 = ballz - radius - 1;z1 <= ballz + radius + 1;z1++)
			for (var y1 = bally - radius - 1;y1 <= bally + radius + 1;y1++)
				if (checkPos(x1,y1,z1) && ((x1-ballx)**2+(z1-ballz)**2+(y1-bally)**2 <= radius**2)){
					tiles[parseInt((y1 * zSize + z1) * xSize + x1)] = (y1 + z1 + x1) % 13 + 24;
				}
}
tiles;