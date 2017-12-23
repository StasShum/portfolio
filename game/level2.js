var level2={
    preload:function(){
     game.load.image('btn','images/restartButton.png');  
    },
        create:function(){
        game.add.button(300,0,'btn',this.click);
    },
        update:function(){
        
    },
    click:function(){
       game.state.start("lev1");
    },
};