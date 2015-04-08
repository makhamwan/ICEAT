var Basket = cc.Sprite.extend({
	
	ctor: function() {
		console.log("I am a basket");		
		this._super();
		this.initWithFile( 'res/images/Basket.png' );
		this.direction = Basket.DIR.UP;
	},

	move: function( dt ) {
		var pos = this.getPosition();
		if( this.direction == Basket.DIR.UP ){			
			if ( pos.y < screenHeight-200 ) {
				this.setPosition( new cc.Point( pos.x, pos.y + 10 ) );
			}
		}
		else if( this.direction == Basket.DIR.DOWN ){
			if ( pos.y > 100 ) {
				this.setPosition( new cc.Point( pos.x, pos.y - 10 ) );
			}
		}
	},

	setDirection: function(keyCode){
		if ( keyCode == cc.KEY.up ) {
            this.direction = Basket.DIR.UP;
            this.move();
        }
        else if ( keyCode == cc.KEY.down ) {
            this.direction = Basket.DIR.DOWN;
            this.move();
        }
	}

});

Basket.DIR = {
	UP: 1,
	DOWN: 2
};
