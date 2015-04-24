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

        this.initPlats();
        this.initBasket();

        // var random = Math.random()*100;
        // console.log(random);

        this.scheduleUpdate();

        return true;
    },

    update: function(){
        if(this.bulletArr.length != 0 ) {
            for(var i=0 ; i<this.bulletArr.length ; i++) {
                //console.log(this.bulletArr[i].getPositionX());
            }
        }
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
            var dessert = new Dessert();
            this.addChild( dessert );
            dessert.setPosition( new cc.Point( whereX , screenHeight-60 ) );
            dessert.scheduleUpdate();
            this.dessertArr.push(dessert);
        }
    },

    checkPrecision: function(){
        for (var i = 0 ; i < this.dessertArr.length ; i++){
            for (var j = 0 ; j < this.bulletArr.length ; j++){
                
                var dx = this.dessertArr[i].getPositionX();
                var dy = this.dessertArr[i].getPositionY();
                var bx = this.bulletArr[j].getPositionX();
                var by = this.bulletArr[j].getPositionY();

                //var disX = Math.abs(dx , bx);
                var disY = Math.abs(dy , by);
                //console.log(disX +" // "+ disY);

                if ( dx == bx && disY < 50 ){
                //    console.log("hit");
                //    this.bulletArr[j].unhit = false;
                }
            }
        }
    },

    // randomDessert: function(){

    // },

    onKeyDown: function( keyCode, event ) {
        console.log(keyCode.toString());
        this.basket.setDirection(keyCode);
    },

    initBullet: function(){
        var bullet = new Bullet();
        var pos = this.basket.getPosition();
        bullet.setPosition(pos.x,pos.y);
        bullet.scheduleUpdate();
        this.addChild(bullet);
        this.bulletArr.push(bullet);  
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