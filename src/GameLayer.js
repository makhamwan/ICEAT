var GameLayer = cc.LayerColor.extend({
        
    init: function() {
        
        this.dessertArr = [];
        this.bulletArr = [];

        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
   
        this.background = new cc.Sprite.create( "res/images/PlayScene.png" );
        this.background.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
        this.addChild( this.background );

        this.addKeyboardHandlers();

        this.initBasket();
        this.initPlats();
        this.initDessert();

        var random = Math.random()*100;
        console.log(random);

        this.scheduleUpdate();

        return true;
    },

    update: function(){
        this.randomPosition();
        this.checkPrecision();
    },

    initBasket: function() {
        this.basket = new Basket();
        this.basket.setPosition( new cc.Point( screenWidth-100 , screenHeight-200 ));
        this.addChild( this.basket );
        this.basket.scheduleUpdate();
    },

    initPlats: function(){
        this.plats = new Plats();
        this.plats.setPosition( new cc.Point( 230 , screenHeight-120 ));
        this.addChild( this.plats );
        this.plats.scheduleUpdate();
    },

    randomPosition: function(){
        var random = Math.floor(Math.random() * 90 );
        var whereX = Math.floor(Math.random() * (screenWidth-400) );

        if ( random == 1){
            this.dessert = new Dessert();
            this.addChild( this.dessert );
            this.dessert.setPosition( new cc.Point( whereX , screenHeight-60 ) );
            this.dessert.scheduleUpdate();
        }
    },

    checkPrecision: function(){
        for (var i = 0 ; i < this.dessertArr ; i++){
            for (var j = 0 ; j < this.bulletArr ; j++){
                if ( this.dessertArr[i].getPosition() == this.bulletArr[j].getPosition() ){
                    console.log("hit");
                }
            }
        }
    },

    // randomDessert: function(){

    // },

    initDessert: function(){
        this.dessert = new Dessert();
        this.dessert.setPosition( new cc.Point( 200 , screenHeight-60 ));
        this.dessert.scheduleUpdate();
        this.dessertArr.push(this.dessert);
    },

    onKeyDown: function( keyCode, event ) {
        console.log(keyCode.toString());
        this.basket.setDirection(keyCode);
    },

    initBullet: function(){
        this.bullet = new Bullet();
        var pos = this.basket.getPosition();
        this.bullet.setPosition(pos.x,pos.y);
        this.bullet.scheduleUpdate();
        this.addChild(this.bullet);
        this.dessertArr.push(this.bullet);  
    },

    onKeyUp: function( keyCode, event ) {
        console.log( 'Up: ' + keyCode.toString() );
        if (keyCode == 32){
            this.initBullet();
        }
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