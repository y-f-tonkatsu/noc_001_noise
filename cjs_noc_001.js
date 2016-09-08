(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 768,
	height: 480,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bg_noframe.jpg", id:"bg_noframe"},
		{src:"images/bg_vivid.jpg", id:"bg_vivid"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.bg_noframe = function() {
	this.initialize(img.bg_noframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.bg_vivid = function() {
	this.initialize(img.bg_vivid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,240);


(lib.Frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399FF").ss(2,1,1).p("Eghbgi6MBC3AAAQBkAAAABkMAAABCtQAABkhkAAMhC3AAAQhkAAAAhkMAAAhCtQAAhkBkAAg");
	this.shape.setTransform(0,223.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-1,450.1,449.1);


(lib.Ex001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Ex001:0});

	// レイヤー 4
	this.instance = new lib.bg_vivid();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.BgFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-384,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,0,768,480);


(lib.Frame_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.Frame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,218.6,0.058,0.058,-90,0,0,0,223.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:223.6,scaleX:1,scaleY:1,rotation:0,y:223.6},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,204.6,28,28);


(lib.Ex002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Ex001":0});

	// レイヤー 5
	this.instance = new lib.BgFrame("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(384,240,1,1,0,0,0,0,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},45).to({_off:true},1).wait(1));

	// レイヤー 4
	this.instance_1 = new lib.bg_vivid();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Circle3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Main_start:0,Main_load:18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Circle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Circle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Noise2D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Noise1D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Motion3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Motion2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Motion1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},13).wait(51));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},15).wait(51));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},17).wait(51));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Line3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Line2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_noframe();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Main_start":0,"Main_load":18});

	// レイヤー 12
	this.instance = new lib.Frame_in("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(64));

	// レイヤー 11
	this.instance_1 = new lib.Frame_in("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(66));

	// レイヤー 8
	this.instance_2 = new lib.Frame_in("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(343.1,239.6,1,1,0,0,0,0,223.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(68));

	// レイヤー 5
	this.instance_3 = new lib.BgFrame("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(384,240,1,1,0,0,0,0,240);
	this.instance_3.alpha = 0.199;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(51));

	// レイヤー 6
	this.instance_4 = new lib.bg_vivid();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


(lib.Root = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ex002
	this.ex002 = new lib.Ex002();
	this.ex002.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex002).wait(1));

	// ex001
	this.ex001 = new lib.Ex001();
	this.ex001.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ex001).wait(1));

	// noise2D
	this.noise2D = new lib.Noise2D();
	this.noise2D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.noise2D).wait(1));

	// noise1D
	this.noise1D = new lib.Noise1D();
	this.noise1D.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.noise1D).wait(1));

	// motion3
	this.motion3 = new lib.Motion3();
	this.motion3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion3).wait(1));

	// motion2
	this.motion2 = new lib.Motion2();
	this.motion2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion2).wait(1));

	// motion1
	this.motion1 = new lib.Motion1();
	this.motion1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.motion1).wait(1));

	// circle3
	this.circle3 = new lib.Circle3();
	this.circle3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle3).wait(1));

	// circle2
	this.circle2 = new lib.Circle2();
	this.circle2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle2).wait(1));

	// circle1
	this.circle1 = new lib.Circle1();
	this.circle1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.circle1).wait(1));

	// line3
	this.line3 = new lib.Line3();
	this.line3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line3).wait(1));

	// line2
	this.line2 = new lib.Line2();
	this.line2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

	// line1
	this.line1 = new lib.Line1();
	this.line1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,768,480);


// stage content:
(lib.noc001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// root
	this.root = new lib.Root();
	this.root.parent = this;
	this.root.setTransform(384,240,1,1,0,0,0,384,240);

	this.timeline.addTween(cjs.Tween.get(this.root).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384,240,768,480);

})(cjsLib = cjsLib||{}, cjsImages = cjsImages||{}, createjs = createjs||{}, ss = ss||{});
var cjsLib, cjsImages, createjs, ss;