Vector2 = function(){
	
	this.x = 0;
	this.y = 0;
}

Vector2.prototype.set = function(x, y){
	this.x = x;
	this.y = y;
}

Vector2.prototype.normalize = function(){
	
	var magnitude = (this.x * this.x) + (this.y * this.y);
	var length = Math.sqrt(magnitude);
	this.normalX = this.x / length;
	this.normalY = this.y / length;
}

Vector2.prototype.add = function(v2){

	this.x += v2.x;
	this.y += v2.y;
}

Vector2.prototype.subtract = function(v2){
	this.x -= v2.x;
	this.y -= v2.y;
}

Vector2.prototype.multiplyScalar = function(f){
	
	this.x *= f;
	this.y *= f;	
}

	
