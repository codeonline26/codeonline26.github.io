// World generation as a worker.
/**
 * Creates a pseudo-random value generator. The seed must be an integer.
 *
 * Uses an optimized version of the Park-Miller PRNG.
 * http://www.firstpr.com.au/dsp/rand31/
 */
function Random(seed) {
  this._seed = seed % 2147483647;
  if (this._seed <= 0) this._seed += 2147483646;
}

/**
 * Returns a pseudo-random value between 1 and 2^32 - 2.
 */
Random.prototype.next = function () {
  return this._seed = this._seed * 16807 % 2147483647;
};

Random.prototype.nextInt = function (max) {
    return Math.floor( this.nextFloat()*max );
};

/**
 * Returns a pseudo-random floating point number in range [0, 1).
 */
Random.prototype.nextFloat = function (opt_minOrMax, opt_max) {
  // We know that result of next() will be 1 to 2147483646 (inclusive).
  return (this.next() - 1) / 2147483646;
};


var RandomLevel = function () {
    var progress = {
    	string: "",
    	percent: 0,
    	tiles: null        	
    }

    this.createLevel = function(seed, xSize, zSize, ySize) {
        //this.progressRenderer.progressStart("Generating level");
        //return;
        var random = new Random(seed);

        this.xSize = xSize;
        this.zSize = zSize;
        this.ySize = 64;
        this.random = random.nextFloat();
        this.tiles = [];//new Array(xSize*zSize*ySize);//[];
        this.fillQueue = [];

		// Worley Generation
		class WorleyNoise {
			constructor(config) {
				//console.log(config.dim);
				config = config || {};
				if (config.dim !== 2 && config.dim !== 3 && config.dim !== undefined)
					throw '"dim" can be 2 or 3';

				this._dim = config.dim || 2;
				//this._rng = new Alea(config.seed || Math.random());
				this._points = [];

				for (let i = 0; i < config.numPoints; i++) {
					//console.log(i);
					this._points.push({
						x: this.random(),
						y: this.random(),
						z: this.random()
					});
				}
			}

			addPoint(coord) {
				this._points.push(coord);
			}
			
			printPoints() {
				console.log(this._points)
			}

			getEuclidean(coord, k) {
				return Math.sqrt(this._calculateValue(coord, k, euclidean));
			}

			getManhattan(coord, k) {
				return this._calculateValue(coord, k, manhattan);
			}

			_calculateValue(coord, k, distFn) {
				let minDist;
				this._points.forEach(p => { p.selected = false; });

				for (let j = 0; j < k; ++j) {
					let minIdx;
					minDist = Number.POSITIVE_INFINITY;

					for (let i = 0; i < this._points.length; ++i) {
						const p = this._points[i];
						const dz = this._dim === 2 ? 0 : coord.z - p.z;
						const dist = distFn(coord.x - p.x, coord.y - p.y, dz);

						if (dist < minDist && !p.selected) {
							minDist = dist;
							minIdx = i;
						}
					}

					this._points[minIdx].selected = true;
				}

				return minDist;
			}
		}

		const euclidean = (dx, dy, dz) => dx * dx + dy * dy + dz * dz;
		const manhattan = (dx, dy, dz) => Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
		
        this.genWorley = function(aint) {
            var i = this.xSize;
            var j = this.zSize;
            var k = this.ySize;
            
            wor = new WorleyNoise({});

            for (var ia = 0;ia < 50;++ia) {
				wor.addPoint({x:Math.random(),y:Math.random(),z:0});
            }
            
            wor.printPoints();
            
            for (var l = 0; l < i; ++l) { // x direction
                progress.percent = l * 100 / (this.xSize - 1);
            	self.postMessage(progress);

                for (var i1 = 0; i1 < j; ++i1) { // z direction
                    var j1;
                    //var loc = parseInt( ((j1 = parseInt(aint[l + i1 * i]) + [Y OFFSET]) * this.zSize + i1 + [Z OFFSET]) * this.xSize + l + [X OFFSET]); Get the height at (l ,i1)
                    //var block = (parseInt(this.tiles[((j1 + 1) * this.zSize + i1) * this.xSize + l]) & 255)
					
					//var ht = wor.getEuclidean({x: l/this.xSize,y: i1/this.zSize,z: 0}, 1) * 160 + 20; //F1
					//var ht = wor.getEuclidean({x: l/this.xSize,y: i1/this.zSize,z: 0}, 2) * 160 + 20; //F2
					var ht = (wor.getEuclidean({x: l/this.xSize,y: i1/this.zSize,z: 0}, 2) - wor.getEuclidean({x: l/this.xSize,y: i1/this.zSize,z: 0}, 1)) * 220 + 20; //F2-F1
					//ht = parseInt(Math.min(Math.max(ht,1),63));

					//Make ground
                    var loc = parseInt( ((j1 = parseInt(ht)) * this.zSize + i1) * this.xSize + l);
                    var loc1 = parseInt( ((j1 = parseInt(ht) - 1) * this.zSize + i1) * this.xSize + l);
                    this.tiles[loc] = ht % 13 + 24;
                    this.tiles[loc1] = (ht - 1) % 13 + 24;
                }
            }

        }

        progress.string = "Filling Air..";
        var j2 = this.xSize;
        var k2 = this.zSize;

        j1 = this.ySize;

        var l2;
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

        progress.string = "Generating Worley..";
        this.genWorley();

        progress.tiles = this.tiles;
        progress.string = "";
        self.postMessage(progress);
    }
}

function startGeneration (obj) { //{worldSize: worldSize, seed: props.seed, seedrandom: seedrandom}
	var level = new RandomLevel();
	//console.log(level)
	var width = obj.worldSize;
	var depth = obj.worldSize;
	var height = 64;
	level.createLevel(obj.seed, width, depth, height);
}

self.addEventListener('message', function(e) {
  //console.log("worker get "+e.data);
  startGeneration(e.data)
}, false);