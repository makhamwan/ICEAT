var Dessert = cc.Sprite.extend({
	
	ctor: function() {

		this._super();
		this.initWithFile( 'res/images/Dessert1.png' );

	},

	update: function() {
		var pos = this.getPosition();
		this.setPosition( new cc.Point( pos.x, pos.y - 5 ) );
	}

	// release: function() {
	// 	var pos = this.getPosition();
	// 	this.setPosition( new cc.Point( pos.x, pos.y - 5 ) );
	// 	//this.schedule(this.release , 0.0002 );
	// }

});