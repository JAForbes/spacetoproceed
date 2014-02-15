var levels = [
  {
    text:'*Rumble* Now is my only chance to escape.  <br><br>[Up] to teleport.  [Up] to land.',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ]
    }
  },
  {
    text:'This facility was hard enough to navigate, before the overload! <br><br>[Arrows] to Aim',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:9,y:4},{x:0,y:0}
      ],
      exit:[
        {x:0,y:0}
      ],
      gem:[
        {x:4,y:2}
      ],
      fuel:[
        {x:4,y:4}
      ]
    }
  },
  {//collect multiple
    text:['This place is crawling with guards! I must be brave!'],
    start:{x:0,y:0},
    elements:{
      podium:[
        {x:0,y:0},{x:5,y:0},{x:7,y:0},{x:9,y:0},

                  {x:5,y:4},          {x:9,y:4},
                                      {x:9,y:7}
      ],
      fuel:[
                  {x:5,y:0},         ,{x:9,y:0},

                           ,{x:7,y:4},
      ],
      gem:[
                  {x:5,y:4},          {x:9,y:4},
      ],
      exit:[
        {x:9,y:7}
      ]
    }
  },
  {
    text:['"Help us!", your former captors cry.<br>"Don\'t leave us behind!  We have plans for you!"'],
    start:{x:9,y:1},
    elements:{
      podium:[
                                      {x:9,y:1},

                  {x:5,y:4},          {x:9,y:4},
                                      {x:9,y:7}
      ],
      fuel:[
                  {x:5,y:1},
                                    {x:9,y:2.5},

                           ,{x:7,y:4},
      ],
      gem:[
                  {x:5,y:4},          {x:9,y:4},
      ],
      exit:[
        {x:9,y:7}
      ]
    }
  },
  {
    text:['"What use is escape - to a machine.  You were designed <i> with only one</i> purpose.  What else is there?!"'],
    start:{x:9,y:1},
    elements:{
      podium:[
        {x:0,y:1},                    {x:9,y:1},

                      {x:4.5,y:3.5},

        {x:0,y:7},                    {x:9,y:7},
      ],
      exit:[
        {x:9,y:7}
      ],
      fuel:[

                           ,{x:7,y:2},{x:7.5,y:6}
      ],
      gem:[
                   {x:4.5,y:3.5},          {x:0,y:3.5},
      ]
    }
  },
  {
    text:['I see a man, he is wounded.'],
    start:{x:0,y:1},
    elements:{
      podium:[
        {x:0,y:1},

        {x:9,y:7}
      ],
      exit:[
        {x:9,y:7}
      ],
    },
  },
  {
    text:['Father?  Are you okay?'],
    start:{x:0,y:1},
    elements:{
      podium:[
        {x:0,y:1},

        {x:9,y:7}
      ],
      exit:[
        {x:9,y:7}
      ],
    }
  },
  {
    text:'Father?',
    start:{x:0,y:4},
    elements:{

      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[
        {x:3,y:1},{x:5.5,y:1},
      ],
      gem:[
        {x:1,y:1},
        {x:2,y:2},
        {x:1,y:3}
      ]
    }
  },
  {
    text:'"My son"',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'"You have done well, my son."',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'What do you mean?  I have done well?  What is going on?',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'"It is all okay, everything is as it is should be.  That was your best run yet."',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'Run?! what are you talking about?!  Father?!',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'*Muttering*..."Re-run the simulation... In reality, you only get one chance. <br><br><br> So let us be sure we are prepared."',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  },
  {
    text:'Father!!<br><br><br><br>Simulation completed in 1 min 36 secs."',
    start:{x:0,y:4},
    elements:{
      podium:[
        {x:0,y:4},{x:4.5,y:0},{x:9,y:4}
      ],
      exit:[
        {x:9,y:4}
      ],
      fuel:[],
      gem:[]
    }
  }
];

function Player(){
  this.x = 0, this.y = 0, this.vr = 0, this.rotation = 0, this.fuel = 1, this.friction = 0.91;

  this.launch = function(){
    var teleball = models.teleball;
    if(teleball.flying()){
      teleball.extinguish();
      this.teleport();
    } else if (this.hasFuel()) {
      teleball.launch(this.rotation);
      this.useFuel();
    }
  };
  this.restart = function(){
    models.level.loadLevel(models.level.current);
  };
  this.teleport =  function(){
    this.x = models.teleball.x;
    this.y = models.teleball.y;
  };
  this.move = function(){
    Math.floor(this.rotation+=this.vr);
    this.vr*=this.friction;
  };
  this.turnLeft = function(){
    this.vr-=0.15
  };
  this.turnRight = function(){
    this.vr+=0.15;
  };
  this.useFuel = function(){
    this.fuel>0 && (this.fuel-=1);
  };
  this.hasFuel = function(){
    return this.fuel>0;
  };
}

