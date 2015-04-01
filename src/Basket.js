var Basket = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Basket.png' );
		this.direction = Basket.DIR.UP;
	},

	move: function( dt ) {
		var pos = this.getPosition();
		if( this.direction == Basket.DIR.UP ){			
			//if ( pos.y < screenWidth ) {
				this.setPosition( new cc.Point( pos.x, pos.y + 10 ) );
			//}
		}
		else if( this.direction == Basket.DIR.DOWN ){
			//if ( pos.y < screenWidth ) {
				this.setPosition( new cc.Point( pos.x, pos.y - 10 ) );
			//}
		}
	}

});

Basket.DIR = {
	UP: 1,
	RIGHT: 2
};
