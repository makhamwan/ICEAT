var Bullet = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Bullet.png' );
	},

	update: function(){
		var pos = this.getPosition();
		this.setPosition( pos.x - 19 , pos.y );
	}

});