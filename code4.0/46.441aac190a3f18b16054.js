(this.webpackJsonp=this.webpackJsonp||[]).push([[46],{LgTf:function(t,e,i){},zQyQ:function(t,e,i){"use strict";i.r(e),i.d(e,"CLASS_COLORS",(function(){return g})),i.d(e,"HeatMap",(function(){return p}));var s=i("lwsE"),a=i.n(s),n=i("W8MJ"),r=i.n(n),c=i("vBe5"),h=i("RhHs"),o=i("SC+/"),l=i("/TIM"),d=i("ziQ1"),g=(i("LgTf"),["#0057FF","#FF9948","#3DD1AE","#FF4B4B"]),p=function(){function t(e,i,s){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4?arguments[4]:void 0;a()(this,t),this.settings={showAxes:!0,noSvg:!1},this.xScale=void 0,this.yScale=void 0,this.numSamples=void 0,this.color_arr=void 0,this.canvas=void 0,this.svg=void 0,this.width=void 0,this.padding=void 0,r&&Object.assign(this.settings,r),this.numSamples=i,this.width=e,this.padding=this.settings.showAxes?20:0,this.color_arr=g.map((function(t){var e=Object(d.scaleLinear)().domain([0,1]).range(["#ffffff",t]).clamp(!0),i=Object(c.range)(0,1+1e-9,1/30).map((function(t){return e(t)}));return Object(d.scaleQuantize)().domain([0,1]).range(i)})),n&&Object(l.select)(s).selectAll("*").remove();var h=Object(l.select)(s).append("div").style("width","".concat(this.width,"px")).style("height","".concat(this.width,"px")).style("position","relative");this.canvas=h.append("canvas").attr("width",i).attr("height",i).style("width","".concat(this.width-2*this.padding,"px")).style("height","".concat(this.width-2*this.padding,"px")).style("position","absolute").style("top","".concat(this.padding,"px")).style("left","".concat(this.padding,"px")),this.settings.noSvg||(this.svg=h.append("svg").attr("width",this.width).attr("height",this.width).style("position","absolute").style("top","0").style("left","0").append("g").attr("transform","translate(".concat(this.padding,",").concat(this.padding,")")),this.svg.append("g").attr("class","train"))}return r()(t,[{key:"updateBackground",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t[0].length,s=t.length;if(i!==this.numSamples||s!==this.numSamples)throw new Error("The provided data matrix must be of size numSamples X numSamples");var a=this.canvas.node().getContext("2d");if(a){for(var n=a.createImageData(i,s),r=0,c=-1;r<s;++r)for(var h=0;h<i;++h){var l=t[h][r];e&&(l.density=l.density>=0?1:-1);var d=Object(o.rgb)(this.color_arr[l.class_index](l.density));n.data[++c]=d.r,n.data[++c]=d.g,n.data[++c]=d.b,n.data[++c]=160}a.putImageData(n,0,0)}}},{key:"resetPoints",value:function(t,e,i){this.resetRange(t,e),this.svg.select("g.train").selectAll("circle").remove(),this.updatePoints(i)}},{key:"updatePoints",value:function(t){if(this.settings.noSvg)throw Error("Can't add points since noSvg=true");this.updateCircles(this.svg.select("g.train"),t)}},{key:"resetRange",value:function(t,e){if(this.xScale=Object(d.scaleLinear)().domain(t).range([0,this.width-2*this.padding]),this.yScale=Object(d.scaleLinear)().domain(e).range([this.width-2*this.padding,0]),this.settings.showAxes){var i=Object(h.axisBottom)(this.xScale),s=Object(h.axisLeft)(this.yScale);this.svg.selectAll(".axis").remove(),this.svg.append("g").attr("class","x axis").attr("transform","translate(0,".concat(this.width-2*this.padding,")")).call(i),this.svg.append("g").attr("class","y axis").call(s)}}},{key:"updateCircles",value:function(t,e){var i=this,s=this.xScale.domain(),a=this.yScale.domain();e=e.filter((function(t){return t.x>=s[0]&&t.x<=s[1]&&t.y>=a[0]&&t.y<=a[1]}));var n=t.selectAll("circle").data(e);n.enter().append("circle").attr("r",3).style("stroke","#fff").style("stroke-width",.7).attr("cx",(function(t){return i.xScale(t.x)})).attr("cy",(function(t){return i.yScale(t.y)})).style("fill",(function(t){return i.color_arr[t.label](1)})),n.exit().remove()}}]),t}()}}]);