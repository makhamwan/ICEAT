var Basket = cc.Sprite.extend({
	ctor: function( x , y ) {
		this._super();
		this.initWithFile( 'res/images/basket.png');
		this.x = x ;
		this.y = y ;

	},
	
	updateSpritePosition: function() {
	}

});