function Teleball() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy=0;
  this.a=4;

  this.move = function(){
    if((this.x>can.width+50||this.y>can.height+50||this.x<-50||this.y<-50)&&this.flying()||(!this.flying&&this.fuel===0)||views.player.frame.image.id =='player_drown'){
      if(models.level.level.text.indexOf('restart the level')==-1){
        models.level.level.text = _.sample([
          'It\'s not looking good',
          'They find your fried circuits among the rubble.',
          '<i>You only had one</i> chance to escape.',
          'With limited fuel, you did not last much longer.'
        ])+'... [R] to restart the level.';
      }
    }
    this.x += this.vx;
    this.y += this.vy;
  };
  this.flying = function(){
    return this.vx !== 0 || this.vy !== 0;
  };
  this.extinguish = function(){
    this.vx = 0;
    this.vy = 0;
  };
  this.launch = function(launchRotation){
    var theta = Util.radians(launchRotation);
    var u = Util.cartesianFromRadians(theta);
    this.x = models.player.x;
    this.y = models.player.y;
    this.vx = u.x*this.a;
    this.vy = u.y*this.a;
  };
  this.checkCollision =  function(){
    var that = this;
    var fuel = models.level.level.elements.fuel;
    var gems = models.level.level.elements.gem;
    var exit = models.level.level.elements.exit;
    exit && (exit = exit[0]);
    var podium = models.level.level.elements.podium;

    //fuel
    _.map(fuel,function(fuelElement,fuelIndex,fuelList){
      multipliedCoordinates = fuelElement.frame.multipliedCoordinates({x:fuelElement.x,y:fuelElement.y});
      if(Util.distance({x:that.x,y:that.y},multipliedCoordinates)<15){
        fuel.splice(fuelIndex,1);
        models.player.fuel++;
        snd_fuelPickup.currentTime = 0; snd_fuelPickup.play();
      }
    });

    //gems
    _.map(gems,function(gemsElement,gemsIndex,gemsList){
      multipliedCoordinates = gemsElement.frame.multipliedCoordinates({x:gemsElement.x,y:gemsElement.y});
      if(Util.distance({x:that.x,y:that.y},multipliedCoordinates)<15){
        gems.splice(gemsIndex,1);
        snd_gemPickup.currentTime = 0; snd_gemPickup.play();

      }
    });

    //podium
    var podiumEncountered;
    _.map(podium,function(podiumElement,podiumIndex,podiumList){
      multipliedCoordinates = podiumElement.frame.multipliedCoordinates({x:podiumElement.x,y:podiumElement.y});
      if(!that.flying()){
        if(Util.distance({x:that.x,y:that.y},multipliedCoordinates)<15){
          podiumEncountered = true;
          that.x = multipliedCoordinates.x;
          that.y = multipliedCoordinates.y;
          models.player.x = that.x;
          models.player.y = that.y;
        }
      }
    });
    if(!podiumEncountered && !this.flying()){
      if(views){
        if(views.player.frame.image.id !='player_drown'){
          views.player.frame.reset($('#player_drown')[0]).playspeed(1/3).repeat = false;
          snd_drown.play();
        }
      }
    }

    if(gems && gems.length === 0 || !gems){
      if(exit.frame.playspeed() === 0){
        exit.frame.playspeed(1/6);
        snd_exitReady.play();
      }


    }

    multipliedCoordinates = exit.frame.multipliedCoordinates({x:exit.x,y:exit.y});
    if(Util.distance({x:models.player.x,y:models.player.y},multipliedCoordinates)<15||Util.distance({x:that.x,y:that.y},multipliedCoordinates)<15 && !this.flying()){
      if(gems && gems.length<1 || !gems){
        models.level.level.complete = true;
        models.level.level.text = '[Space] to Proceed';
      }
    }
  };

}

function Level(){

  this.initialize = function(){
    this.current = 0;
    this.loadedLevel = [];
    this.loadedItems = [];
    this.data = [];
    this.loadLevel(this.current);
    this.frames = {};
  };

  //loads frames in the index in place of
  this.loadLevel = function(levelIndex){
    if( levelIndex === 0){
      //$(can).toggle('explode').effect('shake'); snd_explosion.play();
    }
    //deep clone
      this.level = _.clone(levels[levelIndex]);
      this.level.elements = _.clone(levels[levelIndex].elements);
      this.level.elements.gem = _.clone(levels[levelIndex].elements.gem);
      this.level.elements.fuel = _.clone(levels[levelIndex].elements.fuel);
      this.level.elements.exit = _.clone(levels[levelIndex].elements.exit);
    //initialise frames
    var elementScale = 2;
    _.map(this.level.elements,function(elementGroup,elementGroupName){
      _.map(elementGroup,function(element,index){
        element.frame = new Frame().scale(elementScale).reset($('#'+elementGroupName)[0],function(){
          this.x = element.x*this.width*this.scale();
          this.y = element.y*this.width*this.scale();
        });
      });
    });
    exit = this.level.elements.exit[0].frame.playspeed(0);

    //player and teleball positioning etc
    models.player.x=(this.level.start.x*elementScale*16),models.player.y=(this.level.start.y*elementScale*16);
    models.player.fuel=1;
    models.player.rotation=0;
    models.teleball.x=models.player.x;
    models.teleball.y=models.player.y;
    models.teleball.vx = 0;
    models.teleball.vy = 0;

    if(window.views){
      views.player.frame.reset($('#player')[0]).scale(2).playspeed(1/24);
    }

  };

  this.initialize();
}

