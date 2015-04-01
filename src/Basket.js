var Basket = cc.Sprite.extend({
	
	ctor: function() {

		this._super();
		this.initWithFile( 'res/images/Basket.png' );

		this.direction = Basket.DIR.UP;
	},

});

Basket.DIR = {
	UP: 1,
	RIGHT: 2
};
