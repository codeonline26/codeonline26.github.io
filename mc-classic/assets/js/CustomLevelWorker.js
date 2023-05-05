// World generation as a worker.
function Random(seed) {
  this._seed = seed % 2147483647;
  if (this._seed <= 0) this._seed += 2147483646;
}

Random.prototype.next = function () {
  return this._seed = this._seed * 16807 % 2147483647;
};

Random.prototype.nextInt = function (max) {
    return Math.floor( this.nextFloat()*max );
};

Random.prototype.nextFloat = function (opt_minOrMax, opt_max) {
  return (this.next() - 1) / 2147483646;
};


var RandomLevel = function () {
    var progress = {
    	string: "",
    	percent: 0,
    	tiles: null        	
    }

    this.createLevel = function(seed, xSize, zSize, ySize, genCodeIn) {
        var random = new Random(seed);

        this.xSize = xSize;
        this.zSize = zSize;
        this.ySize = 64;
        this.random = random.nextFloat();
        this.tiles = [];
        this.fillQueue = [];

        this.genCustom = function() {
			//console.log(genCodeIn);
			this.tiles = eval("var xSize=" + this.xSize + ";var zSize=" + this.zSize + ";var ySize=" + this.ySize + ";var tiles=[" + this.tiles +"];" + genCodeIn);
        }

        progress.string = "Preparing World..";
        var j2 = this.xSize;
        var k2 = this.zSize;
        var j1 = this.ySize;
        var i3;

        for (l = 0; l < j2; ++l) {
            progress.percent = l * 100 / (xSize - 1);
            self.postMessage(progress);

            for (i1 = 0; i1 < k2; ++i1) {
                for (i3 = 0; i3 < j1; ++i3) {
                    var j3 = (i3 * zSize + i1) * xSize + l;
                    this.tiles[j3] = 0;
                }
            }
        }

        progress.string = "Generating Custom..";
        self.postMessage(progress);
        this.genCustom();
    
        progress.tiles = this.tiles;
        progress.string = "";
        self.postMessage(progress);
    }
}

function startGeneration (obj) {
	var level = new RandomLevel();
	var width = obj.worldSize;
	var depth = obj.worldSize;
	var height = 64;
	level.createLevel(obj.seed, width, depth, height, obj.gencode);
}

self.addEventListener('message', function(e) {
  //console.log("worker get "+e.data);
  startGeneration(e.data)
}, false);