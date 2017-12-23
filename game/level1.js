var level1 = {
    preload: function () {

        game.load.spritesheet('clone', 'clone.png', 70, 70);
        game.load.image('arrowLeft', 'images/arrowLeft.png');
        game.load.image('arrowRight', 'images/arrowRight.png');
        game.load.image('arrowUp', 'images/arrowUp.png');
        game.load.image('shoot', 'images/hahaha.png');
        game.load.image('laser', "images/laserBlueVertical.png");
        game.load.image('box', "images/box.png");
        game.load.image('box1', "images/boxAlt.png");
        game.load.image('box2', "images/boxCoinAlt.png");
        game.load.image('box3', "images/boxExplosive.png");
        game.load.image('blue', "images/hud_gem_blue.png");
        game.load.image('green', "images/hud_gem_green.png");
        game.load.image('red', "images/hud_gem_red.png");
        game.load.image('yellow', "images/hud_gem_yellow.png");
        game.load.image('spaceplatform', 'images/lol.jpg');
        game.load.image('bomb', 'images/bomb.png');
        game.load.image('chupa1', 'images/chupa1.png');
        game.load.image('chupa2', 'images/chupa2.png');
        game.load.image('swordb', 'images/swordBronze.png');
        game.load.image('swordg', 'images/swordGold.png');
        game.load.image('swords', 'images/swordSilver.png');
        game.load.image('coin', 'images/hud_coins.png');
        game.load.image('droid', 'images/droid.png');




    },
    diamonds: null,
    clon: null,
    clon2: null,
    droid: null,
    droid2: null,
    left: null,
    right: null,
    up: null,
    laser1: null,
    laserTime: 0,
    laser: null,
    shoot: null,
    box: null,
    box1: null,
    box2: null,
    box3: null,
    boxmassiv: null,
    box1massiv: null,
    box2massiv: null,
    box3massiv: null,
    task: null,
    question: null,
    image: null,
    answers: null,
    answers1: null,
    right_answers: null,
    not_right_answers: null,
    answerscount: null,
    score:0,
    hah:null,
    create: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 4500, 800);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.image = game.add.sprite(0, 0, 'spaceplatform');


        game.physics.arcade.enable(this.image);
        this.image.scale.setTo(2.5, 1);
        this.clon = game.add.sprite(0, 30, 'clone');
        this.clon.scale.setTo(2, 2);
        this.box = game.add.group();
        this.boxmassiv = [[300, 500], [800, 500], [1200, 200], [1600, 400], [2000, 100], [2400, 600], [2800, 700], [3200, 400], [3600, 600], [4000, 200]];

        for (var i = 0; i < this.boxmassiv.length; i++) {
            var stas = this.box.create(this.boxmassiv[i][0], this.boxmassiv[i][1], 'box');
            game.physics.arcade.enable(stas);
            stas.body.immovable = true;
            stas.body.collideWorldBounds = true;
        }
        this.box1 = game.add.group();
        this.box1massiv = [[370, 500], [870, 500], [1270, 200], [1670, 400], [2070, 100], [2470, 600], [2870, 700], [3270, 400], [3670, 600], [4070, 200]];

        for (var h = 0; h < this.box1massiv.length; h++) {
            var stas1 = this.box1.create(this.box1massiv[h][0], this.box1massiv[h][1], 'box1');
            game.physics.arcade.enable(stas1);
            stas1.body.immovable = true;
            stas1.body.collideWorldBounds = true;
        }
        this.box2 = game.add.group();
        this.box2massiv = [[440, 500], [940, 500], [1340, 200], [1740, 400], [2140, 100], [2540, 600], [2940, 700], [3340, 400], [3740, 600], [4140, 200]];

        for (var e = 0; e < this.box2massiv.length; e++) {
            var stas2 = this.box2.create(this.box2massiv[e][0], this.box2massiv[e][1], 'box2');
            game.physics.arcade.enable(stas2);
            stas2.body.immovable = true;
            stas2.body.collideWorldBounds = true;
        }
        this.box3 = game.add.group();
        this.box3massiv = [[510, 500], [1010, 500], [1410, 200], [1810, 400], [2210, 100], [2610, 600], [3010, 700], [3410, 400], [3810, 600], [4210, 200]];

        for (var a = 0; a < this.box3massiv.length; a++) {
            var stas3 = this.box3.create(this.box3massiv[a][0], this.box2massiv[a][1], 'box3');
            game.physics.arcade.enable(stas3);
            stas3.body.immovable = true;
            stas3.body.collideWorldBounds = true;
        }



        game.physics.arcade.enable(this.clon);
        game.camera.follow(this.clon);
        this.clon.body.gravity.y = 300;
        this.clon.body.collideWorldBounds = true;

        this.clon.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.clon.frame = 10;
        this.clon.animations.add('right', [11, 12, 13, 14, 15, 16, 17], 10, true);
        this.shoot = game.add.sprite(500, 720, 'shoot');
        this.left = game.add.sprite(0, 720, 'arrowLeft');
        this.right = game.add.sprite(100, 720, 'arrowRight');
        this.up = game.add.sprite(700, 720, 'arrowUp');
        this.up.inputEnabled = true;
        this.shoot.inputEnabled = true;
        this.shoot.fixedToCamera = true;
        this.shoot.events.onInputUp.add(this.fireLaser);
        this.shoot.scale.setTo(0.15, 0.15)
        this.up.fixedToCamera = true;
        this.left.fixedToCamera = true;
        this.left.inputEnabled = true;
        this.left.events.onInputDown.add(this.moveleft);
        this.right.inputEnabled = true;
        this.right.events.onInputDown.add(this.moveright);
        this.right.fixedToCamera = true;
        
        this.answers = ["did", "fly", "bought", "worked", "read", "went","watched", this.hah={
            fill: "#e3c1c1",
            fontSize: "35px"
        }];
    
        this.right_answers = ["bought", "read", "went", "did"];
        this.not_right_answers = ["fly", "watched","worked"];
        this.answerscount = [[600,300],[600,500], [1200,300],  [2800, 300], [2500, 150], [1500, 100], [3500, 150], [4000, 150]];
        this.answers1 = game.add.group();
        this.answers1.enableBody = true;
        for (var h = 0; h < this.answers.length; h++) {
            var g = game.add.text(this.answerscount[h][0], this.answerscount[h][1], this.answers[h]);


            this.answers1.add(g);
            g.body.immovable = true;
            g.body.collideWorldBounds = true;

        }
        
        this.up.events.onInputDown.add(this.moveup);
        this.right.events.onInputUp.add(this.stop);
        this.left.events.onInputUp.add(this.stop);
        this.up.events.onInputUp.add(this.stop);
        this.laser1 = game.add.group();
        this.laser1.enableBody = true;
        this.laser1.physicsBodyType = Phaser.Physics.ARCADE;
        this.question = game.add.text(200, 40, "Answer the question which maybe not_right verbs last time in 2 form?", {
            fill: "#e3c1c1",
            fontSize: "35px"
        });
        this.question.fixedToCamera = true;


        this.task = game.add.text(200, 20, "Kill droids and find all swords,coins,chupas,diamonds.", {
            fill: "#e3c1c1",
            fontSize: "35px"
        });
        this.task.fixedToCamera = true;



        for (var i = 0; i < 100; i++) {
            var l1 = this.laser1.create(0, 0, 'laser');
            l1.name = 'laser' + i;
            l1.exists = false;
            l1.visible = false;
            l1.checkWorldBounds = true;
            l1.events.onOutOfBounds.add(this.resetLaser, this);
            l1.angle = 90;
        }
        this.diamonds = game.add.group();
        this.diamonds.enableBody = true;
        this.bombs = game.add.group();
        this.bombs.enableBody = true;
        this.thingss = game.add.group();
        this.thingss.enableBody = true;
        this.droids = game.add.group();
        this.droids.enableBody = true;





    },
    update: function () {

        game.physics.arcade.collide(level1.group, level1.clon);
        game.physics.arcade.collide(level1.box, level1.clon);
        game.physics.arcade.collide(level1.box1, level1.clon);
        game.physics.arcade.collide(level1.box2, level1.clon);
        game.physics.arcade.collide(level1.box3, level1.clon);
        game.physics.arcade.collide(level1.laser1, level1.box, this.collisionHandler1);
        game.physics.arcade.collide(level1.laser1, level1.box1, this.collisionHandler2);
        game.physics.arcade.collide(level1.laser1, level1.box2, this.collisionHandler3);
        game.physics.arcade.collide(level1.laser1, level1.box3, this.collisionHandler4);
        game.physics.arcade.collide(level1.diamonds, level1.clon, this.killDiamond);
        game.physics.arcade.collide(level1.thingss, level1.clon, this.killThing);
        game.physics.arcade.collide(level1.clon, level1.droids, this.killClon2);
        game.physics.arcade.collide(level1.laser, level1.droids, this.killDroid);
        game.physics.arcade.collide(level1.bombs, level1.laser, this.killBombs);
        game.physics.arcade.collide(level1.bombs, level1.clon, this.killClon1);
        game.physics.arcade.collide(level1.answers1, level1.clon, this.check);
        if (level1.score == 4) {
            game.state.start("lev3");
        }
    },
    fireLaser: function () {

        if (game.time.now > level1.laserTime) {
            level1.laser = level1.laser1.getFirstExists(false);
            console.log("shoot");

            if (level1.laser) {
                level1.laser.reset(level1.clon.x + 100, level1.clon.y + 8);
                level1.laser.body.velocity.x = 1000;
                level1.laserTime = game.time.now + 150;
            }
        }
    },
    moveleft: function () {
        level1.clon.body.velocity.x = -400;
        level1.clon.animations.play('left');
    },
    moveright: function () {
        level1.clon.body.velocity.x = 400;
        level1.clon.animations.play('right');
    },
    moveup: function () {
        if (level1.clon.body.touching.down || level1.clon.body.onFloor()) {
            level1.clon.body.velocity.y = -500;
        }
    },
    stop: function () {
        level1.clon.body.velocity.setTo(0);
        level1.clon.animations.stop();

        level1.clon.frame = 10;
    },
    resetLaser: function (laser) {

        laser.kill();

    },


    collisionHandler: function (laser, droid) {
        laser.kill();
        droid.kill();
    },
    collisionHandler1: function (laser, box) {
        var a = ['red', 'green', 'blue', 'yellow'];
        var rand = game.rnd.between(0, 3);
        var diamond = game.add.sprite(box.x, box.y, a[rand]);
        level1.diamonds.add(diamond);
        box.kill();
        laser.kill();


    },
    collisionHandler2: function (laser, box1) {
        var bomb = game.add.sprite(box1.x, box1.y, 'bomb');
        level1.bombs.add(bomb);
        box1.kill();
        laser.kill();
    },
    collisionHandler3: function (laser, box2) {
        var h = ['chupa1', 'chupa2', 'swordb', 'swordg', 'swords', 'coin'];
        var rand2 = game.rnd.between(0, 5);
        var things = game.add.sprite(box2.x, box2.y, h[rand2]);
        if (things.key == 'chupa1' || things.key == 'chupa2') {
            things.scale.setTo(0.5, 0.5);
        }
        level1.thingss.add(things);
        box2.kill();
        laser.kill();

    },
    collisionHandler4: function (laser, box3) {
        var h = ['droid'];
        var rand2 = game.rnd.between(0, 5);
        var droid = game.add.sprite(box3.x, box3.y, 'droid');
        //game.physics.arcade.enable(droid);
       
        level1.droids.add(droid);
        droid.body.bounce.setTo(1,1);
        droid.body.gravity.y=100;
        droid.body.velocity.y=300;
        droid.body.collideWorldBounds = true;
        box3.kill();
        laser.kill();
    },
    killDiamond: function (clon, diamonds) {

        diamonds.kill();
    },
    killThing: function (clon, thingss) {
        thingss.kill();

    },

    killBombs: function (laser, bomb) {
        bomb.kill();
        laser.kill();
    },
    killDroid: function (laser, droids) {
        droids.kill();
        laser.kill();
    },
    killClon1: function (clon, bomb) {

        bomb.kill();
        clon.kill();
        game.state.start("lev2");

    },
    killClon2: function (clon, droids) {
        clon.kill();
        game.state.start("lev2");

    },
   
    check: function (clon,a, b) {
         this.score++;
        for (var i = 0; i < level1.right_answers.length; i++)
            if (a.text == level1.right_answers[i]) {
               
                console.log("lol");
                
                level1.answers1.remove(b);
            }

    },
};
