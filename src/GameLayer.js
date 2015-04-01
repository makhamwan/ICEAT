var GameLayer = cc.LayerColor.extend({
    
    init: function() {
        
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
   
        this.setBackground = new cc.Sprite.create( "res/images/PlayScene.png" );
        this.setBackground.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
        this.addChild( this.setBackground );

        this.basket = new Basket();
        this.basket.setPosition( new cc.Point( screenWidth-100 , screenHeight-150 ));
        this.addChild( this.basket );
        this.basket.scheduleUpdate();

        this.plats = new Plats();
        this.plats.setPosition( new cc.Point( 200 , screenHeight-150 ));
        this.addChild( this.plats );
        this.plats.scheduleUpdate();

        this.addKeyboardHandlers();

        // this.dessert = new Dessert();
        // this.dessert.setPosition( new cc.Point( 200 , screenHeight-50 ));
        // this.addChild( this.plats );
        // this.dessert.scheduleUpdate();
        return true;
    },

    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.up ) this.basket.DIR.UP;
        else if ( keyCode == cc.KEY.down ) this.basket.DIR.DOWN;
        this.basket.move();
    },

    onKeyUp: function( keyCode, event ) {
        console.log( 'Up: ' + keyCode.toString() );
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

});
 
var StartScene = cc.Scene.extend({    
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});