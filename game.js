//set width and height variables for game
var width = 800;
var height = 600;
//create game object and initialize the canvas
var game = new Phaser.Game(width, height, Phaser.AUTO, null, {
  preload: preload,
  create: create,
  update: update
});

//initialize some variables
var player;
var food;
var arrows;
var speed = 175;
var score = 0;
var scoreText;

function preload() {
  //set background color of canvas
  game.stage.backgroundColor = '#eee';

  //load assets
  game.load.image('player', 'asset/blue-square.png');
  game.load.image('food', 'asset/red-square.png');
}

function create() {
  //start arcade physics engine
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //initialize keyboard arrows for the game controls
  arrows = game.input.keyboard.createCursorKeys();

  //add player sprite
  player = game.add.sprite(width * 0.5, height * 0.5, 'player');
  //set anchor point to center of the sprite
  player.anchor.set(0.5);
  //enable physics for the player body
  game.physics.enable(player, Phaser.Physics.ARCADE);
  //make the player collide with the bounds of the world
  player.body.collideWorldBounds = true;

  //create a group called food and add 6 food pieces to the game
  food = game.add.group();
  food.create(width * 0.1, height * 0.1, 'food');
  food.create(width * 0.1, height * 0.9, 'food');
  food.create(width * 0.2, height * 0.4, 'food');
  food.create(width * 0.8, height * 0.6, 'food');
  food.create(width * 0.9, height * 0.1, 'food');
  food.create(width * 0.9, height * 0.9, 'food');
  //set the anchors of their sprites to the center
  for (var i in food.children) {
    food.children[i].anchor.set(0.5);
  }
  //enable physics for the food
  game.physics.enable(food, Phaser.Physics.ARCADE);

  //place score text on the screen
  scoreText = game.add.text(5, 3, score);
}

function update() {

  //move the player up or down based on keyboard arrows
  if (arrows.up.isDown) {
    player.body.velocity.y = -speed;
  } else if (arrows.down.isDown) {
    player.body.velocity.y = speed;
  } else {
    player.body.velocity.y = 0;
  }

  //move the player right or left based on keyboard arrows
  if (arrows.left.isDown) {
    player.body.velocity.x = -speed;
  } else if (arrows.right.isDown) {
    player.body.velocity.x = speed;
  } else {
    player.body.velocity.x = 0;
  }

  //call consume function when the player and a piece of food overlap
  game.physics.arcade.overlap(player, food, consume);
}

//consume function
function consume(player, food) {
  //remove the piece of food
  food.kill();
  //update the score
  score++;
  scoreText.text = score;
}
