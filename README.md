# Phaser JS Documentation

[Phaser JS](http://phaser.io/) is a free open source framework for Canvas and WebGL powered browser games.

The reason I chose Phaser JS for the teach-yo-self project is because I am a gamer at heart and I've always dreamed of creating my own game. Phaser is an excellent starting point for anyone looking to make their first game.

## What does Phaser do?

Phaser uses both a Canvas and WebGL internally and can automatically swap between them based on browser support. This allows for lightning fast rendering across desktop and mobile. Phaser uses and contributes to the Pixi.js library for rendering.

Phaser also parses and handles the loading of assets like images, sounds, sprite sheets, JSON data and XML, automatically. This way, loading the assets into a game only takes one line of code.

## Why use it?

Although there are many alternatives to Phaser like Stage.js, Kiwi.js, Pixi.js, and Babylon.js, creating a game using the Phaser framework is a walk in the park compared to the other game frameworks and it is one of the best out there.

## History

The first version of Phaser (according to GitHub) was on the 12th April in 2013.

The framework is constantly being developed and maintained by [Photon Storm](http://www.photonstorm.com/). As a result of rapid support, and a developer friendly API, Phaser is currently one of the most starred game frameworks on GitHub.

## Opinion

After building an extremely simple browser game with Phaser, I can confidently say that the technologies it uses are great. The framework is super easy to understand, even if you don't have a strong base code knowledge.

> The online documentation is also easy to follow

However, The biggest hurdle I had when researching this framework was how to get the server up and running in order to host the game. The "Getting Started" section in Phaser's tutorial said to "start up a server" but gave no instruction on how to structure the server or which one to use.

## Resources

If you want to research more about Phaser I would recommend to just check out Phaser's website. They have tons of tutorials in the "Learn" tab on how to make games of all different genres like a shoot-em-up, or platform game.

> Phaser also has its own [forum](https://phaser.io/community/forum) which was somewhat helpful in learning the framework.

Some sample interview questions about Phaser would be

- What is the basic structure for developing a game?

- What are the three Phaser functions required to load, create, and update the game state?

  - What do the functions do?

- What is the difference between Arcade physics, Ninja physics, and p2.js?

# Phaser JS Tutorial

This tutorial is a guide to create a very simple Phaser game for complete beginners.

## Getting Started

First, you will need a web server to view the game you are creating. Without a web server, some features would be disabled in your browser.

Download [XAMPP](https://www.apachefriends.org/xampp-files/7.1.4/xampp-osx-7.1.4-0-installer.dmg) for Mac

> For Windows: [XAMPP](https://www.apachefriends.org/xampp-files/7.1.4/xampp-win32-7.1.4-0-VC14-installer.exe)

Then, once XAMPP is installed and opened, click the "Manage Servers" tab. Apache Web Server should have a green circle next to it and say "Running."

Next, click on the Apache Web Server and click configure. Change the port number from 80 to 8080.

> This is needed because some programs use port 80 as its default port. Changing it prevents any problems this might bring.

Now open your terminal and navigate to the `XAMPP/htdocs` directory.

```bash
$ cd /Applications/XAMPP/htdocs
```

> This is the directory in which we will be creating our game. The Apache server will only work for your game if your app is inside of this folder.

Inside of the `htdocs` directory, create a new directory called `block_eater` and navigate into that directory.

```bash
$ mkdir block_eater
$ cd block_eater
```

Inside the `block_eater` directory, create two directories. One named `lib` and the other `asset` and open up the app in atom.

```bash
$ mkdir lib
$ mkdir asset
$ atom .
```

The "lib" folder is where we will house [Phaser JS.min](https://github.com/photonstorm/phaser-ce/releases/download/v2.7.10/phaser.min.js) so download the file, and drag into the lib folder.
The asset folder is where we will place our images for the game. Follow these links to download the two images we need for our game:
[Blue Square Sprite](https://raw.githubusercontent.com/Loonride/phaser-squares/master/asset/blue-square.png) | | [Red Square Sprite](https://raw.githubusercontent.com/Loonride/phaser-squares/master/asset/red-square.png)

> Right-click on each image and select "save as" and drag the downloaded images into the asset directory


Next, create an `index.html` file and a `game.js` file

```bash
$ touch index.html game.js
```

### Creating index.html

Our `index.html` file will only hold a simple boiler plate for our game. In atom, in your `index.html` file write the following code snippet:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Block Eater</title>
    <script src="lib/phaser.min.js"></script>
    <script src="game.js"></script>
</head>
<body>
</body>
</html>
```

> This is our complete "index.html" file. All we are doing here is making a title and linking to our "phaser.min.js" and "game.js" files.


## Creating Game Canvas

In order to create a game, we first must make a game board.

```js
var width = 800;
var height = 600;

var game = new Phaser.Game(width, height, Phaser.AUTO, null, {
  preload: preload,
  create: create,
  update: update
});
```

Here, the `game` variable creates a new instance of a Phaser.Game object. The first two parameters set the width and height of the game's canvas. The third parameter, `Phaser.AUTO` automatically tries to use WebGL to render the canvas, but will use canvas if WebGL is not available.

> You could also use `Phaser.WEBGL` or `Phaser.CANVAS` however, `Phaser.AUTO` is recommended.

The fourth parameter is used to specify what element the canvas will be appended to. `null` is used here since we want the canvas to be appended to the body of the page and not another element. The final parameter is an object that contains the three essential Phaser functions to create a game.

> Another option for the fourth parameter is to use an empty string '' in place of null. Both serve the same purpose.

Next lets initialize a few variables so we can use them later on.

```js
var player;
var food;
var arrows;
var speed = 175;
var score = 0;
var scoreText;
```

## Creating Essential Functions

Create three empty functions: `preload()`, `create()`, and `update()`.

```js
function preload() {

}
function create() {

}
function update() {

}
```

### Define Preload Function

The `preload()` function is used to load assets into the game. When your app starts, Phaser will automatically search for this function and initialize the block of code defined within it. In our `preload()` function, lets load in our two images.

```js
function preload() {
  game.load.image('player', 'asset/blue-square.png');
  game.load.image('food', 'asset/red-square.png');
}
```
> 'player' and 'food' are the names in which Phaser will recognize our assets.

While we're at it, lets change the background color of our canvas from white to grey so we can see the border of our canvas.
```js
function preload() {
  game.load.image('player', 'asset/blue-square.png');
  game.load.image('food', 'asset/red-square.png');

  game.state.backgroundColor = '#eee';
}
```

### Define Create Function

In the `create()` function we need to start up the arcade physics engine. The arcade engine is an extremely light-weight library that detects collision between elements.

```js
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
}
```

Initialize the keyboard arrows to create the game controls.

```js
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  arrows = game.input.keyboard.createCursorKeys();
}
```

Next we need to add our player sprite and anchor its position to the center of the player. We also have to enable the arcade physics for the sprite and make sure that the player can't leave the game canvas.

```js
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  arrows = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(width * 0.5, height * 0.5, 'player');
  player.anchor.set(0.5);

  game.physics.enable(player, Phaser.Physics.ARCADE);
  //makes player collide with edge of canvas
  player.body.collideWorldBounds = true;
}
```

Now that the player has been created, lets make the food. This is done by creating a group of multiple food objects.

```js
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  arrows = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(width * 0.5, height * 0.5, 'player');
  player.anchor.set(0.5);

  game.physics.enable(player, Phaser.Physics.ARCADE);
  //makes player collide with edge of canvas
  player.body.collideWorldBounds = true;

  food = game.add.group();
  //The `food.create()` parameters specify the x and y location of the object, and the 'food' key to specify the red square sprite.
  food.create(width * 0.1, height * 0.1, 'food');
  food.create(width * 0.1, height * 0.9, 'food');
  food.create(width * 0.2, height * 0.4, 'food');
  food.create(width * 0.8, height * 0.6, 'food');
  food.create(width * 0.9, height * 0.1, 'food');
  food.create(width * 0.9, height * 0.9, 'food');
  //set the anchors of the food sprites to their centers
  for (var i in food.children) {
    food.children[i].anchor.set(0.5);
  }
}
```

> `game.add.group()` is an object that holds a collection of children objects, acting like an array.

Don't forget to enable arcade physics for the food.

```js
  game.physics.enable(food, Phaser.Physics.ARCADE);
```

The last piece of our create function will be the score. This is done by calling the `add.text()` function on our game object, setting the x and y position of the text, and specifying the text's value to our 'score' variable we defined earlier.

```js
  game.physics.enable(food, Phaser.Physics.ARCADE);

  scoreText = game.add.text(5, 3, score);
```

### Define Update Function

The `update()` function is what Phaser calls continuously in order to read any state changes within our game. Let's use this to change our 'player' sprite's position based on keydown presses.


```js
function update() {
  //Moves player up or down based on which arrow key is pressed
  if (arrows.up.isDown) {
      player.body.velocity.y = -speed;
    } else if (arrows.down.isDown) {
      player.body.velocity.y = speed;
    } else {
      player.body.velocity.y = 0;
    }  
    //Moves player left or right based on which arrow key is pressed
    if (arrows.left.isDown) {
    player.body.velocity.x = -speed;
  } else if (arrows.right.isDown) {
    player.body.velocity.x = speed;
  } else {
    player.body.velocity.x = 0;
  }
}
```

That's almost it for our update function. The only thing we need to do now is create an `consume()` function that destroys the food when the player and the food overlap, then call it inside the update function.

```js
function consume(player, food) {
  //remove the piece of food
  food.kill();
  //update the score
  score++;
  scoreText.text = score;
}
```
Our `consume()` function takes two arguments: 'player' and 'food'. When this function is called, the food will be removed, or "killed", from the game board and our score will increase by one point.

The only thing left is to call, inside `update()`, the `consume()` function when the two sprites overlap.

```js
function update() {
  //Moves player up or down based on which arrow key is pressed
  if (arrows.up.isDown) {
      player.body.velocity.y = -speed;
    } else if (arrows.down.isDown) {
      player.body.velocity.y = speed;
    } else {
      player.body.velocity.y = 0;
    }  
    //Moves player left or right based on which arrow key is pressed
    if (arrows.left.isDown) {
    player.body.velocity.x = -speed;
  } else if (arrows.right.isDown) {
    player.body.velocity.x = speed;
  } else {
    player.body.velocity.x = 0;
  }

  game.physics.arcade.overlap(player, food, consume);
}
```
## Playing Your Game

To play the game, first make sure your Apache Web Server is running.
Then navigate to `http://localhost:8080/block_eater` to play your game.

If there are issues with the viewing or playing of your game, go back through the tutorial to see if you missed anything.
