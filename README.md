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

# Phaser JS Example

## Getting Started

First, you will need a web server to view the game you are creating. Without a web server, some features would be disabled in your browser.

Download [XAMPP](https://www.apachefriends.org/xampp-files/7.1.4/xampp-osx-7.1.4-0-installer.dmg) for Mac

> For Windows: [XAMPP](https://www.apachefriends.org/xampp-files/7.1.4/xampp-win32-7.1.4-0-VC14-installer.exe)

Then, once XAMPP is installed and opened, click the "Manage Servers" tab. Apache Web Server should have a green circle next to it and say "Running."

Next, click on the Apache Web Server and click configure. Change the port number from 80 to 8080.

> This is needed because some programs use port 80 as its default port. Changing it prevents any problems this might bring.

Now open your terminal and navigate to the XAMPP/htdocs directory.

```bash
$ cd /Applications/XAMPP/htdocs
```

> This is the directory in which we will be creating our game. The Apache server will only work for your game if your app is inside of this folder.

Inside of the htdocs directory, create a new directory called "block_eater" and navigate into that directory.

```bash
$ mkdir block_eater
$ cd block_eater
```

Inside the "block_eater" directory, create two directories. One named "lib" and the other "asset" and open up the app in atom.

```bash
$ mkdir lib
$ mkdir asset
$ atom .
```

The "lib" folder is where we will house [Phaser JS.min](https://github.com/photonstorm/phaser-ce/releases/download/v2.7.10/phaser.min.js) so download the file, and drag into the lib folder.
The asset folder is where we will place our sprites for the game. Follow these links to download the two sprites we need for our game:
[Blue Square Sprite](https://raw.githubusercontent.com/Loonride/phaser-squares/master/asset/blue-square.png) | | [Red Square Sprite](https://raw.githubusercontent.com/Loonride/phaser-squares/master/asset/red-square.png)

> Right-click on each image and select "save as" and drag the downloaded files into the asset directory



Next, create an "index.html" file and a "game.js" file

```bash
$ touch index.html game.js
```

Our "index.html" file will only hold a simple boiler plate for our game. In atom, in your "index.html" file write the following code snippet:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Phaser Squares</title>
    <script src="lib/phaser.min.js"></script>
    <script src="game.js"></script>
</head>
<body>
</body>
</html>
```

> This is our complete "index.html" file. All we are doing here is making a title and linking to our "phaser.min.js" and "game.js" files.
