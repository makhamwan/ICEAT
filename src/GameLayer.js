var score = 0;
var ran = 75;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this.dessertArr = [];
        this.bulletArr = [];
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );

        this.sec = 0;
        this.min = 2;

        this.background = new cc.Sprite.create( "res/images/PlayScene.png" );
        this.background.setPosition(new cc.Point( screenWidth/2 , screenHeight/2 ));
        this.addChild( this.background );

        this.initPlats();
        this.initBasket();
     
        this.score_show = cc.LabelTTF.create( '0' , 'Arial' , 40);
        this.score_show.setPosition( new cc.Point( screenWidth-156 , 40 ));
        this.addChild( this.score_show , 2);

        this.labelMin = cc.LabelTTF.create( '2' , 'Arial' , 40);
        this.labelMin.setPosition( new cc.Point( screenWidth - 130 , screenHeight-50 ));
        this.addChild( this.labelMin , 2);

        this.labelSec = cc.LabelTTF.create( '00' , 'Arial' , 40);
        this.labelSec.setPosition( new cc.Point( screenWidth - 80 , screenHeight-50 ));
        this.addChild( this.labelSec , 2);
     
        this.initScoreBoard();
        this.initTimeBoard();
        this.addKeyboardHandlers();
        this.scheduleUpdate();
        this.schedule(this.countdown,1);

        return true;
    },

    update: function(){
        this.randomPosition();
        this.checkPrecision();
        this.checkBulletOut();
        this.checkDessertOut();
        this.printScore();
    },

    countdown: function(){
        if(this.sec>0){
            this.sec-=1;
        }

        else if(this.sec==0&&this.min!=0){
            this.min-=1;
            this.sec=59;
        }
        else if(this.sec==0&&this.min==0){
            currentSpeed = 3;
            speed = 7.4;
            ran = 75;
            cc.director.runScene(new scoreScene);
        }

        this.updateTime(this.min,this.sec);
    },

    updateTime: function(min,sec){
        this.labelMin.setString(this.min);
        this.labelSec.setString(this.sec);
    },

    checkBulletOut: function(){
        for (var i = 0 ; i < this.bulletArr.length ; i++){
            var pos = this.bulletArr[i].getPosition();
            if (pos.x<0){
                this.bulletArr.splice(i,1);
            }
        }
    },

    checkDessertOut: function(){
        for (var i = 0 ; i < this.dessertArr.length ; i++){
            var pos = this.dessertArr[i].getPosition();
            if (pos.y<0){
                this.dessertArr.splice(i,1);
            }
        }
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
    },

    initScoreBoard: function(){
        this.scoreboard = new ScoreBoard();
        this.scoreboard.setPosition( new cc.Point( screenWidth-150 , 50 ));
        this.addChild( this.scoreboard );
    },

    initTimeBoard: function(){
        this.timeboard = new TimeBoard();
        this.timeboard.setPosition( new cc.Point( screenWidth-100 , screenHeight-50 ));
        this.addChild( this.timeboard );
    },

    randomPosition: function(){
        var random = Math.floor(Math.random() * ran );
        if ( random == 1){
            var whereX = Math.floor(Math.random() * (screenWidth-400) + 80);
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
                if ( this.isHit(this.dessertArr[i] , this.bulletArr[j] ) ){
                    this.afterShoot(this.dessertArr[i],this.bulletArr[j]);
                    
                    if (score%10 == 0 && score>0) {
                        this.dessertArr[i].setSpeed();
                        console.log("current" + currentSpeed);
                        this.basket.setSpeed();
                        console.log("speed" + speed);
                        if (ran > 30){ 
                           ran-=5;
                        }
                    }

                    if (this.bulletArr[j].getBulletY()<225){
                        score++;
                    }

                    else if (this.bulletArr[j].getBulletY()<350){
                        score+=2;
                    }
                    else if (this.bulletArr[j].getBulletY()<475){
                        score+=3;
                    }

                    this.bulletArr.splice(j,1);
                    this.dessertArr.splice(i,1);
                }
            }
        }
    },

    isHit : function(obj1,obj2) {
        if (obj1 != null && obj2 != null){        
            var dx = obj1.getPositionX();
            var dy = obj1.getPositionY();
            var bx = obj2.getPositionX();
            var by = obj2.getPositionY();

            var disX = Math.abs(dx - bx);
            var disY = Math.abs(dy - by);

            return ( disX < 70 && disY < 70 );
        }
            return false;
    },

    afterShoot: function(dessert,bullet){
        var x = dessert.getPositionX();
        var y = dessert.getPositionY();

        dessert.removeFromParent();
        bullet.removeFromParent();

        var hitdessert = new hitDessert();

        hitdessert.setPosition( x , y );
        hitdessert.scheduleUpdate();
        this.addChild(hitdessert);        
    },

    onKeyDown: function( keyCode, event ) {
        console.log(keyCode.toString());
        this.basket.setDirection(keyCode);
    },

    initBullet: function(){
        if ( this.bulletArr.length >= 2 ){
        }
        else {
        var bullet = new Bullet();
        var pos = this.basket.getPosition();
        bullet.setPosition(pos.x,pos.y);
        bullet.scheduleUpdate();
        this.addChild(bullet);
        this.bulletArr.push(bullet);
        
        if (score>0){
            score--;
        }

        }

    },

    onKeyUp: function( keyCode, event ) {
        console.log( 'Up: ' + keyCode.toString() );
        if (keyCode == 32){
            this.initBullet();
        }

        if (keyCode == 27 && score != 0){
            cc.director.runScene(new scoreScene);   
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

    printScore: function(){
        this.score_show.setString( score );
    }

});

var StartScene = cc.Scene.extend({    
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});