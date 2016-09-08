var E000021 = {};

E000021.init = function(){
	
	this.graphUtil = new GraphUtil('#contMainCanvas');
	
};

E000021.draw = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawGraph(out);
	
};

E000021.drawCircle = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawCircle(out);
	
};

E000021.motion = function(out){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.drawMotion2(out);
	
};

E000021.noise1D = function(){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.draw1D();
	
};

E000021.noise2D = function(){
	
	if(!this.graphUtil){
		this.init();
	}
	
	this.graphUtil.draw2D();
	
};

E000021.stop = function(){
	if(this.graphUtil){
		this.graphUtil.stop();
	}
};

E000021.clear = function(){
	if(this.graphUtil){
		this.graphUtil.clear();
	}
};

E000021.remove = function(){
	if(this.graphUtil){
		this.graphUtil.stop();
	}
	this.graphUtil = null;
};
