var GraphUtil;

$(function(){
	
	GraphUtil = function(canvas, option){
		
		this._width = $(canvas).attr('width');
		this._height = $(canvas).attr('height');
		
		this._canvas = $(canvas).get(0);
		this._stage = new createjs.Stage(this._canvas);
		this._graphics = new createjs.Graphics();
		this._shape = new createjs.Shape(this._graphics);
		this._stage.addChild(this._shape);
		
		this._currentAnimator = null;
		this._stopped = false;
		
		this._option = _.defaults(option || {}, {
			'lineWidth': 0.5,
			'color': '##003399'
		});
		
	};
	
	GraphUtil.prototype = {
		
		DEFAULT_PROGRESS:0.01,
		
		init:function(){
			
			if(_.isFunction(this._currentAnimator)){
				this.stop();
			}
			
			this.clear();
			
		},
		
		stop:function(){
			this._stopped = true;
			createjs.Ticker.removeEventListener('tick', this._currentAnimator);
		},
			
		clear:function(){
			this._graphics.clear();
			this._stage.clear();
			this._stage.update();
		},
		
		play:function(animator){
			
			this._currentAnimator = animator;
			createjs.Ticker.addEventListener('tick', this._currentAnimator);
			
		},
			
		drawGraph:function(out, progress){
			
			this.init();
			
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var pv;
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginStroke(this._option.color);
				
				var v = out(s) * this._width;
				
				if(_.isUndefined(pv)){pv = v;}
				
				var progressRate = Math.pow(progress, -1);
				
				this._graphics.moveTo(s * progressRate, pv)
				.lineTo((s + progress) * progressRate, v);
				
				pv = v;
				
				s += progress;
								
				this._stage.update();
				
				if(s * progressRate >= this._height){this.stop();}
				
			}, this));
			
			
		},
	
		drawCircle:function(out, progress, progress2, progress3, noiseStr){
			
			this.init();
						
			var s = 0;
			var t = 1000;
			var u = 2000;
			var progress = progress || this.DEFAULT_PROGRESS;
			var progress2 = progress2 || this.DEFAULT_PROGRESS + 0.01;
			var progress3 = progress3 || this.DEFAULT_PROGRESS + 0.02;
			
			var px, py;
			
			var shorter = Math.min(this._height, this._width);
			var str = noiseStr || shorter * 0.2;
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginStroke(this._option.color);
				
				s += progress;
				t += progress2;
				u += progress3;
				
				var v = (0.5 - out(s)) * str;
				var w = (0.5 - out(t)) * str;
				var z = (0.5 - out(u)) * str;
				
				var cx = this._width * 0.5;
				var cy = this._height * 0.5;
				var r = shorter * 0.4 + z;
				var x = cx + Math.cos(t) * r + v;
				var y = cy + Math.sin(t) * r + w;
				
				if(_.isUndefined(px)){px = x;}
				if(_.isUndefined(py)){py = y;}
				
				this._graphics.moveTo(px, py).lineTo(x, y);
				
				px = x;
				py = y;
				
				this._stage.update();
				
			}, this));
			
			createjs.Ticker.addEventListener('tick', this._currentAnimator);
			
		},
	
		drawMotion:function(out, progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var maxSize = Math.min(this._width, this._height) * 0.4;
			var cx = this._width * 0.5;
			var cy = this._height * 0.5;
			
			var frame = 0;
			
			var c = function(p){
				this.p = p;
				this.r = 0;
			}
			
			var circles = [new c(0.1), new c(0.13), new c(0.16), new c(0.19), new c(0.22)];
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this.clear();
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				
				s += progress;
				var v = out(s);
				
				_.each(circles, _.bind(function(circle){
					circle.p += v * 0.05;
					circle.r = maxSize * Math.abs((circle.p - Math.floor(circle.p)) - (Math.floor(circle.p) % 2));;
					this._graphics.beginStroke(this._option.color);
					this._graphics.drawCircle(cx, cy, circle.r);
					this._graphics.endStroke();
				}, this));
				
				this._stage.update();
				
			}, this));
			
		},	
	
		drawMotion2:function(out, progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var r = Math.min(this._width, this._height) * 0.4;
			var cx = this._width * 0.5;
			var cy = this._height * 0.5;
			
			var a = 0;
					
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				this.clear();
				
				s += progress;
				var v = Math.pow(out(s), 5);
				a += v;
				var x = cx + Math.cos(a) * (r);
				var y = cy + Math.sin(a) * (r);
				
				this._graphics.setStrokeStyle(this._option.lineWidth);
				this._graphics.beginFill(this._option.color);
				this._graphics.drawCircle(x, y, r * 0.1);
				this._graphics.endStroke();
				
				this._stage.update();
				
			}, this));
			
		},
	
		draw1D:function(progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var left = 0;
					
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				s += progress;
				var v = (noise(s) * 255).toString();
				v = v.substring(0, v.indexOf('.'));
				this._graphics.setStrokeStyle(1);
				this._graphics.beginStroke('rgba(' + v + ',' + v + ',' + v + ',1)');
				this._graphics.moveTo(left, 0).lineTo(left, this._height);
				this._graphics.endStroke();
				
				left++;
				
				this._stage.update();
				
			}, this));
			
		},
	
		draw2D:function(progress){
			
			this.init();
						
			var s = 0;
			var progress = progress || this.DEFAULT_PROGRESS;
			
			var left = 0;
					
			this._graphics.setStrokeStyle(1);
			
			this.play(_.bind(function(){
				
				if(this._stopped){
					this._stopped = false;
					return;
				}
				
				s += progress;
				var top = 0;
				
				var t = 0;
				
				_.times(this._height, _.bind(function(){
					t += progress;
					var v = (noise(s, t) * 255).toString();
					v = v.substring(0, v.indexOf('.'));
					this._graphics.beginStroke('rgba(' + v + ',' + v + ',' + v + ',1)');
					this._graphics.moveTo(left, top).lineTo(left, top + 1);
					top++;
				}, this));
				
				this._graphics.endStroke();
				
				left++;
				
				this._stage.update();
				
			}, this));
			
		}
	
	};
		
});