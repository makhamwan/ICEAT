var Bullet = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Bullet.png' );
	},

	update: function(){
		var pos = this.getPosition();
		//console.log("\nPOS :" + pos.x +"\nPOS :"+pos.y);
		if (pos.x<0){
			this.removeFromParent();
		}
		else
			this.setPosition( pos.x - 10 , pos.y );
	}

});