var Basket = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Basket.png' );
		//this.direction = Ship.DIR.UP;
	},
	updateSpritePosition: function() {

	},

});

//     Ship.DIR = {
//     UP: 1,
//     RIGHT: 2
// };

// var Ship = cc.Sprite.extend({
	
//     ctor: function() {
//         this._super();
//         this.initWithFile( 'res/images/ship.png' );
//         this.direction = Ship.DIR.UP;
//     },

//     update: function( dt ) {
// 		var pos = this.getPosition();
// 		if (pos.y < screenHeight) {
// 			this.setPosition( new cc.Point( pos.x, pos.y + 5 ) );
// 			}
// 		else {
// 			this.setPosition( new cc.Point( pos.x, 0 ) );
// 		}
//     },
//      switchDirection: function() {
// 		if ( this.direction == Ship.DIR.UP ) {
// 	    	this.direction = Ship.DIR.RIGHT;
// 	    	this.setRotation( 90 );
// 		} else {
// 	    	this.direction = Ship.DIR.UP;
// 	    	this.setRotation( 0 );
// 		}
//     }

// });

