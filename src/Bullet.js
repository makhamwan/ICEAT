var Bullet = cc.Sprite.extend({
	
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/Bullet.png' );
	},

	update: function(){
		//this.unhit = true;
		var pos = this.getPosition();
		//new
		// //if(this.unhit) {
		// 	if (pos.x<0){	
		// 		this.removeFromParent();
		// 	}
		// 	this.setPosition( pos.x - 19 , pos.y );
		// //}
		
		// // if (pos.y<0){
		// // 		this.removeFromParent();
		// // 	}
		// // 	this.setPosition( pos.x , pos.y - 19);
		// // }

		if (pos.x<0){
			this.removeFromParent();
		}
		this.setPosition( pos.x - 10 , pos.y );
	}
});