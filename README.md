<h1 align="center"> Queen`s Attack </h1> <br>

<p align="center">
  <a href="">
    <img alt="example" title="example" src="https://s3.amazonaws.com/hr-challenge-images/0/1485426500-a4039ebb00-chess1.png" width="350px">
  </a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Stack of Technology](#stack)
- [Build Process](#build-process)
- [Some Configuration](#configuration)
- [Start the project](#start)

## Introduction

In game theory, it is important to know the number of squares a piece is able to be moved, without encountering other pieces.
The queen is the piece which has the most complete set of movement and covers the movement of other pieces, except for the Knight.
A graphical tool for this would help setting up scenarios to study.

## Stack of Technology

Here you can find information related to the technology used in FE:

* REACT v.16
* BEM
* JS
* ECMAScript 6
* Git hub
* Jest
* Enzyme
* Eslint
* Stylus

## Build Process

- Clone or download the repo [queens-attack](git@github.com:tatelloGbnt/queens-attack.git)
- `node` download latest version of node  [Node.js](https://nodejs.org/es/)
- `npm` download latest version of node  [NPM.js](https://www.npmjs.com/get-npm)
- `npm install` to install dependencies
- `npm start` to run the project

**Note: _Install and Configure Stylus_**

**Install Stylus**

1.- Install stylus globaly:

```npm install create-react-app-stylus --save-dev```

2.- Replace your `start`, `watch` and `build` scripts in your package.json:

```
scripts": {
    "build-css": "stylus -c src/***/**/*.styl --out src/static/css",
    "watch-css": "npm run build-css && stylus -c -w src/***/**/*.styl --out src/static/css",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

3.- Create `static/stylus` folder

4.- Execute ```npm start``` to compile the instructions

5.- It  Generate ```css``` folder containing all the .css files within your project

```
src/static/
        -----css
        -----stylus
```


6.- Import your `main.css` class to `index.js`:  `import './static/css/main.css`

## Some Configuration

**Eslint configuration**
Follow the next documentation to major knowledge [Eslint-rules](https://eslint.org/docs/rules/).

In this feature we configure some rules to have the best practices when we write code in  ESC 6/7, REACT
Some examples:

* Indent with 2 spaces
* Use single quotes rather double quotes
* Delete extra space
* Use correct spaces between {} () arrow function etc...
* order imports by relative and absolute imports

**Stylus Documentation**
Follow the next documentation to major knowledge [Stylus](https://stylus-lang.com/).

**BEM Documentation**
Follow the next documentation to major knowledge [BEM](http://getbem.com/introduction/).



## Start the project

To start the project  run: 

`npm start`

:+1: You can see in: [local](http://localhost:3000/)