function Keys(){
  this.down = [];
  var that = this;
  var annoyingDefaults = [39,37,39,40];
  onkeydown = function(e){
    that.down[e.keyCode] === undefined && (that.down[e.keyCode] = 0);
    preventAnnoyingDefaults(e);
  };
  onkeyup = function(e){
    delete that.down[e.keyCode];
  };
  preventAnnoyingDefaults = function(e){
    _.each(annoyingDefaults,function(arrowKey){
      e.keyCode == arrowKey && e.preventDefault();
    });
  };
}

var keys = new Keys();

models = {};
models.player = new Player();
models.teleball = new Teleball();
models.level = new Level();

views = {
  level:{
    model:models.level,
    actions:function(){

    },
    render:function(){
      _.map(this.model.level.elements,function(elementGroup,elementGroupName){
        _.map(elementGroup,function(element,index){
          element.frame.next();
        });
      });
    }
  },
  teleball:{
    model:models.teleball,
    radius:2,
    actions: function(){
      this.model.move();
      this.model.checkCollision();
    },
    render: function(){
      if(this.model.flying() || models.player.fuel>0){
        con = game.con;
          con.lineWidth = 2;
          //body
            if(this.model.flying()){
              con.beginPath();
              con.arc(this.model.x, this.model.y, this.radius, 0, 2 * Math.PI, false);
              con.stroke();
              con.closePath();
            }
          //target
            con.beginPath();
            con.arc(this.model.x, this.model.y, this.radius+5,Util.radians(this.model.rotation-15), Util.radians(this.model.rotation+15), false);//render target separately?
            con.stroke();
            con.closePath();

      }
    }
  },

  player : new function(){

    this.frame =  new Frame().reset($('#player')[0]).scale(2).playspeed(1/24);
    this.model = models.player; this.radius = 10;
    this.controls = {
      launch:38,
      turnLeft:37,
      turnRight:39,
      restart:82,
    };
    this.once = ['launch','restart'];

    this.actions = function(){

      _.map(this.controls,function(control,functionName){

        if(keys.down[control] !== undefined){
          if(!(_.contains(this.once,functionName)&&keys.down[control] >0)){
            this.model[functionName].call(this.model);
            keys.down[control]+=1;
          }
        }
      }, this);
      this.model.move();
    };

    this.render = function(){

      con = game.con;
        //body
          this.frame.x = this.model.x;
          this.frame.y = this.model.y-10;
          this.frame.next();

        if(this.frame.image.id=='player'){
          //target
          con.lineWidth = 2;
          con.beginPath();
          con.strokeStyle = 'RED';
          con.arc(this.model.x, this.model.y, this.radius+25,Util.radians(this.model.rotation-15), Util.radians(this.model.rotation+15), false);//render target separately?
          con.stroke();
          con.closePath();
        }

    };
  }

};

game = {

  views:views,
  models:models,

  restart: function(){
    this.restartDOM();
    this.restartLoop();
  },

  restartLoop: function(){
    clearInterval(this.loopID);
    this.loopID = window.setInterval(_.bind(this.loop,this),1000/60);
  },

  pauseLoop: function(){
    clearInterval(this.loopID);
  },

  restartDOM: function(){
    this.can = $('#can')[0];
    this.con = this.can.getContext('2d');
  },

  viewActions: function(){
    _.map(this.views,function(view){
      view.actions();
    });
  },

  renderViews: function(){
    this.con.save();
    this.con.clearRect ( 0,0,can.width,can.width );
    this.con.translate(50,50);
    //this.con.translate(can.width/2,can.height/2);
    _.map(this.views,function(view){
      view.render();
    });
    this.con.restore();
  },

  loop: function(){
    if(models.level.level.complete){

      if(keys.down[32] !== undefined){
        models.level.current = ((models.level.current+1)%levels.length);
        models.level.loadLevel(models.level.current);
      }
    } else {
      this.viewActions();
      this.renderViews();
    }
  }
};

$(window).load(function(){
  game.restart();
});
