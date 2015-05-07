var Menu = cc.Layer.extend({
	ctor: function(){
		this._super();
		this.init();
	},

	init: function(){
		this._super();

    this.background = new cc.Sprite.create( "res/images/Background.png" );
    this.background.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
    this.addChild( this.background );
    this.addKeyboardHandlers();
	},

	addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },

    onKeyDown: function( keyCode, event ) {
        
    },
    
    onKeyUp: function( keyCode, event ) {
        if (keyCode == cc.KEY.enter) {
            cc.director.runScene(new StartScene());
        }
    },
    
    update: function(dt) {

    }
});

var EndScene = cc.Scene.extend({
   onEnter: function() {
       this._super();
       var layer = new Menu();
       layer.init();
       this.addChild( layer );
   }
});