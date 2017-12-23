var level3={
    preload:function(){
     game.load.image('btn','images/restartButton.png')   
    },
        create:function(){
            game.add.text(50,0,"you win.you are cool!But  please wait please new games!")
        game.add.button(300,0,'btn',this.click)
    },
        update:function(){
        
    },
    click:function(){
       game.state.start("lev0")
    },
}