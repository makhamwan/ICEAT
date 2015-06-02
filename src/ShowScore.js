var ShowScore = cc.Layer.extend({
	ctor: function(){
		this._super();
		this.init();
	},

	init: function(){
		this._super();

    this.background = new cc.Sprite.create( "res/images/End.png" );
    this.background.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
    this.addChild( this.background );
    
    this.score_show = cc.LabelTTF.create( score , 'Arial' , 50);
    this.score_show.setPosition( new cc.Point( screenWidth/2 , screenHeight-200 ));
    this.addChild( this.score_show , 2);
    this.initScoreBoard();
    //console.log(score);
    this.createbutton();
	},

    update: function() {

    },

    initScoreBoard: function(){
        this.board = new Board();
        this.board.setPosition( new cc.Point( screenWidth/2 , screenHeight-200 ));
        this.addChild( this.board );
    },


    createbutton: function()
    {
        this.ok = new cc.MenuItemImage( 'res/images/ok1.png', 'res/images/ok2.png', function(){
            cc.director.runScene(new MainScene());
        },this); 

        this.ok = new cc.Menu( this.ok );
        this.ok.setPosition( new cc.Point( screenWidth/2 , screenHeight/2 ) );
        this.addChild(this.ok);
        score = 0;
        currentSpeed = 3;
        speed = 7.4;
        ran = 75;

    }

});

var scoreScene = cc.Scene.extend({
   onEnter: function() {
       this._super();
       var layer = new ShowScore();
       layer.init();
       this.addChild( layer );
   }
});