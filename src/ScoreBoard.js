var ScoreBoard = cc.Sprite.extend({
	
	ctor: function() {

		this._super();
		this.initWithFile( 'res/images/Board.png' );

	},

	Ten: function(){
		this._super();
		this.initWithFile('res/images/0_ten.png');	
	},

	Digit: function(){
		this._super();
		this.initWithFile('res/images/0_digit.png');	
	},

});