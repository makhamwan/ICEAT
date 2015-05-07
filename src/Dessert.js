
var currentSpeed = 2;

var Dessert = cc.Sprite.extend({

	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Dessert1.png' );
	},

	update: function() {
		var pos = this.getPosition();
		if (pos.y<0){
			this.removeFromParent();
		}
		this.setPosition( pos.x, pos.y - currentSpeed );

	},

	setSpeed: function() {
		currentSpeed+=2;
	}

});