var level0={
    preload:function(){
       
    game.load.image('button','images/button.png');  
    game.load.image('fone','images/lal.jpg') ;  
    },
        create:function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 4500, 800);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.image = game.add.sprite(0, 0, 'fone');
        this.image.scale.setTo(7,3)
        game.add.button(0,700,'button',this.click2)
    },
        update:function(){
        
    },
    click2:function(){
       game.state.start("lev1")
    },
}