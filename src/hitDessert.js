var hitDessert = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/hitDessert.png' );
	},
		update: function() {
		
		var pos = this.getPosition();
		if (pos.y<0){
			this.removeFromParent();
		}
		this.setPosition( pos.x, pos.y - 5 );

	}

});